import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "2px solid #00d4ff",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        display:"flex"
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "#00d4ff" }}>
        <SearchTwoToneIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
