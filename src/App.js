// import React origininally missing?
import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";

const categories = [
	{
		name: "commercial",
		description: "Photos of grocery stores, food trucks, and other commercial projects",
	},
	{ name: "portraits", description: "Portraits of people in my life" },
	{ name: "food", description: "Delicious delicacies" },
	{
		name: "landscape",
		description: "Fields, farmhouses, waterfalls, and the beauty of nature",
	},
];

function App() {
	return (
		<div>
			<Nav></Nav>
			<main>
				<About></About>
			</main>
		</div>
	);
}

export default App;
