import React from 'react';
import { CatType } from '../data/CatsData';
import { Image, StyleSheet, Text, View } from 'react-native';

type ListItemProps = {
  item: CatType;
};

const CatsListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.itemHeader}>
          <Text>{item.name}</Text>
          <Text>{item.breed}</Text>
        </View>
        <Image
          style={styles.catImage}
          source={{
            uri: item.img,
          }}
        />
        <Text style={styles.itemDesc}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
  },
  cardContainer: {
    width: '95%',
    marginTop: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'tomato',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    borderRadius: 10,
  },
  itemHeader: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemDesc: {
    width: '100%',
    padding: 15,
    textAlign: 'center',
  },
  catImage: {
    width: '90%',
    height: 200,
  },
});

export default CatsListItem;
