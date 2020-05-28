import React, { Component } from "react";
import { getRegionNames } from "../../components/api";
import { RegionList } from "../RegionList";

export class RegionListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regions: [],
      loading: false
    };
  }
  componentDidMount() {
    this.FetchRegions();
  }

  FetchRegions = async () => {
    this.setState({
      loading: true,
    });

    try {
      const regions = await getRegionNames();
      console.log("FetchRegions :>> ", regions);
      this.setState({
        regions,
      });
      setTimeout(() => {
        this.setState({ loading: false });
      }, 900);
    } catch (error) {
      console.log(error);
    }
  };

  regionChange = (event) => {
    const region = event.target.value;
    this.props.fetchData(region);
  };

  render() {
    const { loading, regions } = this.state;
    return (
      <RegionList
        loading={loading}
        regions={regions}
        regionChange={this.regionChange}
      />
    );
  }
}

export default RegionListContainer;
