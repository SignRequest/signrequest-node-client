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
    define(['ApiClient', 'model/DocumentTeam'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentTeam'));
  } else {
    // Browser globals (root is window)
    if (!root.SignrequestClient) {
      root.SignrequestClient = {};
    }
    root.SignrequestClient.WebhookSubscription = factory(root.SignrequestClient.ApiClient, root.SignrequestClient.DocumentTeam);
  }
}(this, function(ApiClient, DocumentTeam) {
  'use strict';




  /**
   * The WebhookSubscription model module.
   * @module model/WebhookSubscription
   * @version 1.1.1
   */

  /**
   * Constructs a new <code>WebhookSubscription</code>.
   * @alias module:model/WebhookSubscription
   * @class
   * @param event_type {module:model/WebhookSubscription.EventTypeEnum} 
   * @param callback_url {String} 
   */
  var exports = function(event_type, callback_url) {
    var _this = this;




    _this['event_type'] = event_type;
    _this['callback_url'] = callback_url;



  };

  /**
   * Constructs a <code>WebhookSubscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebhookSubscription} obj Optional instance to populate.
   * @return {module:model/WebhookSubscription} The populated <code>WebhookSubscription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('event_type')) {
        obj['event_type'] = ApiClient.convertToType(data['event_type'], 'String');
      }
      if (data.hasOwnProperty('callback_url')) {
        obj['callback_url'] = ApiClient.convertToType(data['callback_url'], 'String');
      }
      if (data.hasOwnProperty('integration')) {
        obj['integration'] = ApiClient.convertToType(data['integration'], 'String');
      }
      if (data.hasOwnProperty('team')) {
        obj['team'] = DocumentTeam.constructFromObject(data['team']);
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * Optional name to easily identify what webhook is used for
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/WebhookSubscription.EventTypeEnum} event_type
   */
  exports.prototype['event_type'] = undefined;
  /**
   * @member {String} callback_url
   */
  exports.prototype['callback_url'] = undefined;
  /**
   * @member {module:model/WebhookSubscription.IntegrationEnum} integration
   */
  exports.prototype['integration'] = undefined;
  /**
   * @member {module:model/DocumentTeam} team
   */
  exports.prototype['team'] = undefined;
  /**
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;


  /**
   * Allowed values for the <code>event_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventTypeEnum = {
    /**
     * value: "convert_error"
     * @const
     */
    "convert_error": "convert_error",
    /**
     * value: "converted"
     * @const
     */
    "converted": "converted",
    /**
     * value: "sending_error"
     * @const
     */
    "sending_error": "sending_error",
    /**
     * value: "sent"
     * @const
     */
    "sent": "sent",
    /**
     * value: "declined"
     * @const
     */
    "declined": "declined",
    /**
     * value: "cancelled"
     * @const
     */
    "cancelled": "cancelled",
    /**
     * value: "expired"
     * @const
     */
    "expired": "expired",
    /**
     * value: "signed"
     * @const
     */
    "signed": "signed",
    /**
     * value: "viewed"
     * @const
     */
    "viewed": "viewed",
    /**
     * value: "downloaded"
     * @const
     */
    "downloaded": "downloaded",
    /**
     * value: "signer_signed"
     * @const
     */
    "signer_signed": "signer_signed",
    /**
     * value: "signer_email_bounced"
     * @const
     */
    "signer_email_bounced": "signer_email_bounced",
    /**
     * value: "signer_viewed_email"
     * @const
     */
    "signer_viewed_email": "signer_viewed_email",
    /**
     * value: "signer_viewed"
     * @const
     */
    "signer_viewed": "signer_viewed",
    /**
     * value: "signer_forwarded"
     * @const
     */
    "signer_forwarded": "signer_forwarded",
    /**
     * value: "signer_downloaded"
     * @const
     */
    "signer_downloaded": "signer_downloaded",
    /**
     * value: "signrequest_received"
     * @const
     */
    "signrequest_received": "signrequest_received"  };

  /**
   * Allowed values for the <code>integration</code> property.
   * @enum {String}
   * @readonly
   */
  exports.IntegrationEnum = {
    /**
     * value: "mfiles"
     * @const
     */
    "mfiles": "mfiles",
    /**
     * value: "salesforce"
     * @const
     */
    "salesforce": "salesforce",
    /**
     * value: "formdesk"
     * @const
     */
    "formdesk": "formdesk",
    /**
     * value: "zapier"
     * @const
     */
    "zapier": "zapier",
    /**
     * value: "txhash"
     * @const
     */
    "txhash": "txhash"  };


  return exports;
}));


