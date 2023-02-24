import React from "react";
import Item from "../../components/Item/Item";
import {Link} from "react-router-dom";
import defaultStyles from "../../styles.scss";


export default function Main(){


    return(
        <>
            <h2>The Simpsons</h2>
            <ul className={defaultStyles.list}>
                <li>
                    <Link to="/characters"><Item text="Characters" /></Link>
                </li>
                <li>
                    <Link to="/episodes"><Item text="Episodes" /></Link>
                </li>
            </ul>
        </>
    )
}
