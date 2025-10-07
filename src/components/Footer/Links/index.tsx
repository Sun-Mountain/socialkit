import Link from "next/link";

export const MainFooterLinks = () => {
  return (
    <ul>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/faq">Frequently Asked Questions</Link>
      </li>
      <li>
        <Link href="/tos">Terms of Service</Link>
      </li>
    </ul>
  )
}