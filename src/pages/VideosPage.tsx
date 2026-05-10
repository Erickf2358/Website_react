import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { categories } from '../data/data';
import CategorySection from '../components/CategorySection';
import Header from '../components/Header';
import NavBar from '../components/Navbar';

export default function VideosPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="min-h-screen text-black">
      <Header />
      <NavBar />

      {/* Course catalogue */}
      <main className="max-w-10xl mx-auto px-80 py-30 text-black bg-gray-300">
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </main>
    </div>
  );
}
