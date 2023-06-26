import React from "react";
import { create } from "xmlbuilder2";

function generateSitemapXML() {
  const baseUrl = "https://www.daniletto.site";
  const routes = [
    { path: "/", priority: "1.0" },
    { path: "/Portafolio", priority: "0.8" },
    { path: "/About", priority: "0.7" },
    { path: "/Contacto", priority: "0.7" },
  ];

  const xmlObj = create({ version: "1.0" }).ele("urlset", {
    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
  });

  routes.forEach((route) => {
    xmlObj
      .ele("url")
      .ele("loc")
      .txt(`${baseUrl}${route.path}`)
      .up()
      .ele("priority")
      .txt(route.priority)
      .up()
      .up();
  });

  return xmlObj.end({ prettyPrint: true });
}

function SitemapXML() {
  const sitemapXML = generateSitemapXML();

  return <pre>{sitemapXML}</pre>;
}

export default SitemapXML;
