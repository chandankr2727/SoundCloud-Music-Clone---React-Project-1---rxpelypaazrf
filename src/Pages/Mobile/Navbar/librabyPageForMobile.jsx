import { Link, Outlet } from "react-router-dom";
import FooterForMobile from "../Home_page/footerForMobile";




function LibraryPageForMobile() {

    const arr= [{name: 'Likes', path: "likes"}, 
                {name: 'Following', path: "following"}];

    return (
        <>

            <div className="bg-black text-white px-[1rem]">
                <p className="text-[2rem] py-[1rem] font-semibold">Library</p>

                <ul className="my-[5px]">
                    {
                        arr.map((item) => {
                           const {name, path}= item;
                            return(
                                <Link to={`${path}`} key={name}>
                                    <li className="flex justify-between py-[1rem]">
                                        <p className="text-[17px] font-semibold">{name}</p>
                                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path className="fill-white" d="m10 3.94 7.53 7.53a.75.75 0 0 1 0 1.06L10 20.06 8.94 19l7-7-7-7L10 3.94Z" transform="">
                                            </path>
                                        </svg>
                                    </li>
                                </Link>
                               
                            )
                        })
                    }
                </ul>

                <Outlet />
            </div>
            
            <FooterForMobile />
        </>
    )
}

export default LibraryPageForMobile;