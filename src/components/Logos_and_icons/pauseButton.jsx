


function PauseButton({width, height, color}) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width= {width ? width :"20"} height={height ? height :"20"} fill= {color ? color : "#999"}
            viewBox="0 0 512 512">
            <title>ionicons-v5-c</title>
            <path d="M224,432H144V80h80Z"/>
            <path d="M368,432H288V80h80Z"/>
        </svg>
    )
}

export default PauseButton;