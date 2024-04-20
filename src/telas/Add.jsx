import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Estilos/estilos.jsx';


const Add = ({ navigation }) => {
  const [linhaCelular, setLinhaCelular] = useState('');
  const [marcaCelular, setMarcaCelular] = useState('');
  const [modeloCelular, setModeloCelular] = useState('');

  async function salvar() {
    if (!linhaCelular.trim() || !marcaCelular.trim() || !modeloCelular.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    let produtos = [];
    if (await AsyncStorage.getItem('CELULARES') !== null) {
      produtos = JSON.parse(await AsyncStorage.getItem('CELULARES'));
    }

    produtos.push({ linha: linhaCelular, marca: marcaCelular, modelo: modeloCelular });

    await AsyncStorage.setItem('CELULARES', JSON.stringify(produtos));
    alert('CELULAR SALVO');
    setLinhaCelular('');
    setMarcaCelular('');
    setModeloCelular('');
  }

  return (
        <View style={styles.formContainer}>
            <Text style={{ color: 'white' }}>CADASTRO DE CELULARES</Text>

            <TextInput
                style={styles.input}
                placeholder="Linha Do Celular"
                value={linhaCelular}
                onChangeText={text => setLinhaCelular(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Marca Do Celular"
                value={marcaCelular}
                onChangeText={text => setMarcaCelular(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Modelo Do Celular"
                value={modeloCelular}
                onChangeText={text => setModeloCelular(text)}
            />

            <TouchableOpacity style={styles.formBtn} onPress={salvar}>
                <Text style={{ color: 'black' }}>CADASTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('List')}>
                <Text style={{ color: 'black' }}>VER CELULARES</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnAbout} onPress={() => navigation.navigate('Autor')}>
                <Text style={{ color: 'black' }}>Autor</Text>
            </TouchableOpacity>
        </View>
  );
}

export default Add;
