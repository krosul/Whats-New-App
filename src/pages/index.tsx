import Image from 'next/image';
import { MainLayout } from '@/Layouts';
import { Main, SideBar } from '@/Components';
export default function Home() {
  // addDocument();
  return (
    <MainLayout>
      <SideBar />
      <Main />
    </MainLayout>
  );
}
