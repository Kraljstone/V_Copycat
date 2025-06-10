import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitalMigration1749301194601 implements MigrationInterface {
  name = 'InitalMigration1749301194601';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("user_id" SERIAL NOT NULL, "fullname" character varying(255) NOT NULL, "username" character varying(25) NOT NULL, "hash_password" character varying(255) NOT NULL, "profile_image_url" character varying(255), "is_legacy_user" boolean NOT NULL DEFAULT false, "account_creation_datetime" TIMESTAMP NOT NULL DEFAULT now(), "active" boolean NOT NULL DEFAULT true, "disabled" boolean NOT NULL DEFAULT false, "account_verified" boolean NOT NULL DEFAULT false, "phone_number" character varying(255) NOT NULL, "refresh_token" character varying(255), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_96aac72f1574b88752e9fb00089" PRIMARY KEY ("user_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "cfg_states" ("id" SERIAL NOT NULL, "name_key" character varying, CONSTRAINT "UQ_7ee1415545225f208b419c01fd6" UNIQUE ("name_key"), CONSTRAINT "PK_ee90a5187a97ae0076bb8aaefdd" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "cfg_cities" ("id" SERIAL NOT NULL, "city_key" character varying, "state_id" integer, CONSTRAINT "UQ_e82f74f76914557572da247e903" UNIQUE ("city_key"), CONSTRAINT "PK_a19a4e4ed73c38dfa07b00e0709" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "trn_sponsored_ads" ("id" SERIAL NOT NULL, "module_id" integer NOT NULL, "amount_paid" numeric(10,2) NOT NULL, "ad_id" integer NOT NULL, "sponsored_until" TIMESTAMP NOT NULL, "create_datetime" TIMESTAMP NOT NULL DEFAULT now(), "user_id" integer NOT NULL, "is_active" boolean NOT NULL, CONSTRAINT "PK_6d1df7ced7b5860af4cb9c053ac" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "cfg_automobile_categories" ("automobile_cat_id" SERIAL NOT NULL, "module_id" integer NOT NULL, "category_key" character varying(255) NOT NULL, "image_url" character varying(255), "create_datetime" TIMESTAMP NOT NULL DEFAULT now(), "update_datetime" TIMESTAMP, CONSTRAINT "UQ_781ccb9502b86ee46e3670ddfb1" UNIQUE ("category_key"), CONSTRAINT "PK_5797066338b3a56823d6ea13774" PRIMARY KEY ("automobile_cat_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "cfg_automobile_makes" ("automobile_make_id" SERIAL NOT NULL, "category_id" integer NOT NULL, "make_key" character varying(255) NOT NULL, "create_datetime" TIMESTAMP NOT NULL DEFAULT now(), "update_datetime" TIMESTAMP, CONSTRAINT "UQ_f53afd3b2b5060dfea9ceb45f19" UNIQUE ("make_key"), CONSTRAINT "PK_4ffed36ef8fd567fc1f2593f66a" PRIMARY KEY ("automobile_make_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "cfg_automobile_models" ("automobile_model_id" SERIAL NOT NULL, "make_id" integer NOT NULL, "model_key" character varying(255) NOT NULL, "create_datetime" TIMESTAMP NOT NULL DEFAULT now(), "update_datetime" TIMESTAMP, CONSTRAINT "UQ_56c9026520184ffa71c2ae34137" UNIQUE ("model_key"), CONSTRAINT "PK_bb5f0be8314368f69441dfef10a" PRIMARY KEY ("automobile_model_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "trn_automobile_ads" ("auto_ad_id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "slug" character varying(100) NOT NULL, "description" character varying(5000), "price" numeric(10,2) NOT NULL, "user_id" integer NOT NULL, "category_id" integer NOT NULL, "make_id" integer NOT NULL, "model_id" integer, "city_id" integer NOT NULL, "ad_updated" boolean NOT NULL DEFAULT false, "create_datetime" TIMESTAMP NOT NULL DEFAULT now(), "is_in_review" boolean NOT NULL DEFAULT false, "is_live" boolean NOT NULL DEFAULT false, "is_paid" boolean NOT NULL DEFAULT false, "is_archived" boolean NOT NULL DEFAULT false, "review_start_datetime" TIMESTAMP, "review_end_datetime" TIMESTAMP, "approved_datetime" TIMESTAMP, "archived_datetime" TIMESTAMP, "live_datetime" TIMESTAMP, "paid_datetime" TIMESTAMP, "last_update_datetime" TIMESTAMP, "is_deleted" boolean NOT NULL DEFAULT false, "is_sold" boolean NOT NULL DEFAULT false, "expired_sponsored_ad" boolean NOT NULL DEFAULT false, "submitted" boolean NOT NULL DEFAULT false, "rejected" boolean NOT NULL DEFAULT false, "change_request" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_24eed7bffa92958dd29846fa054" PRIMARY KEY ("auto_ad_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "trn_automobile_ad_images" ("id" SERIAL NOT NULL, "ad_id" integer NOT NULL, "image_url" character varying(255) NOT NULL, "is_primary" boolean NOT NULL DEFAULT false, "order_number" integer, "upload_datetime" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b760cd92b723bd8a4fdfe0d8922" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "cfg_automobile_attributes" ("id" SERIAL NOT NULL, "category_id" integer NOT NULL, "att_key" character varying(255) NOT NULL, "is_multi_choice" boolean NOT NULL, "is_required" boolean NOT NULL, "create_datetime" TIMESTAMP NOT NULL DEFAULT now(), "update_datetime" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7e9b4a7f00fba15a9f88c38378b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "cfg_automobile_attribute_options" ("id" SERIAL NOT NULL, "att_id" integer NOT NULL, "att_option_key" character varying(255) NOT NULL, "create_datetime" TIMESTAMP NOT NULL DEFAULT now(), "update_datetime" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d7f9ba3e18184a5aeec536b3ca6" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "trn_automobile_ad_attributes" ("id" SERIAL NOT NULL, "ad_id" integer NOT NULL, "att_id" integer NOT NULL, "option_id" integer, "custom_value" character varying(255), "has_custom_value" boolean NOT NULL DEFAULT false, "create_datetime" TIMESTAMP NOT NULL DEFAULT now(), "update_datetime" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cbae4beaa62bb60dc9fc39ae8b5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "trn_automobile_auditlogs" ("auditlog_id" SERIAL NOT NULL, "ad_id" integer NOT NULL, "changed_field" character varying(255) NOT NULL, "old_value" text, "new_value" text, "is_user_action" boolean, "user_id" integer, "is_admin_action" boolean, "admin_id" integer, "is_system_action" boolean, "action_description" text, "action_datetime" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7d57b44cccefd16c75adf415dd0" PRIMARY KEY ("auditlog_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "trn_user_views" ("user_view_id" SERIAL NOT NULL, "ad_id" integer NOT NULL, "module_id" integer NOT NULL, "user_id" integer, "view_datetime" TIMESTAMP NOT NULL DEFAULT now(), "ip_address" character varying(50), CONSTRAINT "PK_5d026734eadc627e434b8ef70e0" PRIMARY KEY ("user_view_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "approved_automobile_ad_snapshots" ("id" SERIAL NOT NULL, "ad_id" integer NOT NULL, "snapshot_data" jsonb NOT NULL, "snapshot_date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fdef838cd98f8d7744c28bfa68b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "cfg_categories" ("module_id" SERIAL NOT NULL, "module_key" character varying(255) NOT NULL, "image_url" character varying(255), "description" text, "create_datetime" TIMESTAMP NOT NULL DEFAULT now(), "update_datetime" TIMESTAMP DEFAULT now(), CONSTRAINT "UQ_4c987ac59200159435d7f707a25" UNIQUE ("module_key"), CONSTRAINT "PK_bdbf24fd7d9cf78ae82e710c99a" PRIMARY KEY ("module_id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "cfg_cities" ADD CONSTRAINT "FK_6f0eeca7abbf4ef48a5f9199d55" FOREIGN KEY ("state_id") REFERENCES "cfg_states"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "cfg_automobile_categories" ADD CONSTRAINT "FK_fea889f5075e30ad1779b3715b8" FOREIGN KEY ("module_id") REFERENCES "cfg_categories"("module_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "cfg_automobile_makes" ADD CONSTRAINT "FK_bbc18af2fdc20ad70d8fdf1a246" FOREIGN KEY ("category_id") REFERENCES "cfg_automobile_categories"("automobile_cat_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "cfg_automobile_models" ADD CONSTRAINT "FK_fb426ed869104a2c8785cee4bcd" FOREIGN KEY ("make_id") REFERENCES "cfg_automobile_makes"("automobile_make_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "approved_automobile_ad_snapshots" ADD CONSTRAINT "FK_3d12619118b8b6a7a96c1e1c983" FOREIGN KEY ("ad_id") REFERENCES "trn_automobile_ads"("auto_ad_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `CREATE MATERIALIZED VIEW "vw_homepage_latest_ads" AS SELECT "a"."title" AS "a_title", "a"."slug" AS "a_slug", "a"."auto_ad_id" AS "adId", COALESCE(CAST("a"."price" AS VARCHAR), 'undetermined') AS price, "a"."create_datetime" AS "postedAt", "cat"."category_key" AS "categoryName", "cat"."automobile_cat_id" AS "categoryId", "u"."fullname" AS "sellerName", "u"."user_id" AS "sellerId", "u"."profile_image_url" AS "sellerImageUrl", "city"."city_key" AS location, (SELECT COUNT(*) FROM trn_user_views v WHERE v.ad_id = "a"."auto_ad_id") AS "viewCount", (SELECT image_url FROM trn_automobile_ad_images i WHERE i.ad_id = "a"."auto_ad_id" ORDER BY i.order_number LIMIT 1) AS "imageUrl", (SELECT COUNT(*) FROM trn_automobile_ad_images i WHERE i.ad_id = "a"."auto_ad_id") AS "pictureCount", "a"."is_sold" AS sold FROM "trn_automobile_ads" "a" LEFT JOIN "users" "u" ON "u"."user_id" = "a"."user_id"  LEFT JOIN "cfg_automobile_categories" "cat" ON "cat"."automobile_cat_id" = "a"."category_id"  LEFT JOIN "cfg_cities" "city" ON "city"."id" = "a"."city_id" WHERE "a"."is_live" = TRUE`,
    );
    await queryRunner.query(
      `INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES (DEFAULT, $1, DEFAULT, $2, $3, $4)`,
      [
        'public',
        'MATERIALIZED_VIEW',
        'vw_homepage_latest_ads',
        'SELECT "a"."title" AS "a_title", "a"."slug" AS "a_slug", "a"."auto_ad_id" AS "adId", COALESCE(CAST("a"."price" AS VARCHAR), \'undetermined\') AS price, "a"."create_datetime" AS "postedAt", "cat"."category_key" AS "categoryName", "cat"."automobile_cat_id" AS "categoryId", "u"."fullname" AS "sellerName", "u"."user_id" AS "sellerId", "u"."profile_image_url" AS "sellerImageUrl", "city"."city_key" AS location, (SELECT COUNT(*) FROM trn_user_views v WHERE v.ad_id = "a"."auto_ad_id") AS "viewCount", (SELECT image_url FROM trn_automobile_ad_images i WHERE i.ad_id = "a"."auto_ad_id" ORDER BY i.order_number LIMIT 1) AS "imageUrl", (SELECT COUNT(*) FROM trn_automobile_ad_images i WHERE i.ad_id = "a"."auto_ad_id") AS "pictureCount", "a"."is_sold" AS sold FROM "trn_automobile_ads" "a" LEFT JOIN "users" "u" ON "u"."user_id" = "a"."user_id"  LEFT JOIN "cfg_automobile_categories" "cat" ON "cat"."automobile_cat_id" = "a"."category_id"  LEFT JOIN "cfg_cities" "city" ON "city"."id" = "a"."city_id" WHERE "a"."is_live" = TRUE',
      ],
    );
    await queryRunner.query(
      `CREATE MATERIALIZED VIEW "vw_automobile_ads" AS SELECT "ad"."auto_ad_id" as "id", "ad"."category_id" as "categoryId", "category"."category_key" as "categoryName", "category"."category_key" as "subcategoryName", "ad"."user_id" as "sellerId", "user"."fullname" as "sellerName", "user"."username" as "phoneNumber", "ad"."slug" as "slug", "user"."profile_image_url" as "sellerImageUrl", "ad"."city_id" as "location", COUNT(DISTINCT "views"."user_view_id") as "viewCount", MIN("images"."image_url") as "imageUrl", COUNT("images"."id") as "pictureCount", "ad"."is_sold" as "sold", "ad"."title" as "title", "ad"."price" as "price", "ad"."create_datetime" as "postedAt", "ad"."create_datetime" as "postedTimeAgo", "ad"."create_datetime" as "postedTimeAgoString" FROM "trn_automobile_ads" "ad" LEFT JOIN "cfg_automobile_categories" "category" ON "category"."automobile_cat_id" = "ad"."category_id"  LEFT JOIN "users" "user" ON "user"."user_id" = "ad"."user_id"  LEFT JOIN "trn_automobile_ad_images" "images" ON "images"."ad_id" = "ad"."auto_ad_id"  LEFT JOIN "trn_user_views" "views" ON "views"."ad_id" = "ad"."auto_ad_id" GROUP BY "ad"."auto_ad_id", "category"."category_key", "user"."fullname", "user"."username", "user"."profile_image_url", "ad"."slug", "ad"."title", "ad"."price", "ad"."create_datetime", "ad"."is_sold"`,
    );
    await queryRunner.query(
      `INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES (DEFAULT, $1, DEFAULT, $2, $3, $4)`,
      [
        'public',
        'MATERIALIZED_VIEW',
        'vw_automobile_ads',
        'SELECT "ad"."auto_ad_id" as "id", "ad"."category_id" as "categoryId", "category"."category_key" as "categoryName", "category"."category_key" as "subcategoryName", "ad"."user_id" as "sellerId", "user"."fullname" as "sellerName", "user"."username" as "phoneNumber", "ad"."slug" as "slug", "user"."profile_image_url" as "sellerImageUrl", "ad"."city_id" as "location", COUNT(DISTINCT "views"."user_view_id") as "viewCount", MIN("images"."image_url") as "imageUrl", COUNT("images"."id") as "pictureCount", "ad"."is_sold" as "sold", "ad"."title" as "title", "ad"."price" as "price", "ad"."create_datetime" as "postedAt", "ad"."create_datetime" as "postedTimeAgo", "ad"."create_datetime" as "postedTimeAgoString" FROM "trn_automobile_ads" "ad" LEFT JOIN "cfg_automobile_categories" "category" ON "category"."automobile_cat_id" = "ad"."category_id"  LEFT JOIN "users" "user" ON "user"."user_id" = "ad"."user_id"  LEFT JOIN "trn_automobile_ad_images" "images" ON "images"."ad_id" = "ad"."auto_ad_id"  LEFT JOIN "trn_user_views" "views" ON "views"."ad_id" = "ad"."auto_ad_id" GROUP BY "ad"."auto_ad_id", "category"."category_key", "user"."fullname", "user"."username", "user"."profile_image_url", "ad"."slug", "ad"."title", "ad"."price", "ad"."create_datetime", "ad"."is_sold"',
      ],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "schema" = $3`,
      ['MATERIALIZED_VIEW', 'vw_automobile_ads', 'public'],
    );
    await queryRunner.query(`DROP MATERIALIZED VIEW "vw_automobile_ads"`);
    await queryRunner.query(
      `DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "schema" = $3`,
      ['MATERIALIZED_VIEW', 'vw_homepage_latest_ads', 'public'],
    );
    await queryRunner.query(`DROP MATERIALIZED VIEW "vw_homepage_latest_ads"`);
    await queryRunner.query(
      `ALTER TABLE "approved_automobile_ad_snapshots" DROP CONSTRAINT "FK_3d12619118b8b6a7a96c1e1c983"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cfg_automobile_models" DROP CONSTRAINT "FK_fb426ed869104a2c8785cee4bcd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cfg_automobile_makes" DROP CONSTRAINT "FK_bbc18af2fdc20ad70d8fdf1a246"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cfg_automobile_categories" DROP CONSTRAINT "FK_fea889f5075e30ad1779b3715b8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cfg_cities" DROP CONSTRAINT "FK_6f0eeca7abbf4ef48a5f9199d55"`,
    );
    await queryRunner.query(`DROP TABLE "cfg_categories"`);
    await queryRunner.query(`DROP TABLE "approved_automobile_ad_snapshots"`);
    await queryRunner.query(`DROP TABLE "trn_user_views"`);
    await queryRunner.query(`DROP TABLE "trn_automobile_auditlogs"`);
    await queryRunner.query(`DROP TABLE "trn_automobile_ad_attributes"`);
    await queryRunner.query(`DROP TABLE "cfg_automobile_attribute_options"`);
    await queryRunner.query(`DROP TABLE "cfg_automobile_attributes"`);
    await queryRunner.query(`DROP TABLE "trn_automobile_ad_images"`);
    await queryRunner.query(`DROP TABLE "trn_automobile_ads"`);
    await queryRunner.query(`DROP TABLE "cfg_automobile_models"`);
    await queryRunner.query(`DROP TABLE "cfg_automobile_makes"`);
    await queryRunner.query(`DROP TABLE "cfg_automobile_categories"`);
    await queryRunner.query(`DROP TABLE "trn_sponsored_ads"`);
    await queryRunner.query(`DROP TABLE "cfg_cities"`);
    await queryRunner.query(`DROP TABLE "cfg_states"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
