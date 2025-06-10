import { MigrationInterface, QueryRunner } from 'typeorm';

export class RealEstateCreation1749302844893 implements MigrationInterface {
  name = 'RealEstateCreation1749302844893';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cfg_realestate_categories" ("real_estate_cat_id" SERIAL NOT NULL, "module_id" integer NOT NULL, "category_key" character varying(255) NOT NULL, "cat_create_datetime" TIMESTAMP NOT NULL DEFAULT now(), "cat_last_update_datetime" TIMESTAMP, CONSTRAINT "UQ_64f4c187794eecfdcae7497a0ad" UNIQUE ("category_key"), CONSTRAINT "PK_3d9e083e03e031caaa32f79b816" PRIMARY KEY ("real_estate_cat_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "cfg_real_estate_attributes" ("id" SERIAL NOT NULL, "category_id" integer NOT NULL, "att_key" character varying(255) NOT NULL, "is_multi_choice" boolean NOT NULL DEFAULT false, "is_required" boolean NOT NULL DEFAULT false, "is_feature" boolean NOT NULL DEFAULT false, "create_datetime" TIMESTAMP NOT NULL DEFAULT now(), "update_datetime" TIMESTAMP, CONSTRAINT "PK_481cc9d586300020b40654448ee" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "cfg_realestate_options" ("att_option_id" SERIAL NOT NULL, "att_id" integer NOT NULL, "att_option_key" character varying(255) NOT NULL, "create_datetime" TIMESTAMP NOT NULL DEFAULT now(), "update_datetime" TIMESTAMP, CONSTRAINT "PK_dab10aa328c8d82786ce8d0afff" PRIMARY KEY ("att_option_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "trn_real_estate_ads" ("estate_id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "description" text, "price" numeric(12,2) NOT NULL, "user_id" integer NOT NULL, "is_in_review" boolean, "is_live" boolean, "is_archived" boolean, "review_start_datetime" TIMESTAMP, "approved_datetime" TIMESTAMP, "archived_datetime" TIMESTAMP, "live_datetime" TIMESTAMP, "last_update_datetime" TIMESTAMP, "area_size" numeric(10,2), "closet_landmark" character varying(255), "street_size" numeric(10,2), "has_land_title" boolean, "is_on_corner" boolean, "latitude" numeric(9,6), "longitude" numeric(9,6), "city_id" integer NOT NULL, "is_for_rent" boolean, "is_for_sale" boolean, CONSTRAINT "PK_0461eb284592081b0ec94ee8016" PRIMARY KEY ("estate_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "trn_realestate_ad_attributes" ("id" SERIAL NOT NULL, "ad_id" integer NOT NULL, "att_id" integer NOT NULL, "option_id" integer, "custom_value" character varying(255), "has_custom_value" boolean NOT NULL DEFAULT false, "create_datetime" TIMESTAMP NOT NULL DEFAULT now(), "update_datetime" TIMESTAMP, CONSTRAINT "PK_46e94ae48ce16562dcecfe88f00" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "trn_user_fav_ads" ("id" SERIAL NOT NULL, "ad_id" integer NOT NULL, "module_id" integer NOT NULL, "user_id" integer NOT NULL, "favorite_datetime" TIMESTAMP, CONSTRAINT "PK_f786d9b3c4aa2fc74ed27668bb5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "trn_user_fav_history" ("id" SERIAL NOT NULL, "ad_id" integer NOT NULL, "module_id" integer NOT NULL, "user_id" integer NOT NULL, "removed_datetime" TIMESTAMP, CONSTRAINT "PK_582b8841c4ed674260843d037e1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "cfg_states" ADD "create_datetime" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(`ALTER TABLE "cfg_states" ADD "update_datetime" TIMESTAMP`);
    await queryRunner.query(
      `ALTER TABLE "cfg_states" DROP CONSTRAINT "UQ_7ee1415545225f208b419c01fd6"`,
    );
    await queryRunner.query(`ALTER TABLE "cfg_states" DROP COLUMN "name_key"`);
    await queryRunner.query(`ALTER TABLE "cfg_states" ADD "name_key" character varying(255)`);
    await queryRunner.query(
      `ALTER TABLE "cfg_states" ADD CONSTRAINT "UQ_7ee1415545225f208b419c01fd6" UNIQUE ("name_key")`,
    );
    await queryRunner.query(
      `ALTER TABLE "cfg_realestate_categories" ADD CONSTRAINT "FK_2cc863705b3838cf4d1166b29d7" FOREIGN KEY ("module_id") REFERENCES "cfg_categories"("module_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "cfg_real_estate_attributes" ADD CONSTRAINT "FK_7bf417d63b8f09ffe3ce1778bb7" FOREIGN KEY ("category_id") REFERENCES "cfg_realestate_categories"("real_estate_cat_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "cfg_realestate_options" ADD CONSTRAINT "FK_c99d5c7eadf4bab46814c8239fa" FOREIGN KEY ("att_id") REFERENCES "cfg_real_estate_attributes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_real_estate_ads" ADD CONSTRAINT "FK_afa03033fbc1c17d51736a601fd" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_real_estate_ads" ADD CONSTRAINT "FK_5b1e866c0c536ad60c8eaf783af" FOREIGN KEY ("city_id") REFERENCES "cfg_cities"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_realestate_ad_attributes" ADD CONSTRAINT "FK_792b4375c2095f3b15bd8b73b1b" FOREIGN KEY ("ad_id") REFERENCES "trn_real_estate_ads"("estate_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_realestate_ad_attributes" ADD CONSTRAINT "FK_2bed135b8da1a82f608731e96ff" FOREIGN KEY ("att_id") REFERENCES "cfg_real_estate_attributes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_realestate_ad_attributes" ADD CONSTRAINT "FK_29a4bdcff0816afd7431cc8a592" FOREIGN KEY ("option_id") REFERENCES "cfg_realestate_options"("att_option_id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_user_fav_ads" ADD CONSTRAINT "FK_be246029a32efa4016097b1e46a" FOREIGN KEY ("ad_id") REFERENCES "trn_real_estate_ads"("estate_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_user_fav_ads" ADD CONSTRAINT "FK_eb0887980ac98f5794cfb242d9a" FOREIGN KEY ("module_id") REFERENCES "cfg_categories"("module_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_user_fav_ads" ADD CONSTRAINT "FK_04610368cce45afd8e078edf130" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_user_fav_history" ADD CONSTRAINT "FK_209bfff15da7f20fc1668b54846" FOREIGN KEY ("ad_id") REFERENCES "trn_real_estate_ads"("estate_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_user_fav_history" ADD CONSTRAINT "FK_9e7e4ace404db4cd3afc117c9b4" FOREIGN KEY ("module_id") REFERENCES "cfg_categories"("module_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_user_fav_history" ADD CONSTRAINT "FK_09dee08343b83948468906e1f0a" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "trn_user_fav_history" DROP CONSTRAINT "FK_09dee08343b83948468906e1f0a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_user_fav_history" DROP CONSTRAINT "FK_9e7e4ace404db4cd3afc117c9b4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_user_fav_history" DROP CONSTRAINT "FK_209bfff15da7f20fc1668b54846"`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_user_fav_ads" DROP CONSTRAINT "FK_04610368cce45afd8e078edf130"`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_user_fav_ads" DROP CONSTRAINT "FK_eb0887980ac98f5794cfb242d9a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_user_fav_ads" DROP CONSTRAINT "FK_be246029a32efa4016097b1e46a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_realestate_ad_attributes" DROP CONSTRAINT "FK_29a4bdcff0816afd7431cc8a592"`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_realestate_ad_attributes" DROP CONSTRAINT "FK_2bed135b8da1a82f608731e96ff"`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_realestate_ad_attributes" DROP CONSTRAINT "FK_792b4375c2095f3b15bd8b73b1b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_real_estate_ads" DROP CONSTRAINT "FK_5b1e866c0c536ad60c8eaf783af"`,
    );
    await queryRunner.query(
      `ALTER TABLE "trn_real_estate_ads" DROP CONSTRAINT "FK_afa03033fbc1c17d51736a601fd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cfg_realestate_options" DROP CONSTRAINT "FK_c99d5c7eadf4bab46814c8239fa"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cfg_real_estate_attributes" DROP CONSTRAINT "FK_7bf417d63b8f09ffe3ce1778bb7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cfg_realestate_categories" DROP CONSTRAINT "FK_2cc863705b3838cf4d1166b29d7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "cfg_states" DROP CONSTRAINT "UQ_7ee1415545225f208b419c01fd6"`,
    );
    await queryRunner.query(`ALTER TABLE "cfg_states" DROP COLUMN "name_key"`);
    await queryRunner.query(`ALTER TABLE "cfg_states" ADD "name_key" character varying`);
    await queryRunner.query(
      `ALTER TABLE "cfg_states" ADD CONSTRAINT "UQ_7ee1415545225f208b419c01fd6" UNIQUE ("name_key")`,
    );
    await queryRunner.query(`ALTER TABLE "cfg_states" DROP COLUMN "update_datetime"`);
    await queryRunner.query(`ALTER TABLE "cfg_states" DROP COLUMN "create_datetime"`);
    await queryRunner.query(`DROP TABLE "trn_user_fav_history"`);
    await queryRunner.query(`DROP TABLE "trn_user_fav_ads"`);
    await queryRunner.query(`DROP TABLE "trn_realestate_ad_attributes"`);
    await queryRunner.query(`DROP TABLE "trn_real_estate_ads"`);
    await queryRunner.query(`DROP TABLE "cfg_realestate_options"`);
    await queryRunner.query(`DROP TABLE "cfg_real_estate_attributes"`);
    await queryRunner.query(`DROP TABLE "cfg_realestate_categories"`);
  }
}
