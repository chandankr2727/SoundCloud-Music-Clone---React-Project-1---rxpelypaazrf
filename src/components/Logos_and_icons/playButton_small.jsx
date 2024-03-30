

function Play_button_small(props) {
    const {width, height, color, margin}= props;
    return (
        <svg style={{width: width ? width : '20px', margin: margin && margin,
                    height: height ? height : '20px', fill: color ? color : '#999'}} 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"> 
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
        </svg>
    )
}

export default Play_button_small;