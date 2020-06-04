import React from "react";
import { shallow } from "enzyme";
import Title from "./Title";
import { checkProps, findByTestAttr } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Title {...props} />);
  return component;
};

describe("Title Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });


  it("should render NO errors", () => {
    const wrapper = findByTestAttr(component, "Title");
    expect(wrapper.length).toBe(1);
  });

  describe("Checking props", () => {
    it("should NOT throw error", () => {
      const expectedProps = {
        title: "a string",
      };
      const propsError = checkProps(component, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});
