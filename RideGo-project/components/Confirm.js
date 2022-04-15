import RideSelector from './RideSelector'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { UberContext } from '../context/uberContext'
import { ethers } from 'ethers'

const style = {
  wrapper: `flex-1 h-full flex flex-col justify-between`,
  rideSelectorContainer: `h-full flex flex-col overflow-scroll`,
  confirmButtonContainer: ` border-t-2 cursor-pointer z-10`,
  confirmButton: `bg-black text-white m-4 py-4 text-center text-xl`,
}

const Confirm = () => {

  const router = useRouter()

  const {
    currentAccount,
    pickup,
    dropoff,
    price,
    selectedRide,
    pickupCoordinates,
    dropoffCoordinates,
    metamask,
  } = useContext(UberContext)

  const storeTripDetails = async (pickup, dropoff) => {
    
    try {
     
console.log(price)
      await metamask.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: '0x59DF53029502707E9B6D63C885e12FF35597d561',
            gas: '21000', // 520000 Gwei
            value: ethers.utils.parseEther(price)._hex,
          },
        ],
      })

      const response =  await fetch('http://localhost:5000/saveTrip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pickupLocation: pickup,
          dropoffLocation: dropoff,
          userWalletAddress: currentAccount,
          price: price,
          selectedRide: selectedRide.service,
        }),
      })
      const data = await response.json();
      console.log('data',data.message);

      router.push('/confirm')

    } catch (error) {
      console.error(error)
      console.log('error')
    // console.log(ethers.utils.parseEther(price)._hex)
    }
  }

  return (
    <div className={style.wrapper}>
      <div className={style.rideSelectorContainer}>
        {pickupCoordinates && dropoffCoordinates && <RideSelector />}
      </div>
      <div className={style.confirmButtonContainer}>
        <div className={style.confirmButtonContainer}>
          <div
            className={style.confirmButton}
            onClick={() => storeTripDetails(pickup, dropoff)}
          >
            Confirm {selectedRide.service || 'Mini'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
