import React from 'react';
// Subcomponents for Buttons
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

const ButtonWithImage = () => (
  <button className='flex justify-center items-center gap-1 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>
    <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Red_dot.svg" alt="Beautiful Image" />
    Button with Image
  </button>
);

const ButtonDisabled = () => (
  <button className="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded cursor-not-allowed" disabled>
    Disabled Button
  </button>
);

const ButtonLoading = () => (
  <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded flex items-center">
    <span className="loader mr-2"></span>
    Loading...
  </button>
);

// Subcomponents for Cards
const CardWithImage = () => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
    <img className="w-full" src="https://via.placeholder.com/150" alt="Card" />
    <h3 className="font-bold text-xl mb-2">Card with Image</h3>
    <p className="text-gray-700 text-base">
      This card has an image at the top.
    </p>
  </div>
);

const CardWithFooter = () => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
    <h3 className="font-bold text-xl mb-2">Card with Footer</h3>
    <p className="text-gray-700 text-base">This card has a footer.</p>
    <div className="mt-4">
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Action</button>
    </div>
  </div>
);

const CardWithHeader = () => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
    <h3 className="font-bold text-xl mb-2">Card with Header</h3>
    <p className="text-gray-700 text-base">This card has a header.</p>
  </div>
);

// Subcomponents for Inputs
const InputText = () => (
  <input type="text" className="border rounded p-2" placeholder="Text Input" />
);

const InputPassword = () => (
  <input type="password" className="border rounded p-2" placeholder="Password Input" />
);

const InputEmail = () => (
  <input type="email" className="border rounded p-2" placeholder="Email Input" />
);

const InputNumber = () => (
  <input type="text" className="border rounded p-2" placeholder="Number Input" onChange={(e) => {
    const value:string = e.target.value;
    const regex:RegExp = /^[0-9]*$/;
    if (!regex.test(value)) {
      e.target.value = value.slice(0, -1);
    }
  }} />
);

const InputTextarea = () => (
  <textarea className="border rounded p-2" placeholder="Textarea" rows={4}></textarea>
);

// Subcomponents for Modals
const ModalBasic = () => (
  <div className="modal bg-white rounded px-2 py-2">
    <h2>Basic Modal</h2>
    <p>This is a basic modal.</p>
  </div>
);

const ModalWithFooter = () => (
  <div className="modal bg-white rounded px-2 py-2">
    <h2>Modal with Footer</h2>
    <p>This modal has a footer.</p>
    <div className="modal-footer">
      <button className="bg-blue-500 text-white">Close</button>
    </div>
  </div>
);

const ModalWithHeader = () => (
  <div className="modal bg-white rounded px-2 py-2">
    <h2>Modal with Header</h2>
    <p>This modal has a header.</p>
  </div>
);

// Component Registry
export const componentRegistry = {
  buttonPrimary: ButtonPrimary,
  buttonSecondary: ButtonSecondary,
  buttonWithImage: ButtonWithImage,
  buttonDisabled: ButtonDisabled,
  buttonLoading: ButtonLoading,
  cardWithImage: CardWithImage,
  cardWithFooter: CardWithFooter,
  cardWithHeader: CardWithHeader,
  inputText: InputText,
  inputPassword: InputPassword,
  inputEmail: InputEmail,
  inputNumber: InputNumber,
  inputTextarea: InputTextarea,
  modalBasic: ModalBasic,
  modalWithFooter: ModalWithFooter,
  modalWithHeader: ModalWithHeader,
};

export default componentRegistry; 