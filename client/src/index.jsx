import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import NavBar from './components/NavBar.jsx';
import AdoptionList from './components/AdoptionList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar/>
        <AdoptionList/>
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('app'));
