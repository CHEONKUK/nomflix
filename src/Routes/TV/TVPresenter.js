import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  padding: 0 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map(tv => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map(tv => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        </Section>
      )}

      {airingToday && topRated.length > 0 && (
        <Section title="Airing ToDay Shows">
          {airingToday.map(tv => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

TVPresenter.propType = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
