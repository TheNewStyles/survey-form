import React from 'react';
import ReactDOM from 'react-dom';
import PoliticalParty from '../PoliticalParty';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PoliticalParty />, div);
  ReactDOM.unmountComponentAtNode(div);
});