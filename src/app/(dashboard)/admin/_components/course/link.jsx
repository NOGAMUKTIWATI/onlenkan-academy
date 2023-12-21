"use client";

import Link from "next/link";

export default function link({ href, name }) {
  return (
    <div>
      <Link href={href}>
          <span>{name}</span>
      </Link>
    </div>
  );
}
