# SignrequestClient.WebhooksApi

All URIs are relative to *https://signrequest.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhooksCreate**](WebhooksApi.md#webhooksCreate) | **POST** /webhooks/ | Create a Webhook
[**webhooksDelete**](WebhooksApi.md#webhooksDelete) | **DELETE** /webhooks/{uuid}/ | Delete a Webhook
[**webhooksList**](WebhooksApi.md#webhooksList) | **GET** /webhooks/ | Retrieve a list of Webhooks
[**webhooksPartialUpdate**](WebhooksApi.md#webhooksPartialUpdate) | **PATCH** /webhooks/{uuid}/ | Partially update a Webhook
[**webhooksRead**](WebhooksApi.md#webhooksRead) | **GET** /webhooks/{uuid}/ | Retrieve a Webhook
[**webhooksUpdate**](WebhooksApi.md#webhooksUpdate) | **PUT** /webhooks/{uuid}/ | Update a Webhook


<a name="webhooksCreate"></a>
# **webhooksCreate**
> WebhookSubscription webhooksCreate(data)

Create a Webhook



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.WebhooksApi();

var data = new SignrequestClient.WebhookSubscription(); // WebhookSubscription | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhooksCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**WebhookSubscription**](WebhookSubscription.md)|  | 

### Return type

[**WebhookSubscription**](WebhookSubscription.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhooksDelete"></a>
# **webhooksDelete**
> webhooksDelete(uuid, )

Delete a Webhook



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.WebhooksApi();

var uuid = "uuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webhooksDelete(uuid, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhooksList"></a>
# **webhooksList**
> InlineResponse2009 webhooksList(opts)

Retrieve a list of Webhooks



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.WebhooksApi();

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
apiInstance.webhooksList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhooksPartialUpdate"></a>
# **webhooksPartialUpdate**
> WebhookSubscription webhooksPartialUpdate(uuid, data)

Partially update a Webhook



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.WebhooksApi();

var uuid = "uuid_example"; // String | 

var data = new SignrequestClient.WebhookSubscription(); // WebhookSubscription | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhooksPartialUpdate(uuid, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 
 **data** | [**WebhookSubscription**](WebhookSubscription.md)|  | 

### Return type

[**WebhookSubscription**](WebhookSubscription.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhooksRead"></a>
# **webhooksRead**
> WebhookSubscription webhooksRead(uuid, )

Retrieve a Webhook



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.WebhooksApi();

var uuid = "uuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhooksRead(uuid, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 

### Return type

[**WebhookSubscription**](WebhookSubscription.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhooksUpdate"></a>
# **webhooksUpdate**
> WebhookSubscription webhooksUpdate(uuid, data)

Update a Webhook



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.WebhooksApi();

var uuid = "uuid_example"; // String | 

var data = new SignrequestClient.WebhookSubscription(); // WebhookSubscription | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhooksUpdate(uuid, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 
 **data** | [**WebhookSubscription**](WebhookSubscription.md)|  | 

### Return type

[**WebhookSubscription**](WebhookSubscription.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

