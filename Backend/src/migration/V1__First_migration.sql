-- Implementing the first iteration of the cars module

-- VERIFIED - Create the users table, which stores user information, credentials, and status flags
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,  -- Unique ID for each user
    fullname VARCHAR(255) NOT NULL,  -- Full name of the user
    username VARCHAR(25) NOT NULL,  -- username for login
    hash_password VARCHAR(255) NOT NULL,  -- User's hashed password
    profile_image_url VARCHAR(255),  -- URL to the user's profile image
    is_legacy_user BOOLEAN DEFAULT FALSE,  -- Flag to indicate if the user is from a legacy system
    account_creation_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Timestamp when the account was created
    active BOOLEAN DEFAULT TRUE,  -- If true, the account is active
    disabled BOOLEAN DEFAULT FALSE,  -- If true, the account is disabled
    account_verified BOOLEAN DEFAULT FALSE  -- If true, the account is verified
);

-- VERIFIED - Create the cfg_modules table, which stores system modules configuration
DROP TABLE IF EXISTS cfg_modules;
CREATE TABLE cfg_modules (
    module_id SERIAL PRIMARY KEY,  -- Unique ID for each module
    module_key VARCHAR(255) NOT NULL UNIQUE,  -- Unique key to identify the module
    image_url VARCHAR(255) ,
    description TEXT,  -- Optional description of the module
    create_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- When the module was created
    update_datetime TIMESTAMP  -- When the module was last updated
);

-- Create the cfg_automobile_categories table, which stores different automobile categories
DROP TABLE IF EXISTS cfg_automobile_categories;
CREATE TABLE cfg_automobile_categories (
    automobile_cat_id SERIAL PRIMARY KEY,  -- Unique ID for each category
    module_id INT NOT NULL,  -- Module ID this category belongs to
    category_key VARCHAR(255) UNIQUE NOT NULL,  -- Unique key to identify the category
    image_url VARCHAR(255),  -- Optional image URL associated with the category
    create_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- When the category was created
    update_datetime TIMESTAMP,  -- When the category was last updated
    FOREIGN KEY (module_id) REFERENCES cfg_modules(module_id) ON DELETE CASCADE  -- Relation to the modules table
);

-- Create the cfg_automobile_makes table, which stores different automobile makes
DROP TABLE IF EXISTS cfg_automobile_makes;
CREATE TABLE cfg_automobile_makes (
    automobile_make_id SERIAL PRIMARY KEY,  -- Unique ID for each make
    category_id INT NOT NULL,  -- Category ID this make belongs to
    make_key VARCHAR(255) NOT NULL UNIQUE,  -- Unique key to identify the make
    create_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- When the make was created
    update_datetime TIMESTAMP,  -- When the make was last updated
    FOREIGN KEY (category_id) REFERENCES cfg_automobile_categories(automobile_cat_id) ON DELETE CASCADE  -- Relation to the categories table
);

-- Create the cfg_automobile_models table, which stores different automobile models
DROP TABLE IF EXISTS cfg_automobile_models;
CREATE TABLE cfg_automobile_models (
    automobile_model_id SERIAL PRIMARY KEY,  -- Unique ID for each model
    make_id INT NOT NULL,  -- Make ID this model belongs to
    model_key VARCHAR(255) NOT NULL UNIQUE,  -- Unique key to identify the model
    create_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- When the model was created
    update_datetime TIMESTAMP,  -- When the model was last updated
    FOREIGN KEY (make_id) REFERENCES cfg_automobile_makes(automobile_make_id) ON DELETE CASCADE  -- Relation to the makes table
);

