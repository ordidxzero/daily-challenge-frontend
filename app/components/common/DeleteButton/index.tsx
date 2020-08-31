import React from 'react';
import { Button } from 'react-native-paper';
import styles from './styles';

function DeleteButton({
  type,
  onPress,
  loading = false,
}: {
  onPress: any;
  type: 'panel' | 'screen';
  loading?: boolean;
}) {
  return (
    <Button
      mode="contained"
      disabled={loading}
      labelStyle={{ color: 'white' }}
      contentStyle={[
        styles.defaultContentStyle,
        type === 'screen' && styles.screenContentStyle,
      ]}
      style={[
        styles.default,
        type === 'screen' && styles.screen,
        loading && { opacity: 0.5 },
      ]}
      onPress={onPress}>
      삭제하기
    </Button>
  );
}

export default React.memo(DeleteButton);
