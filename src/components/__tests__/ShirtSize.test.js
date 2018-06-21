import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme'

import ShirtSize from '../ShirtSize';
import { wrap } from 'module';

describe('<ShirtSize />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShirtSize />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<ShirtSize />);
    const text = ['', 'X-Large', 'Large', 'Medium' , 'Small'];
    wrapper.find('option').forEach((node, i) => {
      expect(node.contains(text[i]));
    });
  })

});