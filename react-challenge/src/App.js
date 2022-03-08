import logo from './logo.svg';
import './App.css';
import React from 'react';
import Basicinfo from './components/Basicinfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "Brian",
        number: "704-444-4444",
        birthDate: "02/20/2002",
      },
      people: [
        {
          name: "Bryian",
          number: "704-444-4744",
          birthDate: "09/20/2002",
        },
        {
          name: "Bryun",
          number: "704-444-4844",
          birthDate: "07/20/2002",
        },
        {
          name: "Bryan",
          number: "704-444-4944",
          birthDate: "05/20/2002",
        },
      ]
    };
  }
  render() {
      return this.state.people.map(function (person, index) {
        return <Basicinfo key="{index}" person={person} />;
      })
  }
}

export default App;
