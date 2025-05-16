import './globals.css';
import MainHeader from '@/components/MainHeader';

export const metadata = {
  title: 'Lab02-Next.js Page Routing & Rendering',
  description: 'Learn how to use various route methods.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="th">
      <body>
        <div id="page">
          <MainHeader />  {/*mainheader จะติดอยู่ทุกหน้าของเว็บ*/}
          {children}
        </div>
      </body>
    </html>
  )
}
