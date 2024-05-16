document.addEventListener('DOMContentLoaded', ()=> {
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
