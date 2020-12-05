import React from "react";
import { render } from "@testing-library/react";
import Categories from "./Categories.jsx";

it("renders the Categories component correctly", () => {
  const posts = [ {
      data: {
        author: "lili",
        category: "taco",
        description: "We've heard of smoke getting in your eyes, or smoke in the water, but smoky tacos? Now we've heard everything! But why not? A hint of paprika (the smoky!) on the pork, a bit of jalapeño ranch from the slaw, and fresh pico combine for handheld dinner delight. This meal is smokin'!",
        imageUrl: "https://homechef.imgix.net/https%3A%2F%2Fasset.homechef.com%2Fuploads%2Fmeal%2Fplated%2F11888%2F419362.002.01SpanishPorkTacos_Ecomm_copy.jpg?ixlib=rails-1.1.0&w=850&auto=format&s=eadb858afc60591a00b0df808ee2a2b3",
        price: 6,
        title: "Smoky Pork Tacos"
      },
      id: "2VQc41XP6ewfAyfN2HZ93n"
    }
  ]
  const category = "taco";
  const { container } = render(<Categories posts={posts} category={category}/>);
  expect(container).toMatchSnapshot();
});