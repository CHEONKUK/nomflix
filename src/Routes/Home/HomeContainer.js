import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "api";

//Container Component
export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  // async, await 는 JS한테 현재 끝날 때 까지 다음것을 진행하지 않게 기다려줌
  // 실패/성공 상관없이 기다려줌
  async componentDidMount() {
    try {
      // const nowPlaying = await movieApi.nowPlaying();
      // nowPlaying안에 data --> 객체비구조할당

      const {
        data: { results: nowPlaying }
      } = await movieApi.nowPlaying();

      const {
        data: { results: upcoming }
      } = await movieApi.upcoming();

      const {
        data: { results: popular }
      } = await movieApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
    } catch {
      this.setState({
        error: "Can't find Movies information"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    console.log(this.state);
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
