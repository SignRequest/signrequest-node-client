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
    define(['ApiClient', 'model/RequiredAttachment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RequiredAttachment'));
  } else {
    // Browser globals (root is window)
    if (!root.SignrequestClient) {
      root.SignrequestClient = {};
    }
    root.SignrequestClient.SignerAttachment = factory(root.SignrequestClient.ApiClient, root.SignrequestClient.RequiredAttachment);
  }
}(this, function(ApiClient, RequiredAttachment) {
  'use strict';




  /**
   * The SignerAttachment model module.
   * @module model/SignerAttachment
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>SignerAttachment</code>.
   * @alias module:model/SignerAttachment
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SignerAttachment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignerAttachment} obj Optional instance to populate.
   * @return {module:model/SignerAttachment} The populated <code>SignerAttachment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('file')) {
        obj['file'] = ApiClient.convertToType(data['file'], 'String');
      }
      if (data.hasOwnProperty('for_attachment')) {
        obj['for_attachment'] = RequiredAttachment.constructFromObject(data['for_attachment']);
      }
    }
    return obj;
  }

  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * Defaults to filename
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} file
   */
  exports.prototype['file'] = undefined;
  /**
   * @member {module:model/RequiredAttachment} for_attachment
   */
  exports.prototype['for_attachment'] = undefined;



  return exports;
}));


