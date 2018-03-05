let nextPlantId = 1
export const addPlant = (text) => ({
  type: 'ADD_PLANT',
  id: nextPlantId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const removePlant = (id) => ({
  type: 'REMOVE_PLANT',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
