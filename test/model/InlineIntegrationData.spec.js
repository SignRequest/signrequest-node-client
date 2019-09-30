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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SignrequestClient);
  }
}(this, function(expect, SignrequestClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SignrequestClient.InlineIntegrationData();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineIntegrationData', function() {
    it('should create an instance of InlineIntegrationData', function() {
      // uncomment below and update the code to test InlineIntegrationData
      //var instance = new SignrequestClient.InlineIntegrationData();
      //expect(instance).to.be.a(SignrequestClient.InlineIntegrationData);
    });

    it('should have the property integration (base name: "integration")', function() {
      // uncomment below and update the code to test the property integration
      //var instance = new SignrequestClient.InlineIntegrationData();
      //expect(instance).to.be();
    });

    it('should have the property integration_data (base name: "integration_data")', function() {
      // uncomment below and update the code to test the property integration_data
      //var instance = new SignrequestClient.InlineIntegrationData();
      //expect(instance).to.be();
    });

  });

}));
