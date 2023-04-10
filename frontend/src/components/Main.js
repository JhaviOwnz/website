import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Content from './Content';
import Contact from './Contact';

function Main() {
  return (
    <Router>
      <div>
        {/* Aquí podrías incluir un componente de navegación */}
        <Switch>
          <Route exact path="/" component={Content} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default Main;
