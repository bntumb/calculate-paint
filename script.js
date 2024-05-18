let wallCounter = 1;
let wallData = [];

document.getElementById('addWallButton').addEventListener('click', ()=> {
        // Create the main div
        const formContent = document.createElement('div');
        formContent.className = 'form-content';
        formContent.id = `wall-${wallCounter}`;

        // Create and append the heading with the counter
        const heading = document.createElement('h2');
        heading.textContent = `Wall ${wallCounter}`;
        formContent.appendChild(heading);

        // Increment the wall counter for the next wall
        wallCounter++;

        // Create and append the height input
        const heightInput = document.createElement('input');
        heightInput.placeholder = 'Height';
        heightInput.type = 'number';
        heightInput.id = `height-${formContent.id}`;
        heightInput.name = 'height';
        heightInput.min = '0';
        heightInput.required = true;
        formContent.appendChild(heightInput);
        formContent.appendChild(document.createElement('br'));
        formContent.appendChild(document.createElement('br'));

        // Create and append the width input
        const widthInput = document.createElement('input');
        widthInput.placeholder = 'Width';
        widthInput.type = 'number';
        widthInput.id = `width-${formContent.id}`;
        widthInput.name = 'width';
        widthInput.min = '0';
        widthInput.required = true;
        formContent.appendChild(widthInput);
        formContent.appendChild(document.createElement('br'));
        formContent.appendChild(document.createElement('br'));

        // Create and append the color label and select
        const colorLabel = document.createElement('label');
        colorLabel.htmlFor = `color-${formContent.id}`;
        colorLabel.textContent = 'Color:';
        formContent.appendChild(colorLabel);

        const colorSelect = document.createElement('select');
        colorSelect.id = `colour-${formContent.id}`;
        colorSelect.name = 'color';
        colorSelect.required = true;
        const defaultColorOption = document.createElement('option');
        defaultColorOption.value = '';
        defaultColorOption.textContent = 'Select a color';
        colorSelect.appendChild(defaultColorOption);
        formContent.appendChild(colorSelect);
        formContent.appendChild(document.createElement('br'));

        // Create and append the quality label and select
        const qualityLabel = document.createElement('label');
        qualityLabel.htmlFor = `quality-${formContent.id}`;
        qualityLabel.textContent = 'Quality:';
        formContent.appendChild(qualityLabel);

        const qualitySelect = document.createElement('select');
        qualitySelect.id = `quality-${formContent.id}`;
        qualitySelect.name = 'quality';
        qualitySelect.required = true;
        const defaultQualityOption = document.createElement('option');
        defaultQualityOption.value = '';
        defaultQualityOption.textContent = 'Select a quality';
        qualitySelect.appendChild(defaultQualityOption);
        formContent.appendChild(qualitySelect);

        // Append the entire form content div to the div with id formdimensions
        document.getElementById('wallDimensions').appendChild(formContent);

        // Example calculation setup
        const form = document.getElementById('dimensionForm');
    
            document.getElementById('submitData').addEventListener('click', ()=> {
                let height = 0;
                let width = 0
                let wallName = ""

                    for (let i = 0; i <= wallCounter-1; i++){
                        height = document.getElementById(`height-wall-${i}`).value;
                        width = document.getElementById(`width-wall-${i}`).value;
                        wallName = "wall-"+i;
                    }
                    let wall = {
                        "name": wallName,
                        "w": width,
                        "h": height,
                      }
                      
                      wallData.push(wall)
                    console.log(wallData)




                // const color = document.getElementById(`colour--wall-${i}`).value;
                // const quality = document.getElementById(`quality--wall-${i}`).value;

        });
    
});