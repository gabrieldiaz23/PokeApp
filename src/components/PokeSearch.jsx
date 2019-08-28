import React from 'react';
import API from './utils/API.js';
import List from './components/List';

class PokeSearch extends React.Component {
  state = {  }
  render() { 
    return ( 
      <>
        <div className="App">
          <div className="container">
            <div className="jumbotron">
              <div className="container">
                <h1 className="display-4">Pokemon search engine</h1>
                <p className="lead">Gotta catch'em all</p>
              </div>
            </div>
            <div className="card">
              <h5 className="card-header">TEST TEXT</h5>
              <div className="card-body">
                <table className="table" id="mainTable">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">•</th>
                      <th scope="col">Pokemon Name</th>
                    </tr>
                  </thead>
                  <tbody>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>);
  }
}
 
export default PokeSearch;