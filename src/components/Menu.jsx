import React from "react";
import { Route } from 'react-router-dom';
import HomePage from './ServiceList';
import DriftPage from './DriftPage';
import TimeAttackPage from './TimeAttackPage';
import ForzaPage from './ForzaPage';

export default function Menu() {

  return <>
    <div className="page">
      <h1>asdf</h1>
      <Route path="/" exact component={HomePage} />
      <Route path="/drift" component={DriftPage} />
      <Route path="/timeattack" component={TimeAttackPage} />
      <Route path="/forza" component={ForzaPage} />
    </div>
  </>
}