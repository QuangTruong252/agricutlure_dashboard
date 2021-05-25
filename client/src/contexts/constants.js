export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://3.0.92.151:5000/api"
    : "something";
export const LOCAL_STORAGE_TOKEN_NAME = 'agriculture_dashboard'