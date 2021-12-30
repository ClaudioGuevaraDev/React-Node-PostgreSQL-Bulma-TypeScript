import Navbar from "../Navbar/Navbar"
import ReviewCard from "./ReviewCard"

const ReviewList = () => {
    return (
        <>
            <Navbar/>
            <div className="container p-5">
                <div className="columns is-multiline is-variable is-2-mobile is-2-tablet is-2-desktop is-2-widescreen is-2-fullhd">
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                </div>
            </div>
        </>
    )
}

export default ReviewList