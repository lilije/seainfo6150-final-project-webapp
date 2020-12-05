import React from "react";
import { render } from "@testing-library/react";
import YouTuBe from "./YouTuBe.jsx";

it("renders the YouTuBe component correctly", () => {
  const videos = ["https://www.youtube.com/embed/2AuPF74q-fY"];
  const { container } = render(<YouTuBe videos={videos}/>);
  expect(container).toMatchSnapshot();
});