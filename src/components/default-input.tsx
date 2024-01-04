import React, { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }
    return <input
        className="border border-gray-400 px-4 py-2 w-full rounded-md"
        onChange={handleChange}
        ref={ref} type="text" {...props} />;
});

export default Input;
