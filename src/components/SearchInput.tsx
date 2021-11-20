import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

type SearchInputType = {
  setSearchQuery: (text: string) => void;
};

const SearchInput: React.FC<SearchInputType> = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder={'Поиск по имени'}
        onChangeText={(text) => {
          props.setSearchQuery(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  inputField: {
    height: '100%',
    padding: 5,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
});

export default SearchInput;
