import React from 'react';
import ComponentList from './ComponentList.tsx';
import ComponentPreview from '../components/ComponentPreview.tsx';
import CodeViewer from '../components/CodeViewer.tsx';

export const ComponentShowcase = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 hidden sm:block">
        <ComponentList />
      </div>
      <div className="col-span-12 sm:col-span-9 space-y-4">
        <ComponentPreview />
        <CodeViewer />
      </div>
    </div>
  );
};

