'use strict';

/**
 * credo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::credo.credo');
