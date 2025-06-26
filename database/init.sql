/*
 Navicat PostgreSQL Dump SQL

 Source Server         : localhost_5432
 Source Server Type    : PostgreSQL
 Source Server Version : 150008 (150008)
 Source Host           : localhost:5432
 Source Catalog        : hometest
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 150008 (150008)
 File Encoding         : 65001

 Date: 26/06/2025 21:37:25
*/


-- ----------------------------
-- Sequence structure for Employee_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."Employee_id_seq";
CREATE SEQUENCE "public"."Employee_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for LeaveApplication_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."LeaveApplication_id_seq";
CREATE SEQUENCE "public"."LeaveApplication_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for LeaveBalance_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."LeaveBalance_id_seq";
CREATE SEQUENCE "public"."LeaveBalance_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for LeaveType_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."LeaveType_id_seq";
CREATE SEQUENCE "public"."LeaveType_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for User_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."User_id_seq";
CREATE SEQUENCE "public"."User_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for Employee
-- ----------------------------
DROP TABLE IF EXISTS "public"."Employee";
CREATE TABLE "public"."Employee" (
  "id" int4 NOT NULL DEFAULT nextval('"Employee_id_seq"'::regclass),
  "firstName" text COLLATE "pg_catalog"."default" NOT NULL,
  "lastName" text COLLATE "pg_catalog"."default" NOT NULL,
  "email" text COLLATE "pg_catalog"."default" NOT NULL,
  "role" text COLLATE "pg_catalog"."default" NOT NULL,
  "dateJoined" timestamp(3) NOT NULL,
  "status" text COLLATE "pg_catalog"."default" NOT NULL,
  "userId" int4
)
;

-- ----------------------------
-- Records of Employee
-- ----------------------------
INSERT INTO "public"."Employee" VALUES (1, 'test ', 'employee', 'test1@gmail.com', 'employee', '1970-01-01 00:00:00', '', 1);
INSERT INTO "public"."Employee" VALUES (2, 'test', 'manager', 'test2@gmail.com', 'manager', '1970-01-01 00:00:00', '', 2);

-- ----------------------------
-- Table structure for LeaveApplication
-- ----------------------------
DROP TABLE IF EXISTS "public"."LeaveApplication";
CREATE TABLE "public"."LeaveApplication" (
  "id" int4 NOT NULL DEFAULT nextval('"LeaveApplication_id_seq"'::regclass),
  "employeeId" int4 NOT NULL,
  "leaveTypeId" int4 NOT NULL,
  "startDate" timestamp(3) NOT NULL,
  "endDate" timestamp(3) NOT NULL,
  "reason" text COLLATE "pg_catalog"."default",
  "status" text COLLATE "pg_catalog"."default" NOT NULL,
  "appliedDate" timestamp(3),
  "approvedById" int4
)
;

-- ----------------------------
-- Records of LeaveApplication
-- ----------------------------
INSERT INTO "public"."LeaveApplication" VALUES (1, 1, 2, '2025-06-18 17:00:00', '2025-06-27 17:00:00', 'test', 'approved', '2025-06-26 12:39:22.279', 2);

-- ----------------------------
-- Table structure for LeaveBalance
-- ----------------------------
DROP TABLE IF EXISTS "public"."LeaveBalance";
CREATE TABLE "public"."LeaveBalance" (
  "id" int4 NOT NULL DEFAULT nextval('"LeaveBalance_id_seq"'::regclass),
  "employeeId" int4 NOT NULL,
  "leaveTypeId" int4 NOT NULL,
  "year" int4 NOT NULL,
  "totalAllocated" int4 NOT NULL,
  "totalUsed" int4 NOT NULL,
  "totalRemaining" int4 NOT NULL
)
;

-- ----------------------------
-- Records of LeaveBalance
-- ----------------------------
INSERT INTO "public"."LeaveBalance" VALUES (2, 1, 2, 2025, 10, 0, 10);
INSERT INTO "public"."LeaveBalance" VALUES (1, 1, 1, 2025, 10, 9, 1);

