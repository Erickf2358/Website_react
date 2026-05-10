import type { Category } from '../data/data';
import SeriesCard from './SeriesCard';

interface CategorySectionProps {
  category: Category;
}

export default function CategorySection({ category }: CategorySectionProps) {
  return (
    <section id={category.id} className="mb-14">
      <h2 className="text-xl font-bold text-black mb-5 pb-2 border-b border-gray-700">
        {category.label}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {category.series.map((series) => (
          <SeriesCard key={series.id} series={series} />
        ))}
      </div>
    </section>
  );
}
