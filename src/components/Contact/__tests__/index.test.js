// __tests__/Contact.test.js
import React from "react";
// `cleanup` no longer required https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#using-cleanup
import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom/";
import Contact from "../../Contact";

describe("Contact component renders", () => {
	it("renders", () => {
		render(<Contact />);
	});

	it("renders Contact fragment", () => {
		const { asFragment } = render(<Contact />);
		expect(asFragment()).toMatchSnapshot();
	});
});

it("renders Contact Me", () => {
	render(<Contact />);
	// screen.getByText(/Contact me/i);
	screen.getByRole("heading", { name: /Contact me/i });
});
