import { SharedValue } from "react-native-reanimated";

export type Point = {
  degree: number;
  title: string;
  description: string;
  time: Date;
  onPress: VoidFunction;
};

export type ClockProps = {
  radius: number;
  shiftDegree: SharedValue<number>;
  points: Point[];
};
