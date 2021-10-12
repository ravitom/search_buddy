import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SortData } from "./components/sort-data/sort.component";

export class App extends Component {
  constructor(props) {
    super();
    this.state = {
      players: [],
      searchKey: "",
    };
  }
  handleChange = (elem) => {
    this.setState({ searchKey: elem.target.value });
  };
  componentDidMount() {
    const URL = "https://fakerapi.it/api/v1/persons?_locale=fr_FR";
    fetch(URL).then((response) => {
      response.json().then((players) => {
        this.setState({ players: players.data });
      });
    });
  }

  render() {
    const { players, searchKey } = this.state;
    const searchArray = players.filter((player) =>
      searchKey
        ? player.firstname.toLowerCase().includes(searchKey.toLowerCase())
        : player
    );

    return (
      <div className="page-wrap">
        <SortData
          placeholder="Search Buddy"
          handleChange={this.handleChange}
        ></SortData>
        <CardList players={searchArray}></CardList>
      </div>
    );
  }
}

export default App;
