import React from 'react'
import LinkIcon from "./icons/LinkIcon";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyLink = ({url}) => {
    return (
        <CopyToClipboard text={url}
            onCopy={() => alert("Copiado!")}>
            <button><LinkIcon className="mx-1" /></button>
        </CopyToClipboard>
    )
}

export default CopyLink
