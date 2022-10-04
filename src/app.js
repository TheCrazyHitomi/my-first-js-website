const animalsToAdopt = [
	{
		name: "Billy",
		race: "européen",
		picture: "http://placekitten.com/200/300",
	},
	{
		name: "Lucky",
		race: "bengal",
		picture: "https://placekitten.com/200/287",
	},
	{
		name: "Symba",
		race: "sphynx",
		picture: "https://placekitten.com/200/139",
	},
	{
		name: "Léo",
		race: "européen",
		picture: "https://placekitten.com/200/90",
	},
	{
		name: "Milo",
		race: "européen",
		picture: "https://placekitten.com/200/194",
	},
	{
		name: "Charly",
		race: "bengal",
		picture: "https://placekitten.com/200/179",
	},
	{
		name: "Blacky",
		race: "bengal",
		picture: "https://placekitten.com/200/179",
	},
	{
		name: "Hitomi",
		race: "sphynx",
		picture: "https://placekitten.com/200/179",
	},
];

const menuItems = [
	{ id: "item-1", name: "item 1", link: "#" },
	{ id: "item-2", name: "item 2", link: "#" },
	{ id: "item-3", name: "item 3", link: "#" },
];

const createBurger = () => {
	return burgerMenu;
};

const createMenu = (menu) => {
	return globalMenu;
};

