
import React from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../../../Theme/global.styles";
import MyButton from "../../MyButton";
import MyText from "../../MyText";

// ==========================================================

export default function HomeScreen() {
  const { navigate } = useNavigation();
  const entities = [
    "Animal",
"User",

  ];

  return (
    <SafeAreaView style={globalStyles.home}>
    {entities?.map((entity: string, idx: number) => (
      <MyButton
        key={idx}
        // @ts-ignore
        onPress={() => navigate(`List${entity}Screen`)}
      >
        <MyText text={entity} />
      </MyButton>
    ))}
  </SafeAreaView>
  );
}