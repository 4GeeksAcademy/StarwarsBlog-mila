import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();
    const { favorites = [] } = store;
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const handleDelete = (name) => {
        dispatch({
            type: "DELETE_FAVORITE",
            payload: name
        })
    }

    const handleNavigateToDetail = (fav) => {
        setShowDropdown(false);
        
        switch(fav.type) {
            case 'character':
                navigate(`/detailsCharacter/${fav.uid}`);
                break;
            case 'vehicle':
                navigate(`/detailVehicles/${fav.uid}`);
                break;
            case 'planet':
                navigate(`/detailPlanets/${fav.uid}`);
                break;
        }
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <img className="logo"
                        src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG9.png"
                        alt="Star Wars Logo" style={{ height: "50px" }} />
                </Link>
                <div className="ml-auto position-relative">
                    <button 
                        className="btn btn-warning dropdown-toggle" 
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        Favorites ({favorites.length})
                    </button>
                    
                    {showDropdown && (
                        <div className="dropdown-menu show position-absolute" 
                             style={{ right: 0, top: '100%' }}>
                            {favorites.length > 0 ? (
                                favorites.map((fav, index) => (
                                    <div key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                        <span 
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => handleNavigateToDetail(fav)}
                                        >
                                            {fav.name}
                                        </span>
                                        <button 
                                            className="btn btn-sm btn-danger ms-2"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDelete(fav.name);
                                            }}
                                        >
                                            ❌
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <div className="dropdown-item">No favorites yet</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};