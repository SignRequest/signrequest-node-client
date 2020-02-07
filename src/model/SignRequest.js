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
    define(['ApiClient', 'model/RequiredAttachment', 'model/Signer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RequiredAttachment'), require('./Signer'));
  } else {
    // Browser globals (root is window)
    if (!root.SignrequestClient) {
      root.SignrequestClient = {};
    }
    root.SignrequestClient.Signrequest = factory(root.SignrequestClient.ApiClient, root.SignrequestClient.RequiredAttachment, root.SignrequestClient.Signer);
  }
}(this, function(ApiClient, RequiredAttachment, Signer) {
  'use strict';




  /**
   * The Signrequest model module.
   * @module model/Signrequest
   * @version 1.1.1
   */

  /**
   * Constructs a new <code>Signrequest</code>.
   * @alias module:model/Signrequest
   * @class
   * @param signers {Array.<module:model/Signer>} 
   * @param document {String} 
   */
  var exports = function(signers, document) {
    var _this = this;




















    _this['signers'] = signers;


    _this['document'] = document;


  };

  /**
   * Constructs a <code>Signrequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Signrequest} obj Optional instance to populate.
   * @return {module:model/Signrequest} The populated <code>Signrequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('from_email')) {
        obj['from_email'] = ApiClient.convertToType(data['from_email'], 'String');
      }
      if (data.hasOwnProperty('from_email_name')) {
        obj['from_email_name'] = ApiClient.convertToType(data['from_email_name'], 'String');
      }
      if (data.hasOwnProperty('is_being_prepared')) {
        obj['is_being_prepared'] = ApiClient.convertToType(data['is_being_prepared'], 'Boolean');
      }
      if (data.hasOwnProperty('prepare_url')) {
        obj['prepare_url'] = ApiClient.convertToType(data['prepare_url'], 'String');
      }
      if (data.hasOwnProperty('redirect_url')) {
        obj['redirect_url'] = ApiClient.convertToType(data['redirect_url'], 'String');
      }
      if (data.hasOwnProperty('redirect_url_declined')) {
        obj['redirect_url_declined'] = ApiClient.convertToType(data['redirect_url_declined'], 'String');
      }
      if (data.hasOwnProperty('required_attachments')) {
        obj['required_attachments'] = ApiClient.convertToType(data['required_attachments'], [RequiredAttachment]);
      }
      if (data.hasOwnProperty('disable_attachments')) {
        obj['disable_attachments'] = ApiClient.convertToType(data['disable_attachments'], 'Boolean');
      }
      if (data.hasOwnProperty('disable_text_signatures')) {
        obj['disable_text_signatures'] = ApiClient.convertToType(data['disable_text_signatures'], 'Boolean');
      }
      if (data.hasOwnProperty('disable_text')) {
        obj['disable_text'] = ApiClient.convertToType(data['disable_text'], 'Boolean');
      }
      if (data.hasOwnProperty('disable_date')) {
        obj['disable_date'] = ApiClient.convertToType(data['disable_date'], 'Boolean');
      }
      if (data.hasOwnProperty('disable_emails')) {
        obj['disable_emails'] = ApiClient.convertToType(data['disable_emails'], 'Boolean');
      }
      if (data.hasOwnProperty('disable_upload_signatures')) {
        obj['disable_upload_signatures'] = ApiClient.convertToType(data['disable_upload_signatures'], 'Boolean');
      }
      if (data.hasOwnProperty('disable_blockchain_proof')) {
        obj['disable_blockchain_proof'] = ApiClient.convertToType(data['disable_blockchain_proof'], 'Boolean');
      }
      if (data.hasOwnProperty('text_message_verification_locked')) {
        obj['text_message_verification_locked'] = ApiClient.convertToType(data['text_message_verification_locked'], 'Boolean');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('who')) {
        obj['who'] = ApiClient.convertToType(data['who'], 'String');
      }
      if (data.hasOwnProperty('send_reminders')) {
        obj['send_reminders'] = ApiClient.convertToType(data['send_reminders'], 'Boolean');
      }
      if (data.hasOwnProperty('signers')) {
        obj['signers'] = ApiClient.convertToType(data['signers'], [Signer]);
      }
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('document')) {
        obj['document'] = ApiClient.convertToType(data['document'], 'String');
      }
      if (data.hasOwnProperty('integration')) {
        obj['integration'] = ApiClient.convertToType(data['integration'], 'String');
      }
      if (data.hasOwnProperty('integration_data')) {
        obj['integration_data'] = ApiClient.convertToType(data['integration_data'], 'String');
      }
    }
    return obj;
  }

  /**
   * Email of user sending the SignRequest (must be a validated email)
   * @member {String} from_email
   */
  exports.prototype['from_email'] = undefined;
  /**
   * Name to be used in the `From` email header, e.g. `{from_email_name} <no-reply@signrequest.com>`
   * @member {String} from_email_name
   */
  exports.prototype['from_email_name'] = undefined;
  /**
   * Have the sender of a SignRequest prepare the document before sending the request out, see: [prepare using the web interface](#section/Preparing-a-document/Prepare-using-the-web-interface)
   * @member {Boolean} is_being_prepared
   */
  exports.prototype['is_being_prepared'] = undefined;
  /**
   * @member {String} prepare_url
   */
  exports.prototype['prepare_url'] = undefined;
  /**
   * URL at which SignRequest will redirect to when a document is signed
   * @member {String} redirect_url
   */
  exports.prototype['redirect_url'] = undefined;
  /**
   * URL at which SignRequest will redirect to when a document is declined
   * @member {String} redirect_url_declined
   */
  exports.prototype['redirect_url_declined'] = undefined;
  /**
   * Attachments that signers are required to upload
   * @member {Array.<module:model/RequiredAttachment>} required_attachments
   */
  exports.prototype['required_attachments'] = undefined;
  /**
   * Disable uploading/adding of attachments
   * @member {Boolean} disable_attachments
   */
  exports.prototype['disable_attachments'] = undefined;
  /**
   * Disable usage of signatures generated by typing (text)
   * @member {Boolean} disable_text_signatures
   */
  exports.prototype['disable_text_signatures'] = undefined;
  /**
   * Disable adding of text
   * @member {Boolean} disable_text
   */
  exports.prototype['disable_text'] = undefined;
  /**
   * Disable adding of dates
   * @member {Boolean} disable_date
   */
  exports.prototype['disable_date'] = undefined;
  /**
   * Disable all SignRequest status emails as well as the email that contains the signed documents
   * @member {Boolean} disable_emails
   */
  exports.prototype['disable_emails'] = undefined;
  /**
   * Disable usage of uploaded signatures (images)
   * @member {Boolean} disable_upload_signatures
   */
  exports.prototype['disable_upload_signatures'] = undefined;
  /**
   * Disables storing timestamp proof hashes in blockchain integrations.
   * @member {Boolean} disable_blockchain_proof
   */
  exports.prototype['disable_blockchain_proof'] = undefined;
  /**
   * When true a text message verification is needed before the signer can see the document
   * @member {Boolean} text_message_verification_locked
   */
  exports.prototype['text_message_verification_locked'] = undefined;
  /**
   * Subject of SignRequest email
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * Message to include in SignRequest email, may contain the following html tags: `a`, `abbr`, `acronym`, `b`, `blockquote`, `code`, `em`, `i`, `ul`, `li`, `ol`, and `strong`
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * `m`: only me, `mo`: me and others, `o`: only others
   * @member {module:model/Signrequest.WhoEnum} who
   * @default 'o'
   */
  exports.prototype['who'] = 'o';
  /**
   * Automatically remind signers to sign a document
   * @member {Boolean} send_reminders
   */
  exports.prototype['send_reminders'] = undefined;
  /**
   * @member {Array.<module:model/Signer>} signers
   */
  exports.prototype['signers'] = undefined;
  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {String} document
   */
  exports.prototype['document'] = undefined;
  /**
   * @member {module:model/Signrequest.IntegrationEnum} integration
   */
  exports.prototype['integration'] = undefined;
  /**
   * @member {String} integration_data
   */
  exports.prototype['integration_data'] = undefined;


  /**
   * Allowed values for the <code>who</code> property.
   * @enum {String}
   * @readonly
   */
  exports.WhoEnum = {
    /**
     * value: "m"
     * @const
     */
    "m": "m",
    /**
     * value: "mo"
     * @const
     */
    "mo": "mo",
    /**
     * value: "o"
     * @const
     */
    "o": "o"  };

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


