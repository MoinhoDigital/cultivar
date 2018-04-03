import React, { Component } from 'react'
import {
	ActivityIndicator,
  View, 
  Text,
  FlatList
} from 'react-native'
import Plant from './Plant'

class PlantList extends Component {
	render () {
		console.log("this.props.data")
		console.log(this.props.data)
	  return (
	  	<View>
	  		<Text>{this.props.loading}</Text>
		    { this.props.data.loading ? (
					<ActivityIndicator animating={this.props.data.loading} />
	    	) : (
		    	this.props.data.loading ? (
		    		<FlatList data={this.props.data.allPlants} renderItem={({item}) => <Plant data={item} />} keyExtractor={(item, index) => index.toString()} />
		    	) : (
		    		this.props.data.allPlants.map(plant => (
				      <Plant data={plant} key={plant.id}/>
				    ))
		    	)
		    )} 
	  	</View>
	  )     
	} 
}

export default PlantList
