import React, { Component } from "react";
import { RegionList } from "./components/RegionList";
import Loader from "react-loader-spinner";
import { Card } from "./components/Card";
import BarChart from "./components/BarChart/BarChart";
import "./App.css";
import { Title } from "./components/Title";
import { getData, getRegionData } from "../../components/api";



export class RegionListContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data: [],
            date: "",
            loading: false,
            region: "Total",
            currentData: [],
          };
        }
          componentDidMount() {
        this.fetchData();
      }
    
      fetchData = async () => {
        this.setState({
          loading: true,
        });
    
        try {
          const body = await getData();
          this.setState({
            data: body,
          });
          setTimeout(() => {
            this.setState({ loading: false });
            }, 900);
        } catch (error) {
          console.log(error);
        }
      };
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default RegionListContainer
