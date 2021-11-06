import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Modal from "react-native-modal";
import { MODAL_DIRECTION } from "../../constants/Types";
import { PLATFORM, THEME } from "../../constants";
import { DIMENSIONS_CALCULATOR } from "../../util";
import ExtraDimensions from "react-native-extra-dimensions-android";

const deviceWidth = () => {
  if (PLATFORM.isIOS) {
    return DIMENSIONS_CALCULATOR.getDeviceWidth();
  } else {
    return ExtraDimensions.get("REAL_WINDOW_WIDTH");
  }
};

const deviceHeight = () => {
  if (PLATFORM.isIOS) {
    return DIMENSIONS_CALCULATOR.getDeviceHeight();
  } else {
    return ExtraDimensions.get("REAL_WINDOW_HEIGHT");
  }
};

interface IProps {
  children: React.ReactNode;
  show: boolean;
  toggle: () => void;
  direction: MODAL_DIRECTION;
  hide: () => void;
}

const CMSwipeModal: React.FC<IProps> = ({
  children = null,
  show = false,
  toggle = () => null,
  direction = MODAL_DIRECTION.right,
  hide = () => null,
}) => {
  const isRightSlide = direction === MODAL_DIRECTION.right;
  const animationIn = isRightSlide ? "slideInRight" : "slideInLeft";
  const animationOut = isRightSlide ? "slideOutRight" : "slideOutLeft";

  const modalStyle = [
    styles.parent,
    isRightSlide ? styles.rightSlide : styles.leftSlide,
  ];

  const propagateSwipe =
    direction !== MODAL_DIRECTION.up && direction !== MODAL_DIRECTION.down;

  return (
    <Modal
      swipeDirection={direction}
      statusBarTranslucent
      propagateSwipe={propagateSwipe}
      coverScreen
      onSwipeComplete={toggle}
      onBackButtonPress={hide}
      onBackdropPress={hide}
      isVisible={show}
      backdropColor={THEME.Colors.black}
      backdropOpacity={0.7}
      animationIn={animationIn}
      animationOut={animationOut}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={1000}
      style={modalStyle}
      deviceWidth={deviceWidth()}
      deviceHeight={deviceHeight()}
    >
      <View
        style={{
          backgroundColor: THEME.Colors.darkTurquoise,
          width: "75%",
          flex: 1,
          paddingHorizontal: 10,
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  parent: {
    marginBottom: 0,
    marginTop: 0,
    flex: 1,
    alignItems: "flex-end",
  },
  leftSlide: {
    marginLeft: 0,
  },
  rightSlide: {
    marginRight: 0,
  },
});

export default CMSwipeModal;
