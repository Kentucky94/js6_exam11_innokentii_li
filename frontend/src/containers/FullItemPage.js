import React, {Component} from 'react';
import {fetchItemById} from "../store/actions/itemsActions";
import {connect} from "react-redux";

class FullItemPage extends Component {
  async componentDidMount() {
    await this.props.fetchItem(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        "title": "Guitar",
        "description": "Electric guitar",
        "price": 500,
        "category": "5e75cd12e3f2ec5e2a6620b6",
        "image": "JlG9z11mOQmaAwdL_2uUZ.jpg",
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.items.currentItem,
});

const mapDispatchToProps = dispatch => ({
  fetchItem: itemId => dispatch(fetchItemById(itemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FullItemPage);