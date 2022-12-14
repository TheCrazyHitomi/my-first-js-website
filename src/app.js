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

const createCatPage = () => {
	const catsPage = document.createElement("div");
	catsPage.classList.add("main-app");

	const intro = document.createElement("div");
	intro.classList.add("intro");

	const cards = document.createElement("div");
	cards.classList.add("cards");

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

	catsPage.appendChild(intro);
	intro.appendChild(textIntro);
	intro.appendChild(allButton);
	allButton.appendChild(boxButton);
	boxButton.appendChild(allcatsButton);
	boxButton.appendChild(europeanButton);
	boxButton.appendChild(bengalButton);
	boxButton.appendChild(sphynxButton);

	catsPage.appendChild(cards);

	return catsPage;
};

const createForm = () => {
	const divForm = document.createElement("div");
	divForm.classList.add("div-form");
	divForm.classList.add("main-app");
	const form = document.createElement("div");
	form.classList.add("form");
	const formTitle = document.createElement("h1");
	formTitle.classList.add("form-title");
	formTitle.innerHTML = "Contactez-nous";
	const formId = document.createElement("div");
	formId.classList.add("form-id");
	const labelId = document.createElement("div");
	labelId.classList.add("label-id");
	const formNom = document.createElement("div");
	formNom.classList.add("form-nom");
	const labelNom = document.createElement("label");
	labelNom.innerHTML = "Nom :";
	const formPrenom = document.createElement("div");
	formPrenom.classList.add("form-prenom");
	const labelPrenom = document.createElement("label");
	labelPrenom.innerHTML = "Prenom :";
	const champNom = document.createElement("input");
	champNom.classList.add("champ-nom");
	champNom.setAttribute("type", "Nom");
	champNom.setAttribute("name", "Nom");
	champNom.setAttribute("placeholder", "Dupont");
	const champPrenom = document.createElement("input");
	champPrenom.classList.add("champ-nom");
	champPrenom.setAttribute("type", "Prénom");
	champPrenom.setAttribute("name", "Prénom");
	champPrenom.setAttribute("placeholder", "José");
	const formMessage = document.createElement("div");
	formMessage.classList.add("form-message");
	const labelEmail = document.createElement("label");
	labelEmail.innerHTML = "E-mail :";
	const champEmail = document.createElement("input");
	champEmail.classList.add("champ-nom");
	champEmail.setAttribute("type", "email");
	champEmail.setAttribute("name", "E-mail");
	champEmail.setAttribute("placeholder", "josé-dupont@gmail.com");
	const labelObjet = document.createElement("label");
	labelObjet.innerHTML = "Objet :";
	const champObjet = document.createElement("input");
	champObjet.classList.add("champ-nom");
	champObjet.setAttribute("type", "Objet");
	champObjet.setAttribute("name", "Objet");
	champObjet.setAttribute("placeholder", "Objet");
	const labelMessage = document.createElement("label");
	labelMessage.innerHTML = "Message :";
	const champMessage = document.createElement("textarea");
	champMessage.classList.add("champ-message");
	champMessage.setAttribute("type", "Message");
	champMessage.setAttribute("name", "Message");
	champMessage.setAttribute("placeholder", "Votre message...");
	const formButton = document.createElement("button");
	formButton.classList.add("form-button");
	formButton.innerHTML = "Envoyer";
	formButton.addEventListener("click", function () {
		alert("votre message a bien été envoyé.");
	});

	divForm.appendChild(form);
	form.appendChild(formTitle);
	form.appendChild(formId);
	form.appendChild(formMessage);
	form.appendChild(formButton);

	formId.appendChild(formNom);
	formNom.appendChild(labelNom);
	formNom.appendChild(champNom);
	formId.appendChild(formPrenom);
	formPrenom.appendChild(labelPrenom);
	formPrenom.appendChild(champPrenom);

	formMessage.appendChild(labelEmail);
	formMessage.appendChild(champEmail);
	formMessage.appendChild(labelObjet);
	formMessage.appendChild(champObjet);
	formMessage.appendChild(labelMessage);
	formMessage.appendChild(champMessage);

	return form;
};

const menuItems = [
	{ id: "item-1", name: "Tout les chats", link: createCatPage() },
	{ id: "item-2", name: "Contactez nous", link: createForm() },
	// { id: "item-3", name: "item 3", link: "test" },
];

function createMainApp() {
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
	//mainApp.classList.add("main-app");

	const globalMenu = document.createElement("div");
	globalMenu.classList.add("global-menu");
	menuItems.forEach((item) => {
		const menuElement = document.createElement("p");
		menuElement.classList.add("menu-element");
		//menuElement.setAttribute("href", item.link);
		menuElement.setAttribute("id", item.id);
		menuElement.innerHTML = item.name;
		menuElement.addEventListener("click", () => {
			mainApp.innerHTML = "";
			mainApp.appendChild(item.link);
			menuIsVisible = false;
			globalMenu.classList.remove("visible");
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

	const footer = document.createElement("Footer");
	const footerTitle = document.createElement("h2");
	footerTitle.innerHTML = "footer en cours...";
	body.appendChild(footer);
	footer.appendChild(footerTitle);
}
createMainApp();
