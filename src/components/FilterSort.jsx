import React, { useState } from "react";

export default function FilterSort({ products, setFiltered }) {
  const [sort, setSort] = useState("");

  const handleSort = (e) => {
    const value = e.target.value;
    setSort(value);

    let sorted = [...products];
    if (value === "low-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "high-low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFiltered(sorted);
  };

  return (
    <div className="filter-sort">
       <select value={sort} onChange={handleSort}>
        <option className="default" value="">SORT</option>
        <option value="low-high">Price: Low → High</option>
        <option value="high-low">Price: High → Low</option>
      </select>
    </div>
  );
}
