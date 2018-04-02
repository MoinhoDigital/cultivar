import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PlantList from '../components/PlantList'

const plantList = gql`
	query {
		allPlants(orderBy: createdAt_DESC) {
			id
			binomial
		}
	}
`;

const PlantListWithData = graphql(plantList)(PlantList); 
 
export default PlantListWithData; 
