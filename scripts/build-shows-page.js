"use strict";

const loadShows = (data) => {
	let showsWrapperEl = document.querySelector(".shows__wrapper");

	let shows = [];

	for (let i = 0; i < data.length; i++) {
		const show = data[i];

		const showEl = create("div", "show", showsWrapperEl);
		showEl.setAttribute("data-id", show.id);
		showEl.addEventListener("click", () => {
			showEl.classList.toggle("show--active");
		});
		// console.log("🚀 ~ loadShows ~ showEl", showEl);

		//First Cell - DATE
		const dateWrapperEl = create("div", ["show__wrapper", "date__wrapper"]);

		const dateLabelEl = create(
			"h4",
			["show__label", "date__label"],
			dateWrapperEl
		);
		dateLabelEl.innerText = "DATE";

		const dateInfoEl = create(
			"h4",
			["show__info", "date__info"],
			dateWrapperEl
		);
    dateInfoEl.innerText = convertUnixShows(show.date);
		console.log(show.date);
		// new Date(Number(show.timestamp)).getDay();

		showEl.appendChild(dateWrapperEl);

		//Second Cell - VENUE
		const venueWrapperEl = create("div", ["show__wrapper", "venue__wrapper"]);
		const venueLabelEl = create(
			"h4",
			["show__label", "venue__label"],
			venueWrapperEl
		);
		venueLabelEl.innerText = "VENUE";

		const venueInfoEl = create(
			"h4",
			["show__info", "venue__info"],
			venueWrapperEl
		);
		venueInfoEl.innerText = show.place;

		showEl.appendChild(venueWrapperEl);

		//Third Cell - LOCATION
		const locationWrapperEl = create("div", [
			"show__wrapper",
			"location__wrapper",
		]);

		const locationLabelEl = create(
			"h4",
			["show__label", "location__label"],
			locationWrapperEl
		);
		locationLabelEl.innerText = "LOCATION";

		const locationInfoEl = create(
			"h4",
			["show__info", "location__info"],
			locationWrapperEl
		);
		locationInfoEl.innerText = show.location;

		showEl.appendChild(locationWrapperEl);
		//Fourth Cell - BUTTON
		const buyButton = create(
			"button",
			["show__button", "button", "buy__button"],
			showEl
		);
		buyButton.innerText = "BUY TICKETS";

		shows.push(showEl);
	} //FOR LOOP ENDS HERE
};

//getShows from database using a GET HTTP request then pass the data to loadShows to paint to UI
getShows(`${baseURL}/showdates?api_key=${HEROKU_API_KEY}`).then((data) => {
	// https://project-1-api.herokuapp.com/comments?api_key=f357c1dc-0cc7-4355-a393-9ae4e0f1e121
	console.log(data);
	loadShows(data);
});
