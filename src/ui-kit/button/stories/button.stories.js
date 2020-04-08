import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Button from '../button.component';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <Button
    theme="primary"
    onClick={action('clicked')}
  >
    {text('Button text', 'Buy')}
  </Button>
);

export const Secondary = () => (
  <Button
    theme="secondary"
    onClick={action('clicked')}
  >
    {text('Button text', 'Order now')}
  </Button>
);

export const Disabled = () => (
  <Button
    isDisabled={true}
    theme="secondary"
    onClick={action('clicked')}
  >
    {text('Button text', 'Order now')}
  </Button>
);