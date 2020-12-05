import React from "react";
import { render } from "@testing-library/react";
import FollowUs from "./FollowUs.jsx";

it("renders the FollowUs component correctly", () => {
  const socialMedias = ["https://www.flaticon.com/svg/static/icons/svg/1051/1051258.svg"];
  const { container } = render(<FollowUs socialMedias={socialMedias}/>);
  expect(container).toMatchSnapshot();
});