import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";

const Launch = (props) => {
  const launchId = props.route.params.id;
  const [launchData, setLaunchData] = useState({});

  useEffect(() => {
    async function fetchLaunchData() {
      await fetch(`https://api.spacexdata.com/v5/launches/${launchId}`, {
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
    <View style={styles.container}>
      <Text style={styles.title}>{launchData.name}</Text>
      <Text style={{ marginVertical: 7 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Details: </Text>
        {launchData.details ? (
          <Text style={styles.text}>{launchData.details}</Text>
        ) : (
          <Text style={styles.text}>No details found</Text>
        )}
      </Text>
      <Text style={{ marginVertical: 7 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Date: </Text>
        <Text style={styles.text}>
          {new Date(launchData.date_unix * 1000).toUTCString()}
        </Text>
      </Text>
      <Text style={{ marginVertical: 7 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Reused: </Text>
        {launchData.fairings === undefined ? (
          <></>
        ) : (
          <Text style={styles.text}>
            {launchData.fairings === null || launchData.fairings.reused === null
              ? "Relevent data not present"
              : launchData.fairings.reused === false
              ? "No"
              : "Yes"}
          </Text>
        )}
      </Text>
      <Text style={{ marginVertical: 7 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Success: </Text>
        {launchData.success === undefined ? (
          <></>
        ) : (
          <Text style={styles.text}>
            {launchData.success === null
              ? "Relevent data not present"
              : launchData.success === false
              ? "No"
              : "Yes"}
          </Text>
        )}
      </Text>
    </View>
  );
};

export default Launch;
