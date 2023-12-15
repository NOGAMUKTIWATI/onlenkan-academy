export default function informasi({ thead, td }) {
  return (
    <div className="p-5 w-full rounded-md">
      <div className="grid bg-white p-5 grid-cols-3 w-full">
        {thead.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
      <div className="w-full mt-5">
        <div className="w-full space-y-5">
          {td.map((item, index) => (
            <div
              className="bg-white rounded-md grid p-4 gap-5 grid-cols-3"
              key={index}
            >
              <h2>{item.no}</h2>
              <h2>{item.tanggal}</h2>
              <div className="space-y-4">
                <h2 className="uppercase font-bold text-black">
                  {item.informasi.title}
                </h2>
                <h2 className="font-bold text-2xl capitalize text-gray-500">
                  {item.informasi.subtitle}
                </h2>
                <p className="text-gray-500">{item.informasi.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
