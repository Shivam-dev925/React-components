import React from "react";
import { useComponentContext } from "../context/ComponentContext.tsx";
import ComponentList from "./ComponentList.tsx";

export const Drawer = () => {
  const { isDrawerOpen, setDrawerOpen } = useComponentContext();

  return (
    <div className={`fixed inset-0 bg-gray-500/75  z-50  ${isDrawerOpen ? 'block' : 'hidden'}`}>
      <div className="absolute w-1/2 h-full bg-white shadow-sm transition-transform duration-300" >
        {/* Drawer content goes here */}
        <div onClick={() => setDrawerOpen(false)} className="flex justify-end items-center p-4 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <ComponentList showBoxShadow={false}/>
      </div>
    </div>
  );
};