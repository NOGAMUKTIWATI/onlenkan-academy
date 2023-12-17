import { Icon } from "@iconify/react";
export default function source({ thead, td }) {
  return (
    <div className="p-5 w-full rounded-md">
      <div className="grid bg-white p-5 grid-cols-5 w-full text-left">
        {thead.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
      <div className="w-full mt-5">
        <div className="w-full space-y-5">
          {td.map((item, index) => (
            <div
              className="bg-white rounded-md grid p-3 gap-1 grid-cols-5 justify-start text-left"
              key={index}
            >
              <img
                src={item.image}
                alt={item.subtitle}
                className="w-[200px] object-contain"
              />
              <div className="mt-7">
                <h2 className="font-bold text-lg capitalize text-gray-500">
                  {item.title}
                </h2>
                <h2 className="captilize font-medium text-black">
                  {item.subtitle}
                </h2>
              </div>
              <div className=" w-full text-left mt-8">
                <p>{item.harga}</p>
              </div>

              <div className="font-bold text-yellow-500 w-full text-left mt-8 ">
                <p>{item.status}</p>
              </div>
              <div className="flex gap-4 text-center w-full justify-center mt-5">
                <div className="w-full">
                  <button className="bg-detail text-white text-xs px-5 py-2 rounded-md flex gap-2">
                    <Icon
                      icon="basil:document-solid"
                      className="text-lg font-bold"
                    />
                    <span>Detail E-Course</span>
                  </button>
                </div>
                <div className="w-full">
                  <button className="bg-hijau px-5 text-xs py-2 rounded-md text-white flex gap-2">
                    <Icon
                      icon="ic:outline-whatsapp"
                      className="text-lg font-bold"
                    />
                    <span>Tanya Admin</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
