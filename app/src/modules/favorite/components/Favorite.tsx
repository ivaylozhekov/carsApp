import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CarElement } from '../../../models/CarElement';
import { CarsContainer } from '../../../components/carsContainer/CarsContainer';

interface PropTypes {
  cars: CarElement[];
  favorites: string[];
}

const mapStateToProps = (state, ownProps = {}) => {
  return {
    cars: state.home.cars,
    favorites: state.favorite.favoriteCarTitles,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Favorite extends React.Component<PropTypes, {}> {
  public render() {
    const { cars, favorites } = this.props;
    return (
      <div className="favorite">
        {favorites.length ? (
          <CarsContainer
            displayFavoriteIcon={false}
            cars={cars.filter(car => favorites.indexOf(car.Title) > -1)}
          />
        ) : (
          <div className="no-favorites">
            You have't selected your favorite cars yet!
          </div>
        )}
      </div>
    );
  }
}

export const onEnter = (store, next, replace, callback) => {
  callback();
};
