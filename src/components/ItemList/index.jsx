import ItemCard from './ItemCard';
import Spinner from '../Spinner';

export default function ItemList({ selectedCategory, items = [], isLoading = false }) {
  // Filter items based on selected category
  const filteredItems = selectedCategory 
    ? items.filter(item => item.Category === selectedCategory)
    : items;

  // Show a single centered spinner while fetching data
  if (isLoading) {
    return (
      <div className="flex w-full min-h-[300px] items-center justify-center">
        <Spinner size="w-12 h-12" color="text-emerald-500" />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-6 justify-start">
      {filteredItems.length > 0 ? (
        filteredItems.map((item, i) => (
          <ItemCard key={i} item={item} />
        ))
      ) : (
        <div className="w-full text-center py-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-white/20">
            <svg className="w-16 h-16 mx-auto text-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
            </svg>
            <p className="text-slate-600 font-inter text-lg">
              {selectedCategory 
                ? `No items found in the "${selectedCategory}" category.`
                : "No items available."
              }
            </p>
          </div>
        </div>
      )}
    </div>
  );
}


