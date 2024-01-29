import Image from "next/image";
import Layout from "./layout";
import Head from "next/head";
import Link from "next/link";
import Date from "@/components/date";
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from "@/lib/posts";

const siteTitle = "Test title"

async function getData(){

  return getSortedPostsData();
}

export default function Home() {

  const data = getData();

  return (
    <>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
        </ul>
      </section>
    </>
  );
}