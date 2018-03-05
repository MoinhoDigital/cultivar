const plants = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'REMOVE_PLANT':
      return state.filter(plant =>
        (plant.id !== action.id) 
      ) 
    default:
      return state
  }
}

export default plants
