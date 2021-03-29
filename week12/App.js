import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default function App() {
  const [pet, setPet] = useState();

  const [votes, setVotes] = useState(false);

  function increaseCatVote(value){
    setPet(value);
    setVotes(true);
  }

  function increaseDogVote(value){
    setPet(value);
    setVotes(true);
  }

  function increaseOtherVote(value){
    setPet(value);
    setVotes(true);
  }

  return (
    <View style={styles.container}>
      { votes ? (
      <View style={styles.container}>
        <Text>You voted for {pet}!</Text>
      </View>
      ) : (
        <View>
        <Text style={styles.headerText}>Vote for your favorite pet!</Text>
        <Card.Divider/>
        <Card>
          <Button title="Cats" onPress={(value) => (increaseCatVote('cats'))}/>
        </Card>
        <Card>
          <Button title="Dogs" onPress={(value) => (increaseDogVote('dogs'))}/>
        </Card>
        <Card>
          <Button title="Other" onPress={(value) => (increaseOtherVote('burgers'))}/>
        </Card>
        </View>
    )
    }
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
});
