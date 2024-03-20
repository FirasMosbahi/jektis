import * as React from "react";
import Link from "next/link";

export default function NavbarItem({
  link,
  title,
}: {
  link: string;
  title: string;
}) {
  return (
    <li>
      <Link href={link}>{title}</Link>
    </li>
  );
}
