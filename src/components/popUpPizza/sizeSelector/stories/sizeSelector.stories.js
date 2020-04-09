import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from '../../../../reducers';
import SizeSelector from '../sizeSelector.component';

const store = createStore(mainReducer);

export default {
  title: 'SizeSelector',
  component: SizeSelector,
  decorators: [storyFn => <Provider store={store}>{storyFn()}</Provider>]
};

export const Original = () => {
  const [size, setSize] = useState("small")

  return (
    <SizeSelector
      changeSize={(e) => setSize(e.target.value)}
      size={size}
    />
  )
};