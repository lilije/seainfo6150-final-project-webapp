import React from "react";
import PostList from "./PostList";
import { render } from "@testing-library/react";

const posts = [
  {
    data : {
      id: 'sdafsdfsdf',
      imageUrl: 'https://homechef.imgix.net/https%3A%2F%2Fasset.homechef.com%2Fuploads%2Fmeal%2Fplated%2F11888%2F419362.002.01SpanishPorkTacos_Ecomm_copy.jpg?ixlib=rails-1.1.0&w=850&auto=format&s=eadb858afc60591a00b0df808ee2a2b3',
      price: 16,
      category: 'taco',
      author: 'lili',
      description: 'Weve heard of smoke getting in your eyes, or smoke in the water, but smoky tacos? Now weve heard everything! But why not? A hint of paprika (the smoky!) on the pork, a bit of jalapeño ranch from the slaw, and fresh pico combine for handheld dinner delight. This meal is smokin'
    }
  }
]

describe("PostList tests", () => {
  it("renders correctly", () => {
    const { container } = render(<PostList posts={posts} />);
    expect(container).toMatchSnapshot();
  });
});
