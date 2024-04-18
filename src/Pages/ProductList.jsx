import { styled } from "styled-components";
import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Announcement from "../Component/Announcement";
import Products from "../Component/Products";
import NewsLetter from "../Component/NewsLetter";
import Footer from "../Component/Footer";
import { mobile } from "../Responsive";
import { useLocation } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })};
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px", fontSize: "18px" })};
`;
const Select = styled.select`
  padding: 5px 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px", border: "none" })};
`;
const Options = styled.option`
  padding: 10px;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter , setFilter] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name] : value
    })
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Options disabled>
              Color
            </Options>
            <Options>White</Options>
            <Options>Black</Options>
            <Options>Red</Options>
            <Options>Blue</Options>
            <Options>Yellow</Options>
            <Options>Green</Options>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Options disabled>
              Size
            </Options>
            <Options>XS</Options>
            <Options>S</Options>
            <Options>M</Options>
            <Options>L</Options>
            <Options>XL</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Product:</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Options value='newest'>Newest</Options>
            <Options value='asc'>Price (asc)</Options>
            <Options value='desc'>Price (desc)</Options>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort}/>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
