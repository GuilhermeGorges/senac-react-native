import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerBetween: {
      flex: 1,
      backgroundColor: 'f5f5f5',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20
    },
    main: {
      flex: 1,
      position: 'relative'
    },
    hero: {
      position: 'absolute',
      width: '100%',
      height: 200,
      zIndex: 1,
      marginBottom: 20
    },
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    input: {
      padding: 8,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 20,
      borderRadius: 4
    },    
    button: {
      backgroundColor: '#121A2C',
      color: '#FFBA26',
      paddingHorizontal: 48,
      borderRadius: 4,
      marginTop: 20,
      paddingVertical: 6
    },
    header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 20
    },
    comandaImage: {
      width: 327,
      height: 145,
    }
  });
  