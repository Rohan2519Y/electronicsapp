CREATE DATABASE  IF NOT EXISTS `electronicsdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `electronicsdb`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: electronicsdb
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `admins` (
  `mobileno` varchar(45) NOT NULL,
  `emailid` varchar(45) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `picture` text,
  `username` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`mobileno`,`emailid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES ('8654534209','ss@gmail.com','12345',NULL,NULL,NULL),('9039096675','john@gmail.com','1234','john.png','john','John'),('9770015304','anas@gmail.com','1234','anas.png','anas','Anas');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `banner` (
  `bannerid` int(11) NOT NULL AUTO_INCREMENT,
  `files` text,
  PRIMARY KEY (`bannerid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner`
--

LOCK TABLES `banner` WRITE;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` VALUES (2,'ca11b075-b910-4ab9-adcf-d385015237b2.webp,02c9c961-1ae4-43cf-b25e-d2d161f15109.webp,2a9ebff8-9b78-4872-a783-6d5ebc92a8f9.webp,f9e43580-bff4-4467-99c9-d077774a5953.webp,762848f3-0126-4653-a86b-0c5a899427f8.gif,6152f589-bb12-48c9-8f89-d8d0af685058.webp');
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banners`
--

DROP TABLE IF EXISTS `banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `banners` (
  `bannersid` int(11) NOT NULL AUTO_INCREMENT,
  `files` text,
  PRIMARY KEY (`bannersid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banners`
--

LOCK TABLES `banners` WRITE;
/*!40000 ALTER TABLE `banners` DISABLE KEYS */;
INSERT INTO `banners` VALUES (1,'412255f9-7c61-4c4d-a3c6-a0f1d6062262.webp,6fb0697f-d2b4-4d9a-8038-7ead9bd35145.webp,126f898b-b278-4b3e-bf55-06f77b969a32.webp,1be0f58e-bc2c-41ee-87f0-640a305d5bc7.webp,b0f25ef0-79e6-4688-8764-201d5a33e57a.webp,332fcea0-fe54-45e2-a9b3-b84a82e3e53c.webp');
/*!40000 ALTER TABLE `banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brandbanners`
--

DROP TABLE IF EXISTS `brandbanners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `brandbanners` (
  `brandbannersid` int(11) NOT NULL AUTO_INCREMENT,
  `brandid` int(11) DEFAULT NULL,
  `files` text,
  PRIMARY KEY (`brandbannersid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brandbanners`
--

LOCK TABLES `brandbanners` WRITE;
/*!40000 ALTER TABLE `brandbanners` DISABLE KEYS */;
INSERT INTO `brandbanners` VALUES (1,23,'351bbf99-83a9-4483-af0e-6a9a6c0d8f47.webp,a9a820a0-ad39-410f-b4a2-2bb337351bbf.webp,cfa9c44d-20b0-4d61-a210-6ad7bc2a6acf.webp,31c1e3e2-15ba-4f98-be35-ffd505f6da3b.webp,31271895-9407-4b58-b61d-59f91e847759.webp'),(2,20,'4e8f4790-79d5-489f-952d-8272776db4fb.webp'),(5,33,'8014f556-e191-4ad3-939a-42244e1d506e.webp,a263371d-806a-4b10-8571-756e457d2b4e.webp'),(6,25,'f55c1caf-44d5-48e6-9c61-cc1ca834a2f9.webp,c3916fb5-dacd-431d-9c32-0e53a81a4deb.webp,db698f57-a978-4467-9f14-4de91c227aa3.webp,21d4903c-8871-4b8c-9e59-666433651b6d.webp'),(7,34,'cac911f4-170f-4cd1-b1c3-ce8af3994be7.webp,209828d7-7788-4332-aba3-3784eaac8836.webp'),(8,77,'c28e149a-a162-466c-aa51-b5f0c85d1948.webp,c33927e4-e935-426a-b394-e1e0d0f4995a.webp,970506f0-1c32-425a-83a5-2b8dc6d97899.webp,87de5db6-8f4c-4ff0-b4af-c7e09d02446d.webp,032325c6-64f0-49ad-b48e-b37ea8c31a7b.webp');
/*!40000 ALTER TABLE `brandbanners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `brands` (
  `brandid` int(11) NOT NULL AUTO_INCREMENT,
  `brandname` varchar(45) DEFAULT NULL,
  `categoryid` varchar(45) DEFAULT NULL,
  `logo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`brandid`),
  KEY `categoryname_idx` (`categoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (20,'Samsung','22','a6b1e1a0-4e8b-4da0-a099-0f7729803610.webp'),(23,'MI','25','8c9f0f97-7464-42e8-bb6c-e3bf1b211559.webp'),(24,'LG','22','d426605f-6235-41c4-8b44-b05f49efeca8.webp'),(25,'Vivo','28','8d33f370-4577-4b26-8449-614d60084709.webp'),(26,'Oppo','28','1a314ac3-cd73-43fc-8eb2-a6b2010e9707.webp'),(27,'Croma','29','89266052-b5da-4082-a814-bc81c82abc58.webp'),(32,'Samsung','28','f6882ba4-2ea6-40bb-9c45-ba548fb26f41.webp'),(33,'Dell','47','40dc5a53-a0f9-425d-a2ed-b0aee44490c3.webp'),(34,'HP','47','74be88b9-dfbe-4539-94f5-23082d89b15d.webp'),(35,'MI','22','6fd28974-9b39-441c-b6b3-73bceef1f219.webp'),(36,'Samsung','23','5426fcb4-a463-4d54-85b6-18c2dd7e35f1.webp'),(37,'Voltas','23','a58895be-01bd-454f-98f7-6bf3537f5803.png'),(38,'LG','23','89739503-019f-4e21-8e0e-6f6a52c41126.webp'),(39,'Oppo','25','3a42d924-e2ef-463d-8a2b-4b38233c7506.webp'),(40,'Samsung','25','7847b34c-c3ba-4e5d-b856-221290a76582.webp'),(41,'Vivo','25','bb98bf72-54dc-4843-8615-3f8313ed8c9b.webp'),(42,'MI','28','2e5f5c71-09ca-4923-ac81-9dc9bd672515.webp'),(43,'Samsung','29','a92c0a1f-f8e4-459e-81ee-7a788a2c80bb.webp'),(44,'LG','29','02d89479-0ae6-4850-ba94-0f5829a14802.webp'),(45,'Samsung','45','74e6d21a-d4d1-4cce-a228-8e1f706b075e.webp'),(46,'MI','45','7318f382-f4ea-4539-b86b-cc3fa90c311b.webp'),(47,'Vivo','45','0aec0696-5aa5-498a-95b6-ac432d61f1f7.webp'),(48,'Oppo','45','a6f0deba-ca09-4719-bcdc-5bf252ee5590.webp'),(49,'Croma','45','87c96495-6746-4ea4-b2fa-bb30da46fa7a.webp'),(50,'Croma','46','db4af9b8-6642-40e2-a62a-5f18243c9dfa.webp'),(51,'Samsung','46','2f8193b8-03eb-4c01-a561-edd6bd754a7a.webp'),(52,'Voltas','46','3d8efe40-6b5a-4260-a51e-f9829cbeaf08.png'),(53,'LG','46','e7e56101-74a5-424d-ae6b-dc46fb96f4a3.webp'),(56,'Samsung','47','e27e32ad-1eb1-4b13-ba63-f2784919c288.webp'),(57,'MI','47','8e5141aa-6a04-4606-aa89-404dcf7f9a45.webp'),(58,'Samsung','48','0f40ee06-e417-4e2b-b3ee-a98b97a14114.webp'),(59,'Dell','48','96eaa0d9-7da6-40c7-a599-1d95df148a89.webp'),(60,'HP','48','e9cc3a5a-dff7-4239-a89c-7d290edfed16.webp'),(61,'MI','48','910d4276-fd01-4745-8740-a3fbb1b222c1.webp'),(62,'LG','48','b8f8895c-daba-4464-92f5-fc94532844ec.webp'),(63,'Croma','48','6b6ca5d5-6a47-414f-a9fc-708132e7bc9c.jpg'),(64,'JBL','49','703ff382-d9ea-4fda-bbc2-4727d91fbef3.webp'),(65,'Zebronics','49','98575372-dbb9-428f-8d4f-45be9d6cac58.webp'),(66,'Sony','49','9dbdaae2-8b24-4856-ae09-c43552bf21f4.webp'),(67,'Sony','22','4d526c76-bad6-4610-a607-1c07514c0683.webp'),(68,'Sony','25','29e1989e-f851-42be-a7a9-b2515eec826b.webp'),(69,'Sony','28','f61108f5-f959-4125-8f3b-fa7e790dc2af.webp'),(70,'Sony','45','68383f4e-2160-481f-ad96-da7c9f72b8a3.webp'),(71,'Sony','46','e8a41308-4f8b-4bd9-8eb4-e0318598417c.webp'),(72,'Sony','48','ffe22754-6961-4451-893a-662b644c7d8e.webp'),(73,'Noise','49','2c4369bc-5153-452b-86b4-3793fbc1cc1b.jpg'),(74,'Noise','25','940b4be4-ebe1-431b-b325-7cedf7ef4ebb.jpg'),(75,'Boat','25','cf78538e-0f37-4897-a519-f5ab0de93da7.avif'),(76,'Boat','49','0b34f627-bf49-4693-b06f-f3898d80d640.avif'),(77,'Apple','28','a2536b15-3987-4387-89a1-8852fdb71458.webp');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `category` (
  `categoryid` int(11) NOT NULL AUTO_INCREMENT,
  `categoryname` varchar(45) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`categoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (22,'Television','ff5724fe-b02a-4f6a-9b1f-42788a80ea82.png','Active'),(23,'Air Conditioner','f4051b1d-d98a-488e-8f41-0468d62a327a.png','Active'),(25,'Watch','6b81bf9d-4ff5-48e5-8321-861504d4e799.png','Active'),(28,'Mobile Phone','d8df2acd-2a97-4192-9330-cc7e0b0cc74a.png','Active'),(29,'Washing Machine','e71ae565-312f-4b1e-bd74-2ee4a588a824.png','Active'),(45,'Tablet','a8fa0573-72b6-4a24-adaa-afba9d5df77c.png','Active'),(46,'Refrigirator','ae371022-f043-4e52-b432-756da3978d8c.png','Active'),(47,'Laptop','8fc3b141-f481-4029-90cd-e9d90854f274.png','Active'),(48,'Camera','55b169b9-6bb2-4812-8e9e-da357377fd95.png','Active'),(49,'Headphone','e10affd5-144a-430b-b4d5-4fff6f39b071.png','Active');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorybanner`
--

DROP TABLE IF EXISTS `categorybanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `categorybanner` (
  `categorybannerid` int(11) NOT NULL AUTO_INCREMENT,
  `categoryid` int(11) DEFAULT NULL,
  `brandid` int(11) DEFAULT NULL,
  `files` text,
  PRIMARY KEY (`categorybannerid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorybanner`
--

LOCK TABLES `categorybanner` WRITE;
/*!40000 ALTER TABLE `categorybanner` DISABLE KEYS */;
INSERT INTO `categorybanner` VALUES (1,2,3,'2d4b92c2-accb-40ab-a52e-a2fcb302d1c5.jpg,ddd02245-ed4f-43b6-b101-2cd296da1342.jpg');
/*!40000 ALTER TABLE `categorybanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorybanners`
--

DROP TABLE IF EXISTS `categorybanners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `categorybanners` (
  `categorybannersid` int(11) NOT NULL AUTO_INCREMENT,
  `categoryid` int(11) DEFAULT NULL,
  `brandid` int(11) DEFAULT NULL,
  `files` text,
  PRIMARY KEY (`categorybannersid`),
  KEY `categoryid_idx` (`categoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorybanners`
--

LOCK TABLES `categorybanners` WRITE;
/*!40000 ALTER TABLE `categorybanners` DISABLE KEYS */;
INSERT INTO `categorybanners` VALUES (4,47,33,'b6bb5555-31ad-4b72-8713-a89899aed1de.webp,c84496e8-d8bb-4804-9c6a-e49cb7ea12af.webp'),(5,25,74,'cefe2db1-6d9c-4567-b628-4f7522d87020.webp,c8f23857-e368-400e-ac69-b2b839f2a4f6.webp,bcc56671-8e85-4a58-b98e-e4117ddac545.webp');
/*!40000 ALTER TABLE `categorybanners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orders` (
  `orderno` int(11) NOT NULL AUTO_INCREMENT,
  `orderdate` varchar(45) DEFAULT NULL,
  `productdetailsid` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `paymentstatus` varchar(45) DEFAULT NULL,
  `deliverystatus` varchar(45) DEFAULT NULL,
  `mobileno` varchar(45) DEFAULT NULL,
  `emailid` varchar(45) DEFAULT NULL,
  `address` text,
  `username` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`orderno`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (10,'2024-01-04 08:26:47.808',10,1,'pay_NKNXke2sAGjfUP','Undelivered','9301123085','ss@gmail.com','Gwalior','Sandeep Kumar Sappal'),(11,'2024-01-04 08:26:47.808',30,1,'pay_NKNXke2sAGjfUP','Undelivered','9301123085','ss@gmail.com','Gwalior','Sandeep Kumar Sappal'),(12,'2024-01-11 08:38:58.431',19,1,'pay_NN9SRX5mvOVATP','Undelivered','9301123085','ss@gmail.com','Gwalior','Sandeep Kumar Sappal');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productdetails`
--

DROP TABLE IF EXISTS `productdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `productdetails` (
  `productdetailsid` int(11) NOT NULL AUTO_INCREMENT,
  `productid` int(11) DEFAULT NULL,
  `brandid` int(11) DEFAULT NULL,
  `categoryid` int(11) DEFAULT NULL,
  `modelno` text,
  `description` text,
  `color` varchar(45) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `offerprice` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `hsncode` varchar(45) DEFAULT NULL,
  `picture` text,
  PRIMARY KEY (`productdetailsid`),
  KEY `categoryid_idx` (`categoryid`),
  KEY `brandid_idx` (`brandid`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productdetails`
--

LOCK TABLES `productdetails` WRITE;
/*!40000 ALTER TABLE `productdetails` DISABLE KEYS */;
INSERT INTO `productdetails` VALUES (5,1,23,25,'watch-1520','<h3>About this item</h3><ul><li>Screen Size- Wave Sigma comes with a massive 2.01” HD Display providing a complete capacitive touch experience, to let you take control effortlessly.Always on Display –No; Peak screen brightness 550 Nits(nits)</li><li>boAt Coins- Get vouchers/coupons that can be redeemed on our boAt Crest App basis your workouts!</li><li>DIY Watch Face Studio- Customize watch faces as per your own needs. Choose, backgrounds, themes &amp; widgets!</li></ul>','black',22999,15999,564,'Sale','6546','b8aada4e-f549-4b4d-9890-e2123d9c3124.webp,67739167-8fb5-4afe-b9f4-ef3810cec2c5.webp,74d4b59f-2ce7-4d9d-9c7b-a044688f539e.webp,45693f01-e164-4c51-bacb-960b739fb1b4.webp'),(10,14,73,49,'54343','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','black',34000,26000,654,'Deals of the Day','252DFHG','f2e7b6c8-dded-4314-9d67-75e19cab7bd5.webp,c826f616-f193-4098-86eb-67bb52bfceaf.webp,eeee4db5-6b31-4b9f-a356-6f922f788238.webp,5ffe75d5-1dc1-434a-9af4-35d21dd3908d.webp,bfcb672a-2cb8-4bf5-a34b-2884440ca457.webp,c2b29081-b184-4b0b-95bb-95d85299cea4.webp'),(11,14,73,49,'54343 Pro','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','black',19500,14500,654,'Sale','252DFHG','708c4cb6-d34d-4ff4-a484-d77b323e0767.webp,497d52fc-b033-4940-b591-9f542f38b712.webp,64ccaea1-afae-4be9-a81f-89e5bf9b6ecc.webp,3458c4b1-58b7-4d3b-bb08-c270a138df83.webp,c140c1fb-9a55-4fda-8552-46b243d84933.webp'),(12,2,32,28,'16GB - 512GB ','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','blue',54999,49999,534,'Sale','45345','4a0f27b1-a610-4d06-bb8d-c025707476cf.webp,315b121e-5331-4fd7-96e3-c3d5bb01884d.webp,3f841999-f98f-41d8-9233-777efa8463c8.webp,fcfb309e-91b2-4a00-bdaf-a1b53c1636ba.webp,a090aa2a-e402-43d8-a80b-fa67d33e9a7c.webp,564de6ff-8b58-4640-9386-3938e0d12bac.webp'),(15,16,34,47,'8GB - 1TB','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','gray',37999,44999,215,'Sale','545454','2c67860b-777f-4398-8534-408a0a26372d.webp,04db108a-1ed4-4927-8a8b-bf2504f033b9.webp,4f5d0d82-a350-4f0a-b75b-2d4d77254895.webp,dfafbf2c-bb46-46d9-8b1c-12c69b599fe6.webp,06f99463-97dd-4df4-bf8a-630758263d78.webp,401d53a0-2eee-4343-9d0f-43e261f69062.webp'),(17,18,40,25,'SM55 Pro','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','white',8599,7499,545,'Trending','654','25fdbb29-c90a-46b1-8934-67c320ed779e.webp,58ce642d-4c11-4492-9211-6300412e6533.webp,2d1ddc1a-f601-4a3d-bd92-10805ba355ce.webp,0e4ea504-d81b-4305-af74-c36369a28ce8.webp,9f6f568b-4125-41b3-b713-a9ebef101109.webp,4fd7964c-b95b-449e-87ea-28307c1fd9e6.webp,aded5f4c-3f09-4f7b-b8ae-ee424cf6b543.webp'),(18,19,74,25,'V88T Style','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','black',1299,999,212,'Trending','42564','6955da27-57e6-48bd-9256-93b3834a39b2.webp,730f97dd-1a90-4849-a4de-38cae5313187.webp,ef1aa1bc-c4f2-453c-b32e-17887168f1d0.webp,3886a89d-ec63-49ac-a384-97a6d9bd74d2.webp,209debb5-077d-4ede-a0b0-69f015203aa2.webp,8104030f-0e77-4d56-ada9-e298419297a7.webp,16ff2159-330e-41d2-adc4-e7c3cd9319e8.webp,8b32eef5-a4d1-47a8-9e09-094c8489873d.webp'),(19,20,33,47,'8GB - 512 SSD','<h2>Key Features</h2><ul><li>Display: 39.62 cms (15.6 inches), HD IPS Display</li><li>Memory: 8GB DDR4 RAM, 256GB SSD ROM</li><li>Processor: Intel Celeron N4020</li><li>OS: Windows 11 Home</li><li>Graphics: Intel UHD Graphics</li><li>Included Software: Office Home &amp; Student 2021</li><li>Warranty: 1 Year warranty</li></ul>','gray',74999,54999,485,'Deals of the Day','545','7043d4a7-710c-49f7-bda7-3ba4adf321da.webp,7d27f693-a99e-4b67-aed6-f7462cf50a3e.webp,9d23bc98-57a2-4008-adf7-eb6cafc1ac4a.webp,5c2a951b-f976-43b0-8297-d09dea6b0ca5.webp,893175ac-dcad-4d81-ade1-1c6fde5a1be9.webp,5e4f3fcb-774c-497a-b67e-017ecb2c4642.webp'),(20,21,57,47,'4GB - 512 HDD','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','black',87000,47000,544,'Trending','54654','b1e0498a-5cc1-4c32-8763-63ef6d9b4155.webp,3f4e5b84-1203-496d-a25f-bc2d7dd5c760.webp,86a00c82-fb65-427e-88c6-5eee1f523fc2.webp,92571941-8091-471b-ae2a-453f0a174d7e.webp,a4a71997-6cab-4a94-93b6-9d3af329af6c.webp,d20072b0-cad9-491b-8d8b-00a94514c4d8.webp,9b4e15d1-5f67-4a52-9037-439d68c96678.webp,949fe280-4462-46e7-a799-6dff729cf073.webp,f96c5695-6136-45ab-a81c-e5e280bd51da.webp,e2227cc1-9afd-401a-a157-7d2a2b741d04.webp,34b3ce93-24f8-4b94-9f83-756007b5c495.webp,0b1a5eb2-4e93-4015-b397-d4cc2b1f5962.webp'),(21,22,33,47,'Inspiron 3511','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','black',93000,89000,54,'Deals of the Day','35465','8dff1416-980d-4556-b41c-983ee0480a67.webp,33df550c-5d7e-4208-8623-218b45f3bb19.webp,d3055a83-490f-4e16-8eaf-f078b741ece4.webp,960dc714-652f-49f7-9684-cb04455938f3.webp,ee4da0ad-9e4a-4bde-9c9f-d03849b28db8.webp,36ffdd29-9e5d-4c6b-bd08-0afab23a1d46.webp,e990e05e-bfa2-45ad-a8f6-adcb46b0e8ec.webp,22d9a487-7a06-49fe-927f-ced8ed990281.webp,b0a09d9a-fe98-40a9-a199-b756c1cdd06a.webp'),(22,23,56,47,'8GB - 1TB SSD','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','gray',43999,37999,870,'Trending','4546','5a2cf063-5e6c-4d41-ad29-304b3b2e3127.webp,c9ee3f2a-dffd-48b9-b8f0-a98463c12def.webp,3a6248ca-3678-422c-81ab-f7dc9526a71c.webp,12137087-9caa-4c3c-b0c2-c96d9ca73465.webp,5405878d-20f5-40e0-9edd-ab65e848e256.webp,6d4d1591-9e43-4863-bf17-9023b6c4873f.webp,7891b345-cf6e-4cfe-b900-8716b59e8b9b.webp'),(23,24,34,47,'16GB - 1TB SSD','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','black',73999,67999,654,'Trending','65454','9e4759a3-1300-4397-8b08-2949ce415df6.webp,9573f31e-fd97-4949-9087-d9929fe3d90e.webp,568e1d11-48a6-4266-9d53-663b1da6eae1.webp,1a08dcf5-ea5c-4c2a-b136-38f18bc56651.webp,ffda2ed2-ef82-4da3-bdc7-9acc5f191360.webp'),(24,25,77,28,'256GB','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','white',85999,55999,0,'Deals of the Day','35456','b7eea41f-fae3-4553-bc10-b313dd22e03b.webp,135c9d01-792b-466f-924b-777b2d225e68.webp,67b9f88c-80d3-441b-9e0e-51c16ee72693.webp,706245cc-a3a4-49c3-b043-8f21fbd66063.webp,977ca493-1a8a-4811-9795-6dec816f5796.webp,659f4f1a-8819-4c58-bf05-0cfbf1b8f252.webp,adb9a751-f790-44d9-bac9-9c469c06a24b.webp,c1efa41d-3c76-4083-831e-81d5842fe38a.webp,a5416e61-6628-427d-bddd-62dc6d631d9a.webp'),(25,26,25,28,'16GB - 128GB','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','yellow',59999,45999,545,'New Arrival','2345','2c807795-5dcb-4433-a6a0-11af467e8f27.webp,bac8f16f-9ef4-42b4-ac56-543ad1df5839.webp,46d08efc-91ec-4bc8-9744-04cf9eb1479a.webp,bd24f5e9-49ac-402b-9c1a-259195737fa8.webp,e468f3c9-3f40-4e3a-b3a8-a94ce2635953.webp'),(26,27,26,28,'8GB - 256GB','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','blue',37999,29999,35,'New Arrival','35454','0109e24a-000f-47d6-b4b9-9985cba6181d.webp,ad799310-bc4c-4ffc-be7a-00b3e527db91.webp,c51b29c6-748c-4ed5-aeb0-2b40e3be28a2.webp,d1ccb38c-1e7f-452f-9822-e145c94b21ed.webp,8c9f1f02-cb88-4bc0-b5db-52fac00025ca.webp,3a4758cc-6957-45f9-896a-db85958fecc7.webp'),(27,28,26,28,'12GB - 512GB','<h2>Key Features</h2><ul><li>Display: 6.56 inches (16.66 cm), 90 Hz Refresh Rate</li><li>Memory: 8GB RAM, 128GB ROM</li><li>Processor: Dimensity 700, Octa Core, 2.2 GHz</li><li>Camera: 50 MP+ 2MP Dual Rear &amp; 8MP Front Camera</li><li>Battery: 5000mAh with 33W SUPERVOOC Charging</li><li>Fingerprint Sensor, Facial Recognition</li></ul>','sky blue',19999,14999,354,'New Arrival','65465','386ceaea-9a5c-4320-aa2d-5c6e1ee02b60.webp,00997384-63f8-4d95-90a2-9915dcf269ff.webp,c0a8d318-51df-4f07-9fc0-b9b7b93d9ae3.webp,0f8d75e9-cf90-4054-bde3-a656e9ba6a26.webp,ac6c7a22-2016-4dd7-b860-29ac2b8998db.webp,0644ac49-7a65-49a2-b56e-c1ecfef59667.webp,49bc19ec-5cfe-4a95-99b4-fe90fb80818b.webp,42b1b7f3-a160-4b5f-a3f2-7f6f76390a4c.webp,4677eb96-bdc0-40ef-8057-ef519fa216d6.webp'),(28,30,64,49,'Airbass W40','<h2>Key Features</h2><ul><li>Orientation Type: In Ear</li><li>Connectivity: Bluetooth Version 5.3</li><li>Battery Life: 48Hours</li><li>Noise Cancellation: Environmental Noise Cancellation</li><li>Voice Assistant: Google | Siri</li><li>USP: 45ms Low Latency Gaming, 13mm Dynamic Driver &amp; BoomX Tech</li><li>Warranty: 12 Months Warranty</li></ul>','gray',2999,899,321,'New Arrival','2454','002f41b0-1e1e-4237-a7a0-54d507aa7891.webp,bedf2958-88c5-47be-9a02-a0c923b75c6b.webp,e825d227-7151-4a02-9927-c347e5bcc8fa.webp,7df46aa8-ff6d-4012-bf5f-7a581eb3d05c.webp,9611d2a0-36d2-43a8-a732-23e14d35131e.webp,53afe15b-ffde-404f-91ec-a9965a2c05e8.webp,a1723dc6-6f2a-41d0-9854-fe0edcfc6d1c.webp,293703b7-cea9-41ef-a975-d4bf7e0a4633.webp'),(29,29,76,49,'Airdopes 100','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','black',4499,1299,241,'New Arrival','35454','a6901206-8b6d-4c9a-868e-c81db61e1164.webp,e9037759-a3b7-4d4e-a23a-7ebec98a92ea.webp,ccd87c5b-ffc1-4389-85a0-e0f0518b0d57.webp,266ab211-937e-4ddb-a502-34050ef1e7e0.webp,d871f1f3-6c04-42bf-bb27-1eb4c2464f97.webp,960b6fc8-5c6b-4f19-badb-1bd92e642abc.webp,8cc2d0ab-6038-4580-ac06-106876af7d3f.webp,4a531475-de67-455c-a255-a84e276919f1.webp'),(30,31,76,49,'Airdopes 148','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','gray',4499,1099,544,'Deals of the Day','54657','c1158ada-c159-4914-ae1b-557ca49cb0d6.webp,a8f878b0-2155-4b0f-a135-ae18b23b1095.webp,78f0fc17-e5e2-42a4-82d4-0b942f09ac1d.webp,45c1720b-1f7c-4781-a3b4-986b321c6d48.webp,25165533-54bf-44d3-86a6-30c27526e930.webp,0909f55e-8ffa-42e6-bd8e-b306d082322e.webp,cd21fd89-7864-41bf-94e7-24ffe6bb75aa.webp,b0fe20c3-6946-4f59-8c08-7529c7658044.webp,6f777909-3fca-4011-b4df-d2304f6f2724.webp,0dbe1e05-c5fe-4590-912e-d76f7c36bae3.webp'),(33,17,75,25,'Max-3501','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistan</li></ul>','black',5999,1699,654,'Discount','35454','41709c13-bcae-41bc-bf35-a3998359ba82.webp,24c33b9d-bea3-4a0e-b4d9-b0110be37654.webp,3b13be87-6622-4bee-9c2a-fbc64e9f76b6.webp,20d32db2-8914-4143-b71c-1917e76a54e8.webp,6f66596a-bb25-4101-9198-f70d0d4bc227.webp,e06646fb-c361-4861-8a7f-f73f876670ac.webp,a8380918-edff-414b-b8ff-73ef5d7b8d05.webp'),(37,25,77,28,' 256GB','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','midnight',85999,75999,541,'Deals of the Day','21132','a981ec19-41f8-4d80-ab9f-38a283f2b358.webp,e93a22d1-1769-4918-8c28-7da8229d77ad.webp,c9eb2600-a84c-4197-908e-9c9737ece35a.webp,65215f63-668a-423f-b2ec-996dc0edf6aa.webp,8ccece1f-a18a-4e63-af99-097e45af0e4b.webp,7fb32e4a-4ddc-4802-972a-3480e6ec4d4e.webp'),(38,25,77,28,'512GB','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','white',125999,78999,654,'Deals of the Day','4534','14a0971b-147a-4abe-b4e4-51431ff86c6d.webp,8922c69e-8e5c-4aa6-9c0b-fe2bd93df25f.webp,f11a6240-e7d1-4221-8113-2d3f668073e7.webp,61d5c7fc-c548-432f-b2f1-3a74dfe778ff.webp,e22b245f-c997-41ec-927c-beed35185e42.webp,ad0f5bfe-a78b-48d1-8373-6acd0130771e.webp,6f20911c-8dba-4435-a4dc-5516a4e909b8.webp,73d0d319-e000-4864-bbe0-5ddd83373be4.webp,a31f7753-ca32-4443-82ac-6100b608e975.webp'),(39,24,34,47,'16GB - 1TB SSD','<h2>Key Features</h2><ul><li>Display: 6.1 inches (15.4 cm), Super Retina XDR OLED</li><li>Memory: 128GB ROM</li><li>Processor: Apple A15 Bionic Chip, Hexa Core</li><li>Camera: 12 MP + 12 MP Dual Rear &amp; 12 MP Front Camera</li><li>Battery: 3240 mAh with 15W Wireless Charging</li><li>USP: Emergency SOS, IP68 Water Resistant</li></ul>','white',73999,67999,654,'Trending','65454','9e4759a3-1300-4397-8b08-2949ce415df6.webp,9573f31e-fd97-4949-9087-d9929fe3d90e.webp,568e1d11-48a6-4266-9d53-663b1da6eae1.webp,1a08dcf5-ea5c-4c2a-b136-38f18bc56651.webp,ffda2ed2-ef82-4da3-bdc7-9acc5f191360.webp');
/*!40000 ALTER TABLE `productdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `products` (
  `productid` int(11) NOT NULL AUTO_INCREMENT,
  `categoryid` int(11) DEFAULT NULL,
  `brandid` int(11) DEFAULT NULL,
  `productname` text,
  `picture` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`productid`),
  KEY `categoryid_idx` (`categoryid`),
  KEY `brandid_idx` (`brandid`),
  CONSTRAINT `brandid` FOREIGN KEY (`brandid`) REFERENCES `brands` (`brandid`),
  CONSTRAINT `categoryid` FOREIGN KEY (`categoryid`) REFERENCES `category` (`categoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,25,23,'Smart Watch Dual Bluetooth 5.0 connectivity','69ffb6f3-ed8b-4758-adc8-48263e5f2976.png'),(2,28,32,'Galaxy S23','fb62f141-515f-4fa8-b1a9-bb310e8bf1c5.jpg'),(11,49,73,'Powerful Base Headphone','9daed278-4c91-4c03-b849-55f66d63a617.png'),(12,25,74,'Smart Watch with Fitness Tracker','9e705a20-f1b0-4aa3-9a07-40a25ceea909.png'),(13,49,76,'Earbuds with Ergonomic and Baseful','33163951-07bf-43da-a384-6575e0ae8345.png'),(14,49,73,'Wireless and Baseful Earbuds','a587f864-93fd-4db0-8f61-41c4ff40e089.png'),(15,49,65,'Stylish and Ergonomic Headphone','a269b200-fcd1-4cb8-86a9-5438b4dfb924.png'),(16,47,34,'Laptop Intel Core i3 12th Gen','125233c3-74f1-42a5-b054-f5c9cceeeccf.webp'),(17,25,75,'Smart Watch with Sports Mode','e45639e4-f288-4243-98a1-b9d560ca1024.webp'),(18,25,40,'Smart watch with Bluetooth Calling','9c813ccc-dede-4090-8f8e-ded464d7ba4c.webp'),(19,25,74,'Dazzle Plus Smartwatch','a808a5f8-0496-49dd-beea-40fa4e25f8cf.webp'),(20,47,33,'Lapotp Intel Celeron (15.6 inch, core i5, 11th Gen)','60c97826-2d5c-4c3e-a019-36bd9fb9abf0.webp'),(21,47,57,'Laptop Ryzen 5 (16 inches, Windows 11)','09d838e0-d994-46ec-b1d6-7a217961b948.webp'),(22,47,33,'Lapop Intel Core i5 11th Gen (15.6 inch, Windows 10)','16ceabda-283d-4794-8c69-11c129667327.webp'),(23,47,56,'Laptop Intel Core i3 10th Gen (15.6 inch  Windows 10)','6319a9ea-ff4f-47fb-ab2b-5a4cdceccfa6.webp'),(24,47,34,'Laptop Intel Core i5 12th Gen (Windows 11, 15.6 inch)','a6888138-7f63-4d04-a3ba-52701b5a010d.webp'),(25,28,77,'iphone 13','09aa91e3-02be-4452-8881-d0ebf434a4a1.webp'),(26,28,25,'Y16','15b12a4a-a2e6-4741-85ec-1a3b6233f0a7.webp'),(27,28,26,'Reno 10','48e07092-42b1-49cd-a7f0-6762fbc3f649.webp'),(28,28,26,'A78 Pro','3d61f15b-605f-419c-b4a6-234ea746141b.webp'),(29,49,76,'TWS Earbuds with Bluetooth 5.0 Connectivity & Environmental Noise','80ab118c-a996-416b-a071-61300f57c912.webp'),(30,49,64,'TWS Earbuds with Environmental Noise Cancellation ','d199bd19-981a-4695-b3a8-1c3be73286ef.webp'),(31,49,76,'MWS Earbuds with Environmental Noise Cancellation','1f91eb6b-4c59-4679-a1ac-c427ac69ea54.webp');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `useraccount`
--

DROP TABLE IF EXISTS `useraccount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `useraccount` (
  `emailid` varchar(100) NOT NULL,
  `mobileno` varchar(14) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `address` text,
  `pincode` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`emailid`,`mobileno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `useraccount`
--

LOCK TABLES `useraccount` WRITE;
/*!40000 ALTER TABLE `useraccount` DISABLE KEYS */;
INSERT INTO `useraccount` VALUES ('dufndn2883','12','Rohan Kumar','Gwalior','474011'),('rohankumar17645@gmail.com','9340467517','Rohan Kumar','New Darpan Colony','474011'),('ss@gmail.com','9301123085','Sandeep Kumar Sappal','Gwalior','454001');
/*!40000 ALTER TABLE `useraccount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'electronicsdb'
--

--
-- Dumping routines for database 'electronicsdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-17 21:11:38
