Question 1Correct  
Une startup développe une application agricole utilisant des analyses avancées et gérant de grands volumes de données. Quel service AWS est le plus adapté à ce besoin ?  
**AWS EC2**  
**Amazon RDS**  
**Votre réponse est correcte**  
**AWS Redshift**  
**AWS S3**  
Explication générale  
 **AWS Redshift**

Amazon Redshift est un service d'entrepôt de données cloud entièrement géré, capable de traiter des données à l'échelle du pétaoctet. Il offre des performances de requête rapides grâce à sa technologie de stockage en colonnes et à la parallélisation des requêtes sur plusieurs nœuds. Pour une startup du secteur agricole souhaitant réaliser des analyses et des prévisions avancées sur de grands ensembles de données, Redshift est la solution idéale, car il est spécifiquement conçu pour l'analyse intensive de données volumineuses. Il s'adapte aux besoins de l'entreprise et offre la flexibilité d'utiliser les outils d'analyse de votre choix.  
Question 2Correct  
Quels sont les avantages suivants de l'adoption d'une conception découplée ? (Sélectionnez DEUX réponses.)  
**Garantit la conformité automatique à toutes les réglementations.**  
**Votre sélection est correcte**  
**Favorise un développement et un déploiement rapides.**  
**Les architectures découplées permettent toujours de réduire les coûts.**  
**Votre sélection est correcte**  
**Permettre aux composants de s'adapter indépendamment.**  
**La défaillance d'un seul composant entraîne une panne complète du système.**  
Explication générale  
**Favorise un développement et un déploiement rapides.**

Les architectures découplées décomposent une application complexe en composants plus petits et indépendants, souvent appelés microservices. Chaque composant ou service se concentre sur une fonction spécifique. Ainsi, les développeurs peuvent travailler simultanément sur différents composants, ce qui accélère les cycles de développement. Les déploiements sont également plus rapides, car seul le composant modifié doit être redéployé, et non l'application entière.

**Permettre aux composants de s'adapter indépendamment.**

L'un des principaux avantages d'une architecture découplée réside dans la capacité à adapter la capacité des composants à la demande. Si la charge d'un service augmente, seul ce service peut être dimensionné, sans impacter ni nécessiter la modification des autres parties de l'application. Cette approche permet une utilisation plus efficace des ressources et une gestion plus performante des pics de trafic.  
Question 3Correct  
Quels moyens permettent d'autoriser l'accès aux ressources AWS depuis les comptes des membres d'une organisation AWS ?  
**Clé d'accès**  
**Politique IAM**  
**Politique de routage**  
**Votre réponse est correcte**  
**Politiques de contrôle des services (PCS)**  
Explication générale  
**Politiques de contrôle des services (PCS)**

Les politiques de contrôle des services AWS (SCP) sont un type de politique permettant de gérer les autorisations au sein de votre organisation AWS. Elles vous permettent de définir les autorisations maximales des comptes membres de l'organisation. Contrairement aux politiques de gestion des identités et des accès (IAM), qui accordent des autorisations aux utilisateurs, aux groupes et aux rôles, les SCP agissent comme des garde-fous limitant les actions que les membres d'une organisation peuvent effectuer, indépendamment de leurs politiques IAM. Les SCP sont utiles pour garantir la conformité aux normes de gouvernance et de sécurité des données en contrôlant de manière centralisée l'accès aux services et ressources AWS pour plusieurs comptes AWS au sein d'une même organisation. Elles permettent d'appliquer les politiques au niveau de l'organisation, de l'unité organisationnelle (UO) ou du compte.  
Question 4Correct  
Une société de jeux vidéo souhaite développer un jeu en ligne. Elle a besoin d'une base de données pour stocker l'historique des sessions et les classements, avec une faible latence et une grande stabilité. Quel service AWS recommanderiez-vous ?  
**Amazon DynamoDB**  
**Votre réponse est correcte**  
**Base de données mémoire Amazon**  
**Amazon RDS**  
**Amazon ElastiCache**  
Explication générale  
**Base de données mémoire Amazon**

Amazon MemoryDB est un service de base de données en mémoire entièrement géré, reposant sur une architecture conçue pour la durabilité et la tolérance aux pannes. Il est conçu pour prendre en charge les applications exigeant une latence de lecture de l'ordre de la microseconde et une ingestion de données à haut débit, ce qui en fait une solution idéale pour une application de jeu comme celle décrite.

Amazon MemoryDB prend en charge les structures de données telles que les chaînes de caractères, les listes, les ensembles, les ensembles triés, les tables de hachage et les flux – des fonctionnalités utiles pour la gestion des sessions de jeu et des classements. Elle garantit une haute disponibilité en répliquant les données sur plusieurs zones de disponibilité, offrant ainsi une architecture tolérante aux pannes multi-AZ, idéale pour les cas d'utilisation exigeant une fiabilité élevée et une continuité d'activité.  
Question 5Correct  
Une entreprise a récemment migré vers AWS et souhaite optimiser ses stratégies de gestion des coûts. Elle a besoin d'une ventilation détaillée des coûts et de l'utilisation des ressources afin de comprendre où elles sont consommées.

En tant que praticien AWS Cloud, quel service AWS suggéreriez-vous pour répondre à ce besoin ?  
**Votre réponse est correcte**  
**Rapport sur les coûts et l'utilisation d'AWS**  
**Budgets AWS**  
**Conseiller de confiance AWS**  
**AWS Cost Explorer**  
Explication générale  
**Rapport sur les coûts et l'utilisation d'AWS**

Le rapport sur les coûts et l'utilisation d'AWS fournit l'ensemble le plus complet de données disponibles sur les coûts et l'utilisation d'AWS, incluant des métadonnées supplémentaires sur les services AWS, leur tarification et les réservations (par exemple, les instances réservées). Ce rapport permet aux entreprises de mieux comprendre leur facture AWS, de maîtriser leurs coûts et d'optimiser leurs dépenses.

Le rapport génère un tableau détaillé qui ventile les coûts par service, comptes associés et utilisation spécifique ayant engendré ces coûts, permettant ainsi des processus de refacturation et de remboursement précis. Ce rapport peut être personnalisé pour afficher une granularité horaire ou journalière et s'intègre à Amazon Athena pour les requêtes complexes. De plus, il permet d'affecter les coûts à des unités commerciales, des projets ou des environnements spécifiques grâce à des balises d'affectation des coûts. De par sa richesse de détails et ses options de personnalisation, le rapport de coûts et d'utilisation AWS est la solution idéale pour une entreprise souhaitant optimiser sa gestion des coûts et obtenir une vision approfondie de ses dépenses AWS.  
Question 6Correct  
Une entreprise transfère son infrastructure informatique d'un centre de données sur site vers le cloud AWS.

Quels coûts sont directement à la charge de l'entreprise ?  
**Le coût associé à l'infrastructure matérielle d'AWS**  
**Frais d'électricité pour les serveurs d'AWS**  
**Le coût de la mise en place de la sécurité physique dans les centres de données AWS**  
**Votre réponse est correcte**  
**Dépenses liées aux licences de logiciels d'application**  
Explication générale  
**Dépenses liées aux licences de logiciels d'application**

Lorsqu'une entreprise migre ses opérations vers le cloud AWS, elle reste responsable du coût des licences logicielles. Ainsi, si elle utilise un logiciel propriétaire nécessitant une licence, comme une base de données ou un serveur d'applications spécifique, elle doit gérer et payer ces licences séparément. Ces licences logicielles relèvent des obligations financières de l'entreprise et ne sont pas incluses dans les offres d'AWS Marketplace ni dans les solutions open source ou appartenant à AWS. Cet aspect est crucial pour la budgétisation et la conformité, car il permet à l'entreprise de respecter les accords de licence tout en tirant parti de l'évolutivité et de la flexibilité du cloud.  
Question 7Incorrect  
Une entreprise doit migrer 70 To de données hors ligne vers le cloud AWS. En tant que spécialiste du cloud, quel service recommanderiez-vous ?  
**Bonne réponse**  
**AWS Snowball**  
**Passerelle de stockage AWS**  
**Votre réponse est incorrecte**  
**Motoneige AWS**  
**AWS Snowcone**  
Explication générale  
**AWS Snowball**

AWS Snowball est une solution de transport de données qui utilise des dispositifs sécurisés pour transférer de gros volumes de données vers et depuis le cloud AWS. Elle répond aux problématiques courantes liées aux transferts de données à grande échelle, telles que les coûts réseau élevés, les longs délais de transfert et les problèmes de sécurité. Transférer des données avec Snowball est simple, rapide, plus sûr et peut coûter cinq fois moins cher qu'une connexion Internet haut débit. Snowball utilise un chiffrement de bout en bout et des boîtiers inviolables pour garantir la sécurité de vos données. Ceci est essentiel lorsque vous manipulez de grandes quantités de données sensibles, car il est crucial de les protéger pendant leur transfert.

Pour une migration de données portant sur 70 To, Snowball est la solution idéale. Un seul appareil Snowball peut prendre en charge des transferts de données jusqu'à 80 To, ce qui répond largement aux besoins de cette tâche. Le processus est relativement simple : AWS expédie un appareil Snowball sur votre site, vous y chargez vos données à l'aide du client Snowball, puis vous le renvoyez à AWS. Une fois l'appareil de retour dans un centre de données AWS, vos données sont importées dans Amazon S3.  
Question 8Correct  
Une entreprise souhaite utiliser certains services du cloud AWS. Cependant, pour des raisons juridiques, elle doit exécuter ces services sur son propre centre de données. Quel service AWS permet aux utilisateurs d'exécuter des services AWS natifs dans des centres de données sur site ?  
**Votre réponse est correcte**  
**Postes de contrôle AWS**  
**AWS Direct Connect**  
**Amazon VPC**  
**VPN AWS**  
Explication générale  
**Postes de contrôle AWS**

**AWS Outposts** déploie les services, l'infrastructure et les API AWS natifs dans les datacenters sur site, les espaces de colocation ou les points de présence (edge ​​computing). Il étend les capacités du cloud AWS aux environnements des clients, leur permettant d'exécuter et de gérer des applications en toute sécurité à l'aide des outils et services AWS qu'ils connaissent. Les Outposts sont composés de racks préconfigurés d'équipements de calcul et de stockage, installés et gérés par AWS, offrant une expérience de cloud hybride homogène. Les clients peuvent utiliser les mêmes API, services et pratiques opérationnelles que dans le cloud AWS pour créer, déployer et gérer des applications sur Outposts. Cette solution permet aux entreprises d'intégrer facilement leur infrastructure sur site à l'écosystème AWS pour des déploiements de cloud hybride.

