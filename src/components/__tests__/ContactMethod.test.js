import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme'

import ContactMethod from '../ContactMethod';

describe('<ContactMethod />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContactMethod />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('has correct radio button values', () => {
      const wrapper = shallow(<ContactMethod />); 
      expect(wrapper.find("#email-radio-button")).toHaveValue("email");
      expect(wrapper.find("#phone-radio-button")).toHaveValue("phone");
      expect(wrapper.find("#mail-radio-button")).toHaveValue("mail");
  });
});