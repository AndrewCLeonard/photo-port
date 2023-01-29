/* eslint-disable testing-library/prefer-screen-queries */
// __tests__/Nav.test.js with hard coded categories
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const mockToggleModal = jest.fn();
const currentPhoto = {
	name: "Park bench",
	category: "landscape",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
	index: 1,
};

describe("Modal component", () => {
	it("renders", () => {
		// baseline render component test
		render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
	});

	it("matches snapshot DOM node structure", () => {
		// Arrange the snapshot - declare variables
		const { asFragment } = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);

		expect(asFragment()).toMatchSnapshot();
	});
});

describe("Click Event", () => {
	it("calls onClose handler", () => {
		const { getByText } = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
		fireEvent.click(getByText("Close this modal"));

		expect(mockToggleModal).toHaveBeenCalledTimes(1);
	});
});
