import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { handleCopy } from "../../_Helpers/index"


type CodeBlockProps = {
    code: string,
    isCopied: boolean,
    setIsCopied: React.Dispatch<React.SetStateAction<boolean>>
}


const CodeBlock: React.FC<CodeBlockProps> = ({ code, isCopied, setIsCopied }) => {
    return (
        <div className='flex p-4 bg-[#f8f8ff] rounded-lg relative'>
            <SyntaxHighlighter language="javascript" style={docco}>
                {code}
            </SyntaxHighlighter>

            <CopyToClipboard text={code} onCopy={() => handleCopy(setIsCopied)}>
                <button className='absolute right-4'>
                    {isCopied ? <span className='text-xs'>Copied!</span> : <FontAwesomeIcon icon={faCopy} />}
                </button>
            </CopyToClipboard>
        </div>
    )
}

export default CodeBlock