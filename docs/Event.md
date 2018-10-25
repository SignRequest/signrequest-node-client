# SignrequestClient.Event

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**eventType** | **String** |  | [optional] 
**delivered** | **Boolean** |  | [optional] 
**deliveredOn** | **Date** |  | [optional] 
**callbackStatusCode** | **Number** |  | [optional] 
**timestamp** | **Date** |  | [optional] 
**document** | [**Document**](Document.md) |  | [optional] 
**signer** | [**Signer**](Signer.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `ok` (value: `"ok"`)

* `error` (value: `"error"`)




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




