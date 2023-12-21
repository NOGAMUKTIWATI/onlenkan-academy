import React from "react";

export default function instructor({ thead, td }) {
  return (
    <div className="instructor">
      <div className="thead grid grid-cols-5">
        {thead.map((item, index) => {
          return (
            <div key={index} className="text-left">
              <h2>{item}</h2>
            </div>
          );
        })}
      </div>
      <div className="tbody ">
        {td.map((item,index)=>{
          return (
            <div key={index} className="grid grid-cols-5 bg-white">
              <div  className="text-left">
                <img src={item.avatar} alt="" />
              </div>
                <div className="profile text-left">
                <h2 className="font-bold text-lg text-black">{item.profile.nama}</h2>
                <h2 className="font-medium text-sm text-primary">{item.profile.email}</h2>                  
                <h2 className="font-medium text-ss text-primary">{item.profile.nomor}</h2>                  
                </div>
                <div className="asal text-left">
                <h2 className="font-bold text-lg text-black">{item.profile.asal}</h2>
                <h2 className="font-medium text-sm text-primary">{item.profile.email}</h2>                  
                <h2 className="font-medium text-ss text-primary">{item.profile.nomor}</h2>                  
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
