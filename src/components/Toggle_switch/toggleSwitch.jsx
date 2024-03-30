
import styles from "./toggleSwitch.css";



export default function ToggleSwitch({width="65px", height="35px"}) {
    return (
        <label className={`w-[${width}] h-[${height}] switch`}>
            <input type="checkbox" className="slider"/>
            <span className="slider round"></span>
        </label>
    )
}


