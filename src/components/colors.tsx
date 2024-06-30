import { sentenceCase } from "change-case";
import { CSSProperties } from "react";

const categoryColors: { [key: string]: string } = {
  beauty: "#FF69B4", // Hot Pink
  fragrances: "#FFD700", // Gold
  furniture: "#8B4513", // SaddleBrown
  groceries: "#32CD32", // LimeGreen
  "home-decoration": "#4682B4", // SteelBlue
  "kitchen-accessories": "#FF6347", // Tomato
  laptops: "#708090", // SlateGray
  "mens-shirts": "#1E90FF", // DodgerBlue
  "mens-shoes": "#A52A2A", // Brown
  "mens-watches": "#808080", // Gray
  "mobile-accessories": "#FF4500", // OrangeRed
  motorcycle: "#2F4F4F", // DarkSlateGray
  "skin-care": "#FFB6C1", // LightPink
  smartphones: "#00008B", // DarkBlue
  "sports-accessories": "#8A2BE2", // BlueViolet
  sunglasses: "#000000", // Black
  tablets: "#6A5ACD", // SlateBlue
  tops: "#FF8C00", // DarkOrange
  vehicle: "#4B0082", // Indigo
  "womens-bags": "#FF1493", // DeepPink
  "womens-dresses": "#DC143C", // Crimson
  "womens-jewellery": "#DAA520", // GoldenRod
  "womens-shoes": "#B22222", // FireBrick
  "womens-watches": "#8B0000", // DarkRed
};

const defaultColor = "#CCCCCC"; // Default color if category doesn't exist

const getCategoryColor = (category: string): string => {
  return category in categoryColors ? categoryColors[category] : defaultColor;
};

const hexToRgbaConverter = (hex: string, alpha: number) => {
  // Remove the '#' symbol if it exists
  hex = hex.replace("#", "");

  // Check if the hex value is a short version (e.g., #abc)
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  // Parse the hex components
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Validate alpha value (default to 1 if not provided)
  const validAlpha =
    alpha !== undefined && alpha >= 0 && alpha <= 1 ? alpha : 1;

  // Return the RGBA color in the format "rgba(r, g, b, alpha)"
  return `rgba(${r}, ${g}, ${b}, ${validAlpha})`;
};

export const Category = ({
  string,
  style,
}: {
  string: string;
  style: CSSProperties;
}) => {
  return (
    <p
      style={{
        color: getCategoryColor(string),
        backgroundColor: hexToRgbaConverter(getCategoryColor(string), 0.2),
        borderRadius: 4,
        fontSize: 12,
        ...style,
      }}
      className="p-1"
    >
      {sentenceCase(string)}
    </p>
  );
};
