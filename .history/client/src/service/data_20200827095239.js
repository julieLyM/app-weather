import axios from 'axios';

export const dataCities = async (query) => {
  const res = await axios.get(`http://localhost:4242/cities`, {
    params: {
      q: query,
    },
  });
  console.log(res.data);
  return res.data;
};
