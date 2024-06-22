'use client';
import { ColorConstant } from '@/constants/colorConstants';
import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('@/components/sidebar'), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex w-screen h-screen"
      style={{
        backgroundColor: ColorConstant.White,
      }}
    >
      <Sidebar />
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}
