'use strict';

/**
 * workout-session service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workout-session.workout-session');
