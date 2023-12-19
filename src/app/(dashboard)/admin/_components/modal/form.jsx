import { Icon } from "@iconify/react";

export default function form({ isVisible, onClose, children }) {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="bg-black/50 fixed inset-0 top-0 w-full h-screen backdrop-blur-sm overflow-y-auto"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="modal bg-white p-5 mx-auto max-w-7xl rounded-md mt-[3vh]">
        <button
          onClick={onClose}
          className="float-right mt-0"
        >
          <Icon icon="iconamoon:sign-times-bold" />
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
