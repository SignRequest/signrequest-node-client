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
    define(['ApiClient', 'model/InlineResponse2006', 'model/TeamMember'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2006'), require('../model/TeamMember'));
  } else {
    // Browser globals (root is window)
    if (!root.SignrequestClient) {
      root.SignrequestClient = {};
    }
    root.SignrequestClient.TeamMembersApi = factory(root.SignrequestClient.ApiClient, root.SignrequestClient.InlineResponse2006, root.SignrequestClient.TeamMember);
  }
}(this, function(ApiClient, InlineResponse2006, TeamMember) {
  'use strict';

  /**
   * TeamMembers service.
   * @module api/TeamMembersApi
   * @version 1.1.0
   */

  /**
   * Constructs a new TeamMembersApi. 
   * @alias module:api/TeamMembersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the teamMembersList operation.
     * @callback module:api/TeamMembersApi~teamMembersListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of Team Members
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.is_active 
     * @param {String} opts.is_owner 
     * @param {String} opts.is_admin 
     * @param {String} opts.user__email 
     * @param {String} opts.user__first_name 
     * @param {String} opts.user__last_name 
     * @param {Number} opts.page A page number within the paginated result set.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {module:api/TeamMembersApi~teamMembersListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */
    this.teamMembersList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'is_active': opts['is_active'],
        'is_owner': opts['is_owner'],
        'is_admin': opts['is_admin'],
        'user__email': opts['user__email'],
        'user__first_name': opts['user__first_name'],
        'user__last_name': opts['user__last_name'],
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
      var returnType = InlineResponse2006;

      return this.apiClient.callApi(
        '/team-members/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the teamMembersRead operation.
     * @callback module:api/TeamMembersApi~teamMembersReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Team Member
     * 
     * @param {String} uuid 
     * @param {module:api/TeamMembersApi~teamMembersReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamMember}
     */
    this.teamMembersRead = function(uuid, callback) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling teamMembersRead");
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
      var returnType = TeamMember;

      return this.apiClient.callApi(
        '/team-members/{uuid}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
