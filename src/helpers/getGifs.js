import PropTypes from "prop-types";
const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=gzR0uue7r94zkjTkyhXN6V9JspPS9SCm`;
  const res = await fetch(url);
  const { data } = await res.json();
  return data.map(({ id, title, images }) => {
    return {
      id,
      title,
      url: images?.downsized_medium.url,
    };
  });
};

getGifs.propTypes = {
  category: PropTypes.object.isRequired,
};

export default getGifs;
