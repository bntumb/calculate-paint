

let wallCounter = 1;

document.getElementById('addWallButton').addEventListener('click', function() {
    // Create the main div
    const formContent = document.createElement('div');
    formContent.className = 'form-content';

    // Create and append the heading with the counter
    const heading = document.createElement('h2');
    heading.textContent = `Wall ${wallCounter}`;
    formContent.appendChild(heading);

    // Increment the wall counter for the next wall
    wallCounter++;

    // Create the dimensions div
    const dimensions = document.createElement('div');
    dimensions.id = 'dimenensions';

    // Create the group div for dimensions
    const groupDimensions = document.createElement('div');
    groupDimensions.className = 'group';

    // Create and append the height input
    const heightInput = document.createElement('input');
    heightInput.placeholder = 'Height';
    heightInput.type = 'number';
    heightInput.id = 'height';
    heightInput.name = 'height';
    heightInput.min = '0';
    heightInput.required = true;
    groupDimensions.appendChild(heightInput);
    groupDimensions.appendChild(document.createElement('br'));
    groupDimensions.appendChild(document.createElement('br'));

    // Create and append the width input
    const widthInput = document.createElement('input');
    widthInput.placeholder = 'Width';
    widthInput.type = 'number';
    widthInput.id = 'width';
    widthInput.name = 'width';
    widthInput.min = '0';
    widthInput.required = true;
    groupDimensions.appendChild(widthInput);
    groupDimensions.appendChild(document.createElement('br'));
    groupDimensions.appendChild(document.createElement('br'));

    // Append the group to the dimensions div
    dimensions.appendChild(groupDimensions);

    // Create the select-options div
    const selectOptions = document.createElement('div');
    selectOptions.id = 'select-options';

    // Create the group div for select options
    const groupSelect = document.createElement('div');
    groupSelect.className = 'group';

    // Create and append the color label and select
    const colorLabel = document.createElement('label');
    colorLabel.htmlFor = 'color';
    colorLabel.textContent = 'Color:';
    groupSelect.appendChild(colorLabel);

    const colorSelect = document.createElement('select');
    colorSelect.id = 'colour';
    colorSelect.name = 'color';
    colorSelect.required = true;
    const defaultColorOption = document.createElement('option');
    defaultColorOption.value = '';
    defaultColorOption.textContent = 'Select a color';
    colorSelect.appendChild(defaultColorOption);
    groupSelect.appendChild(colorSelect);

    // Create and append the quality label and select
    const qualityLabel = document.createElement('label');
    qualityLabel.htmlFor = 'quality';
    qualityLabel.textContent = 'Quality:';
    groupSelect.appendChild(qualityLabel);

    const qualitySelect = document.createElement('select');
    qualitySelect.id = 'quality';
    qualitySelect.name = 'quality';
    qualitySelect.required = true;
    const defaultQualityOption = document.createElement('option');
    defaultQualityOption.value = '';
    defaultQualityOption.textContent = 'Select a quality';
    qualitySelect.appendChild(defaultQualityOption);
    groupSelect.appendChild(qualitySelect);

    // Append the group to the select-options div
    selectOptions.appendChild(groupSelect);

    // Append dimensions and select-options to the main form content div
    formContent.appendChild(dimensions);
    formContent.appendChild(selectOptions);

    // Append the entire form content div to the div with id formdimensions
    document.getElementById('wallDimensions').appendChild(formContent);
	
	
		// Function to populate select options using arrow functions
	const populateSelectOptions = (selectElementId, optionsArray) => {
		const selectElement = document.getElementById(selectElementId);
		optionsArray.forEach(optionValue => {
			const option = document.createElement('option');
			option.value = optionValue;
			option.textContent = optionValue;
			selectElement.appendChild(option);
		});
	};



	// Colour Options
	const colors = ["red", "green", "yellow", "blue"];
	populateSelectOptions('colour', colors);

	// Quality options
	const qualities = ["premium", "mid-range", "budget"];
	populateSelectOptions('quality', qualities);

    const form = document.getElementById('dimensionForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const height = document.getElementById('height').value;
        const width = document.getElementById('width').value;
        const color = document.getElementById('color').value;

        if (height && width && color) {
            const cost = colors[color];
            alert(`Height: ${height}, Width: ${width}, Color: ${color}, Cost: $${cost}`);
        } else {
            alert('Please enter height, width, and select a color.');
        }
    });
});
