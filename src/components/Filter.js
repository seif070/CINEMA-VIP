import React, { useState } from 'react';

const Filter = ({ setTitle,setRate}) => {
 




return (

<div className="filter">
<input
type="text"
placeholder="Filtrer par titre"

onChange={(e) => setTitle(e.target.value)}
/>
 <input

type="text"
placeholder="Filtrer par note"

onChange={(e) => setRate(e.target.value)}


/>

<button >Ajouter</button>
<button >Supprimer</button>

</div>
);
};

export default Filter;


