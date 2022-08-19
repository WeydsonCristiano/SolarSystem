import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="Planetas" data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planets.map((planeta) => (
            <PlanetCard
              key={ planeta.name }
              planetName={ planeta.name }
              planetImage={ planeta.image }
            />
          ))
        }
      </div>
    );
  }
}

export default SolarSystem;
