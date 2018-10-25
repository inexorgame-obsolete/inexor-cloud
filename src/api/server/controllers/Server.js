'use strict';

/**
 * Server.js controller
 *
 * @description: A set of functions called "actions" for managing `Server`.
 */

module.exports = {

  /**
   * Retrieve server records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.server.search(ctx.query);
    } else {
      return strapi.services.server.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a server record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.server.fetch(ctx.params);
  },

  /**
   * Count server records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.server.count(ctx.query);
  },

  /**
   * Create a/an server record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.server.add(ctx.request.body);
  },

  /**
   * Update a/an server record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.server.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an server record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.server.remove(ctx.params);
  }
};
