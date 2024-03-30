


function NotificationLogo({width, height, color, mx}) {
    return (
        <svg style={{fill: color ? color : '#999', margin: mx && `${mx}`}} 
            xmlns="http://www.w3.org/2000/svg" width= {width ? width :"20"} height={height ? height :"20"} viewBox="0 0 512 512">
            <title>ionicons-v5-j</title>
            <path d="M256,480a80.09,80.09,0,0,0,73.3-48H182.7A80.09,80.09,0,0,0,256,480Z"/>
            <path d="M400,288V227.47C400,157,372.64,95.61,304,80l-8-48H216l-8,48c-68.88,15.61-96,76.76-96,147.47V288L64,352v48H448V352Z"/>
        </svg>
    )
}

export default NotificationLogo;