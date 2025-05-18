import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news"; // ฟังก์ชันที่ใช้ดึงข้อมูลข่าวจากฐานข้อมูล

export default async function NewsContentPage({ params }) {
    const { slug } = await params; {/* next.js version ใหม่จะให้การทำงานของ param (objects) เป็นแบบ asyncronuous */}
    const newsItem = await getNewsItem(slug);
    if (!newsItem) {
        notFound(); // ถ้าไม่พบข่าวที่มี slug ตรงกัน ให้แสดงหน้า 404
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