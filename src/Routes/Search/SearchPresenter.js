import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";

const Container = styled.div`
  padding: 0px 10px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 20px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResult,
  tvResult,
  searchTerm,
  loading,
  error,
  handleSubmit,
  updateTerm
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movie or TV"
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>

    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResult && movieResult.length > 0 && (
          <Section title="Movie">
            {movieResult.map(movie => (
              <div key={movie.id}>{movie.title}</div>
            ))}
          </Section>
        )}

        {tvResult && tvResult.length > 0 && (
          <Section title="TV">
            {tvResult.map(tv => (
              <div key={tv.id}>{tv.name}</div>
            ))}
          </Section>
        )}
      </>
    )}
  </Container>
);
SearchPresenter.propType = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
