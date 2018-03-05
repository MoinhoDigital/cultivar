import React from 'react'
import {
  Text
} from 'react-native'
import PropTypes from 'prop-types'

const Plant = ({ onPress, completed, text }) => (
  <Text
    onPress={onPress}
    style={{
      color: completed ? 'green' : 'yellow'
    }} 
  > 
    {text}
  </Text>
)

Plant.propTypes = {
  onPress: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Plant
