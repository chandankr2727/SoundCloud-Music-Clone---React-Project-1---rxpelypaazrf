


function Copy_link(props) {
    const {width, height, color}= props;
    return(
        <svg  style={{width: width ? width : '16px', height: height ? height : '16px'}} 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect />
            <line  x1="80" y1="128" x2="176" y2="128" stroke={color ? color : '#999'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
            <path fill="none" d="M104,176H64a48,48,0,0,1,0-96h40" stroke={color ? color : '#999'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
            <path fill="none" d="M152,176h40a48,48,0,0,0,0-96H152" stroke={color ? color : '#999'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
        </svg>
    )
}

export default Copy_link;