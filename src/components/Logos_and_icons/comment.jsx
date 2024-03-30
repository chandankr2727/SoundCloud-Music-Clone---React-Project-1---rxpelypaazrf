


function Comment(props) {
    const {width, height, color}= props;
    return (
        <svg style={{width: width ? width : '19px',
                    height: height ? height : '19px'}} 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path style={{fill: color ? color : '#999'}} fillRule="evenodd" d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7.667a1 1 0 0 0-.6.2L3.6 21.8A1 1 0 0 1 2 21V6zm5 0a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2H7zm0 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H7z" 
            clipRule="evenodd"/>
        </svg>
    )
}

export default Comment;