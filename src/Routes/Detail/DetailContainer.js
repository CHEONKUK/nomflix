import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  };

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loadind={loading} />;
  }
}

/*
  ?? result ??

  Show를 검색 할 때 id를 갖고 감
  작업이 끝나면 id를 가져와서 그걸로 검색하고 결과값Result를 보여줌
  TV, Moive 둘다 같은 result, 같은 RouterDetail을 사용함

*/
