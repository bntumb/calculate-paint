let wallCounter = 1;
let wallData = {};
let totalArea = 0;
let errorMessage ="";

let addDataToSelect = (options, selectElement) => {
	options.forEach(optionData => {
		// Create a new option element
		const option = document.createElement('option');
		option.value = optionData.value;
		option.text = optionData.text;
		// Add the option to the select element
		selectElement.add(option);
	});
}
// Create and append input to an ID/Location on the page 
let appendSelectInput = (id, optionName, appendLocation, inputType) => {
	const input = document.createElement(`${inputType}`);
	input.id = `${id}`;
	input.name = `${optionName}`;
	input.required = true;
	if (inputType === 'select') {
		const selectElement = document.createElement('option');
		selectElement.value = '';
		selectElement.textContent = `Select a ${optionName}`;
		input.appendChild(selectElement);
		switch (id) {
			case "quality-select":
				addDataToSelect(quality, input)
				break;
			case "shape-select":
				addDataToSelect(shape, input)
				break;
			case "colour-select":
				addDataToSelect(colours, input)
				break;
			case "unit-select":
				addDataToSelect(units, input)
				break;
		}
	} else {
		input.placeholder = `${optionName}`;
	}
	appendLocation.appendChild(input);
	appendLocation.appendChild(document.createElement('br'));
}
// Input Validation
let inputValidation = () => {
    
    for (const key in defaultInputOptions) {
        if (defaultInputOptions.hasOwnProperty(key)) {
            // Get the value of the input element with the corresponding id
            let value = document.getElementById(defaultInputOptions[key].id).value;
            
            // Check if the input is for height or width and if the value is a valid number
            if (key === 'height' && (isNaN(value) || value === "")) {
                errorMessage = 'Height must be a number';
                return false;
            } else if (key === 'width' && (isNaN(value) || value === "")) {
                errorMessage = 'Width must be a number';
                return false;
            } else if (key === 'units' && (value !== "centimeters" && value !== "inches")) {
                errorMessage = 'A measurement unit must be selected';
                return false;
            } else if (key === 'shape' && (value !== "triangle" && value !== "rectangle")) {
                errorMessage = 'A shape must be selected';
                return false;
            }
        }
    }
    
    return true;
}


// Store input data into object the wallData
let storeInputData = () => {
	// Iterate over each key in the defaultInputOptions object
	for (const key in defaultInputOptions) {
		// Ensure the key is actually a property of defaultInputOptions
		if (defaultInputOptions.hasOwnProperty(key)) {
			// Get the value of the input element with the corresponding id
			let value = document.getElementById(defaultInputOptions[key].id).value;
			// Initialize the wallData object for the current wall if it doesn't already exist
			let currentWall = wallData[`wall-${wallCounter - 1}`] = wallData[`wall-${wallCounter - 1}`] || {};
			// Initialize the description object for the current wall if it doesn't already exist
			currentWall.description = currentWall.description || {};
			// Store the value in the corresponding key in the description object
			currentWall.description[key] = value;
		}
	}
}

let submitData = () => {
	if (inputValidation() == true){
		storeInputData();
		populateTable();
		const wall = document.getElementById(`wall-${wallCounter - 1}`);
		console.log(wallData);
		wall.remove();
		document.getElementById('addWallButton').style.display = "flex";
	}else{
		document.getElementById("error-message").innerHTML = errorMessage


	}

}
document.getElementById('addWallButton').addEventListener('click', () => {
	// Create the main div
	const formContent = document.createElement('div');
	formContent.className = 'form-content';
	formContent.id = `wall-${wallCounter}`;
	// Create and append the heading with the counter
	const heading = document.createElement('h1');
	heading.textContent = `Wall ${wallCounter}`;
	formContent.appendChild(heading);
	const error = document.createElement('p');
	error.id = "error-message";
	formContent.appendChild(error);

	const generalTip = document.createElement('p');
	generalTip.textContent = "Describe the gerneral attributes of the wall you want to paint."
	formContent.appendChild(generalTip)

	// Increment the wall counter for the next wall
	wallCounter++;
	for (const key in defaultInputOptions) {
		if (defaultInputOptions.hasOwnProperty(key)) {
			appendSelectInput(`${defaultInputOptions[key].id}`, `${defaultInputOptions[key].optionName}`, formContent, `${defaultInputOptions[key].type}`);
		}
	}

	const excludeHeading = document.createElement('h2');
	excludeHeading.textContent = 'Exclude Area';
	formContent.appendChild(excludeHeading)

	const excludeTip = document.createElement('p');
	excludeTip.textContent = "Add the height and width of a door or window in the wall as this will help lower the cost"
	formContent.appendChild(excludeTip)

	for (const key in excludeInputOptions) {
		if (excludeInputOptions.hasOwnProperty(key)) {
			appendSelectInput(`${excludeInputOptions[key].id}`, `${excludeInputOptions[key].optionName}`, formContent, `${excludeInputOptions[key].type}`);
		}
	}
	// Create add to list button
	const buttonContainer = document.createElement('div');
	buttonContainer.className = 'button';
	buttonContainer.id = "submitData";
	const addToListSpan = document.createElement('span');
	addToListSpan.textContent = `Add to list`;
	buttonContainer.appendChild(addToListSpan);
	buttonContainer.onclick = submitData;
	formContent.appendChild(buttonContainer);
	// Append the entire form content div to the div with id wallDimensions
	document.getElementById('wallDimensions').appendChild(formContent);
	// Hide the addWallButton
	document.getElementById('addWallButton').style.display = "none";
});