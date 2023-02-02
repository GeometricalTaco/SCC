import "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { Button, Text, TextInput, View, Image, Pressable, ScrollView, FlatList, SectionList, StyleSheet, SafeAreaView } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
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
    <View style={styles.container}>
      {/* <Text style={styles.text}>Home Screen</Text> */}

      <Pressable style={styles.buttons} onPress={() => navigation.navigate('Ships')}>
        <Text style={styles.text}>Ships</Text>
      </Pressable>

      <Pressable style={styles.buttons} onPress={() => navigation.navigate('Items')}>
        <Text style={styles.text}>Items</Text>
      </Pressable>

      <Pressable style={styles.buttons} onPress={() => navigation.navigate('Star Map')}>
        <Text style={styles.text}>Star Map</Text>
      </Pressable>

      <Pressable style={styles.buttons} onPress={() => navigation.navigate('Mining')}>
        <Text style={styles.text}>Mining</Text>
      </Pressable>

      <Pressable style={styles.buttons} onPress={() => navigation.navigate('Guides')}>
        <Text style={styles.text}>Guides</Text>
      </Pressable>

      <Pressable style={styles.buttons} onPress={() => navigation.navigate('Trading')}>
        <Text style={styles.text}>Trading</Text>
      </Pressable>

      <Pressable style={styles.buttons} onPress={() => navigation.navigate('Loadout')}>
        <Text style={styles.text}>Loadout</Text>
      </Pressable>
    </View>
  );
}

function ShipScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Ship screen</Text>
    </View>
  );
}

function ItemScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Items screen</Text>
    </View>
  );
}

function StarMapScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Star Map screen</Text>
    </View>
  );
}

function MiningScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text>Mining screen</Text> */}
      <Pressable style={styles.buttons} onPress={() => navigation.navigate('Mining Calculator')}>
        <Text style={styles.text}>Calculator</Text>
      </Pressable>
      <Pressable style={styles.buttons} onPress={() => navigation.navigate('Mining Guides')}>
        <Text style={styles.text}>Guides</Text>
      </Pressable>
    </View>
  );
}



// Mining Calculator variables
const miningCommodities = ["Agricium", "Aluminium", "Beryl", "Bexalite", "Borase", "Copper", "Corundum", "Diamond", "Gold", "Hephaestanite", "Laranite", "Quantanium", "Quartz", "Taranite", "Titanium", "Tungsten"]
const commodityPrices = [["Agricium", 13.75, 27.50],
                         ["Aluminium", 0.67, 1.30],
                         ["Beryl", 2.21, 4.35],
                         ["Bexalite", 20.33, 44.00],
                         ["Borase", 16.29, 26.39],
                         ["Copper", 2.87, 6.15],
                         ["Corundum", 1.35, 2.71],
                         ["Diamond", 3.68, 7.35],
                         ["Gold", 3.20, 5.76],
                         ["Hephaestanite", 7.38, 15.83],
                         ["Laranite", 15.51, 31.00],
                         ["Quantanium", 44.00, 88.00],
                         ["Quartz", 0.78, 1.55],
                         ["Taranite", 16.29, 35.19],
                         ["Titanium", 4.47, 8.90],
                         ["Tungsten", 2.05, 4.06]]
let commodityIndex = 0
let rockVolumecSCU = 0
let mineralVolumecSCU = 0


function MiningCalculatorScreen() {
  const [rockMass, setMass] = useState('');
  const [percentage, setPercentage] = useState('');

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Mining Calculator screen</Text> */}
      <SelectDropdown
        data = {miningCommodities}
        defaultButtonText = "Select Commodity"
        onSelect={(selectedItem, index) => {
          commodityIndex = index
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          return item
        }}
      />

      <TextInput
        value={rockMass}
        style={styles.input}
        placeholder="Enter Rock Mass:"
        onChangeText={(rockMass) => {
          setMass(rockMass)
        }}
        keyboardType="numeric"
      />

      <TextInput
        value={percentage}
        style={styles.input}
        placeholder="Enter Mineral Percentage:"
        onChangeText={(percentage) => {
          setPercentage(percentage)
        }}
        keyboardType="numeric"
      />

      <Text style={styles.text}>Rock mass = {rockMass}</Text>
      <Text style={styles.text}>Rock volume cSCU = {rockVolumecSCU = rockMass * 2}</Text>
      <Text style={styles.text}>Percentage = {percentage}</Text>
      <Text style={styles.text}>Mineral Volume cSCU = {mineralVolumecSCU = rockVolumecSCU * (percentage/100)}</Text>
      <Text style={styles.text}>Mineral Volume SCU = {mineralVolumecSCU / 100}</Text>
      <Text style={styles.text}>Raw Income (estimated) = {mineralVolumecSCU * commodityPrices[commodityIndex][1]}</Text>
      <Text style={styles.text}>Refined Income (estimated) = {mineralVolumecSCU * commodityPrices[commodityIndex][2]}</Text>
      <Text style={styles.text}>Junk SCU = {rockVolumecSCU * (1 - percentage/100) / 100}</Text>
    </View>
  );
}



function GuidesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttons} onPress={() => navigation.navigate('Mining Guides')}>
        <Text style={styles.text}>Mining Guides</Text>
      </Pressable>
      <Pressable style={styles.buttons} onPress={() => navigation.navigate('Location Guides')}>
        <Text style={styles.text}>Location Guides</Text>
      </Pressable>
      <Pressable style={styles.buttons} onPress={() => navigation.navigate('Bounty Guides')}>
        <Text style={styles.text}>Bounty Guides</Text>
      </Pressable>
      <Pressable style={styles.buttons} onPress={() => navigation.navigate('Misc Guides')}>
        <Text style={styles.text}>Misc Guides</Text>
      </Pressable>
    </View>
  );
}

function MiningGuidesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Guides screen</Text>
    </View>
  );
}

function LocationGuidesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Guides screen</Text>
    </View>
  );
}

function BountyGuidesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Guides screen</Text>
    </View>
  );
}

function MiscGuidesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Guides screen</Text>
    </View>
  );
}

function TradingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttons} onPress={() => navigation.navigate('Popular Routes')}>
        <Text style={styles.text}>Popular Trading Routes</Text>
      </Pressable>
      <Pressable style={styles.buttons} onPress={() => navigation.navigate('Trading Calculator')}>
        <Text style={styles.text}>Trading Calculator</Text>
      </Pressable>
    </View>
  );
}

function PopularRoutesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Popular Routes Screen</Text>
    </View>
  );
}

function TradingCalculatorScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Trading Calculator Screen</Text>
    </View>
  );
}

function LoadoutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttons} onPress={() => navigation.navigate('View Loadouts')}>
        <Text style={styles.text}>View Loadouts</Text>
      </Pressable>
      <Pressable style={styles.buttons} onPress={() => navigation.navigate('Create Loadout')}>
        <Text style={styles.text}>Create Loadout</Text>
      </Pressable>
    </View>
  );
}

function ViewLoadoutsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>View Loadouts screen</Text>
    </View>
  );
}

function CreateLoadoutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Create Loadout screen</Text>
    </View>
  );
}

const defaultStyles = {
  headerTintColor: "#fff", 
  headerTitleAlign: "center", 
  headerTitleStyle: { 
    fontWeight: "bold"
  }
};

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#091160",
          }
        }}
      >

        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home", ...defaultStyles }} />
        <Stack.Screen name="Ships" component={ShipScreen} options={{title: "Ships", ...defaultStyles}} />
        <Stack.Screen name="Items" component={ItemScreen} options={{title: "Items", ...defaultStyles}} />
        <Stack.Screen name="Star Map" component={StarMapScreen} options={{title: "Star Map", ...defaultStyles}} />

        <Stack.Screen name="Mining" component={MiningScreen} options={{title: "Mining", ...defaultStyles}} />
        <Stack.Screen name="Mining Calculator" component={MiningCalculatorScreen} options={{title: "Mining Calculator", ...defaultStyles}} />

        <Stack.Screen name="Guides" component={GuidesScreen} options={{title: "Guides", ...defaultStyles}} />
        <Stack.Screen name="Mining Guides" component={MiningGuidesScreen} options={{title: "Guides", ...defaultStyles}} />
        <Stack.Screen name="Location Guides" component={LocationGuidesScreen} options={{title: "Guides", ...defaultStyles}} />
        <Stack.Screen name="Bounty Guides" component={BountyGuidesScreen} options={{title: "Guides", ...defaultStyles}} />
        <Stack.Screen name="Misc Guides" component={MiscGuidesScreen} options={{title: "Guides", ...defaultStyles}} />

        <Stack.Screen name="Trading" component={TradingScreen} options={{title: "Trading", ...defaultStyles}} />
        <Stack.Screen name="Popular Routes" component={PopularRoutesScreen} options={{title: "Popular Routes", ...defaultStyles}} />
        <Stack.Screen name="Trading Calculator" component={TradingCalculatorScreen} options={{title: "Trading Calculator", ...defaultStyles}} />

        <Stack.Screen name="Loadout" component={LoadoutScreen} options={{title: "Loadouts", ...defaultStyles}} />
        <Stack.Screen name="View Loadouts" component={ViewLoadoutsScreen} options={{title: "View Loadouts", ...defaultStyles}} />
        <Stack.Screen name="Create Loadout" component={CreateLoadoutScreen} options={{title: "Create Loadout", ...defaultStyles}} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "space-between",
    backgroundColor: "#151E7A",
    padding: 20,
    //margin: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttons: {
    flex: 0.12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#077EE5",
    marginBottom: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderColor: "black"
  },
});


//#151E7A


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


// inside of render() of react class
<Button
  title="Update the title"
  onPress={() => navigation.setOptions({ title: "Updated!" })}
/> 


{/* <Button onPress={() => navigation.navigate('Ships')} title = "Ships" />
      <Button onPress={() => navigation.navigate('Items')} title = "Items"/>
      <Button onPress={() => navigation.navigate('Star Map')} title = "Star Map"/>
      <Button onPress={() => navigation.navigate('Mining')} title = "Mining"/>
      <Button onPress={() => navigation.navigate('Guides')} title = "Guides"/>
      <Button onPress={() => navigation.navigate('Trading')} title = "Trading"/>
      <Button onPress={() => navigation.navigate('Loadout')} title = "Loadout"/> */}


//  function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }


// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

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