import ToggleSwitch from "../../../components/Toggle_switch/toggleSwitch";
import CloseButtonLogo from "../../../components/Logos_and_icons/closeButtonLogo";



export default function PlayListModal({onClose}) {

    return(
        <div id="playlistModal" className="absolute h-fit bg-white bottom-[5rem] right-0 z-10 
            shadow-[0_0_4px_rgba(0,0,0,0.25)]">
            <div className="flex flex-nowrap items-center justify-between py-[10px] px-[25px] cursor-pointer">
                <p className="text-[16px] grow" onClick={onClose}>Next up</p>

                <div className="flex flex-nowrap items-center">
                    <button className="mr-[1rem] border border-[#ccc] text-[15px] px-[15px] py-[1px] rounded-[3px]">Clear</button>

                    <button onClick={onClose} className="mr-[-7px]">
                        <CloseButtonLogo width={"35px"} height={"35px"} color={"#000000"}/>
                    </button>
                </div>
            </div>

            <div className="w-[30rem] h-[30rem] bg-white border-t border-[#ccc]">

            </div>
            
            <div className="flex flex-nowrap items-center justify-between px-[1.5rem] py-[2rem] border-t border-[#ccc]">
                <div>
                    <p className="text-[18px]">Autoplay station</p>
                    <p className="text-[#999] text-[14px] mt-[2px]">Hear related tracks based on what’s playing now.</p>
                </div>

                <ToggleSwitch />
            </div>
        </div>
    )
}