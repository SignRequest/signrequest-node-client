/*
 * SignRequest API
 * API for SignRequest.com
 *
 * OpenAPI spec version: v1
 * Contact: tech-support@signrequest.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TeamMember'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TeamMember'));
  } else {
    // Browser globals (root is window)
    if (!root.SignrequestClient) {
      root.SignrequestClient = {};
    }
    root.SignrequestClient.InlineResponse2006 = factory(root.SignrequestClient.ApiClient, root.SignrequestClient.TeamMember);
  }
}(this, function(ApiClient, TeamMember) {
  'use strict';




  /**
   * The InlineResponse2006 model module.
   * @module model/InlineResponse2006
   * @version 1.1.1
   */

  /**
   * Constructs a new <code>InlineResponse2006</code>.
   * @alias module:model/InlineResponse2006
   * @class
   * @param count {Number} 
   * @param results {Array.<module:model/TeamMember>} 
   */
  var exports = function(count, results) {
    var _this = this;

    _this['count'] = count;


    _this['results'] = results;
  };

  /**
   * Constructs a <code>InlineResponse2006</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2006} obj Optional instance to populate.
   * @return {module:model/InlineResponse2006} The populated <code>InlineResponse2006</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('next')) {
        obj['next'] = ApiClient.convertToType(data['next'], 'String');
      }
      if (data.hasOwnProperty('previous')) {
        obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
      }
      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [TeamMember]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * @member {String} next
   */
  exports.prototype['next'] = undefined;
  /**
   * @member {String} previous
   */
  exports.prototype['previous'] = undefined;
  /**
   * @member {Array.<module:model/TeamMember>} results
   */
  exports.prototype['results'] = undefined;



  return exports;
}));


