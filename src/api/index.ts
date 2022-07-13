export const getQuotes = async () => {
  const res = await fetch('http://v3.wufazhuce.com:8000/api/channel/one/0/0');
  return await res.json();
};
