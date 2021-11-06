import React, { ReactNode } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { CMView } from "../atoms";

interface IProps {
  children: ReactNode;
  style?: object;
  loading: boolean;
  refresh?: () => void;
  linearGradient?: boolean;
}

const CMScrollView: React.FC<IProps> = ({
  children = null,
  style = null,
  loading = false,
  refresh = () => null,
  linearGradient = false,
}) => {
  return (
    <CMView contentView includeLinearGradient={linearGradient}>
      <ScrollView
        style={style}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
      >
        {children}
      </ScrollView>
    </CMView>
  );
};

export default CMScrollView;
