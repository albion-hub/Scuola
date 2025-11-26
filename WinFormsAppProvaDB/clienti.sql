-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Nov 17, 2025 alle 09:53
-- Versione del server: 10.4.25-MariaDB
-- Versione PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clienti`
--
CREATE DATABASE IF NOT EXISTS `clienti` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `clienti`;

-- --------------------------------------------------------

--
-- Struttura della tabella `clienti`
--

CREATE TABLE `clienti` (
  `idCliente` int(11) NOT NULL,
  `cognome` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `codfis` char(16) NOT NULL,
  `dataNascita` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `clienti`
--

INSERT INTO `clienti` (`idCliente`, `cognome`, `nome`, `codfis`, `dataNascita`) VALUES
(1, 'Giordani', 'Mirco', 'GRDMRC80C14A479C', '1980-03-14'),
(2, 'daje', 'roma', 'wergfergerg3', '2025-11-11');

-- --------------------------------------------------------

--
-- Struttura della tabella `fatture`
--

CREATE TABLE `fatture` (
  `idFatture` int(11) NOT NULL,
  `data` date NOT NULL,
  `importo` decimal(10,2) NOT NULL,
  `idCliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `fatture`
--

INSERT INTO `fatture` (`idFatture`, `data`, `importo`, `idCliente`) VALUES
(1, '2025-11-17', '23.00', 1),
(2, '2025-11-17', '56.00', 1),
(3, '2025-11-04', '45.75', 2);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `clienti`
--
ALTER TABLE `clienti`
  ADD PRIMARY KEY (`idCliente`);

--
-- Indici per le tabelle `fatture`
--
ALTER TABLE `fatture`
  ADD PRIMARY KEY (`idFatture`),
  ADD KEY `fk_fatture_clienti` (`idCliente`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `clienti`
--
ALTER TABLE `clienti`
  MODIFY `idCliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `fatture`
--
ALTER TABLE `fatture`
  MODIFY `idFatture` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `fatture`
--
ALTER TABLE `fatture`
  ADD CONSTRAINT `fk_fatture_clienti` FOREIGN KEY (`idCliente`) REFERENCES `clienti` (`idCliente`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
