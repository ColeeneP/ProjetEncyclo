-- CREATE DATABASE IF NOT EXISTS encyclo_projet;

CREATE TABLE IF NOT EXISTS lexique
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        word VARCHAR(255) NOT NULL,
        def TEXT NOT NULL,
        img VARCHAR(255)
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_article
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_user INT NOT NULL,
        nom_vulgaire VARCHAR(255) NOT NULL,
        fk_id_domain INT NOT NULL,
        fk_id_kingdom INT NOT NULL,
        fk_id_superphylum INT,
        fk_id_phylum INT NOT NULL,
        fk_id_subphylum INT,
        fk_id_class INT NOT NULL,
        fk_id_subclass INT,
        fk_id_superorder INT,
        fk_id_order INT NOT NULL,
        fk_id_suborder INT,
        fk_id_family INT NOT NULL,
        fk_id_genus INT NOT NULL,
        fk_id_species INT NOT NULL,
        img VARCHAR(255),
        informations TEXT NOT NULL,
        lifestyle VARCHAR(255) NOT NULL,
        biotop VARCHAR(255) NOT NULL,
        alimentation VARCHAR(255) NOT NULL,
        reproduction VARCHAR(255) NOT NULL,
        autre TEXT,
        classification VARCHAR(255) NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_user) references user(id) on delete cascade,
        FOREIGN KEY (fk_id_domain) references user(id) on delete cascade,
        FOREIGN KEY (fk_id_kingdom) references user(id) on delete cascade,
        FOREIGN KEY (fk_id_superphylum) references user(id) on delete cascade,
        FOREIGN KEY (fk_id_phylum) references user(id) on delete cascade,
        FOREIGN KEY (fk_id_subphylum) references user(id) on delete cascade,
        FOREIGN KEY (fk_id_class) references user(id) on delete cascade,
        FOREIGN KEY (fk_id_subclass) references user(id) on delete cascade,
        FOREIGN KEY (fk_id_superorder) references user(id) on delete cascade,
        FOREIGN KEY (fk_id_order) references user(id) on delete cascade,
        FOREIGN KEY (fk_id_suborder) references user(id) on delete cascade,
        FOREIGN KEY (fk_id_family) references user(id) on delete cascade,
        FOREIGN KEY (fk_id_genus) references user(id) on delete cascade,
        FOREIGN KEY (fk_id_species) references user(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS user
    (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        firstname VARCHAR(20) NOT NULL,
        name VARCHAR(20) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    )

CREATE TABLE IF NOT EXISTS bio_domain
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL
    ) ENGINE=INNODB;    

CREATE TABLE IF NOT EXISTS bio_subdomain
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_domain INT NOT NULL, 
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_domain) references bio_domain(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_kingdom
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_domain INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_domain) references bio_domain(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_subkingdom
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_kingdom INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_kingdom) references bio_kingdom(id) on delete cascade
    ) ENGINE=INNODB;   

CREATE TABLE IF NOT EXISTS bio_rameau
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_kingdom INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_kingdom) references bio_kingdom(id) on delete cascade
    ) ENGINE=INNODB; 

CREATE TABLE IF NOT EXISTS bio_infrakingdom
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_kingdom INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_kingdom) references bio_kingdom(id) on delete cascade
    ) ENGINE=INNODB; 

CREATE TABLE IF NOT EXISTS bio_superphylum
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_kingdom INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_kingdom) references bio_kingdom(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_phylum
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_kingdom INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_kingdom) references bio_kingdom(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_subphylum
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_phylum INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_phylum) references bio_phylum(id) on delete cascade
    ) ENGINE=INNODB; 

CREATE TABLE IF NOT EXISTS bio_infraphylum
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_phylum INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_phylum) references bio_phylum(id) on delete cascade
    ) ENGINE=INNODB;    

CREATE TABLE IF NOT EXISTS bio_microphylum
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_phylum INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_phylum) references bio_phylum(id) on delete cascade
    ) ENGINE=INNODB;   

CREATE TABLE IF NOT EXISTS bio_superclass
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_phylum INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_phylum) references bio_phylum(id) on delete cascade
    ) ENGINE=INNODB;    

CREATE TABLE IF NOT EXISTS bio_class
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_phylum INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_phylum) references bio_phylum(id) on delete cascade
    ) ENGINE=INNODB;    

CREATE TABLE IF NOT EXISTS bio_subclass
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_class INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_class) references bio_class(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_infraclass
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_class INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_class) references bio_class(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_superorder
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_class INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_class) references bio_class(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_order
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_class INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_class) references bio_class(id) on delete cascade
    ) ENGINE=INNODB;    

CREATE TABLE IF NOT EXISTS bio_suborder
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_order INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_order) references bio_order(id) on delete cascade
    ) ENGINE=INNODB; 

CREATE TABLE IF NOT EXISTS bio_infraorder
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_order INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_order) references bio_order(id) on delete cascade
    ) ENGINE=INNODB;     

CREATE TABLE IF NOT EXISTS bio_microorder
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_order INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_order) references bio_order(id) on delete cascade
    ) ENGINE=INNODB;  

CREATE TABLE IF NOT EXISTS bio_superfamily
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_order INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_order) references bio_order(id) on delete cascade
    ) ENGINE=INNODB;  

CREATE TABLE IF NOT EXISTS bio_family 
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_order INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_order) references bio_order(id) on delete cascade
    ) ENGINE=INNODB;    

CREATE TABLE IF NOT EXISTS bio_subfamily
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_family INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_family) references bio_family(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_tribe
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_family INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_family) references bio_family(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_subtribe
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_family INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_family) references bio_family(id) on delete cascade
    ) ENGINE=INNODB;        

