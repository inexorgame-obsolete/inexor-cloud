'use strict';

/**
 * Gamemode.js controller
 *
 * @description: A set of functions called "actions" for managing `Gamemode`.
 */

module.exports = {

  /**
   * Retrieve gamemode records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.gamemode.search(ctx.query);
    } else {
      return strapi.services.gamemode.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a gamemode record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.gamemode.fetch(ctx.params);
  },

  /**
   * Count gamemode records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.gamemode.count(ctx.query);
  },

  /**
   * Create a/an gamemode record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.gamemode.add(ctx.request.body);
  },

  /**
   * Update a/an gamemode record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.gamemode.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an gamemode record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.gamemode.remove(ctx.params);
  },

  /**
   * Add relation to a/an gamemode record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.gamemode.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an gamemode record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.gamemode.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an gamemode record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.gamemode.removeRelation(ctx.params, ctx.request.body);
  }
};
