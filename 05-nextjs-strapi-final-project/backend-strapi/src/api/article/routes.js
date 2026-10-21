'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/articles',
      handler: 'article.find',
    },
    {
      method: 'GET',
      path: '/articles/:id',
      handler: 'article.findOne',
    },
    {
      method: 'POST',
      path: '/articles',
      handler: 'article.create',
    },
  ],
};
