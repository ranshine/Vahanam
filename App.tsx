import React from 'react';
import {View, Text} from 'react-native';
import codePush from 'react-native-code-push';

import config from 'react-native-config';

type Props = {};

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
    title: 'a new update is available',
  },
};

const App = (props: Props): JSX.Element => {
  const isFrom = config.ENV ?? '';
  return (
    <View style={{backgroundColor: 'yellow', height: 200}}>
      <Text style={{color: 'red', height: 300}}>{isFrom}</Text>
    </View>
  );
};
export default codePush(codePushOptions)(App);
