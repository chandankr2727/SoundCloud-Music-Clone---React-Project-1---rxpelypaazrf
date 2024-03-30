import { NavLink, Outlet } from "react-router-dom";
import NavbarForDesktop from "../navbarForDesktop";
import FooterForDesktop from "../FooterForDesktop";



export default function LibraryPageForDesktop() {

    const navList= [{'name': 'Overview', path: `library`},
                {'name': 'Likes', path: `likes`},
                {'name': 'Playlists', path: `sets`},
                {'name': 'Albums', path: `albums`},
                {'name': 'Stations', path: `stations`},
                {'name': 'Following', path: `following`},
                {'name': 'History', path: `history`}, ]
    return (
        <>

            <NavbarForDesktop />

            <div className="pt-[4rem] mx-[5px] pt-[3rem] w-fit
                min-[1024px]:mx-[40px] min-[1150px]:mx-[100px] min-[960px]:w-[auto]">   
                <nav className="w-full flex items-center justify-start border-b border-[#f2f2f2]">
                    {
                        navList.map((item) => {
                            const {name, path}= item
                            return (
                                <div key={path} className="px-[15px] py-[10px]">
                                    <NavLink to={path} 
                                        className= {({isActive}) => (isActive ? 'border-b-[3px] border-[#f50] text-[#f50] py-[13px]' 
                                            : 'py-[13px]  hover:border-b-[3px] hover:border-[#000000] text-[#111]') }>
                                        <button className=" text-[24px]
                                            font-semibold">
                                            {name}
                                        </button>
                                    </NavLink>
                                </div>  
                            )
                        })
                    }
                </nav>

                <Outlet />
                
                <FooterForDesktop />
            </div>

            
        </>
    )
}