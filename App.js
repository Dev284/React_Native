import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Platform
} from "react-native";import Footer from './src/Footer';
import Header from './src/Header';
import Task from "./src/Task";




export default function App() {

  const [task, setTask] = React.useState();
  const [taskItems, setTaskItems] = React.useState([]);

  function handleAddTask() {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  function completeTask(index) {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }


  return (
    <>
    <Header/>
    <View style={styles.container}>
    <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>My ToDo List</Text>
            <View style={styles.items}>
              {taskItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => completeTask(index)}
                  >
                    <Task text={item} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>





        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}>
          <TextInput
            style={styles.input}
            placeholder={"Add new item"}
            value={task}
            onChangeText={(text) => setTask(text)}
          />

          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>


    </View>
    <Footer/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
  },
});




// import React from "react";


// export default App = () => {




//   console.log(1)

//   return (
//     <>
//         {/* Scroll view to enable scrolling when list gets longer than the page */}
        

//         {/* Write a task */}
//         {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}

//       </View>
//     </>
//   );
// }

