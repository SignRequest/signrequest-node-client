# SignrequestClient.EventsApi

All URIs are relative to *https://signrequest.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsList**](EventsApi.md#eventsList) | **GET** /events/ | Retrieve a list of Events
[**eventsRead**](EventsApi.md#eventsRead) | **GET** /events/{id}/ | Retrieve an Event


<a name="eventsList"></a>
# **eventsList**
> InlineResponse2004 eventsList(opts)

Retrieve a list of Events



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.EventsApi();

var opts = { 
  'documentUuid': "documentUuid_example", // String | 
  'documentExternalId': "documentExternalId_example", // String | 
  'documentSignrequestWho': "documentSignrequestWho_example", // String | 
  'documentSignrequestFromEmail': "documentSignrequestFromEmail_example", // String | 
  'documentStatus': "documentStatus_example", // String | 
  'documentUserEmail': "documentUserEmail_example", // String | 
  'documentUserFirstName': "documentUserFirstName_example", // String | 
  'documentUserLastName': "documentUserLastName_example", // String | 
  'delivered': "delivered_example", // String | 
  'deliveredOn': "deliveredOn_example", // String | 
  'timestamp': "timestamp_example", // String | 
  'status': "status_example", // String | 
  'eventType': "eventType_example", // String | 
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
apiInstance.eventsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentUuid** | **String**|  | [optional] 
 **documentExternalId** | **String**|  | [optional] 
 **documentSignrequestWho** | **String**|  | [optional] 
 **documentSignrequestFromEmail** | **String**|  | [optional] 
 **documentStatus** | **String**|  | [optional] 
 **documentUserEmail** | **String**|  | [optional] 
 **documentUserFirstName** | **String**|  | [optional] 
 **documentUserLastName** | **String**|  | [optional] 
 **delivered** | **String**|  | [optional] 
 **deliveredOn** | **String**|  | [optional] 
 **timestamp** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **eventType** | **String**|  | [optional] 
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventsRead"></a>
# **eventsRead**
> Event eventsRead(id)

Retrieve an Event



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.EventsApi();

var id = 56; // Number | A unique integer value identifying this event.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsRead(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this event. | 

### Return type

[**Event**](Event.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

