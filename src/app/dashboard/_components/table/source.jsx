export default function source({ thead, td }) {
  return (
    <div className="p-5 w-full rounded-md">
      <div className="grid bg-white p-5 grid-cols-3 w-full text-left">
        {thead.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
      <div className="w-full mt-5">
        <div className="w-full space-y-5">
          {td.map((item, i) => (
            <div
              className="bg-white rounded-md grid p-3 gap-5 grid-cols-4 justify-start text-left"
              key={i}
            >
              <img src={item.image} alt={item.subtitle} />
              <div className="space-y-4">
                <h2 className="uppercase font-medium text-black">
                  {item.subtitle}
                </h2>
                <h2 className="font-bold text-lg capitalize text-gray-500">
                  {item.title}
                </h2>
              </div>
              <div className="flex justify-center w-full text-center mt-8 ">
                <p>{item.harga}</p>
              </div>
              <div className="flex gap-4 text-center w-full justify-center mt-4">
                <div>
                  <button className="bg-detail text-white px-5 py-2 rounded-md">
                    Detail
                  </button>
                </div>
                <div>
                  <button className="bg-download px-5 py-2 rounded-md text-white">
                    Download
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
