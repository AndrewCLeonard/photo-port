// __tests__/Gallery.test.js
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";
import ContactForm from "..";

afterEach(cleanup);

describe("Contact is rendering", () => {
	it("renders", () => {
		render(<ContactForm />);
	});

	it("renders", () => {
		const { asFragment } = render(<Contact />);
		expect(asFragment()).toMatchSnapshot();
	});
});

it("renders", () => {
	const { getByTestId } = render(<Contact />);
	expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
})

it("renders", () => {
	const { getByTestId } = render(<Contact />);
	expect(getByTestId("button")).toHaveTextContent("Submit");
})


