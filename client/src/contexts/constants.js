export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "something";
export const AIUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5001/ai"
    : "something";

export const LOCAL_STORAGE_TOKEN_NAME = 'agriculture_dashboard'