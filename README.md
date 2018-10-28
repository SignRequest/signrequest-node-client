# signrequest-client

SignrequestClient - JavaScript client for SignRequest.com

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Then install it via:

```shell
npm install signrequest-client --save
```

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SignrequestClient = require("signrequest-client");

var defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications["Token"];
Token.apiKey = "YOUR API KEY";
Token.apiKeyPrefix["Authorization"] = "Token";

var api = new SignrequestClient.DocumentsApi();

var data = new SignrequestClient.Document();
data.fileFromUrl =
  "https://docs.google.com/document/d/1oI2R1SxfMNZXiz3jCQvorpoklF9xq_dCJnOpkI-zo80/edit?usp=sharing";

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
};
api.documentsCreate(data, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://signrequest.com/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SignrequestClient.ApiTokensApi* | [**apiTokensCreate**](docs/ApiTokensApi.md#apiTokensCreate) | **POST** /api-tokens/ | Create an API token
*SignrequestClient.ApiTokensApi* | [**apiTokensDelete**](docs/ApiTokensApi.md#apiTokensDelete) | **DELETE** /api-tokens/{key}/ | Delete an API token
*SignrequestClient.ApiTokensApi* | [**apiTokensList**](docs/ApiTokensApi.md#apiTokensList) | **GET** /api-tokens/ | Retrieve a list of API tokens
*SignrequestClient.ApiTokensApi* | [**apiTokensRead**](docs/ApiTokensApi.md#apiTokensRead) | **GET** /api-tokens/{key}/ | Retrieve an API token
*SignrequestClient.DocumentAttachmentsApi* | [**documentAttachmentsCreate**](docs/DocumentAttachmentsApi.md#documentAttachmentsCreate) | **POST** /document-attachments/ | Create a Document Attachment
*SignrequestClient.DocumentAttachmentsApi* | [**documentAttachmentsList**](docs/DocumentAttachmentsApi.md#documentAttachmentsList) | **GET** /document-attachments/ | Retrieve a list of Document Attachments
*SignrequestClient.DocumentAttachmentsApi* | [**documentAttachmentsRead**](docs/DocumentAttachmentsApi.md#documentAttachmentsRead) | **GET** /document-attachments/{uuid}/ | Retrieve a Document Attachment
*SignrequestClient.DocumentsApi* | [**documentsCreate**](docs/DocumentsApi.md#documentsCreate) | **POST** /documents/ | Create a Document
*SignrequestClient.DocumentsApi* | [**documentsDelete**](docs/DocumentsApi.md#documentsDelete) | **DELETE** /documents/{uuid}/ | Delete a Document
*SignrequestClient.DocumentsApi* | [**documentsList**](docs/DocumentsApi.md#documentsList) | **GET** /documents/ | Retrieve a list of Documents
*SignrequestClient.DocumentsApi* | [**documentsRead**](docs/DocumentsApi.md#documentsRead) | **GET** /documents/{uuid}/ | Retrieve a Document
*SignrequestClient.DocumentsSearchApi* | [**documentsSearchList**](docs/DocumentsSearchApi.md#documentsSearchList) | **GET** /documents-search/ | Search documents
*SignrequestClient.EventsApi* | [**eventsList**](docs/EventsApi.md#eventsList) | **GET** /events/ | Retrieve a list of Events
*SignrequestClient.EventsApi* | [**eventsRead**](docs/EventsApi.md#eventsRead) | **GET** /events/{id}/ | Retrieve an Event
*SignrequestClient.SignrequestQuickCreateApi* | [**signrequestQuickCreateCreate**](docs/SignrequestQuickCreateApi.md#signrequestQuickCreateCreate) | **POST** /signrequest-quick-create/ | Quick create a SignRequest
*SignrequestClient.SignrequestsApi* | [**signrequestsCancelSignrequest**](docs/SignrequestsApi.md#signrequestsCancelSignrequest) | **POST** /signrequests/{uuid}/cancel_signrequest/ | Cancel a SignRequest
*SignrequestClient.SignrequestsApi* | [**signrequestsCreate**](docs/SignrequestsApi.md#signrequestsCreate) | **POST** /signrequests/ | Create a SignRequest
*SignrequestClient.SignrequestsApi* | [**signrequestsList**](docs/SignrequestsApi.md#signrequestsList) | **GET** /signrequests/ | Retrieve a list of SignRequests
*SignrequestClient.SignrequestsApi* | [**signrequestsRead**](docs/SignrequestsApi.md#signrequestsRead) | **GET** /signrequests/{uuid}/ | Retrieve a SignRequest
*SignrequestClient.SignrequestsApi* | [**signrequestsResendSignrequestEmail**](docs/SignrequestsApi.md#signrequestsResendSignrequestEmail) | **POST** /signrequests/{uuid}/resend_signrequest_email/ | Resend a SignRequest
*SignrequestClient.TeamMembersApi* | [**teamMembersList**](docs/TeamMembersApi.md#teamMembersList) | **GET** /team-members/ | Retrieve a list of Team Members
*SignrequestClient.TeamMembersApi* | [**teamMembersRead**](docs/TeamMembersApi.md#teamMembersRead) | **GET** /team-members/{uuid}/ | Retrieve a Team Member
*SignrequestClient.TeamsApi* | [**teamsCreate**](docs/TeamsApi.md#teamsCreate) | **POST** /teams/ | Create a Team
*SignrequestClient.TeamsApi* | [**teamsInviteMember**](docs/TeamsApi.md#teamsInviteMember) | **POST** /teams/{subdomain}/invite_member/ | Invite a Team Member
*SignrequestClient.TeamsApi* | [**teamsList**](docs/TeamsApi.md#teamsList) | **GET** /teams/ | Retrieve a list of Teams
*SignrequestClient.TeamsApi* | [**teamsPartialUpdate**](docs/TeamsApi.md#teamsPartialUpdate) | **PATCH** /teams/{subdomain}/ | Update a Team
*SignrequestClient.TeamsApi* | [**teamsRead**](docs/TeamsApi.md#teamsRead) | **GET** /teams/{subdomain}/ | Retrieve a Team
*SignrequestClient.TemplatesApi* | [**templatesList**](docs/TemplatesApi.md#templatesList) | **GET** /templates/ | Retrieve a list of Templates
*SignrequestClient.TemplatesApi* | [**templatesRead**](docs/TemplatesApi.md#templatesRead) | **GET** /templates/{uuid}/ | Retrieve a Template
*SignrequestClient.WebhooksApi* | [**webhooksCreate**](docs/WebhooksApi.md#webhooksCreate) | **POST** /webhooks/ | Create a Webhook
*SignrequestClient.WebhooksApi* | [**webhooksDelete**](docs/WebhooksApi.md#webhooksDelete) | **DELETE** /webhooks/{uuid}/ | Delete a Webhook
*SignrequestClient.WebhooksApi* | [**webhooksList**](docs/WebhooksApi.md#webhooksList) | **GET** /webhooks/ | Retrieve a list of Webhooks
*SignrequestClient.WebhooksApi* | [**webhooksPartialUpdate**](docs/WebhooksApi.md#webhooksPartialUpdate) | **PATCH** /webhooks/{uuid}/ | Partially update a Webhook
*SignrequestClient.WebhooksApi* | [**webhooksRead**](docs/WebhooksApi.md#webhooksRead) | **GET** /webhooks/{uuid}/ | Retrieve a Webhook
*SignrequestClient.WebhooksApi* | [**webhooksUpdate**](docs/WebhooksApi.md#webhooksUpdate) | **PUT** /webhooks/{uuid}/ | Update a Webhook


## Documentation for Models

 - [SignrequestClient.AuthToken](docs/AuthToken.md)
 - [SignrequestClient.Document](docs/Document.md)
 - [SignrequestClient.DocumentAttachment](docs/DocumentAttachment.md)
 - [SignrequestClient.DocumentSearch](docs/DocumentSearch.md)
 - [SignrequestClient.DocumentSignerTemplateConf](docs/DocumentSignerTemplateConf.md)
 - [SignrequestClient.Event](docs/Event.md)
 - [SignrequestClient.FileFromSf](docs/FileFromSf.md)
 - [SignrequestClient.InlineDocumentSignerIntegrationData](docs/InlineDocumentSignerIntegrationData.md)
 - [SignrequestClient.InlineIntegrationData](docs/InlineIntegrationData.md)
 - [SignrequestClient.InlinePrefillTags](docs/InlinePrefillTags.md)
 - [SignrequestClient.InlineResponse200](docs/InlineResponse200.md)
 - [SignrequestClient.InlineResponse2001](docs/InlineResponse2001.md)
 - [SignrequestClient.InlineResponse2002](docs/InlineResponse2002.md)
 - [SignrequestClient.InlineResponse2003](docs/InlineResponse2003.md)
 - [SignrequestClient.InlineResponse2004](docs/InlineResponse2004.md)
 - [SignrequestClient.InlineResponse2005](docs/InlineResponse2005.md)
 - [SignrequestClient.InlineResponse2006](docs/InlineResponse2006.md)
 - [SignrequestClient.InlineResponse2007](docs/InlineResponse2007.md)
 - [SignrequestClient.InlineResponse2008](docs/InlineResponse2008.md)
 - [SignrequestClient.InlineResponse2009](docs/InlineResponse2009.md)
 - [SignrequestClient.InlineResponse201](docs/InlineResponse201.md)
 - [SignrequestClient.InlineResponse2011](docs/InlineResponse2011.md)
 - [SignrequestClient.InlineSignRequest](docs/InlineSignRequest.md)
 - [SignrequestClient.InlineTeam](docs/InlineTeam.md)
 - [SignrequestClient.InlineTeamMember](docs/InlineTeamMember.md)
 - [SignrequestClient.InviteMember](docs/InviteMember.md)
 - [SignrequestClient.Placeholder](docs/Placeholder.md)
 - [SignrequestClient.RequiredAttachment](docs/RequiredAttachment.md)
 - [SignrequestClient.SignRequest](docs/SignRequest.md)
 - [SignrequestClient.SignRequestQuickCreate](docs/SignRequestQuickCreate.md)
 - [SignrequestClient.Signer](docs/Signer.md)
 - [SignrequestClient.SignerAttachment](docs/SignerAttachment.md)
 - [SignrequestClient.SignerInputs](docs/SignerInputs.md)
 - [SignrequestClient.SigningLog](docs/SigningLog.md)
 - [SignrequestClient.Signrequest](docs/Signrequest.md)
 - [SignrequestClient.Team](docs/Team.md)
 - [SignrequestClient.Team1](docs/Team1.md)
 - [SignrequestClient.TeamMember](docs/TeamMember.md)
 - [SignrequestClient.Template](docs/Template.md)
 - [SignrequestClient.User](docs/User.md)
 - [SignrequestClient.WebhookSubscription](docs/WebhookSubscription.md)

## Documentation for Authorization

### Token

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header
