const Cards = (props) => {
  const { icon, category, isActive, itemCount, onClick } = props;

  return (
    <div 
      className={`w-40 h-24 bg-white rounded-xl p-4 flex flex-col cursor-pointer transition-all duration-300 shadow-soft hover:shadow-soft-hover border ${
        isActive 
          ? 'ring-2 ring-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200' 
          : 'border-slate-200 hover:border-slate-300'
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col justify-start">
        <div className="flex gap-2 items-center">
          <img src={icon.src} alt={category.toLowerCase()} className="w-6 h-6" />
          <span className={`font-inter text-sm font-medium ${
            isActive ? 'text-emerald-700' : 'text-slate-700'
          }`}>
            {category}
          </span>
        </div>
      </div>

      <div className="flex justify-start pt-4 mt-auto">
        <div className="text-xs text-slate-500 font-inter">
          Total Items: {itemCount}
        </div>
      </div>
    </div>
  );
};

export default Cards;