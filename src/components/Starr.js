import { StarHalf,Star } from "lucide-react";
const Starr = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    debugger;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <Star className=" text-yellow-400" />
        ) : stars >= number ? (
          <StarHalf className=" text-yellow-400" />
        ) : (
          <Star className=" text-yellow-400" />
        )}
      </span>
    );
  });

  return (
    <div>
      <div className="flex gap-1">
        {ratingStar}
        <p>({reviews} customer reviews)</p>
      </div>
    </div>
  );
};

export default Starr;