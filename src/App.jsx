import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from "./views/Index";
import HtmlTagsIndex from "./views/html-tags/Index";
import CssStylesIndex from "./views/css-styles/Index";
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
import Colgroup from "./views/html-tags/Colgroup";
import Data from "./views/html-tags/Data";
import Datalist from "./views/html-tags/Datalist";
import DescriptionDetails from "./views/html-tags/Description";
import Delete from "./views/html-tags/Delete";
import Details from "./views/html-tags/Details";
import Definition from "./views/html-tags/Definition";
import Dialog from "./views/html-tags/Dialog";
import Emphasis from "./views/html-tags/Emphasis";
import Embed from "./views/html-tags/Embed";
import Fieldset from "./views/html-tags/Fieldset";
import Figure from "./views/html-tags/Figure";
import Iframe from "./views/html-tags/Iframe";
import Meter from "./views/html-tags/Meter";
import Progress from "./views/html-tags/Progress";
import Ruby from "./views/html-tags/Ruby";
import Active from './views/css-styles/Active';
import AnyLink from './views/css-styles/AnyLink';
import Autofill from "./views/css-styles/Autofill";
import Checked from "./views/css-styles/Checked";
import Default from "./views/css-styles/Default";
import Direction from "./views/css-styles/Direction";
import Target from "./views/css-styles/Target";
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
            <Route path="/html-tags/colgroup" element={<Colgroup />} />
            <Route path="/html-tags/data" element={<Data />} />
            <Route path="/html-tags/datalist" element={<Datalist />} />
            <Route
              path="/html-tags/description"
              element={<DescriptionDetails />}
            />
            <Route path="/html-tags/delete" element={<Delete />} />
            <Route path="/html-tags/details" element={<Details />} />
            <Route path="/html-tags/definition" element={<Definition />} />
            <Route path="/html-tags/dialog" element={<Dialog />} />
            <Route path="/html-tags/emphasis" element={<Emphasis />} />
            <Route path="/html-tags/embed" element={<Embed />} />
            <Route path="/html-tags/fieldset" element={<Fieldset />} />
            <Route path="/html-tags/figure" element={<Figure />} />
            <Route path="/html-tags/iframe" element={<Iframe />} />
            <Route path="/html-tags/meter" element={<Meter />} />
            <Route path="/html-tags/progress" element={<Progress />} />
            <Route path="/html-tags/ruby" element={<Ruby/>} />
          </Route>
          <Route path="/css-styles" element={<CssStylesIndex />}>
            <Route path="/css-styles/active" element={<Active />} />
            <Route path="/css-styles/any-link" element={<AnyLink />} />
            <Route path="/css-styles/autofill" element={<Autofill />} />
            <Route path="/css-styles/checked" element={<Checked />} />
            <Route path="/css-styles/default" element={<Default />} />
            <Route path="/css-styles/dir" element={<Direction />}/>
            <Route path="/css-styles/target" element={<Target />}/>
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
