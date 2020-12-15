import React from 'react';
import Twitter from "./icons/Twitter";
import { formatTextToPlaceInURL } from "../utils/utils";

const TwitterButton = ({title, description, url}) => {
    const tweetTitle = formatTextToPlaceInURL(title);
    const tweetDescription = formatTextToPlaceInURL(description);
    return (
        <div className="twitter-share-button">
            <Twitter color={"fill-white"} size={24}/>
            <a
            href={`https://twitter.com/intent/tweet?text=${tweetTitle}%20${tweetDescription}%20${url}`}>Compartir
            </a>
        </div>
    )
}

export default TwitterButton;
