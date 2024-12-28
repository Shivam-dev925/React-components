import React from 'react';
import { useComponentContext } from '../context/ComponentContext.tsx';

const components = [
  { id: 'button', name: 'Button' },
  { id: 'card', name: 'Card' },
  { id: 'input', name: 'Input' },
  // Add more components as needed
];

const ComponentList: React.FC<{showBoxShadow?: boolean}> = ({showBoxShadow = true}) => {
  const { selectedComponent, setSelectedComponent ,setDrawerOpen} = useComponentContext();

  return (
    <div className={`bg-white rounded-lg ${showBoxShadow?'shadow':''} p-4`}>
      <h2 className="text-lg font-semibold mb-4">Components</h2>
      <ul className="space-y-2">
        {components.map((component) => (
          <li key={component.id}>
            <button
              className={`w-full text-left px-4 py-2 rounded ${
                selectedComponent === component.id
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-100'
              }`}
              onClick={()=>{
               setDrawerOpen(false);
               setSelectedComponent(component.id)
              }
                
               }
            >
              {component.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentList; 