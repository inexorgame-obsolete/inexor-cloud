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
  },

  /**
   * Add relation to a/an server record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.server.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an server record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.server.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an server record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.server.removeRelation(ctx.params, ctx.request.body);
  }
};
