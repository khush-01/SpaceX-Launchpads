import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { LaunchData } from "./DataTypes";

const Launch = (props: any) => {
  const launchId = props.route.params.id;
  const [launchData, setLaunchData] = useState({} as LaunchData);
  const [rocketName, setRocketName] = useState("");

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

  useEffect(() => {
    (async () => {
      await fetch(
        `https://api.spacexdata.com/v4/rockets/${launchData.rocket}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((response) => {
          setRocketName(response.name);
        })
        .catch((error) => console.log(error));
    })();
  }, [launchData]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{launchData.name}</Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 22,
          marginTop: 7,
          textDecorationLine: "underline",
        }}
      >
        Details
      </Text>
      {launchData.details ? (
        <Text style={styles.fieldText}>{launchData.details}</Text>
      ) : (
        <></>
      )}
      <Text style={{ marginVertical: 7 }}>
        <Text style={styles.fieldTitle}>Date: </Text>
        <Text style={styles.fieldText}>
          {new Date(launchData.date_unix * 1000).toUTCString()}
        </Text>
      </Text>
      <Text style={{ marginVertical: 7 }}>
        {launchData.rocket === null ? (
          <></>
        ) : (
          <>
            <Text style={styles.fieldTitle}>Rocket Used: </Text>
            <Text style={styles.fieldText}>{rocketName}</Text>
          </>
        )}
      </Text>
      <Text style={{ marginVertical: 7 }}>
        <Text style={styles.fieldTitle}>Reused: </Text>
        {launchData.fairings === undefined ? (
          <></>
        ) : (
          <Text style={styles.fieldText}>
            {launchData.fairings === null || launchData.fairings.reused === null
              ? "Relevent data not present"
              : launchData.fairings.reused === false
              ? "No"
              : "Yes"}
          </Text>
        )}
      </Text>
      <Text style={{ marginVertical: 7 }}>
        {launchData.success === undefined ? (
          <></>
        ) : (
          <>
            <Text style={styles.fieldTitle}>Success: </Text>
            <Text style={styles.fieldText}>
              {launchData.success === null
                ? "Relevent data not present"
                : launchData.success === false
                ? "No"
                : "Yes"}
            </Text>
          </>
        )}
      </Text>
    </View>
  );
};

export default Launch;
