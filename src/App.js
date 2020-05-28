import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "./App.css";
import { Title } from "./components/Title";
import { DataContainer } from "./components/DataContainer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <div className="container">
        <Title title="Situation du Coronavirus (COVID-19) au Québec" />


        {/** move Loader to RegionList */}
        {this.state.loading ? (
          <div id="loader">
            <Loader color="white" height={200} type="Puff" width={200} />
          </div>
        ) : (
          <DataContainer />
        )}
      </div>
    );
  }
}

export default App;
