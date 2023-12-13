function Card(data) {
  return (
    <div className="cursor-pointer w-56 h-60 rounded-lg shadow-lg shadow-myGray/40 hover:border">
      <figure className="relative w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-myGray/40 rounded-lg font-semibold text-black m-2 px-2">
          {data.data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={data.data.image}
          alt="img"
        />
        <button className="absolute top-2 right-2 bg-myGray w-6 h-6 rounded-full text-black font-bold text-3xl/none flex justify-center items-center pb-[7px] hover:animate-spin-mine">
          +
        </button>
      </figure>
      <p className="flex justify-between w-full h-1/5 items-center p-3 pb-4">
        <span className="text-sm font-light truncate">{data.data.title}</span>
        <span className="text-sm font-medium">${data.data.price}</span>
      </p>
    </div>
  );
}

export { Card };

// className="absolute top-2 right-2 bg-myGray w-6 h-6 rounded-full text-black font-bold text-3xl flex justify-center"
