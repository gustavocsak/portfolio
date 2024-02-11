function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomRGB() {
    const color = {
        red: Math.floor(Math.random() * 160) + 95,
        green: Math.floor(Math.random() * 160) + 95,
        blue: Math.floor(Math.random() * 160) + 95,
    }
    color.str = `rgb(${color.red}, ${color.green}, ${color.blue})`;
    return color;
}

function generateRandomHSL() {
    const color = {
        hue: Math.floor(Math.random() * 360),
        saturation: 100,
        lightness: 50,
    }
    color.str = `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`;
    return color;
}

function generateHSLShades(hsl, numOfShades, step = 15) {
    const shades = [];
    for(let i = 0; i < numOfShades; i++) {
        const light = i * step + step;
        shades.push(`hsl(${hsl.hue}, ${hsl.saturation}%, ${light}%)`);
    }
    return shades;
}

function generateRGBShades(rgb, factor, numOfShades) {
    const shades = [];
    for (let i = 0; i < numOfShades; i++) {
        const light = 1 - factor * i;
        const red = Math.round(rgb.red * light);
        const green = Math.round(rgb.green * light);
        const blue = Math.round(rgb.blue * light);
        shades.push(`rgb(${red}, ${green}, ${blue})`);
    }
    return shades;
}

function lightHex(hex, factor = 0.3) {
    const light = 1 - factor;
    const newRed = Math.round(parseInt(hex.slice(1,3), 16) * light).toString(16).padStart(2, '0');
    const newGreen = Math.round(parseInt(hex.slice(3,5), 16) * light).toString(16).padStart(2, '0');
    const newBlue = Math.round(parseInt(hex.slice(5,7), 16) * light).toString(16).padStart(2, '0');
    const newHex = `#${newRed + newGreen + newBlue}`;
    return newHex;
}

export const colorUtils = {
    getRandom,
    generateRandomRGB,
    generateRandomHSL,
    generateHSLShades,
    generateRGBShades,
    lightHex
};
