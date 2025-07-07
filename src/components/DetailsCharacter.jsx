import React, { useEffect, useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from 'react-router-dom';
import { specificCharacter } from '../services/APIservices.js';

function DetailsCharacter() {
  const {id} = useParams();
  const {store, dispatch} = useGlobalReducer();
  const {characterDetail} = store;
  
  useEffect(() => {
    specificCharacter(dispatch, id)
  }, [dispatch, id]);

  console.log("Character Detail completo:", characterDetail);
  
  const characterProperties = characterDetail?.properties;
  

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
      className='card border-warning card-character-detail' 
      style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}
    >
      <h2>More about</h2>
      {
        characterDetail && characterProperties ? (
          <>
            <img 
              src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/${id}.jpg?raw=true`}
              className="card-img-top"
              alt={characterProperties.name}
              style={{ maxWidth: '300px', margin: '0 auto', display: 'block' }}
            />
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{characterProperties.name}</h2>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Birth Year:</p>
              <span style={valueStyle}>{characterProperties.birth_year}</span>
            </div>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Gender:</p>
              <span style={valueStyle}>{characterProperties.gender}</span>
            </div>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Height:</p>
              <span style={valueStyle}>{characterProperties.height} cm</span>
            </div>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Mass:</p>
              <span style={valueStyle}>{characterProperties.mass} kg</span>
            </div>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Hair Color:</p>
              <span style={valueStyle}>{characterProperties.hair_color}</span>
            </div>
            
            <div style={infoLineStyle}>
              <p style={labelStyle}>Eye Color:</p>
              <span style={valueStyle}>{characterProperties.eye_color}</span>
            </div>
          </>
        ) : (
          <p>No hay detalle de personaje</p>
        )
      }
    </div>
  )
}

export default DetailsCharacter;