import React, { useEffect, useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from 'react-router-dom';
import { specificVehicle } from '../services/APIservices.js';

function DetailVehicles() {
  const {id} = useParams();
  const {store, dispatch} = useGlobalReducer();
  const {vehicleDetail} = store;
  
  useEffect(() => {
    specificVehicle(dispatch, id)
  }, [dispatch, id]);

  console.log("Vehicle Detail complete:", vehicleDetail);
  
  const vehicleProperties = vehicleDetail?.properties;
  
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
      className='card border-warning card-vehicle-detail' 
      style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}
    >
      <h2>More about</h2>
      {
        vehicleDetail && vehicleProperties ? (
          <>
            <img 
              src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/vehicles/${id}.jpg?raw=true`}
              className="card-img-top"
              alt={vehicleProperties.name}
              style={{ maxWidth: '300px', margin: '0 auto', display: 'block' }}
            />
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{vehicleProperties.name}</h2>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Cargo capacity:</p>
              <span style={valueStyle}>{vehicleProperties.cargo_capacity}</span>
            </div>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Consumables:</p>
              <span style={valueStyle}>{vehicleProperties.consumables}</span>
            </div>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Crew:</p>
              <span style={valueStyle}>{vehicleProperties.crew}</span>
            </div>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Manufacturer:</p>
              <span style={valueStyle}>{vehicleProperties.manufacturer}</span>
            </div>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Model:</p>
              <span style={valueStyle}>{vehicleProperties.model}</span>
            </div>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Passengers:</p>
              <span style={valueStyle}>{vehicleProperties.passengers}</span>
            </div>
          </>
        ) : (
          <p>No hay detalle de personaje</p>
        )
      }
    </div>
  )
}

export default DetailVehicles;