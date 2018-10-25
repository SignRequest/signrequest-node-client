/**
 * SignRequest API
 * API for SignRequest.com
 *
 * OpenAPI spec version: v1
 * Contact: tech-support@signrequest.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse2008', 'model/Template'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2008'), require('../model/Template'));
  } else {
    // Browser globals (root is window)
    if (!root.SignrequestClient) {
      root.SignrequestClient = {};
    }
    root.SignrequestClient.TemplatesApi = factory(root.SignrequestClient.ApiClient, root.SignrequestClient.InlineResponse2008, root.SignrequestClient.Template);
  }
}(this, function(ApiClient, InlineResponse2008, Template) {
  'use strict';

  /**
   * Templates service.
   * @module api/TemplatesApi
   * @version v1
   */

  /**
   * Constructs a new TemplatesApi. 
   * @alias module:api/TemplatesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the templatesList operation.
     * @callback module:api/TemplatesApi~templatesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of Templates
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page A page number within the paginated result set.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {module:api/TemplatesApi~templatesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2008}
     */
    this.templatesList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2008;

      return this.apiClient.callApi(
        '/templates/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the templatesRead operation.
     * @callback module:api/TemplatesApi~templatesReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Template} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Template
     * 
     * @param {String} uuid 
     * @param {module:api/TemplatesApi~templatesReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Template}
     */
    this.templatesRead = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling templatesRead");
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Template;

      return this.apiClient.callApi(
        '/templates/{uuid}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));