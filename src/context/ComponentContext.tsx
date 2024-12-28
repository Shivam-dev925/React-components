import React, { createContext, useState, useContext } from 'react';

interface ComponentContextType {
  selectedComponent: string | null;
  setSelectedComponent: (component: string) => void;
  isDrawerOpen:Boolean;
  setDrawerOpen: (status:boolean)=>void;
}

const ComponentContext = createContext<ComponentContextType | undefined>(undefined);

export function ComponentProvider({ children }: { children: React.ReactNode }) {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [isDrawerOpen,setDrawerOpen]= useState<Boolean>(false);

  return (
    <ComponentContext.Provider value={{ selectedComponent, setSelectedComponent,isDrawerOpen,setDrawerOpen }}>
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