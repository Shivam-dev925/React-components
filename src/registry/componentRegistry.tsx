import React from 'react';

const Input = () => (
  <input
    type="text"
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter text..."
  />
);

// Subcomponents
const ButtonPrimary = () => (
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Primary Button
  </button>
);

const ButtonSecondary = () => (
  <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
    Secondary Button
  </button>
);

const CardWithImage = () => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
    <img className="w-full" src="https://via.placeholder.com/150" alt="Card" />
    <h3 className="font-bold text-xl mb-2">Card with Image</h3>
    <p className="text-gray-700 text-base">
      This card has an image at the top.
    </p>
  </div>
);

export const componentRegistry: Record<string, React.ComponentType> = {
  buttonPrimary: ButtonPrimary,
  buttonSecondary: ButtonSecondary,
  cardWithImage: CardWithImage,
  input: Input,
}; 