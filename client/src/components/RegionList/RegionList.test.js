import React from "react";
import RegionList from "./RegionList";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { checkProps } from "../../../Utils";

const regions = [
  "Bas-Saint-Laurent",
  "Saguenay-Lac-Saint-Jean",
  "Capitale-Nationale",
];

const props = {
  regions,
  regionChange: () => {},
  loading: false,
};


describe("RegionList Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<RegionList {...props} />);
  });

  it("should match snapshot ", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("Checking props", () => {
    it("should not throw warning", () => {

      const propsError = checkProps(wrapper, props);
      expect(propsError).toBeUndefined();
    });
  });

    it("should render NO errors", () => {
      const component = wrapper.find(".input-group");
      expect(component.length).toBe(1);
    
  });



  describe("Matching Text", () => {
    console.log(wrapper);
  });
});
