import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { Button, Text, TextInput, View, Image, ScrollView, FlatList, SectionList, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style = {styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar styles = "auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});




























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