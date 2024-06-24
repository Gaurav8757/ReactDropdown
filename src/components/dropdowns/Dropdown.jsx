import  { useState } from 'react';

const Dropdown = () => {
    const [selected, setSelected] = useState('');
    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    return (

        <div className="flex flex-col items-start font-sans">
            {/* Label */}
            <label htmlFor="dropdown" className="mb-2 text-gray-700">Should you use a dropdown?</label>
            {/* Dropdown Menu */}
            <select
                id="dropdown"
                value={selected}
                onChange={handleChange}
                className="w-52 p-2 text-lg text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-0 pb-4">
                <option className='rounded focus:outline-none focus:ring-0' value="">Select</option>
                <option className='rounded focus:outline-none focus:ring-0' value="yes">Yes</option>
                <option className='rounded focus:outline-none focus:ring-0' value="probably-not">Probably not</option>
            </select>
        </div>
    );
};

export default Dropdown;
