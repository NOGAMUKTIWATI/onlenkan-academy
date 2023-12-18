import { Icon } from "@iconify/react";

export default function card({ icon, title, description }) {
  return (
    <div className="card border flex p-5 text-left flex-col transform translate-y-0 hover:-translate-y-2 transition-all  h-auto rounded-md bg-white space-y-3">
      <div className="image-cover">
        <button className="p-2 font-semibold text-2xl text-white rounded-full bg-primary">
          <Icon icon={icon} />
        </button>
      </div>
      <div className="card-content">
        <div className="card-title">
          <div className="font-bold text-lg tracking-tighter">{title}</div>
        </div>
        <div className="card-description">
          <p className="max-w-lg text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}
