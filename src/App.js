import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component"
import { Col, Container, Row } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = e => {
    return e => this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );



    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <h1>Monster Rolodex</h1>
              <SearchBox handleChange={this.handleChange} placeholder="search monsters"></SearchBox>
            </Col>
          </Row>
          <Row>
            <Col >
              <CardList monsters={filteredMonsters}></CardList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
