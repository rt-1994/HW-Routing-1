import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from "react-router-dom";
import styles from "./Back.scss";
import Button from '@mui/material/Button';



export default function Back(props){


    return(
        <div>
            <Button><Link to={props.link}><span className={styles.back}><ArrowBackIcon/><span>Back</span></span></Link></Button>
        </div>
    )
}