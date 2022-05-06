import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Launch from "./src/Launch";
import LaunchPads from "./src/LaunchPads";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Launchpads" component={LaunchPads} />
        <Stack.Screen name="Launch" component={Launch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
