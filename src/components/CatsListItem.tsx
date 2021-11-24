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
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.cardContainer} onPress={onOpenDetailScreen}>
        <View style={styles.itemHeader}>
          <Text style={styles.headerText}>{item.name}</Text>
          <Text style={styles.headerText}>{item.breed}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.catImage}
            source={{
              uri: item.img,
            }}
          />
        </View>
        <Text style={styles.itemDesc}>{item.description}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.darkGreen,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    elevation: 4,
    borderRadius: 10,
  },
  itemHeader: {
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: colors.lightGreen,
    fontSize: 18,
    fontFamily: fonts.mainBold,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  catImage: {
    width: '90%',
    height: 200,
  },
  itemDesc: {
    padding: 15,
    textAlign: 'center',
    color: colors.lightGreen,
    fontFamily: fonts.main,
    fontSize: 16,
  },
});

export default CatsListItem;
