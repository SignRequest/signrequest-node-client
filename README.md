# signrequest-client

SignrequestClient - JavaScript client for SignRequest.com

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install signrequest-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your signrequest-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('signrequest-client')` in javascript files from the directory you ran the last
command above from.

#### git

#

If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming _main.js_ is your entry file, that's to say your javascript file where you actually
use this library):

```shell
browserify main.js > bundle.js
```

Then include _bundle.js_ in the HTML pages.

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
  ];
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
Token.apiKeyPrefix['Authorization'] = "Token"

var api = new SignrequestClient.ApiTokensApi();

var data = new SignrequestClient.AuthToken(); // {AuthToken}

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
};
api.apiTokensCreate(data, callback);
```

## Documentation for API Endpoints

All URIs are relative to _https://signrequest.com/api/v1_

| Class                                         | Method                                                                                               | HTTP request                                            | Description                             |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | --------------------------------------- |
| _SignrequestClient.ApiTokensApi_              | [**apiTokensCreate**](docs/ApiTokensApi.md#apiTokensCreate)                                          | **POST** /api-tokens/                                   | Create an API token                     |
| _SignrequestClient.ApiTokensApi_              | [**apiTokensDelete**](docs/ApiTokensApi.md#apiTokensDelete)                                          | **DELETE** /api-tokens/{key}/                           | Delete an API token                     |
| _SignrequestClient.ApiTokensApi_              | [**apiTokensList**](docs/ApiTokensApi.md#apiTokensList)                                              | **GET** /api-tokens/                                    | Retrieve a list of API tokens           |
| _SignrequestClient.ApiTokensApi_              | [**apiTokensRead**](docs/ApiTokensApi.md#apiTokensRead)                                              | **GET** /api-tokens/{key}/                              | Retrieve an API token                   |
| _SignrequestClient.DocumentAttachmentsApi_    | [**documentAttachmentsCreate**](docs/DocumentAttachmentsApi.md#documentAttachmentsCreate)            | **POST** /document-attachments/                         | Create a Document Attachment            |
| _SignrequestClient.DocumentAttachmentsApi_    | [**documentAttachmentsList**](docs/DocumentAttachmentsApi.md#documentAttachmentsList)                | **GET** /document-attachments/                          | Retrieve a list of Document Attachments |
| _SignrequestClient.DocumentAttachmentsApi_    | [**documentAttachmentsRead**](docs/DocumentAttachmentsApi.md#documentAttachmentsRead)                | **GET** /document-attachments/{uuid}/                   | Retrieve a Document Attachment          |
| _SignrequestClient.DocumentsApi_              | [**documentsCreate**](docs/DocumentsApi.md#documentsCreate)                                          | **POST** /documents/                                    | Create a Document                       |
| _SignrequestClient.DocumentsApi_              | [**documentsDelete**](docs/DocumentsApi.md#documentsDelete)                                          | **DELETE** /documents/{uuid}/                           | Delete a Document                       |
| _SignrequestClient.DocumentsApi_              | [**documentsList**](docs/DocumentsApi.md#documentsList)                                              | **GET** /documents/                                     | Retrieve a list of Documents            |
| _SignrequestClient.DocumentsApi_              | [**documentsRead**](docs/DocumentsApi.md#documentsRead)                                              | **GET** /documents/{uuid}/                              | Retrieve a Document                     |
| _SignrequestClient.DocumentsSearchApi_        | [**documentsSearchList**](docs/DocumentsSearchApi.md#documentsSearchList)                            | **GET** /documents-search/                              | Search documents                        |
| _SignrequestClient.EventsApi_                 | [**eventsList**](docs/EventsApi.md#eventsList)                                                       | **GET** /events/                                        | Retrieve a list of Events               |
| _SignrequestClient.EventsApi_                 | [**eventsRead**](docs/EventsApi.md#eventsRead)                                                       | **GET** /events/{id}/                                   | Retrieve an Event                       |
| _SignrequestClient.SignrequestQuickCreateApi_ | [**signrequestQuickCreateCreate**](docs/SignrequestQuickCreateApi.md#signrequestQuickCreateCreate)   | **POST** /signrequest-quick-create/                     | Quick create a SignRequest              |
| _SignrequestClient.SignrequestsApi_           | [**signrequestsCancelSignrequest**](docs/SignrequestsApi.md#signrequestsCancelSignrequest)           | **POST** /signrequests/{uuid}/cancel_signrequest/       | Cancel a SignRequest                    |
| _SignrequestClient.SignrequestsApi_           | [**signrequestsCreate**](docs/SignrequestsApi.md#signrequestsCreate)                                 | **POST** /signrequests/                                 | Create a SignRequest                    |
| _SignrequestClient.SignrequestsApi_           | [**signrequestsList**](docs/SignrequestsApi.md#signrequestsList)                                     | **GET** /signrequests/                                  | Retrieve a list of SignRequests         |
| _SignrequestClient.SignrequestsApi_           | [**signrequestsRead**](docs/SignrequestsApi.md#signrequestsRead)                                     | **GET** /signrequests/{uuid}/                           | Retrieve a SignRequest                  |
| _SignrequestClient.SignrequestsApi_           | [**signrequestsResendSignrequestEmail**](docs/SignrequestsApi.md#signrequestsResendSignrequestEmail) | **POST** /signrequests/{uuid}/resend_signrequest_email/ | Resend a SignRequest                    |
| _SignrequestClient.TeamMembersApi_            | [**teamMembersList**](docs/TeamMembersApi.md#teamMembersList)                                        | **GET** /team-members/                                  | Retrieve a list of Team Members         |
| _SignrequestClient.TeamMembersApi_            | [**teamMembersRead**](docs/TeamMembersApi.md#teamMembersRead)                                        | **GET** /team-members/{uuid}/                           | Retrieve a Team Member                  |
| _SignrequestClient.TeamsApi_                  | [**teamsCreate**](docs/TeamsApi.md#teamsCreate)                                                      | **POST** /teams/                                        | Create a Team                           |
| _SignrequestClient.TeamsApi_                  | [**teamsInviteMember**](docs/TeamsApi.md#teamsInviteMember)                                          | **POST** /teams/{subdomain}/invite_member/              | Invite a Team Member                    |
| _SignrequestClient.TeamsApi_                  | [**teamsList**](docs/TeamsApi.md#teamsList)                                                          | **GET** /teams/                                         | Retrieve a list of Teams                |
| _SignrequestClient.TeamsApi_                  | [**teamsPartialUpdate**](docs/TeamsApi.md#teamsPartialUpdate)                                        | **PATCH** /teams/{subdomain}/                           | Update a Team                           |
| _SignrequestClient.TeamsApi_                  | [**teamsRead**](docs/TeamsApi.md#teamsRead)                                                          | **GET** /teams/{subdomain}/                             | Retrieve a Team                         |
| _SignrequestClient.TemplatesApi_              | [**templatesList**](docs/TemplatesApi.md#templatesList)                                              | **GET** /templates/                                     | Retrieve a list of Templates            |
| _SignrequestClient.TemplatesApi_              | [**templatesRead**](docs/TemplatesApi.md#templatesRead)                                              | **GET** /templates/{uuid}/                              | Retrieve a Template                     |
| _SignrequestClient.WebhooksApi_               | [**webhooksCreate**](docs/WebhooksApi.md#webhooksCreate)                                             | **POST** /webhooks/                                     | Create a Webhook                        |
| _SignrequestClient.WebhooksApi_               | [**webhooksDelete**](docs/WebhooksApi.md#webhooksDelete)                                             | **DELETE** /webhooks/{uuid}/                            | Delete a Webhook                        |
| _SignrequestClient.WebhooksApi_               | [**webhooksList**](docs/WebhooksApi.md#webhooksList)                                                 | **GET** /webhooks/                                      | Retrieve a list of Webhooks             |
| _SignrequestClient.WebhooksApi_               | [**webhooksPartialUpdate**](docs/WebhooksApi.md#webhooksPartialUpdate)                               | **PATCH** /webhooks/{uuid}/                             | Partially update a Webhook              |
| _SignrequestClient.WebhooksApi_               | [**webhooksRead**](docs/WebhooksApi.md#webhooksRead)                                                 | **GET** /webhooks/{uuid}/                               | Retrieve a Webhook                      |
| _SignrequestClient.WebhooksApi_               | [**webhooksUpdate**](docs/WebhooksApi.md#webhooksUpdate)                                             | **PUT** /webhooks/{uuid}/                               | Update a Webhook                        |

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
- [SignrequestClient.Team](docs/Team.md)
- [SignrequestClient.TeamMember](docs/TeamMember.md)
- [SignrequestClient.Template](docs/Template.md)
- [SignrequestClient.User](docs/User.md)
- [SignrequestClient.WebhookSubscription](docs/WebhookSubscription.md)

## Documentation for Authorization

### Token

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header
