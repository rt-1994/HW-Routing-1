import React from "react";
import Item from "../../components/Item/Item";
import styles from "./Characters.scss";
import defaultStyles from "../../styles.scss";
import {Link} from "react-router-dom";
import Back from "../../components/Back/Back";
import data from "../data";


export default function Characters(){


    return(
        <>
            <Back link="/"/>
            <h2>Characters</h2>
            <ul className={defaultStyles.list}>
                {
                    data.characters.map((item, index)=>{
                        return (
                            <li key={index}>
                                <Link to={`/character/${item.id}`}><Item text={item.text} /></Link>
                            </li>
                        )
                    })
                }

            </ul>
        </>
    )
}
