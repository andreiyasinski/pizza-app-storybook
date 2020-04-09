import React from 'react';
import { text } from '@storybook/addon-knobs';
import Popover from '../popover.component';

export default {
  title: 'Popover',
  component: Popover,
};

export const Original = () => (
  <div style={{position: "relative", display: "flex", justifyContent: "center", width: 100, margin: "0 auto"}}>
    <Popover>{text('Popover text', 'Pizza added to the basket!')}</Popover>
  </div>
);
