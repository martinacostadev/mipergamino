import React from 'react'
import {FacebookShareButton, FacebookIcon} from "react-share";

const FacebookButton = ({title, description, url, className}) => {
    const quote = `${title} - ${description}`
    return (
        <FacebookShareButton
            url = {url}
            quote = {quote}
            hashtag = "#alquileres"
            className = {className}
            >
            <FacebookIcon size = {36} />
        </FacebookShareButton>
    )
}

export default FacebookButton
