TRUNCATE TABLE cfg_categories;

INSERT INTO cfg_categories (module_key, image_url, description, create_datetime, update_datetime)
VALUES ('AUTOMOBILE_CATEGORY_KEY', 'https://voursa.s3.amazonaws.com/images/1739293692670_automobiles-icon.svg',
        'Automobile category',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('ELECTRONICS_CATEGORY_KEY', 'https://voursa.s3.amazonaws.com/images/1739293857281_electronics-icon.svg',
        'Electronics category',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('REAL_ESTATE_CATEGORY_KEY', 'https://voursa.s3.amazonaws.com/images/1739294042074_real-estate-icon.svg',
        'Real Estate category',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('FASHION_AND_BEAUTY_CATEGORY_KEY', 'https://voursa.s3.amazonaws.com/images/1739294259764_clothings-icon.svg',
        'Fashion and Beauty category', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('FURNITURE_CATEGORY_KEY', 'https://voursa.s3.amazonaws.com/images/1739293910176_furnitures-iconsvg.svg',
        'Furniture category',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('OTHER_CATEGORY_KEY', 'https://voursa.s3.amazonaws.com/images/1739294517152_others.svg', 'Other category',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);