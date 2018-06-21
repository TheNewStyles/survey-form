import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';

import Form from '../Form';
import UserInfo from '../UserInfo';
import ShirtSize from '../ShirtSize';
import ContactMethod from '../ContactMethod';
import PoliticalParty from '../PoliticalParty';
import Interests from '../Interests';
import Comments from '../Comments';
import Submit from '../Submit';


describe('<Form />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('contains UserInfo', () => {
    const wrapper = mount(<Form />); 
    expect(wrapper).toContainReact(<UserInfo />);
  }); 
  
  it('contains ShirtSize', () => {
    const wrapper = mount(<Form />); 
    expect(wrapper).toContainReact(<ShirtSize />);
  }); 

  it('contains ContactMethod', () => {
    const wrapper = mount(<Form />); 
    expect(wrapper).toContainReact(<ContactMethod />);
  }); 

  it('contains PoliticalParty', () => {
    const wrapper = mount(<Form />); 
    expect(wrapper).toContainReact(<PoliticalParty />);
  }); 

  it('contains Interests', () => {
    const wrapper = mount(<Form />); 
    expect(wrapper).toContainReact(<Interests />);
  }); 

  it('contains Comments', () => {
    const wrapper = mount(<Form />); 
    expect(wrapper).toContainReact(<Comments />);
  }); 

  it('contains Submit', () => {
    const wrapper = mount(<Form />); 
    expect(wrapper).toContainReact(<Submit />);
  }); 

});