import React from 'react';
import { View, Text } from 'react-native';
import useReduxState from '../../../hooks/common/useReduxState';

function AchievementLayout({
  data,
  children,
}: {
  data: number;
  children: React.ReactNode;
}) {
  const {
    main: { darkMode },
  } = useReduxState();
  return (
    <View style={{ alignItems: 'center' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {children}
      </View>
      <Text style={[{ fontSize: 30 }, darkMode && { color: 'white' }]}>
        {data}
      </Text>
    </View>
  );
}

export default React.memo(AchievementLayout);
