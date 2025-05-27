export const Routes = {
  CATEGORIES: 'categories',
  LOCATIONS: 'locations',
  LATEST: 'deals/latest',
  AUTOMOBILE_AD: '/ads/:slug',
  SPONSORED: 'deals/sponsored',

  AUTOMOBILE: {
    ROUTE: 'automobiles',
    LATEST: 'deals/latest',
    AD: '/ads/:slug',
    SPONSORED: 'deals/sponsored',
  },

  HOME: {
    ROUTE: 'home',
    LATEST: 'deals/latest',
  },

  AUTH: {
    ROUTE: 'auth',
    REGISTER: 'register',
    LOGIN: 'login',
    REFRESH: 'refresh',
  },

  REAL_ESTATE: {
    ROUTE: 'real-estate',
  },
};

export enum Services {
  AUTH = 'AUTH_SERVICE',
  CFG_CATEGORIES = 'CFG_CATEGORIES_SERVICE',
  AUTOMOBILE_ADS = 'AUTOMOBILE_ADS_SERVICE',
  LOCATION_SERVICE = 'LOCATION_SERVICE',
  STATE_REPOSITORY = 'STATE_REPOSITORY',
  CITY_REPOSITORY = 'CITY_REPOSITORY',
  SPONSORED_SERVICE = 'SPONSORED_SERVICE',
  SPONSORED_REPOSITORY = 'SPONSORED_REPOSITORY',
  USERS_REPOSITORY = 'USERS_REPOSITORY',
  HOME_SERVICE = 'HOME_SERVICE',
  REAL_ESTATE_SERVICE = 'REAL_ESTATE_SERVICE',
}

