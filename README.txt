Try the app at http://54.172.250.28:3000/homepage
Steps to run:

1. In cmd, cd to the folder where you have extracted the project folder, lets say 'C:\project'.

SET-UP:
-- Run 'npm install' in cmd
-- Install the required modules i.e run the following .
   npm update
   
-- Set up Database

database used:Mysql
user:root
password:(none)

table sql: 
i)
CREATE DATABASE STUDENTS;

ii)
CREATE TABLE `student` (
	`student_id` INT(11) NOT NULL AUTO_INCREMENT,
	`rollNo` INT(11) NULL DEFAULT NULL,
	`gender` CHAR(1) NULL DEFAULT NULL,
	`first_name` VARCHAR(50) NULL DEFAULT NULL,
	`last_name` VARCHAR(50) NULL DEFAULT NULL,
	`phone` VARCHAR(20) NULL DEFAULT NULL,
	`degree` VARCHAR(50) NULL DEFAULT NULL,
	`college` VARCHAR(50) NULL DEFAULT NULL,
	`branch` VARCHAR(50) NULL DEFAULT NULL,
	`email` VARCHAR(50) NULL DEFAULT NULL,
	`dob` DATE NULL DEFAULT NULL,
	`date_created` DATETIME NULL DEFAULT NULL,
	`last_modified` DATETIME NULL DEFAULT NULL,
	PRIMARY KEY (`student_id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;


iii)
TRIGGERS:

create trigger student_trigger before insert on student FOR each ROW SET NEW.date_created=NOW(),NEW.last_modified=NOW();




3. Run 'npm start'.

4. Go to 'localhost:3000/homepage' in the browser.
