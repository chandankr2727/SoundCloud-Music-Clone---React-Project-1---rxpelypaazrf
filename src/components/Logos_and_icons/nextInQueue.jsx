


function Next_in_queue(props) {
    const {width, height, color, margin}= props;
    return (
        <svg style={{width: width ? width : '20px',
            height: height ? height : '20px', fill: color ? color : 'black', margin: margin && margin}} 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
            <g> 
                <path fill= "transparent" d="M0 0H24V24H0z"/>
                <path fill= {color ? color : 'black'} d="M22 18v2H2v-2h20zM2 3.5l8 5-8 5v-10zM22 11v2H12v-2h10zm0-7v2H12V4h10z"/> 
            </g> 
        </svg>
    )
}

export default Next_in_queue;