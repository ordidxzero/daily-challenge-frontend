import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ifIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';

const WIDTH = 70;
const HEIGHT = 35;

function TodoCreateButton({ onPress }: { onPress: any }) {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 20,
        left: '50%',
        width: WIDTH,
        height: HEIGHT,
        borderRadius: HEIGHT / 2,
        transform: [{ translateX: -WIDTH / 2 }],
        ...ifIphoneX({ marginBottom: getBottomSpace() }, {}),
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      }}
      onPress={onPress}>
      <View>
        <Text style={{ fontSize: 12 }}>추가하기</Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(TodoCreateButton);
