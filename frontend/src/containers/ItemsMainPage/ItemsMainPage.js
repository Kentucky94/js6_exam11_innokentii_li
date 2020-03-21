import React, {Component} from 'react';
import {fetchCategories, fetchCategory} from "../../store/actions/categoriesActons";
import {ListGroup, ListGroupItem} from "reactstrap";
import {connect} from "react-redux";
import {fetchAllItems, fetchItemsByCategory} from "../../store/actions/itemsActions";
import ItemBlock from "../../components/ItemBlock/ItemBlock";
import './ItemsMainPage.css';

class ItemsMainPage extends Component {
  async componentDidMount() {
    await this.props.fetchCategories();
    await this.props.fetchAllItems();
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.currentCategory.name !== prevProps.currentCategory.name){
      await this.props.fetchItemsByCategory(this.props.currentCategory._id);
    }
  }

  toFullPage = itemId => {
    this.props.history.push('/items/' + itemId);
  };

  render() {
    const categories = this.props.categories.map(category =>
      <ListGroupItem
        key={category._id} onClick={() => this.props.fetchCategory(category._id)}
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
        onClick={() => this.toFullPage(item._id)}
      />
    );

    return (
      <div className="ItemsMainPage">
        <div className='MainPageLeft'>
          <h2>Categories</h2>
          <ListGroup>
            <ListGroupItem>
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
  currentCategory: state.categories.currentCategory,
  items: state.items.items,
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchCategory: categoryId => dispatch(fetchCategory(categoryId)),
  fetchAllItems: () => dispatch(fetchAllItems()),
  fetchItemsByCategory: categoryId => dispatch(fetchItemsByCategory(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsMainPage);