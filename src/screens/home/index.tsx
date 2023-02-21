import React, {FC, useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import Loader from '../../components/atoms/loader';
import Text from '../../components/atoms/text';
import Image from '../../components/atoms/image';
import {ApiClient} from '../../network/client';
import {END_POINTS} from '../../network/contants';
import {IProduct} from './interfaces';
import {Card} from '../../components/HOC/card';
import {screenDimension} from '../../utils/dimensionUtils';

const Home: FC<any> = (): React.ReactElement => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    //TODO: api
    const getProducts = async () => {
      const res = await ApiClient.get(END_POINTS.products);

      setProducts(res.products);
    };

    getProducts();
  }, []);

  const onProduct = (item: IProduct) => {
    const {thumbnail} = item;

    //TODO: open camera and super impose this thumnail
  };

  const renderProducts = useCallback(({item}: {item: IProduct}) => {
    const {thumbnail, title, description, price} = item;

    return (
      <TouchableOpacity onPress={() => onProduct(item)}>
        <Card style={styles.card}>
          <Image source={{uri: thumbnail}} style={styles.productImage} />
          <View>
            <Text numberOfLines={1}>{price}</Text>
            <Text numberOfLines={1}>{title}</Text>
            <Text numberOfLines={1}>{description}</Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }, []);

  const renderItemSeparator = useCallback(
    () => <View style={styles.separator} />,
    [],
  );

  if (!products) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{'Products:'}</Text>
      <FlatList
        scrollEnabled
        data={products}
        renderItem={renderProducts}
        numColumns={2}
        ItemSeparatorComponent={renderItemSeparator}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnContainer}
        keyExtractor={item => `${item.id}`}
        removeClippedSubviews
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  separator: {width: 24},
  columnContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 16,
  },
  card: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenDimension.width * 0.45,
    backgroundColor: 'white',
    padding: 8,
  },
  productImage: {
    width: 100,
    height: 100,
  },
  listContainer: {
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 16,
    marginHorizontal: 16,
  },
});

const home = React.memo(Home);
export {home as Home};