Avec **AWS Outposts** , vous pouvez utiliser les mêmes API, outils et contrôles de sécurité AWS pour exécuter, gérer et sécuriser vos applications sur site et dans le cloud. Outposts prend en charge diverses applications, notamment celles qui doivent traiter des données localement et en temps réel, communiquer avec d'autres systèmes sur site et respecter les exigences de résidence des données.  
Question 9Correct  
Une entreprise dispose d'une application exécutée sur une instance Amazon EC2 et doit améliorer la sécurité de cette application pour le trafic entrant et sortant.

Quels outils faut-il utiliser pour renforcer la sécurité d'une instance EC2 ? (Sélectionnez DEUX réponses.)  
**Votre sélection est correcte**  
**ACL réseau**  
**Votre sélection est correcte**  
**Groupes de sécurité**  
**Passerelles Internet**  
**Clé d'accès IAM**  
**Politique IAM**  
Explication générale  
**Groupes de sécurité**

Les groupes de sécurité agissent comme un pare-feu virtuel pour votre instance, contrôlant le trafic entrant et sortant. Lors du lancement d'une instance, vous pouvez lui associer un ou plusieurs groupes de sécurité. Vous ajoutez ensuite des règles à chaque groupe de sécurité pour autoriser le trafic vers et depuis les instances qui lui sont associées. Ces règles peuvent être modifiées à tout moment ; les modifications sont automatiquement appliquées à toutes les instances associées au groupe de sécurité.

**ACL réseau**

Une liste de contrôle d'accès réseau (ACL) est une couche de sécurité optionnelle pour votre VPC. Elle fait office de pare-feu pour contrôler le trafic entrant et sortant d'un ou plusieurs sous-réseaux. Vous pouvez configurer des ACL réseau avec des règles similaires à celles de vos groupes de sécurité afin de renforcer la sécurité de votre VPC.  
Question 10Correct  
Une entreprise exploite une application hébergée sur une instance Amazon EC2 en Europe. Elle souhaite désormais migrer vers l'Amérique du Nord. Quelle procédure doit-elle suivre pour déployer l'application dans une autre région ?  
**Créez une demande d'assistance pour obtenir cette aide à la migration.**  
**Votre réponse est correcte**  
**Créez une image machine Amazon et déployez cette région.**  
**Créez un compte AWS distinct pour cette région.**  
**Vous n'avez rien à faire, il suffit de déployer une nouvelle application dans la région.**  
Explication générale  
**Créez une image machine Amazon et déployez cette région.**

Les images machine Amazon (AMI) servent de modèles pour le lancement d'instances dans Amazon Elastic Compute Cloud (EC2). Elles incluent le système d'exploitation, le serveur d'applications et les applications nécessaires au lancement d'une instance, c'est-à-dire un serveur virtuel dans le cloud AWS. Si une entreprise souhaite déplacer son application exécutée sur une instance EC2 vers une autre région, la création d'une AMI de l'instance EC2 existante, puis son déploiement dans la nouvelle région, constituent une méthode efficace et performante.

Ce processus consiste à créer une AMI à partir de l'instance EC2 existante dans la région actuelle, à copier cette AMI vers la nouvelle région, puis à lancer une nouvelle instance EC2 à partir de l'AMI copiée dans la nouvelle région. Cette méthode garantit que la nouvelle instance EC2 possède la même configuration, les mêmes logiciels installés et le même système de fichiers que l'instance d'origine.  
Question 11Correct  
Selon le cadre AWS Well-Architected, quelle est la pratique recommandée pour optimiser les coûts ?  
**Votre réponse est correcte**  
**Dimensionner les services en fonction des besoins en capacité.**  
**Déployer une architecture multirégionale.**  
**Chiffrez toutes les données au repos et en transit.**  
**Achetez des instances réservées pour toutes les charges de travail.**  
Explication générale  
**Dimensionner les services en fonction des besoins en capacité.**

L'optimisation des ressources est une pratique essentielle du pilier « Optimisation des coûts » du cadre AWS Well-Architected. Elle consiste à adapter en permanence les types et les tailles de vos ressources de calcul aux besoins de votre charge de travail, au moindre coût. Cela implique d'analyser la demande et d'éviter le surdimensionnement des ressources, permettant ainsi de réaliser des économies sans compromettre les performances ni la capacité.  
Question 12Correct  
Quel service AWS vous permet de gérer des données opérationnelles centralisées provenant de plusieurs services AWS ?  
**Amazon CloudWatch**  
**AWS CloudFormation**  
**Configuration AWS**  
**Votre réponse est correcte**  
**Gestionnaire de systèmes AWS**  
Explication générale  
**Gestionnaire de systèmes AWS**

AWS Systems Manager offre une interface utilisateur unifiée permettant de visualiser les données opérationnelles de plusieurs services AWS et d'automatiser les tâches opérationnelles sur l'ensemble de vos ressources AWS. Avec Systems Manager, vous pouvez regrouper des ressources, telles que des instances Amazon EC2, des compartiments Amazon S3 ou des instances Amazon RDS, par application, consulter les données opérationnelles à des fins de surveillance et de dépannage, et intervenir sur vos groupes de ressources.

AWS Systems Manager fournit un espace de stockage centralisé pour gérer vos données de configuration, qu'il s'agisse de données en clair comme des chaînes de caractères de base de données ou de secrets comme des mots de passe. Ceci est avantageux car cela permet  
Question 13Correct  
Quel service AWS fournit l'état actuel de tous les services AWS dans l'infrastructure mondiale AWS ?  
**Tableau de bord de santé personnelle AWS**  
**Amazon CloudWatch**  
**Inspecteur Amazon**  
**Votre réponse est correcte**  
**Tableau de bord de santé des services AWS**  
Explication générale  
**Tableau de bord de santé des services AWS**

Le tableau de bord AWS Service Health fournit des informations en temps réel sur l'état des services AWS dans différentes régions de l'infrastructure mondiale AWS. Il offre une vue transparente des problèmes opérationnels en cours affectant les services AWS et susceptibles d'impacter les charges de travail des clients. Cela permet aux clients de surveiller les performances globales des services qu'ils utilisent et d'identifier toute interruption pouvant affecter leurs applications.  
Question 14Incorrect  
Quel service vous permet d'organiser et de gérer efficacement les ressources AWS dans différents environnements tels que le développement, les tests et la production ?  
**Conseiller de confiance AWS**  
**Bonne réponse**  
**Groupes de ressources AWS**  
**Groupes de placement AWS**  
**Votre réponse est incorrecte**  
**AWS CloudFormation**  
Explication générale  
**Groupes de ressources AWS**

AWS Resource Groups vous permet de regrouper vos ressources AWS, qui peuvent ensuite être gérées et automatisées comme une collection. Ce service est particulièrement utile pour les environnements de développement, de test et de production, car il vous permet d'appliquer des balises et d'organiser les ressources selon leurs critères spécifiques. Par exemple, vous pouvez regrouper toutes les ressources appartenant à une application, un projet ou un environnement particulier, ce qui facilite la gestion et l'automatisation de tâches telles que la surveillance et l'allocation des coûts. Le système de balises fourni par AWS Resource Groups améliore la catégorisation et simplifie les flux de travail opérationnels dans différents environnements.  
Question 15Correct  
Une entreprise utilise une application hébergée dans son propre centre de données sur site. Elle souhaite stocker ses données dans le cloud afin de réduire ses coûts.

Quel service AWS propose un stockage cloud hybride offrant un accès sur site avec un stockage pratiquement illimité ?  
**Amazon EFS**  
**Amazon S3**  
**Votre réponse est correcte**  
**Passerelle de stockage AWS**  
**Amazon EC2**  
Explication générale  
**Passerelle de stockage AWS**

AWS Storage Gateway est un service de stockage cloud hybride qui vous offre un accès sur site à un stockage cloud quasi illimité. Il intègre de manière transparente vos environnements informatiques sur site au stockage cloud pour la sauvegarde et la restauration, l'archivage, la reprise après sinistre, le traitement des données cloud, la hiérarchisation du stockage et la migration. Il connecte un dispositif logiciel sur site au stockage cloud AWS pour une intégration fluide entre votre environnement informatique sur site et l'infrastructure de stockage AWS.  
Question 16Incorrect  
Une entreprise développe une application et souhaite une solution intégrée pour l'accès en écriture à une base de données Amazon RDS. Quelle méthode doit-elle utiliser pour garantir que l'application dispose des autorisations de base de données requises sans partager d'identifiants AWS à long terme ?  
**Bonne réponse**  
**Utilisez une authentification IAM Amazon RDS.**  
**Votre réponse est incorrecte**  
**Utilisez les variables d'environnement AWS Lambda pour stocker les informations d'identification.**  
 **Intégrez en dur les identifiants AWS IAM dans le code de l'application.**  
**Partagez les identifiants du compte racine AWS avec l'application.**  
Explication générale  
**Utilisez une authentification IAM Amazon RDS.**

Amazon RDS prend en charge l'authentification IAM, permettant de s'authentifier auprès d'une instance ou d'un cluster de bases de données à l'aide d'identifiants IAM. Grâce à l'authentification IAM, aucun mot de passe n'est requis pour se connecter à une instance de base de données. Un jeton d'authentification est généré à la demande par Amazon RDS. Chaque jeton a une durée de vie de 15 minutes. Cette méthode offre un accès plus sécurisé à l'instance RDS sans avoir à diffuser ni à intégrer d'identifiants AWS permanents à l'application.  
Question 17Correct  
Quelles affirmations sont vraies concernant AWS Organizations et la facturation consolidée ? (Sélectionnez DEUX réponses.)  
**Votre sélection est correcte**  
**La facturation consolidée regroupe les coûts encourus sur différents comptes en une seule facture.**  
**Votre sélection est correcte**  
**Tous les comptes membres peuvent partager leurs instances réservées en cas de besoin.**  
**AWS Organizations offre une réduction de 10 % sur tous les services pour les comptes membres.**  
**AWS Organizations limite le nombre de comptes liés à un maximum de 20\.**  
**AWS Organizations permet aux comptes membres de partager les plans de support AWS au sein de l'organisation.**  
Explication générale  
**La facturation consolidée regroupe les coûts encourus sur différents comptes en une seule facture.**

La facturation consolidée est une fonctionnalité d'AWS Organizations qui permet de regrouper les factures de plusieurs comptes AWS sur une seule facture. Cela simplifie la gestion et le suivi des coûts entre les différents services ou projets d'une entreprise. En consolidant la facturation, les organisations bénéficient également de remises sur volume, appliquées à l'ensemble de l'utilisation des comptes. Chaque compte reste indépendant, mais les avantages financiers et le suivi consolidé contribuent à rationaliser la gestion financière et à optimiser les coûts.

**Tous les comptes membres peuvent partager leurs instances réservées en cas de besoin.**

