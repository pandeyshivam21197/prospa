import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {heightPixel, widthPixel} from '../../utils/responsiveUtils';
import {Title} from '../../components/atoms/text/title';
import {FontWeights} from '../../components/atoms/text';
import {SubHeading} from '../../components/atoms/text/subHeading';
import {Label} from '../../components/atoms/text/label';
import {Icon, icons} from '../../components/atoms/Icon';

interface IContentProps {}

export const Content: FC<IContentProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Title textColor="#1C1335" fontWeight={FontWeights.bold}>
          {'N22,250,000'}
          <SubHeading
            lineHeight={26}
            textColor="#8397AB"
            fontWeight={FontWeights.bold}>
            {'.98'}
          </SubHeading>
        </Title>
        <Label fontWeight={FontWeights.bold} textColor="#FA4A84">
          {'View accounts'}
        </Label>
      </View>
      <Label fontWeight={FontWeights.bold} textColor="#8397AB">
        {'Available balance'}
      </Label>
      <View style={styles.acountFunds}>
        <View style={[styles.switchAccount, styles.transferFund]}>
          <Label
            fontWeight={FontWeights.bold}
            fontSize={12}
            textColor="#FA4A84">
            {'Transfer funds'}
          </Label>
        </View>
        <View style={styles.separater} />
        <View style={[styles.switchAccount, styles.shareAccount]}>
          <Label
            fontWeight={FontWeights.bold}
            fontSize={12}
            textColor="#1C1335">
            {'Share account'}
          </Label>
        </View>
      </View>
      <View style={styles.transactionHeading}>
        <Label fontWeight={FontWeights.bold} fontSize={12} textColor="#2E3A59">
          {'Transactions'}
        </Label>
        <Label fontWeight={FontWeights.bold} textColor="#FA4A84">
          {'View all'}
        </Label>
      </View>
      <View style={styles.transaction}>
        <View style={styles.fundIcon}>
          <View style={styles.userContainer}>
            <Icon
              style={styles.userIcon}
              name={icons.paymentTab}
              color={'white'}
              size={widthPixel(13)}
            />
          </View>
          <View>
            <Label
              fontSize={12}
              fontWeight={FontWeights.bold}
              textColor="#192038">
              {'Transfer from Prospa'}
            </Label>
            <Label fontWeight={FontWeights.normal} textColor="#8F9BB3">
              {'Today, 8:40AM'}
            </Label>
          </View>
        </View>
        <Label fontWeight={FontWeights.semiBold} textColor="#192038">
          {'- 1.33 USD'}
        </Label>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: heightPixel(50),
    paddingHorizontal: widthPixel(16),
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: heightPixel(12),
  },
  acountFunds: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightPixel(40),
  },
  switchAccount: {
    borderRadius: widthPixel(8),
    flex: 1,
    paddingVertical: heightPixel(14),
    alignItems: 'center',
  },
  transferFund: {
    backgroundColor: '#FEC9DB',
  },
  shareAccount: {
    backgroundColor: '#F7F9FC',
  },
  separater: {
    width: widthPixel(12),
  },
  transactionHeading: {
    marginTop: heightPixel(42),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: heightPixel(14),
    borderRadius: widthPixel(12),
    backgroundColor: '#F7F9FC',
    paddingHorizontal: widthPixel(14),
    paddingVertical: heightPixel(18),
  },
  userContainer: {
    borderRadius: widthPixel(39 / 2),
    backgroundColor: '#CDD5DD',
    alignItems: 'center',
    marginRight: widthPixel(12),
  },
  userIcon: {
    padding: widthPixel(13),
  },
  fundIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
