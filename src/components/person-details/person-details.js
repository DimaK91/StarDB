import React, { Component } from 'react';

import './person-details.css';
import SwapService from "../../services/swap-service";
import ErrorButton from "../error-button/error-button";

export default class PersonDetails extends Component {

  swapService = new SwapService();

  state = {
    person: null
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapService
      .getPerson(personId)
      .then((person) => {
        this.setState({ person });
      });
  }

  render() {

    const { person } = this.state;
    if (!person) {
      return <span>Select a person from a list</span>;
    }

    const { id, name, gender,
              birthYear, eyeColor } = person;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="character"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}