AWS Organizations permet aux comptes membres d'une même organisation de partager leurs instances réservées (RI). Ainsi, si un compte a acheté des RI, les autres comptes de la même organisation peuvent les utiliser, à condition qu'ils se trouvent dans la même zone de disponibilité et répondent aux autres critères applicables. Cette fonctionnalité de partage contribue à optimiser le retour sur investissement des RI achetées et garantit une meilleure utilisation des ressources au sein de l'organisation. En mutualisant les ressources, elle réduit le risque de sous-utilisation des RI et permet de réaliser des économies.  
Question 18Correct  
Quelle est la responsabilité d'AWS dans le cadre du modèle de responsabilité partagée dans les environnements cloud ?  
**Application de correctifs au système d'exploitation invité des instances Amazon EC2.**  
**Configuration des paramètres du groupe de sécurité pour une instance Amazon EC2.**  
**Votre réponse est correcte**  
**Garantir une infrastructure hautement disponible et durable pour Amazon S3.**  
**Mise en œuvre de la fédération d'identités entre les annuaires d'entreprise et les services AWS.**  
Explication générale  
**Garantir une infrastructure hautement disponible et durable pour Amazon S3.**

AWS est responsable de la maintenance de l'infrastructure qui prend en charge les services cloud. Pour Amazon S3, cela signifie garantir la disponibilité permanente du service et la durabilité des données stockées, c'est-à-dire leur intégrité et leur récupération fiable. AWS conçoit et maintient le réseau, le matériel et les installations qui hébergent le service S3, offrant ainsi à ses clients une plateforme robuste pour leurs solutions de stockage.  
Question 19Correct  
Quel service AWS surveille et protège en permanence vos données stockées dans Amazon Simple Storage Service (Amazon S3) contre les activités malveillantes ?  
**Bouclier AWS**  
**Inspecteur Amazon**  
**Votre réponse est correcte**  
**Amazon GuardDuty**  
**AWS WAF**  
Explication générale  
**Amazon GuardDuty**

Amazon GuardDuty est un service de détection des menaces qui surveille et analyse en continu les données provenant de diverses sources au sein des environnements AWS, telles que les données stockées dans S3, les journaux AWS CloudTrail, les journaux de flux VPC et les journaux DNS, afin de détecter les activités potentiellement malveillantes et les comportements non autorisés.

GuardDuty utilise des algorithmes d'apprentissage automatique et le renseignement sur les menaces pour analyser les données collectées et identifier les schémas d'attaque courants, tels que l'accès non autorisé, l'élévation de privilèges, les infections par des logiciels malveillants et l'exfiltration de données. Il fournit également des informations sur les appels d'API inhabituels, le trafic réseau anormal et les instances compromises.  
Question 20Correct  
Parmi les propositions suivantes, quel est le principe de conception recommandé pour optimiser les performances sur AWS ?  
**Optimiser la capacité du serveur**  
**Votre réponse est correcte**  
**Utilisez des architectures sans serveur**  
**Maximiser la redondance des données**  
**Minimiser le traitement des données**  
Explication générale  
**Utilisez des architectures sans serveur**

L'utilisation d'architectures sans serveur est un principe de conception clé recommandé par AWS pour optimiser les performances. Ces architectures permettent de créer et d'exécuter des applications et des services sans avoir à gérer de serveurs. AWS prend en charge les tâches de gestion de l'infrastructure telles que la maintenance des serveurs et du système d'exploitation, le provisionnement de la capacité, la mise à l'échelle automatique, la surveillance du code et la journalisation. Grâce à des services comme AWS Lambda, vous pouvez exécuter votre code sans provisionner ni gérer de serveurs, ce qui améliore les performances du système et vous permet de vous concentrer sur le développement de votre application.  
Question 21Correct  
De quels facteurs dépend le modèle de tarification d'AWS Lambda ?  
**Votre réponse est correcte**  
**Nombre de requêtes de fonction et durée d'exécution.**  
**Tarif horaire fixe en fonction du nombre de prestations utilisées.**  
**Quantité de mémoire allouée à la fonction.**  
**Durée totale d'exécution de la fonction.**  
Explication générale  
**Nombre de requêtes de fonction et durée d'exécution**

La tarification d'AWS Lambda repose sur le nombre de requêtes (appels de fonction) et leur durée d'exécution. Le coût d'une requête est calculé en fonction du nombre total de requêtes effectuées par l'ensemble de vos fonctions. La durée est calculée à partir du moment où votre code commence à s'exécuter jusqu'à son retour ou son arrêt, arrondie à la centaine de millisecondes supérieure. Le prix dépend de la quantité de mémoire allouée à votre fonction. La facturation se fait au temps total consommé, par incréments de 1 milliseconde.  
Question 22Correct  
Lequel décrit avec précision les modèles d'informatique en nuage AWS : Infrastructure as a Service (IaaS) et Platform as a Service (PaaS) ?  
**Les clients PaaS doivent gérer les systèmes d'exploitation, tandis que les clients IaaS n'y ont pas accès.**  
**Votre réponse est correcte**  
**L'IaaS permet aux clients un contrôle total sur leurs infrastructures, tandis que le PaaS abstrait l'infrastructure pour que les développeurs puissent se concentrer sur le code.**  
**Les offres PaaS comprennent des centres de données physiques sur site que les clients peuvent utiliser pour développer des applications.**  
**La plateforme PaaS fournit des ressources de calcul brutes, du stockage et une connectivité réseau, tandis que l'IaaS offre des services de base de données préconfigurés et des intergiciels.**  
Explication générale  
**L'IaaS permet aux clients un contrôle total sur leurs infrastructures, tandis que le PaaS abstrait l'infrastructure pour que les développeurs puissent se concentrer sur le code.**

Dans le modèle IaaS, les clients contrôlent entièrement leur infrastructure virtualisée, notamment les réseaux, les serveurs virtuels et le stockage. Ils gèrent ainsi le système d'exploitation, les applications, l'environnement d'exécution et les données. À l'inverse, le modèle PaaS offre une plateforme permettant aux clients de développer, d'exécuter et de gérer des applications sans avoir à se soucier de la complexité de la création et de la maintenance de l'infrastructure généralement associée au développement et au lancement d'une application.  
Question 23Correct  
 Une entreprise de commerce électronique déploie une application dans un VPC qui interagira avec une base de données Amazon RDS. Elle souhaite que l'instance RDS soit protégée des menaces en ligne tout en restant connectée à l'application.

Quelle action répond à cette exigence ?  
**Votre réponse est correcte**  
**Placez la base de données RDS dans un sous-réseau privé et configurez les tables de routage pour garantir que l'application puisse y accéder.**  
**Placez l'application et la base de données RDS dans des sous-réseaux publics, mais assurez-vous que le point de terminaison de la base de données n'est pas accessible publiquement.**  
**Utilisez les rôles AWS IAM pour limiter l'accès à la base de données RDS depuis l'application.**  
**Placez la base de données RDS dans un sous-réseau public et utilisez un groupe de sécurité pour restreindre le trafic entrant.**  
Explication générale  
**Placez la base de données RDS dans un sous-réseau privé et configurez les tables de routage pour garantir que l'application puisse y accéder.**

Amazon Virtual Private Cloud (VPC) permet aux utilisateurs de provisionner une section logiquement isolée du cloud AWS, où ils peuvent déployer des ressources dans un réseau virtuel qu'ils définissent. Au sein d'un VPC, plusieurs sous-réseaux, qui sont des blocs distincts d'adresses IP, peuvent être publics (accessibles depuis Internet) ou privés (non accessibles directement depuis Internet). Les tables de routage d'un VPC déterminent la manière dont le trafic est acheminé entre les sous-réseaux, Internet et les autres services AWS.

Le placement de la base de données RDS dans un sous-réseau privé garantit qu'elle n'est pas directement accessible depuis Internet. Un sous-réseau privé au sein d'un VPC bloque le trafic entrant direct depuis l'extérieur du VPC. En ajustant les tables de routage et la configuration des groupes de sécurité, l'application, même si elle se trouve dans un sous-réseau différent, peut accéder à la base de données RDS. Cette approche répond aux exigences de sécurité de la base de données face aux menaces Internet, tout en la rendant accessible aux applications internes nécessaires.  
Question 24Correct  
Quel service AWS devez-vous utiliser pour chiffrer les données au repos d'une instance Amazon RDS ?  
**AWS CloudTrail**  
**Configuration AWS**  
**Votre réponse est correcte**  
**Service de gestion des clés AWS (KMS)**  
**Amazon CloudWatch**  
Explication générale  
**Service de gestion des clés AWS (KMS)**

AWS Key Management Service (KMS) est un service géré qui vous permet de créer et de contrôler les clés cryptographiques utilisées pour chiffrer vos données. Lorsque vous activez le chiffrement pour une instance Amazon RDS, KMS génère et gère les clés principales utilisées pour sécuriser votre base de données. Grâce à l'intégration d'AWS KMS, vous pouvez appliquer le chiffrement au repos afin de protéger les données sensibles et précieuses stockées dans RDS. KMS simplifie la gestion des clés de chiffrement grâce à des fonctionnalités telles que la rotation automatique des clés, les journaux d'audit via AWS CloudTrail et des politiques de contrôle d'accès précises.  
Question 25Correct  
Laquelle des propositions suivantes décrit le mieux le concept de tolérance aux pannes ?  
**La capacité d'un système à fonctionner sans interruption de service**  
**La capacité d'un système à gérer les erreurs avec élégance**  
**La capacité d'un système à s'adapter à des charges de travail changeantes**  
**Votre réponse est correcte**  
**La capacité d'un système à détecter les pannes et à s'en remettre**  
Explication générale  
**La capacité d'un système à détecter les pannes et à s'en remettre**

La tolérance aux pannes désigne la capacité d'un système à continuer de fonctionner malgré une ou plusieurs pannes. Un système tolérant aux pannes est conçu pour détecter les pannes et s'en remettre sans interruption significative de service. Ces systèmes intègrent généralement des redondances et des mécanismes de basculement automatique afin de garantir la continuité de service en cas de panne.  
Question 26Correct  
Quel pilier du cadre AWS Well-Architected met l'accent sur l'exploitation et la surveillance des systèmes pour générer de la valeur commerciale et améliorer en continu les processus et les procédures ?  
**Optimisation des coûts**  
**Votre réponse est correcte**  
**Excellence opérationnelle**  
**Efficacité de performance**  
**Sécurité**  
Explication générale  
**Excellence opérationnelle**

