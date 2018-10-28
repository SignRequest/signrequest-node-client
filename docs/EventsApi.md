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
  'document__uuid': "document__uuid_example", // String | 
  'document__external_id': "document__external_id_example", // String | 
  'document__signrequest__who': "document__signrequest__who_example", // String | 
  'document__signrequest__from_email': "document__signrequest__from_email_example", // String | 
  'document__status': "document__status_example", // String | 
  'document__user__email': "document__user__email_example", // String | 
  'document__user__first_name': "document__user__first_name_example", // String | 
  'document__user__last_name': "document__user__last_name_example", // String | 
  'delivered': "delivered_example", // String | 
  'delivered_on': "delivered_on_example", // String | 
  'timestamp': "timestamp_example", // String | 
  'status': "status_example", // String | 
  'event_type': "event_type_example", // String | 
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
 **document__uuid** | **String**|  | [optional] 
 **document__external_id** | **String**|  | [optional] 
 **document__signrequest__who** | **String**|  | [optional] 
 **document__signrequest__from_email** | **String**|  | [optional] 
 **document__status** | **String**|  | [optional] 
 **document__user__email** | **String**|  | [optional] 
 **document__user__first_name** | **String**|  | [optional] 
 **document__user__last_name** | **String**|  | [optional] 
 **delivered** | **String**|  | [optional] 
 **delivered_on** | **String**|  | [optional] 
 **timestamp** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **event_type** | **String**|  | [optional] 
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

