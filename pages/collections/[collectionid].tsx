import { useRouter } from "next/router";
import {Header} from '../../components/Header';
import Image from "next/image";
import banner from '../../assets/cats.png';
import profile from '../../assets/profile.jpeg';
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'



const Collection = () => {
    const router = useRouter();
    console.log(router.query);
    console.log(router.query.collectionid);

    return(
        <div className="overflow-hidden">
            <Header />
            <div className="h-[40vh] w-screen overflow-hidden flex justify-center items-center ">
                <Image className='w-full object-cover' src={banner} alt='banner' />
            </div>
            <div className="w-screen px-4">
                <div className="w-full flex justify-center text-white">
                    <Image className="w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]" src={profile} alt='profile-image'/>
                </div>
                <div className="w-full flex justify-end text-white">
                    <div className="flex text-3xl mb-[-2rem]">
                        <div className="w-44">
                            <div className="flex container justify-between text-[1.4rem] border-2 rounded-lg px-2">
                                 <div className="my-2">
                                    <CgWebsite />
                                </div>
                                <div className="border-r-2" />
                                    <div className="my-2">
                                    <AiOutlineInstagram />
                                    </div>
                                    
                                    <div className="border-r-2" />
                                    <div className="my-2"><AiOutlineTwitter />
                                    </div>
                                    
                                <div className="border-r-2" />
                                    <div className="my-2"><HiDotsVertical />
                                    </div>
                                    
                                
                        </div>
                </div>
                            

            </div>
        </div>
                                <div className="w-full flex justify-center text-white">
                                    <div className="text-5xl font-bold mb-4">Cool Cats Football Club</div>

                                </div>

                                <div className="w-full flex justify-center text-white">
                                    <div className="text-lg mb-4">Created by CCFC_deployer</div>
                                </div>

                                <div className="w-full flex justify-center text-white">
                                    <div className="w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4">
                                        <div className="w-1/4">
                                            <div className="text-3xl font-bold w-full flex items-center jusfity-center">6/1000</div>
                                            <div className="text-lg w-full text-center mt-1">items</div>
                                        </div>

                                        <div className="w-1/4">
                                            <div className="text-3xl font-bold w-full flex items-center justify-center">Cleo</div>

                                            
                                            <div className="text-lg w-full text-center mt-1">Owners</div>
                                            
                                        </div>

                                        <div className="w-1/4">
                                             <div className="text-3xl font-bold w-full flex items-center justify-center">
                                                {/* <img
                                                    src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                                                     alt="eth"
                                                    className="h-6 mr-2"
                                                        /> */}
                                                        0.037ETH
                                                    </div>
                                                <div className="text-lg w-full text-center mt-1">floor price</div>
                                            </div>

                                            <div className="w-1/4">
                                                <div className="text-3xl font-bold w-full flex items-center justify-center">
                                                            196ETH
                                                </div>
                                                <div className="text-lg w-full text-center mt-1">Volume traded</div>
                                            </div>
                                    </div>
                                </div>
                                <div className="w-full flex justify-center text-white">
                                    <div className="text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4">
                                    Cool Cats FC ('Football Club') is a collection of 3,000 NFTs created by Cool Cats, Animoca Brands, and OneFootball Labs. Earn rewards and NFT upgrades for holding the best teams as they advance through the world's largest football tournament.
                                    </div>
                                </div>
                                <div className="flex flex-wrap">
                                    
                                </div>
    </div>
    </div>
    )
}

export default Collection;