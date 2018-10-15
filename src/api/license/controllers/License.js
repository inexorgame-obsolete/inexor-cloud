'use strict';

/**
 * License.js controller
 *
 * @description: A set of functions called "actions" for managing `License`.
 */

module.exports = {

  /**
   * Retrieve license records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.license.search(ctx.query);
    } else {
      return strapi.services.license.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a license record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.license.fetch(ctx.params);
  },

  /**
   * Count license records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.license.count(ctx.query);
  },

  /**
   * Create a/an license record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.license.add(ctx.request.body);
  },

  /**
   * Update a/an license record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.license.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an license record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.license.remove(ctx.params);
  },

  /**
   * Add relation to a/an license record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.license.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an license record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.license.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an license record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.license.removeRelation(ctx.params, ctx.request.body);
  }
};
