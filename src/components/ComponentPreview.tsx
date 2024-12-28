import React from 'react';
import { useComponentContext } from '../context/ComponentContext.tsx';
import { componentRegistry } from '../registry/componentRegistry.tsx';

const ComponentPreview = () => {
  const { selectedComponent } = useComponentContext();

  if (!selectedComponent) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
        Select a component from the list to preview
      </div>
    );
  }

  const Component = componentRegistry[selectedComponent];

  return (
    <div className="bg-white rounded-lg shadow p-8">
      <h2 className="text-lg font-semibold mb-4">Preview</h2>
      <div className="border rounded-lg p-8 flex items-center justify-center">
        <Component />
      </div>
    </div>
  );
};

export default ComponentPreview; 