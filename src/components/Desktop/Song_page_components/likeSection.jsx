



export default function LikeSection({listname}) {
    return listname.map((item) => {
        const {image, name}= item;
        return (
            <div key={name} className="w-[40px] h-[36px] ml-[-10px] rounded-full
                bg-gradient-to-r from-[#846170] to-[#70929c]">
                <img className="rounded-full border-2 border-white" 
                    src={image} alt={name}/>
            </div>
        )
    })
}