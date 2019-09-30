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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SignrequestClient) {
      root.SignrequestClient = {};
    }
    root.SignrequestClient.InlineResponse2011 = factory(root.SignrequestClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse2011 model module.
   * @module model/InlineResponse2011
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>InlineResponse2011</code>.
   * @alias module:model/InlineResponse2011
   * @class
   * @param detail {module:model/InlineResponse2011.DetailEnum} 
   */
  var exports = function(detail) {
    var _this = this;

    _this['detail'] = detail;
  };

  /**
   * Constructs a <code>InlineResponse2011</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2011} obj Optional instance to populate.
   * @return {module:model/InlineResponse2011} The populated <code>InlineResponse2011</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('detail')) {
        obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse2011.DetailEnum} detail
   */
  exports.prototype['detail'] = undefined;


  /**
   * Allowed values for the <code>detail</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DetailEnum = {
    /**
     * value: "OK"
     * @const
     */
    "OK": "OK"  };


  return exports;
}));


