//function to export triangles, circles, and squares//

function switchingShape(text, textColor, shape, shapeColor) {

    switch (shape) {
        case `circle`:
            return `
                <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
                <circle r="98" cx="150" cy="100" fill="${shapeColor}" />
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" style="font-size:64px">${text}</text>
                </svg>
            `;
            break;

        case `triangle`:
            return `
                <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,5 300,200 5,200" style="fill:${shapeColor};stroke:${shapeColor};stroke-width:3" />
                <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" style="font-size:64px">${text}</text>
                </svg>
            `;
            // break;
        
        case `square`:
            return `
                <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="${shapeColor}"/>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" style="font-size:64px">${text}</text>
                </svg>
            `;
            break;

        default:
            return `<text> Error: Unsupported shape</text>`;

    }


}




function generateLogo(data) {

    const {text, textColor, shape, shapeColor} = data;

    const newShape = switchingShape(text, textColor, shape, shapeColor);

    return `
    ${newShape}

    `;


}


module.exports = {generateLogo, switchingShape};