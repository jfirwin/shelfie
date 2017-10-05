import React, {Component} from 'react';
import Nav from './Nav/Nav.js';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      shelves: ['A', 'B', 'C', 'D']
    }
  }
  render() {
    return (
      <div>
        <Nav url={this.props.match.url}/>
        <div className="contain">
          {this.state.shelves.map( (shelfID) => {
            return (
              <Link to={`/shelf/${shelfID}`} key={shelfID} className="shelves">
                <div key={shelfID}><p>Shelf {shelfID}</p></div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
