// Modules
import React from 'react';
// Utils
// Components
import Calendar from '../components/main/Calendar';
import SwipeablePanel from '../components/main/SwipeablePanel';

function MainScreen() {
  return (
    <SwipeablePanel
      panelHeight={140}
      containerStyle={{
        justifyContent: 'flex-start',
      }}>
      <Calendar />
    </SwipeablePanel>
  );
}

export default React.memo(MainScreen);
