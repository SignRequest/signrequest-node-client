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
    instance = new SignrequestClient.InlineResponse200();
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

  describe('InlineResponse200', function() {
    it('should create an instance of InlineResponse200', function() {
      // uncomment below and update the code to test InlineResponse200
      //var instance = new SignrequestClient.InlineResponse200();
      //expect(instance).to.be.a(SignrequestClient.InlineResponse200);
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instance = new SignrequestClient.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property next (base name: "next")', function() {
      // uncomment below and update the code to test the property next
      //var instance = new SignrequestClient.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property previous (base name: "previous")', function() {
      // uncomment below and update the code to test the property previous
      //var instance = new SignrequestClient.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property results (base name: "results")', function() {
      // uncomment below and update the code to test the property results
      //var instance = new SignrequestClient.InlineResponse200();
      //expect(instance).to.be();
    });

  });

}));
