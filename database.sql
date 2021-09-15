CREATE DATABASE IF NOT EXISTS encyclo;

CREATE TABLE IF NOT EXISTS lexique
    {
        id INT PRIMARY KEY NOT NULL,
        word VARCHAR(255) NOT NULL,
        definition TEXT NOT NULL,
        image VARCHAR(255)
    } ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS species
    {
        id INT PRIMARY KEY NOT NULL,
        nom_vulgaire VARCHAR(255) NOT NULL,
        kingdom VARCHAR(255) NOT NULL,
        superphylum VARCHAR(255),
        phylum VARCHAR(255) NOT NULL,
        subphylum VARCHAR(255),
        class VARCHAR(255) NOT NULL,
        subclass VARCHAR(255),
        superorder VARCHAR(255),
        order VARCHAR(255) NOT NULL,
        suborder VARCHAR(255),
        family VARCHAR(255) NOT NULL,
        genus VARCHAR(255) NOT NULL,
        species VARCHAR(255) NOT NULL,
        img VARCHAR(255),
        description TEXT NOT NULL,
        lifestyle VARCHAR(255) NOT NULL,
        biotop VARCHAR(255) NOT NULL,
        alimentation VARCHAR(255) NOT NULL,
        reproduction VARCHAR(255) NOT NULL,
        autre TEXT,
        classification VARCHAR(255) NOT NULL,
        references TEXT NOT NULL
    } ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS species
    {
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification VARCHAR(255) NOT NULL,
        references TEXT NOT NULL
    } ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS genus
    {
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification VARCHAR(255) NOT NULL,
        references TEXT NOT NULL
    } ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS family 
    {
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification VARCHAR(255) NOT NULL,
        references TEXT NOT NULL
    } ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS superorder
    {
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification VARCHAR(255) NOT NULL,
        references TEXT NOT NULL
    } ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS suborder
    {
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification VARCHAR(255) NOT NULL,
        references TEXT NOT NULL
    } ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS order
    {
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification VARCHAR(255) NOT NULL,
        references TEXT NOT NULL
    } ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS class
{
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    identification VARCHAR(255) NOT NULL,
    references TEXT NOT NULL
} ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS subclass
    {
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification VARCHAR(255) NOT NULL,
        references TEXT NOT NULL
    } ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS superphylum
    {
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification VARCHAR(255) NOT NULL,
        references TEXT NOT NULL
    } ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS phylum
    {
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification VARCHAR(255) NOT NULL,
        references TEXT NOT NULL
    } ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS subphylum
    {
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification VARCHAR(255) NOT NULL,
        references TEXT NOT NULL
    } ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS kingdom
    {
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification INTEGER[],
        references INTEGER[] NOT NULL,
    } ENGINE=INNODB;

INSERT INTO kingdom (name, identification, references)
    VALUES 
    ('Animalia', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Vegetabilia', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO superclass (name, identification, references)
    VALUES 
    ('Tetrapoda', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO class (name, identification, references)
    VALUES 
    ('Aves', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Diplopoda', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Mammalia', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Maxillopoda', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO subclass (name, identification, references)
    VALUES 
    ('Chilognatha', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Thecostraca', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Theria', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO superorder (name, identification, references)
    VALUES 
    ('Euarchontoglires', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Parareptilia', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO order (name, identification, references)
    VALUES 
    ('Primates', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Procolophonomorpha', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO suborder (name, identification, references)
    VALUES 
    ('Haplorrhini', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Procolophonia', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');