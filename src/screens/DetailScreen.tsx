import React from 'react';
import { StyleSheet, Text, Image, ScrollView } from 'react-native';
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

  if (!selectedCat) {
    return <Text>Произошла ошибка. Сообщите нам и мы исправим это.</Text>;
  }

  const { img, breed, age, description } = selectedCat;

  return (
    <LinearGradient colors={[colors.lightGreen, colors.darkGreen]} style={styles.linearGradient}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          style={styles.catImage}
          source={{
            uri: img,
          }}
        />
        <Text style={styles.textRow}>Порода: {breed}</Text>
        <Text style={styles.textRow}>Возраст: {age}</Text>
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
    </LinearGradient>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
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
  textRow: {
    marginVertical: 10,
    color: colors.darkGreen,
    fontFamily: fonts.main,
    fontSize: 18,
  },
  description: {
    padding: 15,
    textAlign: 'center',
    color: colors.darkGreen,
    fontFamily: fonts.main,
    fontSize: 16,
  },
});
