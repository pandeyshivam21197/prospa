import React, {FC} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header} from './header';
import {heightPixel, widthPixel} from '../../utils/responsiveUtils';
import {Content} from './content';
import {Footer} from './footer';

export const Home: FC<any> = (): React.ReactElement => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerAndContent}>
        <Header />
        <Content />
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: heightPixel(12),
    backgroundColor: '#F7F9FC',
  },
  headerAndContent: {
    backgroundColor: '#FFF',
    borderBottomLeftRadius: widthPixel(30),
    borderBottomRightRadius: widthPixel(30),
    paddingTop: heightPixel(12),
    paddingBottom: heightPixel(50),
  },
});
