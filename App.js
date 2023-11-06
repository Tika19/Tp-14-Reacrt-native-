import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const contarVocales = (cadena) => {
  let aCount = 0;
  let eCount = 0;
  let iCount = 0;
  let oCount = 0;
  let uCount = 0;

  cadena = cadena.toLowerCase();

  for (let i = 0; i < cadena.length; i++) {
    const letra = cadena[i];
    switch (letra) {
      case 'a':
        aCount++;
        break;
      case 'e':
        eCount++;
        break;
      case 'i':
        iCount++;
        break;
      case 'o':
        oCount++;
        break;
      case 'u':
        uCount++;
        break;
      default:
        break;
    }
  }

  return [aCount, eCount, iCount, oCount, uCount];
};

const App = () => {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState([]);

  const handleCountVowels = () => {
    const results = contarVocales(inputText);
    setResults(results);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInputText(text)}
        value={inputText}
        placeholder="Ingrese una cadena de caracteres"
      />
      <Button title="Contar Vocales" onPress={handleCountVowels} />
      <Text>Resultado:</Text>
      <Text>'a': {results[0]}</Text>
      <Text>'e': {results[1]}</Text>
      <Text>'i': {results[2]}</Text>
      <Text>'o': {results[3]}</Text>
      <Text>'u': {results[4]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default App;