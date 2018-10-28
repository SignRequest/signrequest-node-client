# SignrequestClient.SignrequestsApi

All URIs are relative to *https://signrequest.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**signrequestsCancelSignrequest**](SignrequestsApi.md#signrequestsCancelSignrequest) | **POST** /signrequests/{uuid}/cancel_signrequest/ | Cancel a SignRequest
[**signrequestsCreate**](SignrequestsApi.md#signrequestsCreate) | **POST** /signrequests/ | Create a SignRequest
[**signrequestsList**](SignrequestsApi.md#signrequestsList) | **GET** /signrequests/ | Retrieve a list of SignRequests
[**signrequestsRead**](SignrequestsApi.md#signrequestsRead) | **GET** /signrequests/{uuid}/ | Retrieve a SignRequest
[**signrequestsResendSignrequestEmail**](SignrequestsApi.md#signrequestsResendSignrequestEmail) | **POST** /signrequests/{uuid}/resend_signrequest_email/ | Resend a SignRequest


<a name="signrequestsCancelSignrequest"></a>
# **signrequestsCancelSignrequest**
> InlineResponse201 signrequestsCancelSignrequest(uuid)

Cancel a SignRequest



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.SignrequestsApi();

var uuid = "uuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signrequestsCancelSignrequest(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="signrequestsCreate"></a>
# **signrequestsCreate**
> SignRequest signrequestsCreate(data)

Create a SignRequest



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.SignrequestsApi();

var data = new SignrequestClient.SignRequest(); // SignRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signrequestsCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**SignRequest**](SignRequest.md)|  | 

### Return type

[**SignRequest**](SignRequest.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="signrequestsList"></a>
# **signrequestsList**
> InlineResponse2005 signrequestsList(opts)

Retrieve a list of SignRequests



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.SignrequestsApi();

var opts = { 
  'who': "who_example", // String | 
  'from_email': "from_email_example", // String | 
  'page': 56, // Number | A page number within the paginated result set.
  'limit': 56 // Number | Number of results to return per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signrequestsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **who** | **String**|  | [optional] 
 **from_email** | **String**|  | [optional] 
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="signrequestsRead"></a>
# **signrequestsRead**
> SignRequest signrequestsRead(uuid)

Retrieve a SignRequest



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.SignrequestsApi();

var uuid = "uuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signrequestsRead(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 

### Return type

[**SignRequest**](SignRequest.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="signrequestsResendSignrequestEmail"></a>
# **signrequestsResendSignrequestEmail**
> InlineResponse2011 signrequestsResendSignrequestEmail(uuid)

Resend a SignRequest



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.SignrequestsApi();

var uuid = "uuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signrequestsResendSignrequestEmail(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

