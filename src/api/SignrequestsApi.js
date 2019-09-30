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
    define(['ApiClient', 'model/InlineResponse2005', 'model/InlineResponse201', 'model/InlineResponse2011', 'model/SignRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2005'), require('../model/InlineResponse201'), require('../model/InlineResponse2011'), require('../model/SignRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.SignrequestClient) {
      root.SignrequestClient = {};
    }
    root.SignrequestClient.SignrequestsApi = factory(root.SignrequestClient.ApiClient, root.SignrequestClient.InlineResponse2005, root.SignrequestClient.InlineResponse201, root.SignrequestClient.InlineResponse2011, root.SignrequestClient.SignRequest);
  }
}(this, function(ApiClient, InlineResponse2005, InlineResponse201, InlineResponse2011, SignRequest) {
  'use strict';

  /**
   * Signrequests service.
   * @module api/SignrequestsApi
   * @version 1.1.0
   */

  /**
   * Constructs a new SignrequestsApi. 
   * @alias module:api/SignrequestsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the signrequestsCancelSignrequest operation.
     * @callback module:api/SignrequestsApi~signrequestsCancelSignrequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a SignRequest
     * 
     * @param {String} uuid 
     * @param {module:api/SignrequestsApi~signrequestsCancelSignrequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */
    this.signrequestsCancelSignrequest = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling signrequestsCancelSignrequest");
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
      var returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/signrequests/{uuid}/cancel_signrequest/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the signrequestsCreate operation.
     * @callback module:api/SignrequestsApi~signrequestsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SignRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a SignRequest
     * 
     * @param {module:model/SignRequest} data 
     * @param {module:api/SignrequestsApi~signrequestsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignRequest}
     */
    this.signrequestsCreate = function(data, callback) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling signrequestsCreate");
      }


      var pathParams = {
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
      var returnType = SignRequest;

      return this.apiClient.callApi(
        '/signrequests/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the signrequestsList operation.
     * @callback module:api/SignrequestsApi~signrequestsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of SignRequests
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.who 
     * @param {String} opts.from_email 
     * @param {Number} opts.page A page number within the paginated result set.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {module:api/SignrequestsApi~signrequestsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */
    this.signrequestsList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'who': opts['who'],
        'from_email': opts['from_email'],
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
      var returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/signrequests/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the signrequestsRead operation.
     * @callback module:api/SignrequestsApi~signrequestsReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SignRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a SignRequest
     * 
     * @param {String} uuid 
     * @param {module:api/SignrequestsApi~signrequestsReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignRequest}
     */
    this.signrequestsRead = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling signrequestsRead");
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
      var returnType = SignRequest;

      return this.apiClient.callApi(
        '/signrequests/{uuid}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the signrequestsResendSignrequestEmail operation.
     * @callback module:api/SignrequestsApi~signrequestsResendSignrequestEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resend a SignRequest
     * 
     * @param {String} uuid 
     * @param {module:api/SignrequestsApi~signrequestsResendSignrequestEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2011}
     */
    this.signrequestsResendSignrequestEmail = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling signrequestsResendSignrequestEmail");
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
      var returnType = InlineResponse2011;

      return this.apiClient.callApi(
        '/signrequests/{uuid}/resend_signrequest_email/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
