import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import theme from "../../Theme/paper.theme";
import { I18n } from "i18n-js";
import { capitalize } from "../../Utils/string.util";
// =================================================================

export default function Button({
  text = "Submit",
  onPress = null,
  icon = "check",
  loading = false,
  mode = "contained",
  uppercase = false,
  width = wp(95),
  maxWidth = wp(95),
  disabled = false,
  paddingVertical = wp(0.9),
  ...props
}) {
  const color = mode === "contained" ? { color: "white" } : null;
  const i18n = new I18n();

  return (
    // @ts-ignore
    <PaperButton
      {...{ icon, mode, onPress, loading, uppercase, disabled, ...props }}
      style={{
        ...styles.container,
        minWidth: width,
        maxWidth,
        paddingVertical,
      }}
      labelStyle={{ ...styles.labelStyle, ...color }}
    >
      {/* {i18n.t(text)} */}
      {capitalize(text)}
    </PaperButton>
  );
}

// =================================================================

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    // paddingHorizontal: wp(1.5),
    margin: wp(1),
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
  labelStyle: {
    fontSize: 16,
    // fontWeight: "bold",
  },
});
