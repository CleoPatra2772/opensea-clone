import { useMetamask, useAddress } from "@thirdweb-dev/react";

const Login = () => {

    const connectMetaMask = useMetamask();

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42]">
            <button className="bg-blue-500 hover:bg-blue-700 p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-white" onClick={connectMetaMask}>
                Connect Wallet
            </button>
            <p className="text-sm pt-10 text-white">You need Chrome to be able to run this app.</p>
        </div>
    );
}

export default Login;