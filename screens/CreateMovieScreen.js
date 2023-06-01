import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { addFavoriteFirebase } from "../Helpers/FirebaseHelper";



import firebase from "../firebase";

const AddUserScreen = (props) => {
  const initalState = {
    name: "",
    rating: "",
    comment: "",
    release: "",
  };

  const [state, setState] = useState(initalState);

  const addFavorite = async () => {
      addFavoriteFirebase({objectToSave: {          
        name: state.name,
        genre: state.genre,
        rating: state.rating,
        comment: state.comment,
        release: state.release,}}, 
        "My Movie Collection");
      alert("La pelicula fue agregada a la lista");
      props.navigation.navigate("UsersList");
  }
  
  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Genre"
          onChangeText={(value) => handleChangeText(value, "genre")}
          value={state.genre}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Rating"
          onChangeText={(value) => handleChangeText(value, "rating")}
          value={state.rating}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Date Release"
          onChangeText={(value) => handleChangeText(value, "release")}
          value={state.release}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Comment"
          multiline={true}
          numberOfLines={7}
          onChangeText={(value) => handleChangeText(value, "comment")}
          value={state.comentario}
        />
      </View>

      <View style={styles.button}>
        <Button color="#3a3c49" title="Save Movie" onPress={() =>addFavorite()}></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddUserScreen;