export const Tables = {
  USERS: {
    TABLE: 'users',
    COLUMN: {
      ID: 'user_id',
      PASSWORD: 'hash_password',
      PROFILE_IMAGE_URL: 'profile_image_url',
      IS_LEGACY_USER: 'is_legacy_user',
      ACCOUNT_CREATION_DATETIME: 'account_creation_datetime',
      ACCOUNT_VERIFIED: 'account_verified',
      PHONE_NUMBER: 'phone_number',
      REFRESH_TOKEN: 'refresh_token',
      CREATED_AT: 'created_at',
      UPDATED_AT: 'updated_at',
    },
  },

  AUTOMOBILE_CATEGORIES: {
    TABLE: 'cfg_automobile_categories',
    COLUMN: {
      ID: 'automobile_cat_id',
      MODULE_ID: 'module_id',
      CATEGORY_KEY: 'category_key',
      IMAGE_URL: 'image_url',
      CREATE_DATETIME: 'create_datetime',
      UPDATE_DATETIME: 'update_datetime',
    },
  },

  AUTOMOBILE_MAKES: {
    TABLE: 'cfg_automobile_makes',
    COLUMN: {
      ID: 'automobile_make_id',
      CATEGORY_ID: 'category_id',
      MAKE_KEY: 'make_key',
      CREATE_DATETIME: 'create_datetime',
      UPDATE_DATETIME: 'update_datetime',
    },
  },

  AUTOMOBILE_MODELS: {
    TABLE: 'cfg_automobile_models',
    COLUMN: {
      ID: 'automobile_model_id',
      MAKE_ID: 'make_id',
      MODEL_KEY: 'model_key',
      CREATE_DATETIME: 'create_datetime',
      UPDATE_DATETIME: 'update_datetime',
    },
  },

  AUTOMOBILE_ADS: {
    TABLE: 'trn_automobile_ads',
    COLUMN: {
      ID: 'auto_ad_id',
      USER_ID: 'user_id',
      CATEGORY_ID: 'category_id',
      MAKE_ID: 'make_id',
      MODEL_ID: 'model_id',
      CITY_ID: 'city_id',
      AD_UPDATED: 'ad_updated',
      CREATE_DATETIME: 'create_datetime',
      IS_IN_REVIEW: 'is_in_review',
      IS_LIVE: 'is_live',
      IS_PAID: 'is_paid',
      IS_ARCHIVED: 'is_archived',
      REVIEW_START_DATETIME: 'review_start_datetime',
      REVIEW_END_DATETIME: 'review_end_datetime',
      APPROVED_DATETIME: 'approved_datetime',
      ARCHIVED_DATETIME: 'archived_datetime',
      LIVE_DATETIME: 'live_datetime',
      PAID_DATETIME: 'paid_datetime',
      LAST_UPDATE_DATETIME: 'last_update_datetime',
      IS_DELETED: 'is_deleted',
      IS_SOLD: 'is_sold',
      EXPIRED_SPONSORED_AD: 'expired_sponsored_ad',
      SUBMITTED: 'submitted',
      REJECTED: 'rejected',
      CHANGE_REQUEST: 'change_request',
    },

    VIEW: {
      TABLE: 'automobileLatestAdsView',
      COLUMN: {
        ID: 'auto_ad_id',
        CREATE_DATETIME: 'create_datetime',
        CATEGORY_KEY: 'category_key',
        CATEGORY_ID: 'automobile_cat_id',
        SELLER_NAME: 'sellerName',
        SELLER_ID: 'sellerId',
        SELLER_IMAGE_URL: 'sellerImageUrl',
        VIEW_COUNT: 'viewCount',
        IMAGE_URL: 'imageUrl',
        PICTURE_COUNT: 'pictureCount',
      },
    },
  },

  AUTOMOBILE_AD_IMAGES: {
    TABLE: 'trn_automobile_ad_images',
    COLUMN: {
      AD_ID: 'ad_id',
      IMAGE_URL: 'image_url',
      IS_PRIMARY: 'is_primary',
      ORDER_NUMBER: 'order_number',
      UPLOAD_DATETIME: 'upload_datetime',
    },
  },

  AUTOMOBILE_ATTRIBUTES: {
    TABLE: 'cfg_automobile_attributes',
    COLUMN: {
      CATEGORY_ID: 'category_id',
      ATTRIBUTE_KEY: 'att_key',
      IS_MULTI_CHOICE: 'is_multi_choice',
      IS_REQUIRED: 'is_required',
      CREATE_DATETIME: 'create_datetime',
      UPDATE_DATETIME: 'update_datetime',
    },
  },

  AUTOMOBILE_ATTRIBUTE_OPTIONS: {
    TABLE: 'cfg_automobile_attribute_options',
    COLUMN: {
      ATTRIBUTE_ID: 'att_id',
      OPTION_KEY: 'att_option_key',
      CREATE_DATETIME: 'create_datetime',
      UPDATE_DATETIME: 'update_datetime',
    },
  },

  AUTOMOBILE_AD_ATTRIBUTES: {
    TABLE: 'trn_automobile_ad_attributes',
    COLUMN: {
      AD_ID: 'ad_id',
      ATTRIBUTE_ID: 'att_id',
      OPTION_ID: 'option_id',
      CUSTOM_VALUE: 'custom_value',
      HAS_CUSTOM_VALUE: 'has_custom_value',
      CREATE_DATETIME: 'create_datetime',
      UPDATE_DATETIME: 'update_datetime',
    },
  },

  AUTOMOBILE_AUDIT_LOGS: {
    TABLE: 'trn_automobile_auditlogs',
    COLUMN: {
      ID: 'auditlog_id',
      AD_ID: 'ad_id',
      CHANGED_FIELD: 'changed_field',
      OLD_VALUE: 'old_value',
      NEW_VALUE: 'new_value',
      USER_ID: 'user_id',
      ACTION: 'action',
      CHANGE_DATETIME: 'change_datetime',
      IS_USER_ACTION: 'is_user_action',
      IS_ADMIN_ACTION: 'is_admin_action',
      ADMIN_ID: 'admin_id',
      IS_SYSTEM_ACTION: 'is_system_action',
      ACTION_DESCRIPTION: 'action_description',
      ACTION_DATETIME: 'action_datetime',
    },
  },

  USER_VIEWS: {
    TABLE: 'trn_user_views',
    COLUMN: {
      ID: 'user_view_id',
      AD_ID: 'ad_id',
      MODULE_ID: 'module_id',
      USER_ID: 'user_id',
      VIEW_DATETIME: 'view_datetime',
      IP_ADDRESS: 'ip_address',
    },
  },

  APPROVED_AUTOMOBILE_AD_SNAPSHOTS: {
    TABLE: 'approved_automobile_ad_snapshots',
    COLUMN: {
      ID: 'id',
      AD_ID: 'ad_id',
      SNAPSHOT_DATA: 'snapshot_data',
      SNAPSHOT_DATE: 'snapshot_date',
    },
  },

  SPONSORED: {
    TABLE: 'trn_sponsored_ads',
    COLUMN: {
      ID: 'id',
      MODULE_ID: 'module_id',
      AD_ID: 'ad_id',
      AMOUNT_PAID: 'amount_paid',
      SPONSORED_UNTIL: 'sponsored_until',
      CREATE_DATETIME: 'create_datetime',
      USER_ID: 'user_id',
      IS_ACTIVE: 'is_active',
    },
  },

  CFG_CATEGORIES: {
    TABLE: 'cfg_categories',
    COLUMN: {
      CREATE_DATETIME: 'create_datetime',
      UPDATE_DATETIME: 'update_datetime',
    },
  },

  CFG_STATES: {
    TABLE: 'cfg_states',
    COLUMN: {
      NAME_KEY: 'name_key',
    },
  },

  CFG_CITIES: {
    TABLE: 'cfg_cities',
    COLUMN: {
      CITY_KEY: 'city_key',
      STATE_ID: 'state_id',
    },
  },
};

export enum Database {
  DATA_SOURCE = 'DATA_SOURCE',
}

export enum Strategies {
  JWT_REFRESH = 'jwt-refresh',
}
