import React from 'react';
import ReactDOM from 'react-dom';
import ContactMethod from '../ContactMethod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactMethod />, div);
  ReactDOM.unmountComponentAtNode(div);
});