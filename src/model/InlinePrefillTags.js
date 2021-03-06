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
    root.SignrequestClient.InlinePrefillTags = factory(root.SignrequestClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlinePrefillTags model module.
   * @module model/InlinePrefillTags
   * @version 1.1.1
   */

  /**
   * Constructs a new <code>InlinePrefillTags</code>.
   * Prefill signer input data, see [prefill tags](#section/Preparing-a-document/Prefill-tags-templates)
   * @alias module:model/InlinePrefillTags
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>InlinePrefillTags</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlinePrefillTags} obj Optional instance to populate.
   * @return {module:model/InlinePrefillTags} The populated <code>InlinePrefillTags</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('external_id')) {
        obj['external_id'] = ApiClient.convertToType(data['external_id'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('checkbox_value')) {
        obj['checkbox_value'] = ApiClient.convertToType(data['checkbox_value'], 'Boolean');
      }
      if (data.hasOwnProperty('date_value')) {
        obj['date_value'] = ApiClient.convertToType(data['date_value'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} external_id
   */
  exports.prototype['external_id'] = undefined;
  /**
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * @member {Boolean} checkbox_value
   */
  exports.prototype['checkbox_value'] = undefined;
  /**
   * @member {Date} date_value
   */
  exports.prototype['date_value'] = undefined;



  return exports;
}));


