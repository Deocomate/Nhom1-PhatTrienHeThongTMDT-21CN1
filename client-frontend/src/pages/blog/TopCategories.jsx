import React, { useEffect, useState } from "react";
import apiService from "@/lib/api/apiService";

export default function TopCategories() {
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    try {
      const response = await apiService.get("/blog_category");
      if (response.code === 200) {
        setCategories(response.data);
      }
    } catch (error) {
      console.error("Error fetching blog categories:", error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className="widget ltn__menu-widget ltn__menu-widget-2--- ltn__menu-widget-2-color-2---">
        <h4 className="ltn__widget-title ltn__widget-title-border-2">
          Danh mục Blog
        </h4>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <a href={`/blog?category=${category.id}`}>
                {category.name} 
                {/* <span>({category.totalBlogs || 0})</span> */}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}