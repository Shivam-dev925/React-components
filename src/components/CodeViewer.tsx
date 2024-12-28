import React, { useState } from 'react';
import { useComponentContext } from '../context/ComponentContext.tsx';
import { componentRegistry } from '../registry/componentRegistry.tsx';
import ReactDOMServer from 'react-dom/server';
import ToastHelper from '../utility/ToastHelper.tsx';
import { ToastContainer } from 'react-toastify';


const CodeViewer = () => {
  const { selectedComponent } = useComponentContext();
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = (hoverState: boolean) => {
    setIsHovered(hoverState);
  };

  const handleCopy = async () => {
    if (formattedHtml) {
      try {
        await navigator.clipboard.writeText(formattedHtml); // Copy the formatted HTML directly to clipboard
        ToastHelper.showSuccess('Content copied successfully')
    } catch (err) {
        ToastHelper.showError(`Failed to copy text: ${err}`);

      }
    }
  };
  
  if (!selectedComponent) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
        Select a component to view its code
      </div>
    );
  }

  const Component = componentRegistry[selectedComponent];
  // Render component to HTML string
  const componentHtml = ReactDOMServer.renderToStaticMarkup(<Component />);

  // Format the HTML string for better readability (add indentation, newlines, etc.)
  const formattedHtml = componentHtml
    .replace(/></g, '>\n<')         // Insert line breaks between tags
    .replace(/\/>/g, '/>\n')        // Add line breaks for self-closing tags
    .replace(/class=/g, 'className=')  // Replace 'class' with 'className' for React
    .split('\n')                    // Split into an array of lines
    .map(line => '  ' + line)       // Add indentation to each line
    .join('\n');                    // Join the lines back into a single string

  return (
    <div className="bg-white rounded-lg shadow p-8">
      <h2 className="text-lg font-semibold mb-4">Source Code</h2>
      <div className='relative'>
      <pre
        className=" bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <code>{formattedHtml}</code>

        <button
          onClick={handleCopy}
          className={`absolute top-4 right-4 transition-opacity duration-300 ease-out opacity-0 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          title="Copy code"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      </pre>
      </div>
     
      <ToastContainer/>
    </div>
  );
};

export default CodeViewer;
