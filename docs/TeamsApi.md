# SignrequestClient.TeamsApi

All URIs are relative to *https://signrequest.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamsCreate**](TeamsApi.md#teamsCreate) | **POST** /teams/ | Create a Team
[**teamsDelete**](TeamsApi.md#teamsDelete) | **DELETE** /teams/{subdomain}/ | Delete a Team
[**teamsInviteMember**](TeamsApi.md#teamsInviteMember) | **POST** /teams/{subdomain}/invite_member/ | Invite a Team Member
[**teamsList**](TeamsApi.md#teamsList) | **GET** /teams/ | Retrieve a list of Teams
[**teamsPartialUpdate**](TeamsApi.md#teamsPartialUpdate) | **PATCH** /teams/{subdomain}/ | Update a Team
[**teamsRead**](TeamsApi.md#teamsRead) | **GET** /teams/{subdomain}/ | Retrieve a Team


<a name="teamsCreate"></a>
# **teamsCreate**
> Team teamsCreate(data)

Create a Team

Required fields are **name** and **subdomain** where the subdomain is globally unique. Use **POST** to create a Team. To update a field on a Team use **PATCH**.  To use the API on behalf of a particular team change the endpoint to: *https://_**{{ subdomain }}**.signrequest.com/api/v1/...*  To invite new team members you can use **POST** {\&quot;email\&quot;:\&quot;**email-of-member-to-invite@example.com**\&quot;,\&quot;is_admin\&quot;:false,\&quot;is_owner\&quot;:false} to: *https://signrequest.com/api/v1/teams/_**{{ subdomain }}**_/invite_member/_*

### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.TeamsApi();

var data = new SignrequestClient.Team(); // Team | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Team**](Team.md)|  | 

### Return type

[**Team**](Team.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamsDelete"></a>
# **teamsDelete**
> teamsDelete(subdomain, )

Delete a Team

Required fields are **name** and **subdomain** where the subdomain is globally unique. Use **POST** to create a Team. To update a field on a Team use **PATCH**.  To use the API on behalf of a particular team change the endpoint to: *https://_**{{ subdomain }}**.signrequest.com/api/v1/...*  To invite new team members you can use **POST** {\&quot;email\&quot;:\&quot;**email-of-member-to-invite@example.com**\&quot;,\&quot;is_admin\&quot;:false,\&quot;is_owner\&quot;:false} to: *https://signrequest.com/api/v1/teams/_**{{ subdomain }}**_/invite_member/_*

### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.TeamsApi();

var subdomain = "subdomain_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.teamsDelete(subdomain, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subdomain** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamsInviteMember"></a>
# **teamsInviteMember**
> InviteMember teamsInviteMember(subdomain, data)

Invite a Team Member

Required fields are **name** and **subdomain** where the subdomain is globally unique. Use **POST** to create a Team. To update a field on a Team use **PATCH**.  To use the API on behalf of a particular team change the endpoint to: *https://_**{{ subdomain }}**.signrequest.com/api/v1/...*  To invite new team members you can use **POST** {\&quot;email\&quot;:\&quot;**email-of-member-to-invite@example.com**\&quot;,\&quot;is_admin\&quot;:false,\&quot;is_owner\&quot;:false} to: *https://signrequest.com/api/v1/teams/_**{{ subdomain }}**_/invite_member/_*

### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.TeamsApi();

var subdomain = "subdomain_example"; // String | 

var data = new SignrequestClient.InviteMember(); // InviteMember | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsInviteMember(subdomain, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subdomain** | **String**|  | 
 **data** | [**InviteMember**](InviteMember.md)|  | 

### Return type

[**InviteMember**](InviteMember.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamsList"></a>
# **teamsList**
> InlineResponse2007 teamsList(opts)

Retrieve a list of Teams

Required fields are **name** and **subdomain** where the subdomain is globally unique. Use **POST** to create a Team. To update a field on a Team use **PATCH**.  To use the API on behalf of a particular team change the endpoint to: *https://_**{{ subdomain }}**.signrequest.com/api/v1/...*  To invite new team members you can use **POST** {\&quot;email\&quot;:\&quot;**email-of-member-to-invite@example.com**\&quot;,\&quot;is_admin\&quot;:false,\&quot;is_owner\&quot;:false} to: *https://signrequest.com/api/v1/teams/_**{{ subdomain }}**_/invite_member/_*

### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.TeamsApi();

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
apiInstance.teamsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamsPartialUpdate"></a>
# **teamsPartialUpdate**
> Team teamsPartialUpdate(subdomain, data)

Update a Team

Required fields are **name** and **subdomain** where the subdomain is globally unique. Use **POST** to create a Team. To update a field on a Team use **PATCH**.  To use the API on behalf of a particular team change the endpoint to: *https://_**{{ subdomain }}**.signrequest.com/api/v1/...*  To invite new team members you can use **POST** {\&quot;email\&quot;:\&quot;**email-of-member-to-invite@example.com**\&quot;,\&quot;is_admin\&quot;:false,\&quot;is_owner\&quot;:false} to: *https://signrequest.com/api/v1/teams/_**{{ subdomain }}**_/invite_member/_*

### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.TeamsApi();

var subdomain = "subdomain_example"; // String | 

var data = new SignrequestClient.Team(); // Team | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsPartialUpdate(subdomain, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subdomain** | **String**|  | 
 **data** | [**Team**](Team.md)|  | 

### Return type

[**Team**](Team.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamsRead"></a>
# **teamsRead**
> Team teamsRead(subdomain, )

Retrieve a Team

Required fields are **name** and **subdomain** where the subdomain is globally unique. Use **POST** to create a Team. To update a field on a Team use **PATCH**.  To use the API on behalf of a particular team change the endpoint to: *https://_**{{ subdomain }}**.signrequest.com/api/v1/...*  To invite new team members you can use **POST** {\&quot;email\&quot;:\&quot;**email-of-member-to-invite@example.com**\&quot;,\&quot;is_admin\&quot;:false,\&quot;is_owner\&quot;:false} to: *https://signrequest.com/api/v1/teams/_**{{ subdomain }}**_/invite_member/_*

### Example
```javascript
var SignrequestClient = require('signrequest-client');
var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var apiInstance = new SignrequestClient.TeamsApi();

var subdomain = "subdomain_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsRead(subdomain, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subdomain** | **String**|  | 

### Return type

[**Team**](Team.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

