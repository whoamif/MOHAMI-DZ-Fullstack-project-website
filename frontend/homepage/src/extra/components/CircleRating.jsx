import { useState } from "react";
const CircleRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  return (
    <div className="flex items-center ml-0 mt-2">
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          onClick={() => handleRatingClick(value)}
          className={`h-3 w-3 rounded-full gap-2 mx-2 ${
            value <= rating ? 'bg-orange-500' : 'bg-slate-300'
          }`}
        ></button>
      ))}
      
    </div>
  );
};

export default CircleRating;