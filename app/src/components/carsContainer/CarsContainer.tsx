import * as React from 'react';
import { Grid } from 'react-bootstrap';
import { CarElement } from '../../models/CarElement';
import { CarTile } from './carTile/CarTile';
interface PropTypes {
  cars: CarElement[];
  displayFavoriteIcon: boolean;
  toggleFavorite?: (carTitle: string) => void;
}

export const CarsContainer: React.StatelessComponent<PropTypes>  = ({ cars, displayFavoriteIcon, toggleFavorite }) => (
  <div className="home">
    <Grid>
      {cars.map((car: CarElement) => (
        <CarTile
          key={car.Title}
          car={car}
          displayFavoriteIcon={displayFavoriteIcon}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </Grid>
  </div>
);
