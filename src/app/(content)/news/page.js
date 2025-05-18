import NewsList from '@/components/NewsList'; 
import { getAllNews } from '@/lib/news';

export default async function NewsPage() {
  const news = await getAllNews(); //ดึงข้อมูลข่าวทั้งหมดจากฐานข้อมูล
  return (
    <>
      <h1>หน้ารายการข่าว</h1>
      <NewsList news={news} />
    </>
  );
}