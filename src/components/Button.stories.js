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
console.log("huhghfd",Default);
Primary.args = {
  label: 'My Button',
}

export const Secondary = Template.bind({});
console.log("huhghfd",Default);
Secondary.args = {
  label: 'My Button',
}