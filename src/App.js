import React from 'react';
import Header from './components/Header.js';
import { Route} from 'react-router-dom';
import CharacterList from './components/CharacterList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/Sprint-Challenge-Single-Page-Apps/'>

      </Route>
    <Route path='/Sprint-Challenge-Single-Page-Apps/characters/'>
      <CharacterList/>
    </Route>
    </main>
  );
}
