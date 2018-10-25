# SignrequestClient.WebhookSubscription

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** |  | [optional] 
**uuid** | **String** |  | [optional] 
**name** | **String** | Optional name to easily identify what webhook is used for | [optional] 
**eventType** | **String** |  | 
**callbackUrl** | **String** |  | 
**integration** | **String** |  | [optional] 
**created** | **Date** |  | [optional] 


<a name="EventTypeEnum"></a>
## Enum: EventTypeEnum


* `convert_error` (value: `"convert_error"`)

* `converted` (value: `"converted"`)

* `sending_error` (value: `"sending_error"`)

* `sent` (value: `"sent"`)

* `declined` (value: `"declined"`)

* `cancelled` (value: `"cancelled"`)

* `expired` (value: `"expired"`)

* `signed` (value: `"signed"`)

* `viewed` (value: `"viewed"`)

* `downloaded` (value: `"downloaded"`)

* `signer_signed` (value: `"signer_signed"`)

* `signer_email_bounced` (value: `"signer_email_bounced"`)

* `signer_viewed_email` (value: `"signer_viewed_email"`)

* `signer_viewed` (value: `"signer_viewed"`)

* `signer_forwarded` (value: `"signer_forwarded"`)

* `signer_downloaded` (value: `"signer_downloaded"`)

* `signrequest_received` (value: `"signrequest_received"`)




<a name="IntegrationEnum"></a>
## Enum: IntegrationEnum


* `mfiles` (value: `"mfiles"`)

* `salesforce` (value: `"salesforce"`)

* `formdesk` (value: `"formdesk"`)

* `zapier` (value: `"zapier"`)

* `txhash` (value: `"txhash"`)




