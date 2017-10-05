import React, {Component} from 'react';
import Nav from './Nav/Nav.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Shelf extends Component {
  componentDidMount() {
    axios.get(`http://localhost:3001/api/shelfie/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          bins: [response.data.map((bin) => {
          return bin;
          })]
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  constructor() {
    super();

    this.state = {

      bins: [],
      placeholder: [
        {bin: 1, item: null},
        {bin: 2, item: null},
        {bin: 3, item: null},
        {bin: 4, item: null}
      ]
    }
  }
  render() {
    return (
      <div>
        <Nav url={this.props.match.url}/>
        <div className="contain">
        {this.state.bins.length === 0
        ?
        this.state.placeholder.map( (placeholder) => {
        return (
          <div className="placeholder" key={placeholder.bin}><p>Loading Bin {placeholder.bin}...</p></div>
          );}
        )
        :
        this.state.bins[0].map( (bin) => {
        return (
          <Link to={`/bin/${bin.id}`} key={bin.id} className="bins">
            <div key={bin.id}><p>Bin {bin.bin}</p></div>
          </Link>
        );
      })}
        </div>
      </div>
    );
  }
}

export default Shelf;
