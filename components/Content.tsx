import React from "react";

type Props = {
    children: React.ReactElement
}

function Content({ children }: Props) {
    return (
        <div className="content">
            {children}
        </div>
    );
}

export default Content;