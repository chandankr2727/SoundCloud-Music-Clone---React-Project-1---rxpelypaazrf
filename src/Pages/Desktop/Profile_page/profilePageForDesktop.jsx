import NavbarForDesktop from "../navbarForDesktop";
import HeaderOfProfilePage from "../../../components/Desktop/Profile_page_components/headerOfProfilePage";
import NavbarForProfile from "../../../components/Desktop/Profile_page_components/navbarForProfile";
import AsideSectionForProfilePage from "../../../components/Desktop/Profile_page_components/asideSectionForProfilePage";






export default function ProfilePageForDesktop() {

    
    return (
        <>
            <NavbarForDesktop />

            <div className="mx-[5px] pt-[3rem] w-fit
                min-[1024px]:mx-[40px] min-[1150px]:mx-[100px]
                min-[960px]:w-[auto]">

               <HeaderOfProfilePage />

                {/* main section */}
                <div className="flex justify-between">

                    <NavbarForProfile />

                    <AsideSectionForProfilePage />
                    
                </div>

            </div>

        </>
    )
}