import React from "react";
import { shallow } from "enzyme";
import BarChart from "./BarChart";
import { checkProps, findByTestAttr } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<BarChart {...props} />);
  return component;
};

describe("BarChart Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render NO errors", () => {
    const wrapper = findByTestAttr(component, "BarChart");
    expect(wrapper.length).toBe(1);
  });

  describe("Checking props", () => {
    it("should NOT throw error", () => {
      const expectedProps = {
        data: [
          {
            confirmés: 48,
            date: "25 mai 2020",
            décès: 2,
            région: "Bas-Saint-Laurent",
          },
        ],
        region: "",
      };
      const propsError = checkProps(component, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});
