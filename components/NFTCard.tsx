type props ={

name: string;
image: string;
listing: string;

}


const NFTCard = ( nftItem : props) => {
    return(
        <div className="bg-[#303339] flex-auto w-[14rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer">
            <div className="h-2/3 w-full overflow-hidden flex justify-center items-center">
                <img src={nftItem.image} alt='image of nft'
                className=" h-60 pt-5" />
            </div>
                <div className="p-3">
                    <div className="flex justify-between text-[#e4e8eb] drop-shadow-xl">
                        <div className="flex-0.6 flex-wrap">
                <div className="font-bold text-lg mt-2">{nftItem.name}</div>
                </div>
                    <div className='flex-0.4 text-right'>
                    <div className="font-semibold text-sm text-xl font-bold mt-2">{nftItem.listing}</div>
                    </div>
                </div>
                </div>
            
            
            
            
        </div>
    )
}

export default NFTCard;
