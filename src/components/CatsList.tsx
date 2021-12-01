import React from 'react';
import { FlatList, View, ListRenderItem, StyleSheet, Text } from 'react-native';

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
      data={catsData}
      renderItem={renderItem}
      contentContainerStyle={styles.catsList}
      ListEmptyComponent={
        <View style={styles.emptyMessage}>
          <Text>Котов с таким именем нет</Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  catsList: {
    flexGrow: 1,
  },
  emptyMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CatsList;
