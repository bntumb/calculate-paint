function populateTable() {
	let sumOfArea = 0;
	let paintCost = 0;
	let costPerWall = 0;
	const tableContainer = document.getElementById('pop-up-content');
	const table = document.createElement('table');
	const headerRow = table.insertRow();

	const headers = ['Wall Name', 'Cost','Shape', 'Width', 'Height', 'Paint Quality', 'Paint Colour', 'Exclude','Area', ''];
	headers.forEach(headerText => {
		const header = document.createElement('th');
		header.textContent = headerText;
		headerRow.appendChild(header);
	});

	for (const [wallKey, wallInfo] of Object.entries(wallData)) {
		const row = table.insertRow();
		let width = wallInfo.description.width;
		let height = wallInfo.description.height;
        const units =  wallInfo.description.units;
        const colour =  wallInfo.description.colour;
        const exclude =  wallInfo.description.quality;
        const quality =  wallInfo.description.quality;
        const shape =  wallInfo.description.shape;

		switch (units){ // convert to meters
			case "centimeters":
				width = width/100;
				height = height/100;
				break;
			case "inches":
				width = width * 0.0254;
				height = height * 0.0254;
				break;
		}

		const area = calculateArea(shape, width, height, exclude);

		if (quality=="premium"){
			costPerWall = area/4.8 * 28
		}
		else if (quality=="mid-range"){
			costPerWall = area/4.8 * 15
		}
		else{
			costPerWall = area/4.8 * 10
		}

		row.insertCell().textContent = wallKey;
		row.insertCell().textContent = `£${costPerWall.toFixed(2)} `;
		row.insertCell().textContent = shape;
		row.insertCell().textContent =  `${width.toFixed(2)}m `;
		row.insertCell().textContent =  `${height.toFixed(2)}m`;
		row.insertCell().textContent = quality;
		row.insertCell().textContent = colour;
		row.insertCell().textContent = "Exclude";
		row.insertCell().textContent = `${area.toFixed(2)}m² `;
		row.insertCell().textContent = "Edit";

        console.log(wallInfo.description);
        sumOfArea += area;

		paintCost += costPerWall;
	}

	// Populate total area
	let areaSpan = document.getElementById("total-area");
	areaSpan.innerHTML = sumOfArea.toFixed(2);	// Populate total area
	
    let litresSpan = document.getElementById("total-litres");
	litresSpan.innerHTML = (sumOfArea/4.8).toFixed(2);

	// Populate total cost 
	let paintCostHeading = document.getElementById("paint-cost");
	paintCostHeading.innerHTML = `£${paintCost.toFixed(2)}`;
	tableContainer.innerHTML = ''; // Clear any existing table
	tableContainer.appendChild(table);
}

document.addEventListener("DOMContentLoaded", () => {
	populateTable()
});


