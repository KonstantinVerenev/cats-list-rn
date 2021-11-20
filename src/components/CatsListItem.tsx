import React from 'react';
import { CatType } from '../data/CatsData';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import DetailScreen from '../screens/DetailScreen';

type ListItemProps = {
  item: CatType;
  componentId: string;
};

// Navigation.registerComponent('DetailScreen', () => DetailScreen);

const CatsListItem: React.FC<ListItemProps> = (props) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => {
          Navigation.push(props.componentId, {
            component: {
              name: 'DetailScreen',
              passProps: {
                catId: props.item.id,
              },
              options: {
                topBar: {
                  title: {
                    text: props.item.name,
                  },
                },
              },
            },
          });
        }}>
        <View style={styles.itemHeader}>
          <Text>{props.item.name}</Text>
          <Text>{props.item.breed}</Text>
        </View>
        <Image
          style={styles.catImage}
          source={{
            uri: props.item.img,
          }}
        />
        <Text style={styles.itemDesc}>{props.item.description}</Text>
      </TouchableOpacity>
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
