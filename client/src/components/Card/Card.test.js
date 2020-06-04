import React from "react";
import { checkProps, findByTestAttr } from "../../../Utils";
import Card from "./Card";
import { shallow } from "enzyme";

const setUp = (props = {}) => {
  const component = shallow(<Card {...props} />);
  return component;
};

describe("Title Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render NO errors", () => {
    const wrapper = findByTestAttr(component, "Card");
    expect(wrapper.length).toBe(1);
  });

  describe("Checking props", () => {
    it("should NOT throw error", () => {
      const expectedProps = {
        data: [],
        date: "",
        title: "",
        type: "",
        region: "",
      };
      const propsError = checkProps(component, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});
