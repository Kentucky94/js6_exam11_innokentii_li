import React, {Component} from 'react';
import {fetchCategories} from "../../store/actions/categoriesActons";
import {ListGroup, ListGroupItem} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {fetchAllItems, fetchItemsByCategory} from "../../store/actions/itemsActions";
import ItemBlock from "../../components/ItemBlock/ItemBlock";

class ItemsMainPage extends Component {
  async componentDidMount() {
    await this.props.fetchCategories();
    await this.props.fetchAllItems();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.match.params.id !== prevProps.match.params.id){
      this.props.fetchItemsByCategory(this.props.match.params.id);
    }
  }

  render() {
    const categories = this.props.categories.map(category =>
      <ListGroupItem
      key={category._id} tag={RouterNavLink} to={'/items/' + category._id}
      >
        {category.name}
      </ListGroupItem>
    );

    const items = this.props.items.map(item =>
      <ItemBlock
        key={item._id}
        id={item._id}
        title={item.title}
        image={item.image}
        price={item.price}
      />
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
          {items}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
  items: state.items.items,
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchAllItems: () => dispatch(fetchAllItems()),
  fetchItemsByCategory: categoryId => dispatch(fetchItemsByCategory(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsMainPage);