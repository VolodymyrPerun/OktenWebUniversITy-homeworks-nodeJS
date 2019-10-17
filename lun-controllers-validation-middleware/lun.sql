SET SQL_MODE = '';


CREATE SCHEMA IF NOT EXISTS `lun` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `lun` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lun`.`user` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`house
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lun`.`house` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `square` DOUBLE NULL,
  `city` VARCHAR(50) NULL,
  `price` DOUBLE NULL,
  PRIMARY KEY (`id`))

ENGINE = InnoDB;

INSERT INTO lun.user (id, name, email, password)
VALUES ('1', 'Volodymyr', 'verstkasaytowsnylia@problem.net', 'layout');

INSERT INTO lun.house
(
    id,
    user_id,
    square,
    city,
    price
) values ('1', '1', '67', 'Komarno', '52000');

-- -----------------------------------------------------

SELECT lun.user.id, lun.house.id
FROM lun.user
JOIN lun.house on lun.user.id = lun.house.id;
