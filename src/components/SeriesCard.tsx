import type { Series } from '../data/data';

interface SeriesCardProps {
  series: Series;
}

export default function SeriesCard({ series }: SeriesCardProps) {
  const { title, videoCount, imagePath, youtubeUrl } = series;

  const cardContent = (
    <div className="relative rounded-xl overflow-hidden bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300 group">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gray-700 overflow-hidden">
        <img
          src={imagePath}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://placehold.co/480x270/1e293b/94a3b8?text=No+Image';
          }}
        />
        {youtubeUrl === null && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
            Coming Soon
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2">
          {title}
        </h3>
        <p className="mt-1 text-gray-400 text-xs">
          {videoCount === 0 ? 'No videos yet' : `${videoCount} video${videoCount !== 1 ? 's' : ''}`}
        </p>
      </div>
    </div>
  );

  if (youtubeUrl) {
    return (
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-xl"
        aria-label={`Open playlist: ${title}`}
      >
        {cardContent}
      </a>
    );
  }

  return <div>{cardContent}</div>;
}
