import React from 'react';
import {Chip} from '../../components/Chip/Chip'
import { FieldErrors } from './FieldErrors';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: {
          name: 'email',
          value: '',
          isValid: false,
          errorMsg: '',
          label: 'אימייל',
          placeholder: 'email@address.com',
          type: 'email',
          rule: (value) => value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        },
        firstName: {
          name: 'firstName',
          value: '',
          isValid: false,
          errorMsg: '',
          label: 'שם פרטי',
          placeholder: 'שם פרטי',
          type: 'text',
          rule: (value) => value.length >= 2
        },
        lastName: {
          name: 'lastName',
          value: '',
          isValid: false,
          errorMsg: '',
          label: 'שם משפחה',
          placeholder: 'שם משפחה',
          type: 'text',
          rule: (value) => value.length >= 2
        },
        phone: {
          name: 'phone',
          value: '',
          isValid: false,
          errorMsg: '',
          label: 'פלאפון',
          placeholder: 'מספר פלאפון',
          type: 'tel',
          rule: (value) => value.length === 10
        }
      },
      chips: {
        label: 'נושא הפנייה',
        items: {
          1: {
            id: 1,
            text: "התאמת אופניים",
            icon: "fa-solid fa-person-biking",
            value: "Fitting",
            isActive: false
          },
          2: {
            id: 2,
            text: "שירות תיקונים",
            icon: "fa-solid fa-screwdriver-wrench",
            value: "Repairing",
            isActive: false
          },
          3: {
            id: 3,
            text: "רכישת אופניים וציוד נלווה",
            icon: "fa-solid fa-cart-shopping",
            value: "Purchacing",
            isActive: false
          },
          4: {
            id: 4,
            text: "חוגי רכיבה",
            icon: "fa-solid fa-person-chalkboard",
            value: "Classes",
            isActive: false
          },
          5: {
            id: 5,
            text: "אחר",
            icon: "fa-solid fa-gear",
            value: "Other",
            isActive: false
          }
        },
      },
      isFormValid: false
    }
  }

  handleUserInput = (event, fieldName) => {
    const value = event.target.value;
    let newFields = { ...this.state.fields };
    newFields[fieldName].value = value;
    this.setState({ fields: newFields },
      () => { this.validateField(fieldName, value) });
  }

  validateField(fieldName, value) {
    let validatedField = this.state.fields[fieldName];
    validatedField.isValid = validatedField.rule(value)
    validatedField.errorMsg = validatedField.isValid ? '' : ' is invalid'

    let newFields = {
      ...this.state.fields,
      [fieldName]: validatedField
    };
    this.setState({
      fields: newFields
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid:
        Object.values(this.state.fields).every(field => field.isValid)
    });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  onChipClick = (event, chipId) => {
    let newChips = { ...this.state.chips };
    newChips.items[chipId].isActive = !newChips.items[chipId].isActive;
    this.setState({
      chips: newChips
    });
  }

  render() {
    return (
      <form className="form">
        <h2>צרו איתנו קשר</h2>
        {Object.values(this.state.fields).map((field, index) => {
          return (
            <div key={index} className={`form-group ${this.errorClass(field.errorMsg)}`}>
              <label htmlFor={field.type}>{field.label}</label>
              <input type={field.type} required className="form-control" name={field.name}
                placeholder={field.placeholder}
                value={field.value}
                onChange={(event) => this.handleUserInput(event, field.name)} />
              <FieldErrors field={field}></FieldErrors>
            </div>
          )
        })}
        <label>{this.state.chips.label}</label><br/>
        {Object.values(this.state.chips.items).map((chip, index) => {
          return (
            <Chip key={index} active={chip.isActive} text={chip.text} icon={chip.icon} onClick={(event) => this.onChipClick(event, chip.id)}></Chip>
          )
        })}
        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
      </form>
    )
  }
}

export default Form;
