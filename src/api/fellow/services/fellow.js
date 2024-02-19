'use strict';

/**
 * fellow service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fellow.fellow');
