import React from 'react';
import {
  View,
  Box,
  Cylinder,
  Sphere,
  StyleSheet
} from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Box
          dimWidth={1}
          dimDepth={1}
          dimHeight={1}
          style={{
            color: 'green', 
            transform : [{translate: [-3, 0.5, -3]}]
          }}
        />
      </View>
    );
  }
};
