import React, { forwardRef } from 'react';

const InputWithCompositions = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
    return <input
        className="border border-gray-400 px-4 py-2 w-full rounded-md"
        ref={ref} type="text" {...props} />;
});

export default InputWithCompositions;
