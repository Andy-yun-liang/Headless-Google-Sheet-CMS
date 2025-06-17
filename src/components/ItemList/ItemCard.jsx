import { useState } from 'react';
import Spinner from '../Spinner';

export default function ItemCard({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const maxDescriptionLength = 80; // Reduced for image layout
  const isDescriptionLong = item.Description && item.Description.length > maxDescriptionLength;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const getDisplayDescription = () => {
    if (!item.Description) return '';
    if (!isDescriptionLong || isExpanded) return item.Description;
    return item.Description.substring(0, maxDescriptionLength) + '...';
  };

  // Convert Google Drive URL to direct image URL with CORS bypass
  const convertGoogleDriveUrl = (url) => {
    if (!url) return null;
    
    // Check if it's a Google Drive URL
    if (url.includes('drive.google.com/file/d/')) {
      // Extract the file ID from the URL
      const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
      if (fileIdMatch) {
        const fileId = fileIdMatch[1];
        
        // Use a CORS proxy to bypass browser restrictions
        const corsProxy = 'https://cors-anywhere.herokuapp.com/';
        const directUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
        
        // Alternative: Use Google Drive's thumbnail API which often has fewer CORS issues
        const thumbnailUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w200`;
        
        // Try the thumbnail URL first as it's more reliable
        return thumbnailUrl;
      }
    }
    
    return url;
  };

  // Try different possible image field names
  const getImageUrl = () => {
    const possibleFields = ['Image', 'image', 'IMG', 'img', 'Picture', 'picture', 'Photo', 'photo'];
    for (const field of possibleFields) {
      if (item[field]) {
        return convertGoogleDriveUrl(item[field]);
      }
    }
    return null;
  };

  const imageUrl = getImageUrl();

  const handleImageError = (e) => {
    console.log('Image failed to load:', imageUrl);
    setImageError(true);
    setImageLoading(false);
    e.target.style.display = 'none';
  };

  const handleImageLoad = () => {
    console.log('Image loaded successfully:', imageUrl);
    setImageError(false);
    setImageLoading(false);
  };

  // Debug: Log the item data
  console.log('=== ItemCard Debug ===');
  console.log('Item:', item);
  console.log('Image URL:', imageUrl);
  console.log('Image Error State:', imageError);

  return (
    <div className="border border-slate-200 rounded-2xl p-4 shadow-soft hover:shadow-soft-hover transition-all duration-300 bg-white w-80 h-48 overflow-hidden group">
      <div className="flex gap-3 h-full">
        {/* Image Section */}
        <div className="flex-shrink-0">
          {imageUrl && !imageError ? (
            <>
              {imageLoading && (
                <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center shadow-sm">
                  <Spinner size="w-6 h-6" color="text-slate-400" />
                </div>
              )}
              <img 
                src={imageUrl} 
                alt={item.Item}
                className={`w-20 h-20 object-cover rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300 ${
                  imageLoading ? 'hidden' : 'block'
                }`}
                onError={handleImageError}
                onLoad={handleImageLoad}
                referrerPolicy="no-referrer"
              />
            </>
          ) : (
            <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-slate-500 text-xs text-center font-inter">
                {imageUrl ? 'Load Failed' : 'No Image'}
              </span>
            </div>
          )}
        </div>
        
        {/* Content Section */}
        <div className="flex-1 flex flex-col min-w-0">
          <h2 className="font-playfair text-lg font-semibold text-slate-800 mb-1 truncate">{item.Item}</h2>
          <p className="text-sm text-slate-500 mb-2 font-inter font-medium">{item.Category}</p>
          
          <div className="flex-1 mb-2">
            <p className="text-slate-700 text-sm leading-relaxed font-inter">
              {getDisplayDescription()}
            </p>
            {isDescriptionLong && (
              <button
                onClick={toggleExpanded}
                className="text-emerald-600 text-sm font-medium hover:text-emerald-700 transition-colors mt-1 font-inter"
              >
                {isExpanded ? 'See less' : 'See more'}
              </button>
            )}
          </div>
          
          <div className="text-right text-base font-semibold text-emerald-600 font-inter">${item.Pricing}</div>
        </div>
      </div>
    </div>
  );
}
  