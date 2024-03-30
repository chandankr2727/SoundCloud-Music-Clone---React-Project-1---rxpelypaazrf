



function MessageLogo({width, height, color, mx}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width= {width ? width :"20"} height={height ? height :"20"} style={{margin: mx && `${mx}`}}
            viewBox="0 0 512 512">
            <path style={{fill: color ? color : '#999'}} d="M464,80H48A16,16,0,0,0,32,96V416a16,16,0,0,0,16,16H464a16,16,0,0,0,16-16V96A16,16,0,0,0,464,80ZM265.82,284.63a16,16,0,0,1-19.64,0L89.55,162.81l19.64-25.26L256,251.73,402.81,137.55l19.64,25.26Z"/>
        </svg>
    )
}

export default MessageLogo;