import React, {Component} from 'react';
import {deleteItem, fetchItemById} from "../store/actions/itemsActions";
import {connect} from "react-redux";

class FullItemPage extends Component {
  async componentDidMount() {
    await this.props.fetchItem(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <img style={{'width': '300px'}} src={'http://localhost:8080/uploads/' + this.props.item.image} alt="itemimg"/>
        <h3><b>Title: </b>{this.props.item.title}</h3>
        <h3><b>Description: </b>{this.props.item.description}</h3>
        <h3><b>Price: </b>{this.props.item.price}</h3>
        <button style={{'display': !!this.props.user ? 'block' : 'none'}} onClick={() => this.props.deleteItem(this.props.item._id)}>
          Delete item
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.items.currentItem,
  user: state.users.user,
});

const mapDispatchToProps = dispatch => ({
  fetchItem: itemId => dispatch(fetchItemById(itemId)),
  deleteItem: itemId => dispatch(deleteItem(itemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FullItemPage);