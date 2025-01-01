class AppConstants{

static  components = [
  {
    id: 'button',
    name: 'Buttons',
    subcomponents: [
      { id: 'buttonPrimary', name: 'Primary Button' },
      { id: 'buttonSecondary', name: 'Secondary Button' },
      { id: 'buttonWithImage', name: 'Button with Image' },
      { id: 'buttonDisabled', name: 'Disabled Button' },
      { id: 'buttonLoading', name: 'Loading Button' },
    ],
  },
  {
    id: 'card',
    name: 'Cards',
    subcomponents: [
      { id: 'cardWithImage', name: 'Card with Image' },
      { id: 'cardWithFooter', name: 'Card with Footer' },
      { id: 'cardWithHeader', name: 'Card with Header' },
    ],
  },
  {
    id: 'input',
    name: 'Inputs',
    subcomponents: [
      { id: 'inputText', name: 'Text Input' },
      { id: 'inputPassword', name: 'Password Input' },
      { id: 'inputEmail', name: 'Email Input' },
      { id: 'inputNumber', name: 'Number Input' },
      { id: 'inputTextarea', name: 'Textarea' },
    ],
  },
  {
    id: 'modal',
    name: 'Modals',
    subcomponents: [
      { id: 'modalBasic', name: 'Basic Modal' },
      { id: 'modalWithFooter', name: 'Modal with Footer' },
      { id: 'modalWithHeader', name: 'Modal with Header' },
    ],
  },
];

}

export default AppConstants;