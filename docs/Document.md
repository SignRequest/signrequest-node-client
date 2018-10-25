# SignrequestClient.Document

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** |  | [optional] 
**uuid** | **String** |  | [optional] 
**user** | [**User**](User.md) |  | [optional] 
**fileAsPdf** | **String** | Temporary URL to original file as PDF, expires in five minutes | [optional] 
**name** | **String** | Defaults to filename, including extension | [optional] 
**externalId** | **String** | ID used to reference document in external system | [optional] 
**frontendId** | **String** | Shared secret used in conjunction with &lt;a href&#x3D;\&quot;#section/Frontend-API/SignRequest-js-client-(beta)\&quot;&gt;SignRequest-js client&lt;/a&gt; to grant user access to a document that&#39;s not a member of the document&#39;s team | [optional] 
**file** | **String** | Temporary URL to original file, expires in five minutes | [optional] 
**fileFromUrl** | **String** | Publicly accessible URL of document to be downloaded by SignRequest | [optional] 
**eventsCallbackUrl** | **String** | URL at which to receive [event callbacks](#section/Events/Events-callback) for this document | [optional] 
**fileFromContent** | **String** | Base64 encoded document content | [optional] 
**fileFromContentName** | **String** | Filename, including extension. Required when using &#x60;file_from_content&#x60;. | [optional] 
**template** | **String** |  | [optional] 
**prefillTags** | [**[InlinePrefillTags]**](InlinePrefillTags.md) | Prefill signer input data, see [prefill tags](#section/Preparing-a-document/Prefill-tags-templates) | [optional] 
**integrations** | [**[InlineIntegrationData]**](InlineIntegrationData.md) |  | [optional] 
**fileFromSf** | [**FileFromSf**](FileFromSf.md) |  | [optional] 
**autoDeleteDays** | **Number** | Number of days after which a finished document (signed/cancelled/declined) will be automatically deleted | [optional] 
**pdf** | **String** | Temporary URL to signed document as PDF, expires in five minutes | [optional] 
**status** | **String** | &#x60;co&#x60;: converting, &#x60;ne&#x60;: new, &#x60;se&#x60;: sent, &#x60;vi&#x60;: viewed, &#x60;si&#x60;: signed, &#x60;do&#x60;: downloaded, &#x60;sd&#x60;: signed and downloaded, &#x60;ca&#x60;: cancelled, &#x60;de&#x60;: declined, &#x60;ec&#x60;: error converting, &#x60;es&#x60;: error sending, &#x60;xp&#x60;: expired | [optional] 
**apiUsed** | **Boolean** | Indicates whether document was created using the API | [optional] 
**securityHash** | **String** | SHA256 hash of PDF contents | [optional] 
**attachments** | [**[DocumentAttachment]**](DocumentAttachment.md) |  | [optional] 
**autoDeleteAfter** | **Date** | Date and time calculated using &#x60;auto_delete_days&#x60; after which a finished document (signed/cancelled/declined) will be automatically deleted | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `co` (value: `"co"`)

* `ne` (value: `"ne"`)

* `se` (value: `"se"`)

* `vi` (value: `"vi"`)

* `si` (value: `"si"`)

* `do` (value: `"do"`)

* `sd` (value: `"sd"`)

* `ca` (value: `"ca"`)

* `de` (value: `"de"`)

* `ec` (value: `"ec"`)

* `es` (value: `"es"`)

* `xp` (value: `"xp"`)




