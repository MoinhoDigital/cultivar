import { connect } from 'react-redux'
import { removePlant } from '../actions'
import PlantList from '../components/PlantList'

const getVisiblePlants = (plants, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return plants
    case 'SHOW_COMPLETED':
      return plants.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return plants.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  plants: getVisiblePlants(state.plants, state.visibilityFilter)
})

const mapDispatchToProps = {
  onPlantClick: removePlant
}

const VisiblePlants = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlantList)

export default VisiblePlants
