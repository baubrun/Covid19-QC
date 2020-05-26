import React, { Component } from "react";
import axios from "axios";
import { RegionList } from "./components/RegionList";
import Loader from "react-loader-spinner";
import { Card } from "./components/Card";
import BarChart from "./components/BarChart/BarChart";
import "./App.css";

const url = "http://localhost:5000/covid19qc/api";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      date: "",
      loading: false,
      region: "",
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.setState({ loading: true });
    const response = await axios.get(url);
    const body = response.data;

    this.setState({ data: body });

    this.setState({ date: body[0].date });

    this.setState({ region: body.slice(-1)[0].région });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  regionChange = (event) => {
    this.setState({ region: event.target.value });
  };

  render() {
    const { data, date, loading, region } = this.state;
    return (
      <div className="container">
        <h3 className="text-center">
          Situation du coronavirus (COVID-19) au Québec
        </h3>
        <div className="data">
          {loading ? (
            <div id="loader">
              <Loader
                
                color="white"
                height={200}
                type="Puff"
                width={200}
              />
            </div>
          ) : (
            <>
              <div className="row">
                <div className="col">
                  <Card
                    data={data}
                    date={date}
                    region={region}
                    loading={loading}
                    title="Nombre de cas confirmés par région"
                    type="confirmés"
                  />
                </div>
                <div className="col">
                  <Card
                    data={data}
                    date={date}
                    region={region}
                    loading={loading}
                    title="Nombre de décès par région"
                    type="décès"
                  />
                </div>
              </div>
              <RegionList data={data} regionChange={this.regionChange} />
              <BarChart data={data} region={region} />
            </>
          )}
        </div>
      </div>
    );
  }
}
export default App;
