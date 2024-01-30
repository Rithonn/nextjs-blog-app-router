import Image from "next/image";
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";
import Date from "@/components/date";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {

  const data = getSortedPostsData();

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
        {data.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/blog/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>          
          ))}
        </ul>
      </section>

      <footer>
        <Link href="/blog/dashboard">Go To Dashboard</Link>
      </footer>
    </div>
  );
}