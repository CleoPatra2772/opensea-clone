import Link from "next/link";
import Image from 'next/image';
import opensea from '../assets/opensea.png';
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'


export const Header = () => {


    return (
        <div className="bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex">
            <Link href='/'>
                <div className="flex items-center cursor-pointer">
                    <Image src={opensea} alt='' height={40} width={40}/>
                    <div className=" ml-[0.8rem] text-white font-semibold text-2xl">
                    OpenSea
                </div>
                </div>

            </Link>

            <div className="flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]">
                <div className="text-[#8a939b] mx-3 font-bold text-lg">
                    <AiOutlineSearch/>
                </div>
                <input className="h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]" 
                placeholder="Search items, collections, and accounts"/>
            </div>

            <div className="flex items-center justify-end">
                <Link href='/collections/0x4c39a366cD1AF76CB98bDD969a7343306348dbEa'>
                <div className="text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer"> Collections </div>
                </Link>
                <Link href='/stats'>
                <div className="text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer"> Stats </div>
                </Link>
                <Link href='/resources'>
                <div className="text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer"> Resources </div>
                </Link>
                <Link href='/create'>
                <div className="text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer"> Create </div>
                </Link>

                <div className="text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer">
                    <CgProfile />
                </div>

                <div className='text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer'>
                    <MdOutlineAccountBalanceWallet />
                </div>


            </div>
                

        </div>
    )
}