import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
} from "react-native";
import { useEffect } from 'react';
import { collection, getDocs} from "firebase/firestore"; 
import { db } from "../firebase";
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';


const PeliculasList=()=> {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies  = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'My Movie Collection'));
            const docs = [];
            querySnapshot.forEach((doc) => {                    
                docs.push({...doc.data(),id: doc.id});
            });
            setMovies(docs);
        } catch (e) {
            console.log(e);
        }
    }
    getMovies();
}, [movies]);


  console.log(movies)
  
  return (
    <ScrollView style={styles.container}>
      {movies.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => props.navigation.navigate("CreateUserScreen")}
          >
            <ListItemText
              primary={user.name}
              secondary={"--- Rating:" + " ||| " + user.rating + " ||| " + " Movie Release: " + user.release +  " ||| " + "User Comments: " + user.comment}
            />
            <Divider variant="inset" component="li" Color = "#0336FF"/>
          </ListItem>
        );
      })}

      {/* <View style={styles.button}>
        <Button color="#3a3c49" title="Save Movie"></Button>
      </View> */}
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

export default PeliculasList