const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const generateRandomRGB = () => {
    const generatedColor = {
        red: Math.floor(Math.random() * 160) + 95,
        green: Math.floor(Math.random() * 160) + 95,
        blue: Math.floor(Math.random() * 160) + 95,
        str: `rgb(${this.red}, ${this.green}, ${this.blue})`
    }
    console.log(generatedColor);
    return generatedColor;
}

const generateRandomHSL = () => {
    const generatedColor = {
        hue: Math.floor(Math.random() * 360),
        saturation: 100,
        lightness: 50,
        str: `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`
    }
    return generatedColor;
}

const generateHSLShades = (hsl, numOfShades) => {
    const shades = [];
    const step = (100 - hsl.saturation) / numOfShades;
    for(let i = 0; i < numOfShades; i++) {
        const light = hsl.lightness + i * step;
        shades.push(`hsl(${hsl.hue}, ${hsl.saturation}%, ${light}%)`)
    }
    return shades;
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
    generateRandomHSL,
    generateHSLShades,
    generateShades,
    lightHex
};
