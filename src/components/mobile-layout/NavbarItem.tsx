import * as React from "react";
import Link from "next/link";

export default function NavbarItem({
  link,
  title,
  icon,
}: {
  link: string;
  title: string;
  icon: React.ReactElement;
}) {
  return (
    <li>
      <Link
        href={link}
        className="flex items-center p-2 text-gray-900 rounded-lg"
      >
        {icon}
        <span className="ms-3">{title}</span>
      </Link>
    </li>
  );
}
