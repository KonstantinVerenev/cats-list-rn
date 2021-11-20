import React from 'react';
import { FlatList, View, ListRenderItem, Image, StyleSheet } from 'react-native';
import { CatType } from '../data/CatsData';
import CatsListItem from './CatsListItem';

type CatsListType = {
  catsData: Array<CatType>;
  componentId: string;
};

const CatsList: React.FC<CatsListType> = (props) => {
  const renderItem: ListRenderItem<CatType> = ({ item }) => {
    return <CatsListItem item={item} componentId={props.componentId} />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={props.catsData} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default CatsList;
