import React from 'react'
import Cardinfo from "./cardinfo";


export default function page() {
  return (
    <div className="p-5 text-center">
      <div className="informasi">
        <h2 className="font-bold pl-3 text-start text-2xl py-5">
          Informasi Terkini
        </h2>
        <Cardinfo/>
      </div>
    </div>
  );
}
