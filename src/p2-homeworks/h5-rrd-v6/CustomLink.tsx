import React from 'react';
import {Link, To, useMatch} from "react-router-dom";

type CustomLintType = {
    children: string
    to: string | To
}
const CustomLink: React.FC<CustomLintType> = ({children,to,...props}) => {
    // const match = useMatch()
    return (
        <>
            {/*<Link*/}
            {/*    to={to}*/}
            {/*    style={{color: match ? 'var(--color-active' : 'deepskyblue'}}*/}
            {/*    {...props}*/}
            {/*>*/}
            {/*    {children}*/}
            {/*</Link>*/}
        </>

    );
};

export default CustomLink;