import { FaSearch } from "react-icons/fa";
import { Button } from "@mui/material";



const SearchBox = () => {
  return (
    <div className="headerSearch ml-3 mr-3">
      <input type="text" placeholder="Search for products.. " />
      <Button>
        <FaSearch />
      </Button>
    </div>
  );
};

export default SearchBox;