CREATE TABLE IF NOT EXISTS bio_genus
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_family INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_family) references bio_family(id) on delete cascade
    ) ENGINE=INNODB;    

CREATE TABLE IF NOT EXISTS bio_subgenus
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_genus INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_genus) REFERENCES bio_genus(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_section
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_genus INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_genus) REFERENCES bio_genus(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_subsection
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_genus INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_genus) REFERENCES bio_genus(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_species
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_genus INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_genus) REFERENCES bio_genus(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_subspecies
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_species INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_species) REFERENCES bio_species(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_subspecies
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_species INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_species) REFERENCES bio_species(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_variety
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_species INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_species) REFERENCES bio_species(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_subvariety
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_species INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_species) REFERENCES bio_species(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_form
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_species INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_species) REFERENCES bio_species(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_subform
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_species INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_species) REFERENCES bio_species(id) on delete cascade
    ) ENGINE=INNODB;

INSERT INTO bio_domain (domain_name, identification, refs) VALUES
    ("Archées", "Liaisons éther entre les lipides de la membrane cellulaire. Les lipides de la membranes peuvent former des bicouches ou des monocouches rigides. ARNt avec de la pseudo-uracile ou de l'1-méthylpseudo-uracile à la place de la thymine. Génomes chimériques possédant des gènes bactériens de métabolisme", ""),
    ('Eubactéries', "Paroi cellulaire en peptidoglycane avec de l acide muramique. ARNt initiateur de la traduction porte une N-formylméthionine", ""),
    ('Eucaryotes', "ADN contenu dans un noyau délimité par une enveloppe nucléaire. Le cytosquelette de la cellule est formé de polymères de tubuline regroupés en microtubules. Flagelle a structure unique : 9 doublets/triplets de microtubules périphériques associés à un doublet de microtubules centraux. Possèdent des mitochondries.", "");

INSERT INTO bio_subdomain (id, fk_id_domain, subdomain_name, identification, refs) VALUES
    (1, 'Unicontes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (2, 'Bicontes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_kingdom (id, kingdom_name, fk_id_domain, identification, refs) VALUES 
    (1, 'Metazoaires', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (2, 'Mycètes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),    
    (3, 'Plantes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_subkingdom (id, subkingdom_name, fk_id_kingdom, identification, refs) VALUES
    (1, 'Bilatériens', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (2, 'Radiaires', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_superphylum (superphylum_name, identification, refs) VALUES
    ('Deutérostomiens', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_phylum (id, phylum_name, fk_id_kingdom, identification, refs) VALUES
    (1, 'Anthocérotes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (2, 'Ascomycètes', 2, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (3, 'Basidiomycètes', 2, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (4, 'Blastocladiomycètes', 2, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (5, 'Bryophytes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (6, 'Charophytes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (7, 'Chétognathes', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (8, 'Chlorophytes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (9, 'Chordés', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (10, 'Chytridiomycètes', 2, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (11, 'Cténophores', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (12, 'Echinodermes', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (13, 'Entomophthoromycota', 2, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (14, 'Glaucophytes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (15, 'Gloméromycota', 2, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (16, 'Hémichordés', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (17, 'Marchantiophytes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (18, 'Rhodophytes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (19, 'Trachéophytes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (20, 'Xénacélomorphes', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (21, 'Zygomycètes', 2, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_subphylum (subphylum_name, identification, refs) VALUES
    ('Céphalochordés', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Craniés', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Tuniciers', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Vertébrés', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_superclass (superclass_name, identification, refs) VALUES 
    ('Tetrapoda', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Ostéichthyens', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_class (id, class_name, fk_id_phylum, identification, refs) VALUES 
    (1, 'Amphibiens', 9, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (2, 'Aves', 9, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (3, 'Cyanidiophycées', 18, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (4, 'Mammifères', 9, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (5, 'Reptiles', 9, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (6, 'Sarcoptérygiens', 9, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_subclass (subclass_name, identification, refs) VALUES 
    ('Chilognatha', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Thecostraca', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Theria', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_superorder (superorder_name, identification, refs) VALUES 
    ('Dipneustes', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Euarchontoglires', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Parareptilia', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_order (id, order_name, fk_id_class, identification, refs) VALUES 
    (1, 'Carnivores', 4, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (2, 'Cyanidiales', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (3, 'Primates', 4, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (4, 'Procolophonomorpha', 5, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_suborder (suborder_name, identification, refs) VALUES 
    ('Caniformes', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Haplorrhini', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Procolophonia', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_family (id, family_name, fk_id_order, identification, refs) VALUES
    (1, 'Canidés', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (2, 'Ailuridés', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (3, 'Indriidés', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (4, 'Lémuridés', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (5, 'Mustélidés', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (6, 'Phocidés', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (7, 'Procyonidés', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (8, 'Otariidés', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (9, 'Ursidés', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO lexique (id, word, def, img) VALUES
    (1, "Clade", "Rameau évolutif monophylétique, regroupant un ancêtre hypothétique présentant pour la première fois l'état dérivé dit apomorphe d'un caractère, et l'ensemble de ses descendants.", NULL),
    (2, "Evolution", "Ensemble des transformations biologiques progressives héréditaires que subissent les êtres vivants, et qui se traduisent par l'apparition de nouvelles espèces à partir d'espèces préexistantes, ou par leur extinction.", NULL),
    (3, "phylogenèse", "Reconstitution de la succession des espèces ou des taxons au cours de l'évolution", NULL),
    (4, "Phylogénétique", "Branche de la génétique qui étudie les modifications génétiques des espèces au cours de leur évolution", NULL),
    (5, "Taxon", "Toute unité systémique, indépendamment de son rang taxonomique", NULL),
    (6, "Taxonomie", "Science qui a pour objet de décrire les êtres vivants, de les nommer et de les regrouper en taxon en fonction de leurs caractères.", NULL);