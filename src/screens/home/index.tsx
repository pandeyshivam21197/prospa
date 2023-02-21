import React, {FC} from 'react';
import Text from '../../components/atoms/text';

const Home: FC<any> = (): React.ReactElement => {
  return <Text>{'Home Screen'}</Text>;
};

const home = React.memo(Home);
export {home as Home};
