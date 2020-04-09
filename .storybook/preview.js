import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from '../src/reducers';
import { addDecorator } from '@storybook/react';
import { HashRouter as Router} from 'react-router-dom';

const store = createStore(mainReducer);

const styles = {
  fontFamily: "sans-serif",
  fontSize: "14px",
  fontWeight: "400"
}

addDecorator(storyFn => (
  <Provider store={store}>
    <Router>
      <div style={styles}>{storyFn()}</div>
    </Router>
  </Provider>
));
