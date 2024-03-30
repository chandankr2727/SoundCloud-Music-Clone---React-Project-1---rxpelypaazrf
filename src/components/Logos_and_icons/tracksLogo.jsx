



export default function TracksLogo({width, height, color}) {
    return (
        <svg width= {width ? width :"20"} height={height ? height :"20"} 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <g fill="none" fillRule="evenodd">
                <path fill= {color ? color : "#999"} fillRule="nonzero" d="M8.667 2v12H7.333V2h1.334zM6 4v8H4.667V4H6zm5.333 1.333v5.334H10V5.333h1.333zm-8 1.334v2.666H2V6.667h1.333zm10.667 0v2.666h-1.333V6.667H14z"/>
            </g>
        </svg>
    )
}