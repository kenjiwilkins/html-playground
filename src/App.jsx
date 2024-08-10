import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from "./views/Index";
import HtmlTagsIndex from "./views/html-tags/Index";
import JsScriptsIndex from "./views/js-scripts/Index";
import Progress from "./views/html-tags/Progress";
import DynamicFavicon from "./views/DynamicFavicon";

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
