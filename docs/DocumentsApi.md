# SignrequestClient.DocumentsApi

All URIs are relative to *https://signrequest.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**documentsCreate**](DocumentsApi.md#documentsCreate) | **POST** /documents/ | Create a Document
[**documentsDelete**](DocumentsApi.md#documentsDelete) | **DELETE** /documents/{uuid}/ | Delete a Document
[**documentsList**](DocumentsApi.md#documentsList) | **GET** /documents/ | Retrieve a list of Documents
[**documentsRead**](DocumentsApi.md#documentsRead) | **GET** /documents/{uuid}/ | Retrieve a Document


<a name="documentsCreate"></a>
# **documentsCreate**
> Document documentsCreate(data)

Create a Document



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.DocumentsApi();

var data = new SignrequestClient.Document(); // Document | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.documentsCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Document**](Document.md)|  | 

### Return type

[**Document**](Document.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsDelete"></a>
# **documentsDelete**
> documentsDelete(uuid)

Delete a Document



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.DocumentsApi();

var uuid = "uuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.documentsDelete(uuid, callback);
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

<a name="documentsList"></a>
# **documentsList**
> InlineResponse2003 documentsList(opts)

Retrieve a list of Documents



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.DocumentsApi();

var opts = { 
  'external_id': "external_id_example", // String | 
  'signrequest__who': "signrequest__who_example", // String | 
  'signrequest__from_email': "signrequest__from_email_example", // String | 
  'status': "status_example", // String | 
  'user__email': "user__email_example", // String | 
  'user__first_name': "user__first_name_example", // String | 
  'user__last_name': "user__last_name_example", // String | 
  'created': "created_example", // String | 
  'modified': "modified_example", // String | 
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
apiInstance.documentsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_id** | **String**|  | [optional] 
 **signrequest__who** | **String**|  | [optional] 
 **signrequest__from_email** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **user__email** | **String**|  | [optional] 
 **user__first_name** | **String**|  | [optional] 
 **user__last_name** | **String**|  | [optional] 
 **created** | **String**|  | [optional] 
 **modified** | **String**|  | [optional] 
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsRead"></a>
# **documentsRead**
> Document documentsRead(uuid)

Retrieve a Document



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.DocumentsApi();

var uuid = "uuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.documentsRead(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 

### Return type

[**Document**](Document.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

