import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from "./Item.scss";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';


export default function Item(props){

    return(
        <ListItem className={styles.item}>
            <ListItemButton className={styles.itemButton}>
                {props.text} <KeyboardArrowRightIcon/>
            </ListItemButton>
        </ListItem>
    )
}