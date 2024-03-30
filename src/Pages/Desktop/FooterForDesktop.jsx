import { useContext } from "react";
import { MusicContext } from "../../Contexts/musicContext";



function FooterForDesktop() {

    const {anchor_tags}= useContext(MusicContext);
    return(
        <div className="sticky top-0">
            <div className="border-t border-t-[#ccc] pt-[1rem] ">
                <div className="my-[1rem] leading-[20px]">
                    {
                        anchor_tags.map((item, i) => {
                            
                            const {tag, url}= item;
                            return (
                                <a key={url} href= {url} className="text-[#ccc] text-[14px] font-semibold
                                    hover:text-[#999]" target="blank">{tag}  ⁃  </a>
                            )
                        })
                    }
                </div>
            </div>

            <div className="">
                <span className="text-[#38d] cursor-pointer">
                    Language: <span className="text-black">English (US)</span>
                </span>
            </div>
        </div>
        
    )
}

export default FooterForDesktop;