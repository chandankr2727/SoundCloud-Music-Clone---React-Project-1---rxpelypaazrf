import { NavLink, Outlet } from "react-router-dom";





export default function NavbarForProfile() {

    const navList= [{'name': 'Popular tracks', path: `popular-tracks`},
                {'name': 'Tracks', path: `tracks`},
                {'name': 'Albums', path: `albums`},
                {'name': 'Playlists', path: `sets`},
                {'name': 'Reposts', path: `reposts`},]

    return (
        <div className="w-full mr-[3rem] ml-[1rem]">
            <nav className="w-full flex items-center justify-start border-b border-[#f2f2f2]">
                <div key={"All"} className="px-[15px] py-[10px]">
                
                    <NavLink to={`all`} 
                        className= {({isActive}) => (isActive ? 'border-b-[3px] border-[#f50] text-[#f50] py-[10px]' 
                            : 'py-[11px]  hover:border-b-[3px] hover:border-[#000000] text-[#111] ')}>
                        <button className=" text-[18px]
                            font-semibold">
                            All
                        </button>
                    </NavLink>
                </div>
                {
                    navList.map((item) => {
                        const {name, path}= item
                        return (
                            <div key={path} className="px-[15px] py-[10px]">
                                <NavLink to={path} 
                                    className= {({isActive}) => (isActive ? 'border-b-[3px] border-[#f50] text-[#f50] py-[11px]' 
                                        : 'py-[13px]  hover:border-b-[3px] hover:border-[#000000] text-[#111] ') }>
                                    <button className=" text-[18px]
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
        </div>
       

    )
}