import React from 'react'
import {
  Text
} from 'react-native'

const Plant = ({data}) => {
	return <Text>{data.binomial}</Text>
}  

export default Plant