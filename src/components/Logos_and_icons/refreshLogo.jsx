



export default function RefreshLogo({width, height, color}) {
    return (
        <svg width= {width ? width :"20"} height={height ? height :"20"} 
            viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs/>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon points="0 0 20 0 20 20 0 20"/>
                <path d="M14.7083333,5.29003906 C13.5,4.08170573 11.8416667,3.33333333 10,3.33333333 C6.31666667,3.33333333 3.34166667,6.31666667 3.34166667,10 C3.34166667,13.6833333 6.31666667,16.6666667 10,16.6666667 C13.1083333,16.6666667 15.7,14.5416667 16.4416667,11.6666667 L14.7083333,11.6666667 C14.025,13.6083333 12.175,15 10,15 C7.24166667,15 5,12.7583333 5,10 C5,7.24166667 7.24166667,5 10,5 C11.3833333,5 12.6166667,5.575 13.5166667,6.48333333 L11,9 L17,9 L17,3 L14.7083333,5.29003906 Z" 
                    fill= {color ? color : "#999"} fillRule="nonzero"/>
            </g>
        </svg>
    )
}