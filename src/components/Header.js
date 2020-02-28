import React from "react";
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Characters</h1>
      <div className='button-container'>
      <Link to='/'><button className='btn btn-primary'>Home</button></Link>
      <Link to='/characters/'><button className='btn btn-primary'>Characters</button></Link>
      </div>
    </header>
  );
}
