import { Header } from '@/components/frontend/layout/Header';
import { Footer } from '@/components/frontend/layout/Footer';

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}