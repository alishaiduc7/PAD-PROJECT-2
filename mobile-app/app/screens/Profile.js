import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
      style={{
        width: "75%",
        height: 45,
        marginTop: 20,
        fontSize: 25,
      }}
      >Profile</Text>
{render()}

    </View>
  );
};

var state = {
  name: 'Andreea'
};

function handlePress () {
  // this.setState({ color3: 'purple' });
  this.props.navigation.navigate('Edit', {
    name: this.state.name,
    saveEditedProfile: this.saveEditedProfile,
  });
};

function saveEditedProfile(name){
  this.setState({
    name: name
  });
};

function render() {
  return(
    <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 30,
          //flex: 1,
          justifyContent: 'center',
        }}>

        <Text
          style={{
            color: "#000000"
          }}
        >Andreea</Text>



        </View>

  )
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D7BEA8",
  },
});
