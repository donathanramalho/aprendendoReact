import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkComponent = styled(Link)`
    margin: 15px;
    text-decoration: none;
    color: white;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: .2rem;

    border: 2px solid white;
    border-radius: 4px;
    width: 10rem;

    

    &:hover {
        background-color: rgb(226, 226, 226);
        color: black;
    }
`