L'excellence opérationnelle souligne l'importance des systèmes d'exploitation et de surveillance pour générer de la valeur ajoutée et améliorer en continu les processus et les procédures. Elle englobe les meilleures pratiques de gestion et d'automatisation des changements, de réponse aux incidents et de définition des normes de gestion des opérations quotidiennes. Ce pilier garantit le bon fonctionnement des systèmes et leur capacité d'adaptation aux besoins changeants, permettant ainsi aux entreprises d'atteindre une efficacité optimale tout en préservant leur aptitude à innover et à s'améliorer en permanence.  
Question 27Correct  
Une organisation souhaite repenser une application monolithique en une architecture de microservices sur AWS. Quels seront les principaux avantages de l'adoption de cette architecture ?  
**Votre réponse est correcte**  
**Cette architecture permet une mise à l'échelle indépendante des composants de l'application.**  
**Cette architecture réduit considérablement les frais de gestion.**  
**Cette architecture offre une limite de seuil maximale permettant de réduire les coûts.**  
**Cette architecture réduit la complexité de la communication entre les composants.**  
Explication générale  
**Cette architecture permet une mise à l'échelle indépendante des composants de l'application.**

L'architecture de microservices permet de diviser une application en composants plus petits et indépendants, chacun remplissant une fonction distincte. Ces composants, ou microservices, peuvent être déployés, mis à jour et mis à l'échelle indépendamment. Cette modularité signifie que si un service connaît un pic de demande, seul ce microservice doit être mis à l'échelle, ce qui permet une utilisation plus efficace des ressources et des économies. Cette caractéristique est particulièrement utile pour les organisations dont la charge varie, car elle leur permet de gérer les pics de charge sans surdimensionner leurs ressources en fonctionnement normal.  
Question 28Correct  
Une entreprise envisage de développer une application utilisant un service de courtage de messages. Quel service AWS recommanderiez-vous ?  
**Amazon SNS**  
**Amazon SQS**  
**AWS Step Functions**  
**Votre réponse est correcte**  
**Amazon MQ**  
Explication générale  
**Amazon MQ**

Amazon MQ est un service de courtage de messages géré pour Apache ActiveMQ qui simplifie la configuration et l'exploitation des serveurs de messages dans le cloud. Il est idéal pour les développeurs d'applications utilisant des serveurs de messages open source et souhaitant un service entièrement géré, parfaitement intégré à leurs applications existantes. Il simplifie également la migration des serveurs de messages sur site vers le cloud, car vous pouvez utiliser votre code existant et vos protocoles de messagerie tels que JMS et NMS.  
Question 29Correct  
Parmi les ressources AWS suivantes, lesquelles offrent des conseils et une assistance d'experts pour la migration vers le cloud AWS ? (Sélectionnez DEUX réponses.)  
**Votre sélection est correcte**  
**Services professionnels AWS**  
**Amazon Elastic Compute Cloud (EC2)**  
**AWS Cost Explorer**  
**Votre sélection est correcte**  
**Réseau de partenaires AWS (APN)**  
**Amazon Simple Storage Service (S3)**  
Explication générale  
**Services professionnels AWS**

AWS Professional Services est une équipe d'experts AWS qui accompagne les clients dans la réalisation de leurs objectifs commerciaux lors de leur migration vers le cloud. Cette équipe fournit un support de niveau entreprise grâce à des méthodes éprouvées et une expertise reconnue en matière de cloud computing. En collaborant avec AWS Professional Services, les clients bénéficient d'un accompagnement personnalisé, adapté à leurs besoins spécifiques, garantissant ainsi une migration fluide et efficace. L'équipe les aide à planifier, à mettre en œuvre les meilleures pratiques, à optimiser les performances et les coûts, et à garantir le respect des normes de sécurité et de conformité. Pour les clients souhaitant migrer des applications vers le cloud, AWS Professional Services constitue une ressource précieuse qui leur permet de maîtriser la complexité de la migration grâce aux meilleures pratiques et aux outils AWS.  
Question 30Incorrect  
Quel service/fonctionnalité AWS permet un transfert de données privé et sécurisé entre deux comptes AWS ?  
**Équilibreur de charge réseau (NLB)**  
**Interconnexion VPC**  
**Votre réponse est incorrecte**  
**Réseau privé virtuel (VPN)**  
**Bonne réponse**  
**Connexion directe**  
Explication générale  
**Interconnexion VPC**

Le peering VPC permet de créer une route réseau directe entre deux clouds privés virtuels (VPC) situés dans des régions différentes, autorisant ainsi une communication privée sans limitation de bande passante ni transit de données sur l'Internet public. Ce service est particulièrement adapté à la communication entre comptes, car il facilite un transfert de données sécurisé, à faible latence et à haut débit. Les connexions de peering VPC sont établies entre les VPC à l'aide d'adresses IP privées, en exploitant les fonctionnalités de sécurité robustes inhérentes aux VPC, telles que les groupes de sécurité et les listes de contrôle d'accès (ACL) réseau. Ceci garantit que les données restent au sein du réseau AWS, offrant ainsi une couche de sécurité supplémentaire.  
Question 31Correct  
Une entreprise se prépare à lancer une nouvelle application web utilisant une base de données PostgreSQL. Son objectif est de garantir une haute disponibilité et des sauvegardes automatiques, tout en minimisant les efforts de gestion.

Quelle solution serait la meilleure recommandation ?  
**Installez PostgreSQL sur un serveur local.**  
**Installez PostgreSQL sur une instance Amazon EC2.**  
**Votre réponse est correcte**  
**Utilisez Amazon RDS avec PostgreSQL.**  
**Déploiement de PostgreSQL sur Amazon Lightsail.**  
Explication générale  
**Utilisez Amazon RDS avec PostgreSQL.**

Amazon RDS (Relational Database Service) est un service de base de données relationnelle géré. Il prend en charge plusieurs moteurs de base de données tels que MySQL, PostgreSQL, SQL Server et autres, et gère automatiquement les tâches courantes comme le provisionnement, les correctifs, les sauvegardes et la mise à l'échelle. RDS simplifie l'administration des bases de données, permettant aux utilisateurs de se concentrer sur le développement d'applications. Il offre des fonctionnalités telles que la haute disponibilité avec les déploiements multi-AZ, les réplicas en lecture pour la mise à l'échelle des opérations de lecture et des fonctions de sécurité comme le chiffrement des données au repos et en transit. RDS convient à une large gamme d'applications nécessitant des solutions de base de données évolutives et fiables.

Amazon RDS avec PostgreSQL est une solution idéale pour lancer une application web avec une base de données PostgreSQL tout en garantissant une haute disponibilité et en minimisant les efforts de gestion.  
Question 32Correct  
Une startup technologique souhaite standardiser son processus de configuration AWS pour différents environnements d'application et suivre les versions de déploiement pour faciliter la restauration et la révision.

Parmi les services AWS suivants, lesquels répondent le mieux à cette exigence ? (Sélectionnez DEUX réponses.)  
**Votre sélection est correcte**  
**AWS Elastic Beanstalk**  
**Amazone Athéna**  
**Amazon CloudWatch**  
**Votre sélection est correcte**  
**AWS CloudFormation**  
**AWS Glue**  
Explication générale  
**AWS Elastic Beanstalk**

AWS Elastic Beanstalk est une plateforme en tant que service (PaaS) qui permet aux développeurs de déployer et de gérer des applications sans se soucier de l'infrastructure sous-jacente. Elle simplifie la gestion de l'infrastructure et offre des moyens de la personnaliser grâce à des fichiers de configuration. Ceci garantit un déploiement cohérent dans différents environnements. Le versionnage des applications déployées est également intégré, facilitant ainsi la restauration et la gestion.

**AWS CloudFormation**

AWS CloudFormation permet aux utilisateurs de définir et de déployer une infrastructure sous forme de code (IaC). Les organisations peuvent ainsi automatiser le provisionnement des ressources et garantir la cohérence des environnements déployés. Cette solution utilise des modèles, écrits en JSON ou YAML, qui décrivent les ressources souhaitées et leurs dépendances. Le versionnage est simplifié, car ces modèles peuvent être stockés dans des systèmes de contrôle de version comme Git. La réplication des environnements, du développement à la production, ou même entre plusieurs régions, devient ainsi un processus systématique et reproductible.  
Question 33Correct  
Quels services ou fonctionnalités AWS peuvent être utilisés pour mettre en œuvre des stratégies de reprise après sinistre pour les instances Amazon EC2 ? (Sélectionnez DEUX réponses.)  
**Amazon S3 Glacier**  
**Votre sélection est correcte**  
**Instantanés d'Amazon Elastic Block Store (Amazon EBS)**  
**AWS Lambda**  
**Votre sélection est correcte**  
**Images de machine Amazon EC2 (AMI)**  
**Mise à l'échelle automatique d'Amazon EC2**  
Explication générale  
**Images de machine Amazon EC2 (AMI)**

Une image machine Amazon (AMI) est un modèle utilisé pour créer des machines virtuelles (instances EC2) sur Amazon Web Services (AWS). Elle encapsule le système d'exploitation, le serveur d'applications et les applications. Les AMI facilitent la réplication des environnements, simplifiant ainsi le déploiement et la mise à l'échelle de l'infrastructure au sein des services de cloud computing AWS.

Une image machine Amazon (AMI) peut servir de solution de reprise après sinistre. En créant l'AMI de votre instance, vous capturez l'état complet du serveur, y compris le système d'exploitation, les logiciels installés et toutes les configurations de l'instance. En cas de besoin de reprise, vous pouvez lancer de nouvelles instances à partir de cette AMI dans n'importe quelle région, ce qui garantit une restauration rapide de vos applications à leur état précédent ou leur migration vers une nouvelle région suite à des perturbations géographiques.

**Instantanés d'Amazon Elastic Block Store (Amazon EBS)**

Les snapshots Amazon EBS offrent une solution durable et sécurisée pour sauvegarder les volumes de vos instances EC2 à un instant précis. Stockés dans Amazon S3, ces snapshots garantissent une durabilité de 99,999999999 %, assurant ainsi la sécurité et la récupération de vos données même en cas de sinistre. Ils permettent de restaurer rapidement les volumes EBS et de les attacher à des instances EC2 nouvelles ou existantes, facilitant ainsi une reprise d'activité rapide. L'automatisation de la création de snapshots EBS via Amazon Data Lifecycle Manager renforce la stratégie de reprise d'activité en garantissant la création de sauvegardes à intervalles réguliers sans intervention manuelle, offrant ainsi une méthode fiable de récupération des données.  
Question 34Correct  
Une entreprise dispose de 10 téraoctets de données stockées sur Amazon S3 et prévoit d'effectuer des analyses de données ponctuelles. Quel service AWS garantit l'exécution des requêtes la plus économique ?  
**Amazon Redshift**  
**Votre réponse est correcte**  
**Amazone Athéna**  
**Amazon RDS**  
**AWS Glue**  
Explication générale  
**Amazone Athéna**

