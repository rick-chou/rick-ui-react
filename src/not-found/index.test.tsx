import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './index';

describe('NotFound components', () => {
  it('basic', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
