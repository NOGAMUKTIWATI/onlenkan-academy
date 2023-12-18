"use client";
export default function card({
  image,
  badge,
  category,
  title,
  progress,
  description,
}) {
  const color = badge.toLowerCase() === "aktif" ? "bg-green-500" : "bg-red-500";

  return (
    <div className="card border flex flex-col transform translate-y-0 hover:-translate-y-2 transition-all  h-auto rounded-md bg-white">
      <div className="image-cover relative">
        <span
          className={`${color} px-4 py-1 absolute top-5 right-5 rounded text-white font-bold`}
        >
          {badge}
        </span>
        <img
          src={image}
          alt="image card"
          className="w-full rounded-tr-md rounded-tl-md"
        />
      </div>
      <div className="p-5 space-y-3 ">
        <div className="category ">
          <div className="text-sm text-primary text-left font-bold">
            {category}
          </div>
        </div>

        <div className="card-title">
          <div className="font-bold text-lg text-left tracking-tighter">
            {title}
          </div>
        </div>
        <div className="flex gap-5 card-progress text-left w-full">
          <p className="max-w-lg text-sm text-gray-500">{progress}</p>
          <p className="max-w-lg text-sm text-gray-500 font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
