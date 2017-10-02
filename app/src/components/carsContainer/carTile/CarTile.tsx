import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { CarElement } from '../../../models/CarElement';
import { CustomButton } from '../../customButton/CustomButton';
import * as classNames from 'classnames';
import * as FontAwesome from 'react-fontawesome';

interface PropTypes {
  car: CarElement;
  displayFavoriteIcon: boolean;
  toggleFavorite?: (carTitle: string) => void;
}

export const CarTile: React.StatelessComponent<PropTypes> = ({
  car,
  displayFavoriteIcon,
  toggleFavorite
}) => (
  <Row className="car-tile" key={car.Title}>
    <Col xs={12} md={6}>
      <img src={car.ImageURL} alt="" className="car-preview" />
      {displayFavoriteIcon && toggleFavorite ? (
        <div className="favorite" onClick={() => toggleFavorite(car.Title)}>
          <FontAwesome
            className={classNames({ active: car.IsFavorite })}
            name="star"
          />
        </div>
      ) : null}
    </Col>
    <Col xs={12} md={6}>
      <div className="title tile-element">{car.Title}</div>
      <div className="car-description tile-element">{car.Text}</div>
      <div className="tile-element">
        <CustomButton>{car.ButtonText}</CustomButton>
      </div>
    </Col>
  </Row>
);
