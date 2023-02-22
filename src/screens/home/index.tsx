import React, {FC, useCallback, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Loader from '../../components/atoms/loader';
import Text from '../../components/atoms/text';
import Button from '../../components/atoms/button';
import Image from '../../components/atoms/image';
import {ApiClient} from '../../network/client';
import {END_POINTS} from '../../network/contants';
import {IProduct} from './interfaces';
import {Card} from '../../components/HOC/card';
import {screenDimension} from '../../utils/dimensionUtils';
import {
  Camera,
  CameraPermissionStatus,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';

const Home: FC<any> = (): React.ReactElement => {
  const [products, setProducts] = useState(null);
  const [camerConfig, setCamerConfig] = useState({cameraVisible: false});

  const {cameraVisible} = camerConfig;

  const devices = useCameraDevices();
  const device = devices.back;

  const isDeviceAvailable = !!device;

  const onCameraGoBack = useCallback(() => {
    setCamerConfig(prevState => ({...prevState, cameraVisible: false}));
  }, []);

  const showPermissionBlockedPopup = () => {
    return Alert.alert(
      'The Camer permission has been denied earlier',
      'it can be enabled from the settings',
      [
        {
          text: 'Cancel',
          onPress: () => console.info('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Open Settings', onPress: () => Linking.openSettings()},
      ],
    );
  };

  const onProduct = useCallback(async (item: IProduct) => {
    const {thumbnail} = item;

    const cameraPermission: CameraPermissionStatus =
      await Camera.getCameraPermissionStatus();

    if (cameraPermission === 'authorized') {
      setCamerConfig(prevState => ({...prevState, cameraVisible: true}));
      //TODO
    } else {
      showPermissionBlockedPopup();
    }
  }, []);

  const renderProducts = useCallback(
    ({item}: {item: IProduct}) => {
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
    },
    [onProduct],
  );

  const renderItemSeparator = useCallback(
    () => <View style={styles.separator} />,
    [],
  );

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    console.log(frame, 'frame@@');
  }, []);

  useEffect(() => {
    //TODO: api
    const getProducts = async () => {
      const res = await ApiClient.get(END_POINTS.products);

      setProducts(res.products);
    };

    getProducts();
  }, []);

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
      {isDeviceAvailable && cameraVisible && (
        <View style={StyleSheet.absoluteFill}>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            frameProcessor={frameProcessor}
          />
          <Button
            onPress={onCameraGoBack}
            title={'Go Back'}
            color="#841584"
            accessibilityLabel="scan another"
          />
        </View>
      )}
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
