import { useState } from "react";
import Button from '@mui/material/Button/Button';
import MenuItem from '@mui/material/MenuItem';
import Dependencies from "./Dependencies";

export default function Toggle({name, style, isPressed}: {name: string, style: string, isPressed: boolean})
{
    const [toggle, setToggle] = useState<boolean>(isPressed);

    return (
    <div className='border bg-black flex flex-row space-x-30 border-white inline-block'>

            <div className="flex flex-row relative">
                <Button variant="contained" sx={{backgroundColor: 'grey', zIndex: 10}} onClick={() => setToggle(!toggle)}>{toggle ? '-' : '+'}</Button> 
                <h2 className={style}>{name}</h2>
            </div>
            
            
            {toggle && name === 'Visualization Options' && 
            <div className='w-1/7 flex flex-col bg-zinc-400'>
                <MenuItem sx={{color: 'white'}}>Data Flow Diagram</MenuItem>
                <MenuItem sx={{color: 'white'}}>Sequence Diagram</MenuItem>
                <MenuItem sx={{color: 'white'}}>Class Diagram</MenuItem>
            </div>
            }

            {toggle && name === 'Big Picture' && 
            <div className='w-1/7 flex flex-col bg-zinc-400'>
                <Dependencies />
            </div>
            }


        </div>
    )
}