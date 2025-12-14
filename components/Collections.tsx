import React from 'react';

interface CollectionItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

const collections: CollectionItem[] = [
  {
    id: 1,
    title: "Intemporelle",
    description: "Lignes pures et soies minimalistes",
    image: "https://picsum.photos/seed/wedding1/800/1000"
  },
  {
    id: 2,
    title: "Bohème Chic",
    description: "Dentelles légères et fluidité",
    image: "https://picsum.photos/seed/wedding2/800/1000"
  },
  {
    id: 3,
    title: "Couture",
    description: "Volumes structurés et broderies d'art",
    image: "https://picsum.photos/seed/wedding3/800/1000"
  }
];

const Collections: React.FC = () => {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Nos Collections</h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-6">
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/20 transition-colors duration-500 z-10"></div>
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute bottom-8 left-0 right-0 text-center z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                   <span className="inline-block px-6 py-2 bg-white text-gray-900 text-xs uppercase tracking-widest font-bold">
                     Découvrir la Collection
                   </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl text-gray-900 mb-2 group-hover:text-brand-gold transition-colors">
                  {collection.title}
                </h3>
                <p className="text-gray-500 font-light italic text-sm">
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#" className="inline-block text-gray-500 hover:text-brand-gold uppercase tracking-widest text-xs border-b border-transparent hover:border-brand-gold pb-1 transition-all">
            Voir toutes les créations
          </a>
        </div>
      </div>
    </section>
  );
};

export default Collections;