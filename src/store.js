export const initialStore = () => {
  return {
    message: null,
    favorites: [],
    characters: [],
    vehicles: [],
    planets: [],
    characterDetail: null,
    planetDetail: null,
    vehicleDetail: null
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_characters':
      return {
        ...store,
        characters: action.payload
      }

    case 'set_vehicles':
      return {
        ...store,
        vehicles: action.payload
      }

    case 'set_planets':
      return {
        ...store,
        planets: action.payload
      }

    case 'detail_Character':
      return {
        ...store,
        characterDetail: action.payload

      }

    case 'detail_Vehicle':
      return {
        ...store,
        vehicleDetail: action.payload

      }

    case 'detail_Planet':
      return {
        ...store,
        planetDetail: action.payload

      }

    case 'ADD_FAVORITE':
      return {
        ...store,
        favorites: store.favorites.some(fav => fav.name === action.payload.name)
          ? store.favorites
          : [...store.favorites, action.payload]
      }

    case 'DELETE_FAVORITE':
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav.name !== action.payload)
      }

    default:
      throw Error('Unknown action.');
  }
}
