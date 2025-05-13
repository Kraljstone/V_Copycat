export enum Routes {
  USERS = 'users',
  CATEGORIES = 'categories',
  AUTOMOBILES = 'automobiles',
  LOCATIONS = 'locations',
  LATEST = 'latest',
  AUTOMOBILE_AD = '/ads/:slug',
}

export enum Services {
  USERS = 'USERS_SERVICE',
  USERS_REPOSITORY = 'USERS_REPOSITORY',
  CFG_CATEGORIES = 'CFG_CATEGORIES_SERVICE',
  CFG_CATEGORIES_REPOSITORY = 'CFG_CATEGORIES_REPOSITORY',
  AUTOMOBILE_ADS = 'AUTOMOBILE_ADS_SERVICE',
  AUTOMOBILE_ADS_REPOSITORY = 'AUTOMOBILE_ADS_REPOSITORY',
  AUTOMOBILE_CATEGORIES_REPOSITORY = 'AUTOMOBILE_CATEGORIES_REPOSITORY',
  AUTOMOBILE_MAKES_REPOSITORY = 'AUTOMOBILE_MAKES_REPOSITORY',
  AUTOMOBILE_MODELS_REPOSITORY = 'AUTOMOBILE_MODELS_REPOSITORY',
  LOCATION_SERVICE = 'LOCATION_SERVICE',
  STATE_REPOSITORY = 'STATE_REPOSITORY',
  CITY_REPOSITORY = 'CITY_REPOSITORY',
}

export enum Tables {
  USERS = 'users',
  CFG_CATEGORIES = 'cfg_categories',
  AUTOMOBILE_CATEGORIES = 'cfg_automobile_categories',
  AUTOMOBILE_MAKES = 'cfg_automobile_makes',
  AUTOMOBILE_MODELS = 'cfg_automobile_models',
  AUTOMOBILE_ADS = 'trn_automobile_ads',
  AUTOMOBILE_AD_IMAGES = 'trn_automobile_ad_images',
  AUTOMOBILE_ATTRIBUTES = 'cfg_automobile_attributes',
  AUTOMOBILE_ATTRIBUTE_OPTIONS = 'cfg_automobile_attribute_options',
  AUTOMOBILE_AD_ATTRIBUTES = 'trn_automobile_ad_attributes',
  AUTOMOBILE_AUDIT_LOGS = 'trn_automobile_auditlogs',
  USER_VIEWS = 'trn_user_views',
}

export enum Database {
  DATA_SOURCE = 'DATA_SOURCE',
}
