export const getCharacters = async (dispatch) => {
    const response = await fetch("https://www.swapi.tech/api/people")
    const data = await response.json()
    dispatch({ type: "set_characters", payload: data.results })
}

export const getVehicles = async (dispatch) => {
    const response = await fetch("https://www.swapi.tech/api/vehicles")
    const data = await response.json()
    dispatch({ type: "set_vehicles", payload: data.results })
}

export const getPlanets = async (dispatch) => {
    const response = await fetch("https://www.swapi.tech/api/planets")
    const data = await response.json()
    dispatch({ type: "set_planets", payload: data.results })
}

export const specificCharacter = async (dispatch, id) => {
    
    try {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
        if (!response.ok) {
            throw new Error("Error getting character details", response.status);
        }
        const data = await response.json();
        console.log(data);
        
        dispatch({
            type: 'detail_Character',
            payload: data.result
        })
        return data.result
    }
    catch (error) {
        console.log("Error", error)
    }
}

export const specificVehicle = async (dispatch, id) => {
    
    try {
        const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
        if (!response.ok) {
            throw new Error("Error getting vehicle details", response.status);
        }
        const data = await response.json();
        console.log(data);

        dispatch({
            type: 'detail_Vehicle',
            payload: data.result
        })
        return data.result

    } catch (error) {
        console.log("Error", error);        
    }
}

export const specificPlanet = async (dispatch, id) => {
    
    try {
        const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
        if (!response.ok) {
            throw new Error("Error getting planet details", response.status);
        }
        const data = await response.json();
        console.log(data);

        dispatch({
            type: 'detail_Planet',
            payload: data.result
        })
        return data.result

    } catch (error) {
        console.log("Error", error);        
    }
}