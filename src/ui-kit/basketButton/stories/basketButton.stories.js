import React from 'react';
import { text } from '@storybook/addon-knobs';
import BasketButton from '../basketButton.component';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from '../../../reducers';

const store = createStore(mainReducer);

export default {
  title: 'Basket Button',
  component: BasketButton,
  decorators: [storyFn => <Provider store={store}>{storyFn()}</Provider>]
};

export const Original = () => (
  <BasketButton amount={text('Button text', '0')} />
);
