import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import colors from '../constants/colors';

type SearchInputType = {
  onChangeText: (text: string) => void;
};

const SearchInput: React.FC<SearchInputType> = ({ onChangeText }) => {
  return (
    <TextInput
      style={styles.inputField}
      placeholder={'Поиск по имени'}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  inputField: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    fontSize: 16,
  },
});

export default SearchInput;
