import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  let [chars, setChars] = useState([]);
  let [index, setIndex] = useState('1');
  let [URL, setURL] = useState('https://rickandmortyapi.com/api/character/?page='+index);

  useEffect(() => {
    axios.get(URL).then(res => {
      console.log(res);
      setChars(res.data.results);
    }).catch(err => {
      console.log(err);
    })
  }, [URL]);

  return (
    <div>
    <section className='pagination-btn'>
      <div>
    <button className="btn btn-secondary" onClick={() => setIndex((parseInt(index)-1).toString(), setURL('https://rickandmortyapi.com/api/character/?page='+(parseInt(index)-1).toString()))} disabled={index == '1'}>Prev</button>
    <button className="btn btn-secondary" onClick={() => setIndex((parseInt(index)+1).toString(), setURL('https://rickandmortyapi.com/api/character/?page='+(parseInt(index)+1).toString()))} disabled={index == '25'}>Next</button> 
    {index}
    </div>
   <SearchForm data={setChars} state={URL}/>
    </section>
    <section className="character-list">
      {chars.map(c => (
        <CharacterCard key={c.id} entity={c}/>
      ))}
    </section>
    </div>
  );
}
