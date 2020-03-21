import React from 'react';
import {Col, FormGroup, Input, Label} from "reactstrap";
import PropTypes from 'prop-types';

const FormElement = props => {
  return (
    <FormGroup row>
      <Label sm={2} for={props.propertyName}>{props.propertyName.toUpperCase()}</Label>
      <Col sm={10}>
        <Input
          type={props.type}
          name={props.propertyName} id={props.propertyName}
          value={props.value}
          onChange={props.onChange}
          required={props.required}
        />
      </Col>
    </FormGroup>
  );
};

FormElement.propTypes = {
  propertyName: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormElement;