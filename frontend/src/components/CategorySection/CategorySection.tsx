import { useEffect, useState } from "react";
import {
  CategoryCard,
  CategoryGrid,
  CategoryImage,
  CategorySection,
  CategoryTitle,
} from "./CategorySection.styles";
import { getCategories } from "../../services/api";

interface Category {
  id: string;
  name: string;
}

export default function CategorySectionComponent() {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response);
      } catch (err) {
        setError("Failed to fetch categories");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <CategorySection>
      <h2>Product Categories</h2>
      <CategoryGrid>
        {categories?.map((category) => (
          <CategoryCard key={category.id}>
            <CategoryImage src="/placeholder.svg" alt={category.name} />
            <CategoryTitle>{category.name}</CategoryTitle>
          </CategoryCard>
        ))}
      </CategoryGrid>
    </CategorySection>
  );
}
