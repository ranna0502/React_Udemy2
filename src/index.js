import ReactDom from 'react-dom';

// JSX記法のルールを知る
// JSの中にHTMLのタグを書くこと
// returnで返す結果が複数の場合は();で囲む
// 複数のタグがあるとエラーになる
// 回避方法は<React.Fragment>で囲む。またこれは<>だけでも適応される。
const App = () => {
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  ); 
};

ReactDom.render(<App />, document.getElementById("root"));
