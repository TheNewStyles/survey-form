import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme'

import Interests from '../Interests';

describe('<Interests />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Interests />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('has correct unchecked checkboxes', () => {
    const wrapper = mount(<Interests />); 
    expect(wrapper.find('#coding')).not.toBeChecked();
    expect(wrapper.find('#music')).not.toBeChecked();
    expect(wrapper.find('#golf')).not.toBeChecked();
    expect(wrapper.find('#camping')).not.toBeChecked();
    expect(wrapper.find('#rugby')).not.toBeChecked();
    expect(wrapper.find('#food')).not.toBeChecked();
    expect(wrapper.find('#baseball')).not.toBeChecked();
  });

  it('has correct unchecked checkboxes', () => {
    const wrapper = mount(<Interests />); 
    wrapper.find('input').forEach((node) => {
      expect(node).not.toBeChecked();
    });
  });
  
});

