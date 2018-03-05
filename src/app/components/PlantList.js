import React from 'react'
import { 
  FlatList
} from 'react-native'
import PropTypes from 'prop-types'
import Plant from './Plant'

const PlantList = ({ plants, onPlantClick }) => (
  <FlatList
    data={plants}
    renderItem={({item}) => ( <Plant {...item} onPress={()=> onPlantClick(item.id)}>{item.key}</Plant> )}
    keyExtractor={(item, index) => index+'ddd'}
  />  
)  

PlantList.propTypes = {
  plants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onPlantClick: PropTypes.func.isRequired
}

export default PlantList
