import { View, Text, ScrollView } from "react-native";
import React, { FC } from "react";

interface ILayout {
  isScrollView?: boolean;
}

const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
  return (
    <View>
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  );
};

export default Layout;