Amazon Athena est un service de requêtes interactives sans serveur qui simplifie l'analyse des données stockées dans Amazon S3 à l'aide du langage SQL standard. C'est la solution la plus économique pour les entreprises comme celle-ci, qui disposent d'un volume important de données stockées dans S3 et qui doivent exécuter des requêtes ponctuelles. Avec Athena, la facturation est basée sur le volume de données analysées par les requêtes, ce qui le rend particulièrement avantageux pour les charges de travail où les requêtes ne sont ni constantes ni continues. Ce modèle de tarification offre flexibilité et économies, car il ne nécessite aucun chargement de données ni gestion d'infrastructure. L'absence de serveur d'Athena signifie également qu'aucune infrastructure n'est à gérer ni à configurer, ce qui réduit les coûts et la complexité opérationnels. Pour les analyses ponctuelles, Athena offre la simplicité et la rentabilité nécessaires, permettant à l'entreprise d'interroger ses données sans les contraintes liées à la gestion d'un entrepôt de données ou d'un système de base de données complexe.  
Question 35Correct  
Dans le contexte d'AWS, quelle est la stratégie de migration recommandée parmi les suivantes ?  
**Migration simultanée de toutes les applications critiques afin d'optimiser l'efficacité.**  
**Se concentrer uniquement sur les aspects techniques et ignorer les considérations commerciales et opérationnelles.**  
**Passer outre la phase d'évaluation pour accélérer le processus de migration.**  
**Votre réponse est correcte**  
**Migration progressive des charges de travail tout en maintenant les systèmes existants en parallèle.**  
Explication générale  
**Migration progressive des charges de travail tout en maintenant les systèmes existants en parallèle.**

Une migration progressive, où les charges de travail sont déplacées par étapes tandis que les systèmes existants restent opérationnels, constitue une stratégie efficace. Cette approche par phases réduit les risques en évitant toute interruption des opérations en cours et offre une solution de repli en cas d'imprévus. Elle permet également d'affiner en continu le processus de migration grâce aux premiers retours d'expérience. Le maintien en parallèle des systèmes existants garantit la continuité des activités et donne aux entreprises le temps de s'adapter au nouvel environnement cloud.  
Question 36Incorrect  
Une entreprise prévoit d'accroître considérablement son utilisation d'AWS et a besoin d'un support de facturation avancé pour gérer efficacement ses coûts croissants.

Quelles fonctionnalités AWS devraient-ils envisager pour garantir une prise en charge complète de la facturation ?  
**Votre réponse est incorrecte**  
**Gestionnaires de comptes AWS**  
**Bonne réponse**  
**AWS Billing Conductor**  
**Amazon Connect**  
**Niveau gratuit AWS**  
Explication générale  
**AWS Billing Conductor**

AWS Billing Conductor permet aux clients de personnaliser et de partager des rapports de coûts détaillés, incluant les informations de refacturation. Il offre une assistance avancée en matière de facturation, permettant aux entreprises d'associer leur utilisation et leurs coûts AWS à leur structure interne. Cet outil est particulièrement utile aux entreprises en pleine croissance qui doivent répartir leurs coûts avec précision entre leurs différents départements ou projets. Il offre également la possibilité de créer des tarifs personnalisés pour les clients internes et externes, aidant ainsi les entreprises à mieux comprendre et gérer leurs dépenses AWS.  
Question 37Correct  
Parmi les plans de support AWS suivants, lesquels proposent une gestion automatisée des demandes de support permettant de créer, gérer et clôturer ces demandes ? (Sélectionnez DEUX réponses.)  
**Basique**  
**Votre sélection est correcte**  
**Entreprise**  
**Votre sélection est correcte**  
**Entreprise**  
**Promoteur**  
**Entreprise**  
Explication générale  
**Entreprise**

Le plan AWS Business Support offre une gestion automatisée des incidents. Vous pouvez ainsi utiliser les actions de l'API AWS Support pour créer, décrire, lister et résoudre vos incidents de support AWS par programmation. Vous pouvez donc gérer vos incidents sans avoir à vous rendre sur le site web du Centre de support AWS.

**Entreprise**

Le support AWS Enterprise offre le plus haut niveau d'assistance proposé par AWS et inclut une gestion automatisée des incidents. Il assure une assistance technique 24 h/24 et 7 j/7 grâce à des ingénieurs hautement qualifiés, des outils et des technologies permettant de gérer automatiquement l'état de santé et les incidents, ainsi qu'un responsable technique de compte dédié qui fournit des conseils proactifs et une planification stratégique.  
Question 38Correct  
Une entreprise souhaite exécuter une application nécessitant un accès étendu à l'infrastructure virtuelle sous-jacente. En tant que spécialiste du cloud, quel service recommanderiez-vous ?  
**Voile lumineuse Amazon**  
**Amazon Fargate**  
**Votre réponse est correcte**  
**Amazon EC2**  
**AWS Lambda**  
Explication générale  
**Amazon EC2**

Amazon Elastic Compute Cloud (Amazon EC2) fournit une capacité de calcul sécurisée et modulable dans le cloud. EC2 offre à l'utilisateur un contrôle total de ses ressources de calcul et lui permet de s'exécuter sur l'environnement informatique éprouvé d'Amazon.

Avec Amazon EC2, l'entreprise bénéficie du contrôle et de la flexibilité nécessaires à son application. Amazon EC2 propose différents types d'instances optimisés pour divers cas d'utilisation et permet aux utilisateurs de configurer leurs propres machines virtuelles. Il offre un accès direct au serveur et permet de gérer des éléments tels que le système d'exploitation, les correctifs de sécurité, les applications et les paramètres réseau. C'est pourquoi EC2 est la solution idéale pour une application nécessitant un accès étendu à l'infrastructure virtuelle sous-jacente.  
Question 39Correct  
Quelle affirmation est vraie lors de l'utilisation du pare-feu d'applications Web AWS (AWS WAF) ?  
**Votre réponse est correcte**  
**Protège contre les attaques courantes telles que l'injection SQL et le Cross-Site Scripting (XSS).**  
**Assure la protection des applications contre les attaques par déni de service distribué (DDoS).**  
**Analyse en continu les charges de travail AWS afin de détecter les vulnérabilités logicielles et les expositions réseau non intentionnelles.**  
**Fournit des recommandations de sécurité détaillées pour les comptes et les charges de travail AWS afin de prévenir les activités malveillantes.**  
Explication générale  
**Protège contre les attaques courantes telles que l'injection SQL et le Cross-Site Scripting (XSS).**

Le pare-feu d'applications web (AWS WAF) est un service de sécurité cloud qui protège les applications web contre les attaques courantes. Il permet de créer des règles pour filtrer le trafic web en fonction des adresses IP, des en-têtes HTTP ou de conditions personnalisées. Avec AWS WAF, vous pouvez atténuer les menaces telles que les injections SQL, les attaques XSS (Cross-Site Scripting) et bien plus encore, contribuant ainsi à protéger vos applications contre les attaques. Il s'intègre parfaitement aux autres services AWS, offrant une protection évolutive et personnalisable pour vos applications web hébergées sur l'infrastructure AWS.  
Question 40Correct  
L'équipe de sécurité d'une entreprise a constaté que certains rôles IAM étaient partagés avec des entités externes. Quel service ou fonctionnalité AWS permet de détecter de telles configurations ?  
**Votre réponse est correcte**  
**Analyseur d'accès AWS IAM**  
**Services gérés AWS**  
**Tour de contrôle AWS**  
**Gestionnaire de systèmes AWS**  
Explication générale  
**Analyseur d'accès AWS IAM**

AWS IAM Access Analyzer est une fonctionnalité conçue pour vous aider à identifier les ressources de votre compte AWS, telles que les compartiments Amazon S3 ou les rôles IAM, partagées avec une entité externe. Pour ce faire, elle analyse les politiques basées sur les ressources afin de vous indiquer celles qui autorisent l'accès à vos ressources depuis l'extérieur de votre compte AWS. Cette fonctionnalité est extrêmement utile pour garantir la sécurité et la confidentialité de vos données, en veillant à ce que seules les personnes autorisées y aient accès. Lorsque vous activez Access Analyzer, l'analyse des politiques et la génération des résultats se lancent automatiquement. Ces résultats fournissent des informations détaillées sur les ressources accessibles depuis l'extérieur de votre compte AWS, le type d'accès autorisé et l'entité externe qui y a accès. Vous pouvez ainsi examiner les accès et prendre les mesures nécessaires pour les restreindre, ce qui vous permet de respecter le principe du moindre privilège et d'améliorer votre niveau de sécurité.  
Question 41Incorrect  
Concernant la facturation et la tarification AWS, quelle affirmation est vraie ?  
**Votre réponse est incorrecte**  
**AWS fournit un rapport de facturation détaillé qui peut être intégré à des logiciels de comptabilité tiers.**  
**Les instances réservées nécessitent un paiement anticipé et ne bénéficient d'aucune réduction par rapport aux tarifs à la demande.**  
**Le transfert de données entre les régions AWS est toujours gratuit.**  
**Bonne réponse**  
**L'offre gratuite d'AWS fournit certaines ressources gratuitement, mais uniquement pendant les 12 premiers mois suivant la création du compte.**  
Explication générale  
**L'offre gratuite d'AWS fournit certaines ressources gratuitement, mais uniquement pendant les 12 premiers mois suivant la création du compte.**

L'offre gratuite d'AWS permet aux nouveaux utilisateurs d'explorer et d'utiliser les services AWS gratuitement, dans certaines limites. Elle comprend des offres toujours gratuites, 12 mois d'essai gratuit et des essais de courte durée. Cette offre permet d'expérimenter des services comme Amazon EC2, S3 et DynamoDB sans frais initiaux, ce qui la rend idéale pour apprendre et développer ses premiers projets sur AWS. Elle est particulièrement avantageuse pour les nouveaux clients qui souhaitent se familiariser avec AWS, leur permettant d'apprendre, d'expérimenter et de créer des solutions sur AWS sans investissement initial.  
Question 42Correct  
Une organisation souhaite étendre son infrastructure cloud sur AWS. Elle doit s'assurer que son équipe de développement a accès aux dernières technologies AWS et aux meilleures pratiques pour la mise en œuvre de solutions d'infrastructure sécurisées, performantes, résilientes et efficaces.

Quelles ressources AWS recommanderiez-vous pour obtenir des conseils sur les bonnes pratiques d'architecture ? (Sélectionnez DEUX.)  
**Votre sélection est correcte**  
**Outil AWS Well-Architected**  
**Votre sélection est correcte**  
**Centre de connaissances AWS**  
**Amazon DynamoDB**  
**Tableau de bord de santé des services AWS**  
**Amazon Virtual Private Cloud (VPC)**  
Explication générale  
**Centre de connaissances AWS**

Le Centre de connaissances AWS est une ressource précieuse qui apporte des réponses à de nombreuses questions sur l'exploitation et le dépannage des différents services AWS. Il compile les analyses et les bonnes pratiques des ingénieurs du support AWS, basées sur les problèmes et solutions courants qu'ils rencontrent. C'est donc un outil idéal pour les développeurs qui souhaitent résoudre rapidement les difficultés opérationnelles ou comprendre les bonnes pratiques d'utilisation des services AWS. Le Centre de connaissances aide les équipes à éviter les pièges courants et à utiliser plus efficacement les capacités d'AWS, leur permettant ainsi de maintenir des applications sécurisées, performantes et fiables tout en optimisant les coûts.

**Outil AWS Well-Architected**

L'outil AWS Well-Architected contribue à la création d'infrastructures applicatives sécurisées, performantes, résilientes et efficaces. Basé sur le framework AWS Well-Architected, il propose une approche cohérente pour évaluer les architectures et mettre en œuvre des conceptions évolutives. Il offre des conseils articulés autour de cinq piliers : excellence opérationnelle, sécurité, fiabilité, performance et optimisation des coûts. Grâce à l'outil AWS Well-Architected, les développeurs peuvent évaluer leurs charges de travail par rapport aux bonnes pratiques et recevoir des recommandations d'amélioration, ce qui en fait une ressource indispensable pour garantir des solutions bien architecturées sur AWS.  
Question 43Correct  
Une entreprise possède environ 80 pétaoctets de données. Quel service est le plus adapté pour transférer ces données d'un centre de données sur site vers le cloud AWS ?  
**AWS Snowcone**  
**Accélération du transfert S3**  
**Votre réponse est correcte**  
**Motoneige AWS**  
**AWS Snowball**  
Explication générale  
**Motoneige AWS**

AWS Snowmobile est un service de transfert de données à l'échelle de l'exaoctet, conçu pour déplacer d'énormes volumes de données vers AWS. Pour un transfert de données allant jusqu'à 80 pétaoctets, il représente la solution la plus adaptée parmi les options disponibles. Snowmobile peut transférer jusqu'à 100 pétaoctets de données par tâche, ce qui le rend particulièrement efficace pour migrer des volumes massifs de données vers le cloud. Il permet de surmonter les difficultés liées aux coûts réseau élevés, aux longs délais de transfert et aux problèmes de sécurité, afin de migrer les données avec une efficacité optimale. Snowmobile utilise plusieurs niveaux de sécurité pour protéger vos données, notamment du personnel de sécurité dédié, le suivi GPS, la surveillance par alarme, la vidéosurveillance 24h/24 et 7j/7 et, en option, un véhicule d'escorte sécurisé pendant le transport.  
Question 44Incorrect  
Quelle activité est spécifiquement interdite par la politique d'utilisation acceptable d'AWS ?  
**Utilisation des services AWS pour héberger une application de messagerie de masse pour une petite entreprise.**  
**Bonne réponse**  
**Utilisation des services AWS pour envoyer des courriels non sollicités, notamment des spams ou des courriels d'hameçonnage.**  
**Utiliser les services AWS pour stocker ou traiter des données soumises à des exigences réglementaires spécifiques, telles que les données de santé ou les données financières.**  
**Votre réponse est incorrecte**  
**Partager les informations de compte AWS avec des personnes ou entités non autorisées.**  
Explication générale  
**Utilisation des services AWS pour envoyer des courriels non sollicités, notamment des spams ou des courriels d'hameçonnage.**

La Politique d'utilisation acceptable d'AWS définit les règles d'utilisation des services AWS et interdit les activités illégales ou nuisibles telles que le piratage informatique, le spam et la distribution de logiciels malveillants. Elle insiste sur le respect des lois et réglementations en vigueur ainsi que des droits d'autrui. Les utilisateurs sont responsables de leurs contenus et actions sur AWS, et AWS se réserve le droit de suspendre ou de résilier les comptes qui enfreignent cette politique. Par ailleurs, AWS peut signaler les activités illégales aux autorités compétentes et coopérer aux enquêtes.

AWS applique une politique stricte interdisant l'envoi de spams et autres courriels non sollicités via ses services. Les clients AWS sont tenus de respecter la législation en vigueur relative aux courriels, notamment la loi CAN-SPAM aux États-Unis. De plus, la politique d'AWS interdit la diffusion de courriels d'hameçonnage et autres messages trompeurs visant à collecter des informations sensibles sous de faux prétextes. Cette politique a pour objectif de protéger l'intégrité des services AWS et la sécurité de ses clients.  
Question 45Correct  
Comment AWS Cost Explorer vous aide-t-il à gérer vos dépenses ?  
**Optimisation automatisée des ressources**  
**Analyse de données en temps réel**  
**Conseils prescriptifs en matière de gestion des coûts**  
**Votre réponse est correcte**  
**Prévision budgétaire et visualisation des coûts**  
Explication générale  
**Prévision budgétaire et visualisation des coûts**

AWS Cost Explorer fournit des outils graphiques pour gérer et comprendre les coûts et l'utilisation d'AWS. Grâce à la prévision budgétaire, il aide les utilisateurs à projeter les coûts futurs en fonction de leur historique d'utilisation, facilitant ainsi une meilleure planification financière. Les outils de visualisation des coûts permettent de créer des rapports, des graphiques et des tableaux personnalisés, offrant une vision claire de l'utilisation des ressources. Cette fonctionnalité permet d'identifier les tendances, de repérer les pics d'utilisation ou de coûts inattendus et d'explorer les possibilités d'économies. En utilisant AWS Cost Explorer, les entreprises peuvent prendre des décisions éclairées concernant leurs dépenses cloud, en veillant à respecter leur budget tout en optimisant l'utilisation de leurs ressources.  
Question 46Correct  
Une entreprise souhaite exécuter une application sur le cloud AWS. Elle a besoin d'une estimation de sa facture mensuelle en fonction des services AWS.

Quel service AWS répond aux exigences ?  
**Facturation AWS**  
**Votre réponse est correcte**  
**Calculateur de prix AWS**  
**Budgets AWS**  
**AWS Cost Explorer**  
Explication générale  
**Calculateur de prix AWS**

Le calculateur de prix AWS aide les clients à estimer le coût d'utilisation des services AWS. Son interface conviviale permet de modéliser et de configurer les services AWS en fonction des besoins spécifiques de chacun, notamment en choisissant parmi les régions, les services et les estimations d'utilisation. Ce calculateur prend en charge un large éventail de services AWS, permettant ainsi de projeter les coûts liés au calcul, au stockage, aux bases de données et à de nombreux autres services. Il est particulièrement utile pour comprendre les implications financières du déploiement, de la maintenance et de la mise à l'échelle d'applications sur AWS, et ainsi prendre des décisions plus éclairées.  
Question 47Incorrect  
Pourquoi les services sans serveur sont-ils plus rentables que les services basés sur un serveur ?  
**Bonne réponse**  
**Cette ressource n'est utilisée que lors de l'exécution du code.**  
**La mise en cache a été appliquée automatiquement pour une faible latence.**  
**Votre réponse est incorrecte**  
**Les services sans serveur nécessitent moins de maintenance et d'administration.**  
**Serverless est un service global offrant des performances élevées.**  
Explication générale  
**Cette ressource n'est utilisée que lors de l'exécution du code.**

Un autre aspect clé qui rend les services sans serveur plus rentables est le modèle de tarification à l'usage, où vous n'êtes facturé que pour le temps de calcul consommé. Ce modèle contraste avec les services traditionnels basés sur serveur, où vous payez pour les instances de serveur et les ressources de calcul, qu'elles soient utilisées ou non. Dans un environnement sans serveur, si votre code n'est pas exécuté, vous n'êtes pas facturé. Cette approche est particulièrement rentable pour les applications à trafic variable ou pour les charges de travail qui n'ont pas besoin de fonctionner 24 h/24 et 7 j/7. En ne payant que pour le temps de calcul réellement utilisé, les entreprises peuvent réduire considérablement leurs coûts opérationnels, faisant des services sans serveur une option intéressante pour les organisations soucieuses de leurs dépenses.  
Question 48Correct  
Parmi les éléments suivants, lequel fait partie de la proposition de valeur d'AWS Cloud ?  
**Les utilisateurs doivent assurer la maintenance du matériel et effectuer manuellement les mises à jour logicielles dans le cloud AWS.**  
**AWS Cloud exige que les clients achètent des licences distinctes pour les systèmes d'exploitation et les logiciels.**  
**AWS Cloud propose un modèle de tarification fixe qui réduit la variabilité des coûts pour les entreprises.**  
**Votre réponse est correcte**  
**AWS Cloud réduit le besoin d'investissements initiaux en centres de données et en serveurs physiques.**  
Explication générale  
**AWS Cloud réduit le besoin d'investissements initiaux en centres de données et en serveurs physiques.**

La proposition de valeur d'AWS Cloud réside notamment dans la réduction des investissements initiaux en centres de données et serveurs physiques. Ceci est rendu possible grâce à un modèle de paiement à l'usage, où les utilisateurs ne paient que pour les ressources de calcul qu'ils consomment. Cela élimine l'investissement initial important généralement requis pour le matériel et l'infrastructure, rendant ainsi AWS accessible aux entreprises de toutes tailles. De plus, AWS Cloud offre une grande scalabilité, permettant aux entreprises d'ajuster leurs ressources en fonction de la demande sans surdimensionnement. Cette flexibilité et cette rentabilité sont des atouts majeurs d'AWS Cloud, permettant aux entreprises d'innover et de se développer sans les contraintes des infrastructures informatiques traditionnelles.  
Question 49Correct  
Quel est l'avantage d'automatiser le processus de déploiement en DevOps ?  
**Intervention manuelle accrue et complexité accrue**  
**Votre réponse est correcte**  
**Amélioration de la cohérence et de la reproductibilité des déploiements**  
**Besoin réduit de mise à l'échelle et d'optimisation des infrastructures**  
**Augmentation des échecs de déploiement et des temps d'arrêt**  
Explication générale  
**Amélioration de la cohérence et de la reproductibilité des déploiements**

L'automatisation du processus de déploiement en DevOps peut considérablement améliorer la cohérence et la reproductibilité des déploiements. Elle permet d'exécuter les mêmes étapes dans le même ordre à chaque déploiement, réduisant ainsi les risques d'erreur humaine et garantissant un comportement constant des applications. De plus, elle accélère le processus de déploiement grâce à l'exécution rapide des tâches par les outils d'automatisation et fournit un historique des modifications apportées (quelles étaient les dates et quels étaient les auteurs), renforçant ainsi la traçabilité et la responsabilisation.  
Question 50Incorrect  
Quels facteurs doivent être inclus dans une analyse du coût total de possession (TCO) lors de la planification d'une migration vers le cloud AWS ? (Sélectionnez DEUX réponses.)  
**L'amortissement des dépenses d'investissement au fil du temps**  
**Votre sélection est incorrecte**  
**Investissement initial dans le matériel physique du centre de données**  
**Votre sélection est correcte**  
**Estimation des coûts opérationnels liés à la maintenance des serveurs sur site**  
**Sélection correcte**  
**Le coût de la formation du personnel aux services cloud AWS**  
**Coût de la location d'espaces de bureaux pour le personnel informatique**  
Explication générale  
**Le coût de la formation du personnel aux services cloud AWS**

