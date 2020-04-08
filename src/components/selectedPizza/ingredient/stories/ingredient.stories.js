import React from 'react';
import { action } from '@storybook/addon-actions';
import Ingredient from '../ingredient.component';

export default {
  title: 'Ingredient',
  component: Ingredient,
  decorators: [storyFn => <ul style={{ listStyle: "none"}}>{storyFn()}</ul>]
};

const item = {
  id: 5,
  name: "tomatoes",
  image: "",
  price: "",
  removable: true
}

export const Original = () => (
  <Ingredient
    onChange={action("clicked")}
    item={item}
  />
);
