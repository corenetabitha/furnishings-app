export default function CategorySelector({ 
    categories, 
    selectedCategory, 
    setSelectedCategory 
  }) {
    return (
      <div className="mb-6">
        <button 
          onClick={() => setSelectedCategory(null)}
          className={`mr-2 mb-2 px-3 py-1 rounded ${
            !selectedCategory ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map(category => (
          <button 
            key={category.id}
            onClick={() => setSelectedCategory(category)}
            className={`mr-2 mb-2 px-3 py-1 rounded ${
              selectedCategory?.id === category.id ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }