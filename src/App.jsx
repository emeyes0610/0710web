//App.jsx
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const Home = () => {
  return(
    <div id = "hometext">
      <h2>ホームページへようこそ！</h2>
      <p>このサイトではさまざまな情報を提供しています。メニューからご興味のあるページをご覧ください。</p>
    </div>
  );

}

const Profile = () => {
  return <h2>👤プロフィール</h2>;
}

const Inquiry = () => {
  return <h2>📧お問い合わせ</h2>;
}
const NotFound = () => {
  return <h2>NotFound</h2>;
}


const App = () => {
  return (
    <BrowserRouter>
      <nav id = "header">
        <h1>MyApp</h1>
        <Link to="/">🏠ホーム</Link>
        <Link to="/profile">👤プロフィール</Link>
        <Link to="/inquiry">📧お問い合わせ</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;