import Link from "next/link";
import { DUMMY_NEWS } from "@/data/dummy-news";

export default function NewsPage() {
    return (
            <>    
                <h1>ข่าวล่าสุด</h1>
                <ul className="news-list">
                    {DUMMY_NEWS.map((newsItem) => (
                        <li key={newsItem.id}>
                            <Link href={`/news/${newsItem.slug}`}>
                                <h2>{newsItem.title}</h2>
                                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                                <span>{newsItem.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            
            </>
        );
    }