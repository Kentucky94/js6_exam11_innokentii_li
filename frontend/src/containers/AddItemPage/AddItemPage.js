import React, {Component} from 'react';
import FormElement from "../../components/UI/FormElement/FormElement";
import {postItem} from "../../store/actions/itemsActions";
import {connect} from "react-redux";
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {fetchCategories} from "../../store/actions/categoriesActons";

class AddItemPage extends Component {
  state = {
    title: '',
    description: '',
    price: 0,
    image: '',
    category: '',
    user: '',
  };

  async componentDidMount() {
    await this.props.fetchCategories();
  }

  inputChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  fileChangeHandler = event => {
    this.setState({[event.target.name]: event.target.files[0]})
  };

  onSubmitHandler = event => {
    try{
      event.preventDefault();

      const formData = new FormData();

      const itemData = {...this.state, user: this.props.user._id};

      Object.keys(itemData).forEach(key => {
        const value = itemData[key];

        formData.append(key, value);
      });

      this.props.postItem(formData);
    }catch(error){
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Form onSubmit={this.onSubmitHandler}>
          <h2>Add new item</h2>
          <FormElement
            propertyName="title"
            title="Title"
            type="text"
            value={this.state.title}
            onChange={this.inputChangeHandler}
            required
          />
          <FormElement
            propertyName="description"
            title="Description"
            type="textarea"
            value={this.state.description}
            onChange={this.inputChangeHandler}
            required
          />
          <FormElement
            propertyName="price"
            title="Price"
            type="number"
            value={this.state.price}
            onChange={this.inputChangeHandler}
            required
          />
          <FormGroup row>
            <Label sm={2} for="image">Image</Label>
            <Col sm={10}>
              <Input
                type="file"
                name="image"
                id="image"
                onChange={this.fileChangeHandler}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} for="category">Category</Label>
            <Col sm={10}>
              <Input
                type="select"
                name="category" id="category"
                value={this.state.category}
                onChange={this.inputChangeHandler}
              >
                <option value="">Please select a category...</option>
                {this.props.categories.map(category => (
                  <option key={category._id} value={category._id}>{category.name}</option>
                ))}
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={{offset: 2, size: 10}}>
              <Button type="submit" color="primary">
                Create new item
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user,
  categories: state.categories.categories,
});

const mapDispatchToProps = dispatch => ({
  postItem: itemData => dispatch(postItem(itemData)),
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItemPage);