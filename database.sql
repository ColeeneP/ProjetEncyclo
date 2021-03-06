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
        vulgary_name VARCHAR(255) NOT NULL,
        fk_id_domain INT NOT NULL,
        fk_id_subdomain INT,
        fk_id_kingdom INT NOT NULL,
        fk_id_subkingdom INT,
        fk_id_rameau INT,
        fk_id_infrakingdom INT,
        fk_id_superphylum INT,
        fk_id_phylum INT NOT NULL,
        fk_id_subphylum INT,
        fk_id_infraphylum INT,
        fk_id_microphylum INT,
        fk_id_superclass INT,
        fk_id_class INT NOT NULL,
        fk_id_subclass INT,
        fk_id_infraclass INT,
        fk_id_superorder INT,
        fk_id_order INT NOT NULL,
        fk_id_suborder INT,
        fk_id_infraorder INT,
        fk_id_microorder INT,
        fk_id_superfamily INT,
        fk_id_family INT NOT NULL,
        fk_id_subfamily INT,
        fk_id_tribe INT,
        fk_id_subtribe INT,
        fk_id_genus INT NOT NULL,
        fk_id_subgenus INT,
        fk_id_section INT,
        fk_id_subsection INT,
        fk_id_species INT NOT NULL,
        fk_id_subspecies INT,
        fk_id_variety INT,
        fk_id_subvariety INT,
        fk_id_form INT,
        fk_id_subform INT,
        img VARCHAR(255),
        article_description TEXT NOT NULL,
        lifestyle VARCHAR(255) NOT NULL,
        biotop VARCHAR(255) NOT NULL,
        alimentation VARCHAR(255) NOT NULL,
        reproduction VARCHAR(255) NOT NULL,
        autres TEXT,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_user) references user(id) on delete cascade,
        FOREIGN KEY (fk_id_domain) references bio_domain(id) on delete cascade,
        FOREIGN KEY (fk_id_subdomain) references bio_subdomain(id) on delete cascade,
        FOREIGN KEY (fk_id_kingdom) references bio_kingdom(id) on delete cascade,
        FOREIGN KEY (fk_id_subkingdom) references bio_subkingdom(id) on delete cascade,
        FOREIGN KEY (fk_id_rameau) references bio_rameau(id) on delete cascade,
        FOREIGN KEY (fk_id_infrakingdom) references bio_infrakingdom(id) on delete cascade,
        FOREIGN KEY (fk_id_phylum) references bio_phylum(id) on delete cascade,
        FOREIGN KEY (fk_id_subphylum) references bio_subphylum(id) on delete cascade,
        FOREIGN KEY (fk_id_infraphylum) references bio_infraphylum(id) on delete cascade,
        FOREIGN KEY (fk_id_microphylum) references bio_microphylum(id) on delete cascade,
        FOREIGN KEY (fk_id_superclass) references bio_superclass(id) on delete cascade,
        FOREIGN KEY (fk_id_class) references bio_class(id) on delete cascade,
        FOREIGN KEY (fk_id_subclass) references bio_subclass(id) on delete cascade,
        FOREIGN KEY (fk_id_infraclass) references bio_infraclass(id) on delete cascade,
        FOREIGN KEY (fk_id_superorder) references bio_superorder(id) on delete cascade,
        FOREIGN KEY (fk_id_order) references bio_order(id) on delete cascade,
        FOREIGN KEY (fk_id_suborder) references bio_superorder(id) on delete cascade,
        FOREIGN KEY (fk_id_infraorder) references bio_infraorder(id) on delete cascade,
        FOREIGN KEY (fk_id_microorder) references bio_microorder(id) on delete cascade,
        FOREIGN KEY (fk_id_superfamily) references bio_superfamily(id) on delete cascade,
        FOREIGN KEY (fk_id_family) references bio_family(id) on delete cascade,
        FOREIGN KEY (fk_id_subfamily) references bio_subfamily(id) on delete cascade,
        FOREIGN KEY (fk_id_tribe) references bio_tribe(id) on delete cascade,
        FOREIGN KEY (fk_id_subtribe) references bio_subtribe(id) on delete cascade,
        FOREIGN KEY (fk_id_genus) references bio_genus(id) on delete cascade,
        FOREIGN KEY (fk_id_subgenus) references bio_subgenus(id) on delete cascade,
        FOREIGN KEY (fk_id_section) references bio_section(id) on delete cascade,
        FOREIGN KEY (fk_id_subsection) references bio_subsection(id) on delete cascade,
        FOREIGN KEY (fk_id_species) references bio_species(id) on delete cascade,
        FOREIGN KEY (fk_id_subspecies) references bio_subspecies(id) on delete cascade,
        FOREIGN KEY (fk_id_variety) references bio_variety(id) on delete cascade,
        FOREIGN KEY (fk_id_subvariety) references bio_subvariety(id) on delete cascade,
        FOREIGN KEY (fk_id_form) references bio_form(id) on delete cascade,
        FOREIGN KEY (fk_id_subform) references bio_subform(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS user
    (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        firstname VARCHAR(20) NOT NULL,
        user_name VARCHAR(20) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_domain
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        domain_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL
    ) ENGINE=INNODB;    

CREATE TABLE IF NOT EXISTS bio_subdomain
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_domain INT NOT NULL, 
        subdomain_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_domain) references bio_domain(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_kingdom
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_domain INT NOT NULL,
        kingdom_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_domain) references bio_domain(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_subkingdom
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_kingdom INT NOT NULL,
        subkingdom_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_kingdom) references bio_kingdom(id) on delete cascade
    ) ENGINE=INNODB;   

CREATE TABLE IF NOT EXISTS bio_rameau
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_kingdom INT NOT NULL,
        rameau_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_kingdom) references bio_kingdom(id) on delete cascade
    ) ENGINE=INNODB; 

CREATE TABLE IF NOT EXISTS bio_infrakingdom
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_kingdom INT NOT NULL,
        infrakingdom_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_kingdom) references bio_kingdom(id) on delete cascade
    ) ENGINE=INNODB; 

CREATE TABLE IF NOT EXISTS bio_superphylum
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_kingdom INT NOT NULL,
        superphylum_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_kingdom) references bio_kingdom(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_phylum
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_kingdom INT NOT NULL,
        phylum_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_kingdom) references bio_kingdom(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_subphylum
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_phylum INT NOT NULL,
        subphylum_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_phylum) references bio_phylum(id) on delete cascade
    ) ENGINE=INNODB; 

CREATE TABLE IF NOT EXISTS bio_infraphylum
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_phylum INT NOT NULL,
        infraphylum_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_phylum) references bio_phylum(id) on delete cascade
    ) ENGINE=INNODB;    

CREATE TABLE IF NOT EXISTS bio_microphylum
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_phylum INT NOT NULL,
        microphylum_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_phylum) references bio_phylum(id) on delete cascade
    ) ENGINE=INNODB;   

CREATE TABLE IF NOT EXISTS bio_superclass
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_phylum INT NOT NULL,
        superclass_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_phylum) references bio_phylum(id) on delete cascade
    ) ENGINE=INNODB;    

CREATE TABLE IF NOT EXISTS bio_class
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_phylum INT NOT NULL,
        class_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_phylum) references bio_phylum(id) on delete cascade
    ) ENGINE=INNODB;    

CREATE TABLE IF NOT EXISTS bio_subclass
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_class INT NOT NULL,
        subclass_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_class) references bio_class(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_infraclass
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_class INT NOT NULL,
        infraclass_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_class) references bio_class(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_superorder
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_class INT NOT NULL,
        superorder_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_class) references bio_class(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_order
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_class INT NOT NULL,
        order_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_class) references bio_class(id) on delete cascade
    ) ENGINE=INNODB;    

CREATE TABLE IF NOT EXISTS bio_suborder
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_order INT NOT NULL,
        suborder_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_order) references bio_order(id) on delete cascade
    ) ENGINE=INNODB; 

CREATE TABLE IF NOT EXISTS bio_infraorder
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_order INT NOT NULL,
        infraorder_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_order) references bio_order(id) on delete cascade
    ) ENGINE=INNODB;     

CREATE TABLE IF NOT EXISTS bio_microorder
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_order INT NOT NULL,
        microorder_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_order) references bio_order(id) on delete cascade
    ) ENGINE=INNODB;  

CREATE TABLE IF NOT EXISTS bio_superfamily
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_order INT NOT NULL,
        superfamily_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_order) references bio_order(id) on delete cascade
    ) ENGINE=INNODB;  

CREATE TABLE IF NOT EXISTS bio_family 
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_order INT NOT NULL,
        family_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_order) references bio_order(id) on delete cascade
    ) ENGINE=INNODB;    

CREATE TABLE IF NOT EXISTS bio_subfamily
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_family INT NOT NULL,
        subfamily_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_family) references bio_family(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_tribe
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_family INT NOT NULL,
        tribe_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_family) references bio_family(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_subtribe
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_family INT NOT NULL,
        subtribe_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_family) references bio_family(id) on delete cascade
    ) ENGINE=INNODB;        

CREATE TABLE IF NOT EXISTS bio_genus
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_family INT NOT NULL,
        genus_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_family) references bio_family(id) on delete cascade
    ) ENGINE=INNODB;    

CREATE TABLE IF NOT EXISTS bio_subgenus
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_genus INT NOT NULL,
        subgenus_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_genus) REFERENCES bio_genus(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_section
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_genus INT NOT NULL,
        section_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_genus) REFERENCES bio_genus(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_subsection
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_genus INT NOT NULL,
        subsection_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_genus) REFERENCES bio_genus(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_species
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_genus INT NOT NULL,
        species_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_genus) REFERENCES bio_genus(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_subspecies
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_species INT NOT NULL,
        subspecies_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_species) REFERENCES bio_species(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_variety
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_species INT NOT NULL,
        variety_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_species) REFERENCES bio_species(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_subvariety
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_species INT NOT NULL,
        subvariety_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_species) REFERENCES bio_species(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_form
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_species INT NOT NULL,
        form_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_species) REFERENCES bio_species(id) on delete cascade
    ) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS bio_subform
    (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        fk_id_species INT NOT NULL,
        subform_name VARCHAR(255) NOT NULL,
        identification TEXT NOT NULL,
        refs TEXT NOT NULL,
        FOREIGN KEY (fk_id_species) REFERENCES bio_species(id) on delete cascade
    ) ENGINE=INNODB;

INSERT INTO bio_domain (domain_name, identification, refs) VALUES
    ("Arch??es", "Liaisons ??ther entre les lipides de la membrane cellulaire. Les lipides de la membranes peuvent former des bicouches ou des monocouches rigides. ARNt avec de la pseudo-uracile ou de l'1-m??thylpseudo-uracile ?? la place de la thymine. G??nomes chim??riques poss??dant des g??nes bact??riens de m??tabolisme", ""),
    ('Eubact??ries', "Paroi cellulaire en peptidoglycane avec de l acide muramique. ARNt initiateur de la traduction porte une N-formylm??thionine", ""),
    ('Eucaryotes', "ADN contenu dans un noyau d??limit?? par une enveloppe nucl??aire. Le cytosquelette de la cellule est form?? de polym??res de tubuline regroup??s en microtubules. Flagelle a structure unique : 9 doublets/triplets de microtubules p??riph??riques associ??s ?? un doublet de microtubules centraux. Poss??dent des mitochondries.", "");

