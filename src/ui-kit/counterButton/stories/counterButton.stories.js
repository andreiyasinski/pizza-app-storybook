import React from 'react';
import { action } from '@storybook/addon-actions';
import CounterButton from '../counterButton.component';

export default {
  title: 'CounterButton',
  component: CounterButton,
};

export const Decrease = () => (
  <CounterButton symbol="-" onClick={action('clicked')} />
);

export const Increase = () => (
  <CounterButton symbol="+" onClick={action('clicked')} />
);
