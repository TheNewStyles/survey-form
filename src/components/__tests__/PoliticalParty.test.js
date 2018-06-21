import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme'

import PoliticalParty from '../PoliticalParty';

describe('<PoliticalParty />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PoliticalParty />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('has correct labels', () => {
    const parties = ['Democrat', 'Republican', 'Libertarian'];
    const wrapper = mount(<PoliticalParty />); 
    wrapper.find('label').forEach((node, i) => {
      expect(node).toIncludeText(parties[i]);
    });
  });

});