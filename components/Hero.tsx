
const Hero = () => {
    return (
        <div className="relative">
            <div className="before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur">
                <div className="flex h-screen relative justify-center flex-wrap items-center">
                    <div className="w-1/2">
                        <div className="text-white relative text-[46px] font-semibold ">Discover, collect, and sell extraordinary NFTs</div>
                    
                        <div className="text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]">
                        OpenSea is the world&apos;s first and largets NFT marketplace
                        </div>
                        <div className="flex">
                            <button className="relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer">explore</button>
                            <button className="relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c5050c] cursor-pointer">create</button>
                        </div>
                </div>
                <div className="rouded-[3rem]">
                        <img
                        className="rounded-t-lg"
                        src="https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s550"
                        alt=""
                        />
                        <div className="h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white">
                        <img
                            className="h-[2.25rem] rounded-full"
                            src="https://i.seadn.io/gae/AEqEnzEJbGS1S9HtgHUbkSTXFPbrhG2MM8Zr0AW3DPlHjZMhM9zvYO3WRhYrLybVYfpLmzsXUvFHyu2j8Io3py-s8uK6ti67jUPYbw?auto=format&w=1000"
                            alt=""
              />
                       
                        <div className="flex flex-col justify-center ml-4">
                         <div className="">Jolly</div>
                        <a
                             className="text-[#1868b7]"
                            href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                            >hola-kanola </a>
                        </div>
                        </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Hero;
