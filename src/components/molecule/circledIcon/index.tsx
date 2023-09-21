import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from '../../atoms/Icon';
import {widthPixel} from '../../../utils/responsiveUtils';

interface ICircledIcon {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  children?: React.ReactNode;
}

export const CircledIcon: FC<ICircledIcon> = ({
  iconName,
  iconSize = 13,
  iconColor = 'white',
  children,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {children || (
          <Icon name={iconName} color={iconColor} size={widthPixel(iconSize)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: widthPixel(13),
  },
  container: {
    borderRadius: widthPixel(39 / 2),
    backgroundColor: '#CDD5DD',
    alignItems: 'center',
  },
});
