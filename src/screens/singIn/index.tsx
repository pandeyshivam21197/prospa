import React, {FC} from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {ImageSources} from '../../assets/images';
import {useAppDispatch} from '../../reduxStore/hooks';
import {setIsLoggedIn} from '../../reduxStore/reducers/singInReducer';

export const SignIn: FC<any> = (): React.ReactElement => {
  //PS: the designs are not proper, not able to style individual elements:
  //link: https://www.figma.com/file/Ivf618He7WQ7kihtlEElTC/Prospa-%7C-Mobile-Assessment?type=design&node-id=1-3&mode=dev

  const dispatch = useAppDispatch();

  const onLogin = () => {
    dispatch(setIsLoggedIn(true));
  };

  return (
    <TouchableOpacity onPress={onLogin} style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          source={ImageSources.signInBackground}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
