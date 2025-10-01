import Comments from "@/components/modules/Comment/Comments";
import React from "react";

function Testimonials({ data }) {
  return (
    <div className="py-10 flex flex-col justify-center items-center">
      <div className="w-1 bg-amber-800 h-20"></div>
      <p className="text-amber-700 text-lg">Testimonial</p>
      <h1 className="text-4xl font-bold">Our Clients Say</h1>
      <div className="my-10 space-y-7">
        {data.slice(0, 4).map((item) => (
          <Comments item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
