import "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { Button, Text, TextInput, View, Image, Pressable, ScrollView, FlatList, SectionList, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Ships')} title = "Ships" />
      <Button onPress={() => navigation.navigate('Items')} title = "Items"/>
      <Button onPress={() => navigation.navigate('Star Map')} title = "Star Map"/>
      <Button onPress={() => navigation.navigate('Mining')} title = "Mining"/>
      <Button onPress={() => navigation.navigate('Guides')} title = "Guides"/>
      <Button onPress={() => navigation.navigate('Trading')} title = "Trading"/>
      <Button onPress={() => navigation.navigate('Loadout')} title = "Loadout"/>

      <Pressable style={styles.buttonLeft} onPress={() => navigation.navigate('Ships')}>
        <Text style={styles.text}>Ships</Text>
      </Pressable>
    </View>
  );
}

function ShipScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Ship screen</Text>
    </View>
  );
}

function ItemScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Items</Text>
    </View>
  );
}

function StarMapScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Star Map screen</Text>
    </View>
  );
}

function MiningScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Mining screen</Text>
    </View>
  );
}

function GuidesScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Guides screen</Text>
    </View>
  );
}

function TradingScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Trading screen</Text>
    </View>
  );
}

function LoadoutScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Loadout Manager screen</Text>
    </View>
  );
}


function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ships" component={ShipScreen} />
        <Stack.Screen name="Items" component={ItemScreen} />
        <Stack.Screen name="Star Map" component={StarMapScreen} />
        <Stack.Screen name="Mining" component={MiningScreen} />
        <Stack.Screen name="Guides" component={GuidesScreen} />
        <Stack.Screen name="Trading" component={TradingScreen} />
        <Stack.Screen name="Loadout" component={LoadoutScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;


const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttonLeft: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 1,
    backgroundColor: "#151E7A",
  }
});


//#151E7A



function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}


// inside of render() of react class
<Button
  title="Update the title"
  onPress={() => navigation.setOptions({ title: "Updated!" })}
/>


// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require("@expo/snack-static/react-native-logo.png")}
//     />
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator 
//         initialRouteName="Home"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: "#f4511e",
//           },
//         }}
//       >
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ 
//             title: "My home",
//             headerTintColor: "#fff",
//             headerTitle: (props) => <LogoTitle {...props} />,
//             headerRight: () => (
//               <Button
//                 onPress={() => alert("This is a button!")}
//                 title="Info"
//                 color="#fff"
//               />
//             ),
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }





// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });





// const Cat = (props) => {
//   const [isHungry, setIsHungry] = useState(true);

//   return (
//     <View>
//       <Text>
//         I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
//       </Text>
//       <Button
//         onPress={() => {
//           setIsHungry(false);
//         }}
//         disabled={!isHungry}
//         title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
//       />
//     </View>
//   );
// };

// const Cafe = () => {
//   return (
//     <>
//       <Cat name = "Munkustrap" />
//       <Cat name = "Spot" />
//     </>
//   );
// }

// const CatApp = () => {
//   return (
//     <View>
//       <Image
//         source = {{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
//         style = {{width: 200, height: 200}}
//       />
//       <Text>Hello, I am your cat!</Text>
//     </View>
//   )
// }



// const PizzaTranslator = () => {
//   const [text, setText] = useState("");
//   return(
//     <View style={{padding: 10}}>
//       <TextInput
//         style={{height: 40}}
//         placeholder="Type here to translate!"
//         onChangeText={newText => setText(newText)}
//         defaultValue={text}
//       />
//       <Text style={{padding: 10, fontSize: 42}}>
//         {text
//           .split(" ")
//           .map(word => word && "🍕")
//           .join(" ")}
//       </Text>
//     </View>
//   );
// };



// const logo = {
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   width: 64,
//   height: 64,
// };

// const App = () => (
//   <ScrollView>
//     <Text style={{fontSize: 96}}>Scroll me pls</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//   </ScrollView>
// );



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22,
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

// const FlatListBasics = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={[
//           {key: 'Devin'},
//           {key: 'Dan'},
//           {key: 'Dominic'},
//           {key: 'Jackson'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//         ]}
//         renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//         />
//     </View>
//   );
// };



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22,
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: "bold",
//     backgroundColor: "rgba(247,247,247,1.0)",
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

// const SectionListBasics = () => {
//   return (
//     <View style={styles.container}>
//       <SectionList
//         sections={[
//           {title: "D", data: ["Devin", "Dan", "Dominic"]},
//           {
//             title: "J",
//             data: [
//               "Jackson",
//               "James",
//               "Jillian",
//               "Jimmy",
//               "Joel",
//               "John",
//               "Julie",
//             ],
//           },
//         ]}
//         renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//         renderSectionHeader={({section}) => (
//           <Text style={styles.sectionHeader}>{section.title}</Text>
//         )}
//         keyExtractor={item => `basicListEntry-${item}`}
//         />
//     </View>
//   )
// }

// function HomeScreen({ navigation, route }) {
//   React.useEffect(() => {
//     if (route.params?.post) {
//       // Post updated, do something with "route.params.post"
//       // For example, send the post to the server
//     }
//   }, [route.params?.post]);
//   return(
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => {
//           // Navigate to the Details route with params
//           navigation.navigate("Details", {
//             itemId: 86,
//             otherParam: "anything you want here",
//           });
//         }}
//       />
//       <Button
//         title="Create post"
//         onPress={() => navigation.navigate("CreatePost")}
//       />
//       <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
//     </View>
//   );
// }

// function CreatePostScreen({ navigation, route }) {
//   const [postText, setPostText] = React.useState("");

//   return (
//     <>
//       <TextInput
//         multiline
//         placeholder="What's on your mind?"
//         style={{ height: 200, padding: 10, backgroundColor: "white" }}
//         value={postText}
//         onChangeText={setPostText}
//       />
//       <Button
//         title="Done"
//         onPress={() => {
//           // Pass and merge params back to home screen
//           navigation.navigate({
//             name: "Home",
//             params: { post: postText },
//             merge: true,
//           });
//         }}
//       />
//     </>
//   )
// }

// function DetailsScreen({ route, navigation }) {
//   // Get the param
//   const { itemId, otherParam } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => 
//           navigation.push("Details", {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   )
// }