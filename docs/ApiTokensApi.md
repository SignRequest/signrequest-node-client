# SignrequestClient.ApiTokensApi

All URIs are relative to *https://signrequest.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiTokensCreate**](ApiTokensApi.md#apiTokensCreate) | **POST** /api-tokens/ | Create an API token
[**apiTokensDelete**](ApiTokensApi.md#apiTokensDelete) | **DELETE** /api-tokens/{key}/ | Delete an API token
[**apiTokensList**](ApiTokensApi.md#apiTokensList) | **GET** /api-tokens/ | Retrieve a list of API tokens
[**apiTokensRead**](ApiTokensApi.md#apiTokensRead) | **GET** /api-tokens/{key}/ | Retrieve an API token


<a name="apiTokensCreate"></a>
# **apiTokensCreate**
> AuthToken apiTokensCreate(data)

Create an API token

You can create an API token in the [team api settings page](/#/teams). It is also possible to get or create a token using the REST api with your login credentials.

### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.ApiTokensApi();

var data = new SignrequestClient.AuthToken(); // AuthToken | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiTokensCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**AuthToken**](AuthToken.md)|  | 

### Return type

[**AuthToken**](AuthToken.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiTokensDelete"></a>
# **apiTokensDelete**
> apiTokensDelete(key)

Delete an API token



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.ApiTokensApi();

var key = "key_example"; // String | A unique value identifying this api token.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiTokensDelete(key, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| A unique value identifying this api token. | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiTokensList"></a>
# **apiTokensList**
> InlineResponse200 apiTokensList(opts)

Retrieve a list of API tokens



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.ApiTokensApi();

var opts = { 
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
apiInstance.apiTokensList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiTokensRead"></a>
# **apiTokensRead**
> AuthToken apiTokensRead(key)

Retrieve an API token



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.ApiTokensApi();

var key = "key_example"; // String | A unique value identifying this api token.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiTokensRead(key, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| A unique value identifying this api token. | 

### Return type

[**AuthToken**](AuthToken.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

