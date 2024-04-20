import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Estilos/estilos.jsx';

const Delete = ({ route, navigation }) => {
  const { produto } = route.params;

  async function deletarCelular() {
    let produtos = await AsyncStorage.getItem('CELULARES');
    produtos = JSON.parse(produtos).filter((item) => item.linha !== produto.linha);
    await AsyncStorage.setItem('CELULARES', JSON.stringify(produtos));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style= {{color: 'white'}}>EXCLUIR CELULAR</Text>
      <Text style={{ fontSize: 18, color: 'white' }}>LINHA: {produto.linha}</Text>
      <Text style={{ fontSize: 18, color: 'white' }}>MARCA: {produto.marca}</Text>
      <Text style={{ fontSize: 18, color: 'white'}}>MODELO: {produto.modelo}</Text>

      <TouchableOpacity style={styles.btnDelete} onPress={deletarCelular}>
        <Text style={{ color: 'white' }}>EXCLUIR</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Delete;
