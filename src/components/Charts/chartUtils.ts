export const generateRandomColor = () => {
  const letters = "56789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 12)];
  }
  return color;
};

// const COLORS = [
//     "#FF3F00",
//     "#FFAA00",
//     "#FFD500",
//     "#FF005E",
//     "#FF00AA",
//     "#D500FF",
//     "#5E00FF",
//     "#00AAFF",
//     "#00D5FF",
//     "#00FF5E",
//     "#AAFF00",
//     "#D5FF00",
//     "#00FFAA",
//     "#FF5E00",
//     "#FF00D5",
//     "#AAFFFF",
//     "#FFFF5E",
//     "#FFFFAA",
//     "#AA00FF",
//     "#FFAAFF",
// ]

const COLORS = [
  "#FFFFFF",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FF8000",
  "#0080FF",
];

export const selectRandomColor = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};