-- Create the trn_automobile_ads table, which stores the details of automobile ads
DROP TABLE IF EXISTS trn_automobile_ads;
CREATE TABLE trn_automobile_ads (
    auto_ad_id SERIAL PRIMARY KEY,  -- Unique ID for each ad
    title VARCHAR(255) NOT NULL,  -- Title of the ad
    slug VARCHAR(100) NOT NULL,  -- URL-friendly version of the title (used for SEO and navigation)
    description VARCHAR(5000),  -- Description of the ad
    price NUMERIC(10, 2) NOT NULL,  -- Price of the automobile in the ad
    user_id INT NOT NULL,  -- User who created the ad
    category_id INT NOT NULL,  -- Category of the automobile
    make_id INT NOT NULL,  -- Make of the automobile
    model_id INT,  -- Model of the automobile
    create_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- When the ad was created
    is_in_review BOOLEAN DEFAULT FALSE,  -- Flag indicating if the ad is under review
    is_live BOOLEAN DEFAULT FALSE,  -- Flag indicating if the ad is live
    is_paid BOOLEAN DEFAULT FALSE,  -- Flag indicating if the ad is paid
    is_archived BOOLEAN DEFAULT FALSE,  -- Flag indicating if the ad is archived
    review_start_datetime TIMESTAMP,  -- When the review started
    review_end_datetime TIMESTAMP,  -- When the review ended
    approved_datetime TIMESTAMP,  -- When the ad was approved
    archived_datetime TIMESTAMP,  -- When the ad was archived
    live_datetime TIMESTAMP,  -- When the ad went live
    paid_datetime TIMESTAMP,  -- When the ad was paid
    last_update_datetime TIMESTAMP,  -- When the ad was last updated
    is_deleted BOOLEAN DEFAULT FALSE, -- Soft delete flag
    is_sold BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,  -- Relation to the users table
    FOREIGN KEY (category_id) REFERENCES cfg_automobile_categories(automobile_cat_id) ON DELETE CASCADE,  -- Relation to the categories table
    FOREIGN KEY (make_id) REFERENCES cfg_automobile_makes(automobile_make_id) ON DELETE CASCADE,  -- Relation to the makes table
    FOREIGN KEY (model_id) REFERENCES cfg_automobile_models(automobile_model_id) ON DELETE CASCADE  -- Relation to the models table
);

-- Create the trn_automobile_ad_images table, which stores images associated with automobile ads
DROP TABLE IF EXISTS trn_automobile_ad_images;
CREATE TABLE trn_automobile_ad_images (
    id SERIAL PRIMARY KEY,  -- Unique ID for each image
    ad_id INT NOT NULL,  -- Ad ID this image belongs to
    image_url VARCHAR(255) NOT NULL,  -- URL of the image
    is_primary BOOLEAN DEFAULT FALSE,  -- Flag indicating if this is the primary image
    order_number INT,  -- Order of the image in the ad
    upload_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- When the image was uploaded
    FOREIGN KEY (ad_id) REFERENCES trn_automobile_ads(auto_ad_id) ON DELETE CASCADE  -- Relation to the ads table
);

-- Create the cfg_automobile_attributes table, which stores custom attributes for automobile categories
DROP TABLE IF EXISTS cfg_automobile_attributes;
CREATE TABLE cfg_automobile_attributes (
    id SERIAL PRIMARY KEY,  -- Unique ID for each attribute
    category_id INT NOT NULL,  -- Category ID this attribute belongs to
    att_key VARCHAR(255) NOT NULL,  -- Key for the attribute
    is_multi_choice BOOLEAN NOT NULL,  -- Whether the attribute allows multiple choices
    is_required BOOLEAN NOT NULL,  -- Whether the attribute is required
    create_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- When the attribute was created
    update_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- When the attribute was last updated
    FOREIGN KEY (category_id) REFERENCES cfg_automobile_categories(automobile_cat_id) ON DELETE CASCADE  -- Relation to the categories table
);

