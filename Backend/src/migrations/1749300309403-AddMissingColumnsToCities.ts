import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMissingColumnsToCities1749300309403 implements MigrationInterface {
  name = 'AddMissingColumnsToCities1749300309403';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "cfg_cities" 
      ADD COLUMN IF NOT EXISTS "create_datetime" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      ADD COLUMN IF NOT EXISTS "update_datetime" TIMESTAMP;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "cfg_cities" 
      DROP COLUMN IF EXISTS "create_datetime",
      DROP COLUMN IF EXISTS "update_datetime";
    `);
  }
}
