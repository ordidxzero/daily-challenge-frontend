import React from 'react';
import { View, Text } from 'react-native';

function AchievementLayout({
  data,
  children,
}: {
  data: number;
  children: React.ReactNode;
}) {
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
      <Text style={{ fontSize: 30 }}>{data}</Text>
    </View>
  );
}

export default React.memo(AchievementLayout);
