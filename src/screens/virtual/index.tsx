import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Virtual: FC<any> = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>{'Virtual Screen'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
