// #780C28
// #7e2b2f
// #d08138
// #316037

export const getCategoryColor = (category: string) => {
  switch (category) {
    case "secondary-objective":
      return "#d08138";
    case "advantage":
      return "#316037";
    case "blue-player":
      return "#6EACDA";
    case "red-player":
      return "#EE4E4E";
    default:
      return "#7e2b2f";
  }
};

export const getTitle = (category: string) => {
  switch (category) {
    case "secondary-objective":
      return "Secondary Objective";
    case "advantage":
      return "Advantage";
    case "blue-player":
      return "Blue Player";
    case "red-player":
      return "Red Player";
    case "objective":
      return "Objective";
    default:
      return "";
  }
};
