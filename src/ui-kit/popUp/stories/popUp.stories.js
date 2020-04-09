import React from 'react';
import PopUp from '../popUp.component';

export default {
  title: 'PopUp',
  component: PopUp,
};

export const Success = () => (
  <PopUp>
    <div style={{padding: 30, textAlign: "center"}}>
      <h2>Pizza is already coming to you!</h2>
      <p>Expect a courier within an hour</p>
    </div>
  </PopUp>
);