-- Create the cfg_automobile_attribute_options table, which stores the options for each automobile attribute
-- this is used when the attribute is multi-choice
DROP TABLE IF EXISTS cfg_automobile_attribute_options;
CREATE TABLE cfg_automobile_attribute_options (
    id SERIAL PRIMARY KEY,  -- Unique ID for each option
    att_id INT NOT NULL,  -- Attribute ID this option belongs to
    att_option_key VARCHAR(255) NOT NULL,  -- Key for the attribute option
    create_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- When the option was created
    update_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- When the option was last updated
    FOREIGN KEY (att_id) REFERENCES cfg_automobile_attributes(id) ON DELETE CASCADE  -- Relation to the attributes table
);

-- Create the trn_automobile_ad_attributes table, which stores the selected attribute options for an ad
DROP TABLE IF EXISTS trn_automobile_ad_attributes;
CREATE TABLE trn_automobile_ad_attributes (
    id SERIAL PRIMARY KEY,  -- Unique ID for each record
    ad_id INT NOT NULL,  -- Ad ID this attribute belongs to
    att_id INT NOT NULL,  -- Attribute ID this record references
    option_id INT,  -- Option ID, if any, selected for this attribute
    custom_value VARCHAR(255),  -- Custom value for the attribute, if applicable
    has_custom_value BOOLEAN DEFAULT FALSE,  -- Whether this record has a custom value
    create_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- When the record was created
    update_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- When the record was last updated
    FOREIGN KEY (ad_id) REFERENCES trn_automobile_ads(auto_ad_id) ON DELETE CASCADE,  -- Relation to the ads table
    FOREIGN KEY (att_id) REFERENCES cfg_automobile_attributes(id) ON DELETE CASCADE,  -- Relation to the attributes table
    FOREIGN KEY (option_id) REFERENCES cfg_automobile_attribute_options(id) ON DELETE CASCADE  -- Relation to the attribute options table
);

-- Create the trn_automobile_auditlogs table, which tracks changes made to automobile ads
DROP TABLE IF EXISTS trn_automobile_auditlogs;
CREATE TABLE trn_automobile_auditlogs (
    auditlog_id SERIAL PRIMARY KEY,  -- Unique ID for each audit log
    ad_id INT NOT NULL,  -- Ad ID the log refers to
    changed_field VARCHAR(255) NOT NULL,  -- The field that was changed
    old_value TEXT,  -- The previous value before the change
    new_value TEXT,  -- The new value after the change
    is_user_action BOOLEAN,  -- Whether the change was made by a user
    user_id INT,  -- The user who made the change, if applicable
    is_admin_action BOOLEAN,  -- Whether the change was made by an admin
    admin_id INT,  -- The admin who made the change, if applicable
    is_system_action BOOLEAN,  -- Whether the change was made automatically by the system
    action_description TEXT,  -- Description of the action
    action_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- When the action took place
    FOREIGN KEY (ad_id) REFERENCES trn_automobile_ads(auto_ad_id) ON DELETE CASCADE  -- Relation to the ads table
);

-- Create the user_views table, which tracks views of automobile ads by users
DROP TABLE IF EXISTS trn_user_views;
CREATE TABLE trn_user_views (
    user_view_id SERIAL PRIMARY KEY,  -- Unique ID for each view
    ad_id INT NOT NULL,  -- Ad ID that was viewed
    module_id INT NOT NULL,  -- Module ID associated with the view
    user_id INT,  -- User who viewed the ad if they are logged in
    view_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- When the ad was viewed
    ip_address VARCHAR(50)  -- IP address of the user who viewed the ad
);

-- create table responsible for holding translations
DROP TABLE IF EXISTS translationz;
CREATE TABLE translationz (

	translation_key VARCHAR(255) PRIMARY KEY, -- Unique ID for each translation
	english_value VARCHAR(500) NOT NULL,
	arabic_value VARCHAR(500) NOT NULL,
	french_value VARCHAR(500) NOT NULL,
	key_description TEXT NOT NULL,
	create_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	update_datetime TIMESTAMP,
	updater INT
);