import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { LaunchData } from "./DataTypes";

const LaunchItem = (props: any) => {
  const [launchData, setLaunchData] = useState({} as LaunchData);

  useEffect(() => {
    async function fetchLaunchData() {
      await fetch(`https://api.spacexdata.com/v5/launches/${props.launchId}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((response) => {
          setLaunchData(response);
        })
        .catch((error) => console.log(error));
    }

    fetchLaunchData();
  }, []);

  return (
    <View>
      <Text style={{ marginVertical: 3, fontSize: 18 }}>{launchData.name}</Text>
    </View>
  );
};

export default LaunchItem;
