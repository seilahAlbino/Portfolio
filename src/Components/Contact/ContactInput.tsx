import React, {memo} from "react";

interface ContactInputProps {
    placeholder: string;
    id: string;
    name: string;
    className?: string;
}

const ContactInput = memo(({placeholder, id, name, className}: ContactInputProps) => {
    return <>
        <label htmlFor={id} className="block text-lg font-medium">
            {placeholder}
        </label>
        <input
            type="text"
            id={id}
            name={name}
            className={`mt-1 block w-full p-3 text-lighttext border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary ${className}`}
            placeholder="O seu nome"
        />
    </>
})

export default ContactInput;