export default function card({ image, avatar, category, title, description, name, tanggal }) {
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
        <div className="card-description">
            <p className="max-w-lg text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex gap-5 card-profile w-full">
          <img 
            src={avatar}
            alt="avatar"
            className="rounded-full w-12" />
          <div className="profile">
              <h2 className="max-w-lg text-sm text-secondary font-semibold">{name}</h2>
              <p className="max-w-lg text-sm text-gray-500 font-light">{tanggal}</p>
          </div>
        </div>
      </div>

    </div>
  );
}
