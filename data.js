// object literal storing defaultinput options for the wall
const defaultInputOptions = {
    units : {id:"unit-select", optionName: "measurement unit", type: "select"},
    shape : {id:"shape-select", optionName: "Wall Shape", type: "select"},
    height : {id:"height-input", optionName: "Wall Height", type: "input"},
    width : {id:"width-input", optionName: "Wall Width", type: "input"},
    colour : {id:"colour-select", optionName: "colour", type: "select"},
    quality : {id:"quality-select", optionName: "paint quality", type: "select"}, 
}

const excludeInputOptions = {

    height : {id:"ex-height-input", optionName: " Height", type: "input"},
    width : {id:"ex-width-input", optionName: " Width", type: "input"},

}

const quality = [
    { value: 'premium', text: 'Premium (£28 per litre)' },
    { value: 'mid-range', text: 'Mid-Range (£15 per litre) ' },
    { value: 'budget', text: 'Budget (£10 per litre)' }
];

const shape = [
    { value: 'rectangle', text: 'rectangle' },
    { value: 'triangle', text: 'triangle' },
];

const units = [
    { value: 'centimeters', text: 'centimeters' },
    { value: 'inches', text: 'inches' },
];

const colours = [
    { value: 'red', text: 'Red' },
    { value: 'green', text: 'Green' },
    { value: 'Blue', text: 'Blue' },
    { value: 'Yellow', text: 'Yellow' },
    { value: 'Black', text: 'Black' },
    { value: 'White', text: 'White' },
];
