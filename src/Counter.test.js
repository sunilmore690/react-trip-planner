// @ts-nocheck
import Counter from "./Counter";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react'
configure({ adapter: new Adapter() });
let wrapper = null;
describe("Counter testing", () => {
  beforeEach(() => {
    wrapper = shallow(<Counter counter={0} />);
  });
  test("renders learn title of count", () => {
    
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });
  test("reder a button with text of `increment`", () => {
    expect(wrapper.find(".increment-btn").text()).toBe("Increment");
  });
  test("counter text should be 0 ", () => {
    expect(wrapper.find(".counter-text").text()).toBe("0");
  });
  test("render the click event of decrement button", () => {
    wrapper.find(".decrement-btn").simulate("click");
    expect(wrapper.find(".counter-text").text()).toBe("-1");
  });
});
