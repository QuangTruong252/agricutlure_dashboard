export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://13.213.67.108:5000/api"
    : "something";
export const LOCAL_STORAGE_TOKEN_NAME = 'agriculture_dashboard'