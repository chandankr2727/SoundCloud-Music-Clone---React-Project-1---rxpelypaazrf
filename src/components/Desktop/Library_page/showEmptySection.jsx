





export default function ShowEmptySection({image, message, linkMessage}) {
    return (
        <div className="w-full flex flex-col items-center py-[9rem]">
            <div className="w-[240px] h-[200px]">
                <img src={image} />
            </div>
            
            <div className="flex flex-col justify-center items-center">
                <p className="text-[18px]">{message}</p>
                {linkMessage && <p className="text-[14px] text-[#38d] hover:text-[#111]
                    font-semibold">{linkMessage}</p>}
            </div>
            
        </div>
    )
}