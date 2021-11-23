import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationFunctionComponent } from 'react-native-navigation';

import colors from '../constants/colors';
import { Cats } from '../data/CatsData';

type DetailScreenProps = {
  catId: number;
};

const DetailScreen: NavigationFunctionComponent<DetailScreenProps> = (props) => {
  const selectedCatId = props.catId;

  const selectedCat = Cats.find((cat) => cat.id === selectedCatId);

  return (
    <View style={styles.itemContainer}>
      <LinearGradient colors={[colors.lightGreen, colors.darkGreen]} style={styles.linearGradient}>
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
      color: colors.lightGreen,
      fontFamily: 'OpenSans-Bold',
      fontSize: 20,
    },
    background: {
      color: colors.darkGreen,
    },
    backButton: {
      title: 'Назад',
      color: colors.lightGreen,
      fontFamily: 'OpenSans-Regular',
    },
  },
};

export default DetailScreen;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
  catImage: {
    width: '90%',
    height: 230,
    marginVertical: 20,
    borderRadius: 5,
  },
  textItem: {
    marginVertical: 10,
    color: colors.darkGreen,
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
  },
  itemDesc: {
    padding: 15,
    textAlign: 'center',
    color: colors.darkGreen,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
});
