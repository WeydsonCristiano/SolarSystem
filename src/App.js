import React from 'react';
import Header from './components/Header';
import Missions from './components/Mission';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Sistema Solar</p>
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
