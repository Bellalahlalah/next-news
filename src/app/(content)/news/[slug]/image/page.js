import { notFound } from 'next/navigation';

export default async function ImagePage({ params }) {
  const {slug} = await params;
  const newsItem = await getNewsItem(params.slug); // ฟังก์ชันที่ใช้ดึงข้อมูลข่าวจากฐานข้อมูล

  if (!newsItem) notFound();

  return (
    <div className="fullscreen-image">
      <img
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
      />
    </div>
  );
}