import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function renderHeader() {
    return (
      <View>
        <Text style={styles.profileText}>Edit Profile</Text>
      </View>
    );
  }

  function renderName() {
    return (
      <View style={styles.viewData}>
        <Text style={styles.labelText}>Full Name: </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Name"
            placeholderTextColor="#003F5C"
            onChangeText={(name) => setName(name)}
          />
        </View>
      </View>
    );
  }

  function renderEmail() {
    return (
      <View style={styles.viewData}>
        <Text style={styles.labelText}>Email:</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003F5C"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
      </View>
    );
  }

  function renderPassword() {
    return (
      <View style={styles.viewData}>
        <Text style={styles.labelText}>Password:</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003F5C"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
      </View>
    );
  }

  function handlePress() {
    return (
      <TouchableOpacity
        style={styles.editBtn}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <Text style={styles.editBtnText}>Save Profile</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderName()}
      {renderEmail()}
      {renderPassword()}
      {handlePress()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7BEA8",
  },
  editBtn: {
    width: "75%",
    borderRadius: 24,
    height: 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 30,
    backgroundColor: "#F3D9DC",
    marginTop: 75,
  },
  editBtnText: {
    textAlign: "center",
    fontSize: 16,
    color: "#7b435b",
  },
  profileText: {
    padding: 20,
    marginTop: 100,
    fontWeight: "bold",
    fontSize: 30,
    color: "#7b435b",
  },
  labelText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 25,
    marginLeft: 25,
    color: "#7b435b",
  },
  dataText: {
    fontSize: 20,
    alignSelf: "center",
  },
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    width: "75%",
    height: 45,
    marginBottom: 20,
    alignSelf: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
});

export default EditProfile;

// state = {
//   name: "",
// };

// saveProfile = () => {
//   this.props.navigation.state.params.saveEditedProfile(this.state.name);
//   this.props.navigation.navigate("Profile");
//   alert("Profile Saved!");
// };
// componentWillMount = () => {
//   this.setState({
//     name: this.props.navigation.getParam("name"),
//     //   bio: this.props.navigation.getParam('bio'),
//   });
//   this.props.navigation.setParams({ saveProfile: this.saveProfile });
// };

// render = () => {
//   return (
//     <View>
//       <TextInput
//         style={{
//           margin: 24,
//           padding: 10,
//           fontSize: 24,
//           fontWeight: "bold",
//           textAlign: "center",
//           width: 350,
//           borderColor: "gray",
//           borderWidth: 1,
//         }}
//         placeholder="Ceva"
//         multiline={false}
//         onChangeText={(text) => {
//           console.log("hello"), this.setState({ name: text });
//         }}
//         value={this.state.name}
//       ></TextInput>
//     </View>
//   );
// };
