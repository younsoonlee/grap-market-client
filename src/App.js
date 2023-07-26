import "./App.css";
import MainpageComponent from "./main";
import { Switch, Route, Link, NavLink, useHistory } from "react-router-dom";
import UploadPage from "./upload/index.js";
import ProductPage from "./product";
import { BUTTON } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <button
            size="large"
            onClick={function () {
              history.push("/upload");
            }}
            icone={<DownloadOutlined />}
          >
            상품 업로드
          </button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainpageComponent />
          </Route>
          <Route exact={true} path="/products/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
