import styled from "@emotion/styled";
import { PrismicText } from "@prismicio/react";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
padding: 1rem 2rem;
border-top: 2px solid var(--color);
a{
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  overflow: hidden;
}
h4 {
  text-transform: initial;
  margin: 0;
  font-family: var(--font-light);
  font-size: 1.25rem;
}
p {
  margin: 0;
  white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
text-transform: initial;
}
`

const SearchPageItem = ({ page }) => {
  return (
    <Container>
      <Link to={`/page/${page._meta.uid} `}>
        <h4>{page.title}</h4>
        <p><PrismicText field={page.text} /></p>
      </Link>
    </Container>
  );
};
export default SearchPageItem;