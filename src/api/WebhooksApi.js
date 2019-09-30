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
    define(['ApiClient', 'model/InlineResponse2009', 'model/WebhookSubscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2009'), require('../model/WebhookSubscription'));
  } else {
    // Browser globals (root is window)
    if (!root.SignrequestClient) {
      root.SignrequestClient = {};
    }
    root.SignrequestClient.WebhooksApi = factory(root.SignrequestClient.ApiClient, root.SignrequestClient.InlineResponse2009, root.SignrequestClient.WebhookSubscription);
  }
}(this, function(ApiClient, InlineResponse2009, WebhookSubscription) {
  'use strict';

  /**
   * Webhooks service.
   * @module api/WebhooksApi
   * @version 1.1.0
   */

  /**
   * Constructs a new WebhooksApi. 
   * @alias module:api/WebhooksApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the webhooksCreate operation.
     * @callback module:api/WebhooksApi~webhooksCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Webhook
     * 
     * @param {module:model/WebhookSubscription} data 
     * @param {module:api/WebhooksApi~webhooksCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */
    this.webhooksCreate = function(data, callback) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling webhooksCreate");
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
      var returnType = WebhookSubscription;

      return this.apiClient.callApi(
        '/webhooks/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webhooksDelete operation.
     * @callback module:api/WebhooksApi~webhooksDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Webhook
     * 
     * @param {String} uuid 
     * @param {module:api/WebhooksApi~webhooksDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.webhooksDelete = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling webhooksDelete");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/webhooks/{uuid}/', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webhooksList operation.
     * @callback module:api/WebhooksApi~webhooksListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2009} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of Webhooks
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page A page number within the paginated result set.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {module:api/WebhooksApi~webhooksListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2009}
     */
    this.webhooksList = function(opts, callback) {
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
      var returnType = InlineResponse2009;

      return this.apiClient.callApi(
        '/webhooks/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webhooksPartialUpdate operation.
     * @callback module:api/WebhooksApi~webhooksPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Partially update a Webhook
     * 
     * @param {String} uuid 
     * @param {module:model/WebhookSubscription} data 
     * @param {module:api/WebhooksApi~webhooksPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */
    this.webhooksPartialUpdate = function(uuid, data, callback) {
      var postBody = data;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling webhooksPartialUpdate");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling webhooksPartialUpdate");
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
      var returnType = WebhookSubscription;

      return this.apiClient.callApi(
        '/webhooks/{uuid}/', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webhooksRead operation.
     * @callback module:api/WebhooksApi~webhooksReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Webhook
     * 
     * @param {String} uuid 
     * @param {module:api/WebhooksApi~webhooksReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */
    this.webhooksRead = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling webhooksRead");
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
      var returnType = WebhookSubscription;

      return this.apiClient.callApi(
        '/webhooks/{uuid}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webhooksUpdate operation.
     * @callback module:api/WebhooksApi~webhooksUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Webhook
     * 
     * @param {String} uuid 
     * @param {module:model/WebhookSubscription} data 
     * @param {module:api/WebhooksApi~webhooksUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */
    this.webhooksUpdate = function(uuid, data, callback) {
      var postBody = data;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling webhooksUpdate");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling webhooksUpdate");
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
      var returnType = WebhookSubscription;

      return this.apiClient.callApi(
        '/webhooks/{uuid}/', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
