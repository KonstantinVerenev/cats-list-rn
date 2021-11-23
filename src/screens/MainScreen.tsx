import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';

import { DETAIL_SCREEN } from '../../navigation';
import CatsList from '../components/CatsList';
import SearchInput from '../components/SearchInput';
import colors from '../constants/colors';
import { Cats, CatType } from '../data/CatsData';

const MainScreen: NavigationFunctionComponent = ({ componentId }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [catsData, setCatsData] = useState<Array<CatType>>(Cats);

  const onChangeText = (text: string) => {
    setSearchQuery(text);
  };

  useEffect(() => {
    const filtredCatsData = Cats.filter(({ name }) =>
      name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    setCatsData(filtredCatsData);
  }, [searchQuery]);

  const onOpenDetailScreen = useCallback((catId: number, catName: string) => {
    Navigation.push(componentId, {
      component: {
        name: DETAIL_SCREEN,
        passProps: {
          catId: catId,
        },
        options: {
          topBar: {
            title: {
              text: catName,
            },
          },
        },
      },
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={90}>
        <View style={styles.catsList}>
          <CatsList catsData={catsData} onOpenDetailScreen={onOpenDetailScreen} />
        </View>
        <View style={styles.searchInput}>
          <SearchInput onChangeText={onChangeText} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

MainScreen.options = {
  topBar: {
    title: {
      text: 'Список котов',
      color: colors.lightGreen,
      fontFamily: 'OpenSans-Bold',
    },
    background: {
      color: colors.darkGreen,
    },
  },
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  catsList: {
    flex: 1,
  },
  searchInput: {
    height: 50,
  },
});
