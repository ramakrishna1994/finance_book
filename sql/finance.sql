-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2018 at 02:51 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `finance`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `account_no` varchar(100) NOT NULL,
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


