
import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useGetListQuery } from "../../API/api";
import Card from "../../Components/Card";
import globalStyles from "../../Theme/global.styles";
import LoadingOrErrorScreeen from "../../Components/GenericScreens/Handlers/LoadingErrorEmpty.screen";
// import ActionButton from "../../Components/ActionButton";

// ====================================================================

export default function ListAnimalScreen() {

  // --------------------------------------

  const entity = "animal";
  const { data, isFetching, error }: any = useGetListQuery({ entity });

  // --------------------------------------

  const renderItem = ({ item: row }) => {
    let keys = Object.keys(row); // has to be manually set
    keys.length = 3; // just as example (memory leak)
    return <Card key={row?.id} {...{ entity, keys, row }} />;
  };

  // --------------------------------------

  if (isFetching || error) {
    return <LoadingOrErrorScreeen {...{ error, isFetching }} />;
  }

  // --------------------------------------

  return (
    <SafeAreaView style={globalStyles.screen}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {/* <ActionButton onPress={goToCreateEntity} /> */}
    </SafeAreaView>
  );
}
