import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Comments from '../Comments';

describe('<Comments />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comments />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('has correct welcome message', () => {
    const wrapper = mount(<Comments />);
    const welcome = <textarea name="comments" className="comments-text-area" rows="10" cols="50" placeholder="Please write down any questions or comments here. Thank you!"></textarea>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
});