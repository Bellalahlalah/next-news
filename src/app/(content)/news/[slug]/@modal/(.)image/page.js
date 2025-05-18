'use client';

import ModalBackdrop from '@/components/modal-backdrop';
import { getNewsItem } from '@/lib/news'; // ฟังก์ชันที่ใช้ดึงข้อมูลข่าวจากฐานข้อมูล
import { notFound } from 'next/navigation';
import { use } from 'react';    

export default async function ImagePage({ params }) {
  const {slug} = use(params);
  const newsItem = await getNewsItem(slug); // ฟังก์ชันที่ใช้ดึงข้อมูลข่าวจากฐานข้อมูล

  if (!newsItem) notFound();

  return (
    <>
      <ModalBackdrop/>
        <dialog open className="modal" onClick={(e) => e.stopPropagation()}>
          <img
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
          />
        </dialog>
      </>
  );
}