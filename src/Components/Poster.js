import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Container = styled.div``;
const ImageContainer = styled.div``;
const Image = styled.div``;
const Rating = styled.span``;
const Title = styled.span``;
const Year = styled.span``;

const Poster = ({ imageUrl, title, rating, year, id, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tvshow/${id}`}>
    <Container>
      <ImageContainer>
        <Image baUrl={imageUrl} />
        <Rating>
          <span role="img" aria-label="rating">
            💜
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.number.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;
