import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Label} from '../../components/atoms/text/label';
import {FontWeights} from '../../components/atoms/text';
import {heightPixel, widthPixel} from '../../utils/responsiveUtils';
import {CircledIcon} from '../../components/molecule/circledIcon';
import {icons} from '../../components/atoms/Icon';
import {ImageSources} from '../../assets/images';
import {screenDimension} from '../../utils/dimensionUtils';

export const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Label fontSize={12} fontWeight={FontWeights.bold} textColor="#1C1335">
          {'Your points'}
        </Label>
        <Label fontWeight={FontWeights.bold} textColor="#FA4A84">
          {'View more'}
        </Label>
      </View>
      <View style={styles.pointsContainer}>
        <View style={styles.rowContainer}>
          <CircledIcon iconName={icons.trophy} />
          <View style={styles.pointValue}>
            <Label
              fontSize={12}
              fontWeight={FontWeights.bold}
              textColor="#1C1335">
              {'Transfer from Prospa'}
            </Label>
            <Label fontWeight={FontWeights.bold} textColor="#8397AB">
              {'Points Balance'}
            </Label>
          </View>
        </View>
        <CircledIcon iconColor="#4CD964" iconName={icons.trophy}>
          <Label fontWeight={FontWeights.bold} textColor="#8397AB">
            {'L2'}
          </Label>
        </CircledIcon>
      </View>
      <View style={styles.essentialsContainer}>
        <Label fontSize={12} fontWeight={FontWeights.bold} textColor="#1C1335">
          {'Essentials'}
        </Label>
        <View style={[styles.rowContainer, styles.essentialImage]}>
          <Image
            style={{
              width: widthPixel(screenDimension.width * 0.8),
              height: heightPixel(124),
            }}
            resizeMode="stretch"
            source={ImageSources.transactionProgress}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightPixel(15),
    borderRadius: widthPixel(8),
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#4CD964',
    padding: widthPixel(10),
  },
  pointValue: {
    marginLeft: widthPixel(12),
  },
  container: {
    paddingHorizontal: widthPixel(16),
    marginTop: heightPixel(42),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  essentialsContainer: {
    marginTop: heightPixel(32),
  },
  essentialImage: {
    marginTop: heightPixel(18),
  },
});
