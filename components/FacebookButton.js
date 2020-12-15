import React from 'react'
import {FacebookShareButton, FacebookIcon} from "react-share";

const FacebookButton = ({title, description, url}) => {
    const quote = `${title} - ${description}`
    return (
        <FacebookShareButton
            url={url}
            quote={quote}
            hashtag="#alquileres">
            <FacebookIcon size={36} />
        </FacebookShareButton>
    )
}

export default FacebookButton
