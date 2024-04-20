import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { UserContext } from '../context/UserContext.jsx';
import styles from '../Estilos/estilos.jsx';

const Autor = () => {
  
  const { pessoa1} = useContext(UserContext);
  

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 19, marginBottom: 12, color: 'black' }}>Membro:</Text>
      <View style={styles.personContainer}>
        <View style={styles.person}>
          <Text style={styles.personText}>{pessoa1.nome}</Text>
          <Text style={styles.personText}>{pessoa1.rm}</Text>
          <Image source={pessoa1.foto} style={styles.personImage} />
        </View>
      </View>
    </View>
  );
}

export default Autor;
