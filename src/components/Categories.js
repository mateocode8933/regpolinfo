import React from "react"

const Categories = ({ categories, filterItems }) => {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <li key={index}>
            <button
              className="CategoryOption"
              onClick={() => filterItems(category)}
              key={index}
            >
              {category}
            </button>
          </li>
        )
      })}
    </>
  )
}

export default Categories
