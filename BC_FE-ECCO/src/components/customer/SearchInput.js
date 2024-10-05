import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchInput = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const searchClick = () => {
    if (!search) {
      toast.error("Vui lòng nhập tên sản phẩm");
      return;
    }
    navigate(`/search?name=${search}`);
  };
  const handleKeyPress = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      searchClick();
    }
  };
  return (
    <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
      <Form.Control style={{width:"289px",color:"black", borderRadius:"10px"}}
        type="text"
        placeholder="Nhập tên sản phẩm..."
        className="me-2"
        aria-label="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button style={{width:"100%",color:"black", borderRadius:"10px"}} onClick={searchClick} variant="outline-success">
        Tìm
      </Button>
    </Form>
  );
};
export default SearchInput;
