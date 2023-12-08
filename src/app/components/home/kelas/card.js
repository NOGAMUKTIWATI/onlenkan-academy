export default function card({ image, category, title, price, discount }) {
  return (
    <div className="card border transform translate-y-0 hover:-translate-y-2 transition-all  h-auto rounded-md bg-white space-y-3">
      <div className="image-cover">
        <img
          src={image}
          alt="image card"
          className="w-full rounded-tr-md rounded-tl-md"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="category ">
          <div className="text-sm text-primary font-bold">{category}</div>
        </div>
        <div className="card-title">
          <div className="font-bold text-lg tracking-tighter">{title}</div>
        </div>
        <div className="flex items-center justify-start gap-3">
          <div className="card-price">
            <p className="max-w-lg text-sm text-gray-500">{price}</p>
          </div>
          <div className="card-discount">
            <strike className="text-red-500">{discount}</strike>
          </div>
        </div>
      </div>
    </div>
  );
}
