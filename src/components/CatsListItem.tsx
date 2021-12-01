import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { CatType } from '../data/CatsData';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

type ListItemProps = {
  item: CatType;
  onOpenDetailScreen: () => void;
};

const CatsListItem: React.FC<ListItemProps> = ({ item, onOpenDetailScreen }) => {
  const { name, breed, img, description } = item;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardContainer} onPress={onOpenDetailScreen}>
        <View style={styles.header}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ ...styles.headerText, ...styles.headerNameText }}>
            {name}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ ...styles.headerText, ...styles.headerBreedText }}>
            {breed}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.catImage}
            source={{
              uri: img,
            }}
          />
        </View>
        <Text style={styles.desc}>{description}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.darkGreen,
    shadowColor: colors.black,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    elevation: 4,
    borderRadius: 10,
  },
  header: {
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: colors.lightGreen,
    fontSize: 18,
    fontFamily: fonts.mainBold,
    paddingHorizontal: 2,
  },
  headerNameText: {
    flex: 1,
  },
  headerBreedText: {
    flex: 2,
    textAlign: 'right',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  catImage: {
    width: '90%',
    height: 200,
  },
  desc: {
    padding: 15,
    textAlign: 'center',
    color: colors.lightGreen,
    fontFamily: fonts.main,
    fontSize: 16,
  },
});

export default CatsListItem;
