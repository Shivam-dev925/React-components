import React, { useState } from 'react';
import { useComponentContext } from '../context/ComponentContext.tsx';
import constants from '../utility/constants.tsx';

const ComponentList: React.FC<{ showBoxShadow?: boolean }> = ({ showBoxShadow = true }) => {
  const { selectedComponent, setSelectedComponent, setDrawerOpen } = useComponentContext();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleComponentClick = (componentId: string) => {
    setDrawerOpen(false);
    setSelectedComponent(componentId);
  };

  const handleSubcomponentClick = (subcomponentId: string) => {
    setDrawerOpen(false);
    setSelectedComponent(subcomponentId);
  };

  return (
    <div className={`bg-white rounded-lg ${showBoxShadow ? 'shadow' : ''} p-4`}>
      <h2 className="text-lg font-semibold mb-4">Components</h2>
      <ul className="space-y-2">
        {constants.components.map((component) => (
          <li key={component.id}>
            <div className="flex justify-between items-center" onClick={() => setOpenDropdown(openDropdown === component.id ? null : component.id)}
            >
              <span
                className={`w-full text-left px-4 py-2 rounded ${selectedComponent === component.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                  }`}
                  onClick={
                   ()=>{
if(0===component.subcomponents.length){
  handleComponentClick(component.id);
}
                   }
                  }
              >
                {component.name}
              </span>
              {component.subcomponents.length > 0 && (
                <button
                  className="ml-2 py-1 text-gray-500"
                >
                  {openDropdown === component.id ? '▲' : '▼'}
                </button>
              )}
            </div>
            {openDropdown === component.id && (
              <ul className="ml-4 space-y-1">
                {component.subcomponents.map((subcomponent) => (
                  <li key={subcomponent.id}>
                    <button
                      className={`w-full text-left px-4 py-2 rounded ${selectedComponent === subcomponent.id ? 'bg-blue-300 text-white' : 'hover:bg-gray-100'
                        }`}
                      onClick={() => handleSubcomponentClick(subcomponent.id)}
                    >
                      {subcomponent.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentList; 