const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const generateRandomRGB = () => {
    const generatedColor = {
        red: Math.floor(Math.random() * 220) + 36,
        green: Math.floor(Math.random() * 220) + 36,
        blue: Math.floor(Math.random() * 220) + 36
    }
    return generatedColor;
}

const generateShades = (rgb, factor, numOfShades) => {
    const shades = [];
    for (let i = 0; i < numOfShades; i++) {
        const light = 1 - factor * i;
        const newColor = {
            red: Math.round(rgb.red * light),
            green: Math.round(rgb.green * light),
            blue: Math.round(rgb.blue * light)
        }
        shades.push(`rgb(${newColor.red}, ${newColor.green}, ${newColor.blue})`)
    }
    return shades
}

const lightHex = (hex, factor=0.3) => {
    const light = 1 - factor;
    const newRed = Math.round(parseInt(hex.slice(1,3), 16) * light).toString(16).padStart(2, '0')
    const newGreen = Math.round(parseInt(hex.slice(3,5), 16) * light).toString(16).padStart(2, '0')
    const newBlue = Math.round(parseInt(hex.slice(5,7), 16) * light).toString(16).padStart(2, '0')
    const newHex = `#${newRed + newGreen + newBlue}`;
    return newHex;
}

export const colorUtils = {
    getRandom,
    generateRandomRGB,
    generateShades,
    lightHex
};
