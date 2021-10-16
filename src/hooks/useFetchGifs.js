import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

const useFecthGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then(imgs => setState({
        data: imgs,
        loading: false
    }));
  }, [category]);
  return state; // {data: [], laoding: true}
};

useFecthGifs.PropTypes = {
    category: PropTypes.string.isRequired
}

export default useFecthGifs;
