/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/link-passhref */
import Image from 'next/image'
import avatar from '../temp/avatar.jpg'
import Link from 'next/link'
import { BsPerson } from 'react-icons/bs'
import { useContext } from 'react'
import { UberContext } from '../context/uberContext'

const style = {
  wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
  leftMenu: `flex gap-3`,
  logo: `text-3xl text-white flex cursor-pointer mr-16`,
  menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
  logout: `ml-10`
}

const Navbar = () => {
  const { currentAccount, connectWallet, currentUser } = useContext(UberContext)
  const Logout = async() =>{
    console.log('logout')
    await window.ethereum.disconnect()  
  }
  

  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <Link href = '/'><div className={style.logo}>RideGo DApp</div></Link>
        <Link href = '/'><div className={style.menuItem}>Ride</div></Link>
        <Link href = '/mytrips'><div className={style.menuItem}>{currentAccount? 'myTrips' : '' }</div></Link>
        
        <Link href = '/help'><div className={style.menuItem}>Help</div></Link>
      </div>
      <div className={style.rightMenu}>
        <div className={style.menuItem}>{currentUser.name}</div>
        <div className={style.userImageContainer}>
          <Image
            className={style.userImage}
            src={avatar}
            width={40}
            height={40}
          />
        </div>
        {currentAccount ? (
          <div>
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
            {/* <button onClick={Logout}  className={style.logout}>Logout</button> */}
          </div>
        ) : (
          <div className={style.loginButton} onClick={() => connectWallet()}>
            <BsPerson />
            <span className={style.loginText}>Log in</span>
          </div>
        )}
      </div>
      
      
    </div>
  )
}

export default Navbar
