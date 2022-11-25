import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import Hero from '../components/Hero'
import { useAddress } from "@thirdweb-dev/react";
import Login from '../components/Login'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'
import toast, {Toaster} from 'react-hot-toast';

interface Props {

}

const Home: NextPage = () => {
  const address = useAddress();
  const welcomeUser = (userName: Props, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    )
  }
 
  useEffect(() => {
    if (!address) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }

      const result = await client.createIfNotExists(userDoc);
      welcomeUser(result.userName);

     
    })()
  }, [address])


if(!address) return <Login/>
  return (
    <div>
    <Toaster position='top-center' reverseOrder={false}/>
    <>
    
    <Header />
    <Hero />
    </>
    </div>
    
  )
}

export default Home
