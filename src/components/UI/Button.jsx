

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{ padding: 10, borderRadius: 5,margin: 5, paddingVertical: 6, borderRadius: 6, alignSelf: "center",borderWidth:1,borderRightColor:'white',borderBottomColor:'white',borderLeftColor:'white',borderTopColor:'white'}, style]}>
      <Text style={{  fontWeight: "500", padding: 10, alignSelf: "center" ,color:'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
