import Image from "next/image";
import Layout from "./layout";
import Head from "next/head";
import Link from "next/link";
import Date from "@/components/date";
import utilStyles from '../styles/utils.module.css';

const siteTitle = "Test title"

async function getData(){

  return {}
}

export default function Home() {

  const data = getData();

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {/* {data.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>          
          ))} */}
        </ul>
      </section>
    </>
  );
}