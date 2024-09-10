import React from "react";

interface TechnologyCardProps {
    name: string;
    icon: string;
}

function TechnologyCard({ name, icon }: TechnologyCardProps) {
    return (
        <div className="flex items-center p-2 rounded-lg shadow-md shadow-primary outline outline-1 outline-primary">
            <span className="text-md">{name}</span>
            {icon && (
                <img src={`/technologies/${icon}`} alt={`${name} icon`} className="w-5 h-5 ms-2" />
            )}
        </div>
    );
}

export default TechnologyCard;