import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate(`/search?page=1&query=${query}`);

    setQuery("");
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movie here..."
        className="input input-bordered input-md w-full rounded-full"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

SearchForm.propTypes = {
  onClose: PropTypes.func,
};

export default SearchForm;
