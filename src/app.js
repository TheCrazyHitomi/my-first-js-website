function createApp() {
	// selecting the body tag and creating the header and main div
	const body = document.querySelector("body");

	const header = document.createElement("header");
	const headerTitle = document.createElement("h1");
	headerTitle.innerHTML = "titre à définir";

	body.appendChild(header);
	header.appendChild(headerTitle);
}
createApp();
