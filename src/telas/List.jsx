import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Estilos/estilos.jsx';

const List = ({ navigation }) => {
  const [listProdutos, setListProdutos] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      buscarDados();
    });

    return unsubscribe;
  }, [navigation]);

  async function buscarDados() {
    const p = await AsyncStorage.getItem('CELULARES');
    setListProdutos(JSON.parse(p) || []);
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>LISTA DE CELULARES</Text>

      <FlatList
        data={listProdutos}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Delete', { produto: item })}>
            <Text style={{ fontSize: 18, color: 'white'}}>LINHA: {item.linha} MARCA: {item.marca} MODELO: {item.modelo}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Add')}>
        <Text style={{ color: 'white' }}>ADICIONAR CELULAR</Text>
      </TouchableOpacity>
    </View>
  );
}

export default List;
