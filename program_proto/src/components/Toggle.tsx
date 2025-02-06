import { useState } from "react";
import Button from '@mui/material/Button/Button';
import MenuItem from '@mui/material/MenuItem';

export default function Toggle({name}: {name: string})
{
    const [toggle, setToggle] = useState<boolean>(false);

    return (
    <div className='bg-black flex flex-row space-x-30'>

            {toggle ?
                <>
                <Button variant="contained" sx={{backgroundColor: 'grey'}} onClick={() => setToggle(!toggle)}>-</Button>
                </>
                :<><Button variant="contained" sx={{backgroundColor: 'grey'}} onClick={() => setToggle(!toggle)}>+</Button></>
            }

            <h2 className='text-white bottom-80 mb-5'>{name}</h2>
            {(toggle && name === 'Visualization Options') && 
            <div className='w-1/7 flex flex-col bg-zinc-400'>
                <MenuItem sx={{color: 'white'}}>Data Flow Diagram</MenuItem>
                <MenuItem sx={{color: 'white'}}>Sequence Diagram</MenuItem>
                <MenuItem sx={{color: 'white'}}>Class Diagram</MenuItem>
            </div>
            }
        </div>
    )
}