function createApp() {
	let menuIsVisible = false;
	// selecting the body tag and creating the header and main div
	const body = document.querySelector("body");

	const header = document.createElement("header");
	const headerDiv = document.createElement("div");
	headerDiv.classList.add("header-div");
	const headerTitle = document.createElement("h1");
	headerTitle.classList.add("header-title");
	headerTitle.innerHTML = "titre à définir";

	const mainApp = document.createElement("div");
	mainApp.classList.add("main-app");

	const intro = document.createElement("div");
	intro.classList.add("intro");

	const textIntro = document.createElement("p");
	textIntro.classList.add("text-intro");
	textIntro.innerHTML =
		"Bienvenue à la chatterie de la <em> petite sorcière</em>.";

	const allButton = document.createElement("div");
	allButton.classList.add("all-button");

	const boxButton = document.createElement("div");
	boxButton.classList.add("box-button");

	const allcatsButton = document.createElement("button");
	allcatsButton.classList.add("filter-button");
	allcatsButton.innerHTML = "tout les chatons";

	allcatsButton.addEventListener("click", () => {
		cards.innerHTML = "";
		animalsToAdopt.forEach((animal) => {
			const { name, race, picture } = animal;
			createCard(name, race, picture);
		});
	});

	const europeanButton = document.createElement("button");
	europeanButton.classList.add("filter-button");
	europeanButton.innerHTML = "chatons Européens";

	europeanButton.addEventListener("click", () => {
		cards.innerHTML = "";
		filterCats("européen");
		// animalsToAdopt
		// 	.filter((animal) => {
		// 		return animal.race === "européen";
		// 	})
		// 	.forEach((animal) => {
		// 		const { name, race, picture } = animal;
		// 		createCard(name, race, picture);
		// 	});
	});

	const bengalButton = document.createElement("button");
	bengalButton.classList.add("filter-button");
	bengalButton.innerHTML = "Chatons Bengal";

	bengalButton.addEventListener("click", () => {
		cards.innerHTML = "";
		filterCats("bengal");
		// animalsToAdopt
		// 	.filter((animal) => {
		// 		return animal.race === "bengal";
		// 	})
		// 	.forEach((animal) => {
		// 		const { name, race, picture } = animal;
		// 		createCard(name, race, picture);
		// 	});
	});

	const sphynxButton = document.createElement("button");
	sphynxButton.classList.add("filter-button");
	sphynxButton.innerHTML = "chatons Sphynx";

	sphynxButton.addEventListener("click", () => {
		cards.innerHTML = "";
		filterCats("sphynx");
		// animalsToAdopt
		// 	.filter((animal) => {
		// 		return animal.race === "sphynx";
		// 	})
		// 	.forEach((animal) => {
		// 		const { name, race, picture } = animal;
		// 		createCard(name, race, picture);
		// 	});
	});

	const filterCats = (race) => {
		animalsToAdopt
			.filter((animal) => {
				return animal.race === race;
			})
			.forEach((animal) => {
				const { name, race, picture } = animal;
				createCard(name, race, picture);
			});
	};

	const globalMenu = document.createElement("div");
	globalMenu.classList.add("global-menu");
	menuItems.forEach((item) => {
		const menuElement = document.createElement("a");
		menuElement.classList.add("menu-element");
		menuElement.setAttribute("href", item.link);
		menuElement.setAttribute("id", item.id);
		menuElement.innerHTML = item.name;
		menuElement.addEventListener("click", () => {
			menuIsVisible = !menuIsVisible;
		});
		globalMenu.appendChild(menuElement);
	});

	body.appendChild(globalMenu);

	const burgerMenu = document.createElement("div");
	const lineUp = document.createElement("div");
	const lineMiddle = document.createElement("div");
	const lineDown = document.createElement("div");
	burgerMenu.appendChild(lineUp);
	burgerMenu.appendChild(lineMiddle);
	burgerMenu.appendChild(lineDown);

	burgerMenu.classList.add("burger-menu");
	lineUp.classList.add("line-up");
	lineMiddle.classList.add("line-middle");
	lineDown.classList.add("line-down");

	burgerMenu.addEventListener("click", () => {
		// set boolean true or false;
		menuIsVisible = !menuIsVisible;
		// if false
		if (!menuIsVisible) {
			// we remove the visible class
			globalMenu.classList.remove("visible");
		}
		// if true
		else if (menuIsVisible) {
			// we set the visible class
			globalMenu.classList.add("visible");
		}
	});

	body.appendChild(header);

	body.appendChild(mainApp);
	headerDiv.appendChild(globalMenu);
	header.appendChild(headerDiv);
	headerDiv.appendChild(burgerMenu);
	headerDiv.appendChild(headerTitle);
	mainApp.appendChild(intro);
	intro.appendChild(textIntro);
	intro.appendChild(allButton);
	allButton.appendChild(boxButton);
	boxButton.appendChild(allcatsButton);
	boxButton.appendChild(europeanButton);
	boxButton.appendChild(bengalButton);
	boxButton.appendChild(sphynxButton);

	const cards = document.createElement("div");
	cards.classList.add("cards");

	mainApp.appendChild(cards);

	function createCard(name, race, imageUrl) {
		const card = document.createElement("div");
		card.classList.add("card");

		cards.appendChild(card);

		const cardHeader = document.createElement("div");
		cardHeader.classList.add("cardHeader");

		card.appendChild(cardHeader);

		const cardImage = document.createElement("div");
		cardImage.classList.add("cardImage");
		cardImage.style.backgroundImage = `url(${imageUrl})`;

		cardHeader.appendChild(cardImage);

		const cardBody = document.createElement("div");
		cardBody.classList.add("cardBody");

		card.appendChild(cardBody);

		const cardTitle = document.createElement("h2");
		cardTitle.classList.add("card-title");
		cardTitle.setAttribute("id", `id-${name}`);
		cardTitle.innerHTML = name;

		cardBody.appendChild(cardTitle);

		const cardRace = document.createElement("h3");
		cardRace.classList.add("card-race");
		cardRace.setAttribute("id", `id-${race}`);
		cardRace.innerHTML = race;

		cardBody.appendChild(cardRace);

		const cardButton = document.createElement("button");
		cardButton.classList.add("cardButton");
		cardButton.innerHTML = "Adopt Me";

		cardButton.addEventListener("click", function () {
			alert("Bienvenue " + name + " dans ta nouvelle famille !");
		});

		cardBody.appendChild(cardButton);
	}
	// createCard(
	// 	animalsToAdopt[0].name,
	// 	animalsToAdopt[0].race,
	// 	animalsToAdopt[0].picture
	// );

	const footer = document.createElement("Footer");
	const footerTitle = document.createElement("h2");
	footerTitle.innerHTML = "footer en cours...";
	body.appendChild(footer);
	footer.appendChild(footerTitle);
}
createApp();
