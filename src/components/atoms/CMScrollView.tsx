import React from "react";
import { ScrollView, StyleSheet } from "react-native";

interface IProps {
  children: React.ReactNode;
}

const CMScrollView: React.FC<IProps> = ({ children = null }) => {
  return <ScrollView style={styles.parent}>
    {children}
  </ScrollView>;
};

const styles = StyleSheet.create({
  parent: {
    flexGrow: 1,
  },
});

export default CMScrollView;
