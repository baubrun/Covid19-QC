import React from "react";
import { shallow } from "enzyme";
import BarChart from "./BarChart";
import { checkProps } from "../../../Utils";
import toJson from "enzyme-to-json";

const props = {
  data: [
    {
      confirmés: 48,
      date: "25 mai 2020",
      décès: 2,
      région: "Bas-Saint-Laurent",
    }
  ]
};


describe("BarChart Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BarChart {...props} />)
  });

  it("should match snapshot ", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });



  it("should render NO errors", () => {
    const component = wrapper.find(".BarChart");
    expect(component.length).toBe(1);
  });

  describe("Checking props", () => {
    it("should NOT throw error", () => {
      const propsError = checkProps(wrapper, props);
      expect(propsError).toBeUndefined();
    });
  });





});
