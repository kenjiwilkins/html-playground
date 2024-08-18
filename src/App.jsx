import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from "./views/Index";
import HtmlTagsIndex from "./views/html-tags/Index";
import JsScriptsIndex from "./views/js-scripts/Index";
import Progress from "./views/html-tags/Progress";
import DynamicFavicon from "./views/DynamicFavicon";
import Anchor from "./views/html-tags/Anchor";
import Abbr from "./views/html-tags/Abbr";
import Address from "./views/html-tags/Address";
import Area from "./views/html-tags/Area";
import Article from "./views/html-tags/Article";

function NotFound() {
  return <h1>Not Found</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Index />}>
          <Route path="/html-tags" element={<HtmlTagsIndex />}>
            <Route path="/html-tags/progress" element={<Progress />} />
            <Route path="/html-tags/anchor" element={<Anchor />} />
            <Route path="/html-tags/abbr" element={<Abbr />} />
            <Route path="/html-tags/address" element={<Address />} />
            <Route path="/html-tags/area" element={<Area />} />
            <Route path="/html-tags/article" element={<Article />} />
          </Route>
          <Route path="/js-scripts" element={<JsScriptsIndex />}>
            <Route
              path="/js-scripts/dynamic-favicon"
              element={<DynamicFavicon />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
