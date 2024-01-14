import Image from "next/image"
import { ExploreItem } from "../types/app";

type ExploreCardProps = ExploreItem;

const ExploreCard = ({img, distance, location}:ExploreCardProps) => {    
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
     <div className="relative w-16 h-16">
        <Image src={img} alt="explore image" fill />
     </div>
     <div>
        <h2>{distance}</h2>
        <h3 className='text-gray-500'>{location}</h3>
    </div>
    </div>
  )
}

export default ExploreCard;