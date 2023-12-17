// pokemonType.js
export const typeHandler = (types) => {
  if (types && types.length > 0) {
    return types.length > 1 ? types.join(" | ") : types[0];
  }
  return "No types";
};
