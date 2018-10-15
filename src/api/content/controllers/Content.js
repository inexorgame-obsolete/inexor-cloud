'use strict';

/**
 * Content.js controller
 *
 * @description: A set of functions called "actions" for managing `Content`.
 */

module.exports = {

  /**
   * Retrieve content records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.content.search(ctx.query);
    } else {
      return strapi.services.content.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a content record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.content.fetch(ctx.params);
  },

  /**
   * Count content records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.content.count(ctx.query);
  },

  /**
   * Create a/an content record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.content.add(ctx.request.body);
  },

  /**
   * Update a/an content record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.content.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an content record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.content.remove(ctx.params);
  },

  /**
   * Add relation to a/an content record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.content.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an content record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.content.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an content record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.content.removeRelation(ctx.params, ctx.request.body);
  }
};
