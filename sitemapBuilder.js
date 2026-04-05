// sitemapBuilder.js
import { Sitemap } from 'react-router-sitemap';
import router from './App'; // ung App.js router import pannunga

function generateSitemap() {
  return (
    new Sitemap(router)
      .build('https://sanatravels.online') // unga site domain
      .save('./public/sitemap.xml')
  );
}

generateSitemap();