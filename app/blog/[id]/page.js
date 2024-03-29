import Head from "next/head";
import Date from "@/components/date";
import { getPostData } from "@/lib/posts";
import utilStyles from '../../../styles/utils.module.css';
import Link from "next/link";

export default async function Page({ params }) {
    const postData = await getPostData(params.id);

    return (
      <div>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        <footer>
            <Link href="/">Go Home</Link>
        </footer>
      </div>
    );
  }