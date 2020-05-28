import React from "react";
import Spinner from "./Spinner";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Spinner Component", () => {


  it("should match title ", () => {
    const component = shallow(<Spinner />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
