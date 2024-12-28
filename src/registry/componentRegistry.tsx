import React from 'react';

// Example components
const Button = () => (
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Click me
  </button>
);

const Card = () => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
    <h3 className="font-bold text-xl mb-2">Card Title</h3>
    <p className="text-gray-700 text-base">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
  </div>
);

const Input = () => (
  <input
    type="text"
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter text..."
  />
);

export const componentRegistry: Record<string, React.ComponentType> = {
  button: Button,
  card: Card,
  input: Input,
}; 