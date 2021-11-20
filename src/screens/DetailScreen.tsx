import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
      <LinearGradient colors={['#CED46A', '#07553B']} style={styles.linearGradient}>
        <Image
          style={styles.catImage}
          source={{
            uri: selectedCat?.img,
          }}
        />
        <Text style={styles.textItem}>Порода: {selectedCat?.breed}</Text>
        <Text style={styles.textItem}>Возраст: {selectedCat?.age}</Text>
        <Text style={styles.itemDesc}>{selectedCat?.description}</Text>
      </LinearGradient>
    </View>
  );
};

DetailScreen.options = {
  topBar: {
    title: {
      color: '#CED46A',
      fontFamily: 'OpenSans-Bold',
      fontSize: 20,
    },
    background: {
      color: '#07553B',
    },
    backButton: {
      title: 'Назад',
      color: '#CED46A',
      fontFamily: 'OpenSans-Regular',
    },
  },
};

export default DetailScreen;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: '#CED46A',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  catImage: {
    width: '95%',
    height: 250,
    marginVertical: 20,
  },
  textItem: {
    marginVertical: 10,
    color: '#07553B',
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
  },
  itemDesc: {
    width: '100%',
    padding: 15,
    textAlign: 'center',
    color: '#07553B',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
});

const style = StyleSheet.create({});
