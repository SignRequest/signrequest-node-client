# SignrequestClient.Signer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** |  | 
**display_name** | **String** |  | [optional] 
**first_name** | **String** |  | [optional] 
**last_name** | **String** |  | [optional] 
**email_viewed** | **Boolean** |  | [optional] 
**viewed** | **Boolean** |  | [optional] 
**signed** | **Boolean** |  | [optional] 
**downloaded** | **Boolean** |  | [optional] 
**signed_on** | **Date** |  | [optional] 
**needs_to_sign** | **Boolean** |  | [optional] [default to true]
**approve_only** | **Boolean** |  | [optional] 
**notify_only** | **Boolean** |  | [optional] 
**in_person** | **Boolean** |  | [optional] 
**order** | **Number** |  | [optional] 
**language** | **String** |  | [optional] 
**force_language** | **Boolean** |  | [optional] 
**emailed** | **Boolean** |  | [optional] 
**verify_phone_number** | **String** |  | [optional] 
**verify_bank_account** | **String** |  | [optional] 
**declined** | **Boolean** |  | [optional] 
**declined_on** | **Date** |  | [optional] 
**forwarded** | **String** |  | [optional] 
**forwarded_on** | **Date** |  | [optional] 
**forwarded_to_email** | **String** |  | [optional] 
**forwarded_reason** | **String** |  | [optional] 
**message** | **String** |  | [optional] 
**embed_url_user_id** | **String** |  | [optional] 
**inputs** | [**[SignerInputs]**](SignerInputs.md) |  | [optional] 
**use_stamp_for_approve_only** | **Boolean** | Place an approval stamp on a document when a signer approves a document | [optional] 
**embed_url** | **String** |  | [optional] 
**attachments** | [**[SignerAttachment]**](SignerAttachment.md) |  | [optional] 
**redirect_url** | **String** |  | [optional] 
**redirect_url_declined** | **String** |  | [optional] 
**after_document** | **String** |  | [optional] 
**integrations** | [**[InlineDocumentSignerIntegrationData]**](InlineDocumentSignerIntegrationData.md) |  | [optional] 
**password** | **String** | Require the signer to enter this password before signing a document. This field is write only. | [optional] 


<a name="LanguageEnum"></a>
## Enum: LanguageEnum


* `en` (value: `"en"`)

* `en-gb` (value: `"en-gb"`)

* `nl` (value: `"nl"`)

* `fr` (value: `"fr"`)

* `de` (value: `"de"`)

* `he` (value: `"he"`)

* `da` (value: `"da"`)

* `fi` (value: `"fi"`)

* `hu` (value: `"hu"`)

* `it` (value: `"it"`)

* `no` (value: `"no"`)

* `pl` (value: `"pl"`)

* `pt` (value: `"pt"`)

* `es` (value: `"es"`)

* `sv` (value: `"sv"`)

* `ru` (value: `"ru"`)




