import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationFunctionComponent } from 'react-native-navigation';

import colors from '../constants/colors';
import fonts from '../constants/fonts';
import { Cats } from '../data/CatsData';

type DetailScreenProps = {
  catId: number;
};

const DetailScreen: NavigationFunctionComponent<DetailScreenProps> = ({ catId }) => {
  const selectedCat = Cats.find((cat) => cat.id === catId);

  if (selectedCat) {
    const { img, breed, age, description } = selectedCat;

    return (
      <View style={styles.itemContainer}>
        <LinearGradient
          colors={[colors.lightGreen, colors.darkGreen]}
          style={styles.linearGradient}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Image
              style={styles.catImage}
              source={{
                uri: img,
              }}
            />
            <Text style={styles.textItem}>Порода: {breed}</Text>
            <Text style={styles.textItem}>Возраст: {age}</Text>
            <Text style={styles.itemDesc}>{description}</Text>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }

  return <Text>Ошибка</Text>;
};

DetailScreen.options = {
  topBar: {
    title: {
      color: colors.lightGreen,
      fontFamily: fonts.mainBold,
      fontSize: 20,
    },
    background: {
      color: colors.darkGreen,
    },
    backButton: {
      title: 'Назад',
      color: colors.lightGreen,
      fontFamily: fonts.main,
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
  },
  scrollContainer: {
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
    fontFamily: fonts.main,
    fontSize: 18,
  },
  itemDesc: {
    padding: 15,
    textAlign: 'center',
    color: colors.darkGreen,
    fontFamily: fonts.main,
    fontSize: 16,
  },
});
