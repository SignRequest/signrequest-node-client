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
    define(['ApiClient', 'model/InlineResponse2007', 'model/InviteMember', 'model/Team'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2007'), require('../model/InviteMember'), require('../model/Team'));
  } else {
    // Browser globals (root is window)
    if (!root.SignrequestClient) {
      root.SignrequestClient = {};
    }
    root.SignrequestClient.TeamsApi = factory(root.SignrequestClient.ApiClient, root.SignrequestClient.InlineResponse2007, root.SignrequestClient.InviteMember, root.SignrequestClient.Team);
  }
}(this, function(ApiClient, InlineResponse2007, InviteMember, Team) {
  'use strict';

  /**
   * Teams service.
   * @module api/TeamsApi
   * @version 1.1.1
   */

  /**
   * Constructs a new TeamsApi. 
   * @alias module:api/TeamsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the teamsCreate operation.
     * @callback module:api/TeamsApi~teamsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Team} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Team
     * Required fields are **name** and **subdomain** where the subdomain is globally unique. Use **POST** to create a Team. To update a field on a Team use **PATCH**.  To use the API on behalf of a particular team change the endpoint to: *https://_**{{ subdomain }}**.signrequest.com/api/v1/...*  To invite new team members you can use **POST** {\&quot;email\&quot;:\&quot;**email-of-member-to-invite@example.com**\&quot;,\&quot;is_admin\&quot;:false,\&quot;is_owner\&quot;:false} to: *https://signrequest.com/api/v1/teams/_**{{ subdomain }}**_/invite_member/_*
     * @param {module:model/Team} data 
     * @param {module:api/TeamsApi~teamsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Team}
     */
    this.teamsCreate = function(data, callback) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling teamsCreate");
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
      var returnType = Team;

      return this.apiClient.callApi(
        '/teams/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the teamsDelete operation.
     * @callback module:api/TeamsApi~teamsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Team
     * Required fields are **name** and **subdomain** where the subdomain is globally unique. Use **POST** to create a Team. To update a field on a Team use **PATCH**.  To use the API on behalf of a particular team change the endpoint to: *https://_**{{ subdomain }}**.signrequest.com/api/v1/...*  To invite new team members you can use **POST** {\&quot;email\&quot;:\&quot;**email-of-member-to-invite@example.com**\&quot;,\&quot;is_admin\&quot;:false,\&quot;is_owner\&quot;:false} to: *https://signrequest.com/api/v1/teams/_**{{ subdomain }}**_/invite_member/_*
     * @param {String} subdomain 
     * @param {module:api/TeamsApi~teamsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.teamsDelete = function(subdomain, callback) {
      var postBody = null;

      // verify the required parameter 'subdomain' is set
      if (subdomain === undefined || subdomain === null) {
        throw new Error("Missing the required parameter 'subdomain' when calling teamsDelete");
      }


      var pathParams = {
        'subdomain': subdomain
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
        '/teams/{subdomain}/', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the teamsInviteMember operation.
     * @callback module:api/TeamsApi~teamsInviteMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InviteMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Invite a Team Member
     * Required fields are **name** and **subdomain** where the subdomain is globally unique. Use **POST** to create a Team. To update a field on a Team use **PATCH**.  To use the API on behalf of a particular team change the endpoint to: *https://_**{{ subdomain }}**.signrequest.com/api/v1/...*  To invite new team members you can use **POST** {\&quot;email\&quot;:\&quot;**email-of-member-to-invite@example.com**\&quot;,\&quot;is_admin\&quot;:false,\&quot;is_owner\&quot;:false} to: *https://signrequest.com/api/v1/teams/_**{{ subdomain }}**_/invite_member/_*
     * @param {String} subdomain 
     * @param {module:model/InviteMember} data 
     * @param {module:api/TeamsApi~teamsInviteMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InviteMember}
     */
    this.teamsInviteMember = function(subdomain, data, callback) {
      var postBody = data;

      // verify the required parameter 'subdomain' is set
      if (subdomain === undefined || subdomain === null) {
        throw new Error("Missing the required parameter 'subdomain' when calling teamsInviteMember");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling teamsInviteMember");
      }


      var pathParams = {
        'subdomain': subdomain
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
      var returnType = InviteMember;

      return this.apiClient.callApi(
        '/teams/{subdomain}/invite_member/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the teamsList operation.
     * @callback module:api/TeamsApi~teamsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of Teams
     * Required fields are **name** and **subdomain** where the subdomain is globally unique. Use **POST** to create a Team. To update a field on a Team use **PATCH**.  To use the API on behalf of a particular team change the endpoint to: *https://_**{{ subdomain }}**.signrequest.com/api/v1/...*  To invite new team members you can use **POST** {\&quot;email\&quot;:\&quot;**email-of-member-to-invite@example.com**\&quot;,\&quot;is_admin\&quot;:false,\&quot;is_owner\&quot;:false} to: *https://signrequest.com/api/v1/teams/_**{{ subdomain }}**_/invite_member/_*
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page A page number within the paginated result set.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {module:api/TeamsApi~teamsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */
    this.teamsList = function(opts, callback) {
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
      var returnType = InlineResponse2007;

      return this.apiClient.callApi(
        '/teams/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the teamsPartialUpdate operation.
     * @callback module:api/TeamsApi~teamsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Team} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Team
     * Required fields are **name** and **subdomain** where the subdomain is globally unique. Use **POST** to create a Team. To update a field on a Team use **PATCH**.  To use the API on behalf of a particular team change the endpoint to: *https://_**{{ subdomain }}**.signrequest.com/api/v1/...*  To invite new team members you can use **POST** {\&quot;email\&quot;:\&quot;**email-of-member-to-invite@example.com**\&quot;,\&quot;is_admin\&quot;:false,\&quot;is_owner\&quot;:false} to: *https://signrequest.com/api/v1/teams/_**{{ subdomain }}**_/invite_member/_*
     * @param {String} subdomain 
     * @param {module:model/Team} data 
     * @param {module:api/TeamsApi~teamsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Team}
     */
    this.teamsPartialUpdate = function(subdomain, data, callback) {
      var postBody = data;

      // verify the required parameter 'subdomain' is set
      if (subdomain === undefined || subdomain === null) {
        throw new Error("Missing the required parameter 'subdomain' when calling teamsPartialUpdate");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling teamsPartialUpdate");
      }


      var pathParams = {
        'subdomain': subdomain
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
      var returnType = Team;

      return this.apiClient.callApi(
        '/teams/{subdomain}/', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the teamsRead operation.
     * @callback module:api/TeamsApi~teamsReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Team} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Team
     * Required fields are **name** and **subdomain** where the subdomain is globally unique. Use **POST** to create a Team. To update a field on a Team use **PATCH**.  To use the API on behalf of a particular team change the endpoint to: *https://_**{{ subdomain }}**.signrequest.com/api/v1/...*  To invite new team members you can use **POST** {\&quot;email\&quot;:\&quot;**email-of-member-to-invite@example.com**\&quot;,\&quot;is_admin\&quot;:false,\&quot;is_owner\&quot;:false} to: *https://signrequest.com/api/v1/teams/_**{{ subdomain }}**_/invite_member/_*
     * @param {String} subdomain 
     * @param {module:api/TeamsApi~teamsReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Team}
     */
    this.teamsRead = function(subdomain, callback) {
      var postBody = null;

      // verify the required parameter 'subdomain' is set
      if (subdomain === undefined || subdomain === null) {
        throw new Error("Missing the required parameter 'subdomain' when calling teamsRead");
      }


      var pathParams = {
        'subdomain': subdomain
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
      var returnType = Team;

      return this.apiClient.callApi(
        '/teams/{subdomain}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
