import { DUMMY_NEWS } from "@/data/dummy-news";
import { notFound } from "next/navigation";

export default function NewsContentPage({ params }) {
    const slug = params.slug 
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug == slug);
    if (!newsItem) {
        notFound(); {/*ถ้าไม่พบข่าวที่ต้องการให้แสดงหน้า 404 โดย notFound เป็นฟังก์ชันของ next.js */}
    }
  return (
    <article className="news-article">
      <header>
        <img
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
        />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}