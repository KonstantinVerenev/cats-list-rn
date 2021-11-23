import React from 'react';
import { FlatList, View, ListRenderItem, Image, StyleSheet, Text } from 'react-native';

import { CatType } from '../data/CatsData';

import CatsListItem from './CatsListItem';

type CatsListType = {
  catsData: Array<CatType>;
  onOpenDetailScreen: (id: number, name: string) => void;
};

const CatsList: React.FC<CatsListType> = ({ catsData, onOpenDetailScreen }) => {
  const renderItem: ListRenderItem<CatType> = ({ item }) => {
    const onPress = () => onOpenDetailScreen(item.id, item.name);

    return <CatsListItem item={item} onOpenDetailScreen={onPress} />;
  };

  return (
    <FlatList
      style={styles.catsList}
      data={catsData}
      renderItem={renderItem}
      ListEmptyComponent={<Text style={styles.emptyMessage}>Котов с таким именем нет</Text>}
    />
  );
};

const styles = StyleSheet.create({
  catsList: {
    flex: 1,
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
  },
});

export default CatsList;
