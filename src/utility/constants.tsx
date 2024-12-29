class AppConstants{

static  components = [
  {
    id: 'button',
    name: 'Buttons',
    subcomponents: [
      { id: 'buttonPrimary', name: 'Primary Button' },
      { id: 'buttonSecondary', name: 'Secondary Button' },
      {id:'buttonWithImage',name:'Button with image'}
    ],
  },
  {
    id: 'card',
    name: 'Cards',
    subcomponents: [
      { id: 'cardWithImage', name: 'Card with Image' },
    ],
  },
  { id: 'input', name: 'Inputs', subcomponents: [] },
];

}

export default AppConstants;