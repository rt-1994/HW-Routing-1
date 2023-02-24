import React, {useEffect, useState} from "react";
import {Link, useMatch} from "react-router-dom";
import data from "../data";
import Back from "../../components/Back/Back";
import defaultStyles from "../../styles.scss";
import styles from "./Character.scss";


export default function Character(){

    const match = useMatch("/character/:id");
    const info = data.characters.find((item)=>item.id===match.params.id)

    return(

            <div>
                <Back link="/characters"/>
                <h2 >Character</h2>
                <ul className={defaultStyles.list}>
                    <h3 className={styles.title}>{info.text}</h3>
                    <p className={styles.text}>
                        {info.desc}
                    </p>
                </ul>
            </div>

    )
}
