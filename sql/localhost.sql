-- phpMyAdmin SQL Dump
-- version 4.0.10.18
-- https://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jun 30, 2018 at 11:55 AM
-- Server version: 5.6.39-cll-lve
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `finance_book`
--

-- --------------------------------------------------------

--
-- Table structure for table `deleted_users`
--

CREATE TABLE IF NOT EXISTS `deleted_users` (
  `account_no` varchar(20) NOT NULL,
  `start_date` varchar(15) NOT NULL,
  `name` varchar(255) NOT NULL,
  `days` int(4) NOT NULL,
  `fine_days` int(2) NOT NULL,
  `address` varchar(255) NOT NULL,
  `princ_amount` int(20) NOT NULL,
  `daily` int(20) NOT NULL,
  `interest` int(20) NOT NULL,
  `fine` int(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `aadhar` varchar(25) NOT NULL,
  `extras` varchar(255) NOT NULL,
  `pic` varchar(100) NOT NULL,
  `pay_hist` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `deleted_users`
--

INSERT INTO `deleted_users` (`account_no`, `start_date`, `name`, `days`, `fine_days`, `address`, `princ_amount`, `daily`, `interest`, `fine`, `phone`, `aadhar`, `extras`, `pic`, `pay_hist`) VALUES
('2250', '', 'suresh', 50, 1, 'h.no 37-410', 5000, 100, 500, 0, '9701262864', '849961961741', 'nothing', '', ''),
('25226098', '18-06-2018', 'ramakrishna', 30, 1, 'asd qwe, / +123 adas ramakrishna', 100000, 2000, 2000, 200, '9553304094', '7056578320497', 'nothing so much', '', '18-06-2018:2300,19-06-2018:3300'),
('2256', '', 'Jagadish c/o Sravan', 100, 3, 'hhhh ', 10000, 100, 1600, 100, '8008305729', 'jjjj', 'hhhh', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`username`, `password`) VALUES
('suresh', 'suresh');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `account_no` varchar(100) NOT NULL,
  `start_date` varchar(15) NOT NULL,
  `name` varchar(255) NOT NULL,
  `days` int(4) NOT NULL,
  `fine_days` int(2) NOT NULL,
  `address` varchar(255) NOT NULL,
  `princ_amount` int(20) NOT NULL,
  `daily` int(20) NOT NULL,
  `interest` int(20) NOT NULL,
  `fine` int(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `aadhar` varchar(25) NOT NULL,
  `extras` varchar(255) NOT NULL,
  `pic` varchar(100) NOT NULL,
  `pay_hist` text NOT NULL,
  PRIMARY KEY (`account_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`account_no`, `start_date`, `name`, `days`, `fine_days`, `address`, `princ_amount`, `daily`, `interest`, `fine`, `phone`, `aadhar`, `extras`, `pic`, `pay_hist`) VALUES
('2251', '', 'Srikanth c/o Raghu', 100, 3, 'hhhh', 10000, 100, 1600, 100, '7093235003', 'jjjj', 'hhhh', '', '31-05-2018:200,01-06-2018:100,01-06-2018:100,02-06-2018:100'),
('2252', '', 'Ravi c/o mahesh(umaesh)', 100, 3, 'hhhh ', 10000, 100, 1600, 100, '8125829866', 'jjjj', 'hhhh', '', '01-06-2018:100,02-06-2018:100,03-06-2018:100'),
('2253', '', 'Kotesh c/o devsingh', 100, 3, 'hhhh ', 20000, 200, 3200, 200, '8790508223', 'jjjj', 'hhhh', '', '01-06-2018:200,02-06-2018:200,03-06-2018:200,03-06-2018:200'),
('2254', '', 'Surender c/o Rondal Reddy', 100, 3, 'hhhh ', 20000, 200, 3200, 200, '7702323160', 'jjjj', 'hhhh', '', '01-06-2018:200,02-06-2018:200,03-06-2018:200'),
('2255', '', 'K.vijay c/o Irfan', 100, 3, 'hhhh ', 20000, 200, 3200, 200, '9030076859', 'jjjj', 'hhhh', '', ''),
('2256', '31-05-2018', 'T srinu c/o lakpathi', 100, 3, 'jjj', 10000, 100, 1600, 100, '9573199757', 'jjj', 'hhh', '', ''),
('2257', '31-05-2018', 'Jagadish c/o sravan', 50, 3, 'jjj', 15000, 300, 1500, 300, '8008305729', 'jjj', 'hhh', '', ''),
('2258', '', 'CH.Nagesh c/o Raghu', 50, 1, 'gggg', 15000, 300, 1500, 300, '7075168172', '1111', 'hhh', '', ''),
('2259', '', 'Vishnu ', 50, 1, 'gggg', 10000, 100, 1500, 100, '9705575085', '1111', 'hhh', '', ''),
('2260', '', 'Dr.Sager c/o Niranjan Reddy', 50, 3, 'gggg', 40000, 800, 4000, 800, '9705575085', '1111', 'hhh', '', ''),
('2261', '', 'Syed Ramzan c/o Prabhaker', 50, 3, 'gggg', 10000, 100, 1000, 100, '9177020877', '1111', 'hhh', '', '5-06-2018:400,09-06-2018:600'),
('2262', '', 'N.sai c/o Decoration', 50, 3, 'hhhh', 10000, 200, 1000, 200, '9390994951', 'hhh', 'hhh', '', '06-06-2018:800,10-06-2018:200,07-06-2018:500,08-06-2018:500,10-06-2018:200'),
('2263', '', 'P.upender c/o Yakaiah', 50, 3, 'hhhh', 10000, 200, 1000, 200, '9705760184', 'hhh', 'hhh', '', ''),
('2264', '', 'K.siddu c/o shiva', 50, 3, 'hhhh', 10000, 200, 1000, 200, '9912524768', 'hhh', 'hhh', '', '06-06-2018:200,07-06-2018:200,08-06-2018:200,09-06-2018:200'),
('2265', '', 'Prabhaker c/o sravan', 50, 3, 'hhhh', 30000, 600, 3000, 600, '9885486611', 'hhh', 'hhh', '', '08-06-2018:1200,09-06-2018:600,09-06-2018:600'),
('2266', '', 'Gangaram c/o pandu', 50, 3, 'hhhh', 15000, 300, 1500, 300, '7396180252', 'hhh', 'hhh', '', '07-06-2018:300,07-06-2018:300,08-06-2018:300'),
('2267', '', 'D.Durga Prasad c/o Akbar', 100, 1, 'hhh', 50000, 500, 8000, 500, '7780293987', 'jjj', 'gg', '', '08-06-2018:500,08-06-2018:500'),
('2268', '', 'E.Kiran c/o karunaker', 50, 3, 'hhh', 10000, 200, 1000, 200, '9000604830', 'jjj', 'gg', '', ''),
('2269', '', 'Anjilappa c/o Srinu(karnataka)', 100, 3, 'hhh', 15000, 150, 2400, 150, '7997171099', 'hhh', 'hh', '', '09-06-2018:300,09-06-2018:300,10-06-2018:300,10-06-2018:300,09-06-2018:600,09-06-2018:600'),
('2270', '', 'P.Karunaker Reddy', 100, 3, 'hhh', 30000, 3000, 4800, 300, '7013456523', 'hhh', 'hh', '', ''),
('2271', '', 'G.saikrishna(kittu) c/o mechanic srinath', 100, 3, 'hhh', 10000, 100, 1600, 100, '9014992143', 'hhh', 'hh', '', ''),
('2272', '', 'sambashiva rao c/o prabhaker', 50, 3, 'hhh', 30000, 600, 3000, 600, '9618553773', 'hhh', 'hh', '', '14-06-2018:1400,16-06-2018:600'),
('2273', '', 'Padma c/o Yadagiri', 100, 3, 'hhh', 20000, 200, 3200, 200, '9866749357', 'hhh', 'hh', '', '14-06-2018:200,25-06-2018:200,17-06-2018:400'),
('2274', '', 'Kranthi', 50, 3, 'hhh', 20000, 400, 2000, 400, '9666177231', 'hhh', 'hh', '', '17-06-2018:800'),
('2275', '15-06-2018', 'P.Srinivas c/o V.srinivas', 50, 3, 'hhh', 20000, 400, 2000, 400, '9010190537', 'ggg', 'jjj', '', '16-06-2018:400,17-06-2018:400'),
('2276', '15-06-2018', 'yosuf c/o mechanic', 50, 3, 'hhh', 30000, 600, 3000, 600, '9346601189', 'ggg', 'jjj', '', ''),
('2277', '16-06-2018', 'M.Rupesh varma c/o prabhaker', 50, 3, 'hhh', 10000, 200, 1000, 200, '6309143567', 'ggg', 'jjj', '', '17-06-2018:1400'),
('2278', '18-06-2018', 'M.Sanjeev bakery c/o shivaji', 50, 3, 'hhh', 10000, 200, 1000, 200, '8977751022', 'ggg', 'jjj', '', '19-06-2018:200,20-06-2018:200,22-06-2018:400,23-06-2018:200,24-06-2018:200'),
('2279', '19-06-2018', 'V.Ramesh c/o ramesh', 50, 3, 'hhh', 30000, 600, 3000, 600, '8125414104', 'ggg', 'jjj', '', '20-06-2018:600,21-06-2018:600,22-06-2018:600,23-06-2018:600,24-06-2018:600'),
('2280', '19-06-2018', 'G.Narender c/o yadagiri', 50, 3, 'hhh', 10000, 200, 1000, 200, '8179107134', 'ggg', 'jjj', '', '20-06-2018:200,21-06-2018:200,22-06-2018:200,23-06-2018:200,24-06-2018:200'),
('2281', '20-06-2018', 'Imran c/o Gym frnd', 100, 3, 'jjj', 20000, 200, 3200, 200, '8686625786', 'hhh', 'hhhh', '', '21-06-2018:1400'),
('2282', '20-06-2018', 'Anjaiah c/o auto', 50, 3, 'jjj', 25000, 500, 2500, 500, '9989254079', 'hhh', 'hhhh', '', '24-06-2018:500'),
('2283', '20-06-2018', 'Ramesh c/o Praveen', 50, 3, 'jjj', 40000, 800, 4000, 800, '8639735688', 'hhh', 'hhhh', '', '24-06-2018:800,26-06-2018:1600,28-06-2018:1600'),
('2284', '20-06-2018', 'Ramesh c/o Karnataka', 100, 3, 'jjj', 20000, 200, 3200, 200, '8184831870', 'hhh', 'hhhh', '', '26-06-2018:200,28-06-2018:200'),
('2285', '20-06-2018', 'Yallaiah c/o Anji', 50, 3, 'jjj', 10000, 200, 1000, 200, '9704497084', 'hhh', 'hhhh', '', '26-06-2018:200'),
('2286', '25-06-2018', 'Ravi c/o satish', 50, 3, 'hhh', 10000, 200, 1000, 200, '960385238', 'jjj', 'hhh', '', '28-06-2018:800'),
('2287', '25-06-2018', 'Umaesh c/o mechanic', 100, 3, 'hhh', 30000, 450, 4800, 450, '9948916717', 'jjj', 'hhh', '', '26-06-2018:400,27-06-2018:400'),
('2288', '26-06-2018', 'K srinu c/o gangaram', 50, 3, 'hhh', 10000, 200, 1000, 200, '9666362708', 'jjj', 'hhh', '', '27-06-2018:600'),
('2289', '26-06-2018', 'M.Janardan c/o yasu`', 100, 3, 'hhh', 10000, 100, 1600, 100, '9963199989', 'jjj', 'hhh', '', '27-06-2018:100,28-06-2018:100,28-06-2018:100'),
('2290', '26-06-2018', 'Tirupathi c/o srinu', 100, 3, 'hhh', 10000, 100, 1600, 100, '8106963692', 'jjj', 'hhh', '', ''),
('2291', '26-06-2018', 'Suman c/o Lakpaathi', 100, 3, 'jjj', 25000, 250, 4000, 250, '9676965114', 'hhh', 'jjjj', '', '28-06-2018:250');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
