import React, {Component} from 'react';
import {fetchCategories} from "../../store/actions/categoriesActons";
import {ListGroup, ListGroupItem} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';
import {connect} from "react-redux";

class ItemsMainPage extends Component {
  async componentDidMount() {
    await this.props.fetchCategories();
  }

  render() {
    const categories = this.props.categories.map(category =>
      <ListGroupItem
      tag={RouterNavLink} to={'/items/' + category._id}
      >
        {category.name}
      </ListGroupItem>
  );

    return (
      <div className="ItemsMainPage">
        <div className='MainPageLeft'>
          <h2>Categories</h2>
          <ListGroup>
            <ListGroupItem tag={RouterNavLink} to='/' exact>
              All Items
            </ListGroupItem>
            {categories}
          </ListGroup>
        </div>
        <div className='MainPageRight'>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsMainPage);