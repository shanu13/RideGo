import Navbar from "../components/Navbar";

const style = {
    wrapper: `flex-1 w-full h-full`,
    middle: `text-center absolute p-0 m-0 inline-block w-screen h-screen align-middle`,
    heading: `text-4xl font-bold m-12 mt-36`,

}

export default function Confirm() {
    return (
        <div className={style.wrapper}>
            <Navbar />

            <div className={style.middle}>
                <h2 className={style.heading}>Your Ride has been confirmed.</h2>
                <h2 className={style.heading}>Your Driver is on its way.</h2>
            </div>
        </div>
    )
}