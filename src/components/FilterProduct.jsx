import React from "react";

export default function FilterProduct({ products, setFiltered }) {
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const handleFilter = (e) => {
    const value = e.target.value;

    if (value === "all") {
      setFiltered(products);
    } else {
      setFiltered(products.filter((p) => p.category === value));
    }
  };

  return (
    <div className="filter-product">
      <select onChange={handleFilter}>
        <option className="default" value="">
          Category
        </option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
