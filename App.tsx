import React from 'react';
import {View, Text} from 'react-native';
import config from 'react-native-config';

type Props = {};

const App = (props: Props): JSX.Element => {
  const isFrom = config.ENV ?? '';
  return (
    <View>
      <Text>{isFrom}</Text>
    </View>
  );
};
export default App;