Lors du calcul du coût total de possession (TCO) d'une migration vers AWS, il est essentiel de prendre en compte le coût de la formation du personnel aux services cloud AWS. Cela garantit que l'équipe puisse gérer et exploiter efficacement l'écosystème AWS, en tirant pleinement parti de son potentiel pour optimiser l'efficacité opérationnelle et réaliser des économies. La formation permet une meilleure gestion des ressources, une sécurité renforcée et des performances applicatives optimales, autant d'éléments qui contribuent à un calcul du TCO plus précis.

**Estimation des coûts opérationnels liés à la maintenance des serveurs sur site**

Les coûts opérationnels liés à la maintenance des serveurs sur site doivent être un élément central de l'analyse du coût total de possession (TCO). Ces coûts comprennent non seulement les dépenses directes telles que l'alimentation électrique, le refroidissement et le personnel de maintenance, mais aussi les coûts indirects comme l'administration système, la gestion du réseau et les licences logicielles. Lors de la prise en compte du cloud AWS, il est essentiel de comparer ces coûts récurrents à la tarification variable, basée sur la consommation, des services AWS afin d'évaluer les économies potentielles.  
Question 51Correct  
Une entreprise a optimisé et réduit ses coûts d'exploitation en choisissant les ressources AWS appropriées.

À quelle stratégie de gestion des coûts cette action correspond-elle ?  
**Alertes budgétaires**  
**Votre réponse est correcte**  
**Optimisation de l'architecture**  
**Suivi de l'utilisation**  
**Facturation consolidée**  
Explication générale  
**Optimisation de l'architecture**

L'optimisation de l'architecture consiste à sélectionner et configurer avec soin les services AWS afin de répondre aux besoins spécifiques de l'entreprise, tout en visant à réduire les coûts et à améliorer l'efficacité. Dans ce cas précis, l'entreprise a optimisé son utilisation des services AWS, notamment en adoptant des architectures sans serveur, en choisissant les services de base de données les plus adaptés et en dimensionnant les ressources en fonction de la demande. Cette approche améliore non seulement les performances, mais minimise également le gaspillage, ce qui permet de réduire les coûts opérationnels. L'optimisation de l'architecture est une démarche stratégique qui garantit une utilisation efficace des ressources, en alignant les dépenses sur les besoins réels et en éliminant les coûts superflus. Il s'agit d'une mesure proactive qui allie les principes d'une conception de qualité à la maîtrise des coûts, témoignant d'une excellente compréhension du fonctionnement de la tarification AWS et de la capacité à tirer pleinement parti des offres AWS pour des résultats optimaux.  
Question 52Correct  
Une entreprise souhaite déployer une application financière sur le cloud AWS. Cette application nécessite une base de données prenant en charge les relations entre les enregistrements et les requêtes complexes. En tant que spécialiste du cloud, quel service de base de données recommanderiez-vous ?  
**Amazon DynamoDB**  
**Amazon Neptune**  
**Votre réponse est correcte**  
**Amazon RDS**  
**Amazon Redshift**  
Explication générale  
**Amazon RDS**

Amazon RDS simplifie la configuration, l'exploitation et la mise à l'échelle d'une base de données relationnelle dans le cloud. Il offre une capacité modulable et économique tout en automatisant les tâches d'administration fastidieuses telles que le provisionnement du matériel, la configuration de la base de données, l'application de correctifs et les sauvegardes. Amazon RDS prend en charge plusieurs bases de données relationnelles populaires comme MySQL, PostgreSQL, Oracle et SQL Server, largement utilisées dans les applications financières pour leur robustesse et leur fiabilité.  
Question 53Correct  
Une entreprise déploie des instances Amazon EC2 sur plusieurs zones de disponibilité (AZ) afin d'améliorer la haute disponibilité. À quel pilier d'AWS Well-Architected se réfère cette opération ?  
**Efficacité de performance**  
**Votre réponse est correcte**  
**Fiabilité**  
**Excellence opérationnelle**  
**Sécurité**  
Explication générale  
**Fiabilité**

Le pilier Fiabilité du cadre AWS Well-Architected fait référence à la capacité d'un système à se remettre de perturbations d'infrastructure ou de service, à acquérir dynamiquement des ressources de calcul pour répondre à la demande et à atténuer les perturbations telles que les erreurs de configuration ou les problèmes réseau temporaires. En déployant des instances Amazon EC2 sur plusieurs zones de disponibilité (AZ), vous créez une architecture résiliente à la défaillance d'un site unique, améliorant ainsi la fiabilité de votre système. Cela garantit la disponibilité de vos applications et un accès constant pour vos utilisateurs, conformément aux objectifs du pilier Fiabilité.  
Question 54Correct  
Une entreprise de commerce électronique souhaite permettre la recherche de produits par commandes vocales. Quel service AWS répondrait à ce besoin ?  
**Amazon SQS**  
**Votre réponse est correcte**  
**Transcription Amazon**  
**Amazon Polly**  
**Amazon Pinpoint**  
Explication générale  
**Transcription Amazon**

Amazon Transcribe est un service de reconnaissance vocale automatique (ASR) qui permet aux développeurs d'intégrer facilement la transcription vocale à leurs applications. Il utilise des technologies d'apprentissage automatique avancées pour transcrire avec précision les fichiers audio et les flux audio en direct. Compatible avec de nombreux formats audio, même de faible qualité, il s'adapte à différents cas d'utilisation. Ce service offre des fonctionnalités telles que l'identification du locuteur, un vocabulaire personnalisé et la transcription en temps réel, améliorant ainsi l'accessibilité et l'analyse des données audio. Amazon Transcribe est utilisé dans de nombreuses applications, notamment le service client, la transcription de réunions et de conférences, et la création d'archives audio consultables. Multilingue, il constitue un outil puissant pour les entreprises internationales et les développeurs souhaitant intégrer la reconnaissance vocale à leurs solutions.  
Question 55Correct  
AWS propose cinq plans de support client. Lesquels des éléments suivants sont accessibles avec le plan de support Développeur ? (Sélectionnez DEUX réponses.)  
**Conseils en matière d'architecture d'application**  
**Votre sélection est correcte**  
**Contrôles de santé des services**  
**Votre sélection est correcte**  
**Outils de diagnostic côté client**  
**gestionnaire de compte technique**  
**revues d'entreprise de gestion**  
Explication générale  
**Contrôles de santé des services**

Les contrôles d'intégrité des services font partie du plan de support aux développeurs. Ces contrôles permettent aux utilisateurs de surveiller l'état des services AWS susceptibles d'affecter leurs ressources AWS. Ils offrent une visibilité sur l'état continu des services AWS et sont essentiels au maintien de la santé et des performances des applications.

**Outils de diagnostic côté client**

Le plan de support aux développeurs donne accès à AWS Trusted Advisor et au tableau de bord de santé personnel AWS. Trusted Advisor fournit des conseils en temps réel pour vous aider à provisionner vos ressources conformément aux bonnes pratiques AWS. Le tableau de bord de santé personnel vous alerte et vous propose des solutions en cas d'événements AWS susceptibles de vous impacter.  
Question 56Correct  
Une organisation souhaite améliorer la scalabilité de son application existante en la décomposant en services distribués plus petits, hébergés sur AWS. Quelle approche de migration doit-elle adopter ?  
**Votre réponse est correcte**  
**Refactor**  
**Replatform**  
**Réhéberger**  
**Rachat**  
Explication générale  
**Refactor**

La refactorisation, également appelée réarchitecture, consiste à réécrire des parties importantes d'une application afin de mieux tirer parti des services et architectures cloud-native. Cette approche est particulièrement adaptée aux applications qui doivent être décomposées en services distribués plus petits, plus faciles à gérer et plus évolutifs. En refactorisant une application existante, l'organisation peut exploiter les services cloud modernes tels que les microservices, le calcul sans serveur, les bases de données managées, etc., ce qui améliore considérablement l'évolutivité et l'agilité de l'application. La refactorisation permet à l'application d'être plus résiliente, plus facile à gérer et capable de supporter des augmentations de charge de manière transparente.  
Question 57Correct  
Quel service AWS envoie une notification à chaque modification de la configuration logicielle d'une instance EC2 ?  
**AWS CloudTrail**  
**AWS CloudFormation**  
**Inspecteur Amazon**  
**Votre réponse est correcte**  
**Configuration AWS**  
Explication générale  
**Configuration AWS**

AWS Config vous permet d'évaluer, d'auditer et d'analyser les configurations de vos ressources AWS. AWS Config surveille et enregistre en continu les configurations de vos ressources AWS et vous permet d'automatiser l'évaluation des configurations enregistrées par rapport aux configurations souhaitées. Il peut envoyer une notification dès qu'une modification est détectée dans la configuration logicielle d'une instance EC2, ce qui en fait un outil puissant pour le suivi des modifications de configuration et le respect des règles et directives de votre organisation.  
Question 58Correct  
Une entreprise internationale possède de nombreuses applications réparties sur plusieurs comptes AWS et régions. Afin de renforcer la sécurité, elle souhaite s'assurer que ces applications utilisent des identifiants temporaires pour accéder aux services AWS.

Quel service ou fonctionnalité AWS répond à ces exigences ?  
**Service de gestion des clés AWS (KMS)**  
**Amazon Cognito**  
**Votre réponse est correcte**  
**Service de jetons de sécurité AWS (AWS STS)**  
**Gestion des identités et des accès AWS (IAM)**  
Explication générale  
**Service de jetons de sécurité AWS (AWS STS)**

AWS Security Token Service (AWS STS) vous permet de demander des informations d'identification temporaires à privilèges limités pour accéder aux services AWS. Cette solution est idéale pour les applications interagissant avec les services AWS et nécessitant des informations d'identification à durée de vie courte et à renouvellement automatique, minimisant ainsi le risque de compromission à long terme. STS est particulièrement utile lorsque les applications doivent endosser différents rôles pour accéder aux ressources de plusieurs services AWS, garantissant ainsi le respect du principe du moindre privilège. Grâce à STS, l'application peut demander des informations d'identification dynamiquement, selon ses besoins, ce qui renforce la sécurité et simplifie la gestion des informations d'identification. Cette approche est conforme aux bonnes pratiques AWS en matière de sécurité et de gestion des identités, faisant d'AWS STS le choix idéal pour les applications nécessitant un accès temporaire et sécurisé aux API AWS, sans intégrer de clés d'accès permanentes.  
Question 59Incorrect  
Quelle option faut-il utiliser pour obtenir un accès programmatique aux services AWS en utilisant l'interface de ligne de commande AWS (CLI) ou le kit de développement logiciel AWS (SDK) ?  
**Clés de chiffrement AWS**  
**Inspecteur Amazon**  
**Votre réponse est incorrecte**  
**Clés publiques Secure Shell (SSH)**  
**Bonne réponse**  
**Clés d'accès**  
Explication générale  
**Clés d'accès**

