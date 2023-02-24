import React from "react";
import Back from "../../components/Back/Back";
import Item from "../../components/Item/Item";
import defaultStyles from "../../styles.scss";
import data from "../data";

export default function Episodes(){

    return(
        <>
            <Back link="/"/>
            <h2>Episodes</h2>
            <ul className={defaultStyles.list}>
                {
                    data.episodes.map((item, index)=>{
                        return (
                            <li key={index}>
                                <Item text={item.text} />
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}