import React, { useEffect, useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from 'react-router-dom';
import { specificPlanet } from '../services/APIservices.js';

function DetailPlanets() {
  const {id} = useParams();
  const {store, dispatch} = useGlobalReducer();
  const {planetDetail} = store;
  
  useEffect(() => {
    specificPlanet(dispatch, id)
  }, [dispatch, id]);

  console.log("Planets Detail complete:", planetDetail);
  
  const planetProperties = planetDetail?.properties;
  

  const infoLineStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '8px',
    backgroundColor: '#FFE81F',
    borderRadius: '4px'
  };
  
  const labelStyle = {
    margin: 0,
    marginRight: '10px',
    fontWeight: 'bold',
    minWidth: '120px'
  };
  
  const valueStyle = {
    margin: 0,
    color: 'black'
  };
  
  return (
    <div 
      className='card border-warning card-planet-detail' 
      style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}
    >
      <h2>More about</h2>
      {
        planetDetail && planetProperties ? (
          <>
            <img 
              src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/${id}.jpg?raw=true`}
              className="card-img-top"
              alt={planetProperties.name}
              style={{ maxWidth: '300px', margin: '0 auto', display: 'block' }}
            />
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{planetProperties.name}</h2>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Climate:</p>
              <span style={valueStyle}>{planetProperties.climate}</span>
            </div>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Diameter:</p>
              <span style={valueStyle}>{planetProperties.diameter}</span>
            </div>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Gravity:</p>
              <span style={valueStyle}>{planetProperties.gravity}</span>
            </div>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Terrain:</p>
              <span style={valueStyle}>{planetProperties.terrain}</span>
            </div>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Population:</p>
              <span style={valueStyle}>{planetProperties.population}</span>
            </div>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Rotation period:</p>
              <span style={valueStyle}>{planetProperties.rotation_period}</span>
            </div>
          </>
        ) : (
          <p>No planet detail</p>
        )
      }
    </div>
  )
}

export default DetailPlanets;
