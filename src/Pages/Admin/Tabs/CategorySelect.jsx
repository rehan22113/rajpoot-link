import React, { useEffect, useRef, useState } from 'react';

const CategorySelect = ({ categories, onSelect, parentCategoryId = null,onResetCategory,level=0 }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  // const resetCategoryRef = useRef(resetCategory);
  
  const filteredCategories = categories.filter((category) =>
    parentCategoryId ? category.parent === parentCategoryId : category.parent === null
  );

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onSelect(value);
  };

  if (!filteredCategories || filteredCategories.length === 0) {
    return null;
  }
  // useEffect(() => {
  //   setSelectedCategory('');
  //   onResetCategory(); // Call the resetCategory function to update newPost in the App component
  // }, [parentCategoryId]);

  return (
    <div>
      <label className=' font-bold'>Select {' '.repeat(level * 4)}Category{level ? ` level ${level}` : ''}</label>
      <select
        className='title w-full bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Title" type="text'
        onChange={handleSelectChange}
        value={selectedCategory}
      >
        <option value="">Select...</option>
        {filteredCategories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <CategorySelect
          categories={categories}
          onSelect={onSelect}
          parentCategoryId={selectedCategory}
          onResetCategory={onResetCategory}
          level={level + 1}
        />
      )}
    </div>
  );
};

export default CategorySelect;
