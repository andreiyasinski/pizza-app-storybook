import React from 'react';
import { action } from '@storybook/addon-actions';
import FilterItem from '../filterItem.component';

export default {
  title: 'FilterItem',
  component: FilterItem,
  decorators: [storyFn => <ul style={{ listStyle: "none"}}>{storyFn()}</ul>]
};

const item = {
  id: 5,
  name: "With seafood"
};

export const Original = () => (
  <FilterItem
    item={item}
    onClick={action("clicked")}
  />
);
