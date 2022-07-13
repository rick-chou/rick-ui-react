import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

describe('Home components', () => {
  it('basic', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
