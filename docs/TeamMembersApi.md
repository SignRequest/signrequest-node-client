# SignrequestClient.TeamMembersApi

All URIs are relative to *https://signrequest.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamMembersList**](TeamMembersApi.md#teamMembersList) | **GET** /team-members/ | Retrieve a list of Team Members
[**teamMembersRead**](TeamMembersApi.md#teamMembersRead) | **GET** /team-members/{uuid}/ | Retrieve a Team Member


<a name="teamMembersList"></a>
# **teamMembersList**
> InlineResponse2006 teamMembersList(opts)

Retrieve a list of Team Members



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.TeamMembersApi();

var opts = { 
  'isActive': "isActive_example", // String | 
  'isOwner': "isOwner_example", // String | 
  'isAdmin': "isAdmin_example", // String | 
  'userEmail': "userEmail_example", // String | 
  'userFirstName': "userFirstName_example", // String | 
  'userLastName': "userLastName_example", // String | 
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
apiInstance.teamMembersList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isActive** | **String**|  | [optional] 
 **isOwner** | **String**|  | [optional] 
 **isAdmin** | **String**|  | [optional] 
 **userEmail** | **String**|  | [optional] 
 **userFirstName** | **String**|  | [optional] 
 **userLastName** | **String**|  | [optional] 
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamMembersRead"></a>
# **teamMembersRead**
> TeamMember teamMembersRead(uuid)

Retrieve a Team Member



### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.TeamMembersApi();

var uuid = "uuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamMembersRead(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 

### Return type

[**TeamMember**](TeamMember.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

