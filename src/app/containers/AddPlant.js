import React from 'react'
import {
  View,
  TextInput,
  Button,
} from 'react-native'
import { connect } from 'react-redux'
import { addPlant } from '../actions'

let AddPlant = ({ dispatch }) => {
  let input
  
  const submit = () => {
    dispatch(addPlant(input))
    input = '';
  }

  return (
    <View>
      <TextInput
        onChangeText={(text) => input = text} 
      /> 
      <Button title="Salvar planta" onPress={() => submit()}/> 
    </View> 
  ) 
}
AddPlant = connect()(AddPlant)

export default AddPlant
