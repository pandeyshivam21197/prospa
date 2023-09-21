import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Icon, icons} from '../../components/atoms/Icon';
import {heightPixel, widthPixel} from '../../utils/responsiveUtils';
import {Label} from '../../components/atoms/text/label';
import {FontWeights} from '../../components/atoms/text';

interface IHeaderFilter {
  name: string;
  isSelected: boolean;
}

const filters: IHeaderFilter[] = [
  {name: 'Accounts', isSelected: true},
  {name: 'Cards', isSelected: false},
  {name: 'Loans', isSelected: false},
  {name: 'Savings', isSelected: false},
];

export const Header = () => {
  const renderFilter = ({item}: {item: IHeaderFilter}) => {
    const {name, isSelected} = item;

    return (
      <View
        style={[
          styles.filterContainer,
          isSelected ? styles.shadowContainer : {},
        ]}>
        <Label textColor="#2E3A59" fontWeight={FontWeights.semiBold}>
          {name}
        </Label>
      </View>
    );
  };

  const renderItemSep = () => <View style={styles.separater} />;

  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.companyContainer}>
          <View style={styles.userContainer}>
            <Icon
              style={styles.userIcon}
              name={icons.user}
              color={'white'}
              size={widthPixel(13)}
            />
          </View>
          <Label style={styles.companyName} fontWeight={FontWeights.bold}>
            {'DailyBread Ltd'}
          </Label>
          <Icon name={icons.downArrow} size={8} />
        </View>
        <View style={styles.supportContainer}>
          <Label
            textColor="#FA4A84"
            style={styles.support}
            fontWeight={FontWeights.bold}>
            {'Support'}
          </Label>
          <Icon color={'#FA4A84'} name={icons.circleAlert} size={12} />
        </View>
      </View>
      <FlatList
        style={styles.filterListContainer}
        data={filters}
        renderItem={renderFilter}
        keyExtractor={(data, index) => `${index}`} //use unique id
        horizontal
        contentContainerStyle={styles.filterListContent}
        ItemSeparatorComponent={renderItemSep}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    borderRadius: widthPixel(39 / 2),
    backgroundColor: '#CDD5DD',
    alignItems: 'center',
  },
  companyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthPixel(16),
  },
  companyName: {
    marginHorizontal: widthPixel(15),
  },
  supportContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthPixel(12),
    paddingVertical: widthPixel(0),
    backgroundColor: 'rgba(250, 74, 132, 0.20)',
    borderRadius: widthPixel(500),
  },
  support: {
    marginRight: widthPixel(6),
  },
  userIcon: {
    padding: widthPixel(13),
  },
  filterContainer: {
    paddingHorizontal: widthPixel(16),
    paddingVertical: heightPixel(6),
    borderRadius: widthPixel(20),
  },
  separater: {
    width: widthPixel(40),
  },
  shadowContainer: {
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.62,
    elevation: 4,
  },
  filterListContent: {
    paddingHorizontal: widthPixel(16),
  },
  filterListContainer: {
    marginTop: heightPixel(32),
  },
});
