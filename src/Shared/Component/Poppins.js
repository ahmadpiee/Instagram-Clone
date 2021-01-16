import React from 'react';
import {Text} from 'react-native';

export default function Poppins({title, size, color, type = 'Regular', style}) {
  return (
    <Text
      style={{
        color,
        fontSize: size,
        fontFamily: `Poppins-${type}`,
        ...style,
      }}>
      {title}
    </Text>
  );
}
