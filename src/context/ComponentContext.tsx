import React, { createContext, useState, useContext } from 'react';

interface ComponentContextType {
  selectedComponent: string | null;
  setSelectedComponent: (component: string) => void;
}

const ComponentContext = createContext<ComponentContextType | undefined>(undefined);

export function ComponentProvider({ children }: { children: React.ReactNode }) {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  return (
    <ComponentContext.Provider value={{ selectedComponent, setSelectedComponent }}>
      {children}
    </ComponentContext.Provider>
  );
}

export function useComponentContext() {
  const context = useContext(ComponentContext);
  if (undefined === context) {
    throw new Error('useComponentContext must be used within a ComponentProvider');
  }
  return context;
} 