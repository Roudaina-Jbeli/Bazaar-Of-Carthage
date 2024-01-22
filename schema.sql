-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tunisian
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tunisian
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tunisian` DEFAULT CHARACTER SET utf8mb3 ;
USE `tunisian` ;

-- -----------------------------------------------------
-- Table `tunisian`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tunisian`.`products` (
  `ProductID` INT NOT NULL AUTO_INCREMENT,
  `productName` VARCHAR(1000) NOT NULL,
  `price` INT NOT NULL,
  `image` VARCHAR(10000) NULL DEFAULT NULL,
  PRIMARY KEY (`ProductID`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
