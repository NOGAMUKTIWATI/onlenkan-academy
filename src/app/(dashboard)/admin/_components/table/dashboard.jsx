import { Icon } from "@iconify/react";

export default function dashboard({ thead, td }) {
  return (
    <div className="p-1 w-full rounded-md">
      <div className="grid bg-white p-5 grid-cols-5 border w-full text-center">
        {thead.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
      <div className="w-full mt-5">
        <div className="w-full space-y-5">
          {td.map((item, i) => (
            <div
              className="bg-white border rounded-md grid p-3 gap-5 grid-cols-5 justify-start text-left"
              key={i}
            >
              <div className="w-full space-y-4">
                <h2 className="text-center mt-7 font-medium text-black">
                  {item.tanggal}
                </h2>
              </div>
              <div className="w-full space-y-2">
                <p>{item.informasi.name}</p>
                <p className="text-primary">{item.informasi.email}</p>
                <p className="text-primary">{item.informasi.nomor}</p>
              </div>
              <div className="w-full flex justify-center text-center mt-8 ">
                <div>
                  <p>{item.harga}</p>
                  <button className="px-5 py-2 text-white bg-detail rounded-md flex gap-2">
                    <Icon icon="ri:information-line" className="mt-1" />
                    <p>Cek Payment</p>
                  </button>
                </div>
              </div>
              <div className="mt-7 text-center">{item.videoTerakhir}</div>
              <div className=" gap-2">
                <div className="flex gap-2 mt-7 max-w-[200px]">
                  <select
                    name=""
                    className="w-full px-5 py-2 bg-gray-100"
                    id=""
                  >
                    {item.status.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <button className="bg-red-500 p-3 rounded-md text-white">
                    <Icon icon="mdi:trash-outline" />
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
