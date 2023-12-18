"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function link({ href, name, icon }) {
  return (
    <div>
      <Link href={href}>
        <div className="flex gap-2">
          <Icon
            className="mt-1"
            icon={icon}
          />
          <span>{name}</span>
        </div>
      </Link>
    </div>
  );
}
