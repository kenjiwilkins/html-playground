import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from "./views/Index";
import HtmlTagsIndex from "./views/html-tags/Index";
import JsScriptsIndex from "./views/js-scripts/Index";
import ResponsiveIndex from "./views/responsive-design/Index";
import DynamicFavicon from "./views/DynamicFavicon";
import Anchor from "./views/html-tags/Anchor";
import Abbr from "./views/html-tags/Abbr";
import Address from "./views/html-tags/Address";
import Area from "./views/html-tags/Area";
import Article from "./views/html-tags/Article";
import Aside from "./views/html-tags/Aside";
import Audio from "./views/html-tags/Audio";
import Bring from "./views/html-tags/Bring";
import Base from "./views/html-tags/Base";
import BidirectionalIsolate from "./views/html-tags/BidirectionalIsolate";
import BidirectionalOverride from "./views/html-tags/BidirectionalOverride";
import Blockquote from "./views/html-tags/Blockquote";
import Body from "./views/html-tags/Body";
import Break from "./views/html-tags/Break";
import Button from "./views/html-tags/Button";
import Canvas from "./views/html-tags/Canvas";
import Caption from "./views/html-tags/Caption";
import Cite from "./views/html-tags/Cite";
import Code from "./views/html-tags/Code";
import Col from "./views/html-tags/Col";
import Progress from "./views/html-tags/Progress";
import ImageMap from "./views/responsive-design/ImageMap";

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
            <Route path="/html-tags/anchor" element={<Anchor />} />
            <Route path="/html-tags/abbr" element={<Abbr />} />
            <Route path="/html-tags/address" element={<Address />} />
            <Route path="/html-tags/area" element={<Area />} />
            <Route path="/html-tags/article" element={<Article />} />
            <Route path="/html-tags/aside" element={<Aside />} />
            <Route path="/html-tags/audio" element={<Audio />} />
            <Route path="/html-tags/bring" element={<Bring />} />
            <Route path="/html-tags/base" element={<Base />} />
            <Route path="/html-tags/bdi" element={<BidirectionalIsolate />} />
            <Route path="/html-tags/bdo" element={<BidirectionalOverride />} />
            <Route path="/html-tags/blockquote" element={<Blockquote />} />
            <Route path="/html-tags/body" element={<Body />} />
            <Route path="/html-tags/break" element={<Break />} />
            <Route path="/html-tags/button" element={<Button />} />
            <Route path="/html-tags/canvas" element={<Canvas />} />
            <Route path="/html-tags/caption" element={<Caption />} />
            <Route path="/html-tags/cite" element={<Cite />} />
            <Route path="/html-tags/code" element={<Code />} />
            <Route path="/html-tags/col" element={<Col />} />
            <Route path="/html-tags/progress" element={<Progress />} />
          </Route>
          <Route path="/js-scripts" element={<JsScriptsIndex />}>
            <Route
              path="/js-scripts/dynamic-favicon"
              element={<DynamicFavicon />}
            />
          </Route>
          <Route path="/responsive-design" element={<ResponsiveIndex />}>
            <Route path="/responsive-design/image-map" element={<ImageMap />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
