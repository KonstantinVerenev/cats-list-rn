import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

type SearchInputType = {
  onChangeText: (text: string) => void;
};

const SearchInput: React.FC<SearchInputType> = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder={'Поиск по имени'}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputField: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
});

export default SearchInput;
