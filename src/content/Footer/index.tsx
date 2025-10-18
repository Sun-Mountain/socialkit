import Link from "next/link";
export const FooterLinks = () => {
  return (
    <ul>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/faq">FAQ</Link>
      </li>
      <li>
        <Link href="/tos">Terms of Service</Link>
      </li>
    </ul>
  )
}