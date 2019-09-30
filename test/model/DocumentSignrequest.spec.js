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
    instance = new SignrequestClient.DocumentSignrequest();
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

  describe('DocumentSignrequest', function() {
    it('should create an instance of DocumentSignrequest', function() {
      // uncomment below and update the code to test DocumentSignrequest
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be.a(SignrequestClient.DocumentSignrequest);
    });

    it('should have the property from_email (base name: "from_email")', function() {
      // uncomment below and update the code to test the property from_email
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property from_email_name (base name: "from_email_name")', function() {
      // uncomment below and update the code to test the property from_email_name
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property is_being_prepared (base name: "is_being_prepared")', function() {
      // uncomment below and update the code to test the property is_being_prepared
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property prepare_url (base name: "prepare_url")', function() {
      // uncomment below and update the code to test the property prepare_url
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property redirect_url (base name: "redirect_url")', function() {
      // uncomment below and update the code to test the property redirect_url
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property redirect_url_declined (base name: "redirect_url_declined")', function() {
      // uncomment below and update the code to test the property redirect_url_declined
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property required_attachments (base name: "required_attachments")', function() {
      // uncomment below and update the code to test the property required_attachments
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property disable_attachments (base name: "disable_attachments")', function() {
      // uncomment below and update the code to test the property disable_attachments
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property disable_text_signatures (base name: "disable_text_signatures")', function() {
      // uncomment below and update the code to test the property disable_text_signatures
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property disable_text (base name: "disable_text")', function() {
      // uncomment below and update the code to test the property disable_text
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property disable_date (base name: "disable_date")', function() {
      // uncomment below and update the code to test the property disable_date
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property disable_emails (base name: "disable_emails")', function() {
      // uncomment below and update the code to test the property disable_emails
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property disable_upload_signatures (base name: "disable_upload_signatures")', function() {
      // uncomment below and update the code to test the property disable_upload_signatures
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property disable_blockchain_proof (base name: "disable_blockchain_proof")', function() {
      // uncomment below and update the code to test the property disable_blockchain_proof
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property text_message_verification_locked (base name: "text_message_verification_locked")', function() {
      // uncomment below and update the code to test the property text_message_verification_locked
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property who (base name: "who")', function() {
      // uncomment below and update the code to test the property who
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property send_reminders (base name: "send_reminders")', function() {
      // uncomment below and update the code to test the property send_reminders
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property signers (base name: "signers")', function() {
      // uncomment below and update the code to test the property signers
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new SignrequestClient.DocumentSignrequest();
      //expect(instance).to.be();
    });

  });

}));
