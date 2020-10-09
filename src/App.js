import React, { useState, useEffect } from 'react';

const FetchGithub = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/workshopsjsmvd')
    .then(response => response.json())
      .then(res => {
        setName(res.name);
        setLocation(res.location);
      });
  });

  return [
    <h1 key="name">{`Nombre: ${name}`}</h1>,
    <h2 key="location">{`País: ${location}`}</h2>
  ];
}

export default FetchGithub;
