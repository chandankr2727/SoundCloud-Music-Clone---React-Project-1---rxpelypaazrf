


function Add_to_playlist(props) {
    const {width, height, color}= props;

    return (
        <svg style={{width: width ? width : '20px',
             height: height ? height : '20px'}}  
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
            <g> 
                <path fill="none" d="M0 0h24v24H0z"/> 
                <path fill= {color ? color : "#999"} d="M2 18h10v2H2v-2zm0-7h20v2H2v-2zm0-7h20v2H2V4zm16 14v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"/> 
            </g> 
        </svg>
    )
}

export default Add_to_playlist;