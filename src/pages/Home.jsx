import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getCharacters, getVehicles, getPlanets } from "../services/APIservices.js";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();
	const navigate = useNavigate();

	useEffect(() => {
		getCharacters(dispatch);
		getVehicles(dispatch);
		getPlanets(dispatch);
	}, []);

	const handleNavigateCharacter = (id) => {
		navigate(`/detailsCharacter/${id}`);
	}

	const handleNavigateVehicle = (id) => {
		navigate(`/detailVehicles/${id}`);
	}

	const handleNavigatePlanets = (id) => {
		navigate(`/detailPlanets/${id}`);
	}

	const handleAddFavorite = (item, type) => {
		dispatch({
			type: "ADD_FAVORITE",
			payload: {
				name: item.name,
				uid: item.uid,
				type: type
			}
		})
	}

	const isFavorite = (name) => store.favorites?.some(fav => fav.name === name) || false;

	return (
		<div className="text-center mt-5">
			<h1 className="my-5">Characters</h1>
			<div className="characters-container d-flex overflow-x-scroll gap-3">
				{
					store.characters.map(character => {

						return (
							<div className="col-3 mx-4">
								<div className="card border-warning">
									<img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/${character.uid}.jpg?raw=true`} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{character.name}</h5>
										<button className="btn btn-warning mx-5 my-2"
											onClick={() => handleNavigateCharacter(character.uid)}
										>
											Learn more
										</button>
										<button className="btn btn-outline-danger mx-5 my-2"
											onClick={() => handleAddFavorite(character, 'character')}>
											<i className={`${isFavorite(character.name) ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
										</button>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>

			<h1 className="my-5">Vehicles</h1>
			<div className="vehicles-container d-flex overflow-x-scroll">
				{
					store.vehicles.map(vehicles => {
						return (
							<div className="col-3 mx-4">
								<div className="card border-warning">
									<img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/vehicles/${vehicles.uid}.jpg?raw=true`} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{vehicles.name}</h5>
										<button className="btn btn-warning mx-5 my-2"
											onClick={() => handleNavigateVehicle(vehicles.uid)}
										>
											Learn more
										</button>
										<button className="btn btn-outline-danger mx-5 my-2"
											onClick={() => handleAddFavorite(vehicles, 'vehicle')}>
											<i className={`${isFavorite(vehicles.name) ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
										</button>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>

			<h1 className="my-5">Planets</h1>
			<div className="planets-container d-flex overflow-x-scroll">
				{
					store.planets.map(planets => {
						return (
							<div className="col-3 mx-4">
								<div className="card border-warning">
									<img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/${planets.uid}.jpg?raw=true`} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{planets.name}</h5>
										<button className="btn btn-warning mx-5 my-2"
											onClick={() => handleNavigatePlanets(planets.uid)}
										>
											Learn more
										</button>
										<button className="btn btn-outline-danger mx-5 my-2"
											onClick={() => handleAddFavorite(planets, 'planet')}>
											<i className={`${isFavorite(planets.name) ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
										</button>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>

		</div >
	);

}; 