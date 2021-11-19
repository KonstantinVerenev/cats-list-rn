import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CatsList from '../components/CatsList';
import SearchInput from '../components/SearchInput';
import { Cats, CatType } from '../data/CatsData';

const MainScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [catsData, setCatsData] = useState<Array<CatType>>([]);

  useEffect(() => {
    setCatsData(Cats);
  }, []);

  const filtredCatsData = catsData.filter((item) => item.name.includes(searchQuery));

  return (
    <View style={styles.container}>
      <View style={styles.catsList}>
        <CatsList catsData={filtredCatsData} />
      </View>
      <View style={styles.searchInput}>
        <SearchInput setSearchQuery={setSearchQuery} />
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {},
  catsList: {
    height: '95%',
  },
  searchInput: {
    height: '5%',
  },
});
