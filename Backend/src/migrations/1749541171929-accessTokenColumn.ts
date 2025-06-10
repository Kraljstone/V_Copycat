import { MigrationInterface, QueryRunner } from 'typeorm';

export class AccessTokenColumn1749541171929 implements MigrationInterface {
  name = 'AccessTokenColumn1749541171929';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" ADD "access_token" character varying(255)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" ADD "access_token" character varying(255)`);
  }
}
