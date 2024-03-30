import { useContext, useEffect, useState } from "react"
import { MusicContext } from "../../../Contexts/musicContext"
import FooterForMobile from "../Home_page/footerForMobile";
import { fetch_data } from "../../../Utils/fetchFunctions";
import { mapArtistData } from "../../../Utils/mapFunctions";
import { Link } from "react-router-dom";
import Filled_followers from "../../../components/Logos_and_icons/filledFollowers";






export default function Following() {

    const {favArtists, myRandom, urlObject, projectId}= useContext(MusicContext);

    const [artistList, setArtistList]= useState([]);
    const [isLoading, setIsLoading]= useState(false);

    useEffect(() => {
        let arr= [];
        try {
            favArtists.forEach((id) => {
                fetch_data(urlObject.artistUrl + id, projectId)
                    .then(data => {
                        const modifiedData= mapArtistData(data);
                        arr= [...arr, modifiedData];
                        setArtistList(arr); 
                })
            })            
        } catch(error) {
            console.log("error in rendering related songs: ", error);
        } finally {
             
            setIsLoading(false);
        }
    }, [])

    return (
        <>
            <div className="text-white h-full px-[1rem] mt-[1rem]">
                <div className="flex items-center mb-[2rem]">
                    <Link to={`/you`}>
                        <button className="border border-white bg-black px-[10px] py-[3px] rounded-[4px] 
                                hover:bg-[white] hover:text-[#000000]">
                            Back
                        </button>
                    </Link>

                    <div className="pl-[2rem] text-[20px] font-semibold">
                        Following
                    </div>
                </div>
                {
                    favArtists == [] ? 
                    <div className="flex flex-col flex-nowrap justify-center px-[2rem] min-h-[50vh]">
                        <svg className="w-[150px]" id="hero-message-logo" viewBox="0 0 143 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="false">
                            <title>Navigate to home</title>
                            <path className="fill-[#999]" transform="translate(-166.000000, -1125.000000)" d="M308.984235,1169.99251 C308.382505,1180.70295 299.444837,1189.03525 288.718543,1188.88554 L240.008437,1188.88554 C237.777524,1188.86472 235.977065,1187.05577 235.966737,1184.82478 L235.966737,1132.37801 C235.894282,1130.53582 236.962478,1128.83883 238.654849,1128.10753 C238.654849,1128.10753 243.135035,1124.99996 252.572022,1124.99996 C258.337036,1124.99309 263.996267,1126.54789 268.948531,1129.49925 C276.76341,1134.09703 282.29495,1141.75821 284.200228,1150.62285 C285.880958,1150.14737 287.620063,1149.90993 289.36674,1149.91746 C294.659738,1149.88414 299.738952,1152.0036 303.438351,1155.78928 C307.13775,1159.57496 309.139562,1164.70168 308.984235,1169.99251 Z M229.885123,1135.69525 C231.353099,1153.48254 232.420718,1169.70654 229.885123,1187.43663 C229.796699,1188.23857 229.119091,1188.84557 228.312292,1188.84557 C227.505494,1188.84557 226.827885,1188.23857 226.739461,1187.43663 C224.375448,1169.85905 225.404938,1153.33003 226.739461,1135.69525 C226.672943,1135.09199 226.957336,1134.50383 227.471487,1134.18133 C227.985639,1133.85884 228.638946,1133.85884 229.153097,1134.18133 C229.667248,1134.50383 229.951641,1135.09199 229.885123,1135.69525 Z M220.028715,1187.4557 C219.904865,1188.26549 219.208361,1188.86356 218.389157,1188.86356 C217.569953,1188.86356 216.87345,1188.26549 216.7496,1187.4557 C214.986145,1172.28686 214.986145,1156.96477 216.7496,1141.79593 C216.840309,1140.9535 217.551388,1140.31488 218.398689,1140.31488 C219.245991,1140.31488 219.95707,1140.9535 220.047779,1141.79593 C222.005153,1156.95333 221.998746,1172.29994 220.028715,1187.4557 Z M210.153241,1140.2517 C211.754669,1156.55195 212.479125,1171.15545 210.134176,1187.41757 C210.134176,1188.29148 209.425728,1188.99993 208.551813,1188.99993 C207.677898,1188.99993 206.969449,1188.29148 206.969449,1187.41757 C204.70076,1171.36516 205.463344,1156.34224 206.969449,1140.2517 C207.05845,1139.43964 207.744425,1138.82474 208.561345,1138.82474 C209.378266,1138.82474 210.06424,1139.43964 210.153241,1140.2517 Z M200.258703,1187.47476 C200.169129,1188.29694 199.474788,1188.91975 198.647742,1188.91975 C197.820697,1188.91975 197.126356,1188.29694 197.036782,1187.47476 C195.216051,1173.32359 195.216051,1158.99744 197.036782,1144.84627 C197.036782,1143.94077 197.770837,1143.20671 198.676339,1143.20671 C199.581842,1143.20671 200.315897,1143.94077 200.315897,1144.84627 C202.251054,1158.99121 202.231809,1173.33507 200.258703,1187.47476 Z M190.383229,1155.50339 C192.880695,1166.56087 191.755882,1176.32196 190.287906,1187.58915 C190.168936,1188.33924 189.522207,1188.89148 188.762737,1188.89148 C188.003266,1188.89148 187.356537,1188.33924 187.237567,1187.58915 C185.903044,1176.47448 184.797296,1166.48462 187.142244,1155.50339 C187.142244,1154.60842 187.867763,1153.8829 188.762737,1153.8829 C189.65771,1153.8829 190.383229,1154.60842 190.383229,1155.50339 Z M180.526821,1153.82571 C182.814575,1165.15009 182.071055,1174.7396 180.469627,1186.10211 C180.27898,1187.7798 177.400223,1187.79886 177.247706,1186.10211 C175.798795,1174.91118 175.112468,1165.0357 177.190512,1153.82571 C177.281785,1152.97315 178.001234,1152.32661 178.858666,1152.32661 C179.716099,1152.32661 180.435548,1152.97315 180.526821,1153.82571 Z M170.575089,1159.31632 C172.977231,1166.82778 172.157452,1172.92846 170.479765,1180.63056 C170.391921,1181.42239 169.722678,1182.02149 168.925999,1182.02149 C168.12932,1182.02149 167.460077,1181.42239 167.372232,1180.63056 C165.923321,1173.08097 165.332318,1166.84684 167.23878,1159.31632 C167.330053,1158.46376 168.049502,1157.81722 168.906934,1157.81722 C169.764367,1157.81722 170.483816,1158.46376 170.575089,1159.31632 Z">
                            </path>
                        </svg>
                        <p className="text-[20px] font-bold text-[#fff] my-[16px]">You are not following anyone yet</p>
                    </div>
                    :
                    <ul className="h-[70vh] overflow-y-scroll">
                        {
                            artistList.map((item) => {
                                const {singerName, singerImage}= item;
                                return (
                                    <li key={singerName} className="flex flex-nowrap my-[1rem] items-center">
                                        <div>
                                            <img src={singerImage} className="w-[5rem] rounded-full min-[376px]:w-[6rem]"></img>
                                        </div>
                                        
                                        <div className="pl-[1rem]">
                                            <p className="text-[14px] font-semibold">{singerName}</p>
                                            <div className="flex flex-nowrap text-[#999] items-center mt-[5px]">
                                                <Filled_followers width={'12px'} height={'12px'} /> 
                                                <div className="pl-[4px] text-[13px]">
                                                    {myRandom(20)}k Followers
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
            </div>

            <FooterForMobile />
        </>
        
        
        
        
    )
}