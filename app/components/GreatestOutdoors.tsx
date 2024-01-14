import Image from "next/image";
import Link from "next/link";

type GreatestOutdoorsProps = {
    img: string;
    title: string;
    description: string;
    linkText: string;
}
const GreatestOutdoors = ({img, title, description, linkText}: GreatestOutdoorsProps) => {
  return (
    <div className="container relative mt-9">
        <div className="relative h-96 min-w-[300px">
            <Image
              src={img}
              fill
              className="rounded-2xl -z-10 object-cover"
              alt="GreatestOutdoors-img"
            />
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-64">{title}</h3>
                <p>{description}</p>
                <Link href="/" className="text-sm px-4 py-2 block w-fit rounded-lg mt-5 text-white bg-gray-400">
                    {linkText}
                </Link>
            </div>
        </div>
    </div>
  )
}

export default GreatestOutdoors;