

function SearchSection() {
    return (
        <div className="flex justify-center mt-[3rem] mb-[2rem]">
            <form className="relative rounded-[5px]">
                <input type="search" placeholder='Search for artists, bands, tracks, podcasts'
                    className="w-[42rem] h-[50px] rounded-[5px] placeholder:text-[#0000007a] placeholder:text-[18px]
                    border-0" id="header-search"/>
                <button className="bg-[url('https://a-v2.sndcdn.com/assets/images/search-dbfe5cbb.svg')] 
                    bg-no-repeat w-[95px] h-[55px] absolute bg-[length:25px_25px] bg-[center_50%] top-[0px] right-[0px] "/>
            </form>
            <div className="flex text-center items-center text-[18px] mx-[10px]">or</div>
            <a href="#" className="text-[18px] flex text-center items-center mx-[10px] text-white bg-[#f50] rounded-[4px]
                px-[25px]">Upload your own</a>
        </div>
    )
}

export default SearchSection;