import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// component for testing
import About from "..";

afterEach(cleanup);

describe("About component", () => {
	// Baseline Test
	it("renders", () => {
		render(<About />);
	});

	// Snapshot Test
	it("matches snapshot DOM node structure", () => {
		// render About
		const { asFragment } = render(<About />);
		expect(asFragment()).toMatchSnapshot();
	});
});
