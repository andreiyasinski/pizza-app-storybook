import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from '../../../../reducers';
import DoughSelector from '../doughSelector.component';

const store = createStore(mainReducer);

export default {
  title: 'DoughSelector',
  component: DoughSelector,
  decorators: [storyFn => <Provider store={store}>{storyFn()}</Provider>]
};

export const Traditional = () => {
  const [duoghType, setDuoghType] = useState("tipe1")

  return (
    <DoughSelector
      changeDoughType={(e) => {setDuoghType(e.target.value)}}
      duoghType={duoghType}
      size={duoghType}
    />
  )
};

export const ThinDisabled = () => (
  <DoughSelector
    changeDoughType={() => {}}
    duoghType="type1"
    size="small"
  />
);