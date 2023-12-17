import React from 'react'
import Card from '../_components/overview/card'

export default function page() {
    const items = [
      {
        id: 1,
        icon: "material-symbols-light:nest-display-outline",
        title: "2 Kelas",
        description: "Kelas yang kamu miliki.",
      },
      {
        id: 2,
        icon: "material-symbols-light:frame-source",
        title: "6 Source",
        description: "Source code yang dimiliki.",
      },
      {
        id: 3,
        icon: "material-symbols:event",
        title: "0 Event",
        description: "Event yang kamu ikuti",
      },
      {
        id: 4,
        icon: "lets-icons:file-dock-fill",
        title: "0 Sertifikat",
        description: "Fitur ini akan segera aktif",
      },
    ];
    
  return (
    <div>
   
      <div className="overview grid grid-cols-1 lg:grid-cols-4 gap-5 py-2">
        {items.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
