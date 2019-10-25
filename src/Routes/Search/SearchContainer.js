import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi } from "api";
import { tvApi } from "../../api";

export default class extends React.Component {
  state = {
    movieResult: null,
    tvResult: null,
    searchTerm: "code",
    error: null,
    loading: false
  };

  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchTerm();
    }
  };

  searchTerm = async () => {
    const { searchTerm } = this.state;

    try {
      const movieResult = await movieApi.search(searchTerm);
      const tvResult = await tvApi.search(searchTerm);

      console.log(movieResult, tvResult);

      this.setState({ loading: true });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResult, tvResult, searchTerm, error, loading } = this.state;

    return (
      <SearchPresenter
        movieResult={movieResult}
        tvResult={tvResult}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
      />
    );
  }
}
