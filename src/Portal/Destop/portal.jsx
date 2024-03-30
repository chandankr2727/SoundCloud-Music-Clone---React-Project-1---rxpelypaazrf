import { createPortal } from "react-dom";
import React from "react";



export default function Portal({onClose, children}) {
    
    const handleClick= (event) => {
        if(event.target === event.currentTarget) {
            onClose();
        }
    };
    return createPortal(
        <div onClick={handleClick}>
            {children}
        </div>,
        document.body
    )
}






// function Song() {

//     const [liked, setLiked] = useState(false);
//     const [time, setTime] ..... 
    
//     const handleLike = () => {
    
//     setLiked(true);
    
//     setTimeout(() => {
    
//     setLiked(false);
    
//     }, 3000); // 3 seconds
    
//     }
    
//     return (
    
//     <div>
    
//     {liked && <Notification message="Song liked!" />}
    
//     <button onClick={handleLike}>Like Song</button>
    
//     </div>
    
//     );
    
//     }