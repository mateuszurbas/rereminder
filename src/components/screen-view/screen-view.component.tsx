import { View as DefaultView } from "react-native";
import { useThemeColor } from "../../hooks/use-theme-color";
import { ScreenViewProps } from "./screen-view.types";

export const ScreenView = ({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ScreenViewProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};
