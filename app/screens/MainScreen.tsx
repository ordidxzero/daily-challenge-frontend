// Modules
import React from 'react';
// Utils
// Components
import Calendar from '../components/main/Calendar';
import SwipeablePanel from '../components/common/SwipeablePanel';

function MainScreen() {
  return (
    <SwipeablePanel
      containerStyle={{
        justifyContent: 'flex-start',
      }}>
      <Calendar />
    </SwipeablePanel>
  );
}

export default React.memo(MainScreen);
