import React from "react";

type Props = {
    children: React.ReactElement | string
}

function Bold({ children }: Props) {
    return (
        <span className="bold">{children}</span>
    );
}

export default Bold;