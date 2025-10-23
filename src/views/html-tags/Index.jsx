import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import {TransitionButton} from "../../components";

function Index() {
  useEffect(() => {
    document.title = "HTML Tags";
  }, []);
  return (
    <div className="flex">
      <aside className="flex min-w-fit">
        <ul className="p-4 pr-6 w-48">
          <li>
            <TransitionButton to="/html-tags/anchor" ariaLabel="View anchor tag example">{"<a> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/abbr" ariaLabel="View abbreviation tag example">{"<abbr> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/address" ariaLabel="View address tag example">{"<address> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/area" ariaLabel="View area tag example">{"<area> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/article" ariaLabel="View article tag example">{"<article> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/aside" ariaLabel="View aside tag example">{"<aside> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/audio" ariaLabel="View audio tag example">{"<audio> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/bring" ariaLabel="View bold tag example">{"<b> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/base" ariaLabel="View base tag example">{"<base> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/bdi" ariaLabel="View bidirectional isolation tag example">{"<bdi> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/bdo" ariaLabel="View bidirectional override tag example">{"<bdo> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/blockquote" ariaLabel="View blockquote tag example">{"<blockquote> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/body" ariaLabel="View body tag example">{"<body> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/break" ariaLabel="View line break tag example">{"<br> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/button" ariaLabel="View button tag example">{"<button> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/canvas" ariaLabel="View canvas tag example">{"<canvas> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/caption" ariaLabel="View caption tag example">{"<caption> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/cite" ariaLabel="View cite tag example">{"<cite> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/code" ariaLabel="View code tag example">{"<code> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/col" ariaLabel="View column tag example">{"<col> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/colgroup" ariaLabel="View column group tag example">{"<colgroup> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/data" ariaLabel="View data tag example">{"<data> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/datalist" ariaLabel="View datalist tag example">{"<datalist> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/description" ariaLabel="View description definition tag example">{"<dd> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/description" ariaLabel="View description term tag example">{"<dt> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/description" ariaLabel="View description list tag example">{"<dl> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/delete" ariaLabel="View deleted text tag example">{"<del> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/details" ariaLabel="View details tag example">{"<details> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/definition" ariaLabel="View definition tag example">{"<dfn> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/dialog" ariaLabel="View dialog tag example">{"<dialog> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/emphasis" ariaLabel="View emphasis tag example">{"<em> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/embed" ariaLabel="View embed tag example">{"<embed> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/fieldset" ariaLabel="View fieldset tag example">{"<fieldset> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/figure" ariaLabel="View figure caption tag example">{"<figcaption> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/figure" ariaLabel="View figure tag example">{"<figure> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/iframe" ariaLabel="View iframe tag example">{"<iframe> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/meter" ariaLabel="View meter tag example">{"<meter> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/progress" ariaLabel="View progress tag example">{"<progress> Tag"}</TransitionButton>
          </li>
          <li>
            <TransitionButton to="/html-tags/ruby" ariaLabel="View ruby tag example">{"<ruby> Tag"}</TransitionButton>
          </li>
        </ul>
      </aside>
      <Outlet />
    </div>
  );
}

export default Index;
