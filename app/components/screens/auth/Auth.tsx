import { View, Text } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
import { styleCenter } from "../../layout/Layout";

const Auth: FC = () => {
  return (
    <View style={styleCenter}>
      <View style={tw`mx-5 justify-center items-center h-full`}>
        <View style={tw`w-9/12`} >
          <Text>Auth</Text>
        </View>
      </View>
    </View>
  );
};

export default Auth;
