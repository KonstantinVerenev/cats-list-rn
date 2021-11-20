import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { Cats } from '../data/CatsData';

type DetailScreenProps = {
  catId: number;
};

const DetailScreen: NavigationFunctionComponent<DetailScreenProps> = (props) => {
  const selectedCatId = props.catId;

  const selectedCat = Cats.find((cat) => cat.id === selectedCatId);

  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.catImage}
        source={{
          uri: selectedCat?.img,
        }}
      />
      <Text style={styles.textItem}>Порода: {selectedCat?.breed}</Text>
      <Text style={styles.textItem}>Возраст: {selectedCat?.age}</Text>
      <Text style={styles.itemDesc}>{selectedCat?.description}</Text>
    </View>
  );
};

DetailScreen.options = {
  topBar: {
    title: {
      text: 'Cats List',
      color: '#CED46A',
    },
    background: {
      color: '#07553B',
    },
    backButton: {
      title: 'Back',
      color: '#CED46A',
    },
  },
};

export default DetailScreen;

const styles = StyleSheet.create({
  itemContainer: {
    height: '100%',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#CED46A',
  },
  catImage: {
    width: '95%',
    height: 250,
    marginVertical: 20,
  },
  textItem: {
    marginVertical: 10,
    color: '#07553B',
  },
  itemDesc: {
    width: '100%',
    padding: 15,
    textAlign: 'center',
    color: '#07553B',
  },
});

const style = StyleSheet.create({});
