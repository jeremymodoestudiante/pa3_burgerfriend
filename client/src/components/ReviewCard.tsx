import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

interface ReviewCardI {
    text: string;
    img: string;
    cliente: string;
}

export const ReviewCard = ({text, img, cliente}: ReviewCardI) => {
    return (
        <div className="bg-card shadow-reviewcard border-2 border-text rounded-2xl">
            <div className="p-8 flex flex-col gap-4">
            <div className="text-text text-lg flex flex-row gap-1">
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </div>
            <p className="font-secondary text-[1.35rem]/8 text-text">
                "{text}"
            </p>
            <div className="flex flex-row items-center gap-3">
                <figure className="rounded-full w-15 overflow-hidden border-2 border-text">
                    <img src={img}/>
                </figure>
                <p className="font-primary text-lg text-text">
                    {cliente}
                </p>
            </div>
            </div>
        </div>
    )
}