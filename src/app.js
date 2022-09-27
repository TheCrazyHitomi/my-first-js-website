function createApp() {
	// selecting the body tag and creating the header and main div
	const body = document.querySelector("body");

	const header = document.createElement("header");
	const headerTitle = document.createElement("h1");
	headerTitle.innerHTML = "titre à définir";

	body.appendChild(header);
	header.appendChild(headerTitle);

	const footer = document.createElement("Footer");
	const footerTitle = document.createElement("h2");
	footerTitle.innerHTML = "footer en cours...";
	body.appendChild(footer);
	footer.appendChild(footerTitle);
}
createApp();
