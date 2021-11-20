import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, KeyboardAvoidingView, Text } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import CatsList from '../components/CatsList';
import SearchInput from '../components/SearchInput';
import { Cats, CatType } from '../data/CatsData';

const MainScreen: NavigationFunctionComponent = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [catsData, setCatsData] = useState<Array<CatType>>([]);

  useEffect(() => {
    setCatsData(Cats);
  }, []);

  const filtredCatsData = catsData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={'position'} keyboardVerticalOffset={90}>
        <View style={styles.catsList}>
          {filtredCatsData.length < 1 ? (
            <Text>Котов с таким именем нет</Text>
          ) : (
            <CatsList catsData={filtredCatsData} componentId={props.componentId} />
          )}
        </View>
        <View style={styles.searchInput}>
          <SearchInput setSearchQuery={setSearchQuery} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

MainScreen.options = {
  topBar: {
    title: {
      text: 'Cats List',
      color: '#CED46A',
    },
    background: {
      color: '#07553B',
    },
  },
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  catsList: {
    height: '95%',
  },
  searchInput: {
    height: '5%',
  },
});
