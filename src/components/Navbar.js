import React, { useState, useEffect } from 'react'
import { HexColorPicker } from 'react-colorful';
import { MdOutlineColorLens } from "react-icons/md";
import { useColor } from './ColorContext';
import { colorUtils } from '../utils/colorUtils';


const Navbar = ({ navRef }) => {
    const { primaryColor, setPrimaryColor } = useColor();
    const [colorPickerVisible, setColorPickerVisible] = useState(false);
    const gradientStyle = {
        background: `linear-gradient(to right, ${primaryColor}, ${colorUtils.lightHex(primaryColor)})`,
    };

    const handleColorPickerClick = () => {
        setColorPickerVisible(!colorPickerVisible);
    };

    const handleColorChange = (color) => {
        setPrimaryColor(color);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setColorPickerVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navRef]);

    


    return (
        <div className='w-full flex justify-center'>
            <div className='lg:w-10/12 flex justify-between items-center py-4 w-full' ref={navRef}>
                <div className='flex items-center gap-6'>
                    <div className='font-bold text-2xl'>gustavocs</div>
                    <ul className='hidden lg:flex lg:gap-6 list-none'>
                        <li className='cursor-pointer'>Projects</li>
                        <li className='cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div className='flex items-center gap-4'>
                    <button className='p-2.5 rounded-lg px-4' style={gradientStyle}>Resume</button>

                    <button
                        className=''
                        onClick={handleColorPickerClick}
                    >
                        <MdOutlineColorLens size={36}/>
                    </button>

                    {colorPickerVisible && (
                        <div className='absolute top-full right-0'>
                            <HexColorPicker className='color-picker' color={primaryColor} onChange={handleColorChange}/>
                        </div>
                    )}


                </div>

            </div>
        </div>
    )
}

export default Navbar