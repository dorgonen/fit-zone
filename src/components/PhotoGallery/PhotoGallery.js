import React, { useState } from "react";
import Gallery from "react-photo-gallery-react17";
import "./PhotoGallery.css";

function PhotoGallery({ photos, filters }) {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [items, setItems] = useState(photos);

  const filterItems = (filterValue) => {
    const newItems = photos.filter((photo) =>
      photo.categories.includes(filterValue)
    );
    setItems(newItems);
  };

  const handleFilterBtnClick = (filterValue) => {
    if (filterValue === selectedFilter || filterValue === "all") {
      setSelectedFilter("all");
      setItems(photos);
    } else {
      setSelectedFilter(filterValue);
      filterItems(filterValue);
    }
  };

  return (
    <div>
      {filters.map((filter) => {
        return (
          <button
            key={filter.value}
            onClick={() => handleFilterBtnClick(filter.value)}
            // isChecked={selectedFilter === filter.value}
          >
            {filter.label}
          </button>
        );
      })}
      <div className="photo-gallery">
        <div className="home__hero-section">
          <div className="container">
            <Gallery photos={items} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PhotoGallery;
