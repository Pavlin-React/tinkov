import { View, Text } from "react-native";
import React, { FC, useState } from "react";
import tw from "twrnc";
import { styleCenter } from "../../layout/Layout";
import { useAuth } from "../../../hooks/useAuth";
import Loader from "../../ui/Loader";
import Field from "../../ui/Field";

const Auth: FC = () => {
  let { isLoading } = useAuth()
  let [isReg, setIsReg] = useState(false);
  return (
    <View style={styleCenter}>
      <View style={tw`mx-5 justify-center items-center h-full`}>
        <View style={tw`w-9/12`}>
          <Text style={tw`text-center text-gray-800 text-2xl font-bold mb-2`}>
            {isReg ? "Sign Up" : "Sign In"}
          </Text>
          {isLoading ? <Loader/> : <>
            <Field placeholder="Email" />
          </>}
        </View>
      </View>
    </View>
  );
};

export default Auth;
