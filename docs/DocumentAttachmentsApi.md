# SignrequestClient.DocumentAttachmentsApi

All URIs are relative to *https://signrequest.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**documentAttachmentsCreate**](DocumentAttachmentsApi.md#documentAttachmentsCreate) | **POST** /document-attachments/ | Create a Document Attachment
[**documentAttachmentsList**](DocumentAttachmentsApi.md#documentAttachmentsList) | **GET** /document-attachments/ | Retrieve a list of Document Attachments
[**documentAttachmentsRead**](DocumentAttachmentsApi.md#documentAttachmentsRead) | **GET** /document-attachments/{uuid}/ | Retrieve a Document Attachment


<a name="documentAttachmentsCreate"></a>
# **documentAttachmentsCreate**
> DocumentAttachment documentAttachmentsCreate(data)

Create a Document Attachment



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.DocumentAttachmentsApi();

var data = new SignrequestClient.DocumentAttachment(); // DocumentAttachment | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.documentAttachmentsCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**DocumentAttachment**](DocumentAttachment.md)|  | 

### Return type

[**DocumentAttachment**](DocumentAttachment.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentAttachmentsList"></a>
# **documentAttachmentsList**
> InlineResponse2001 documentAttachmentsList(opts)

Retrieve a list of Document Attachments



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.DocumentAttachmentsApi();

var opts = { 
  'document__uuid': "document__uuid_example", // String | 
  'document__external_id': "document__external_id_example", // String | 
  'created': "created_example", // String | 
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
apiInstance.documentAttachmentsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document__uuid** | **String**|  | [optional] 
 **document__external_id** | **String**|  | [optional] 
 **created** | **String**|  | [optional] 
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentAttachmentsRead"></a>
# **documentAttachmentsRead**
> DocumentAttachment documentAttachmentsRead(uuid)

Retrieve a Document Attachment



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.DocumentAttachmentsApi();

var uuid = "uuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.documentAttachmentsRead(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 

### Return type

[**DocumentAttachment**](DocumentAttachment.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

