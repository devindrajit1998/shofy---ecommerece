'use strict';

/**
 * free-shipping service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::free-shipping.free-shipping');