INSERT INTO bio_subdomain (id, fk_id_domain, subdomain_name, identification, refs) VALUES
    (1, 'Unicontes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (2, 'Bicontes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_kingdom (id, kingdom_name, fk_id_domain, identification, refs) VALUES 
    (1, 'Metazoaires', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (2, 'Myc??tes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),    
    (3, 'Plantes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_subkingdom (id, subkingdom_name, fk_id_kingdom, identification, refs) VALUES
    (1, 'Bilat??riens', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (2, 'Radiaires', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_superphylum (superphylum_name, fk_id_kingdom, identification, refs) VALUES
    ('Deut??rostomiens', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_phylum (id, phylum_name, fk_id_kingdom, identification, refs) VALUES
    (1, 'Anthoc??rotes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (2, 'Ascomyc??tes', 2, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (3, 'Basidiomyc??tes', 2, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (4, 'Blastocladiomyc??tes', 2, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (5, 'Bryophytes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (6, 'Charophytes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (7, 'Ch??tognathes', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (8, 'Chlorophytes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (9, 'Chord??s', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (10, 'Chytridiomyc??tes', 2, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (11, 'Ct??nophores', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (12, 'Echinodermes', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (13, 'Entomophthoromycota', 2, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (14, 'Glaucophytes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (15, 'Glom??romycota', 2, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (16, 'H??michord??s', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (17, 'Marchantiophytes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (18, 'Rhodophytes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (19, 'Trach??ophytes', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (20, 'X??nac??lomorphes', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (21, 'Zygomyc??tes', 2, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_subphylum (subphylum_name, fk_id_phylum, identification, refs) VALUES
    ('C??phalochord??s', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Crani??s', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Tuniciers', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Vert??br??s', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_superclass (superclass_name, fk_id_phylum, identification, refs) VALUES 
    ('Tetrapoda', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Ost??ichthyens', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_class (id, class_name, fk_id_phylum, identification, refs) VALUES 
    (1, 'Amphibiens', 9, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (2, 'Aves', 9, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (3, 'Cyanidiophyc??es', 18, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (4, 'Mammif??res', 9, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (5, 'Reptiles', 9, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (6, 'Sarcopt??rygiens', 9, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_subclass (subclass_name, fk_id_class, identification, refs) VALUES 
    ('Chilognatha', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Thecostraca', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Theria', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_superorder (superorder_name, fk_id_class, identification, refs) VALUES 
    ('Dipneustes', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Euarchontoglires', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Parareptilia', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_order (id, order_name, fk_id_class, identification, refs) VALUES 
    (1, 'Carnivores', 4, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (2, 'Cyanidiales', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (3, 'Primates', 4, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (4, 'Procolophonomorpha', 5, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_suborder (suborder_name, fk_id_order, identification, refs) VALUES 
    ('Caniformes', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Haplorrhini', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    ('Procolophonia', '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO bio_family (id, family_name, fk_id_order, identification, refs) VALUES
    (1, 'Canid??s', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (2, 'Ailurid??s', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (3, 'Indriid??s', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (4, 'L??murid??s', 3, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (5, 'Must??lid??s', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (6, 'Phocid??s', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (7, 'Procyonid??s', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (8, 'Otariid??s', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}'),
    (9, 'Ursid??s', 1, '{1, 2, 3, 4, "text"}', '{"ref1", "ref2"}');

INSERT INTO lexique (id, word, def, img) VALUES
    (1, "Clade", "Rameau ??volutif monophyl??tique, regroupant un anc??tre hypoth??tique pr??sentant pour la premi??re fois l'??tat d??riv?? dit apomorphe d'un caract??re, et l'ensemble de ses descendants.", NULL),
    (2, "Evolution", "Ensemble des transformations biologiques progressives h??r??ditaires que subissent les ??tres vivants, et qui se traduisent par l'apparition de nouvelles esp??ces ?? partir d'esp??ces pr??existantes, ou par leur extinction.", NULL),
    (3, "phylogen??se", "Reconstitution de la succession des esp??ces ou des taxons au cours de l'??volution", NULL),
    (4, "Phylog??n??tique", "Branche de la g??n??tique qui ??tudie les modifications g??n??tiques des esp??ces au cours de leur ??volution", NULL),
    (5, "Taxon", "Toute unit?? syst??mique, ind??pendamment de son rang taxonomique", NULL),
    (6, "Taxonomie", "Science qui a pour objet de d??crire les ??tres vivants, de les nommer et de les regrouper en taxon en fonction de leurs caract??res.", NULL);