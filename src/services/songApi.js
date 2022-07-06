export async function getSong(id, token) {
  const response = await fetch(
    `${import.meta.env.VITE_APP_BASE_API_URL}songs/stream/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  return url;
}