Les clés d'accès font partie des informations d'identification de sécurité utilisées pour authentifier les requêtes adressées aux services AWS. Elles se composent de deux éléments : un ID de clé d'accès et une clé d'accès secrète, qui servent à signer les requêtes programmatiques envoyées aux services AWS. Elles constituent un moyen d'authentification sécurisé lors de l'accès aux services AWS via l'API, l'interface de ligne de commande (CLI) ou les kits de développement logiciel (SDK) AWS. Ces clés remplacent le nom d'utilisateur et le mot de passe traditionnels et permettent à AWS d'identifier l'utilisateur ou le service à l'origine de la requête et de s'assurer que le demandeur dispose des autorisations nécessaires pour effectuer l'opération.  
Question 60Incorrect  
Quelle est la principale différence entre le calculateur de coût total de possession (TCO) d'AWS et le calculateur de prix d'AWS ?  
**Le calculateur de coût total de possession (TCO) AWS est gratuit, tandis que le calculateur de prix AWS nécessite un compte AWS payant.**  
**Votre réponse est incorrecte**  
**Le calculateur de coût total de possession (TCO) d'AWS fournit une ventilation détaillée des coûts, tandis que le calculateur de prix AWS ne fournit qu'une estimation approximative.**  
**Le calculateur de coût total de possession (TCO) d'AWS permet d'estimer le coût des services AWS individuels, tandis que le calculateur de prix AWS permet d'estimer le coût d'exécution d'une application sur AWS.**  
**Bonne réponse**  
**Le calculateur de coût total de possession (TCO) d'AWS permet d'estimer le coût d'exécution d'une application sur AWS, tandis que le calculateur de prix AWS permet d'estimer le coût des services AWS individuels.**  
Explication générale  
**Le calculateur de coût total de possession (TCO) d'AWS permet d'estimer le coût d'exécution d'une application sur AWS, tandis que le calculateur de prix AWS permet d'estimer le coût des services AWS individuels.**

Le calculateur de coût total de possession (TCO) d'AWS est conçu pour aider les utilisateurs à quantifier les économies réalisées lors de la migration de leur infrastructure informatique vers AWS. Il prend en compte divers facteurs, notamment les coûts des serveurs, du stockage, du matériel réseau et des opérations du centre de données, afin de fournir une estimation du coût d'exécution des applications sur AWS par rapport à une infrastructure sur site ou en colocation.

En revanche, le calculateur de prix AWS est plus précis et se concentre sur chaque service AWS individuellement. Il vous permet d'estimer le coût d'utilisation de services AWS spécifiques en fonction de votre utilisation prévue, vous aidant ainsi à faire des choix rentables lors de la planification de votre architecture AWS.  
Question 61Correct  
Quelle est la meilleure pratique pour accorder à une instance Amazon EC2 les autorisations requises pour accéder à un compartiment Amazon S3 ?  
**Votre réponse est correcte**  
**Attribuez un rôle IAM à l'instance EC2 et accordez les autorisations requises pour les chargements de fichiers dans le compartiment S3.**  
**Stockez les clés d'accès et les clés secrètes IAM sur l'instance EC2 pour l'accès au compartiment S3 et le téléchargement de fichiers.**  
**Intégrez les clés d'accès et les clés secrètes IAM dans le code de l'application pour le téléchargement de fichiers.**  
**Modifiez la politique du compartiment S3 pour autoriser les chargements sans restriction depuis n'importe quel service AWS et à tout moment.**  
Explication générale  
**Attribuez un rôle IAM à l'instance EC2 et accordez les autorisations requises pour les chargements de fichiers dans le compartiment S3.**

Cette approche est fortement recommandée pour plusieurs raisons. Premièrement, l'utilisation de rôles IAM avec les instances EC2 pour accéder aux compartiments S3 constitue une bonne pratique pour la gestion sécurisée des ressources AWS. Les rôles IAM permettent d'octroyer des autorisations aux services AWS sans avoir recours à des clés d'accès statiques. Lorsqu'un rôle IAM est associé à une instance EC2, ses autorisations sont automatiquement appliquées à l'instance, permettant ainsi aux applications qui y sont exécutées d'utiliser les informations d'identification du rôle pour effectuer des appels d'API AWS. Cette méthode est sécurisée, efficace et élimine les risques liés à la gestion et au renouvellement manuels des clés d'accès. De plus, les rôles IAM peuvent être conçus pour offrir des autorisations précises, adaptées aux besoins spécifiques de l'application, renforçant ainsi la sécurité grâce au principe du moindre privilège.  
Question 62Correct  
Une société de développement logiciel a conçu une application nécessitant une solution de stockage partagé accessible simultanément à plusieurs instances Amazon EC2. Elle souhaite également s'assurer que les fichiers rarement utilisés soient déplacés vers une classe de stockage plus économique.

Quels services ou fonctionnalités AWS répondent le mieux à ces exigences ?  
**Amazon Glacier**  
**Amazon S3 avec classe de stockage S3 Standard-IA**  
**Serveur de fichiers Amazon FSx pour Windows**  
**Votre réponse est correcte**  
**Amazon EFS avec gestion du cycle de vie**  
Explication générale  
**Amazon EFS avec gestion du cycle de vie**

Amazon Elastic File System (EFS) est un service de stockage de fichiers évolutif, élastique et natif du cloud pour les charges de travail Linux. Il s'intègre parfaitement aux services cloud AWS et aux ressources sur site, offrant un système de fichiers élastique simple, sans serveur et prêt à l'emploi. Conçu pour une haute disponibilité et une grande robustesse, Amazon EFS propose une interface et une sémantique de système de fichiers. Il permet à plusieurs instances EC2 d'accéder simultanément aux données.

La gestion du cycle de vie EFS est une fonctionnalité d'Amazon EFS qui automatise le déplacement des fichiers non consultés conformément à la politique de cycle de vie, de la classe de stockage standard vers la classe de stockage économique EFS IA (EFS Infrequent Access). Cette fonctionnalité contribue à optimiser les coûts de stockage en transférant automatiquement les fichiers les plus anciens et les moins fréquemment consultés vers un niveau de stockage moins coûteux, tout en garantissant leur accessibilité sans aucune modification des applications. Les politiques de gestion du cycle de vie sont facilement configurables pour s'adapter à différents modèles d'accès et exigences de conservation, ce qui en fait un outil efficace pour réduire les coûts de stockage sans compromettre la disponibilité des données ni les performances.  
Question 63Correct  
Quels sont les facteurs qui influencent le coût d'AWS Shield Advanced pour les organisations AWS possédant plusieurs comptes AWS ?  
**L'utilisation moyenne de chaque compte AWS**  
**Le nombre total de comptes AWS utilisés**  
**Le type de services AWS utilisés dans chaque compte**  
**Votre réponse est correcte**  
**Le nombre de ressources AWS protégées sur l'ensemble des comptes**  
Explication générale  
**Le nombre de ressources AWS protégées sur l'ensemble des comptes**

La tarification d'AWS Shield Advanced est basée sur le nombre de ressources (telles que les distributions Amazon CloudFront, les équilibreurs de charge Elastic Load Balancing, les zones hébergées Amazon Route 53 et les adresses IP Elastic) protégées sur l'ensemble des comptes. Ce service offre une protection DDoS économique pour les applications exécutées sur AWS et est particulièrement avantageux pour les organisations présentant un risque élevé d'attaques DDoS, car il offre une protection financière sous la forme d'une prise en charge des coûts liés à la mise à l'échelle pendant une attaque DDoS.

Le nombre de ressources protégées est un indicateur plus précis du niveau de protection nécessaire que le nombre total de comptes AWS ou l'utilisation moyenne de chaque compte. Par exemple, une organisation peut posséder de nombreux comptes AWS avec une faible utilisation des ressources, mais si elle dispose de ressources critiques nécessitant un niveau de protection élevé, elle devra opter pour AWS Shield Advanced, une solution plus onéreuse.  
Question 64Correct  
Quelle est la différence de tarification entre les transferts de données entrants et sortants sur AWS ?  
**Le transfert de données entrant est facturé au Mbps et le transfert de données sortant est facturé au Go.**  
**Votre réponse est correcte**  
**Le transfert de données entrant est gratuit et le transfert de données sortant est facturé par Go.**  
**Les transferts de données entrants et sortants sont tous deux facturés par Go.**  
**Le transfert de données entrant est facturé au Go et le transfert de données sortant est facturé au Mbps.**  
Explication générale  
**Le transfert de données entrant est gratuit et le transfert de données sortant est facturé par Go.**

AWS facture les transferts de données de différentes manières selon leur sens. Les transferts de données entrants vers AWS sont gratuits : vous pouvez donc transférer des données depuis Internet vers vos ressources AWS sans aucun frais. Cela inclut les transferts vers les instances EC2, les compartiments S3 et les autres services AWS.

En revanche, les transferts de données sortants d'AWS sont facturés au Go. Les tarifs peuvent varier selon la destination (par exemple, Internet, une autre région AWS ou un autre service AWS dans la même région) et le volume de données transférées. Par exemple, les transferts de données vers Internet sont généralement plus coûteux que les transferts entre services AWS au sein d'une même région.  
Question 65Correct  
Quel service AWS peut être utilisé pour gérer de manière centralisée les politiques de sécurité sur plusieurs comptes AWS pour AWS WAF, AWS Shield Advanced et les groupes de sécurité VPC ?  
**Norme AWS Shield**  
**AWS Shield Advanced**  
**Votre réponse est correcte**  
**Gestionnaire de pare-feu AWS**  
**Inspecteur Amazon**  
Explication générale  
**Gestionnaire de pare-feu AWS**

AWS Firewall Manager est un service de gestion de la sécurité qui configure et gère de manière centralisée les règles de pare-feu sur plusieurs comptes et ressources AWS. Il automatise le déploiement et l'application des politiques de sécurité, garantissant ainsi une protection cohérente des applications déployées sur AWS. Firewall Manager prend en charge AWS WAF, AWS Shield Advanced et les groupes de sécurité VPC, permettant aux administrateurs de créer et d'appliquer des règles basées sur les meilleures pratiques de sécurité. Il simplifie la conformité en offrant une vue unifiée des politiques de sécurité et de leur état d'application, renforçant ainsi la sécurité globale des environnements AWS.  
