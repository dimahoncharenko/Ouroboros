import React from "react";

type Props = {
    children: React.ReactElement | string
}

function Italic({ children }: Props) {
    return (
        <span className="italic">{children}</span>
    );
}

export default Italic;