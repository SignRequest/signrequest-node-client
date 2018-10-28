# SignrequestClient.SignrequestQuickCreateApi

All URIs are relative to *https://signrequest.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**signrequestQuickCreateCreate**](SignrequestQuickCreateApi.md#signrequestQuickCreateCreate) | **POST** /signrequest-quick-create/ | Quick create a SignRequest


<a name="signrequestQuickCreateCreate"></a>
# **signrequestQuickCreateCreate**
> SignRequestQuickCreate signrequestQuickCreateCreate(data)

Quick create a SignRequest



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.SignrequestQuickCreateApi();

var data = new SignrequestClient.SignRequestQuickCreate(); // SignRequestQuickCreate | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signrequestQuickCreateCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**SignRequestQuickCreate**](SignRequestQuickCreate.md)|  | 

### Return type

[**SignRequestQuickCreate**](SignRequestQuickCreate.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

