import Image from "next/image";
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";

export default function Home() {

  return (
    <div className={utilStyles.container}>
      <Image src="/images/papa.png"
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt="Picture of the author" />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
        </ul>
      </section>

      <footer>
        <Link href="/dashboard">Go To Dashboard</Link>
      </footer>
    </div>
  );
}
