// src/components/Button.stories.js
import React from 'react';

import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  type:"primary",
  label: 'My Button',
}

export const Secondary = Template.bind({});
Secondary.args = {
    type:"secondary",
  label: 'My Button',
  backgroundColor:"Red"
}