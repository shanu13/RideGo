import { useRouter } from "next/router";

import Navbar from "../components/Navbar";
// import style from "../styles/globals.css"

const style = {
    wrapper: `flex-1 w-full h-full`,
    middle: `text-center absolute p-0 m-0 inline-block w-screen h-screen align-middle`,
    heading: `text-4xl font-bold m-12 mt-36`,
    ques: 'text-2xl font-bold mt-6'
}


export default function Help() {
    const router = useRouter();

    


    return (
        <>
            <div className={style.wrapper}>
                <Navbar />
                </div>
            <div className={style.middle}>
                <h2  className={style.heading}>Frequenty Asked Questions</h2>

                <h3 className={style.ques}>How long before the ride comes for pickup?</h3>
                <p className={style.ans}>The time taken by the ride varies as how far it is from you.</p>

                <h3 className={style.ques}>What do I need to make a payment?</h3>
                <p className={style.ans}>The user must have a metamask account as the form of payment gateway.</p>

                <h3 className={style.ques}>When the services will be available in our area?</h3>
                <p className={style.ans}>Please mail us your locality and we will try our best to include it in our service area.</p>
            </div>
        </>

    )
}