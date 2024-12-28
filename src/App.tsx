import React from 'react';
import { ComponentShowcase } from './components/ComponentShowcase.tsx';
import { Drawer } from './components/Drawer.tsx';
import { useComponentContext } from './context/ComponentContext.tsx';

function App() {
  const { isDrawerOpen, setDrawerOpen } = useComponentContext();

  return (
    <div className="min-h-screen bg-gray-100">
     <Drawer />
      <header className="bg-white shadow-sm flex justify-items-center items-center px-2 sm:block">
        <div className="block sm:hidden grid gap-1 cursor-pointer" onClick={() => setDrawerOpen(!isDrawerOpen)}>
          <div className="bg-black h-1 w-7"></div>
          <div className="bg-black h-1 w-7"></div>
          <div className="bg-black h-1 w-7"></div>
        </div>
        <div className="max-w-7xl mx-auto py-4 px-4">
          <h1 className="text-2xl font-bold text-gray-900">React Components</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <ComponentShowcase />
      </main>
    </div>
  );
}

export default App;
