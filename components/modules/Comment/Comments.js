import React from "react";

function Comments({ item}) {

  return (
    <div>
      <div className="flex space-x-3">
        <img src={item.img} />
        <div className="flex flex-col justify-center">
          <p className="font-bold">{item.name}</p>
          <p>profession</p>
        </div>
      </div>
      <div>
        <p className="max-sm:text-[13px]">{item.desc}</p>
      </div>
    </div>
  );
}

export default Comments;
