import React from 'react';
import { shallow } from 'enzyme';
import { IconBlog, IconGithub, IconJueJin } from './index';

describe('Icon components', () => {
  it('basic', () => {
    const wrapper = shallow(<IconBlog />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('style', () => {
    const wrapper = shallow(<IconGithub style={{ height: '20px' }} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('style', () => {
    const wrapper = shallow(<IconJueJin style={{ width: '20px' }} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
