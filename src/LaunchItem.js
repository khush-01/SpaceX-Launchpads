import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const LaunchItem = (props) => {
  const [launchData, setLaunchData] = useState({});

  useEffect(() => {
    async function fetchLaunchData() {
      await fetch(`https://api.spacexdata.com/v5/launches/${props.launchId}`)
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
      <Text style={{ marginBottom: 3, fontSize: 18 }}>{launchData.name}</Text>
    </View>
  );
};

export default LaunchItem;
