import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const FoodCard = ({ name, calories, value, imageURL }) => {
  return (
    <View style={styles.card}>
    <View style={styles.leftSide}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.caloriesContainer}>
        <FontAwesome5 padding='5px'name='fire' size={10} color='red' />
        <Text style={styles.calories}>{calories} calories</Text>
      </View>
      <Text style={styles.value}>$ {value.toFixed(2)}</Text>
    </View>
    <View style={styles.rightSide}>
      <Image source={ imageURL } style={styles.image} />
    </View>
  </View>
  );
};

// usage exemple 
// <FoodCard
// name='Beef Burguer'
// calories={70}
// value={12.00}
// imageURL={require('./assets/burger.png')}
// />
// <FoodCard
// name='Pancakes'
// calories={60}
// value={12.00}
// imageURL={require('./assets/pancakes.png')} />
const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      alignItems: 'center',
    },
    leftSide: {
      flex: 1,
      padding: 10,
    },
    name: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    caloriesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    calories: {
      fontSize: 14,
      color: 'gray',
      padding: '5px',
    },
    value: {
      fontSize: 16,
      marginTop: 5,
      fontWeight: 'bold',
      color: 'yellow',
    },
    rightSide: {
      flex: 1,
      alignItems: 'flex-end',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
  });

export default FoodCard;