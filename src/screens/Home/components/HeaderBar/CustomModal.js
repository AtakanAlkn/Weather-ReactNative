import React, {useContext, useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {GlobalContext} from '../../../../context/GlobalState';

const CustomModal = () => {
  const {onVisible, setOnVisible, city, setCity, dark} =
    useContext(GlobalContext);

  const [text, setText] = useState(city);

  const onSubmit = () => {
    setOnVisible(false);
    setCity(text);
  };

  return (
    <TextInput
      autoFocus
      onSubmitEditing={onSubmit}
      value={text}
      onChangeText={newText => setText(newText)} // state'i güncelle
      textAlign="center"
      style={{
        ...styles.textInput,
        backgroundColor: dark ? '#5096FF' : '#001026',
      }}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#001026',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomModal;
