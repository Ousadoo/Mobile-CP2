import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39586D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    color: 'white'
  },
  btn: {
    borderWidth: 1,
    borderColor: '#7F99B2',
    height: 50,
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#98A1AA',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    color: 'black'
  },
  itemContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 15,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
    color: 'white'
  },
  btnDelete: {
    backgroundColor: 'red',
    borderRadius: 12,
    width: 100,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#39586D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  formBtn: {
    borderWidth: 1,
    height: 50,
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#98A1AA',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 10,
    color: 'white'
  },
  personContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  person: {
    alignItems: 'center',
  },
  personText: {
    fontSize: 15,
    paddingHorizontal: 10,
    color:'white'
  },
  personImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 5,
  },
  btnAbout: {
    borderWidth: 1,
    height: 50,
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#98A1AA',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default estilos;
