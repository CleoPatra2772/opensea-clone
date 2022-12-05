import { useRouter } from "next/router";
import {Header} from '../../components/Header';
import Image from "next/image";
import banner from '../../assets/cats.png';
import profile from '../../assets/profile.jpeg';
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'
import NFTCard from "../../components/NFTCard";



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
                                <div className="flex flex-wrap ">
                                    <NFTCard 
                                    image="https://i.seadn.io/gae/p4ND_bcTOq2Hg2E4RHheGAU-OnJoqfuS8LN6P8OixiqRDbEXcovcO8vbrBRhXgngcACcKLgEzZBDtgPzJntVC_C3A-InicFhWCfnCA?auto=format&w=1000"
                                    name="Brazil"
                                    listing= "0.05 ETH"
                                    
                                    />
                                    <NFTCard 
                                    image="https://i.seadn.io/gae/xPpcEZEjIgNS0X3ihoVSRepD7-gg1YC7jPv3G9dzKUoBHIVeqf-eruQpM1xJDkOCTq84hY1pj-tV0V6N8OZfVOL_zszwRsOE4hUR?auto=format&w=1000"
                                    name="Germany"
                                    listing= "0.029 ETH"
                                    
                                    />
                                    <NFTCard 
                                    image="https://i.seadn.io/gae/039EZZjTY2UJRpSaW1lhu0cVwUJgKv3RiNum3TH0DnD4juVAe-pF1FPXXu0zXWINSS04inLvsRqMVPNvGg0ORhlGxofftzTnvHvcaA?auto=format&w=1000"
                                    name="Portugal"
                                    listing= "10 ETH"
                                    
                                    />
                                    <NFTCard 
                                    image="https://i.seadn.io/gae/LE7Qf1CZMj77L-JlqN2WaTFjOwOMChej-cltxZOX1ZcPq_ySH54s3fvOrxhMeb-3XsYJOyCpeeA-Y7JRcQMFV5kC7pJRrk_N3u-5uA?auto=format&w=1000"
                                    name="Spain"
                                    listing= "2.5 ETH"
                                    
                                    />
                                    <NFTCard 
                                    image="https://i.seadn.io/gae/oUEiR_jFsVZh4UE1fFJtqM6MfpibPxKau9_q_kNrHjFitSIgH0m5tx9xHdfS8pG2CwreV-jdwKpeLQxyd4mln1VlxIcIZ3vjiuMr8Q?auto=format&w=1000"
                                    name="Brazil"
                                    listing= "2.0 ETH"
                                    
                                    />
                                    <NFTCard 
                                    image="https://i.seadn.io/gae/-m6psJvlZ2V4OYl2LCgd4AZYVbdvPuvCZ15ZhuPuopk_lv1B5-yZKoUvdeRHd4GX7IuN4MzC5nBgck5dBRuathV9FG6LCSeeOFpmdoE?auto=format&w=1000"
                                    name="Austrailia"
                                    listing= "1.5 ETH"
                                    
                                    /><NFTCard 
                                    image="https://i.seadn.io/gae/kZv_Jaho3w8OsV6Qz8pOHoYQMiIkDssfBmFL3sIajHKUBhDE6dcE4u-lox2s_oor1z05v6Y4bvleO-jHTY7xR2hPwc3zVrmb2Z1IRg?auto=format&w=1000"
                                    name="Costa Rica"
                                    listing= "1.0256 ETH"
                                    
                                    /><NFTCard 
                                    image="https://i.seadn.io/gae/7G6VBnWxtzNKM1KBLR9exoIdhrALhZMkH3x1zL0LOp8qRQcFTvuzwL12B48a17VaQCtsnphyF-ZjW7HnLcvXuuZQNIm6Kp8Upl4g2NM?auto=format&w=1000"
                                    name="Saudi Arabia"
                                    listing= "1.00 ETH"
                                    
                                    />
                                    <NFTCard 
                                    image="https://i.seadn.io/gae/jy8Xo-Z2cB_89kLtU_igzRtvwPfsxjHKer2xmVhTHklu9AFbDpa7UvkxKKPhylrpZIH7SqUaMkwJdhFqg-4wUmTwiL092ScH5DdsZQ?auto=format&w=1000"
                                    name="Ghana"
                                    listing= "1.00 ETH"
                                    
                                    />
                                    <NFTCard 
                                    image="https://i.seadn.io/gae/QNvbm6FhWE3xgHRpdLB6QRVy0cABhfpUP7s3akWYWTFiXC2zsj32gBksMHY_im_qoX701wtBww9xzxpj7VS-jMK4dUEPHsu0MJWs?auto=format&w=1000"
                                    name="Croatia"
                                    listing= "0.77 ETH"
                                    
                                    />
                                    
                                </div>
    </div>
    </div>
    )
}

export default Collection;