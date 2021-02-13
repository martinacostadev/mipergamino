import React, { useState }  from 'react';
import LinkIcon from "./icons/LinkIcon";
import { CopyToClipboard } from "react-copy-to-clipboard";
    
const CopyLink = ({ url }) => {
    const [showMe, setShowMe] = useState(false);    
    const showCopyMessage = (e => {
        setShowMe(true);
        setTimeout(() => {
            setShowMe(false)
          }, 2000)        
    });
    
    return (
        <>
            <span className="CopyToClipboard" style={{ display: showMe ? "block" : "none" }}>Copiado!</span>        
            <CopyToClipboard text={url}
                onCopy={() => showCopyMessage()}>
                <button><LinkIcon className="mx-1" /></button>
            </CopyToClipboard>
        </>
    )
}

export default CopyLink;