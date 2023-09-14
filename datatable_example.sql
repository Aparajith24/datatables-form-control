SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(50) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `department` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

INSERT INTO `users`(`id`, `username`, `email`, `department`, `city`)
VALUES
('B-119', 'VINOD  KUMAR J', 'VINODKUMARJ@succeedlearn.com', 'Accounts and Finance', 'Bangalore'),
('B-001', 'SANTOSH  KUMAR T', 'SANTOSHKUMART@succeedlearn.com', 'Administration', 'Bangalore'),
('B-063', 'VIVEK VINOD PANADE', 'VIVEKVINODPANADE@succeedlearn.com', 'Administration', 'Bangalore'),
('B-018', 'SOUNDARYA  R', 'SOUNDARYAR@succeedlearn.com', 'Content Development', 'Bangalore'),
('B-078', 'SUSHMITHA  D S', 'SUSHMITHADS@succeedlearn.com', 'Content Development', 'Bangalore'),
('B-128', 'PAVITRA G', 'PAVITRAG@succeedlearn.com', 'Content Development', 'Bangalore'),
('B-134', 'MAHAMMAD ASHFAQ', 'MAHAMMADASHFAQ@succeedlearn.com', 'Content Development', 'Bangalore'),
('B-067', 'SUDHARANI R', 'SUDHARANIR@succeedlearn.com', 'Content Development', 'Bangalore'),
('B-108', 'SINDHUSHREE H S', 'SINDHUSHREEHS@succeedlearn.com', 'Content Development', 'Bangalore'),
('B-047', 'ARVIND A', 'ARVINDA@succeedlearn.com', 'Content Development', 'Bangalore'),
('B-028', 'SAMPOORANI  SUBRAMANI', 'SAMPOORANISUBRAMANI@succeedlearn.com', 'Content Development', 'Bangalore'),
('B-010', 'VIGNESHWARA  M', 'VIGNESHWARAM@succeedlearn.com', 'Customer Success', 'Bangalore'),
('B-112', 'PREETHI MUTHU', 'PREETHIMUTHU@succeedlearn.com', 'Customer Success', 'Bangalore'),
('B-124', 'SIDHANT BHARDWAJ', 'SIDHANTBHARDWAJ@succeedlearn.com', 'Customer Success', 'Bangalore'),
('B-132', 'VISNU SANKER', 'VISNUSANKER@succeedlearn.com', 'Development', 'Bangalore'),
('B-129', 'SHRIYA GUDUDUR', 'SHRIYAGUDUDUR@succeedlearn.com', 'Educational Internship Program', 'Bangalore'),
('B-064', 'SHARAN', 'SHARAN@succeedlearn.com', 'Graphics Design', 'Bangalore'),
('B-130', 'VISHANTH K', 'VISHANTHK@succeedlearn.com', 'Instructional Design', 'Bangalore'),
('B-073', 'MAYA  SREENIVASAN', 'MAYASREENIVASAN@succeedlearn.com', 'Instructional Design', 'Bangalore'),
('B-125', 'MANASWINI MOHAPATARA', 'MANASWINIMOHAPATARA@succeedlearn.com', 'Instructional Design', 'Bangalore'),
('B-118', 'PRIYANKA SATISH KUMAR', 'PRIYANKASATISHKUMAR@succeedlearn.com', 'Instructional Design', 'Bangalore'),
('B-109', 'VISHWADEEP', 'VISHWADEEP@succeedlearn.com', 'Marketing', 'Bangalore'),
('B-081', 'MAHESH  T D', 'MAHESHTD@succeedlearn.com', 'Multimedia', 'Bangalore'),
('B-058', 'SADIQ ULLA  J', 'SADIQULLAJ@succeedlearn.com', 'Multimedia', 'Bangalore'),
('B-039', 'AKALYA T', 'AKALYAT@succeedlearn.com', 'Multimedia', 'Bangalore'),
('B-120', 'NAGESH K E', 'NAGESHKE@succeedlearn.com', 'Multimedia', 'Bangalore'),
('B-135', 'RANINGLUNG MERCY KAMEI', 'RANINGLUNGKAMEI@succeedlearn.com', 'Sales', 'Bangalore'),
('B-123', 'PARTH TIWARI', 'PARTHTIWARI@succeedlearn.com', 'Sales', 'Bangalore'),
('B-075', 'PRUTHVI  N', 'PRUTHVIN@succeedlearn.com', 'Sales', 'Bangalore'),
('B-098', 'SINDOORA  R', 'SINDOORAR@succeedlearn.com', 'Sales', 'Bangalore'),
('B-068', 'POOJA  VIJAY  WAGH', 'POOJAVIJAYWAGH@succeedlearn.com', 'Sales', 'Bangalore'),
('B-133', 'JOHN MOSES', 'JOHNMOSES@succeedlearn.com', 'Sales', 'Bangalore'),
('B-007', 'NOOR MOHAMMED S', 'NOORMOHAMMEDS@succeedlearn.com', 'Software Engineering', 'Bangalore'),
('B-051', 'NIDHI  MEDUR', 'NIDHIMEDUR@succeedlearn.com', 'Software Engineering', 'Bangalore'),
('B-055', 'SRUTHY  K S', 'SRUTHYKS@succeedlearn.com', 'Software Engineering', 'Bangalore'),
('B-069', 'CHAITRA E', 'CHAITRAE@succeedlearn.com', 'Software Engineering', 'Bangalore'),
('B-090', 'ARUN SOUNDARARAJAN', 'ARUNSOUNDARARAJAN@succeedlearn.com', 'Software Engineering', 'Bangalore'),
('B-105', 'RASOOLSAB    ATTAR', 'RASOOLSABATTAR@succeedlearn.com', 'Software Engineering', 'Bangalore'),
('B-136', 'APARAJITH L', 'APARAJITHL@succeedlearn.com', 'Software Engineering', 'Bangalore'),
('B-116', 'BASAVANAGOWDA  D   K   ', 'BASAVANAGOWDAK@succeedlearn.com', 'Software Engineering', 'Bangalore');


COMMIT;
