//packages needed for the application//

const inquirer = require("inquirer");
const fs = require(`fs`);
const colors = require(`colors`);
const jest = require(`jest`);
const { error } = require("console");

const {generateLogo} = require(`./lib/generateLogoFile`);
const generateLogoFile = require(`./lib/generateLogoFile`);


inquirer
    .prompt([
        {
            type: `input`,
            name: `text`,
            message: `Please, enter up to three (3) characters to be added to your logo.`,
            validate: input => input.length > 0 && input.length <= 3 ? true : `Please enter up to three characters.`
        },
        {
            type: `input`,
            name: `textColor`,
            message: `Please, add the color you want to use for your text (keyword or hex).`
        },
        {
            type: `list`,
            name: `shape`,
            message: `Please, from the list below, select one shape to be used for you logo`,
            choices: [`circle`, `triangle`, `square`]
        },
        {
            type: `input`,
            name: `shapeColor`,
            message: `Please, add the color you want to use for yout shape (keyword or hex).`
        }
    ])

    .then((responses) => {
        const userPrompts = generateLogo(responses);


        const text = responses.text;
        const textColor = responses.textColor;
        const shapeColor = responses.shapeColor;
        const shape = responses.shape;

        generateLogoFile.switchingShape(text, textColor, shape, shapeColor);



        writeSvgFile(userPrompts);
    });


//function to write the SVG file
function writeSvgFile(data) {
    fs.writeFile(`logo.svg`, data, (error) => error? console.log(`something is not right!`) : console.log(`Generated logo.svg`));
}







        







