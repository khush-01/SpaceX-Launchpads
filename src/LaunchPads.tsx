import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import LaunchItem from "./LaunchItem";
import styles from "./styles";
import { Pad } from "./DataTypes";

const LaunchPads = (props: any) => {
  const [launchpads, setLaunchpads] = useState([] as any);

  useEffect(() => {
    async function fetchLaunchpads() {
      await fetch(`https://api.spacexdata.com/v4/launchpads`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((response) => {
          setLaunchpads(response);
        })
        .catch((error) => console.log(error));
    }

    fetchLaunchpads();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SpaceX Launchpads</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {launchpads.map((pad: Pad, index: number) => {
            return (
              <View
                key={index}
                style={
                  index === launchpads.length - 1
                    ? styles.lastItem_last
                    : styles.listItem
                }
              >
                <Text style={styles.padName}>{pad.name}</Text>
                <Text style={{ marginBottom: 5 }}>
                  <Text style={styles.fieldTitle}>Details: </Text>
                  <Text style={styles.fieldText}>{pad.details}</Text>
                </Text>
                <Text style={{ marginBottom: 5 }}>
                  <Text style={styles.fieldTitle}>Status: </Text>
                  <Text style={styles.fieldText}>
                    {pad.status.toUpperCase()}
                  </Text>{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginBottom: 3,
                  }}
                >
                  Launches:
                </Text>
                {pad.launches.length === 0 ? (
                  <Text style={{ fontSize: 18 }}>No Launch Available</Text>
                ) : (
                  <>
                    {pad.launches.map((launch, index: number) => {
                      if (index < 3)
                        return (
                          <TouchableOpacity
                            key={index}
                            onPress={() =>
                              props.navigation.navigate("Launch", {
                                id: launch,
                              })
                            }
                          >
                            <LaunchItem launchId={launch} />
                          </TouchableOpacity>
                        );
                    })}
                  </>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default LaunchPads;
