-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28/08/2024 às 22:11
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `registro_atropelamentos`
--
CREATE DATABASE IF NOT EXISTS `registro_atropelamentos` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `registro_atropelamentos`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `categoria`
--

CREATE TABLE `categoria` (
  `CodCateg` bigint(20) NOT NULL,
  `Nome` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `categorialocal`
--

CREATE TABLE `categorialocal` (
  `CodCatLocal` bigint(20) NOT NULL,
  `CodEspec` bigint(20) NOT NULL,
  `CodCateg` bigint(20) NOT NULL,
  `CodUF` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `classestaxonicas`
--

CREATE TABLE `classestaxonicas` (
  `CodClasse` bigint(20) NOT NULL,
  `Nome` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `especie`
--

CREATE TABLE `especie` (
  `CodEspec` bigint(20) NOT NULL,
  `NomePopular` varchar(200) NOT NULL,
  `NomeCientifico` varchar(200) NOT NULL,
  `CodClasse` bigint(20) NOT NULL,
  `Valor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `ocoreg`
--

CREATE TABLE `ocoreg` (
  `CodReg` bigint(20) NOT NULL,
  `CodOco` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `ocorrencia`
--

CREATE TABLE `ocorrencia` (
  `CodOco` bigint(20) NOT NULL,
  `Km` int(11) NOT NULL,
  `NumPistas` int(11) NOT NULL,
  `VelocidadeMax` int(11) NOT NULL,
  `Data` date NOT NULL,
  `Hora` time NOT NULL,
  `HaviaAgua` set('sim','nao') NOT NULL,
  `CodSi` bigint(20) NOT NULL,
  `CodPav` bigint(20) NOT NULL,
  `CodRod` bigint(20) NOT NULL,
  `CodCatLocal` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `pavimento`
--

CREATE TABLE `pavimento` (
  `CodPav` bigint(20) NOT NULL,
  `Descricao` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `regiao`
--

CREATE TABLE `regiao` (
  `CodReg` bigint(20) NOT NULL,
  `Descricao` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `rodovia`
--

CREATE TABLE `rodovia` (
  `CodRod` bigint(20) NOT NULL,
  `Nome` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `situacao`
--

CREATE TABLE `situacao` (
  `CodSi` bigint(20) NOT NULL,
  `Descricao` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `uf`
--

CREATE TABLE `uf` (
  `CodUF` bigint(20) NOT NULL,
  `NomeUF` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`CodCateg`);

--
-- Índices de tabela `categorialocal`
--
ALTER TABLE `categorialocal`
  ADD PRIMARY KEY (`CodCatLocal`),
  ADD UNIQUE KEY `CodEspec_2` (`CodEspec`,`CodCateg`,`CodUF`),
  ADD KEY `CodEspec` (`CodEspec`),
  ADD KEY `CodCateg` (`CodCateg`),
  ADD KEY `CodUF` (`CodUF`);

--
-- Índices de tabela `classestaxonicas`
--
ALTER TABLE `classestaxonicas`
  ADD PRIMARY KEY (`CodClasse`);

--
-- Índices de tabela `especie`
--
ALTER TABLE `especie`
  ADD PRIMARY KEY (`CodEspec`),
  ADD KEY `CodClasse` (`CodClasse`);

--
-- Índices de tabela `ocoreg`
--
ALTER TABLE `ocoreg`
  ADD PRIMARY KEY (`CodReg`,`CodOco`),
  ADD KEY `CodReg` (`CodReg`),
  ADD KEY `CodOco` (`CodOco`);

--
-- Índices de tabela `ocorrencia`
--
ALTER TABLE `ocorrencia`
  ADD PRIMARY KEY (`CodOco`),
  ADD KEY `CodSi` (`CodSi`),
  ADD KEY `CodPav` (`CodPav`),
  ADD KEY `CodRod` (`CodRod`),
  ADD KEY `CodCatLocal` (`CodCatLocal`);

--
-- Índices de tabela `pavimento`
--
ALTER TABLE `pavimento`
  ADD PRIMARY KEY (`CodPav`);

--
-- Índices de tabela `regiao`
--
ALTER TABLE `regiao`
  ADD PRIMARY KEY (`CodReg`);

--
-- Índices de tabela `rodovia`
--
ALTER TABLE `rodovia`
  ADD PRIMARY KEY (`CodRod`);

--
-- Índices de tabela `situacao`
--
ALTER TABLE `situacao`
  ADD PRIMARY KEY (`CodSi`);

--
-- Índices de tabela `uf`
--
ALTER TABLE `uf`
  ADD PRIMARY KEY (`CodUF`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `CodCateg` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `categorialocal`
--
ALTER TABLE `categorialocal`
  MODIFY `CodCatLocal` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `classestaxonicas`
--
ALTER TABLE `classestaxonicas`
  MODIFY `CodClasse` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `especie`
--
ALTER TABLE `especie`
  MODIFY `CodEspec` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ocorrencia`
--
ALTER TABLE `ocorrencia`
  MODIFY `CodOco` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `pavimento`
--
ALTER TABLE `pavimento`
  MODIFY `CodPav` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `regiao`
--
ALTER TABLE `regiao`
  MODIFY `CodReg` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `rodovia`
--
ALTER TABLE `rodovia`
  MODIFY `CodRod` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `situacao`
--
ALTER TABLE `situacao`
  MODIFY `CodSi` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `uf`
--
ALTER TABLE `uf`
  MODIFY `CodUF` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `categorialocal`
--
ALTER TABLE `categorialocal`
  ADD CONSTRAINT `categorialocal_ibfk_1` FOREIGN KEY (`CodCateg`) REFERENCES `categoria` (`CodCateg`) ON UPDATE CASCADE,
  ADD CONSTRAINT `categorialocal_ibfk_2` FOREIGN KEY (`CodUF`) REFERENCES `uf` (`CodUF`) ON UPDATE CASCADE,
  ADD CONSTRAINT `categorialocal_ibfk_3` FOREIGN KEY (`CodEspec`) REFERENCES `especie` (`CodEspec`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `especie`
--
ALTER TABLE `especie`
  ADD CONSTRAINT `especie_ibfk_1` FOREIGN KEY (`CodClasse`) REFERENCES `classestaxonicas` (`CodClasse`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `ocoreg`
--
ALTER TABLE `ocoreg`
  ADD CONSTRAINT `ocoreg_ibfk_1` FOREIGN KEY (`CodOco`) REFERENCES `ocorrencia` (`CodOco`) ON UPDATE CASCADE,
  ADD CONSTRAINT `ocoreg_ibfk_2` FOREIGN KEY (`CodReg`) REFERENCES `regiao` (`CodReg`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `ocorrencia`
--
ALTER TABLE `ocorrencia`
  ADD CONSTRAINT `ocorrencia_ibfk_1` FOREIGN KEY (`CodSi`) REFERENCES `situacao` (`CodSi`) ON UPDATE CASCADE,
  ADD CONSTRAINT `ocorrencia_ibfk_2` FOREIGN KEY (`CodPav`) REFERENCES `pavimento` (`CodPav`) ON UPDATE CASCADE,
  ADD CONSTRAINT `ocorrencia_ibfk_3` FOREIGN KEY (`CodRod`) REFERENCES `rodovia` (`CodRod`) ON UPDATE CASCADE,
  ADD CONSTRAINT `ocorrencia_ibfk_4` FOREIGN KEY (`CodCatLocal`) REFERENCES `categorialocal` (`CodCatLocal`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
