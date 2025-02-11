import Toggle from "./Toggle";

export default function Relations()
{
    return (
        <div className='bg-black'>
        <div className="absolute top-0 border-white bg-black">
        <Toggle name='Big Picture' style='text-white bottom-20 inline-block' isPressed={false}/>
        </div>
        </div>
    )
}