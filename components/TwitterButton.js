import React from 'react';
import {TwitterShareButton, TwitterIcon} from "react-share";

const TwitterButton = ({title, url, className}) => {
    return (
        <TwitterShareButton
            url = {url}
            title = {title}
            hashtags = {["alquileres"]}
            className = {className}
            >
            <TwitterIcon size = {36} />
        </TwitterShareButton>
    )
}

export default TwitterButton;
