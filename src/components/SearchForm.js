import React, { useState, useEffect } from "react";
import axios from 'axios';
export default function SearchForm(props) {
 
  let [URL, setURL] = useState('https://rickandmortyapi.com/api/character/')
  let [queryType, setQueryType] = useState('?name=');
  let [query, setQuery] = useState('');
  let [status, setStatus] = useState('search');


let handleText = e => {
  setQuery(e.target.value)
  if (e.target.value === '' || undefined || null) {
    setStatus('pagination');
  }
   else {
     setStatus('search');
   }
}

let handleType = e => {
  setQueryType(e.target.value);
}

  useEffect(() => {
    switch(status) {
      case 'search':
        axios.get(URL+queryType+query.toLowerCase()).then(res => {
          props.data(res.data.results);
        }).catch(err => {
          console.log(err);
        })
      break;
      case 'pagination':
        axios.get(props.state).then(res => {
          props.data(res.data.results);
        }).catch(err => {
          console.log(err);
        })
      break;
    }

  }, [query]) 

  return (
    <section className="search-form">
     <form onSubmit={(e) => e.preventDefault()}>
       <input type='text' onChange={handleText} name='name' tabIndex='0' placeholder='Search' autoComplete='off'/>
       <select onChange={handleType}>
         <option disabled>Search By</option>
         <option value='?name='>Name</option>
         <option value='?status='>Dead or Alive</option>
         <option value='?species='>Species</option>
         <option value='?gender='>Gender</option>
       </select>
     </form>
    </section>
  );
}
