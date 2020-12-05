import React from "react";
import { render } from "@testing-library/react";
import Dropdown from "./Dropdown.jsx";

it("renders the Dropdown component correctly", () => {
  const options = ['Breakfast', 'Lunch', 'Dinner', 'Burger', 'Chinese Food', 'Sea Food', 'Taco'];
  const title = "Food Categories";
  const { container } = render(<Dropdown title={title} options={options}/>);
  expect(container).toMatchSnapshot();
});