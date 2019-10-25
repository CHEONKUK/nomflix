import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);

    const {
      location: { pathname }
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;

    const { isMovie } = this.state;
    const parseId = parseInt(id);

    if (isNaN(parseId)) {
      return push("/");
    }

    let result = null;

    try {
      if (isMovie) {
        const request = await movieApi.movieDetail(parseId);
        result = request.data;
      } else {
        const request = await tvApi.tvDetail(parseId);
        result = request.data;
      }
    } catch {
      this.setState({ error: "Can't find anyting." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loadind={loading} />;
  }
}
