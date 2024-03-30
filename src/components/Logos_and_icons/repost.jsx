


function Repost(props) {
    const {width, height, color}= props;
    return (
        <svg style={{width: width ? width : '20px',
                    height: height ? height : '20px'}} 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path style={{fill: color ? color : '#999'}} d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z"/>
        </svg>
    )
}

export default Repost;