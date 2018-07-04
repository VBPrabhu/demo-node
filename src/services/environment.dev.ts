export const DEV = {
  mode: 'devl',
  advisory_api: 'https://api.devl.generali.ch/api/partner/beras/services/data/v42.0/sobjects/Advisory__c/',
  prevention_api: 'https://api.devl.generali.ch/api/partner/beras/services/data/v42.0/query/?q=Select+Id,Unique_Id__c,type__c,Older__c,Death__c,IV__c+from+BERAS_Prevention__c+where++Advisory__c+=',
  prevention_post: 'https://api.devl.generali.ch/api/partner/beras/services/data/v42.0/composite/batch',
  prevention_patch: 'v42.0/sobjects/BERAS_Prevention__c/Unique_Id__c/',
  notes_get_api: 'https://api.devl.generali.ch/api/partner/beras/services/data/v42.0/query/?q=SELECT+Id,Title,Body+from+Note+where+parentID+=+',
  notes_patch: '/services/data/v42.0/sobjects/note',
  partner_api: 'https://api.devl.generali.ch/api/partner/beras/services/data/v42.0/sobjects/Account/',
  logging_api: 'https://beras-sales-app-devl.op.generali.ch'
}
export const TEST = {
  mode: 'test',
  advisory_api: 'https://api.devl.generali.ch/api/partner/beras/services/data/v42.0/sobjects/Advisory__c/',
  prevention_api: 'https://api.devl.generali.ch/api/partner/beras/services/data/v42.0/query/?q=Select+Id,Unique_Id__c,type__c,Older__c,Death__c,IV__c+from+BERAS_Prevention__c+where++Advisory__c+=',
  prevention_post: 'https://api.devl.generali.ch/api/partner/beras/services/data/v42.0/composite/batch',
  prevention_patch: 'v42.0/sobjects/BERAS_Prevention__c/Unique_Id__c/',
  notes_get_api: 'https://api.devl.generali.ch/api/partner/beras/services/data/v42.0/query/?q=SELECT+Id,Title,Body+from+Note+where+parentID+=+',
  notes_patch: '/services/data/v42.0/sobjects/note',
  partner_api: 'https://api.devl.generali.ch/api/partner/beras/services/data/v42.0/sobjects/Account/',
  logging_api: 'https://beras-sales-app-devl.op.generali.ch'
}
export const ACPT = {
  mode: 'acpt',
  advisory_api: 'https://api.devl.generali.ch/api/partner/beras/services/data/v42.0/sobjects/Advisory__c/',
  prevention_api: 'https://api.devl.generali.ch/api/partner/beras/services/data/v42.0/query/?q=Select+Id,Unique_Id__c,type__c,Older__c,Death__c,IV__c+from+BERAS_Prevention__c+where++Advisory__c+=',
  prevention_post: 'https://api.devl.generali.ch/api/partner/beras/services/data/v42.0/composite/batch',
  prevention_patch: 'v42.0/sobjects/BERAS_Prevention__c/Unique_Id__c/',
  notes_get_api: 'https://api.devl.generali.ch/api/partner/beras/services/data/v42.0/query/?q=SELECT+Id,Title,Body+from+Note+where+parentID+=+',
  notes_patch: '/services/data/v42.0/sobjects/note',
  partner_api: 'https://api.devl.generali.ch/api/partner/beras/services/data/v42.0/sobjects/Account/',
  logging_api: 'https://beras-sales-app-devl.op.generali.ch'
}

