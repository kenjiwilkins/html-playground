import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function Index() {
  useEffect(() => {
    document.title = "HTML Tags";
  }, []);
  return (
    <>
      <aside className="flex">
        <ul className="p-4 pr-6 w-48">
          <li>
            <Link to="/html-tags/anchor">{"<a> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/abbr">{"<abbr> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/address">{"<address> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/area">{"<area> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/article">{"<article> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/aside">{"<aside> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/audio">{"<audio> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/bring">{"<b> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/base">{"<base> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/bdi">{"<bdi> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/bdo">{"<bdo> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/blockquote">{"<blockquote> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/body">{"<body> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/break">{"<br> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/button">{"<button> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/canvas">{"<canvas> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/caption">{"<caption> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/cite">{"<cite> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/code">{"<code> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/col">{"<col> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/colgroup">{"<colgroup> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/data">{"<data> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/datalist">{"<datalist> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/description">{"<dd> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/description">{"<dt> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/description">{"<dl> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/delete">{"<del> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/details">{"<details> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/definition">{"<dfn> Tag"}</Link>
          </li>
          <li>
            <Link to="/html-tags/progress">{"<progress> Tag"}</Link>
          </li>
        </ul>
        <Outlet />
      </aside>
    </>
  );
}

export default Index;