-- ----------------------------
-- Table structure for LeaveType
-- ----------------------------
DROP TABLE IF EXISTS "public"."LeaveType";
CREATE TABLE "public"."LeaveType" (
  "id" int4 NOT NULL DEFAULT nextval('"LeaveType_id_seq"'::regclass),
  "typeName" text COLLATE "pg_catalog"."default" NOT NULL,
  "description" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of LeaveType
-- ----------------------------
INSERT INTO "public"."LeaveType" VALUES (1, 'Sick', NULL);
INSERT INTO "public"."LeaveType" VALUES (2, 'Birth Day', NULL);

-- ----------------------------
-- Table structure for User
-- ----------------------------
DROP TABLE IF EXISTS "public"."User";
CREATE TABLE "public"."User" (
  "id" int4 NOT NULL DEFAULT nextval('"User_id_seq"'::regclass),
  "email" text COLLATE "pg_catalog"."default" NOT NULL,
  "password" text COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of User
-- ----------------------------
INSERT INTO "public"."User" VALUES (2, 'test2@gmail.com', '123456');
INSERT INTO "public"."User" VALUES (1, 'test1@gmail.com', '123456');

-- ----------------------------
-- Table structure for _prisma_migrations
-- ----------------------------
DROP TABLE IF EXISTS "public"."_prisma_migrations";
CREATE TABLE "public"."_prisma_migrations" (
  "id" varchar(36) COLLATE "pg_catalog"."default" NOT NULL,
  "checksum" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "finished_at" timestamptz(6),
  "migration_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "logs" text COLLATE "pg_catalog"."default",
  "rolled_back_at" timestamptz(6),
  "started_at" timestamptz(6) NOT NULL DEFAULT now(),
  "applied_steps_count" int4 NOT NULL DEFAULT 0
)
;

-- ----------------------------
-- Records of _prisma_migrations
-- ----------------------------
INSERT INTO "public"."_prisma_migrations" VALUES ('dd19d6e8-d854-4d63-80eb-d75e543da55d', 'caa2af059b09071b470de1a99400b7d558ef0294bd705d26f8ce9bdbcfeea167', '2025-06-26 12:34:09.14826+00', '20250625074816_test', NULL, NULL, '2025-06-26 12:34:09.112735+00', 1);
INSERT INTO "public"."_prisma_migrations" VALUES ('a10aeecc-4e0e-455c-8131-0b06d8aabc0c', 'bfe83f86275ad91122e9792f24e8bb78935e76bd7b3da10ae4b2a4c550157e0f', '2025-06-26 12:34:09.172344+00', '20250625083252_user_employee_relation', NULL, NULL, '2025-06-26 12:34:09.150378+00', 1);
INSERT INTO "public"."_prisma_migrations" VALUES ('036beb23-17b5-4ccc-933f-e5f02bfac970', '8455519e28bb198f7db91c33a5c712afb57c24e3f110b083de1ce90fcdc546f6', '2025-06-26 12:34:09.180335+00', '20250625160705_abc', NULL, NULL, '2025-06-26 12:34:09.174496+00', 1);
INSERT INTO "public"."_prisma_migrations" VALUES ('44491e80-2684-4c0b-826e-e3742c5d082b', '7268b72b080121186f80e13e03124c022f301c84a8a3037aec45b39efbd6cc40', '2025-06-26 12:35:15.362859+00', '20250626123515_init', NULL, NULL, '2025-06-26 12:35:15.354623+00', 1);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."Employee_id_seq"
OWNED BY "public"."Employee"."id";
SELECT setval('"public"."Employee_id_seq"', 2, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."LeaveApplication_id_seq"
OWNED BY "public"."LeaveApplication"."id";
SELECT setval('"public"."LeaveApplication_id_seq"', 1, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."LeaveBalance_id_seq"
OWNED BY "public"."LeaveBalance"."id";
SELECT setval('"public"."LeaveBalance_id_seq"', 2, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."LeaveType_id_seq"
OWNED BY "public"."LeaveType"."id";
SELECT setval('"public"."LeaveType_id_seq"', 2, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."User_id_seq"
OWNED BY "public"."User"."id";
SELECT setval('"public"."User_id_seq"', 2, true);

-- ----------------------------
-- Indexes structure for table Employee
-- ----------------------------
CREATE UNIQUE INDEX "Employee_email_key" ON "public"."Employee" USING btree (
  "email" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "Employee_userId_key" ON "public"."Employee" USING btree (
  "userId" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table Employee
-- ----------------------------
ALTER TABLE "public"."Employee" ADD CONSTRAINT "Employee_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table LeaveApplication
-- ----------------------------
ALTER TABLE "public"."LeaveApplication" ADD CONSTRAINT "LeaveApplication_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table LeaveBalance
-- ----------------------------
ALTER TABLE "public"."LeaveBalance" ADD CONSTRAINT "LeaveBalance_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table LeaveType
-- ----------------------------
ALTER TABLE "public"."LeaveType" ADD CONSTRAINT "LeaveType_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table User
-- ----------------------------
CREATE UNIQUE INDEX "User_email_key" ON "public"."User" USING btree (
  "email" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table User
-- ----------------------------
ALTER TABLE "public"."User" ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table _prisma_migrations
-- ----------------------------
ALTER TABLE "public"."_prisma_migrations" ADD CONSTRAINT "_prisma_migrations_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table Employee
-- ----------------------------
ALTER TABLE "public"."Employee" ADD CONSTRAINT "Employee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table LeaveApplication
-- ----------------------------
ALTER TABLE "public"."LeaveApplication" ADD CONSTRAINT "LeaveApplication_approvedById_fkey" FOREIGN KEY ("approvedById") REFERENCES "public"."Employee" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."LeaveApplication" ADD CONSTRAINT "LeaveApplication_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."LeaveApplication" ADD CONSTRAINT "LeaveApplication_leaveTypeId_fkey" FOREIGN KEY ("leaveTypeId") REFERENCES "public"."LeaveType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table LeaveBalance
-- ----------------------------
ALTER TABLE "public"."LeaveBalance" ADD CONSTRAINT "LeaveBalance_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."LeaveBalance" ADD CONSTRAINT "LeaveBalance_leaveTypeId_fkey" FOREIGN KEY ("leaveTypeId") REFERENCES "public"."LeaveType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
