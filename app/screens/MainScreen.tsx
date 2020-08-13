// Modules
import React from 'react';
// Components
import Calendar from '../components/main/Calendar';
import FloatingPanelWrapper from '../components/common/FloatingPanelWrapper';

function MainScreen() {
  return (
    <FloatingPanelWrapper
      containerStyle={{
        justifyContent: 'flex-start',
      }}>
      <Calendar />
    </FloatingPanelWrapper>
  );
}

export default React.memo(MainScreen);
