import { DUMMY_NEWS } from "@/data/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function NewsContentPage({ params }) {
    const { slug } = await params; {/* next.js version ใหม่จะให้การทำงานของ param (objects) เป็นแบบ asyncronuous */}
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug == slug);
    if (!newsItem) {
        notFound(); {/*ถ้าไม่พบข่าวที่ต้องการให้แสดงหน้า 404 โดย notFound เป็นฟังก์ชันของ next.js */}
    }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}