import { reviews } from "../../resource/reviews"
import Review from "./Review"
import { useRef } from 'react'
import Arrow from "./Arrow"

export default function Section5() {

    const reviewsElement = reviews.map((review, idx) => (
        <Review {...review} key={idx} />
    ))

    const container = useRef()

    return (
        <div className="reviews flex flex-col justify-center items-center h-full p-4">
            <h1 className="text-xl lg:text-4xl text-zinc-300 text-center my-auto mt-2 lg:mt-10 h-1/5 flex items-center">REVIEWS</h1>
            <div className="flex flex-row w-full h-4/5 justify-between items-center">
                <Arrow left={true} elemRef={container} color="text-zinc-300"/>
                <div ref={container} className="w-10/12 flex justify-start overflow-x-scroll" style={{ height: "inherit" }}>
                    <div className="flex flex-col max-h-full justify-around flex-wrap gap-8 m-auto items-center" style={{ width: "inherit" }}>
                        {reviewsElement}
                    </div>
                </div>
                <Arrow left={false} elemRef={container} color="text-zinc-300"/>
            </div>
        </div>
    )
}