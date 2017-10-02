import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadCarsInfo } from '../actions';
import { toggleFavorite } from '../../favorite/actions';
import { CarElement } from '../../../models/CarElement';
import { CarsContainer } from '../../../components/carsContainer/CarsContainer';

interface PropTypes {
  cars: CarElement[];
  favorites: string[];
  loadCarsInfo: () => void;
  toggleFavorite: () => void;
}

const mapStateToProps = (state, ownProps = {}) => {
  return {
    cars: state.home.cars,
    favorites: state.favorite.favoriteCarTitles as string[]
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadCarsInfo, toggleFavorite }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends React.Component<PropTypes, {}> {
  public render() {
    const { cars, favorites, toggleFavorite } = this.props;
    return (
      <div className="home">
        <CarsContainer
          cars={cars.map((car: CarElement) => ({ ...car, IsFavorite: favorites.indexOf(car.Title) > -1 }))}
          displayFavoriteIcon
          toggleFavorite={toggleFavorite}
        />
      </div>
    );
  }

  private componentWillMount() {
    this.props.loadCarsInfo();
  }
}

export const onEnter = (store, next, replace, callback) => {
  // Some login functionality may go here!
  callback();
};
