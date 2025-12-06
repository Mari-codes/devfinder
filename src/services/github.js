import axios from 'axios';

export const fetchGithubUser = async (username) => {
  const res = await axios.get(`https://api.github.com/users/${username}`);
  return res.data;
};
