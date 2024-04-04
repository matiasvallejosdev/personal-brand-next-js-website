import Link from "next/link";

export default function Badge({ text, link }) {
    const linkHref = link ? link : '';
    return (
      <span className="text-base border border-zinc-700 rounded-md bg-inherit w-auto px-2 hover:bg-zinc-800 transition duration-300">
        <Link href={linkHref}>{text}</Link>
      </span>
    );
  }