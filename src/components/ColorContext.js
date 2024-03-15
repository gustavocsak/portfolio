import React, { createContext, useState, useContext } from 'react';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
    const [primaryColor, setPrimaryColor] = useState('#c133ff'); // Default color

    return (
        <ColorContext.Provider value={{ primaryColor, setPrimaryColor }}>
            {children}
        </ColorContext.Provider>
    );
};

const useColor = () => {
    const context = useContext(ColorContext);
    if (!context) {
        throw new Error('useColor must be used within a ColorProvider');
    }
    return context;
};

export { ColorProvider, useColor };