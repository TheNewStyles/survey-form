import React from 'react';
import ReactDOM from 'react-dom';
import ShirtSize from '../ShirtSize';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShirtSize />, div);
  ReactDOM.unmountComponentAtNode(div);
});