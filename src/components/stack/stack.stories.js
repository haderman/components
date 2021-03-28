import React from 'react';
import Stack from './stack.component';
import { Space } from './types';

export default {
  title: 'Example/Stack',
  component: Stack,
  argTypes: {
    space: {
      description: 'add a margin bottom to all direct children',
      control: {
        type: 'radio',
        options: Space,
      },
      defaultValue: Space[0]
    }
  },
};


export const Basic = (args) => (
  <Stack {...args}>
    <div style={{ width: 100, height: 100, background: 'lightgray' }} />
    <div style={{ width: 100, height: 100, background: 'lightgray' }} />
    <div style={{ width: 100, height: 100, background: 'lightgray' }} />
    <div style={{ width: 100, height: 100, background: 'lightgray' }} />
  </Stack>
);
