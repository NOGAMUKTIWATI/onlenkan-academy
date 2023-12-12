import Link from "next/link"
import { Icon } from "@iconify/react";

export default function link({href, name, icon}) {
  return (
    <div>
      <Link href={href}>
        <div className="flex gap-2">
          <Icon icon={icon} />
          <span>
            {name}
          </span>

        </div>
      </Link>
    </div>
  );
}
