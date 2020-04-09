import React from 'react';
import { action } from '@storybook/addon-actions';
import Extra from '../extra.component';

export default {
  title: 'Extra',
  component: Extra,
};

const item = {
  id: 25,
  name: "cheddar and parmesan cheeses",
  image: "images/extra-25.png",
  price: "2.40"
}

export const Original = () => (
  <Extra item={item} onChange={action("clicked")} />
);
