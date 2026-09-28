"use client";

import { categories, type SpotCategory } from "@/types/spot";

export type CategoryFilter = "All" | SpotCategory;

export function CategoryFilterBar({
  active,
  counts,
  onChange,
}: {
  active: CategoryFilter;
  counts: Record<CategoryFilter, number>;
  onChange: (category: CategoryFilter) => void;
}) {
  const options: CategoryFilter[] = ["All", ...categories];

  return (
    <div aria-label="Filter destinations by category" className="filter-row">
      {options.map((category) => (
        <button
          aria-pressed={active === category}
          className={`filter-chip${active === category ? " is-active" : ""}`}
          key={category}
          onClick={() => onChange(category)}
        >
          {category}
          <span className="filter-count">{counts[category]}</span>
        </button>
      ))}
    </div>
  );
}
