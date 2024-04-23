import React, { useState } from 'react';
import { X } from 'lucide-react';

export const Filter = () => {
  const [filters, setFilters] = useState({
    expertise: '',
    gender: '',
    fees: '',
    language: '',
    allfilters: '',
  });
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [click,setClick]= useState(null);

  const handleChange = (filter, value) => {
    setFilters({ ...filters, [filter]: value });

    if (value && !selectedCategories.includes(value)) {
      setSelectedCategories([...selectedCategories, value]);
    }
  };

  const handleClick = (item) => {
    setClick(item);
  }

  const removeCategory = (category) => {
    const updatedCategories = selectedCategories.filter((c) => c !== category);
    setSelectedCategories(updatedCategories);
  };

  return (
    <div className="flex flex-col">
      <div className="p-4 flex gap-8 mx-auto sticky">
        <div>
          <select
            id="expertise"
            name="expertise"
            className={`block w-28 hover:bg-leafyGreen cursor-pointer mt-1 p-2 outline-none rounded-md shadow ${click==="experties" ? 'bg-leafyGreen' : 'bg-gray-200 '}`}
            value={filters.expertise}
            onChange={(e) => handleChange('expertise', e.target.value)}
            onClick={() => handleClick("experties")}
          >
            <option value=""> Expertise</option>
            <option value="gynecology">Gynecology</option>
            <option value="male-female-infertility">Male-Female Infertility</option>
            <option value="dermotology">Dermothology</option>
          </select>
        </div>
        <div>
          <select
            id="gender"
            name="gender"
            className={`block w-28  mt-1 p-2 hover:bg-leafyGreen cursor-pointer outline-none rounded-md shadow ${click==="gender" ? 'bg-leafyGreen' : 'bg-gray-200 '}`}
            value={filters.gender}
            onChange={(e) => handleChange('gender', e.target.value)}
            onClick={() => handleClick("gender")}
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <select
            id="fees"
            name="fees"
            className={`block w-28  mt-1 p-2 hover:bg-leafyGreen cursor-pointer outline-none rounded-md shadow ${click==="fees" ? 'bg-leafyGreen' : 'bg-gray-200 '}`}
            value={filters.fees}
            onChange={(e) => handleChange('fees', e.target.value)}
            onClick={() => handleClick("fees")}
          >
            <option value="">Fees</option>
            <option value="free">Free</option>
            <option value="0-500">Low</option>
            <option value="500-1000">Medium</option>
            <option value=">1000">High</option>
          </select>
        </div>
        <div>
          <select
            id="language"
            name="language"
            className={`block w-28  mt-1 p-2 hover:bg-leafyGreen cursor-pointer outline-none rounded-md shadow ${click==="language" ? 'bg-leafyGreen' : 'bg-gray-200 '}`}
            value={filters.language}
            onChange={(e) => handleChange('language', e.target.value)}
            onClick={() => handleClick("language")}
          >
            <option value="">Language</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="marathi">Marathi</option>
            <option value="telugu">Telugu</option>
            <option value="tamil">Tamil</option>
          </select>
        </div>
        <div>
          <select
            id="allfilters"
            name="allfilters"
            className={`block w-28  mt-1 p-2 hover:bg-leafyGreen cursor-pointer outline-none rounded-md shadow ${click==="allfilters" ? 'bg-leafyGreen' : 'bg-gray-200 '}`}
            value={filters.allfilters}
            onChange={(e) => handleChange('allfilters', e.target.value)}
            onClick={() => handleClick("allfilters")}
          >
            <option value="">All Filters</option>
            <option value="experties">Experties</option>
            <option value="gender">Gender</option>
            <option value="fees">Fees</option>
            <option value="languages">Languages</option>
          </select>
        </div>
      </div>
      <hr/>
      <div className="flex gap-4 justify-end m-4 p-4">
        {selectedCategories.map((category, index) => (
          <div key={index} className="flex items-center bg-leafyGreen space-x-2 mb-2 p-2 rounded-full">
            <span>{category}</span>
            <button onClick={() => removeCategory(category)}>
            <X className='text-gray-400'/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};