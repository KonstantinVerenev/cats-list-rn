import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Cats, CatType } from '../data/CatsData';

const DetailScreen: React.FC = () => {
  const catId = 1;

  const selectedCat = Cats.find((cat) => cat.id === catId);

  return (
    <View style={styles.itemContainer}>
      <Text>{selectedCat?.name}</Text>
      <Image
        style={styles.catImage}
        source={{
          uri: selectedCat?.img,
        }}
      />
      <Text>{selectedCat?.breed}</Text>
      <Text>{selectedCat?.age}</Text>
      <Text style={styles.itemDesc}>{selectedCat?.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: '100%',
    marginTop: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'tomato',
  },
  itemDesc: {
    width: '100%',
    padding: 15,
    textAlign: 'center',
  },
  catImage: {
    width: '95%',
    height: 250,
  },
});

export default DetailScreen;

const style = StyleSheet.create({});
