import React from "react";

export default[
	{
		target: ".About1",
		content: "Definition of Fable",
		title: "Fable Information",
		styles: {
			options: {
				textColor: "black"
			}
		},
		locale: { 
			next: <span>Next</span>,
		},
		placement: "top"
	},{
		target: ".Scenathon2020",
		content: "",
		title: "Charts and Maps",
		styles: {
			options: {
				textColor: "black"
			}
		},
		locale: { 
			next: <span>Next</span>,
			back: <span>Back</span>
		},
		placement: "top"
	},{
		target: ".scenathon-info",
		content: "Definition of Scenathon",
		title: "Scenathon Information",
		styles: {
			options: {
				textColor: "black"
			}
		},
		locale: { 
			next: <span>End Tour</span>,
			back: <span>Back</span>
		},
		placement: "top"
	}
]