import React from "react";
import { schedulePushNotification } from "@services/notifications";
import { Button } from "react-native";
import { RootTabScreenProps } from "@navigation";
import { Container } from "./options.styles";

export const OptionsScreen = ({ navigation }: RootTabScreenProps<"Options">) => {
  return (
    <Container>
      <Button title="Modal" onPress={() => navigation.navigate("Modal")} />
      <Button title="Tab 1" onPress={() => navigation.navigate("Dasboard")} />
      <Button title="Notification" onPress={() => schedulePushNotification()} />
    </Container>
  );
};
