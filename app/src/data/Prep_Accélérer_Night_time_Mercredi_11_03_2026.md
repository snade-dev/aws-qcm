Question 1Correct  
Une entreprise souhaite offrir une faible latence à ses utilisateurs du monde entier. Quelle fonctionnalité du cloud AWS répond à cette exigence ?  
**Votre réponse est correcte**  
A. Infrastructure mondiale

#### Explications

AWS réduit la latence pour l'utilisateur final en permettant le déploiement de ressources de calcul et de contenu au plus près des utilisateurs grâce à son réseau mondial (plusieurs régions et zones de disponibilité), ses points de présence et des services dédiés tels qu'Amazon CloudFront et AWS Global Accelerator. Ces solutions raccourcissent les trajets réseau et réduisent le temps d'aller-retour, répondant ainsi directement à l'exigence mondiale de faible latence.  
B. Tarification à l'utilisation

#### Explications

Le paiement à l'usage est un modèle de tarification qui influe sur la facturation des clients en fonction de leur consommation. Il ne modifie ni l'hébergement des ressources ni le routage du trafic réseau ; par conséquent, il ne réduit pas la latence pour les utilisateurs géographiquement dispersés.  
C. Services gérés

#### Explications

Les services gérés réduisent les coûts opérationnels en prenant en charge le provisionnement, les correctifs et la maintenance. Bien que nombre d'entre eux soient disponibles à l'échelle mondiale, leur nature « gérée » n'implique pas nécessairement un rapprochement des ressources avec les utilisateurs ni une modification du réseau pour réduire la latence ; ce sont l'emplacement du déploiement et les services en périphérie qui le permettent.  
D. Économies d'échelle

#### Explications

Les économies d'échelle désignent les gains de productivité réalisés grâce à une exploitation à grande échelle (coûts unitaires plus faibles). Il s'agit d'un avantage financier et opérationnel qui n'a pas d'incidence directe sur la topologie du réseau ni sur la proximité physique de l'infrastructure par rapport aux utilisateurs finaux, nécessaire pour réduire la latence.  
Explication générale  
Cette question évalue la compréhension du fait que la latence est principalement gérée en rapprochant l'infrastructure et les points de distribution des utilisateurs finaux. La couverture mondiale d'AWS (régions, zones de disponibilité, points de présence) et ses services réseau/périphériques (CloudFront, Global Accelerator, zones locales, Wavelength) réduisent le temps d'aller-retour et améliorent la réactivité. Les autres options décrivent des modèles de facturation, des approches opérationnelles ou des avantages en termes de coûts qui, en eux-mêmes, ne modifient pas l'emplacement des ressources ni le routage du trafic pour minimiser la latence.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 2Correct  
Une entreprise stocke des données peu fréquemment consultées dans le cloud AWS. Si elle a besoin d'y accéder, les données doivent être disponibles sous 12 heures. L'entreprise recherche une solution économique en termes de coût de stockage par gigaoctet. Quelle classe de stockage Amazon S3 répond à ces exigences ?  
A. Norme S3

#### Explications

Cette classe S3 est optimisée pour les objets fréquemment consultés, avec une faible latence et une résilience multi-AZ. Son coût de stockage par Go est supérieur aux options d'archivage, ce qui la rend peu adaptée aux accès rares où le coût par gigaoctet est le critère principal.  
**Votre réponse est correcte**  
B. S3 Récupération flexible du glacier

#### Explications

Cette classe de stockage offre le coût de stockage continu le plus bas parmi les classes S3 répertoriées et propose trois niveaux de récupération : Express (en minutes), Standard (de 3 à 5 heures) et Masse (de 5 à 12 heures). Le niveau Masse permet de respecter le délai de récupération de 12 heures tout en minimisant les coûts de stockage, ce qui en fait la solution idéale pour les données rarement consultées et pouvant supporter des restaurations de plusieurs heures.  
C. S3 Une zone \- Accès peu fréquent (S3 Une zone \- IA)

#### Explications

Cette option stocke les données dans une seule zone de disponibilité et réduit les coûts de stockage par rapport aux classes peu fréquentes réparties sur plusieurs zones de disponibilité. Cependant, son coût par Go reste supérieur à celui des options d'archivage profond de Glacier et elle ne propose pas de redondance de zone de disponibilité. Elle est conçue pour les données rarement consultées nécessitant un accès rapide, mais n'est pas la plus rentable par gigaoctet pour l'archivage.  
D. Norme S3 \- Accès peu fréquent (Norme S3-IA)

#### Explications

Cette solution offre un accès immédiat et à faible latence aux objets rarement consultés, avec une durabilité multi-AZ, mais son coût de stockage par Go et ses tarifs de récupération sont supérieurs à ceux de Glacier Flexible Retrieval. Pour les données à long terme rarement consultées, pour lesquelles une récupération en quelques heures est acceptable, elle est moins rentable.  
Explication générale  
Choisissez la classe de stockage S3 en tenant compte de la fréquence d'accès, du temps de récupération requis et du coût de stockage par Go. La classe Glacier Flexible Retrieval est optimale car elle offre les coûts de stockage et les options de récupération les plus bas (y compris Bulk).  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 3Correct  
Une entreprise souhaite renforcer sa sécurité en analysant l'activité des utilisateurs via les appels d'API. Quel service AWS répond à ce besoin ?  
A. AWS WAF

#### Explications

Ce service est un pare-feu d'applications web qui inspecte et bloque les requêtes HTTP/S malveillantes adressées aux ressources protégées. Bien qu'il puisse générer des journaux au niveau des requêtes pour le trafic web, il ne propose pas d'audit des appels d'API AWS à l'échelle du compte ni d'enregistrement des événements de gestion/données sur l'ensemble des services AWS.  
B. Détective Amazonien

#### Explications

Ce service effectue des analyses et des visualisations automatisées pour faciliter l'investigation des failles de sécurité en exploitant diverses sources de données (dont CloudTrail). Il s'agit d'un outil d'investigation qui s'appuie sur les journaux d'audit plutôt que de constituer l'enregistreur principal des appels d'API ; il ne répond donc pas à lui seul à cette exigence.  
C. Amazon CloudWatch

#### Explications

Ce service collecte les métriques et les journaux d'application, et peut stocker et analyser les données de journalisation. Toutefois, il ne constitue pas la source native des enregistrements d'audit des appels d'API de gestion et de données AWS. CloudWatch peut ingérer les journaux CloudTrail à des fins de surveillance et d'alertes, mais CloudTrail est le service qui enregistre nativement l'activité des API.  
**Votre réponse est correcte**  
D. AWS CloudTrail

#### Explications

Ce service est le service d'audit natif d'AWS qui enregistre les événements de gestion (appels d'API qui gèrent les ressources AWS) et les événements de données optionnels (par exemple, au niveau des objets S3, invocations Lambda), envoie les fichiers journaux à S3, s'intègre à CloudWatch Logs et CloudTrail Lake pour les requêtes et prend en charge les journaux à l'échelle de l'organisation, ce qui en fait le choix idéal pour examiner l'activité API des utilisateurs à des fins de sécurité et de conformité.  
Explication générale  
Cette question évalue les connaissances relatives aux services AWS utilisés pour l'audit de l'activité des utilisateurs et des API. Le service d'audit natif d'AWS capture les appels d'API à l'échelle du compte (événements de gestion et, optionnellement, événements de données), génère des journaux pour la conservation et l'analyse, et s'intègre à d'autres services à des fins d'investigation. Les autres options portent sur la protection des requêtes web, la surveillance/les indicateurs ou l'analyse d'investigation s'appuyant sur les journaux d'audit ; elles ne constituent donc pas le service principal pour l'enregistrement des appels d'API.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 4Correct  
Une entreprise souhaite se connecter de manière sécurisée à des instances Amazon EC2 sous Linux. Comment peut-elle atteindre cet objectif ?  
**Votre réponse est correcte**  
A. Utilisez des clés SSH.

#### Explications

Les instances EC2 Linux utilisent l'authentification par clé publique SSH : une paire de clés est créée et l'instance stocke la clé publique dans son répertoire \`authorized\_keys\`, tandis que l'utilisateur conserve la clé privée (par exemple, un fichier .pem). L'authentification par clé publique SSH authentifie les utilisateurs sans transmettre de mot de passe sur le réseau, ce qui en fait la méthode standard et sécurisée pour accéder aux instances EC2 Linux par le biais d'un shell interactif. (En alternative à l'accès sans bastion, AWS Systems Manager Session Manager peut fournir un accès shell sécurisé et audité sans ouvrir de ports SSH.)  
B. Utilisez un VPN.

#### Explications

Un VPN (tel qu'AWS Client VPN ou un VPN de site à site) assure une connectivité réseau sécurisée à un VPC et peut réduire l'exposition des ports de gestion, mais il n'effectue pas d'authentification au niveau de l'hôte. Même connecté via un VPN, vous devez toujours vous authentifier auprès de l'instance à l'aide de clés SSH ou d'autres identifiants ; un VPN ne remplace pas l'authentification SSH.  
C. Utilisez le chiffrement de bout en bout.

#### Explications

Le chiffrement de bout en bout protège les données en transit (par exemple avec TLS) et garantit leur confidentialité, mais ne permet pas de vérifier l'identité de l'utilisateur ni de contrôler l'accès à une instance EC2. Le chiffrement sécurise le canal de communication, mais ne remplace pas les mécanismes d'authentification tels que les paires de clés SSH ou l'accès basé sur IAM/SSM.  
D. Utilisez Amazon Route 53\.

#### Explications

Amazon Route 53 est un service DNS et de routage du trafic utilisé pour résoudre les noms de domaine et acheminer les requêtes ; il ne gère pas l’authentification des utilisateurs ni ne fournit de mécanismes de connexion aux instances EC2.  
Explication générale  
Cette question porte sur l'authentification sécurisée auprès des instances EC2 Linux. La méthode appropriée consiste à utiliser l'authentification par paire de clés SSH asymétriques (paires de clés EC2). Cette approche place une clé publique sur l'instance et exige la clé privée de l'utilisateur pour établir une session SSH sécurisée et sans mot de passe. Les technologies réseau (VPN), le chiffrement de bout en bout et le DNS (Route 53\) permettent de résoudre les problèmes de connectivité, de chiffrement et de résolution de noms, mais ne fournissent pas d'authentification directe auprès de l'hôte. AWS Systems Manager Session Manager est une alternative reconnue pour un accès sécurisé via un agent, sans utiliser SSH.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 5Correct  
Une entreprise souhaite exécuter une simulation pendant 3 ans sans interruption. Quelle option d'achat d'instance Amazon EC2 répondra le mieux à ces exigences en termes de coût ?  
A. Exemples ponctuels

#### Explications

Les instances Spot offrent le prix horaire le plus bas, mais elles sont interruptibles : AWS peut récupérer de la capacité avec un court préavis, ce qui les rend inadaptées à une tâche continue unique de 3 ans, sauf si la charge de travail est explicitement tolérante aux pannes et conçue pour gérer des interruptions fréquentes et la création de points de contrôle.  
**Votre réponse est correcte**  
B. Cas réservés

#### Explications

Les instances réservées nécessitent un engagement de 1 ou 3 ans en échange d'une réduction significative du coût horaire par rapport à la facturation à la demande. Pour une simulation stable et ininterrompue fonctionnant en continu pendant trois ans, une instance réservée de 3 ans (en particulier les instances réservées standard avec l'option de paiement appropriée) offre les économies les plus prévisibles et la meilleure stabilité de facturation.  
C. Hôtes dévoués

#### Explications

Les serveurs dédiés allouent un serveur physique entier à un client afin de répondre aux exigences de licence ou de conformité et offrent une visibilité sur les sockets et les cœurs. Cette isolation physique engendre des coûts supplémentaires et est destinée à des scénarios de conformité ou de licence spécifiques, et non à l'optimisation générale des coûts des calculs de longue durée.  
D. Instances à la demande

#### Explications

Les instances à la demande facturent le tarif horaire le plus élevé sans engagement initial ; elles offrent une flexibilité maximale mais, sur une période pluriannuelle continue, elles entraînent le coût total le plus élevé par rapport aux options avec engagement.  
Explication générale  
Cette question évalue vos connaissances des modèles d'achat d'instances EC2 pour les charges de travail continues et ininterrompues. Une instance réservée sur 3 ans offre les économies les plus importantes et prévisibles pour un calcul continu et stable, comparée aux instances Spot interruptibles, aux instances à la demande flexibles mais plus coûteuses, ou à l'option hôte dédié plus onéreuse destinée à la conformité. Les instances réservées constituent le choix le plus rentable pour une simulation continue sur 3 ans.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 6Correct  
Une entreprise a besoin d'un filtrage réseau sans état pour son VPC. Quel service, outil ou fonctionnalité AWS répond à ce besoin ?  
A. Lien privé AWS

#### Explications

Fournit une connectivité de service privée à l'aide de points de terminaison d'interface (ENI) afin que le trafic reste sur le réseau AWS ; il s'agit d'un mécanisme de connectivité, et non d'une fonctionnalité de filtrage de paquets au niveau du sous-réseau, et il n'implémente pas de règles d'autorisation/de refus sans état.  
B. Groupe de sécurité

#### Explications

Les groupes de sécurité sont des pare-feu d'instance avec état : le trafic de retour d'une connexion entrante autorisée est automatiquement autorisé. Du fait de leur suivi de l'état des connexions, ils ne répondent pas aux exigences d'un filtrage sans état.  
**Votre réponse est correcte**  
C. Liste de contrôle d'accès au réseau (ACL)

#### Explications

Les ACL réseau sont sans état, fonctionnent à la limite du sous-réseau, évaluent chaque paquet indépendamment (pas de suivi de connexion), nécessitent des règles entrantes et sortantes explicites et prennent en charge les entrées d'autorisation/de refus traitées par numéro de règle, ce qui en fait le choix approprié pour le filtrage VPC sans état.  
D. AWS WAF

#### Explications

Un pare-feu d'application Web qui inspecte les requêtes HTTP/HTTPS (couche 7\) et est intégré à des services tels que CloudFront, ALB et API Gateway ; il protège les applications Web contre les menaces de la couche application, mais n'effectue pas de filtrage de paquets sans état au niveau du VPC.  
Explication générale  
Cette question évalue la compréhension des contrôles réseau avec et sans état dans un VPC. Les listes de contrôle d'accès réseau (ACL) sont sans état et appliquées au niveau du sous-réseau, nécessitant des règles explicites dans les deux sens ; elles répondent donc aux exigences de filtrage sans état. Les groupes de sécurité, quant à eux, sont avec état et ne répondent donc pas à ces exigences. PrivateLink et le pare-feu applicatif web (WAF) ont des finalités différentes (connectivité des services privés et protection de la couche application) et ne sont pas adaptés au filtrage sans état au niveau du sous-réseau.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 7Correct  
Une entreprise prévoit d'exécuter une charge de travail gourmande en calcul utilisant des unités de traitement graphique (GPU). Quel type d'instance Amazon EC2 devrait-elle utiliser ?  
**Votre réponse est correcte**  
A. Calcul accéléré

#### Explications

Utilisez des instances EC2 dotées d'accélérateurs matériels (GPU, FPGA ou puces Inferentia) pour le rendu graphique, l'entraînement et l'inférence du machine learning, ainsi que pour d'autres charges de travail parallèles nécessitant des calculs en virgule flottante. Les familles d'instances AWS compatibles GPU (par exemple, P3/P4 pour l'entraînement du ML et G4/G5 pour le rendu graphique et l'inférence) déchargent les CPU des calculs massivement parallèles et offrent un débit bien supérieur pour les tâches gourmandes en ressources GPU par rapport aux instances utilisant uniquement des CPU.  
B. Calculer l'optimisation

#### Explications

Ces instances sont optimisées pour des performances CPU élevées et un rapport vCPU/mémoire élevé (par exemple, les familles C5/C6). Elles ne disposent pas de GPU ni d'autres accélérateurs et ne conviennent donc pas aux charges de travail nécessitant un parallélisme GPU pour le rendu graphique ou l'entraînement de modèles d'apprentissage automatique basés sur GPU.  
C. Optimisation du stockage

#### Explications

Ces types d'instances sont conçus pour un débit disque et des IOPS très élevés, ainsi qu'une faible latence de stockage local (exemples : familles I3/I4, D3). Ils privilégient les performances de stockage plutôt que les accélérateurs GPU nécessaires aux graphismes ou au calcul accéléré par GPU.  
D. Usage général

#### Explications

Ces modèles offrent un mélange équilibré de processeur, de mémoire et de réseau (exemples de familles : M5/M6, T3/T4) et conviennent aux charges de travail générales, mais ils manquent de matériel GPU spécialisé et sont donc moins performants pour les tâches graphiques ou d’apprentissage automatique accélérées par GPU et nécessitant une puissance de calcul importante.  
Explication générale  
Les instances EC2 équipées de GPU sont le choix idéal car elles offrent des accélérateurs matériels qui améliorent considérablement les performances pour les graphismes, l'entraînement et l'inférence en apprentissage automatique, ainsi que les charges de travail HPC parallèles. Les instances optimisées pour le CPU, le stockage ou à usage général équilibrées ne disposent pas de GPU et ne peuvent donc pas atteindre le débit requis pour les tâches gourmandes en ressources GPU.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 8Correct  
Quel service ou fonctionnalité AWS permet à une entreprise de disposer de sa propre section logiquement isolée du cloud AWS ?  
A. VPN AWS

#### Explications

Le VPN AWS ​​(VPN de site à site ou VPN client) assure une connectivité chiffrée entre les réseaux ou clients sur site et AWS. Il ne crée pas de frontière de réseau virtuel distincte au sein d'AWS ; vous utilisez toujours un réseau virtuel (VPC) pour héberger et isoler les ressources.  
B. Zones de disponibilité

#### Explications

Les zones de disponibilité sont des emplacements de centres de données physiquement distincts au sein d'une région AWS, conçus pour l'isolation des pannes et la haute disponibilité. Elles ne constituent pas un mécanisme permettant de créer une limite de réseau logique spécifique à un client au sein du cloud AWS.  
**Votre réponse est correcte**  
C. Amazon Virtual Private Cloud (Amazon VPC)

#### Explications

Un VPC est un concept AWS qui implémente un réseau virtuel privé où vous contrôlez les plages d'adresses IP, les sous-réseaux, les tables de routage, les listes de contrôle d'accès réseau (ACL) et les groupes de sécurité. Ces contrôles réseau, associés à la gestion de comptes AWS et à la virtualisation, garantissent une isolation logique par rapport aux autres clients, sauf si une connectivité explicite (peering, Transit Gateway ou services partagés) est configurée.  
D. Régions AWS

#### Explications

Les régions AWS sont des regroupements géographiques de zones de disponibilité utilisés pour la localisation des données et l'isolation en cas de sinistre. Elles assurent la séparation géographique, mais ne constituent pas un mécanisme d'isolation logique du réseau par client ; cette fonction est assurée par les VPC.  
Explication générale  
L'isolation logique des ressources d'un client au sein d'AWS est obtenue par la création d'un réseau virtuel à l'aide d'Amazon VPC, qui permet de contrôler les plages d'adresses IP, les sous-réseaux et les paramètres réseau et de sécurité. D'autres options décrivent la connectivité (AWS VPN) ou la séparation physique/géographique (zones de disponibilité, régions), mais elles ne permettent pas, à elles seules, de définir la limite logique du réseau par client évoquée dans la question.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 9Correct  
Selon le modèle de responsabilité partagée d'AWS, quelle tâche relève de sa responsabilité ?  
A. Chiffrement des données de l'application

#### Explications

Incorrect — Dans le cadre du modèle de responsabilité partagée d'AWS, il incombe aux clients de protéger leurs données applicatives, notamment de choisir et de mettre en œuvre des contrôles de chiffrement et de gérer les clés de chiffrement ou les politiques de clés. AWS fournit des fonctionnalités et des services de chiffrement (par exemple, des options de chiffrement côté serveur et AWS Key Management Service) pour faciliter cela, mais le déploiement et les choix de gestion des clés restent à la charge du client.  
B. Authentification des utilisateurs de l'application

#### Explications

Incorrect — Il incombe aux clients d'authentifier et de gérer les utilisateurs de leurs applications. AWS fournit des services d'identité (AWS Identity and Access Management pour les ressources AWS et Amazon Cognito pour les identités applicatives) afin de faciliter la mise en œuvre de l'authentification, mais la configuration des flux d'authentification des utilisateurs, des informations d'identification et des accès au niveau de l'application est à la charge du client.  
**Votre réponse est correcte**  
C. Protection de l'infrastructure physique du réseau

#### Explications

Exact — AWS est responsable de la sécurité de l'infrastructure cloud elle-même : centres de données physiques, matériel réseau et installations et contrôles physiques associés. Cette responsabilité (dite « sécurité du cloud ») comprend la protection de l'infrastructure réseau physique sous-jacente, des hôtes et des contrôles d'accès physiques, comme indiqué dans le modèle de responsabilité partagée.  
D. Configuration des pare-feu

#### Explications

Incorrect — Il incombe aux clients de configurer les contrôles de sécurité réseau qui protègent leurs charges de travail (par exemple, les groupes de sécurité, les listes de contrôle d'accès réseau, les règles AWS WAF et les politiques de pare-feu). AWS fournit et exploite les services sous-jacents, mais la création et la maintenance des règles et configurations de pare-feu pour les applications et les ressources d'un client sont de sa responsabilité, sauf s'il utilise un service tiers géré séparément.  
Explication générale  
Ce test évalue le modèle de responsabilité partagée d'AWS : AWS gère la « sécurité du cloud » (infrastructure physique, centres de données et réseau), tandis que les clients gèrent la « sécurité dans le cloud » (sécurité des applications, protection des données, identité/authentification et configuration des contrôles de réseau virtuel). Par conséquent, la responsabilité de la protection de l'infrastructure réseau physique incombe à AWS, tandis que le chiffrement, l'authentification des utilisateurs et la configuration du pare-feu relèvent de la responsabilité du client, même si AWS propose des services pour les prendre en charge.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 10Correct  
Une entreprise souhaite générer une liste d'utilisateurs IAM. Elle souhaite également consulter l'état des différentes informations d'identification associées à ces utilisateurs, telles que les mots de passe, les clés d'accès et les dispositifs d'authentification multifacteur (MFA). Quel service ou fonctionnalité AWS répond à ces besoins ?  
**Votre réponse est correcte**  
A. Rapport d'identification IAM

#### Explications

Les rapports d'informations d'identification IAM génèrent un fichier CSV lisible par machine qui répertorie chaque utilisateur IAM et inclut des champs spécifiques à chaque information d'identification (par exemple : password\_enabled, password\_last\_used, access\_key\_1\_active, access\_key\_1\_last\_rotated, mfa\_active). Ce rapport peut être généré depuis la console de gestion AWS ou via l'interface de ligne de commande AWS (commande : generate-credential-report) et est destiné à l'audit et à la conformité en affichant l'état actuel des informations d'identification ainsi que les détails de leur dernière utilisation et rotation.  
B. AWS IAM Identity Center (AWS Single Sign-On)

#### Explications

AWS IAM Identity Center (anciennement AWS Single Sign-On) centralise l'authentification unique et la gestion des autorisations pour les comptes AWS et les applications cloud, et peut s'intégrer à des fournisseurs d'identité externes. Il ne fournit pas de rapport d'état des informations d'identification par utilisateur IAM pour les mots de passe IAM, les clés d'accès ou les dispositifs d'authentification multifacteur (MFA).  
C. Analyseur d'accès AWS Identity and Access Management

#### Explications

AWS Identity and Access Management Access Analyzer analyse les politiques de ressources afin d'identifier les ressources partagées avec des entités externes et de détecter les accès étendus ou non intentionnels. Il ne génère pas de liste des informations d'identification au niveau utilisateur (mots de passe, clés d'accès, authentification multifacteur) pour les utilisateurs IAM.  
D. Rapport sur les coûts et l'utilisation d'AWS

#### Explications

Le rapport AWS sur les coûts et l'utilisation fournit des informations détaillées sur la facturation et l'utilisation pour l'analyse et la prévision des coûts. Il est indépendant des informations d'identification des utilisateurs IAM et ne contient aucune information sur les mots de passe, les clés d'accès ou l'état des dispositifs d'authentification multifacteur (MFA).  
Explication générale  
Il est nécessaire de lister les utilisateurs IAM et d'examiner l'état de leurs identifiants (mots de passe, clés d'accès, authentification multifacteur). Le rapport d'identifiants IAM est conçu spécifiquement à cet effet : il génère un fichier CSV contenant les champs d'identifiants par utilisateur ainsi que les dates de dernière utilisation et de renouvellement. Les autres options répondent à des besoins différents : IAM Identity Center gère l'authentification unique et l'accès fédéré, Access Analyzer examine le partage des ressources et les politiques, et le rapport de coûts et d'utilisation fournit les données de facturation. Aucune de ces options ne fournit donc les données d'audit d'état des identifiants demandées.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 11Correct  
Une entreprise prévoit de migrer vers le cloud AWS. Elle souhaite recueillir des informations sur son centre de données sur site. Quel service AWS doit-elle utiliser pour répondre à ces besoins ?  
**Votre réponse est correcte**  
A. Service de découverte d'applications AWS

#### Explications

Collecte des données détaillées sur l'inventaire et les dépendances des environnements sur site via des collecteurs basés sur des agents ou un connecteur sans agent. Capture la configuration des serveurs, l'utilisation des ressources, les processus en cours d'exécution et les dépendances réseau/applicatives, et s'intègre à AWS Migration Hub pour générer des artefacts de planification de migration. Il s'agit du service AWS idéal pour la découverte de l'environnement avant la migration.  
B. AWS DataSync

#### Explications

Un service géré pour le transfert haute performance de fichiers entre le stockage sur site et le stockage AWS (S3, EFS, FSx). Il optimise le débit, le chiffrement et la validation des données transférées, mais ne réalise pas l'inventaire, l'analyse de la topologie ni l'identification des dépendances nécessaires à la planification de la migration.  
C. Passerelle de stockage AWS

#### Explications

Fournit des interfaces de stockage hybrides (fichiers, volumes, bandes) pour exposer le stockage AWS sur site à des fins de mise en cache, de sauvegarde et de hiérarchisation. Utile pour l'intégration du stockage, mais n'inventore pas les serveurs, les processus ni les dépendances réseau nécessaires à l'évaluation de la migration.  
D. Service de migration de bases de données AWS (AWS DMS)

#### Explications

Conçu pour migrer et répliquer des bases de données (y compris la réplication continue et les migrations hétérogènes avec l'outil de conversion de schéma). Se concentre sur la réplication des données et la migration des schémas plutôt que sur la collecte d'informations exhaustives sur la configuration du centre de données ou les dépendances des applications.  
Explication générale  
Cette question évalue vos connaissances des outils de migration AWS. Le service Application Discovery Service (ADS) est spécifiquement conçu pour inventorier les serveurs sur site et cartographier les dépendances des applications afin d'éclairer les décisions de migration. Les autres services (DataSync, Storage Gateway et DMS) répondent aux besoins de transfert de données, de stockage hybride ou de migration de bases de données et ne fournissent pas l'inventaire complet et la cartographie des dépendances nécessaires à l'évaluation initiale de la migration.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 12Correct  
Quel type de stockage AWS est éphémère et est supprimé lorsqu'une instance Amazon EC2 est arrêtée ou supprimée ?  
A. Amazon Elastic Block Store (Amazon EBS)

#### Explications

Incorrect. Amazon EBS fournit un stockage persistant au niveau bloc, indépendant du cycle de vie d'une instance. Les volumes restent disponibles même lorsqu'une instance est arrêtée et peuvent être détachés et rattachés ; ils prennent également en charge les snapshots pour garantir la durabilité et la sauvegarde.  
**Votre réponse est correcte**  
B. Stockage d'instances Amazon EC2

#### Explications

Exact. Le stockage d'instance offre un espace de stockage bloc temporaire, physiquement lié, qui n'existe que pendant la durée de vie de l'instance hôte sous-jacente. Les données stockées sur le stockage d'instance sont perdues lorsque l'instance est arrêtée, supprimée ou en cas de défaillance de l'hôte. Il est donc destiné aux données temporaires éphémères, aux caches ou à d'autres cas d'utilisation non persistants.  
C. Système de fichiers élastique Amazon (Amazon EFS)

#### Explications

Incorrect. Amazon EFS est un système de fichiers réseau (NFS) géré et évolutif qui fournit un stockage de fichiers partagé et persistant entre les instances et qui persiste indépendamment du cycle de vie de toute instance EC2 individuelle.  
D. Amazon S3

#### Explications

Incorrect. Amazon S3 est un stockage d'objets durable et hautement disponible, accessible via des API ; les objets persistent indépendamment des instances EC2 et ne sont pas supprimés lorsque les instances s'arrêtent ou sont résiliées.  
Explication générale  
Ce test évalue votre compréhension de la persistance du stockage AWS. L'option éphémère (stockage d'instance) correspond à un stockage local, lié à l'hôte, qui est perdu lorsque l'instance est arrêtée ou supprimée. Les autres services — EBS (stockage de blocs persistant), EFS (stockage de fichiers partagé persistant) et S3 (stockage d'objets durable) — sont conçus pour persister indépendamment du cycle de vie d'une instance EC2.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 13Correct  
De quelle option AWS est-il responsable dans le cadre du modèle de responsabilité partagée d'AWS ?  
A. Configuration du réseau et du pare-feu

#### Explications

La configuration des composants VPC, des groupes de sécurité, des listes de contrôle d'accès réseau (ACL) et des règles de pare-feu est effectuée et gérée par le client. AWS fournit les éléments de base du réseau et l'infrastructure réseau sous-jacente, mais les clients sont responsables de la configuration et du contrôle du trafic et des règles de pare-feu de leurs ressources (cela relève de la « sécurité dans le cloud »).  
B. Chiffrement des données côté client

#### Explications

Le chiffrement des données côté client (avant leur envoi à AWS) est mis en œuvre et géré par le client, y compris la génération et la protection des clés. AWS propose des options de chiffrement côté serveur et des services de gestion des clés (SSE-S3, SSE-KMS, AWS KMS), mais le chiffrement côté client reste à la charge du client.  
C. Gestion des permissions des utilisateurs

#### Explications

Il incombe au client de définir les comptes utilisateurs, les rôles et les politiques IAM. AWS fournit le service de gestion des identités et des accès ainsi que le plan de contrôle, mais les clients doivent créer et gérer les identités, les autorisations et les accès au moindre privilège pour leurs utilisateurs et leurs applications.  
**Votre réponse est correcte**  
D. Matériel et infrastructure

#### Explications

AWS est responsable de l'infrastructure physique sous-jacente et des installations, c'est-à-dire de la sécurité du cloud. Cela inclut la sécurité physique des centres de données, le matériel hôte, l'infrastructure réseau, ainsi que les couches fondamentales de virtualisation et de stockage. AWS conçoit, exploite et maintient cette infrastructure afin que ses clients n'aient pas à se soucier de la sécurité des composants physiques.  
Explication générale  
Cette question teste le modèle de responsabilité partagée d'AWS : AWS est responsable de la sécurité du cloud (infrastructures physiques, matériel, réseau et sous-jacent), tandis que les clients sont responsables de la sécurité dans le cloud (configuration des ressources, accès des utilisateurs et protection des données côté client). La bonne réponse identifie l'obligation d'AWS concernant le matériel et l'infrastructure sous-jacents ; les autres choix décrivent les responsabilités des clients qu'AWS met en œuvre mais qu'elle ne gère pas pour chaque client.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 14Correct  
Le site web d'une entreprise subit des attaques DDoS. Quel service AWS peut contribuer à protéger ce site contre ces attaques ?  
A. Gestionnaire d'accès aux ressources AWS

#### Explications

Incorrect — ce service (AWS RAM) permet de partager en toute sécurité les ressources AWS prises en charge entre comptes et unités organisationnelles. Il n’offre aucune protection réseau ni aucune capacité d’atténuation des attaques DDoS.  
B. AWS Amplify

#### Explications

Incorrect — il s'agit d'une chaîne d'outils de développement et d'hébergement pour la création et le déploiement d'applications web et mobiles (y compris l'hébergement frontal). Elle n'inclut pas de services spécialisés de protection contre les attaques DDoS ni de défense de la couche réseau.  
**Votre réponse est correcte**  
C. Bouclier AWS

#### Explications

Exact — Shield est le service de protection DDoS dédié d'AWS. Il comprend Shield Standard (protection automatique et gratuite contre les attaques courantes de la couche réseau/transport) et Shield Advanced (niveau payant avec détection et atténuation améliorées, accès DRT 24h/24 et 7j/7, protection contre les coûts DDoS et intégration avec CloudFront, ELB, Route 53 et WAF pour la protection de la couche application).  
D. Amazon GuardDuty

#### Explications

Incorrect — GuardDuty est un service de détection des menaces qui analyse les journaux (journaux de flux VPC, CloudTrail, DNS) pour identifier les activités suspectes. Il détecte les menaces, mais n'effectue pas de protection active contre les attaques DDoS et ne propose pas les fonctionnalités de nettoyage et de protection du trafic offertes par Shield.  
Explication générale  
Cette question évalue vos connaissances des services AWS utilisés pour se protéger contre les attaques DDoS. AWS Shield est le choix approprié car il est spécialement conçu pour la protection contre les attaques DDoS (avec ses niveaux Standard et Avancé et ses intégrations avec CloudFront, ELB, Route 53 et WAF). Les autres options sont axées sur le partage de ressources (RAM), le développement et l'hébergement d'applications (Amplify) ou la détection des menaces (GuardDuty) et ne fournissent donc pas les capacités d'atténuation active des attaques DDoS requises.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 15Correct  
Une entreprise de commerce électronique souhaite utiliser Amazon EC2 Auto Scaling pour ajouter et supprimer des instances EC2 en fonction de l'utilisation du processeur. Quel service ou fonctionnalité AWS permet de déclencher une action Amazon EC2 Auto Scaling pour atteindre cet objectif ?  
A. Amazon Simple Queue Service (Amazon SQS)

#### Explications

Incorrect. SQS est un service de mise en file d'attente de messages utilisé pour découpler et mettre en mémoire tampon les requêtes entre les composants ; il n'évalue pas les métriques EC2 telles que l'utilisation du processeur et ne déclenche pas directement les actions de mise à l'échelle automatique. (Vous pouvez effectuer une mise à l'échelle en fonction des métriques de la file d'attente en les transmettant à CloudWatch, mais SQS n'est pas le mécanisme de déclenchement des métriques pour la mise à l'échelle basée sur le processeur.)  
B. Service de notification simple d'Amazon (Amazon SNS)

#### Explications

Incorrect. SNS est un service de notification et de distribution de messages de type publication/abonnement qui peut recevoir des notifications d'autres services, mais il n'effectue pas d'évaluation des métriques. Bien que les alarmes CloudWatch puissent être publiées sur SNS, ce dernier ne surveille pas les métriques du processeur et ne constitue pas le déclencheur principal des politiques de mise à l'échelle automatique.  
C. Gestionnaire de systèmes AWS

#### Explications

Incorrect. Systems Manager fournit des outils opérationnels (automatisation, exécution de commandes, inventaire, correctifs) et une visibilité sur les ressources, mais ce n'est pas le service qui surveille les indicateurs de performance EC2 ou qui déclenche directement des actions de mise à l'échelle automatique basées sur des indicateurs.  
**Votre réponse est correcte**  
D. Alarme Amazon CloudWatch

#### Explications

Exactement. Les alarmes CloudWatch surveillent les métriques (par exemple, l'utilisation du processeur EC2) et les comparent à des seuils. Elles peuvent être configurées pour déclencher des stratégies de groupe Auto Scaling (suivi de cible, par étapes ou mise à l'échelle simple) ou pour invoquer des actions qui entraînent l'ajout ou la suppression d'instances par Auto Scaling lorsque le seuil d'alarme est atteint.  
Explication générale  
Le concept testé est le dimensionnement piloté par les métriques : CloudWatch est le service AWS qui collecte et évalue les métriques EC2 (telles que l’utilisation du processeur) et peut déclencher des stratégies de groupe Auto Scaling pour ajouter ou supprimer des instances lorsque des seuils sont franchis. Les autres options — SQS (messagerie), SNS (notifications) et Systems Manager (opérations) — remplissent des rôles différents et n’effectuent pas elles-mêmes l’évaluation des métriques ni ne déclenchent directement d’actions Auto Scaling basées sur l’utilisation du processeur.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 16Correct  
Quels sont les avantages de la facturation consolidée pour les services AWS Cloud ? (Choisissez deux réponses.)  
**Votre sélection est correcte**  
A. Remises sur volume

#### Explications

Exact — Lorsque des comptes sont liés à AWS Organizations, leur utilisation est agrégée afin que la consommation soit prise en compte pour le calcul des seuils de niveau de service et la tarification au volume au sein de l'organisation. Cette agrégation peut réduire le coût unitaire effectif des services utilisant une tarification par paliers ou au volume.  
B. Des frais supplémentaires minimes pour l'utilisation

#### Explications

Incorrect — La facturation consolidée d'AWS Organizations ne facture pas de frais supplémentaires par utilisation ; la fonctionnalité Organizations est fournie sans frais supplémentaires et vous ne payez que pour l'utilisation du service AWS sous-jacent.  
**Votre sélection est correcte**  
C. Une seule facture pour plusieurs comptes

#### Explications

Correct — Le compte de gestion reçoit une seule facture consolidée qui regroupe les frais de tous les comptes liés, simplifiant ainsi le traitement des paiements, la vérification des factures et la répartition centralisée des coûts.  
D. Options de paiement échelonné

#### Explications

Incorrect — Proposer des plans de paiement échelonnés ou différés ne fait pas partie des fonctionnalités de la facturation consolidée. AWS propose des méthodes de facturation et de paiement standard, mais les options de paiement échelonné ne sont pas incluses dans la facturation consolidée.  
E. Création d'un budget personnalisé des coûts et de l'utilisation

#### Explications

Incorrect — La création et la gestion des budgets sont assurées par AWS Budgets et Cost Explorer. La facturation consolidée fournit des données agrégées sur les coûts et l’utilisation, mais ne propose pas de fonctionnalités de création ou d’application des budgets.  
Explication générale  
La facturation consolidée (via AWS Organizations) centralise la facturation et agrège l'utilisation des comptes liés afin que la consommation combinée puisse bénéficier d'une tarification dégressive ou au volume, réduisant ainsi les coûts, tout en générant une facture unique pour simplifier le paiement et l'imputation des frais. Elle n'impose pas de frais supplémentaires par utilisation, ne propose pas de plans de paiement échelonné et ne crée pas directement de budgets ; ces fonctionnalités sont assurées par des services de facturation ou de gestion des coûts distincts.  
Domaine  
Domaine 4 : Facturation, tarification et assistance  
Question 17Correct  
Une entreprise souhaite accéder en toute sécurité à un compartiment Amazon S3 depuis une instance Amazon EC2 sans passer par Internet. Quel outil doit-elle utiliser pour y parvenir ?  
A. Connexion VPN

#### Explications

Les VPN de site à site (et les VPN clients) assurent une connectivité chiffrée entre les réseaux locaux ou les clients distants et un VPC, mais ils ne modifient pas le routage du trafic entre une instance EC2 et un service AWS tel que S3 au sein d'AWS. Un VPN ne fournit pas de chemin privé natif vers S3 au sein du VPC, évitant ainsi Internet ; un point de terminaison VPC est nécessaire pour cela.  
B. Passerelle Internet

#### Explications

Une passerelle Internet permet un accès Internet bidirectionnel aux ressources d'un VPC et achemine le trafic vers l'Internet public. Son utilisation contrevient à l'exigence d'éviter l'accès à Internet et ne fournit pas de connexion interne privée AWS à S3.  
**Votre réponse est correcte**  
C. Point de terminaison VPC

#### Explications

Les points de terminaison VPC assurent une connectivité privée entre un VPC et les services AWS compatibles, sans transiter par l'Internet public. Pour S3 en particulier, un point de terminaison VPC de type passerelle (basé sur une table de routage) permet au trafic EC2 vers S3 de rester sur le réseau Amazon, peut être restreint par des politiques de point de terminaison et IAM, et élimine le besoin d'une passerelle Internet (IGW) ou d'un NAT pour l'accès à S3 ; il s'agit donc de la solution idéale.  
D. Passerelle NAT

#### Explications

Une passerelle NAT permet aux instances situées dans des sous-réseaux privés d'établir des connexions sortantes vers Internet en traduisant les adresses, mais le trafic sortant transite toujours par l'Internet public. Elle ne fournit pas de route privée et interne à AWS vers S3 et ne répond donc pas à l'exigence d'éviter l'accès à Internet.  
Explication générale  
L'objectif est d'obtenir un accès privé et sans connexion Internet entre EC2 et S3. Un point de terminaison VPC (passerelle pour S3) crée une route native VPC, permettant ainsi au trafic de rester au sein d'AWS et d'être contrôlé via les politiques de point de terminaison et IAM. Les autres options offrent soit une connectivité Internet (passerelle Internet, NAT), soit répondent à un cas d'utilisation différent (VPN pour la connectivité sur site) et ne satisfont donc pas à cette exigence.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 18Correct  
Quel service ou fonctionnalité AWS permet aux utilisateurs de capturer des informations sur le trafic réseau dans un VPC ?  
**Votre réponse est correcte**  
A. Journaux de flux VPC

#### Explications

Capture les données de flux de trafic IP pour les interfaces réseau élastiques d'un VPC et exporte les enregistrements de flux (adresses IP source/destination, ports, protocole, nombre de paquets/octets et ACCEPT/REJECT) vers CloudWatch Logs ou Amazon S3. Ces enregistrements de flux sont conçus pour la surveillance du réseau, le dépannage de la connectivité et l'analyse de sécurité, répondant ainsi directement à l'exigence de capture du trafic réseau VPC.  
B. Inspecteur Amazon

#### Explications

Amazon Inspector est un service d'évaluation de sécurité automatisé qui analyse les instances EC2, les images de conteneurs et les charges de travail AWS afin de détecter les vulnérabilités et les écarts par rapport aux bonnes pratiques. Il ne collecte pas le trafic réseau au niveau des paquets ou des flux d'un VPC et ne peut donc pas être utilisé pour capturer le trafic réseau.  
C. Tables de routage VPC

#### Explications

Les tables de routage contrôlent l'acheminement du trafic IP entre les sous-réseaux, les passerelles et les connexions d'appairage ; elles n'enregistrent ni n'exportent les journaux de trafic. Les tables de routage influencent les décisions de transfert, mais ne fournissent aucun mécanisme de capture des données de flux.  
D. AWS CloudTrail

#### Explications

AWS CloudTrail enregistre les appels d'API et les événements du plan de gestion (qui a effectué l'appel, quand et d'où). Il ne capture pas le trafic réseau au niveau des paquets ou des flux au sein d'un VPC ; il ne peut donc pas être utilisé pour collecter des enregistrements de flux réseau.  
Explication générale  
La fonctionnalité recherchée est la visibilité au niveau des paquets et des flux au sein d'un VPC. La solution adéquate fournit des enregistrements de flux (adresses IP source et destination, ports, protocole, nombre de paquets/octets, acceptation/rejet) et les exporte pour analyse ; c'est le rôle de la journalisation des flux VPC. Les autres options sont axées sur l'analyse des vulnérabilités (Inspector), la logique de routage (tables de routage) ou l'audit des API et de la gestion (CloudTrail), et aucune ne permet de capturer les flux de trafic réseau.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 19Correct  
Un éditeur de logiciels indépendant souhaite distribuer et partager ses images machine Amazon (AMI) personnalisées avec ses clients potentiels. Quel service AWS répond à ces exigences ?  
**Votre réponse est correcte**  
A. Place de marché AWS

#### Explications

Une plateforme de vente et de distribution de produits destinée aux fournisseurs, prenant en charge la publication de produits basés sur des AMI, la gestion des listes de produits, l'approvisionnement, l'automatisation du déploiement, les licences et la facturation intégrée — ce qui en fait la méthode appropriée pour distribuer des AMI personnalisées aux clients externes.  
B. Échange de données AWS

#### Explications

Une plateforme gérée pour l'échange d'ensembles de données et de produits de données commerciaux ; elle est destinée à la distribution et à l'octroi de licences de données, et non à la publication ou à la distribution d'images de machines virtuelles.  
C. Amazon EC2

#### Explications

Le service de calcul principal qui lance les instances à partir d'AMI ; il fournit l'environnement d'exécution des AMI mais ne fournit pas de vitrine fournisseur, de liste de produits, de processus d'approvisionnement ou de facturation pour distribuer les AMI aux clients externes.  
D. Organisations AWS

#### Explications

Un service permettant de gérer de manière centralisée plusieurs comptes AWS, politiques et facturations consolidées au sein d'une organisation ; il est utilisé pour la gouvernance interne des comptes et non pour la publication ou la vente d'AMI à des clients externes.  
Explication générale  
Cette question évalue comment un éditeur de logiciels indépendant peut publier et distribuer des AMI personnalisées. La bonne réponse est le service qui propose une plateforme et des outils permettant aux éditeurs de référencer leurs produits basés sur des AMI, de gérer les achats, le déploiement et la facturation. Les autres options sont axées sur l'échange de données, l'environnement de calcul ou la gestion de comptes et ne proposent donc pas le processus de distribution et de commercialisation nécessaire au partage d'AMI avec des clients potentiels.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 20Correct  
Quel principe de conception architecturale décrit la nécessité d'isoler les défaillances entre les composants dépendants dans le cloud AWS ?  
A. Utiliser une conception monolithique.

#### Explications

Incorrect. Une architecture monolithique regroupe de nombreuses fonctions dans une seule unité déployable, créant un couplage fort. Lorsqu'une partie tombe en panne, l'ensemble de l'unité peut être affecté, ce qui empêche l'isolation et réduit la disponibilité et l'évolutivité par rapport à des services séparés.  
B. Conception pour l'automatisation.

#### Explications

Incorrect. L'automatisation (par exemple, les pipelines CI/CD, l'infrastructure en tant que code comme AWS CloudFormation ou Terraform) améliore la reproductibilité et l'efficacité opérationnelle, mais n'empêche pas, à elle seule, la propagation des pannes entre les composants dépendants. L'isolation des pannes nécessite des modèles architecturaux tels que le découplage et la redondance.  
C. Concevoir pour les points de défaillance uniques.

#### Explications

Incorrect. Un point de défaillance unique (SPoF) est une vulnérabilité à éliminer, et non un objectif de conception. Les bonnes pratiques consistent à supprimer ou atténuer les SPoF grâce à la redondance (multi-AZ, multi-région), au basculement et au découplage, afin qu'une défaillance d'un composant n'entraîne pas d'interruption de service généralisée.  
**Votre réponse est correcte**  
D. Composants faiblement couplés.

#### Explications

Exact. Concevoir des composants indépendants, communiquant via des interfaces bien définies et des mécanismes asynchrones (par exemple, SQS, SNS, EventBridge, API Gateway et services aux contrats clairs), permet d'isoler les pannes. Ceci empêche la propagation des défaillances, autorise une mise à l'échelle et une récupération indépendantes, et prend en charge les mécanismes de nouvelle tentative/délai et de disjoncteur.  
Explication générale  
Le principe testé consiste à isoler les défaillances entre composants dépendants en créant des limites de service indépendantes et en utilisant des modèles de découplage. Le choix optimal met en œuvre l'indépendance et des interfaces asynchrones afin d'éviter la propagation des pannes. Les solutions non optimales décrivent soit un couplage fort (architecture monolithique), soit des pratiques opérationnelles ciblées qui ne garantissent pas l'isolation (automatisation), soit une vulnérabilité qu'il convient d'éliminer (point de défaillance unique).  
Domaine  
Domaine 1 : Concepts du cloud  
Question 21Correct  
Quels types de chiffrement peuvent être utilisés pour protéger les objets au repos dans Amazon S3 ? (Choisissez deux réponses.)  
**Votre sélection est correcte**  
A. Chiffrement côté serveur avec clés de chiffrement gérées par Amazon S3 (SSE-S3)

#### Explications

SSE-S3 (l'option de chiffrement côté serveur gérée par S3) chiffre les données d'objets au repos à l'aide d'AES-256 avec des clés entièrement gérées par Amazon S3. Elle chiffre les objets de manière transparente lors des requêtes PUT et les déchiffre lors des requêtes GET sans nécessiter de gestion des clés par le client, ce qui la rend idéale lorsque le chiffrement au repos requiert une charge opérationnelle minimale.  
**Votre sélection est correcte**  
B. Chiffrement côté serveur avec clés gérées par AWS KMS (SSE-KMS)

#### Explications

SSE-KMS utilise les clés principales client (CMK) du service de gestion de clés AWS pour effectuer le chiffrement côté serveur. Il offre des contrôles supplémentaires tels que les politiques de clés IAM et KMS, l'autorisation par requête, la rotation automatique ou manuelle des clés et l'auditabilité via AWS CloudTrail ; une solution adaptée lorsque vous avez besoin d'une gestion centralisée des clés et de contrôles d'accès/d'audit pour le chiffrement des objets S3.  
C. TLS

#### Explications

TLS est un protocole de couche transport qui protège les données en transit entre les clients et les points de terminaison AWS (par exemple, HTTPS vers S3). Il ne chiffre pas les objets stockés sur disque et ne répond donc pas à l'exigence de protection des objets S3 au repos.  
D. SSL

#### Explications

SSL désigne d'anciens protocoles de sécurité de la couche transport (remplacés par TLS). À l'instar de TLS, il protège uniquement les données en transit et ne chiffre pas les objets stockés au repos dans S3.  
E. Chiffrement transparent des données (TDE)

#### Explications

Le chiffrement transparent des données (TDE) est une fonctionnalité de base de données qui chiffre les fichiers et les sauvegardes (couramment utilisée dans RDS, SQL Server et Oracle). Il ne s'agit pas d'un mécanisme de chiffrement d'objets S3 et, par conséquent, il ne s'applique pas au chiffrement des objets stockés dans S3.  
Explication générale  
Amazon S3 prend en charge plusieurs méthodes de chiffrement côté serveur pour protéger les objets au repos. Les deux méthodes appropriées dans ce cas sont le chiffrement côté serveur géré par S3 (SSE-S3) pour un chiffrement AES-256 simple et automatique, et le chiffrement côté serveur utilisant AWS KMS (SSE-KMS) lorsque vous avez besoin d'une gestion centralisée des clés, de contrôles d'accès et d'audits. TLS/SSL servent à chiffrer les données en transit, et TDE est une technologie de chiffrement de fichiers de base de données ; il ne s'agit pas d'une option de chiffrement au repos pour S3.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 22Correct  
Parmi les propositions suivantes, quel est l'avantage dont bénéficient les utilisateurs lorsqu'ils migrent leurs charges de travail sur site vers le cloud AWS ?  
**Votre réponse est correcte**  
A. Élimination des dépenses liées à l'exploitation et à la maintenance des centres de données

#### Explications

La migration vers AWS élimine la nécessité d'exploiter vos propres centres de données physiques, car AWS prend en charge l'infrastructure sous-jacente (cycle de vie du matériel, alimentation électrique, refroidissement et sécurité physique). Ce modèle de paiement à l'usage permet de réduire les dépenses d'investissement et allège la gestion des centres de données ainsi que les coûts d'investissement et d'exploitation associés.  
B. Des remises sur les prix identiques à celles proposées par les fournisseurs de matériel

#### Explications

Incorrect. La tarification AWS utilise des modèles spécifiques au cloud (à la demande, instances réservées, plans d'économies, remises sur volume) et une structure de paiement à l'usage. Ces modèles diffèrent des remises traditionnelles proposées par les fournisseurs de matériel, et le coût final dépend des habitudes d'utilisation et des options tarifaires AWS choisies.  
C. Délégation de tous les contrôles opérationnels à AWS

#### Explications

Incorrect. Dans le cadre du modèle de responsabilité partagée d'AWS, AWS est responsable de la sécurité du cloud (infrastructure physique, matériel hôte et hyperviseur), tandis que les clients sont responsables de la sécurité au sein du cloud (leurs données, applications, systèmes d'exploitation/configurations et gestion des identités et des accès). Les contrôles opérationnels ne sont donc pas entièrement transférés à AWS.  
D. Élimination des frais d'exploitation

#### Explications

Incorrect. Les dépenses opérationnelles sont réduites dans certains domaines, mais non éliminées : les clients supportent toujours des coûts liés à l’exploitation des ressources cloud et doivent effectuer des tâches telles que la gestion des applications, les correctifs, les sauvegardes, la surveillance et le contrôle d’accès. Les services AWS gérés peuvent alléger la charge opérationnelle, mais n’en suppriment pas toutes les responsabilités ni tous les coûts.  
Explication générale  
Le principal avantage démontré est que la migration des charges de travail sur site vers AWS élimine la nécessité d'exploiter et de maintenir des centres de données physiques, transférant ainsi les dépenses d'investissement et les frais d'exploitation liés aux infrastructures vers AWS et permettant une infrastructure évolutive à la demande. Les autres options reposent sur une compréhension erronée d'AWS : les modèles de tarification diffèrent des remises sur le matériel, le modèle de responsabilité partagée conserve le contrôle du client sur les opérations dans le cloud et les dépenses opérationnelles sont réduites, mais non totalement éliminées.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 23Correct  
Une entreprise migre vers le cloud AWS et prévoit d'y exécuter des charges de travail expérimentales pendant 3 à 6 mois. Quel modèle de tarification répondra à ces exigences ?  
A. Utilisez les plans d'épargne pour une durée de 3 ans.

#### Explications

Incorrect. Les plans d'économies permettent de bénéficier de tarifs réduits en échange d'un engagement de 1 ou 3 ans (plans d'économies pour les instances de calcul et EC2). Ils sont conçus pour une utilisation prévisible et à long terme et ne seraient pas rentables pour des tests temporaires de 3 à 6 mois, car l'engagement reste valable pour toute la durée.  
B. Utilisez des hôtes dédiés.

#### Explications

Incorrect. Les hôtes dédiés fournissent des serveurs EC2 physiques dédiés à un seul client afin de répondre à des besoins spécifiques de conformité ou de gestion des licences. Ils augmentent les coûts et la complexité opérationnelle et ne conviennent pas aux expérimentations flexibles et à court terme.  
C. Acheter des instances réservées.

#### Explications

Incorrect. Les instances réservées nécessitent un engagement de 1 ou 3 ans (instances réservées standard ou convertibles) pour bénéficier de remises importantes et sont destinées aux charges de travail stables ; elles ne conviennent pas aux charges de travail de test transitoires de 3 à 6 mois.  
**Votre réponse est correcte**  
D. Utiliser des instances à la demande.

#### Explications

Exact. Le modèle de tarification EC2 à la demande ne nécessite aucun engagement à long terme et ne facture que l'utilisation réelle, offrant une flexibilité maximale pour démarrer, arrêter et supprimer des instances au fur et à mesure des expériences, ce qui en fait la solution idéale pour les charges de travail de 3 à 6 mois.  
Explication générale  
Pour les charges de travail expérimentales de courte durée (3 à 6 mois), le modèle de tarification optimal est celui qui propose un paiement à l'usage sans engagement à long terme. Les options avec engagement (Plans d'économies et Instances réservées) requièrent des durées de 1 à 3 ans et visent une utilisation stable et prévisible ; les Serveurs dédiés répondent aux exigences de conformité et de licences, mais engendrent des coûts et une complexité supplémentaires. Le modèle EC2 à la carte offre la flexibilité et la granularité de facturation nécessaires aux expérimentations temporaires.  
Domaine  
Domaine 4 : Facturation, tarification et assistance  
Question 24Correct  
Une entreprise doit archiver ses documents selon le modèle WORM (Write-Once, Read-Many) afin de respecter ses obligations légales et de conformité. Quelle fonctionnalité d'Amazon S3 peut-elle utiliser pour répondre à cette exigence ?  
A. Gestion des versions S3

#### Explications

Le versionnage conserve des copies historiques des objets, permettant ainsi de restaurer des états antérieurs, mais n'empêche pas les écritures ni les suppressions. À lui seul, le versionnage ne peut garantir l'immuabilité ni une période de rétention WORM juridiquement contraignante ; l'immuabilité requiert un verrouillage d'objet ou un verrouillage de rétention au niveau du coffre-fort.  
Politique des compartiments B. S3

#### Explications

Les politiques de compartiment contrôlent qui peut effectuer des actions sur un compartiment ou des objets (accès et permissions). Elles ne fournissent aucun mécanisme pour rendre les objets stockés immuables ni pour imposer les durées de conservation requises pour la conformité WORM.  
**Votre réponse est correcte**  
C. S3 Écluse du coffre-fort du glacier

#### Explications

Vault Lock pour Amazon S3 Glacier vous permet d'appliquer une politique de rétention immuable au niveau du coffre-fort, empêchant ainsi toute modification ou suppression des archives pendant une période de rétention définie. Une fois verrouillée, la politique Vault Lock ne peut plus être modifiée, garantissant ainsi le principe « écriture une fois, lecture multiple » nécessaire à la conformité aux exigences réglementaires WORM pour les données archivées.  
Suppression de l'authentification multifacteurs (MFA) D. S3

#### Explications

La suppression MFA nécessite une authentification multifacteur pour effectuer certaines opérations de suppression sur les compartiments versionnés, ajoutant une protection contre les suppressions accidentelles ou non autorisées, mais elle ne crée pas de rétention WORM immuable — les objets peuvent toujours être modifiés ou supprimés lorsque l'authentification multifacteur est fournie et elle ne peut pas remplacer une politique de rétention verrouillée.  
Explication générale  
Cette question vise à déterminer comment garantir un archivage immuable de type WORM afin de répondre aux exigences légales et de conformité. La solution optimale est le mécanisme Glacier Vault Lock, qui applique une politique de conservation irréversible des données archivées, empêchant ainsi toute modification ou suppression pendant la période de conservation. D'autres options (gestion des versions, politiques de compartiment, suppression par authentification multifacteur) permettent la récupération, le contrôle d'accès ou une protection supplémentaire contre la suppression, mais ne garantissent pas une conservation immuable conforme aux exigences. Remarque : Amazon S3 Object Lock est une fonctionnalité native de S3 qui assure également l'immuabilité des objets (WORM) lorsque cela est nécessaire.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 25Correct  
Une entreprise utilise Amazon DynamoDB comme base de données applicative. Quelles tâches relèvent de la responsabilité d'AWS, selon le modèle de responsabilité partagée d'AWS ? (Choisissez deux réponses.)  
A. Classer les données.

#### Explications

Incorrect. La classification des données (étiquetage, détermination du niveau de sensibilité et des exigences de conformité) relève de la responsabilité du client. AWS fournit des services et des outils (par exemple, Amazon Macie) pour faciliter cette tâche, mais c'est au client qu'il revient de définir les politiques de classification et de traitement.  
B. Configurer les autorisations d'accès.

#### Explications

Incorrect. Le contrôle d'accès (politiques IAM, politiques basées sur les ressources, contrôle d'accès précis pour DynamoDB et politiques clés pour KMS) est configuré et géré par le client. AWS est responsable du fonctionnement sécurisé du service, et non de la définition de votre modèle d'autorisations ou de vos identités.  
C. Gérer les options de chiffrement.

#### Explications

Incorrect. Bien qu'AWS fournisse des fonctionnalités de chiffrement et gère l'infrastructure cryptographique sous-jacente, il incombe aux clients de choisir et de configurer les options de chiffrement (par exemple, sélectionner SSE, choisir des clés KMS gérées par AWS ou par le client et gérer les politiques de clés).  
**Votre sélection est correcte**  
D. Fournir des points d'accès publics pour stocker et récupérer des données.

#### Explications

Exact. AWS est responsable de l'exploitation et de l'exposition des points de terminaison de service gérés (DNS, disponibilité du réseau et disponibilité du niveau de service) pour DynamoDB. Le fournisseur assure la maintenance des points de terminaison de service et de l'infrastructure réseau sous-jacente permettant aux clients de stocker et de récupérer des données.  
**Votre sélection est correcte**  
E. Gérer la couche infrastructure et le système d'exploitation.

#### Explications

Exact. Pour un service géré comme DynamoDB, AWS est responsable de la couche d'infrastructure et de la plateforme sous-jacente (matériel, hyperviseur, mise à jour du système d'exploitation et de l'environnement d'exécution du service géré), ce qui relève des responsabilités d'AWS dans le cadre du modèle de responsabilité partagée.  
Explication générale  
Cette question teste le modèle de responsabilité partagée d'AWS pour les services gérés. AWS est responsable du cloud (l'infrastructure sous-jacente, la plateforme, les points de terminaison de service et la maintenance du service géré), tandis que le client est responsable des aspects liés au cloud (classification des données, autorisations d'accès et choix de configuration tels que les paramètres de chiffrement). Par conséquent, les responsabilités qui incombent à AWS sont la fourniture et la maintenance des points de terminaison de service ainsi que la gestion de l'infrastructure et du système d'exploitation (D et E) ; les autres options relèvent de la responsabilité du client.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 26Correct  
Quel service de calcul AWS permet aux utilisateurs d'exécuter des conteneurs à grande échelle de manière sécurisée et fiable ?  
**Votre réponse est correcte**  
A. Amazon Elastic Container Service (Amazon ECS)

#### Explications

La solution idéale est le service d'orchestration de conteneurs entièrement géré d'AWS, qui assure un déploiement et une mise à l'échelle sécurisés et fiables des conteneurs. Il prend en charge les instances EC2 et les instances sans serveur (Fargate), utilise des définitions de tâches et des services pour le déploiement, et s'intègre à IAM pour le contrôle d'accès, à VPC pour la mise en réseau, à Elastic Load Balancing pour la répartition du trafic et à Amazon CloudWatch pour la journalisation et les métriques — autant de fonctionnalités permettant d'exécuter des conteneurs à grande échelle.  
B. Amazon Aurora

#### Explications

Cette option décrit un moteur de base de données relationnelle managé, compatible avec MySQL et PostgreSQL, qui gère le stockage, les sauvegardes et la haute disponibilité des bases de données transactionnelles. Il ne s'agit pas d'un service d'orchestration de calcul et il n'exécute ni ne gère de conteneurs.  
C. Amazone Athéna

#### Explications

Ce service est un moteur de requêtes interactif sans serveur permettant d'exécuter des requêtes SQL directement sur les données stockées dans Amazon S3. Optimisé pour l'analyse et les requêtes ad hoc, il n'est pas conçu pour l'hébergement ou l'orchestration d'applications conteneurisées.  
D. Amazon Polly

#### Explications

Cette option fait référence à un service de synthèse vocale qui convertit du texte en parole naturelle pour les sorties audio des applications. Elle ne permet pas d'exécuter ni d'orchestrer des conteneurs.  
Explication générale  
Cette question évalue la connaissance des services AWS pour les charges de travail conteneurisées. La bonne réponse est le service d'orchestration de conteneurs entièrement géré d'AWS, qui offre des définitions de tâches, la gestion des services, la mise à l'échelle automatique, la prise en charge des types de lancement EC2 et Fargate, l'intégration IAM/VPC, l'équilibrage de charge et la surveillance, ce qui le rend idéal pour exécuter des conteneurs à grande échelle de manière sécurisée et fiable. Les autres options sont une base de données relationnelle gérée, un service de requêtes SQL sans serveur pour S3 et un service de synthèse vocale ; aucune de ces options ne propose de fonctionnalités d'orchestration de conteneurs.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 27Correct  
Quelle option bénéficie des économies d'échelle grâce aux avantages du cloud computing ?  
A. La possibilité d'échanger des charges variables contre des charges fixes

#### Explications

Incorrect. Le cloud permet généralement de convertir d'importants investissements initiaux (CapEx) en dépenses d'exploitation à la carte (OpEx), autrement dit, les coûts fixes deviennent variables pour les clients. Cette option affirme le contraire et ne rend donc pas compte des économies d'échelle.  
B. Vitesse et agilité accrues

#### Explications

Incorrect. La rapidité et l'agilité sont des avantages fondamentaux du cloud computing (grâce à la mise en service à la demande, à l'élasticité et aux services gérés), mais ne constituent pas la définition des économies d'échelle, qui font spécifiquement référence à la réduction des coûts unitaires à mesure que la taille du fournisseur augmente.  
**Votre réponse est correcte**  
C. Des coûts variables inférieurs aux coûts fixes

#### Explications

Exactement. Les économies d'échelle se produisent lorsque les grands fournisseurs de services cloud regroupent la demande, standardisent l'infrastructure, automatisent les opérations et négocient des remises sur volume, ce qui réduit le coût marginal unitaire. Les fournisseurs peuvent ensuite répercuter ces coûts unitaires réduits sur leurs clients, ce qui entraîne une baisse des prix unitaires et une amélioration de la rentabilité.  
D. Augmentation des coûts opérationnels des centres de données

#### Explications

Incorrect. Les économies d'échelle visent à réduire, et non à augmenter, le coût opérationnel unitaire grâce à la centralisation des opérations, une meilleure utilisation des ressources et l'automatisation des centres de données. Une augmentation des coûts opérationnels serait l'effet inverse de celui escompté.  
Explication générale  
Cette question évalue la compréhension des économies d'échelle dans le domaine du cloud computing : les grands fournisseurs réduisent leurs coûts unitaires en mutualisant leurs ressources, en automatisant leurs opérations et en tirant parti de leur pouvoir d'achat, et ils répercutent ces économies sur leurs clients. C'est cet effet de réduction des coûts qui explique pourquoi la réponse C est correcte. Les autres choix inversent soit le rapport CapEx/OpEx (A), soit décrivent un autre avantage du cloud (B), soit encore énoncent l'effet inverse (D).  
Domaine  
Domaine 4 : Facturation, tarification et assistance  
Question 28Correct  
Une entreprise souhaite exécuter le code de son application sans avoir à provisionner ni à gérer de serveurs. Quel service AWS répond à ce besoin ?  
A. Colle AWS

#### Explications

Ce service est une solution ETL (extraction, transformation et chargement) gérée, ainsi qu'une solution de catalogage de données conçue pour le traitement par lots. Il ne s'agit pas d'un service d'hébergement ou d'exécution de code applicatif en réponse à des événements ou des requêtes HTTP. Il ne propose pas le modèle de calcul événementiel et éphémère utilisé pour l'exécution d'applications sans serveur.  
**Votre réponse est correcte**  
B. AWS Lambda

#### Explications

Ce service offre une puissance de calcul sans serveur pilotée par les événements : vous téléchargez votre code (ou indiquez un conteneur), la plateforme provisionne l’environnement d’exécution, s’adapte automatiquement pour gérer les appels simultanés et ne facture que le temps d’exécution. Elle s’intègre à API Gateway, S3, DynamoDB et d’autres services pour exécuter la logique applicative sans avoir à provisionner ni à gérer de serveurs.  
C. AWS CodeDeploy

#### Explications

Ce produit automatise et coordonne le déploiement d'applications sur des ressources de calcul (telles que des machines virtuelles, des conteneurs ou des fonctions sans serveur), mais n'héberge ni n'exécute lui-même le code applicatif dans un environnement de calcul sans serveur. Il s'agit d'un outil de déploiement et d'orchestration, et non d'un environnement d'exécution.  
D. Amazon CodeGuru

#### Explications

Il s'agit d'un service d'outils de développement pour l'analyse automatisée du code et le profilage des performances. Il fournit des recommandations et des analyses, mais n'exécute pas les charges de travail des applications ni ne fournit de ressources de calcul pour l'exécution du code.  
Explication générale  
La question porte sur l'exécution de code applicatif sans provisionnement ni gestion de serveurs. La solution idéale est un service de calcul sans serveur et piloté par les événements, qui gère automatiquement le provisionnement, la mise à l'échelle et la facturation à l'exécution. Les autres options sont axées sur l'ETL de données, l'automatisation du déploiement ou les outils de développement et ne répondent donc pas à l'exigence d'un environnement d'exécution sans serveur pour le code applicatif.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 29Correct  
Un utilisateur doit effectuer une sauvegarde ponctuelle d'un volume Amazon Elastic Block Store (Amazon EBS) attaché à une instance Amazon EC2. Quelle est la méthode la plus efficace, d'un point de vue opérationnel, pour réaliser cette sauvegarde ?  
A. Attachez un autre volume EBS à l'instance EC2 et copiez son contenu.

#### Explications

L'ajout d'un second volume EBS et la copie des données constituent une approche manuelle au niveau bloc, nécessitant davantage d'étapes opérationnelles (attachement, montage, copie, vérification) et pouvant exiger l'arrêt ou la mise en veille des applications afin de garantir la cohérence du système de fichiers. Cette méthode engendre également des coûts de volume supplémentaires et ne propose pas les fonctionnalités de restauration incrémentielle et gérée offertes par les snapshots AWS.  
B. Copiez le volume EBS sur un serveur exécuté en dehors d'AWS et connecté via AWS Direct Connect.

#### Explications

Le transfert des données volumineuses vers un serveur externe via Direct Connect engendre une complexité réseau inutile, des coûts de bande passante accrus et des temps de transfert plus longs. Cette solution de sauvegarde ponctuelle est moins efficace que l'utilisation des fonctionnalités de snapshots gérées par AWS, qui fonctionnent au sein du plan de contrôle AWS.  
**Votre réponse est correcte**  
C. Créez un instantané EBS du volume.

#### Explications

Les snapshots EBS sont des sauvegardes incrémentales, gérées par AWS, de volumes de blocs à un instant précis. Ils peuvent être créés rapidement à partir des volumes attachés (produisant un snapshot cohérent en cas de panne, sauf si une mise au repos de l'application est effectuée) et stockés durablement sans provisionnement de stockage supplémentaire. Les snapshots permettent des restaurations rapides, la création de nouveaux volumes ou d'AMI, et évitent les étapes manuelles et la surcharge liée aux transferts externes des autres méthodes, ce qui en fait le choix le plus efficace pour une sauvegarde ponctuelle.  
D. Créez un script personnalisé pour copier le contenu du fichier EBS vers Amazon S3.

#### Explications

L'écriture d'un script personnalisé pour copier des fichiers vers Amazon S3 nécessite une gestion au niveau de l'application, une logique de cohérence, une gestion des erreurs et une maintenance continue. Ce script génère des sauvegardes au niveau objet plutôt qu'une image au niveau bloc du volume ; par conséquent, la restauration vers un volume EBS identique est plus complexe qu'avec un instantané.  
Explication générale  
Cette question teste vos connaissances des options de sauvegarde natives AWS pour le stockage par blocs. La méthode la plus efficace pour une sauvegarde ponctuelle d'un volume EBS attaché consiste à utiliser un snapshot EBS, car les snapshots sont gérés, incrémentiels, durables et s'intègrent directement aux flux de travail de restauration de volumes/AMI. Les autres solutions (copie manuelle du volume, transfert de données hors AWS ou scripts personnalisés) sont techniquement possibles, mais elles ajoutent des étapes opérationnelles inutiles, de la complexité ou une surcharge de transfert par rapport à la fonctionnalité native de snapshot.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 30Correct  
Quel service AWS est utilisé pour fournir temporairement des informations d'identification de sécurité fédérées afin d'accéder aux ressources AWS ?  
A. Amazon GuardDuty

#### Explications

Incorrect — GuardDuty est un service de détection des menaces qui analyse AWS CloudTrail, les journaux de flux VPC et les journaux DNS pour identifier les activités malveillantes ou non autorisées. Il n'émet, ne gère ni ne sert d'intermédiaire pour l'authentification/l'autorisation des utilisateurs fédérés.  
**Votre réponse est correcte**  
B. Service de jetons de sécurité AWS (AWS STS)

#### Explications

Exact — AWS Security Token Service (STS) délivre des informations d'identification temporaires à privilèges limités (ID de clé d'accès, clé d'accès secrète et jeton de session) et fournit des API telles que AssumeRole, AssumeRoleWithSAML, AssumeRoleWithWebIdentity, GetFederationToken et GetSessionToken. Ces fonctionnalités permettent la fédération avec des fournisseurs d'identité externes (SAML, OIDC), l'accès inter-comptes et l'utilisation d'informations d'identification éphémères qui expirent automatiquement.  
C. AWS Secrets Manager

#### Explications

Incorrect — AWS Secrets Manager stocke, récupère et, en option, renouvelle en toute sécurité les secrets à longue durée de vie (identifiants de base de données, clés API) grâce au chiffrement (AWS KMS) et à des mécanismes de rotation. Il ne s'agit pas d'un service d'émission de jetons ou d'identifiants pour l'accès fédéré.  
D. Gestionnaire de certificats AWS

#### Explications

Incorrect — AWS Certificate Manager (ACM) provisionne, gère et déploie les certificats SSL/TLS pour une utilisation avec les services et points de terminaison AWS. La gestion des certificats est indépendante de l'émission d'informations d'identification de sécurité temporaires ou de la prise en charge des flux d'identité fédérés.  
Explication générale  
Cette question évalue la compréhension des services d'identité et d'accès AWS pour les scénarios fédérés. AWS STS est le service dédié à l'émission d'identifiants temporaires pour les utilisateurs et les rôles fédérés, prenant en charge SAML/OIDC et l'usurpation de rôle. Les autres options remplissent des fonctions différentes : détection des menaces (GuardDuty), stockage et rotation des secrets (Secrets Manager) et gestion des certificats (ACM). Elles ne fournissent donc pas d'identifiants fédérés temporaires.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 31Correct  
Une entreprise héberge son site web sur des instances Amazon EC2. Elle doit garantir une audience mondiale et une latence minimale pour les utilisateurs. Quel service AWS doit-elle utiliser pour répondre à ces exigences ?  
A. Route 53 d'Amazonie

#### Explications

Amazon Route 53 est un service DNS géré qui dirige les utilisateurs vers les points de terminaison en fonction de politiques (basées sur la latence, la géolocalisation et la pondération) et de contrôles d'intégrité. Il résout les noms de domaine à l'échelle mondiale, mais ne met pas en cache ni ne diffuse le contenu web depuis des serveurs périphériques ; il ne peut donc pas, à lui seul, assurer la faible latence et la distribution mondiale du contenu qu'offre un CDN.  
**Votre réponse est correcte**  
B. Amazon CloudFront

#### Explications

Amazon CloudFront est le réseau de diffusion de contenu mondial d'AWS. Il met en cache le contenu statique et dynamique au niveau des points de présence et des caches régionaux, optimise le transport (HTTP/2, connexions persistantes, TLS) et peut exécuter une logique de périphérie via Lambda@Edge. Ces caractéristiques réduisent le temps d'aller-retour et offrent la latence minimale et la portée mondiale requises pour un site web hébergé sur des instances EC2.  
C. Équilibrage élastique de la charge

#### Explications

L'équilibrage de charge élastique (ALB/NLB) répartit le trafic entrant entre les cibles au sein et entre les zones de disponibilité d'une région afin d'améliorer la disponibilité et l'évolutivité. Il ne fournit pas de réseau global de caches périphériques ni de mise en cache de contenu ; par conséquent, il ne minimise pas à lui seul la latence pour un public mondial.  
D. AWS Lambda

#### Explications

AWS Lambda est un service de calcul sans serveur permettant d'exécuter du code en réponse à des événements. Bien que Lambda puisse traiter des requêtes, il ne s'agit pas d'un mécanisme de distribution de contenu. (Lambda@Edge peut exécuter des fonctions sur les serveurs périphériques de CloudFront lorsqu'il est associé à un CDN, mais Lambda seul ne fournit ni mise en cache globale ni fonctionnalités de CDN.)  
Explication générale  
Cette question évalue vos connaissances des services AWS pour la diffusion de contenu à faible latence à l'échelle mondiale. Un CDN est la solution idéale : CloudFront place des copies en cache du contenu sur des serveurs périphériques dans le monde entier et optimise la diffusion, répondant ainsi parfaitement à cette exigence. Route 53 gère le routage DNS (mais pas la mise en cache), ELB équilibre le trafic au sein des régions et Lambda assure les calculs ; aucun de ces services ne remplace la mise en cache globale et la diffusion périphérique offertes par CloudFront.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 32Correct  
Quel avantage du cloud computing une entreprise exploite-t-elle lorsqu'elle utilise les régions AWS pour accroître la disponibilité de ses applications pour les utilisateurs de différents pays ?  
A. Tarification à l'utilisation

#### Explications

Incorrect — cette option décrit un modèle de facturation basé sur la consommation (paiement à l’usage). Ce concept concerne la tarification, et non la répartition géographique des ressources ni les améliorations de disponibilité pour l’utilisateur obtenues grâce à un déploiement dans plusieurs régions.  
B. Prévision des capacités

#### Explications

Incorrect — la prévision des capacités consiste à prédire les besoins futurs en ressources et à planifier la mise à l'échelle, ce qui aide à dimensionner et à planifier les coûts, mais ne répartit pas en soi les charges de travail sur des zones géographiques pour améliorer la disponibilité ou réduire la latence pour les utilisateurs de différents pays.  
C. Économies d'échelle

#### Explications

Incorrect — les économies d'échelle désignent les gains de rentabilité obtenus grâce à l'exploitation à grande échelle de services cloud par les fournisseurs. Il s'agit d'un avantage concurrentiel en termes de coûts, et non d'un mécanisme permettant d'accroître la disponibilité des applications ou de desservir des utilisateurs dans plusieurs régions géographiques.  
**Votre réponse est correcte**  
D. Portée mondiale

#### Explications

Exact — le déploiement d’applications sur plusieurs régions AWS exploite l’infrastructure mondiale du fournisseur pour rapprocher les ressources des utilisateurs, ce qui permet de réduire la latence, d’isoler les pannes régionales et d’assurer une redondance multirégionale. Ces caractéristiques améliorent directement la disponibilité et la résilience pour les utilisateurs situés dans différents pays.  
Explication générale  
La question porte sur l'avantage du cloud que représente l'exploitation de l'infrastructure mondiale d'un fournisseur. L'utilisation de plusieurs régions AWS améliore la disponibilité et les performances pour les utilisateurs géographiquement dispersés en réduisant la latence et en assurant la résilience face aux pannes régionales. Les autres options décrivent des modèles de tarification, la planification des capacités ou des avantages en termes de coûts, mais n'expliquent ni la distribution géographique ni l'amélioration de la disponibilité entre les pays.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 33Correct  
Une entreprise envisage d'utiliser des instances Amazon EC2 comme serveurs web. Ces serveurs seront utilisés par des clients du monde entier, la plupart uniquement à certaines heures de la journée. Comment l'entreprise doit-elle déployer ces instances EC2 pour minimiser ses coûts d'exploitation ?  
A. Dans plusieurs zones de disponibilité

#### Explications

La répartition des instances entre les zones de disponibilité accroît la tolérance aux pannes et la résilience en évitant un point de défaillance unique, mais ne réduit pas à elle seule le nombre d'instances en cours d'exécution ni le coût de calcul pendant les périodes de faible trafic. La réduction des coûts nécessite un ajustement de la capacité, et non un simple repositionnement.  
**Votre réponse est correcte**  
B. Dans un groupe à mise à l'échelle automatique

#### Explications

Les groupes Auto Scaling ajoutent ou suppriment automatiquement de la capacité EC2 en fonction des métriques CloudWatch, des politiques de mise à l'échelle ou des actions planifiées. Pour des modèles d'utilisation prévisibles et basés sur le temps, vous pouvez utiliser la mise à l'échelle planifiée pour démarrer des instances avant les heures de pointe et les réduire ensuite ; pour des modèles dynamiques, utilisez le suivi des cibles ou les politiques par paliers. Cela permet d'adapter la capacité au mieux et d'éviter de payer pour des instances inactives. Cette fonctionnalité peut également être combinée avec des instances Spot ou réservées pour réaliser des économies supplémentaires.  
C. Dans un groupe de placement

#### Explications

Les groupes de placement déterminent la répartition des instances sur l'infrastructure matérielle sous-jacente (cluster, répartition, partition) afin d'optimiser les performances réseau ou l'isolation. Ils privilégient la performance et la gestion des pannes, et non l'optimisation des coûts ou la mise à l'échelle automatique, et peuvent même restreindre le choix des instances.  
D. Dans les sous-réseaux privés

#### Explications

Les sous-réseaux privés sont une architecture réseau et de sécurité qui restreint l'accès direct à Internet et contribue à protéger les ressources. Ils n'offrent pas d'ajustement automatique de la capacité ; en réalité, l'hébergement de serveurs web accessibles depuis Internet dans des sous-réseaux privés peut nécessiter des composants supplémentaires (passerelles NAT, proxys) qui engendrent des coûts supplémentaires.  
Explication générale  
L'ajustement automatique de la capacité EC2 à la demande est la solution la plus rentable pour les clients répartis dans le monde entier et dont l'utilisation est limitée dans le temps. L'Auto Scaling (avec des politiques planifiées ou basées sur des indicateurs) réduit les coûts opérationnels en garantissant l'exécution des seules instances nécessaires en cas de forte charge et leur réduction en cas de faible charge. Les autres options répondent aux problématiques de disponibilité, de placement ou de réseau, mais n'offrent pas d'ajustement automatique de la capacité de calcul pour réduire les coûts récurrents.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 34Correct  
Quel service AWS propose une base de données graphiques entièrement gérée pour les ensembles de données fortement interconnectés ?  
A. Amazon DynamoDB

#### Explications

Un service NoSQL clé-valeur/document entièrement géré ; il ne fournit pas de langages de requêtes graphiques natifs (Gremlin/SPARQL) ni d'optimisations de parcours et n'est donc pas adapté aux requêtes multi-sauts efficaces sur des ensembles de données fortement connectés.  
B. Amazon RDS

#### Explications

Une plateforme de base de données relationnelle gérée pour des moteurs tels que MySQL/PostgreSQL/Oracle. Les schémas relationnels et le SQL ne sont pas optimisés pour les parcours de graphes et les requêtes de relations complexes à grande échelle, contrairement à un moteur de graphes dédié.  
**Votre réponse est correcte**  
C. Amazon Neptune

#### Explications

Base de données graphiques dédiée et entièrement gérée, prenant en charge les graphes de propriétés (Apache TinkerPop Gremlin) et RDF (SPARQL). Optimisée pour les parcours multi-sauts à faible latence sur des données fortement interconnectées, elle inclut des fonctionnalités gérées telles que les sauvegardes automatisées, le déploiement multi-AZ, le chiffrement et l'intégration avec IAM, CloudWatch et CloudTrail.  
D. Amazon Aurora

#### Explications

Base de données relationnelle haute performance compatible avec MySQL et PostgreSQL, conçue pour les charges de travail OLTP. Elle ne dispose pas de langages de requêtes graphiques natifs ni des optimisations de parcours nécessaires aux charges de travail impliquant des graphes fortement interconnectés.  
Explication générale  
Cette question nécessite d'adapter la charge de travail (ensembles de données fortement interconnectés nécessitant des parcours multi-sauts) au type de base de données gérée approprié. La bonne réponse est le service qui implémente nativement des modèles de graphes et des langages de requêtes de graphes pour des parcours efficaces. Les autres options sont des bases de données relationnelles ou NoSQL gérées qui ne fournissent pas les API de requêtes de graphes natives ni les performances de parcours d'une base de données de graphes dédiée.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 35Correct  
Quel service AWS peut être utilisé pour envoyer des alertes lorsqu'une alarme Amazon CloudWatch spécifique est déclenchée ?  
A. AWS CloudTrail

#### Explications

CloudTrail est un service d'audit et de gouvernance qui enregistre les appels d'API AWS et l'activité des comptes dans des journaux à des fins de conformité et d'enquête. Il ne sert pas de système de notification pour les changements d'état des alarmes CloudWatch ; toute alerte nécessite la mise en place d'un pipeline de notification distinct basé sur les journaux CloudTrail.  
**Votre réponse est correcte**  
B. Service de notification simple d'Amazon (Amazon SNS)

#### Explications

Amazon SNS est un service de notification de type publication/abonnement entièrement géré. Les actions d'alarme CloudWatch peuvent publier des messages de changement d'état d'alarme sur un sujet SNS, et SNS diffuse ensuite ces messages aux points de terminaison abonnés (courriel, SMS, HTTP(S), Lambda, SQS, etc.), ce qui en fait le mécanisme standard de diffusion des alertes d'alarme aux personnes et aux systèmes.  
C. Amazon Simple Queue Service (Amazon SQS)

#### Explications

SQS est un service de file d'attente de messages persistant utilisé pour découpler et mettre en mémoire tampon les messages en vue d'un traitement asynchrone. Il ne s'agit pas d'un mécanisme d'alerte directe destiné aux destinataires humains ; pour utiliser SQS avec des alarmes, il faut généralement abonner une file d'attente SQS à un sujet SNS ou faire en sorte qu'un consommateur traite les messages produits par un pipeline d'alarmes.  
D. Amazon EventBridge

#### Explications

EventBridge est un bus d'événements et un service de routage qui reçoit des événements (y compris les changements d'état des alarmes CloudWatch) et les achemine vers des destinataires selon des règles prédéfinies. Il orchestre les réponses, mais ne prend pas en charge l'envoi direct par e-mail ou SMS ; l'envoi des notifications se fait via SNS ou un autre système de notification.  
Explication générale  
Ce test illustre l'intégration de CloudWatch avec les services de notification et d'événements AWS. La méthode classique pour envoyer des alertes lors d'un changement d'état d'une alarme consiste à publier l'action d'alarme sur un sujet SNS, qui se charge ensuite de distribuer les notifications aux points de terminaison abonnés. CloudTrail sert à consigner l'activité des API, SQS au traitement des messages en file d'attente et EventBridge au routage et à l'orchestration des événements. Chacun de ces services peut être intégré à un flux de travail de surveillance, mais aucun ne remplace SNS comme service principal de distribution des notifications d'alarmes.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 36Correct  
Une entreprise prévoit d'intégrer de nouveaux employés qui travailleront à distance. Elle doit configurer des bureaux virtuels Windows afin de leur fournir un environnement de travail. Ces employés doivent pouvoir accéder à cet environnement depuis n'importe où, via leur ordinateur ou un navigateur web. Quel service ou fonctionnalité AWS répond à ces exigences ?  
A. Hôtes dévoués

#### Explications

Incorrect. Les hôtes dédiés sont des serveurs EC2 physiques alloués à un seul client à des fins de licence et de conformité (par exemple, apportez votre propre licence), et non un service de bureau géré. Ils ne fournissent pas de bureaux virtuels Windows basés sur un navigateur ou entièrement gérés.  
B. Accélérateur mondial AWS

#### Explications

Incorrect. AWS Global Accelerator est un service réseau qui améliore la disponibilité et les performances en acheminant le trafic utilisateur vers les points de terminaison optimaux via le réseau mondial AWS et des adresses IP anycast statiques. Il ne fournit pas d'environnements de bureau virtuel ni d'accès au bureau via un client ou un navigateur.  
**Votre réponse est correcte**  
C. Espaces de travail Amazon

#### Explications

Exact. Amazon WorkSpaces est le service de bureau en tant que service (DaaS) géré d'AWS qui fournit des bureaux Windows persistants dans le cloud. Il permet l'accès depuis des clients natifs et des navigateurs web, s'intègre à Active Directory, prend en charge le chiffrement et l'authentification multifacteurs, et est spécifiquement conçu pour fournir des environnements de bureau Windows distants aux utilisateurs finaux.  
D. Amazon CloudFront

#### Explications

Incorrect. Amazon CloudFront est un réseau de diffusion de contenu (CDN) permettant de mettre en cache et de diffuser du contenu web statique et dynamique depuis des serveurs périphériques. Il accélère la diffusion de contenu, mais n'héberge ni ne gère les sessions de bureau virtuel.  
Explication générale  
Il est nécessaire de disposer de bureaux virtuels Windows gérés, accessibles de partout via l'ordinateur d'un utilisateur ou un navigateur web. Amazon WorkSpaces est le produit DaaS d'AWS conçu pour ce cas d'utilisation (bureaux virtuels Windows gérés, accès via navigateur et client, intégration Active Directory, contrôles de sécurité). Les autres options, telles que les services d'infrastructure, de réseau ou de CDN, ne proposent pas d'environnements de bureau virtuel.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 37Correct  
Une entreprise développe une application qui doit diffuser des images et des vidéos à l'échelle mondiale avec une latence minimale. Quelle approche peut-elle adopter pour y parvenir de manière rentable ?  
**Votre réponse est correcte**  
A. Diffuser le contenu via Amazon CloudFront.

#### Explications

CloudFront est le réseau de distribution de contenu mondial d'AWS qui met en cache les objets sur des centaines de points de présence et de caches régionaux, diffusant ainsi le contenu depuis le point de présence le plus proche de l'utilisateur. Cela réduit les requêtes à l'origine, diminue la latence pour les images et les vidéos, prend en charge les protocoles de streaming et HTTP/2, et peut réduire les coûts globaux en diminuant les transferts de données et le nombre de requêtes (avec des comportements de cache et des classes de prix configurables pour un contrôle optimal des coûts).  
B. Stockez le contenu sur Amazon S3 et activez la réplication interrégionale S3.

#### Explications

La réplication interrégionale S3 copie les objets pour assurer leur durabilité et leur redondance géographique, et non pour une distribution à faible latence. La réplication engendre des coûts de stockage et de transfert de données et est asynchrone ; elle ne propose pas de mise en cache en périphérie du réseau, ce qui explique que la latence pour l’utilisateur final reste plus élevée qu’avec un CDN.  
C. Mettre en œuvre un VPN sur plusieurs régions AWS.

#### Explications

Un VPN assure une connectivité réseau sécurisée entre réseaux ou VPC AWS, mais ne constitue pas un mécanisme de distribution de contenu. Les tunnels VPN engendrent une surcharge liée au routage et au chiffrement, ont des implications en termes de débit et de latence, et ne permettent pas de déployer le contenu en périphérie pour une diffusion mondiale à faible latence.  
D. Diffuser le contenu via AWS PrivateLink.

#### Explications

AWS PrivateLink offre une connectivité privée et régionale aux services via des points de terminaison d'interface au sein des VPC. Il est conçu pour un accès sécurisé au sein et entre les VPC et les services pris en charge, et non pour la diffusion de contenu public à l'échelle mondiale ou la réduction de la latence Internet pour l'utilisateur final.  
Explication générale  
Cette question évalue la compréhension de la distribution de contenu à l'échelle mondiale et de l'utilisation d'un CDN. La meilleure solution utilise CloudFront car elle met en cache le contenu aux points de présence et utilise des caches régionaux pour minimiser la latence et la charge sur le serveur d'origine, tout en étant économique grâce à la réduction du trafic sortant et du volume de requêtes. Les autres options (réplication S3, VPN, PrivateLink) offrent une meilleure persistance ou une connectivité privée, mais ne placent pas le contenu mis en cache à proximité des utilisateurs du monde entier et n'optimisent pas la distribution publique de contenu.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 38Correct  
Une entreprise a besoin de provisionner des instances Amazon EC2 ininterrompues, à la demande, et de payer la capacité de calcul à la seconde. Quelle option d'achat d'instances EC2 répond à ces exigences ?  
A. Instances réservées

#### Explications

Les instances réservées (y compris les instances réservées standard et convertibles) offrent une réduction sur la facturation en échange d'un engagement de 1 ou 3 ans et sont conçues pour une utilisation stable et prévisible. Elles ne répondent pas au besoin de provisionner immédiatement de la capacité sans engagement à long terme ni à celui de ne payer que pour quelques secondes d'exécution à la demande.  
B. Exemples de repérage

#### Explications

Les instances Spot offrent un accès à la capacité EC2 disponible à des prix très avantageux, mais elles sont interruptibles : AWS peut récupérer cette capacité avec un court préavis. Du fait de leur possible interruption inopinée, elles ne conviennent pas aux charges de travail nécessitant une disponibilité continue.  
**Votre réponse est correcte**  
C. Instances à la demande

#### Explications

Les instances à la demande ne nécessitent aucun engagement à long terme, peuvent être lancées instantanément en cas de besoin et sont facturées à l'usage (facturation à la seconde pour les types d'instances compatibles). Cette combinaison de mise en service immédiate et de facturation à la seconde fait des instances à la demande le choix idéal pour répondre aux besoins de calcul continus et à la demande.  
D. Instances dédiées

#### Explications

Les instances dédiées s'exécutent sur du matériel dédié à un seul compte AWS et offrent une isolation physique, mais cette isolation ne concerne pas l'interruption des services ni la facturation à la seconde. Les instances dédiées peuvent également être achetées à la demande ou réservées ; l'option d'isolation physique ne correspond donc pas exactement à ce scénario.  
Explication générale  
Cette question évalue votre compréhension des modèles d'achat d'instances EC2. Les instances à la demande sont le choix idéal car elles permettent un provisionnement immédiat sans engagement à long terme et prennent en charge la facturation à l'usage (à la seconde pour les types d'instances compatibles), garantissant une capacité ininterrompue dès leur lancement. Les options Spot et Réservées ne répondent pas aux exigences de ce scénario : les instances Spot sont interruptibles et les instances Réservées nécessitent un engagement pluriannuel. Les instances dédiées répondent aux besoins de location et d'isolation, mais pas à ceux de provisionnement à la demande avec paiement à la seconde.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 39Correct  
Quelles sont les capacités qui constituent des avantages du cloud AWS ? (Choisissez deux réponses.)  
A. Échanger les dépenses variables contre des dépenses en capital.

#### Explications

Incorrect — cette option inverse l’avantage financier réel. AWS permet aux clients de convertir d’importantes dépenses d’investissement initiales (CapEx) en dépenses d’exploitation variables (OpEx) en provisionnant des ressources de calcul, de stockage et des services gérés à la demande ; il ne s’agit pas d’un échange entre dépenses variables et dépenses d’investissement.  
**Votre sélection est correcte**  
B. Déploiement mondial en quelques minutes.

#### Explications

Exact — AWS fournit une infrastructure mondiale (régions et zones de disponibilité) et un provisionnement programmatique (console, CLI, API, CloudFormation, IaC tiers) qui permettent aux organisations de provisionner et de répliquer rapidement des ressources dans différentes régions, permettant ainsi un déploiement et une distribution mondiaux rapides.  
C. Planifier les capacités avant les déploiements.

#### Explications

Incorrect — l'un des avantages du cloud est de réduire le besoin d'une planification de capacité exhaustive. Les instances à la demande, la mise à l'échelle automatique, les architectures sans serveur et les services gérés permettent une adaptation dynamique de la capacité en fonction de la demande.  
**Votre sélection est correcte**  
D. Tirer parti des économies d'échelle.

#### Explications

Exact — AWS opère à très grande échelle, ce qui permet de réaliser des économies d'échelle : les achats en gros, les opérations optimisées et l'infrastructure mutualisée réduisent les coûts unitaires et permettent à AWS de répercuter les gains d'efficacité sur ses clients grâce à des prix compétitifs et des services gérés.  
E. Réduire la dépendance à la connectivité réseau.

#### Explications

Incorrect : la connectivité réseau reste indispensable pour accéder aux services cloud. Des technologies comme AWS Direct Connect, Local Zones et Outposts peuvent réduire la latence ou étendre l’infrastructure, mais ne suppriment pas la dépendance au réseau pour l’accès au cloud.  
Explication générale  
Ce test évalue les concepts fondamentaux du cloud : les principaux avantages d’AWS incluent un déploiement mondial rapide et des économies d’échelle. Les réponses B et D sont correctes car l’infrastructure mondiale et les outils d’orchestration d’AWS permettent un provisionnement multirégional rapide, et son échelle génère des gains d’efficacité au niveau des coûts unitaires. Les réponses distractrices sont incorrectes : A présente une orientation erronée concernant les dépenses d’investissement (CapEx) et les dépenses d’exploitation (OpEx), C ignore les capacités de mise à l’échelle à la demande et E laisse entendre à tort que le cloud supprime le besoin de connectivité réseau.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 40Correct  
Une entreprise a migré sa charge de travail vers le cloud AWS. Elle souhaite optimiser ses ressources Amazon EC2 existantes. Quels services ou outils AWS offrent cette fonctionnalité ? (Choisissez deux réponses.)  
A. AWS Elastic Beanstalk

#### Explications

Elastic Beanstalk est une plateforme PaaS de déploiement et de gestion d'applications qui simplifie le provisionnement de l'infrastructure. Elle n'effectue pas d'analyse d'utilisation ni de recommandations de dimensionnement pour les instances EC2 existantes.  
**Votre sélection est correcte**  
B. AWS Cost Explorer

#### Explications

AWS Cost Explorer fournit des analyses de coûts et d'utilisation, notamment des rapports d'optimisation des ressources EC2 qui identifient les instances sous-utilisées ou inactives et suggèrent des actions (modification de la taille des instances, achat de réservations) pour réduire les coûts. Il analyse l'historique d'utilisation, mais ne modifie pas automatiquement les instances en cours d'exécution ; l'application des recommandations reste à la charge de l'utilisateur.  
C. Détective Amazon

#### Explications

Amazon Detective est un service d'investigation de sécurité et d'analyse des menaces qui permet d'explorer et de visualiser les résultats des analyses de sécurité. Il est indépendant de l'optimisation des performances ou des coûts des ressources EC2.  
**Votre sélection est correcte**  
D. AWS Compute Optimizer

#### Explications

AWS Compute Optimizer ingère les métriques CloudWatch et utilise l'apprentissage automatique pour produire des recommandations de dimensionnement appropriées (famille/taille d'instance optimale, recommandations de volume EBS et identification des ressources sur/sous-provisionnées) spécifiquement pour améliorer les performances et l'efficacité des coûts d'EC2.  
E. AWS Billing Conductor

#### Explications

AWS Billing Conductor permet de personnaliser la facturation et de répartir les coûts entre les comptes ou les unités commerciales. Il se concentre sur les structures de facturation et de refacturation plutôt que sur l'analyse de l'utilisation des instances ou la recommandation de modifications de la configuration des ressources.  
Explication générale  
Cette question vise à déterminer quels outils AWS fournissent des recommandations concrètes pour optimiser les ressources EC2 existantes. AWS Compute Optimizer propose un dimensionnement optimal et des recommandations de ressources basés sur l'apprentissage automatique et les indicateurs d'utilisation. AWS Cost Explorer, quant à lui, fournit des analyses de coûts et d'utilisation ainsi que des rapports de dimensionnement optimal mettant en évidence les opportunités de réduction des dépenses EC2. Les autres options sont axées sur le déploiement d'applications (Elastic Beanstalk), les investigations de sécurité (Amazon Detective) ou la facturation (Billing Conductor) et ne proposent donc pas de recommandations de dimensionnement optimal pour les ressources EC2.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 41Correct  
Quel type de charge de travail une entreprise devrait-elle exécuter sur des instances Spot Amazon EC2 ?  
A. Une charge de travail stable qui nécessite une configuration d'instance EC2 particulière pendant une longue période.

#### Explications

Incorrect. Les charges de travail stables nécessitant une configuration d'instance spécifique et une disponibilité constante ne conviennent pas aux instances Spot, car la capacité Spot peut être libérée par AWS très rapidement. Pour les charges de travail continues et de longue durée, privilégiez les instances à la demande, les instances réservées ou les plans d'économies afin de garantir la capacité et une tarification prévisible.  
**Votre réponse est correcte**  
B. Une charge de travail qui peut être interrompue et qui permet de contrôler les coûts

#### Explications

Exactement. Les instances Spot permettent d'accéder à la capacité EC2 disponible à des prix très avantageux, mais peuvent être interrompues lorsque AWS a besoin de cette capacité. Elles conviennent aux applications tolérant les interruptions, utilisant la sauvegarde de points de contrôle ou des architectures sans état, et peuvent être combinées avec les stratégies Spot Fleet/Auto Scaling pour optimiser les coûts et la disponibilité.  
C. Une charge de travail stable qui ne nécessite pas d'engagement à long terme

#### Explications

Incorrect. Même si une charge de travail ne nécessite pas d'engagement à long terme, les charges de travail stables requièrent une disponibilité constante. La nature interruptible des instances Spot les rend inadaptées ; les instances à la demande sont plus appropriées lorsque la stabilité est essentielle sans engagement à long terme.  
D. Une charge de travail qui ne peut être interrompue et qui permet de maîtriser les coûts

#### Explications

Incorrect. Les charges de travail ne tolérant aucune interruption doivent s'exécuter sur des instances stables (à la demande, réservées ou dédiées). Les instances Spot peuvent être arrêtées avec notification d'interruption et ne peuvent donc pas garantir la disponibilité continue requise par les applications non interruptibles.  
Explication générale  
Les instances EC2 Spot offrent un coût de calcul nettement inférieur grâce à l'utilisation de la capacité AWS inutilisée. Cette capacité étant récupérable, Spot est idéale pour les charges de travail tolérantes aux pannes et interruptibles (traitement par lots, traitement de données massives, CI/CD, services sans état) capables de gérer les notifications d'arrêt et la sauvegarde des points de contrôle. Pour les applications à régime permanent ou non interruptibles, les options À la demande ou Réservées sont plus appropriées.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 42Correct  
Que signifie le concept d'agilité dans le contexte du cloud computing AWS ? (Choisissez deux réponses.)  
**Votre sélection est correcte**  
A. La vitesse à laquelle les ressources AWS sont mises en œuvre

#### Explications

L'agilité désigne la capacité à provisionner et à modifier rapidement les ressources d'infrastructure et d'application. Sur AWS, cela est rendu possible par une infrastructure programmable à la demande (par exemple, les API, AWS CloudFormation, l'interface de ligne de commande AWS et les kits de développement logiciel) et des services qui réduisent les délais de provisionnement, permettant ainsi aux équipes de déployer des fonctionnalités et d'évoluer rapidement.  
B. La vitesse à laquelle AWS crée de nouvelles régions AWS

#### Explications

Le rythme auquel AWS ajoute des régions fait partie de sa stratégie d'infrastructure mondiale et n'est pas contrôlé par les clients ; il ne décrit pas la capacité d'un client à évoluer rapidement ou à itérer dans ses propres environnements.  
**Votre sélection est correcte**  
C. La capacité d'expérimenter rapidement

#### Explications

L'expérimentation rapide est un élément essentiel de l'agilité : le cloud permet aux équipes de créer des environnements de test/développement éphémères, d'itérer sur des idées à faible risque et à faible coût (en utilisant des services tels qu'Amazon EC2, AWS Lambda et CI/CD géré), et de valider rapidement les fonctionnalités pour accélérer l'innovation.  
D. L'élimination des capacités gaspillées

#### Explications

L’élimination des capacités inutiles relève avant tout de l’optimisation des coûts et de l’efficacité (pris en charge par le dimensionnement adéquat, les instances réservées/plans d’économies et la mise à l’échelle automatique). Bien qu’elle soit liée à de bonnes pratiques opérationnelles, elle ne définit pas à elle seule l’agilité, qui se concentre sur la rapidité et la capacité d’itération.  
E. Le faible coût d'accès au cloud computing

#### Explications

Le faible coût d'accès est un avantage économique du cloud (paiement à l'usage et réduction des dépenses d'investissement). Il facilite le lancement de projets, mais ne garantit pas à lui seul la rapidité et la flexibilité opérationnelles que l'on associe à l'« agilité ».  
Explication générale  
L'agilité sur AWS désigne la capacité opérationnelle à agir rapidement : provisionner des ressources à la demande et itérer ou expérimenter rapidement. Les réponses A et C illustrent cette notion en abordant le provisionnement rapide et l'expérimentation accélérée, rendus possibles par les API AWS, l'automatisation et les services à la demande. Les autres options décrivent l'extension de l'infrastructure AWS ou les gains de coûts/d'efficacité, qui sont liés à la définition de l'agilité, mais ne la constituent pas au cœur même de cette notion.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 43Incorrect  
Une entreprise souhaite maintenir un débit de bande passante optimal et offrir une expérience réseau plus stable que les connexions Internet publiques. Quel service AWS devrait-elle choisir ?  
**Votre réponse est incorrecte**  
A. VPN AWS

#### Explications

Les VPN de site à site AWS et les VPN clients AWS créent des tunnels chiffrés IPsec sur l'Internet public. Bien qu'ils assurent une connectivité sécurisée, ils sont soumis aux variations d'Internet (latence et gigue) et n'offrent ni chemin privé dédié ni bande passante garantie. Ils ne sont donc pas optimaux lorsqu'une connexion stable et à haut débit est requise.  
**Bonne réponse**  
B. AWS Direct Connect

#### Explications

AWS Direct Connect fournit une connexion réseau physique dédiée entre votre réseau sur site et AWS. Il réduit le nombre de sauts Internet publics, offre des options de débit plus élevées et plus constantes (1 Gbit/s, 10 Gbit/s et offres partenaires jusqu'à 100 Gbit/s), prend en charge les interfaces virtuelles (publiques/privées) et le routage BGP, et peut réduire les coûts de transfert de données, ce qui en fait le choix idéal pour une connectivité stable à haut débit.  
C. Amazon Connect

#### Explications

Amazon Connect est un service de centre de contact basé sur le cloud pour la gestion des relations clients. Il est indépendant de l'établissement de liaisons réseau privées ou de l'amélioration de la bande passante générale de transfert de données entre les environnements sur site et AWS.  
D. Amazon CloudFront

#### Explications

Amazon CloudFront est un réseau de diffusion de contenu mondial qui accélère la distribution de contenu web via des points de présence. Il améliore la latence pour la distribution de contenu aux utilisateurs finaux, mais ne fournit pas de liaison réseau privée et dédiée ni de bande passante constante de niveau entreprise entre les réseaux sur site et AWS.  
Explication générale  
Cette question évalue les connaissances relatives aux options de connectivité AWS pour des liaisons prévisibles et à haut débit vers AWS. Une connexion physique dédiée (AWS Direct Connect) minimise la variabilité d'Internet, prend en charge les liaisons à large bande passante et les interfaces virtuelles, et constitue donc la solution appropriée. Les VPN fonctionnent sur l'Internet public et restent sujets à des variations ; CloudFront et Amazon Connect sont respectivement destinés à la diffusion de contenu et aux centres de contact, et ne fournissent pas de connectivité WAN privée.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 44Correct  
Une entreprise souhaite permettre aux utilisateurs de s'authentifier et d'autoriser plusieurs comptes AWS à l'aide d'un seul identifiant. Quel service ou ressource AWS répond à ce besoin ?  
A. Organisations AWS

#### Explications

Il offre une gestion centralisée des comptes, une facturation consolidée et une gouvernance basée sur des politiques (par exemple, des politiques de contrôle des services). Il ne fonctionne pas comme fournisseur d'identité et ne propose pas d'authentification unique pour les utilisateurs de différents comptes ; l'authentification reste distincte, sauf si elle est intégrée à une solution SSO dédiée.  
B. Utilisateur IAM

#### Explications

Représente une identité limitée à un seul compte AWS. Les utilisateurs IAM ne fournissent pas de mécanisme d'authentification centralisé et inter-comptes ; l'accès inter-comptes est généralement réalisé en créant des rôles IAM et en utilisant l'assuming de rôles ou en utilisant un fournisseur d'identité fédéré pour l'authentification unique (SSO).  
**Votre réponse est correcte**  
C. AWS IAM Identity Center (AWS Single Sign-On)

#### Explications

Le service d'authentification unique centralisé d'AWS. Il peut utiliser son référentiel d'identités intégré ou se connecter à des fournisseurs d'identité externes (SAML 2.0/OIDC), prend en charge le provisionnement SCIM, s'intègre à AWS Organizations et utilise des ensembles d'autorisations pour accorder l'accès à plusieurs comptes AWS sans créer d'utilisateurs IAM par compte.  
D. Tour de contrôle AWS

#### Explications

Ce module automatise la configuration d'une zone d'atterrissage multi-comptes et applique des mécanismes de gouvernance. Il se concentre sur le provisionnement et la gouvernance des comptes, et non sur la fourniture d'identité, même s'il peut activer ou configurer le service d'authentification unique centralisée au sein de la zone d'atterrissage.  
Explication générale  
Cette question évalue votre compréhension de la manière de fournir un seul ensemble d'identifiants pour accéder à plusieurs comptes AWS. La solution appropriée est le service d'authentification unique (SSO) AWS, qui centralise l'authentification, prend en charge les fournisseurs d'identité externes et répartit les autorisations entre les comptes. Les outils de gestion de comptes (Organisations, Control Tower) gèrent les comptes et la gouvernance, mais ne fournissent pas eux-mêmes l'authentification unique. De plus, les utilisateurs IAM sont des identités propres à chaque compte et non une solution d'authentification centralisée.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 45Correct  
Un développeur souhaite déployer rapidement une application sur AWS sans créer manuellement les ressources nécessaires. Quel service AWS répond à ces exigences ?  
A. Amazon EC2

#### Explications

Incorrect. Amazon EC2 fournit des machines virtuelles (calcul) brutes que vous devez provisionner, configurer, mettre à jour et intégrer vous-même aux équilibreurs de charge ou à la mise à l'échelle automatique. Il s'agit d'une infrastructure en tant que service (IaaS) qui ne crée ni n'orchestre automatiquement l'ensemble de la pile applicative pour un développeur souhaitant un déploiement en une seule étape.  
**Votre réponse est correcte**  
B. AWS Elastic Beanstalk

#### Explications

Exactement. Ce service agit au niveau de la plateforme et orchestre les ressources sous-jacentes (instances EC2, équilibreurs de charge, mise à l'échelle automatique et surveillance) lors du déploiement d'un artefact ou d'un conteneur d'application, permettant ainsi aux développeurs de déployer sans avoir à créer et à configurer manuellement les composants d'infrastructure.  
C. AWS CodeBuild

#### Explications

Incorrect. AWS CodeBuild est un service de génération géré permettant de compiler le code source, d'exécuter des tests et de produire des artefacts de génération dans le cadre d'un pipeline d'intégration continue. Il ne provisionne ni ne gère l'environnement d'exécution de l'application ni l'infrastructure sous-jacente nécessaire au déploiement.  
D. Amazon Personnaliser

#### Explications

Incorrect. Amazon Personalize est un service d'apprentissage automatique permettant de générer des recommandations personnalisées et n'a aucun lien avec le déploiement d'applications ou l'infrastructure de provisionnement.  
Explication générale  
Cette question évalue les connaissances relatives aux services qui automatisent le déploiement d'applications et la mise en service de l'infrastructure. Le service de plateforme idéal orchestre le calcul, l'équilibrage de charge, la mise à l'échelle et la surveillance de l'état des ressources, permettant ainsi aux développeurs de déployer des applications à l'aide de code ou d'un conteneur. Les autres options nécessitent soit une gestion manuelle de l'infrastructure (EC2), soit se concentrent sur les tâches d'intégration continue et de compilation (CodeBuild), soit sont des services d'apprentissage automatique sans rapport avec le sujet (Personalize).  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 46Correct  
Une entreprise possède une instance Amazon EC2 dans un sous-réseau privé. Elle souhaite établir une connexion Internet pour télécharger les mises à jour du système d'exploitation tout en empêchant le trafic Internet d'accéder à l'instance EC2. Quel service géré AWS permet cela ?  
A. Point de terminaison VPC

#### Explications

Les points de terminaison VPC (passerelles pour S3/DynamoDB et interfaces) offrent un accès privé et spécifique au service, restant au sein du réseau AWS. Ils ne constituent pas un point de sortie général vers l'Internet public et ne peuvent donc pas être utilisés pour télécharger des mises à jour système arbitraires depuis des dépôts de paquets Internet, sauf si ces dépôts sont exposés via un service de point de terminaison.  
**Votre réponse est correcte**  
B. Passerelle NAT

#### Explications

Une passerelle NAT est un service AWS géré et hautement disponible qui fournit un accès Internet IPv4 sortant uniquement aux ressources des sous-réseaux privés. Placée dans un sous-réseau public, elle utilise une adresse IP élastique pour le trafic sortant et est référencée par la table de routage du sous-réseau privé. Comme elle ne traduit et ne transfère que les connexions sortantes, elle empêche les connexions entrantes non sollicitées depuis Internet vers l'instance, ce qui en fait la solution idéale pour télécharger les mises à jour du système d'exploitation depuis Internet tout en bloquant l'accès entrant.  
C. Lien privé Amazon

#### Explications

AWS PrivateLink (points de terminaison d'interface) expose des services spécifiques via des interfaces réseau privées au sein de votre VPC, évitant ainsi que le trafic ne transite par l'Internet public. Ce service permet d'accéder aux services pris en charge de manière privée, et non de fournir une sortie Internet générale pour les instances. Par conséquent, il ne répond pas à l'exigence de télécharger des mises à jour depuis n'importe quel point de terminaison Internet, sauf si la source de mise à jour est elle-même accessible via PrivateLink.  
D. Interconnexion VPC

#### Explications

Le peering VPC établit une connexion réseau privée entre deux VPC pour le routage direct du trafic entre eux. Il ne fournit pas d'accès à Internet, n'est pas transitif et ne peut donc pas être utilisé pour permettre aux instances de sous-réseau privé d'accéder à des référentiels de mises à jour hébergés sur Internet.  
Explication générale  
Ce scénario requiert un mécanisme de sortie géré permettant aux instances d'un sous-réseau privé d'établir des connexions sortantes vers l'Internet public tout en bloquant les connexions entrantes depuis Internet. Une passerelle NAT remplit précisément cette fonction : une sortie IPv4 uniquement via une adresse IP élastique et une configuration de table de routage, sans exposer les instances au trafic entrant non sollicité. Les points de terminaison VPC/PrivateLink et le peering VPC assurent une connectivité privée à des services spécifiques ou entre VPC, mais ne constituent pas des solutions de sortie Internet générales (pour la sortie IPv6, une passerelle Internet dédiée à la sortie serait utilisée).  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 47Correct  
Une entreprise souhaite recevoir une notification lorsqu'un certain seuil de coût AWS est atteint. Quels services ou outils AWS peut-elle utiliser pour répondre à cette exigence ? (Choisissez deux réponses.)  
A. Amazon Simple Queue Service (Amazon SQS)

#### Explications

Amazon SQS est un service de file d'attente de messages entièrement géré, utilisé pour découpler et mettre en mémoire tampon les composants d'une application. Il ne propose pas de suivi des coûts ni de fonctionnalités d'alerte budgétaire ou de seuil ; bien que SQS puisse recevoir des notifications lorsqu'un autre service lui achemine des messages, il ne peut pas évaluer les indicateurs de facturation ni déclencher d'alertes de coût.  
**Votre sélection est correcte**  
B. Budgets AWS

#### Explications

AWS Budgets est conçu spécifiquement pour la maîtrise des coûts et de l'utilisation : vous pouvez créer des budgets de coûts et d'utilisation, définir des seuils (en pourcentage ou en montant) réels ou prévisionnels, et configurer des notifications (par e-mail ou via Amazon SNS) lorsque ces seuils sont dépassés. Budgets prend également en charge les actions budgétaires automatisées pour certaines réponses du compte.  
C. Explorateur de coûts

#### Explications

Cost Explorer est un outil d'analyse et de visualisation permettant d'examiner les coûts et l'utilisation historiques et prévisionnels. Il aide à identifier les tendances et à attribuer les coûts, mais ne génère pas nativement d'alertes basées sur des seuils ni n'envoie de notifications lorsqu'une limite de dépenses est atteinte.  
**Votre sélection est correcte**  
D. Amazon CloudWatch

#### Explications

Amazon CloudWatch expose les indicateurs de facturation/estimations (disponibles depuis le compte de facturation, pour la région us-east-1) afin que vous puissiez créer des alarmes basées sur ces indicateurs et configurer l'envoi de notifications via Amazon SNS. Vous pouvez ainsi surveiller les indicateurs liés aux coûts et recevoir des alertes en cas de dépassement des seuils de coûts.  
E. Rapport sur les coûts et l'utilisation d'AWS

#### Explications

Le rapport AWS sur les coûts et l'utilisation fournit des données de facturation détaillées, poste par poste, vers un compartiment Amazon S3 pour analyse et intégration avec les outils de BI. Il s'agit d'un mécanisme de reporting/exportation qui ne fournit pas d'alertes en temps réel ni de notifications de seuil.  
Explication générale  
Cette question porte sur les options de surveillance et de notification des dépenses AWS. AWS Budgets et Amazon CloudWatch sont les solutions appropriées : Budgets crée des seuils de coût/utilisation et des notifications (y compris des alertes basées sur les prévisions), tandis que CloudWatch peut générer des alarmes sur les indicateurs de facturation et envoyer des notifications via SNS. Les autres services (SQS, Cost Explorer et le rapport sur les coûts et l'utilisation) proposent respectivement la mise en file d'attente des messages, l'analyse des coûts ou l'exportation détaillée des factures, mais ne génèrent pas d'alertes basées sur des seuils.  
Domaine  
Domaine 4 : Facturation, tarification et assistance  
Question 48Correct  
Une entreprise utilise Amazon DynamoDB. Quelle tâche relève de la responsabilité de l'entreprise, selon le modèle de responsabilité partagée d'AWS ?  
A. Mettre à jour le système d'exploitation.

#### Explications

Incorrect. DynamoDB est un service entièrement géré : AWS exploite et met à jour l’infrastructure sous-jacente et les systèmes d’exploitation hôtes pour les services de bases de données gérés. Les clients n’ont pas à gérer les correctifs au niveau du système d’exploitation pour DynamoDB.  
B. Provisionner les hôtes.

#### Explications

Incorrect. Pour DynamoDB, AWS provisionne, exploite et met à l'échelle les hôtes et l'infrastructure sous-jacents. Les clients configurent les paramètres des tables (mode de capacité, débit, index) mais ne provisionnent ni ne gèrent les ressources physiques/hôtes.  
**Votre réponse est correcte**  
C. Gérer les autorisations d'accès à la base de données.

#### Explications

Exact. Les clients sont responsables du contrôle d'accès et de la sécurité des données dans le cloud. Cela inclut la configuration de l'authentification et de l'autorisation à l'aide des politiques et des rôles AWS Identity and Access Management (IAM), des autorisations basées sur les ressources sur DynamoDB, des contrôles d'accès précis et la gestion des clés de chiffrement (par exemple, les CMK gérées par le client dans AWS KMS), le cas échéant.  
D. Sécuriser le système d'exploitation.

#### Explications

Incorrect. La sécurité et la maintenance du système d'exploitation et de l'infrastructure sous-jacents relèvent de la responsabilité d'AWS pour les services entièrement gérés. Les clients sont responsables de la sécurité de leurs données, de leurs politiques d'accès et de la configuration de leurs services.  
Explication générale  
Cette question teste le modèle de responsabilité partagée d'AWS. AWS est responsable de la sécurité du cloud (hôtes physiques, hyperviseur et système d'exploitation/infrastructure sous-jacente) pour les services entièrement gérés comme DynamoDB, tandis que les clients sont responsables de la sécurité dans le cloud : données, contrôle d'accès et configuration. La gestion des autorisations d'accès à la base de données (authentification/autorisation, politiques IAM, autorisations de ressources et gestion des clés KMS) incombe au client, ce qui rend la réponse C correcte ; les autres options décrivent des tâches d'infrastructure ou de système d'exploitation gérées par AWS pour DynamoDB.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 49Correct  
Quel avantage du cloud computing permet aux utilisateurs d'adapter les ressources à la hausse ou à la baisse en fonction de la charge supportée par une application ?  
A. Devenez international en quelques minutes

#### Explications

Ce terme décrit un déploiement géographique rapide et une distribution à faible latence (par exemple, un déploiement dans plusieurs régions/zones de disponibilité AWS, à l'aide d'Amazon CloudFront). Cette fonctionnalité concerne la portée et la distribution mondiales, et non l'ajustement automatique de la capacité en fonction de la charge.  
**Votre réponse est correcte**  
B. Cessez de deviner la capacité

#### Explications

L'élasticité désigne la capacité du cloud à ajuster en temps réel ses ressources de calcul et autres ressources en fonction de la demande. Parmi les services AWS qui permettent ce comportement, on trouve Amazon EC2 Auto Scaling, AWS Auto Scaling, Elastic Load Balancing et les options sans serveur comme AWS Lambda, qui empêchent le surdimensionnement ou le sous-dimensionnement.  
C. Bénéficier d'économies d'échelle massives

#### Explications

Ce terme désigne les avantages de coûts obtenus lorsqu'un fournisseur opère à grande échelle (coûts unitaires réduits répercutés sur les clients). Bien qu'il influe sur la tarification, il ne décrit pas l'ajustement à la demande de la capacité des ressources d'une application en fonction de la charge.  
D. Échanger les charges fixes contre des charges variables

#### Explications

Ce document décrit le modèle financier de conversion des dépenses d'investissement en dépenses opérationnelles (paiement à l'usage). Il explique la flexibilité de facturation, mais pas le mécanisme opérationnel d'ajustement automatique des ressources.  
Explication générale  
Le concept testé est l'élasticité : la capacité du cloud à ajuster dynamiquement ses ressources pour répondre à la demande des applications. Le choix judicieux met en avant cette gestion dynamique des ressources, rendue possible par des services tels qu'AWS Auto Scaling, les groupes EC2 Auto Scaling, Elastic Load Balancing et le calcul sans serveur. D'autres options décrivent des avantages connexes (déploiement global, économies d'échelle ou modèles de facturation), mais n'expliquent pas précisément la mise à l'échelle automatique en fonction de la charge.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 50Correct  
Une entreprise utilise les services et outils de sécurité AWS. Elle a besoin d'un service pour gérer les alertes de sécurité et les centraliser sur un tableau de bord unique. Quel service AWS doit-elle utiliser pour répondre à ces besoins ?  
A. Amazon GuardDuty

#### Explications

GuardDuty est un service de détection des menaces AWS qui analyse en continu l'activité des comptes et du réseau AWS afin de détecter les menaces potentielles. Il se concentre sur la détection des menaces liées à des activités telles que la reconnaissance, la compromission d'instances et les appels d'API anormaux, mais ne constitue pas un tableau de bord centralisé d'agrégation des alertes et de conformité pour plusieurs services et comptes de sécurité AWS.  
B. Inspecteur Amazon

#### Explications

Inspector effectue des évaluations de sécurité automatisées des ressources de calcul et des images de conteneurs afin d'identifier les vulnérabilités et les écarts par rapport aux bonnes pratiques. Il génère des rapports d'évaluation pour la correction des failles, mais n'est pas conçu pour agréger et présenter les alertes de sécurité provenant de différents services de sécurité AWS sur un tableau de bord unique et centralisé.  
C. Amazon Macie

#### Explications

Macie est un service de sécurité et de confidentialité des données qui détecte, classe et protège les données sensibles stockées sur Amazon S3 grâce à l'apprentissage automatique. Bien qu'il génère des alertes concernant l'exposition des données ou l'accès à des données sensibles, son objectif est la détection et la protection des données, et non la fourniture d'un tableau de bord d'alertes de sécurité agrégé et multiservice.  
**Votre réponse est correcte**  
D. AWS Security Hub

#### Explications

AWS Security Hub centralise, normalise et hiérarchise les résultats provenant de plusieurs services de sécurité AWS (par exemple, GuardDuty, Inspector, Macie) et d'outils tiers. Il offre un tableau de bord unifié et inter-comptes, ainsi que des contrôles de conformité automatisés (normes telles que CIS et les bonnes pratiques de sécurité fondamentales d'AWS). Cette centralisation et cette normalisation des résultats en font le service idéal pour organiser les alertes de sécurité sur un tableau de bord unique.  
Explication générale  
Cette question évalue vos connaissances des outils de sécurité AWS et du service qui centralise les alertes de sécurité. AWS Security Hub est le service qui agrège et normalise les résultats provenant de plusieurs services AWS et produits tiers, fournit un tableau de bord unifié et prend en charge les normes de conformité automatisées ; c’est donc le bon choix. Les autres services (GuardDuty, Inspector, Macie) génèrent chacun des résultats spécifiques à leur domaine (détection des menaces, évaluation des vulnérabilités et exploration des données), mais ne constituent pas des tableaux de bord inter-services ; ils transmettent généralement les résultats à Security Hub pour une gestion centralisée.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 51Correct  
Quel service AWS est un service de base de données NoSQL entièrement géré ?  
A. Amazon RDS

#### Explications

Incorrect — Amazon RDS est un service de base de données relationnelle géré qui propose des moteurs SQL (MySQL, PostgreSQL, Oracle, SQL Server, MariaDB). Il impose des schémas et des transactions ACID ; il ne s’agit donc pas d’une base de données NoSQL de type clé-valeur ou document.  
B. Amazon Redshift

#### Explications

Incorrect — Amazon Redshift est un entrepôt de données colonnaire à l'échelle du pétaoctet, optimisé pour les requêtes analytiques (OLAP) et le traitement SQL complexe. Il n'est pas conçu pour les charges de travail NoSQL clé-valeur ou documentaire à faible latence.  
**Votre réponse est correcte**  
C. Amazon DynamoDB

#### Explications

Exact — DynamoDB est le service de base de données NoSQL d'AWS prenant en charge les modèles de données clé-valeur et document. Il offre une mise à l'échelle automatique, une capacité à la demande ou provisionnée, une latence inférieure à 10 millisecondes, des tables globales pour la réplication multirégionale, le chiffrement au repos, la sauvegarde et la restauration, ainsi que des intégrations avec IAM, DAX et DynamoDB Streams, ce qui correspond aux exigences NoSQL de la question.  
D. Amazon Aurora

#### Explications

Incorrect — Amazon Aurora est un moteur de base de données relationnelle haute performance, compatible avec MySQL et PostgreSQL, conçu pour le cloud. Il offre des fonctionnalités relationnelles et un comportement transactionnel robuste (ACID), et non une sémantique NoSQL.  
Explication générale  
La question porte sur la distinction entre les types de bases de données AWS. La bonne réponse est DynamoDB, car il s'agit d'une base de données NoSQL (clé-valeur et document) entièrement gérée, offrant une faible latence, une mise à l'échelle automatique et un fonctionnement sans serveur. Les autres options sont les bases de données relationnelles (RDS, Aurora) ou les services d'analyse/d'entrepôt de données (Redshift), qui ne présentent pas les caractéristiques NoSQL requises ici.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 52Correct  
Une entreprise utilise un service tiers pour sauvegarder 10 To de données sur une bibliothèque de bandes. Son serveur de sauvegarde local est saturé. L'entreprise souhaite utiliser les services AWS pour ses sauvegardes sans modifier ses processus de sauvegarde existants. Quel service AWS doit-elle choisir pour répondre à ces exigences ?  
A. Amazon Elastic Block Store (Amazon EBS)

#### Explications

Amazon EBS fournit des volumes de stockage au niveau bloc pour les instances EC2, destinés au stockage actif (volumes racine et de données). Il ne propose ni bibliothèque de bandes virtuelles ni point de terminaison iSCSI pour les logiciels de sauvegarde sur site ; par conséquent, il est impossible de poursuivre les flux de travail de sauvegarde sur bande existants sans modifications importantes.  
**Votre réponse est correcte**  
B. Passerelle de stockage AWS

#### Explications

AWS Storage Gateway (Tape Gateway) met à disposition une bibliothèque de bandes virtuelles (VTL) via iSCSI pour les applications de sauvegarde existantes. Les bandes virtuelles sont stockées dans Amazon S3 et peuvent être archivées dans Amazon S3 Glacier/Deep Archive. Cette solution préserve les flux de travail de sauvegarde existants et décharge le stockage physique des bandes et la capacité des serveurs de sauvegarde sur site vers AWS, tout en prenant en charge le chiffrement, les politiques de cycle de vie et une intégration transparente avec les logiciels de sauvegarde.  
C. Amazon Elastic Container Service (Amazon ECS)

#### Explications

Amazon ECS est un service d'orchestration de conteneurs permettant d'exécuter et de gérer des applications conteneurisées. Il ne propose pas de points de terminaison de stockage bloc/objet ni d'interface VTL pour les logiciels de sauvegarde sur site ; il ne constitue donc pas une solution de remplacement directe pour les sauvegardes sur bande.  
D. AWS Lambda

#### Explications

AWS Lambda est un service de calcul sans serveur conçu pour les fonctions événementielles de courte durée, avec un stockage éphémère et un temps d'exécution limités. Il n'est pas conçu pour servir de stockage de sauvegarde persistant ni pour exposer des points de terminaison de stockage compatibles avec les flux de travail des bibliothèques de bandes.  
Explication générale  
Cette question teste les connaissances en matière d'intégration de stockage hybride : la bonne réponse est AWS Storage Gateway (Tape Gateway), car cette solution expose une bibliothèque de bandes virtuelles aux applications de sauvegarde sur site et stocke les bandes virtuelles dans S3/Glacier, permettant ainsi la continuité des flux de travail existants et levant les contraintes de stockage sur site. Les autres options (EBS, ECS, Lambda) correspondent respectivement au stockage par blocs EC2, à l'orchestration de conteneurs et au calcul sans serveur ; aucune ne propose d'interface de bande VTL/iSCSI pour les logiciels de sauvegarde traditionnels.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 53Correct  
Un spécialiste du cloud souhaite utiliser un service DNS hautement disponible et évolutif pour sa charge de travail AWS. Quel service AWS répond à cette exigence ?  
**Votre réponse est correcte**  
A. Route 53 d'Amazonie

#### Explications

Amazon Route 53 est le service DNS faisant autorité d'AWS, conçu pour une résolution DNS mondiale et hautement disponible. Il utilise un réseau anycast distribué à l'échelle mondiale, prend en charge les contrôles d'intégrité et le basculement, et propose des politiques de routage avancées (pondérées, basées sur la latence et la géolocalisation) afin que le trafic puisse être dirigé et mis à l'échelle de manière fiable sur l'ensemble des points de terminaison. Il s'intègre aux autres services AWS et offre DNSSEC ainsi qu'une disponibilité garantie par SLA, ce qui en fait le choix idéal pour un DNS évolutif et hautement disponible.  
B. Voile lumineuse Amazon

#### Explications

Amazon Lightsail est une plateforme d'hébergement VPS et d'applications simplifiée qui inclut la gestion de base des zones DNS pour les petits déploiements. Cependant, elle ne propose ni le réseau DNS anycast global, ni les politiques de routage avancées, ni le basculement automatique basé sur les contrôles d'intégrité, ni le SLA de niveau entreprise offert par Route 53\. Par conséquent, elle n'est pas recommandée pour une solution DNS hautement disponible et évolutive.  
C. Hébergement AWS Amplify

#### Explications

AWS Amplify Hosting est un service géré permettant de créer, déployer et héberger des applications web et mobiles front-end avec CI/CD. Bien qu'il permette de configurer des domaines personnalisés pour les applications hébergées, il ne s'agit pas d'un service DNS généraliste et il s'appuie sur les services DNS d'AWS (ou sur le fournisseur DNS du domaine) pour la résolution DNS faisant autorité et les fonctionnalités de routage avancées.  
D. Amazon S3

#### Explications

Amazon S3 est un service de stockage d'objets permettant de stocker et de diffuser des données (y compris les ressources statiques de sites web). Il ne propose pas de résolution DNS faisant autorité ni de fonctionnalités de routage DNS ; le mappage de domaine personnalisé pour les sites hébergés sur S3 est réalisé en combinant S3 avec des services DNS (par exemple, Route 53\) et, éventuellement, CloudFront pour une distribution mondiale.  
Explication générale  
Cette question teste les connaissances relatives aux services AWS fournissant des fonctionnalités DNS. Amazon Route 53 est le service DNS dédié, hautement disponible et évolutif d'AWS, offrant l'anycast global, des contrôles d'intégrité et plusieurs politiques de routage — des fonctionnalités requises par ce scénario. Les autres options sont des services de calcul, d'hébergement ou de stockage qui proposent soit uniquement des fonctionnalités de base pour la gestion des noms de domaine, soit s'appuient sur un service DNS pour une résolution faisant autorité et une gestion avancée du trafic.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 54Correct  
Une entreprise prévoit de lancer un site e-commerce contenant de nombreuses images pour son catalogue de produits. Elle souhaite maîtriser les coûts d'exploitation du site en respectant un budget précis. Quel service ou outil AWS devrait-elle utiliser pour suivre ces coûts ?  
**Votre réponse est correcte**  
A. AWS Cost Explorer

#### Explications

Cost Explorer est l'outil AWS idéal pour l'analyse et le suivi continus des coûts. Il fournit des rapports interactifs et des visualisations des coûts et de l'utilisation, permet de filtrer par service, compte, étiquette et période, et offre des fonctionnalités de prévision et d'analyse des tendances pour vous aider à respecter votre budget. De plus, il s'intègre à AWS Budgets et aux rapports de coûts et d'utilisation pour la gouvernance et les alertes.  
B. Kits de développement logiciel AWS

#### Explications

Incorrect. Les kits de développement logiciel (SDK) AWS sont des bibliothèques spécifiques à un langage permettant d'appeler les API des services AWS par programmation. Ils ne fournissent pas de tableau de bord de suivi des coûts ni de rapports budgétaires intégrés (bien qu'ils puissent être utilisés pour appeler les API Cost Explorer ou Budgets).  
C. Générateur d'images EC2

#### Explications

Incorrect. EC2 Image Builder automatise la création et la maintenance des images de machines et de conteneurs pour EC2 et les services associés ; il n’a aucun lien avec le suivi des coûts ou le suivi budgétaire.  
D. AWS CloudFormation

#### Explications

Incorrect. AWS CloudFormation gère et provisionne l'infrastructure sous forme de code. Bien qu'il contrôle la création des ressources, il n'analyse pas les coûts et n'en fournit pas de rapports ; la visibilité des coûts nécessite des outils comme Cost Explorer ou AWS Budgets.  
Explication générale  
Cette question porte sur la gestion des coûts AWS. Cost Explorer est la solution idéale, car cet outil est conçu pour analyser, visualiser et prévoir les dépenses AWS, permettant ainsi aux équipes de suivre les coûts en cours et d'identifier les opportunités d'optimisation. Les autres options concernent l'accès aux SDK/API, la création d'images ou le provisionnement d'infrastructure, et ne proposent pas de fonctionnalités de suivi des coûts (AWS Budgets serait le service complémentaire permettant de configurer des alertes).  
Domaine  
Domaine 4 : Facturation, tarification et assistance  
Question 55Incorrect  
Une entreprise souhaite gérer la sécurité de connexion de ses employés. Elle doit créer des comptes utilisateurs et gérer de manière centralisée leurs accès à l'ensemble de ses comptes et applications AWS. Quel service AWS répond à ces besoins ?  
A. Responsable d'audit AWS

#### Explications

AWS Audit Manager automatise la collecte de preuves, associe les contrôles aux référentiels et facilite la génération de rapports d'audit et de conformité. Il ne s'agit pas d'un service de gestion des identités et des accès et il ne propose pas l'authentification des utilisateurs, l'authentification unique (SSO) ni le provisionnement des effectifs entre comptes.  
B. Amazon Cognito

#### Explications

Amazon Cognito assure l'authentification et la gestion des groupes d'utilisateurs/d'identités pour les utilisateurs d'applications (généralement les identités en contact avec les clients), et prend en charge la fédération sociale et OIDC/SAML pour les applications. Il n'est pas conçu pour provisionner et gérer de manière centralisée l'accès des employés sur plusieurs comptes AWS ni pour fournir une authentification unique (SSO) via la console AWS liée à AWS Organizations.  
**Votre réponse est incorrecte**  
C. AWS Security Hub

#### Explications

AWS Security Hub centralise les résultats des analyses de sécurité, exécute des contrôles de sécurité automatisés et offre une vue centralisée de la posture de sécurité. Il ne prend pas en charge la gestion des identités, l'authentification ni la gestion centralisée des connexions des employés.  
**Bonne réponse**  
D. AWS IAM Identity Center (AWS Single Sign-On)

#### Explications

IAM Identity Center (successeur d'AWS Single Sign-On) centralise la gestion des identités et des accès des employés : il s'intègre à AWS Organizations pour attribuer des ensembles d'autorisations aux comptes, attribue des rôles IAM temporaires pour l'authentification unique (SSO), prend en charge les fournisseurs d'identité externes via SAML/OIDC et le provisionnement SCIM, et applique des contrôles d'authentification (dont l'authentification multifacteur). Ces fonctionnalités permettent une sécurité de connexion et une gestion des accès centralisées pour les comptes AWS et les applications intégrées.  
Explication générale  
Cette question évalue les connaissances en matière de gestion centralisée des identités et des accès des employés. AWS IAM Identity Center est le service approprié, car il est conçu spécifiquement pour créer et gérer de manière centralisée les utilisateurs (ou connecter des fournisseurs d'identité externes), attribuer des ensembles d'autorisations entre les comptes AWS (via AWS Organizations) et fournir une authentification unique à la console AWS et aux applications SAML/OIDC. Les autres options sont axées sur la production de rapports de conformité (Audit Manager), l'authentification des utilisateurs d'applications (Cognito) ou l'agrégation des résultats de sécurité (Security Hub) et ne répondent donc pas aux exigences de connexion centralisée des employés et d'accès inter-comptes.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 56Ignoré  
Lequel des éléments suivants fait office de pare-feu au niveau de l'instance pour contrôler les accès entrants et sortants ?  
A. Liste de contrôle d'accès au réseau

#### Explications

Les listes de contrôle d'accès réseau (ACL) sont appliquées à la limite du sous-réseau et sont sans état : chaque paquet est évalué par rapport aux règles ACL lors de son entrée ou de sa sortie du sous-réseau. Étant donné qu'elles sont limitées au sous-réseau (et non associées à des interfaces réseau réseau ou à des instances individuelles) et qu'elles nécessitent une autorisation/un refus explicite dans les deux sens, elles ne fonctionnent pas comme un pare-feu au niveau de l'instance.  
**Bonne réponse**  
B. Groupes de sécurité

#### Explications

Les groupes de sécurité sont associés aux interfaces réseau et fonctionnent au niveau de l'instance. Ils sont à état (le trafic de retour est automatiquement autorisé pour une connexion établie), utilisent uniquement des règles d'autorisation et sont évalués par instance/interface réseau, ce qui en fait le contrôle approprié pour les accès entrants et sortants aux instances EC2 individuelles.  
C. Conseiller de confiance AWS

#### Explications

AWS Trusted Advisor est un service de recommandations de bonnes pratiques qui analyse les ressources du compte et suggère des optimisations en matière de coûts, de performances, de sécurité et de tolérance aux pannes. Il ne contrôle ni ne filtre le trafic réseau et ne peut donc pas faire office de pare-feu.  
D. Passerelles privées virtuelles

#### Explications

Une passerelle privée virtuelle (VPG) est un point de terminaison VPN côté VPC utilisé pour connecter un VPC aux réseaux sur site (ou à Direct Connect). Elle assure le routage et la connectivité chiffrée à la périphérie du VPC, mais ne constitue pas un mécanisme de filtrage du trafic par instance.  
Explication générale  
Cette question évalue la compréhension des contrôles réseau AWS. La bonne réponse est la structure associée aux instances/ENI qui applique des règles de trafic avec état. Les listes de contrôle d'accès réseau (ACL) fonctionnent au niveau du sous-réseau et sont sans état, Trusted Advisor est un service de conseil et une passerelle privée virtuelle gère la connectivité VPN ; aucun de ces éléments ne fournit de pare-feu au niveau de l'instance. Les groupes de sécurité offrent un filtrage avec état par instance (par ENI) et constituent donc le mécanisme approprié.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 57Ignoré  
Une entreprise doit réaliser un audit de l'activité récente de son compte AWS. Cet audit permettra d'identifier l'auteur d'un événement et les actions qui ont été effectuées. Quel service AWS l'entreprise doit-elle utiliser pour répondre à ces exigences ?  
A. Configuration AWS

#### Explications

AWS Config enregistre les éléments de configuration des ressources, suit leur évolution et évalue leur conformité aux règles. Cet outil est utile pour détecter les écarts de configuration et générer des rapports de conformité, mais ne constitue pas la source principale des journaux d'appels d'API ni de l'identification de l'appelant nécessaires à l'audit des actions effectuées.  
B. Reconnaissance d'Amazon

#### Explications

Amazon Rekognition est un service d'analyse d'images et de vidéos basé sur l'apprentissage automatique (détection de visages, d'objets et de textes, modération, etc.). Il est indépendant de la journalisation ou de l'audit de l'activité des comptes AWS et ne fournit aucun enregistrement d'appels d'API ni d'identité principale.  
**Bonne réponse**  
C. AWS CloudTrail

#### Explications

AWS CloudTrail est le service conçu pour auditer l'activité des comptes : il enregistre les événements de gestion et de données pour l'activité API (console, SDK, CLI et appels de service à service), enregistre le principal ou le rôle IAM qui a effectué l'appel, les horodatages, les adresses IP sources, les paramètres de requête et les réponses, et peut envoyer les journaux vers S3, CloudWatch Logs ou CloudTrail Lake pour analyse et conservation.  
D. Service de notification simple d'Amazon (Amazon SNS)

#### Explications

Amazon SNS est un service de messagerie de type publication/abonnement permettant de diffuser des notifications aux abonnés (e-mail, SMS, HTTP(S), Lambda, SQS, etc.). Il gère la distribution des messages, mais ne collecte pas les données d'activité des API de compte ni les informations d'identité des utilisateurs à des fins d'audit.  
Explication générale  
L'audit des actions (qui a initié les actions et ce qui s'est passé) nécessite des enregistrements d'événements au niveau de l'API et l'identité de l'appelant. CloudTrail capture ces événements API (qui, quoi, quand, où) et prend en charge la transmission et l'interrogation des journaux à des fins d'investigation. Les autres options se concentrent soit sur l'état de la configuration des ressources (Config), soit sur des fonctionnalités non liées (Rekognition, SNS), et ne répondent donc pas aux exigences d'audit des appels API.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 58Ignoré  
Laquelle des options suivantes permet d'utiliser les groupes Auto Scaling d'Amazon EC2 pour faire évoluer la capacité dans le cloud AWS ?  
**Bonne réponse**  
A. Augmenter ou réduire automatiquement le nombre d'instances EC2 en fonction de la demande.

#### Explications

Les groupes Auto Scaling gèrent la capacité souhaitée en ajoutant ou en supprimant automatiquement des instances EC2 en fonction de métriques ou de planifications définies. Ils utilisent des politiques de mise à l'échelle (suivi des objectifs, par étapes, planifiée), des contrôles d'intégrité et le remplacement d'instances pour assurer une mise à l'échelle horizontale garantissant la disponibilité et la maîtrise des coûts.  
B. Utilisez des instances EC2 sans serveur.

#### Explications

EC2 est une infrastructure en tant que service (IaaS) permettant de provisionner et de gérer des machines virtuelles. Le terme « sans serveur » désigne les services qui masquent les serveurs (par exemple, AWS Lambda ou Fargate). La mise à l'échelle automatique s'applique aux instances EC2 et ne rend pas EC2 elle-même sans serveur.  
C. Augmenter ou diminuer automatiquement la taille des instances EC2 en fonction de la demande.

#### Explications

La modification directe du processeur, de la mémoire ou du type d'une instance (mise à l'échelle verticale) n'est pas prise en charge par les groupes Auto Scaling. Les changements de type d'instance nécessitent l'arrêt et le remplacement des instances existantes ou le lancement de nouvelles instances du type souhaité ; Auto Scaling se concentre sur la mise à l'échelle horizontale (nombre d'instances).  
D. Transférer les ressources CPU inutilisées entre les instances EC2.

#### Explications

AWS ne propose aucun mécanisme de transfert des ressources CPU entre instances en cours d'exécution ; les ressources de calcul sont isolées par instance. Pour corriger une utilisation inégale, il est nécessaire de modifier la taille des instances, d'ajuster les politiques de mise à l'échelle automatique ou de repenser la répartition de la charge de travail, et non de migrer les ressources CPU entre instances.  
Explication générale  
Le concept testé repose sur le principe que les groupes EC2 Auto Scaling ajustent le nombre d'instances EC2 (mise à l'échelle horizontale) à l'aide de politiques de mise à l'échelle et de contrôles d'intégrité afin de répondre à la demande. Certains s'y opposent, confondant EC2 avec des modèles sans serveur, suggérant un redimensionnement vertical sur place (nécessitant le remplacement d'instances ou des modifications manuelles), ou laissant entendre un transfert de ressources entre instances (non pris en charge).  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 59Ignoré  
Une entreprise souhaite stocker en toute sécurité les identifiants de sa base de données Amazon RDS et renouveler automatiquement et périodiquement les mots de passe des utilisateurs. Quel service ou fonctionnalité AWS répond à ces exigences ?  
A. Amazon S3

#### Explications

Amazon S3 est un service de stockage d'objets offrant un stockage durable et des options de chiffrement côté serveur (SSE-S3, SSE-KMS), mais il ne propose pas de gestion du cycle de vie des secrets, de rotation des identifiants ni d'API de récupération des secrets adaptées aux identifiants de base de données. L'utilisation de S3 nécessiterait la création et l'exploitation d'une logique de rotation et de contrôle d'accès personnalisée ; il ne répond donc pas nativement à ce besoin.  
B. Magasin de paramètres AWS Systems Manager

#### Explications

AWS Systems Manager Parameter Store prend en charge les paramètres SecureString chiffrés avec AWS KMS et convient au stockage des configurations et des secrets. Toutefois, il n'intègre pas de fonctionnalité de rotation des secrets gérée pour les informations d'identification RDS ; la rotation automatisée nécessite la mise en œuvre d'une automatisation personnalisée (par exemple, des fonctions Lambda et des documents d'automatisation Systems Manager).  
**Bonne réponse**  
C. AWS Secrets Manager

#### Explications

AWS Secrets Manager offre des fonctionnalités de gestion du cycle de vie des secrets : stockage chiffré avec AWS KMS, intégration native avec RDS et rotation automatisée via des fonctions Lambda. Il permet de faire tourner les mots de passe des utilisateurs de la base de données selon une planification, de mettre à jour la base de données cible et de fournir des secrets aux applications via des appels SDK/API avec un contrôle d'accès IAM/basé sur les ressources précis, répondant ainsi aux exigences de stockage sécurisé et de rotation automatique.  
D. AWS CloudTrail

#### Explications

AWS CloudTrail enregistre les appels d'API et l'activité des utilisateurs à des fins d'audit et de conformité. Il s'agit d'un service de journalisation et d'audit qui ne stocke aucun secret et ne propose aucun mécanisme de gestion ou de renouvellement des identifiants de base de données.  
Explication générale  
Cette question évalue vos connaissances des services AWS de gestion des secrets et de rotation automatique des identifiants. AWS Secrets Manager est la solution idéale car il offre le stockage chiffré des secrets, une rotation automatique planifiée (via des fonctions Lambda), l'intégration RDS et la récupération sécurisée par programmation. Parameter Store peut stocker des valeurs chiffrées, mais ne propose pas de rotation native. S3 et CloudTrail sont respectivement des services de stockage et de journalisation et ne prennent pas en charge la gestion de la rotation des secrets.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 60Ignoré  
Une entreprise souhaite renforcer sa sécurité en déployant un système de détection d'intrusion d'un FAI tiers depuis son compte AWS. Quel service ou ressource AWS doit-elle utiliser pour répondre à ce besoin ?  
A. AWS Security Hub

#### Explications

Incorrect. AWS Security Hub centralise, normalise et hiérarchise les résultats de sécurité provenant des services AWS et des outils tiers intégrés ; il s’agit d’un service d’agrégation des résultats et de conformité, et non d’une plateforme pour acquérir ou déployer des appliances IDS tierces dans votre compte.  
**Bonne réponse**  
B. Place de marché AWS

#### Explications

Exact. AWS Marketplace est le catalogue AWS de logiciels tiers où les clients peuvent découvrir, acheter et déployer des images et des solutions SaaS fournies par des fournisseurs (y compris des appliances IDS/IPS) directement dans leurs comptes AWS et VPC à l'aide d'AMI, de modèles CloudFormation ou d'intégrations SaaS gérées.  
C. Démarrage rapide AWS

#### Explications

Incorrect. Les Quick Starts d'AWS sont des déploiements de référence CloudFormation préconfigurés et automatisés qui accélèrent la configuration de l'environnement ; ils fournissent des modèles de déploiement, et non un catalogue pour l'achat ou l'hébergement de produits de sécurité tiers (bien que les Quick Starts puissent automatiser le déploiement de produits obtenus séparément).  
D. Centre de sécurité AWS

#### Explications

Incorrect. Il n'existe pas de service AWS nommé « AWS Security Center ». Le service auquel il est probablement fait référence est Security Hub. Notez également que des noms de produits similaires existent dans d'autres clouds (par exemple, Azure Security Center), ce qui peut prêter à confusion.  
Explication générale  
Le déploiement d'un système de détection d'intrusion tiers depuis un compte AWS s'effectue via AWS Marketplace, qui propose des images de fournisseurs et des offres SaaS pouvant être déployées dans votre VPC avec les options de déploiement prises en charge. D'autres solutions permettent soit d'agréger les résultats de sécurité (Security Hub), soit de fournir des modèles de déploiement (Quick Starts), soit ne sont pas des services AWS à proprement parler.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 61Ignoré  
Une entreprise déploie son application sur des instances Amazon EC2. L'application subit parfois des pics de demande soudains. L'entreprise souhaite garantir que son application puisse répondre à ces variations de demande au moindre coût. Quel service ou concept AWS répond à ces exigences ?  
**Bonne réponse**  
A. Mise à l'échelle automatique AWS

#### Explications

Ce système ajuste automatiquement le nombre d'instances EC2 en fonction de la demande en temps réel grâce aux métriques Amazon CloudWatch et aux politiques de mise à l'échelle (suivi des cibles, par paliers, planifiée). Cette mise à l'échelle dynamique préserve les performances des applications lors des pics de trafic et réduit les coûts en supprimant les ressources inutilisées lorsque la demande diminue. Elle s'intègre également aux équilibreurs de charge et aux hooks de cycle de vie pour une mise à l'échelle fluide.  
B. AWS Compute Optimizer

#### Explications

Ce service analyse l'historique d'utilisation et formule des recommandations concernant les types d'instances, les volumes EBS et les autres ressources optimales afin de réduire les coûts et d'améliorer les performances. Il ne modifie pas la capacité en cours d'exécution et n'adapte pas automatiquement la taille des instances en fonction de la charge actuelle.  
C. AWS Cost Explorer

#### Explications

Il offre des services de reporting des coûts et de l'utilisation, de prévision et de visualisation pour aider à analyser les dépenses et à identifier les économies, mais il ne contrôle ni n'ajuste automatiquement la capacité de calcul en fonction des variations de trafic.  
D. Cadre d'architecture AWS

#### Explications

Un ensemble de recommandations opérationnelles et architecturales de bonnes pratiques, articulé autour de piliers tels que la fiabilité et l'optimisation des coûts. Ce guide facilite la conception et l'analyse des architectures, mais n'intègre pas d'actions de mise à l'échelle automatisées.  
Explication générale  
Cette question évalue votre compréhension de la manière d'adapter automatiquement la capacité de calcul à la demande variable tout en minimisant les coûts. L'autoscaling est le mécanisme qui modifie dynamiquement la capacité EC2 en fonction des métriques CloudWatch et des politiques de mise à l'échelle, permettant ainsi de réagir aux pics de demande soudains et de réaliser des économies en réduisant la capacité lorsque la charge diminue. Les autres options (Compute Optimizer, Cost Explorer, Well-Architected) fournissent des recommandations, une analyse des coûts ou des conseils, mais n'effectuent pas de mise à l'échelle automatique en temps réel.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 62Ignoré  
Une entreprise a migré vers le cloud AWS. Elle paie désormais les services à la demande. De quel avantage du cloud computing bénéficie-t-elle ?  
A. Cessez de dépenser de l'argent pour exploiter et entretenir des centres de données.

#### Explications

Cette option consiste à éliminer la propriété et l'exploitation d'une infrastructure sur site, ce qui réduit les dépenses d'investissement (CAPEX). Bien que cela soit un avantage général du cloud, cela ne concerne pas spécifiquement le modèle de facturation à l'usage décrit dans le scénario.  
B. Augmenter la vitesse et l'agilité

#### Explications

Cela fait référence à un provisionnement plus rapide, à l'agilité et à la possibilité d'expérimenter avec des ressources cloud à la demande (élasticité et provisionnement rapide). Ce sont des avantages opérationnels, mais ils n'expliquent pas pourquoi l'entreprise ne paie que pour les services utilisés.  
C. Devenez international en quelques minutes

#### Explications

Cela concerne l'infrastructure mondiale d'AWS (régions, zones de disponibilité, points de présence) qui permet des déploiements mondiaux à faible latence. Cela explique la portée géographique, et non la conversion des coûts fixes en frais variables basés sur l'utilisation.  
**Bonne réponse**  
D. Échanger les charges fixes contre des charges variables

#### Explications

Exact — Ce modèle de tarification à l'usage remplace les dépenses d'investissement fixes par des dépenses d'exploitation variables. La tarification à la demande, la mise à l'échelle élastique et la facturation basée sur l'utilisation d'AWS permettent aux entreprises de ne payer que pour les ressources consommées, alignant ainsi les coûts sur l'utilisation réelle et améliorant la flexibilité budgétaire.  
Explication générale  
Cette question permet d'évaluer la compréhension des principes fondamentaux de la tarification AWS : la migration vers le cloud permet d'adopter un modèle de paiement à l'usage qui transforme les dépenses d'investissement fixes en dépenses d'exploitation variables en fonction de l'utilisation réelle. Si d'autres options décrivent des avantages légitimes du cloud (suppression de l'infrastructure sur site, agilité accrue et portée mondiale), ce scénario met spécifiquement en avant l'avantage d'une tarification variable basée sur l'utilisation.  
Domaine  
Domaine 4 : Facturation, tarification et assistance  
Question 63Ignoré  
Quel pilier du cadre AWS Well-Architected fait référence à la capacité d'un système à se remettre de perturbations d'infrastructure ou de service et à acquérir dynamiquement des ressources informatiques pour répondre à la demande ?  
A. Sécurité

#### Explications

Ce pilier est axé sur la protection des données, des systèmes et des actifs grâce à des contrôles tels que la gestion des identités et des accès, le chiffrement, la surveillance et la réponse aux incidents. Il ne traite pas principalement de la conception pour la reprise après panne ou la mise à l'échelle automatique des capacités, et ne correspond donc pas à la capacité décrite dans la question.  
**Bonne réponse**  
B. Fiabilité

#### Explications

Ce pilier concerne la conception d'architectures tolérantes aux pannes et capables de s'en remettre, et qui utilisent des modèles et des services permettant une reprise automatisée et un ajustement des capacités — par exemple, des contrôles d'intégrité, l'isolation des pannes, un déploiement multi-AZ/multi-région, un basculement automatique et une mise à l'échelle automatique. Ces fonctionnalités contribuent directement à la résilience et à l'acquisition dynamique de ressources pour répondre à la demande.  
C. Efficacité de la performance

#### Explications

Ce pilier concerne la sélection des types et des tailles de ressources appropriées, le suivi des performances et la mise en œuvre de compromis pour une utilisation efficace des ressources informatiques. Bien qu'il porte sur la réactivité et l'optimisation du système, il ne traite pas de la reprise après des interruptions d'infrastructure ni du provisionnement dynamique pour la résilience.  
D. Optimisation des coûts

#### Explications

Ce pilier met l'accent sur les pratiques de gestion des coûts, telles que la sélection judicieuse des ressources, l'élimination du gaspillage et l'utilisation appropriée des modèles de tarification. Il privilégie l'efficacité financière à la résilience architecturale ou à la reprise et à la mise à l'échelle automatisées.  
Explication générale  
La question porte sur le pilier « Architecture performante » qui met l'accent sur la résilience du système : conception pour la tolérance aux pannes, mise en œuvre d'une reprise automatisée et capacité d'adaptation à la demande. Le pilier « Fiabilité » est la bonne réponse car il se concentre explicitement sur la disponibilité, la tolérance aux pannes et la mise à l'échelle automatisée (autoscaling, contrôles d'intégrité, architectures multi-AZ/régions). Les autres piliers abordent les contrôles de sécurité, l'optimisation des performances et la gestion des coûts, qui sont importants mais ne décrivent pas principalement la reprise et l'acquisition dynamique de ressources.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 64Ignoré  
Parmi les propositions suivantes, lesquelles constituent des avantages du cloud AWS ? (Choisissez deux réponses.)  
A. Échanger les dépenses variables contre des dépenses en capital

#### Explications

Incorrect. AWS n'encourage pas la conversion des coûts d'exploitation variables en investissements en capital fixe. Au contraire, son modèle de tarification à l'usage et ses services gérés permettent aux clients d'éviter d'importants achats de matériel initiaux et de passer des dépenses d'investissement (CapEx) aux dépenses d'exploitation (OpEx).  
**Sélection correcte**  
B. Économies d'échelle importantes

#### Explications

Exact. L'infrastructure mondiale et à grande échelle d'AWS, ainsi que son modèle mutualisé, permettent de réduire les coûts unitaires et d'améliorer l'efficacité (économies d'échelle), ce qui autorise des prix plus bas et des investissements continus dans de nouveaux services et des optimisations.  
**Sélection correcte**  
C. Lancement mondial en quelques minutes

#### Explications

Exact. AWS offre une couverture mondiale de régions et de zones de disponibilité, ainsi que des services d'automatisation et des services gérés (AMI, CloudFormation, Auto Scaling, bases de données gérées) qui permettent aux équipes de provisionner et de répliquer des applications sur différents sites en quelques minutes.  
D. Se concentrer sur la gestion de l'infrastructure matérielle

#### Explications

Incorrect. AWS exploite et maintient l'infrastructure physique (matériel, centres de données, réseau) dans le cadre de son modèle de responsabilité partagée ; les clients sont libérés de la gestion matérielle de bas niveau pour se concentrer sur les applications et les configurations.  
E. Surdimensionnement pour garantir la capacité

#### Explications

Incorrect. Le surdimensionnement est une mesure d'atténuation sur site du risque de capacité ; AWS offre quant à lui de l'élasticité (Auto Scaling, capacité à la demande, instances réservées, plans d'économies) permettant aux clients d'adapter leurs ressources et d'éviter une capacité provisionnée inutile.  
Explication générale  
Ce test évalue les principaux avantages du cloud : l’envergure et l’infrastructure mondiale d’AWS permettent de réaliser des économies et d’accélérer le déploiement international. Les meilleures options mettent l’accent sur les économies d’échelle et la rapidité du déploiement géographique. Les options incorrectes décrivent l’inverse des avantages du cloud (inversion des dépenses d’investissement et d’exploitation, gestion du matériel ou surdimensionnement) et sont donc erronées.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 65Ignoré  
Quelles options correspondent aux capacités de gouvernance du cadre d'adoption du cloud AWS (AWS CAF) ? (Choisissez deux réponses.)  
A. Gestion des identités et des accès

#### Explications

La gestion des identités et des accès (IAM) est un contrôle technique d'authentification et d'autorisation, explicitement abordé dans la perspective de sécurité d'AWS CAF. La gouvernance se concentre sur les politiques, les contrôles et les processus décisionnels (par exemple, le budget, les portefeuilles et la conformité), tandis que l'IAM met en œuvre des contrôles de sécurité pour garantir l'accès.  
**Sélection correcte**  
B. Gestion financière du cloud

#### Explications

La gestion financière du cloud (également appelée gestion financière informatique ou FinOps) est une fonction de gouvernance essentielle : elle permet d’établir les budgets, la répartition des coûts, la refacturation, les politiques d’optimisation des coûts et la responsabilité financière. Les services AWS tels qu’AWS Budgets, Cost Explorer et Cost and Usage Reports prennent en charge ces activités de gouvernance.  
**Sélection correcte**  
C. Gestion du portefeuille d'applications

#### Explications

La gestion du portefeuille d'applications relève de la gouvernance car elle fournit les processus et les critères permettant d'inventorier, de rationaliser, de prioriser et de gouverner les applications tout au long de leur cycle de vie, en soutenant les décisions de migration, l'évaluation des risques et l'alignement sur les objectifs commerciaux (souvent pris en charge par des outils de découverte et de migration).  
D. Gestion de l'innovation

#### Explications

La gestion de l'innovation consiste à encourager les nouvelles idées, l'expérimentation et le développement de produits/solutions, ce qui correspond davantage aux perspectives commerciales ou humaines (culture, changement organisationnel, renforcement des capacités) qu'à la perspective de gouvernance centrée sur les politiques, la conformité, le portefeuille et les contrôles financiers.  
E. Gestion des produits

#### Explications

La gestion des produits est une capacité commerciale et opérationnelle axée sur la définition et la fourniture de produits et de services ; il ne s'agit pas d'une capacité spécifique à la gouvernance dans l'AWS CAF, qui met l'accent sur les contrôles financiers, la gestion de portefeuille, la conformité et les politiques.  
Explication générale  
La perspective de gouvernance du CAF d'AWS définit les capacités qui établissent les politiques, les contrôles et les mécanismes de prise de décision, et non les contrôles de sécurité techniques ni les fonctions produit/métier. La gestion financière du cloud et la gestion du portefeuille d'applications sont des capacités de gouvernance car elles assurent la responsabilité financière, la budgétisation/l'optimisation et la gouvernance du cycle de vie du portefeuille. Les autres options (IAM, gestion de l'innovation, gestion des produits) relèvent de perspectives différentes du CAF (Sécurité, Métier/Personnel) et ne correspondent donc pas à la perspective de gouvernance.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 66Ignoré  
Une entreprise souhaite disposer d'un outil unifié pour interagir de manière cohérente avec les services AWS. Quel service ou outil AWS répond à ce besoin ?  
**Bonne réponse**  
A. Interface de ligne de commande AWS

#### Explications

L'interface de ligne de commande AWS (AWS CLI) est l'outil officiel et multiplateforme permettant d'effectuer les mêmes appels d'API aux services AWS. Elle offre une syntaxe de commande et des formats de sortie uniformes (JSON, texte, tableau), prend en charge les profils nommés, les fonctionnalités d'AWS CLI v2 (telles que l'intégration AWS SSO) et est scriptable pour l'automatisation, ce qui en fait l'interface unifiée idéale pour interagir avec de nombreux services AWS.  
B. Amazon Elastic Container Service (Amazon ECS)

#### Explications

Amazon ECS est un service d'orchestration de conteneurs géré (définitions de tâches, clusters, services, types de lancement Fargate/EC2). Il est spécialisé dans l'exécution et la mise à l'échelle des charges de travail conteneurisées et ne constitue pas une interface de commande générique et unifiée pour la gestion de services AWS arbitraires.  
C. AWS Cloud9

#### Explications

AWS Cloud9 est un environnement de développement intégré basé sur le cloud qui permet d'héberger du code et fournit un terminal avec des outils (dont l'interface de ligne de commande AWS). Il s'agit principalement d'un environnement de développement ; bien qu'il puisse exécuter l'interface de ligne de commande, il ne constitue pas l'outil de gestion unifié mentionné dans la question.  
D. Réseau privé virtuel AWS (VPN AWS)

#### Explications

AWS VPN (VPN de site à site et VPN client AWS) assure une connectivité réseau sécurisée entre les clients locaux ou distants et AWS. Il gère la connectivité et la sécurité du réseau, et non l'exécution ou l'automatisation de commandes de gestion pour les services AWS.  
Explication générale  
La question porte sur un outil unique et cohérent pour interagir avec les services AWS. L'interface de ligne de commande AWS (AWS CLI) est conçue à cet effet : elle permet d'effectuer des appels d'API aux services AWS avec une syntaxe uniforme, prend en charge l'automatisation et les profils de configuration, et peut être utilisée dans différents environnements. Les autres options sont des services ou environnements spécialisés (orchestration de conteneurs, IDE, connectivité réseau) et ne proposent pas d'interface de ligne de commande unifiée pour la gestion des services AWS.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 67Ignoré  
Quel pilier du cadre AWS Well-Architected correspond à la capacité d'apporter des modifications fréquentes, mineures et réversibles à l'architecture du cloud AWS ?  
A. Sécurité

#### Explications

Le pilier Sécurité est axé sur la protection de la confidentialité, de l'intégrité et de la disponibilité grâce à des contrôles tels que la gestion des identités et des accès (IAM), le chiffrement (AWS KMS), la protection du réseau (groupes de sécurité, listes de contrôle d'accès réseau) et la surveillance/l'audit (AWS CloudTrail, AWS Config). Il définit comment sécuriser les données et les systèmes, mais ne traite pas en priorité de la pratique consistant à apporter fréquemment des modifications architecturales mineures et réversibles.  
B. Optimisation des coûts

#### Explications

L'optimisation des coûts vise à fournir de la valeur ajoutée à l'entreprise au moindre coût grâce à des techniques telles que le dimensionnement adéquat, l'utilisation d'instances Spot, d'instances réservées/plans d'économies, l'étiquetage de l'allocation des coûts et le suivi avec Cost Explorer et les budgets. Bien que les considérations de coûts influencent les décisions d'architecture, ce pilier ne définit pas les pratiques relatives à la fréquence ou à la réversibilité des changements.  
**Bonne réponse**  
C. Excellence opérationnelle

#### Explications

L'excellence opérationnelle met l'accent sur la programmation des opérations, l'automatisation des flux de travail et l'amélioration continue des procédures. Elle préconise l'amélioration continue, les manuels d'exploitation, l'automatisation (Infrastructure as Code avec AWS CloudFormation/CDK, CI/CD avec CodePipeline/CodeDeploy) et l'observabilité (CloudWatch, X-Ray). Le guide « Well-Architected » recommande explicitement d'apporter des modifications fréquentes, mineures et réversibles afin de réduire les risques et d'optimiser l'apprentissage, ce qui correspond parfaitement à la question posée.  
D. Efficacité de la performance

#### Explications

L'efficacité des performances consiste à utiliser efficacement les ressources informatiques pour répondre aux exigences du système : choisir les options de calcul, de stockage et de réseau appropriées, et tirer parti de la mise à l'échelle automatique, de la mise en cache et des services sans serveur pour optimiser les performances. Elle porte sur la conception axée sur l'efficacité et l'évolutivité, et non sur la pratique opérationnelle consistant à effectuer fréquemment des modifications architecturales réversibles.  
Explication générale  
Cette question évalue votre connaissance des piliers d'AWS Well-Architected. Le pilier « Excellence opérationnelle » est le plus pertinent car il préconise l'automatisation, l'amélioration itérative et la mise en œuvre fréquente de modifications mineures et réversibles (grâce à l'IaC et à l'intégration continue/déploiement continu) afin de réduire les risques et d'accélérer l'apprentissage. Les autres piliers sont axés sur la sécurité, les coûts ou les performances plutôt que sur les pratiques de gestion du changement.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 68Ignoré  
Quels sont les avantages de migrer vers le cloud AWS ? (Choisissez deux réponses.)  
A. La possibilité de confier l'intégralité de la responsabilité de la sécurité à AWS.

#### Explications

Incorrect. AWS utilise un modèle de responsabilité partagée : AWS est responsable de la sécurité DU cloud (installations physiques, matériel, infrastructure réseau), tandis que les clients sont responsables de la sécurité DANS le cloud (protection des données, gestion des identités et des accès, configuration du système d’exploitation et des applications, et contrôles réseau).  
**Sélection correcte**  
B. La possibilité d’utiliser le modèle de paiement à l’utilisation.

#### Explications

Exact. La tarification AWS prend en charge la consommation à la demande, ce qui signifie que les clients sont facturés uniquement pour les ressources qu'ils utilisent réellement (exemples : instances EC2 à la demande, stockage S3), permettant ainsi une optimisation des coûts et une réduction des dépenses d'investissement initiales par rapport à l'achat de centres de données à capacité fixe.  
C. La capacité d'avoir un contrôle total sur l'infrastructure physique.

#### Explications

Incorrect. AWS gère l'infrastructure physique sous-jacente dans ses régions et zones de disponibilité ; les clients provisionnent et contrôlent les ressources virtuelles (instances, conteneurs, services gérés) mais n'ont pas d'accès direct aux serveurs physiques ni aux opérations au niveau des installations.  
**Sélection correcte**  
D. Ne plus avoir à deviner la capacité requise.

#### Explications

Exact. AWS offre une élasticité et un provisionnement à la demande (Auto Scaling, services gérés, options sans serveur) permettant d'augmenter ou de diminuer la capacité de manière dynamique en fonction de la demande, réduisant ainsi le besoin de prévisions de capacité précises en amont.  
E. Ne plus se soucier des contrôles d'accès des utilisateurs.

#### Explications

Incorrect. La gestion des contrôles d'accès des utilisateurs (politiques IAM, rôles, authentification multifacteur, limites des autorisations, AWS Organizations) est de la responsabilité du client ; AWS fournit les outils, mais les clients doivent configurer et maintenir le contrôle d'accès.  
Explication générale  
Cette question porte sur les principaux avantages économiques et opérationnels du cloud : AWS propose une facturation à l’usage et une capacité élastique, ce qui réduit les coûts initiaux et le besoin de prévisions de capacité précises (B et D). Elle ne transfère pas l’intégralité des responsabilités en matière de sécurité ou de contrôle d’accès à AWS, ni n’accorde aux clients le contrôle de l’infrastructure physique ; il s’agit là d’idées reçues que le modèle de responsabilité partagée permet de corriger.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 69Ignoré  
Une entreprise souhaite utiliser un service géré pour identifier et protéger les données sensibles stockées sur Amazon S3. Quel service AWS répond à ces exigences ?  
A. Analyseur d'accès IAM AWS

#### Explications

Ce service analyse les politiques basées sur les ressources et les configurations IAM afin d'identifier les voies d'accès externes et les ressources partagées. Il n'effectue pas d'inspection du contenu ni de classification des données des objets stockés dans S3 ; par conséquent, il ne peut ni détecter ni étiqueter les données sensibles contenues dans les objets du compartiment.  
B. Amazon GuardDuty

#### Explications

Il s'agit d'un service de détection des menaces qui surveille en continu les activités malveillantes ou non autorisées sur les comptes AWS. Bien qu'il puisse identifier les schémas d'accès suspects (y compris certaines menaces liées à S3), il ne classe ni n'étiquette les données sensibles contenues dans les objets S3.  
C. Inspecteur Amazon

#### Explications

Ce service effectue des évaluations de sécurité automatisées des environnements de calcul et des images de conteneurs afin de détecter les vulnérabilités et les écarts par rapport aux bonnes pratiques. Son champ d'application est l'évaluation des vulnérabilités et de l'exécution, et non la découverte ou la classification des données au sein de S3.  
**Bonne réponse**  
D. Amazon Macie

#### Explications

Ce service géré utilise l'apprentissage automatique et la détection basée sur des modèles pour découvrir, classer et fournir une visibilité automatiques sur les données sensibles (par exemple, les PII) stockées dans S3. Il génère des résultats, prend en charge la surveillance de l'accès aux données et peut transmettre ces résultats à d'autres services pour une réponse automatisée et des rapports de conformité.  
Explication générale  
Cette question évalue les connaissances relatives aux services AWS de protection des données dans S3. La réponse correcte est le service spécifiquement conçu pour la découverte et la classification des données dans S3 à l'aide d'identifiants et de résultats issus du machine learning. Les autres options abordent des domaines de sécurité connexes (analyse des politiques et des accès, détection des menaces et évaluation des vulnérabilités), mais ne permettent pas la découverte et la classification des données sensibles au niveau des objets.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 70Ignoré  
Quelles sont les bonnes pratiques recommandées pour l'utilisation d'AWS Identity and Access Management (IAM) ? (Choisissez deux réponses.)  
A. Partager les clés d'accès.

#### Explications

Le partage de clés d'accès permanentes compromet la sécurité et la traçabilité. Les clés liées à un seul utilisateur ne doivent jamais être partagées ; il est préférable d'utiliser les rôles IAM et les informations d'identification temporaires (AWS STS), la fédération, ou d'attribuer des informations d'identification individuelles afin que les actions puissent être auditées (CloudTrail) et révoquées si nécessaire.  
**Sélection correcte**  
B. Créer des utilisateurs IAM individuels.

#### Explications

Attribuez à chaque personne un compte utilisateur IAM individuel (ou une identité fédérée / IAM Identity Center) afin que ses identifiants et autorisations soient uniques et traçables. Les identités individuelles permettent l'application du principe du moindre privilège et simplifient le suivi de l'activité des utilisateurs dans CloudTrail.  
C. Utilisez des politiques intégrées au lieu de politiques gérées par le client.

#### Explications

Les politiques intégrées sont associées à un seul utilisateur et ne sont ni réutilisables ni faciles à gérer à grande échelle. Les politiques gérées par le client ou par AWS prennent en charge la réutilisation, le versionnage et une gestion simplifiée des autorisations ; elles sont donc préférables dans la plupart des cas d’utilisation.  
D. Accorder des privilèges maximums aux utilisateurs IAM.

#### Explications

L'octroi de privilèges maximums contrevient au principe du moindre privilège et accroît les risques. Il est recommandé de n'accorder que les autorisations minimales requises, d'utiliser des politiques de confidentialité précises et de privilégier l'attribution de rôles aux services ou l'accès inter-comptes.  
**Sélection correcte**  
E. Utilisez des groupes pour attribuer des autorisations aux utilisateurs IAM.

#### Explications

Utilisez les groupes pour attribuer des autorisations et ainsi gérer collectivement celles de plusieurs utilisateurs. Les groupes simplifient l'administration, garantissent une gestion cohérente des droits d'accès basée sur les rôles (RBAC) et réduisent la duplication des politiques ; lorsqu'un utilisateur change de rôle, son déplacement entre les groupes met à jour ses autorisations de manière centralisée.  
Explication générale  
Les principales bonnes pratiques IAM testées consistent à fournir des identités uniques et auditables, et à gérer les permissions de manière centralisée et minimale. La création d'utilisateurs individuels (ou la fédération d'identités) et l'attribution de permissions via des groupes permettent un accès aux privilèges minimaux et facilitent l'audit. À l'inverse, le partage de clés d'accès, la préférence pour les politiques intégrées plutôt que les politiques gérées, ou l'octroi de privilèges étendus sont des approches non sécurisées ou difficilement évolutives.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 71Ignoré  
Qui peut gérer les clés d'accès de l'utilisateur racine du compte AWS ?  
A. Les utilisateurs IAM du même compte qui ont reçu l'autorisation

#### Explications

Les utilisateurs IAM peuvent gérer leurs propres informations d'identification et, s'ils disposent des autorisations nécessaires, gérer de nombreuses ressources AWS. Toutefois, ils n'ont pas le droit de consulter ni de modifier les informations d'identification de sécurité du compte racine. Ces dernières sont gérées uniquement via la page « Informations d'identification de sécurité » de l'utilisateur racine.  
B. Les rôles IAM dans tout compte ayant reçu l'autorisation

#### Explications

Les rôles IAM fournissent des informations d'identification temporaires lorsqu'ils sont assumés et sont utilisés pour déléguer des autorisations ; ils ne possèdent pas d'informations d'identification persistantes au niveau du compte et ne peuvent pas gérer les informations d'identification de sécurité ou les clés d'accès de l'utilisateur racine.  
C. Utilisateurs et rôles IAM ayant reçu l'autorisation

#### Explications

Bien que les utilisateurs et les rôles IAM puissent bénéficier d'autorisations étendues sur les ressources AWS, AWS ne leur permet pas de gérer les informations d'identification du compte racine. La gestion de ces informations d'identification est réservée à l'utilisateur racine pour des raisons de sécurité.  
**Bonne réponse**  
D. Le propriétaire du compte AWS

#### Explications

Seul l'utilisateur racine (propriétaire du compte) peut créer, consulter, renouveler ou supprimer les clés d'accès du compte racine. Les recommandations de sécurité d'AWS préconisent d'éviter l'utilisation du compte racine, de supprimer toutes les clés d'accès racine, d'activer l'authentification multifacteur (MFA) et d'utiliser un utilisateur IAM administrateur pour les tâches courantes.  
Explication générale  
Cette question évalue votre compréhension de la propriété des comptes AWS et de la portée des informations d'identification : l'utilisateur racine (propriétaire du compte) contrôle exclusivement les informations d'identification de sécurité du compte racine. Les utilisateurs et les rôles IAM peuvent gérer leurs propres informations d'identification et les ressources auxquelles ils sont autorisés, mais ils ne peuvent pas gérer les clés d'accès du compte racine. Il est recommandé d'éviter d'utiliser les informations d'identification racine, d'activer l'authentification multifacteur (MFA) sur le compte racine, de supprimer les clés d'accès racine et d'effectuer les tâches d'administration avec les identités IAM.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 72Ignoré  
Quel service ou outil AWS permet à une entreprise de déployer des modifications d'application de manière automatisée ?  
A. Amazon AppFlow

#### Explications

AppFlow est un service d'intégration de données géré permettant de transférer et de transformer des données entre des applications SaaS et AWS. Il se concentre sur le déplacement et le mappage des données, et non sur l'orchestration ou l'automatisation des flux de travail de publication d'applications ou des stratégies de déploiement.  
**Bonne réponse**  
B. AWS CodeDeploy

#### Explications

CodeDeploy est conçu spécifiquement pour automatiser les déploiements d'applications sur les instances EC2, les serveurs sur site, les fonctions Lambda et ECS. Il prend en charge les stratégies de déploiement (sur place et bleu/vert), s'intègre aux pipelines CI/CD (par exemple, CodePipeline) et fournit des points d'entrée pour le cycle de vie des déploiements ainsi que des fonctionnalités de restauration automatique — autant d'éléments clés pour les processus de publication automatisés.  
C. Lien privé AWS

#### Explications

PrivateLink assure une connectivité privée via des interfaces et des services dédiés afin de sécuriser l'accès aux services sur le réseau AWS. Cette fonctionnalité concerne la connectivité et la sécurité du réseau, et non l'automatisation des processus de création et de déploiement ni l'orchestration des déploiements.  
D. Amazon EX Distro

#### Explications

EKS Distro est une distribution Kubernetes permettant d'exécuter des clusters Kubernetes compatibles avec Amazon EKS. Bien que Kubernetes fournisse des mécanismes pour le déploiement d'applications conteneurisées, EKS Distro est une distribution d'exécution et ne constitue ni un service d'automatisation des mises en production géré, ni un orchestrateur de déploiement CI/CD.  
Explication générale  
Cette question teste la connaissance du service AWS conçu spécifiquement pour l'automatisation des déploiements d'applications. La bonne réponse propose des fonctionnalités de déploiement automatisé (ciblant plusieurs types de calcul), des stratégies de déploiement, des hooks de cycle de vie et la restauration — des capacités essentielles à l'intégration continue/déploiement continu (CI/CD) et à l'automatisation des mises en production. Les autres options concernent l'intégration de données, la connectivité privée ou la distribution de l'environnement d'exécution Kubernetes et ne fournissent donc pas directement d'orchestration automatisée des mises en production/déploiements.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 73Ignoré  
Parmi les propositions suivantes, lesquelles constituent des avantages d'AWS Trusted Advisor ? (Choisissez deux réponses.)  
\`

#### Explications

Incorrect. Trusted Advisor est un service de conseil qui analyse votre environnement AWS et fournit des recommandations ; il ne sert pas de passerelle d'accès ou de provisionnement pour d'autres services AWS tels que la messagerie. Pour utiliser les services de messagerie, vous gérez le service (console, SDK, CLI) et contrôlez l'accès via IAM.  
**Sélection correcte**  
B. Recommandations d'optimisation des coûts

#### Explications

Exact. Trusted Advisor inclut une catégorie Optimisation des coûts qui analyse l'utilisation des ressources et signale les opportunités de réduction des dépenses (par exemple, les instances EC2 inactives ou sous-utilisées, les volumes EBS non attachés et les instantanés redondants), permettant ainsi aux clients de prendre des mesures pour réduire leurs coûts AWS.  
C. Actualisation horaire des contrôles de limites de service

#### Explications

Incorrect. La fréquence d'actualisation des vérifications Trusted Advisor varie selon la vérification et le niveau d'assistance ; il n'est pas garanti que les vérifications des limites de service soient actualisées toutes les heures. Cette fréquence est gérée par le service et peut différer selon les vérifications et les comptes.  
**Sélection correcte**  
D. Contrôles de sécurité

#### Explications

Exact. Trusted Advisor effectue des contrôles de sécurité qui identifient les risques de sécurité courants (par exemple, des règles de groupe de sécurité exposées, l'absence d'authentification multifacteur sur le compte racine, les autorisations du compartiment S3 et des autorisations IAM excessives) et recommande des mesures correctives conformes aux meilleures pratiques AWS.  
E. Gestion des approbations AWS Identity and Access Management (IAM)

#### Explications

Incorrect. Les flux d'approbation et la gestion des droits d'accès ne font pas partie des fonctionnalités de Trusted Advisor. L'identité et l'accès sont gérés par la gestion des identités et des accès (rôles, stratégies, utilisateurs) et les services associés ; les approbations orientées processus seraient mises en œuvre à l'aide d'autres outils ou de flux de travail personnalisés, et non par Trusted Advisor.  
Explication générale  
AWS Trusted Advisor est un service de diagnostic et de recommandations qui évalue les comptes selon plusieurs critères. La question porte sur deux de ses principaux avantages : l’optimisation des coûts et la sécurité, qui sont couverts par des vérifications et des recommandations spécifiques de Trusted Advisor. Les réponses incorrectes décrivent des fonctionnalités que Trusted Advisor ne propose pas (accès direct aux services, gestion des flux de travail et des approbations) ou contiennent des affirmations erronées concernant la fréquence d’actualisation des vérifications.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 74Ignoré  
Une entreprise cherche à déterminer les types et les tailles d'instances Amazon EC2 les mieux adaptés à ses besoins en termes de performances et de capacité. Elle souhaite minimiser ses coûts. Quelle option décrit le mieux sa démarche ?  
A. Mise à l'échelle automatique

#### Explications

Incorrect. La fonctionnalité AWS qui ajuste automatiquement le nombre d'instances EC2 en fonction de la demande se concentre sur la modification du nombre d'instances (élasticité) à l'aide des groupes Auto Scaling, des politiques de mise à l'échelle et des contrôles d'intégrité. Elle n'analyse pas l'historique d'utilisation des ressources pour recommander la famille ou la taille d'instances optimale afin de réduire le coût par charge de travail.  
B. Hiérarchisation du stockage

#### Explications

Incorrect. La hiérarchisation du stockage consiste à déplacer des objets entre différentes classes de stockage (par exemple, S3 Standard, Intelligent-Tiering, Glacier) afin de réduire les coûts de stockage. Elle concerne le placement et la conservation des données, et non la sélection des caractéristiques de processeur, de mémoire, de réseau ou de débit EBS pour les instances de calcul.  
**Bonne réponse**  
C. Redimensionnement

#### Explications

Exact. Le dimensionnement optimal consiste à analyser l'utilisation des charges de travail (processeur, mémoire, réseau, IOPS/débit EBS) et à les adapter à une famille d'instances EC2, une taille et une option d'achat appropriées afin de répondre aux exigences de performance au moindre coût. Parmi les outils AWS utilisés pour le dimensionnement optimal, on trouve les métriques Amazon CloudWatch, les recommandations d'AWS Compute Optimizer et les rapports de dimensionnement optimal de Cost Explorer.  
D. Planification des instances

#### Explications

Incorrect. La planification des instances réduit les coûts en démarrant et en arrêtant les instances selon une planification définie (par exemple, à l'aide d'AWS Instance Scheduler, des règles EventBridge ou de Lambda). Cela permet de réaliser des économies sur les frais d'exécution, mais ne détermine pas la famille ou la taille d'instance la mieux adaptée aux besoins de performance d'une charge de travail.  
Explication générale  
Cette question teste la capacité à sélectionner les types et tailles d'instances EC2 les plus rentables en fonction des besoins de la charge de travail. Le dimensionnement optimal est la méthode appropriée : elle utilise les données d'utilisation et les outils de recommandation AWS (CloudWatch, Compute Optimizer, Cost Explorer) pour identifier les ressources surdimensionnées et recommander des familles/tailles d'instances ou des options d'achat adaptées. Les réponses alternatives décrivent des contrôles de coûts complémentaires (augmentation du nombre d'instances, planification des temps d'exécution ou hiérarchisation du stockage des données), mais aucune n'effectue la sélection des instances et l'analyse de leur utilisation réalisées par le dimensionnement optimal.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 75Ignoré  
Une entreprise souhaite explorer et analyser des données stockées sur Amazon S3 à l'aide d'un langage de programmation. Quel service AWS répond à ces exigences ?  
A. Amazon Kendra

#### Explications

Kendra est un service de recherche d'entreprise qui utilise l'apprentissage automatique pour indexer et renvoyer des documents pertinents à partir de bases de données non structurées (y compris S3). Il est optimisé pour la recherche et l'extraction de documents, et non pour l'exécution de requêtes ad hoc ou l'analyse de données programmatique sur des ensembles de données.  
**Bonne réponse**  
B. Amazone Athéna

#### Explications

Athena est un service de requêtes interactif sans serveur qui vous permet d'exécuter du SQL ANSI (Presto/Trino) directement sur des données stockées dans Amazon S3. Il s'intègre aux kits de développement logiciel (SDK) et à l'interface de ligne de commande (CLI) AWS, aux pilotes JDBC/ODBC et au catalogue de données Glue, prend en charge les formats de fichiers courants (CSV, JSON, Parquet, ORC) et facture par requête, ce qui en fait le choix idéal et peu gourmand en ressources pour explorer et analyser des données S3 à partir d'un langage de programmation.  
C. Amazon Comprendre

#### Explications

Comprehend est un service de traitement automatique du langage naturel (TALN) géré, conçu pour des tâches telles que l'analyse des sentiments, l'extraction d'entités et la modélisation thématique de textes. Bien qu'il analyse le contenu textuel, il ne s'agit pas d'un moteur de requêtes généraliste pour les ensembles de données stockés sur S3 et il ne propose pas d'exploration de type SQL ni d'interrogation programmatique directe des données tabulaires.  
D. Amazon SageMaker

#### Explications

SageMaker est une plateforme d'apprentissage automatique complète permettant de créer, d'entraîner et de déployer des modèles. Elle peut accéder aux données stockées sur S3 pour les flux de travail d'apprentissage automatique. Plus complexe et davantage axée sur la puissance de calcul qu'Athena, elle est conçue pour le développement et l'entraînement de modèles plutôt que pour l'exploration ponctuelle et légère de données par le biais de code.  
Explication générale  
Amazon Athena est la solution idéale car il s'agit d'un service de requêtes SQL sans serveur, conçu spécifiquement pour explorer et analyser les données stockées dans Amazon S3 et pouvant être utilisé par programmation via les kits de développement logiciel (SDK) ou les pilotes AWS. Les autres options sont des services spécialisés : Kendra pour la recherche d'entreprise, Comprehend pour le traitement automatique du langage naturel (TALN) et SageMaker pour l'apprentissage automatique de bout en bout ; aucun n'est optimisé pour l'interrogation simple et ponctuelle d'ensembles de données S3.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 76Ignoré  
Une entreprise doit utiliser la technologie AWS pour déployer un site web statique. Quelle solution répond à cette exigence avec le moins de contraintes opérationnelles ?  
A. Déployer le site web sur Amazon EC2.

#### Explications

Incorrect — le déploiement sur EC2 nécessite la mise en service et la maintenance de serveurs virtuels (mise à jour du système d'exploitation, mise à l'échelle des instances, planification de la capacité, réseau et surveillance). Ce modèle basé sur des serveurs engendre des coûts d'exploitation importants pour la diffusion de contenu purement statique.  
B. Héberger le site web sur AWS Elastic Beanstalk.

#### Explications

Incorrect — Elastic Beanstalk automatise le déploiement, mais crée et gère toujours les ressources sous-jacentes (instances EC2, groupes Auto Scaling, équilibreurs de charge) et la configuration de l'environnement. Conçu pour les applications, il implique davantage de responsabilités opérationnelles qu'une approche d'hébergement statique sans serveur.  
C. Déployez le site web avec Amazon Lightsail.

#### Explications

Incorrect — Lightsail propose des serveurs privés virtuels simplifiés et des services intégrés, ce qui réduit la complexité par rapport à EC2, mais nécessite toujours une gestion au niveau de l'instance (mises à jour du système d'exploitation, sauvegardes, mise à l'échelle). Il n'est pas aussi léger à exploiter qu'une solution d'hébergement de stockage objet.  
**Bonne réponse**  
D. Héberger le site web sur Amazon S3.

#### Explications

Exact — L'hébergement de sites web statiques S3 utilise un stockage d'objets sans serveur, hautement disponible et à mise à l'échelle automatique, ne nécessitant que la configuration des compartiments et des politiques optionnelles. En production, vous pouvez utiliser CloudFront en frontal de S3 pour ajouter HTTPS, la mise en cache et des performances accrues en périphérie de réseau, tout en minimisant les coûts d'exploitation.  
Explication générale  
Cette question évalue la solution présentant la charge opérationnelle la plus faible pour un site web statique. L'hébergement statique sur stockage objet est sans serveur et nécessite une gestion minimale ; S3 (option D) est donc la solution la plus adaptée. EC2, Elastic Beanstalk et Lightsail impliquent la gestion de ressources de calcul ou d'environnements et engendrent par conséquent davantage de tâches opérationnelles. L'association de S3 avec CloudFront offre le protocole HTTPS et la mise en cache sans alourdir sensiblement la charge opérationnelle.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 77Ignoré  
Quel service ou fonctionnalité AWS est un service pré-authentifié basé sur un navigateur et pouvant être lancé directement depuis la console de gestion AWS ?  
A. API AWS

#### Explications

Incorrect. AWS expose des API de service et des SDK pour un accès programmatique qui nécessitent une authentification explicite (identifiants IAM, jetons temporaires ou requêtes signées) et ne constituent pas un environnement shell interactif, lancé par navigateur et pré-authentifié.  
B. Voile sans fil AWS

#### Explications

Incorrect. Lightsail est une offre simplifiée de serveur privé virtuel et d'hébergement d'applications avec sa propre console de gestion et des instances à longue durée de vie ; elle ne fournit pas un shell de navigateur pré-authentifié et instantanément disponible, lancé directement depuis la console de gestion AWS.  
C. AWS Cloud9

#### Explications

Incorrect. Cloud9 est un environnement de développement intégré basé sur un navigateur qui comprend un éditeur et un terminal, mais il nécessite la création ou l'attachement d'un environnement et repose sur l'authentification IAM standard ; il ne s'agit pas d'un shell de console pré-authentifié en un clic destiné aux tâches CLI ad hoc.  
**Bonne réponse**  
D. AWS CloudShell

#### Explications

Exact. CloudShell est un shell basé sur un navigateur qui utilise automatiquement l'identité de la console connectée (aucune configuration d'identifiants séparée), se lance directement depuis la console de gestion AWS et inclut l'interface de ligne de commande AWS et ses outils préinstallés, ainsi qu'un espace de stockage persistant pour un accès immédiat et authentifié à la ligne de commande.  
Explication générale  
La question porte sur la fonctionnalité d'interface de ligne de commande (CLI) pré-authentifiée et accessible via navigateur depuis la console de gestion AWS. AWS CloudShell offre un accès immédiat à la CLI en utilisant l'identité IAM de l'utilisateur connecté et inclut des outils AWS préinstallés ainsi qu'un espace de stockage persistant. Les autres options décrivent des API programmatiques, un service d'hébergement VPS (Lightsail) ou un environnement de développement intégré (IDE) pour navigateur nécessitant une configuration et une authentification classiques (Cloud9). Elles ne correspondent donc pas à la fonctionnalité décrite.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 78Ignoré  
Selon le modèle de responsabilité partagée d'AWS, quelle tâche incombe au client ?  
A. Maintenance de l'infrastructure nécessaire à l'exécution d'AWS Lambda

#### Explications

Incorrect — AWS est responsable de l'infrastructure qui exécute les offres sans serveur. Pour Lambda, AWS gère l'environnement d'exécution, la mise à l'échelle, les correctifs et les couches de calcul et de virtualisation sous-jacentes ; les clients fournissent et gèrent uniquement le code et la configuration de leur fonction.  
B. Mise à jour du système d'exploitation des instances Amazon DynamoDB

#### Explications

Incorrect — Amazon DynamoDB est un service de base de données NoSQL entièrement géré. AWS prend en charge le provisionnement des serveurs, la maintenance du système d'exploitation et les mises à jour du service. Les clients sont responsables de leur utilisation du service (modélisation des données, contrôle d'accès IAM, configuration du chiffrement, sauvegardes), et non des mises à jour du système d'exploitation des serveurs.  
C. Maintenance de l'infrastructure Amazon S3

#### Explications

Incorrect — Amazon S3 est un service de stockage d'objets géré où AWS assure l'infrastructure physique de stockage, la durabilité et la disponibilité. Les clients gèrent les objets et les contrôles d'accès (stratégies de compartiment, ACL, chiffrement), mais pas l'infrastructure S3 sous-jacente.  
**Bonne réponse**  
D. Mise à jour du système d'exploitation invité sur les instances Amazon EC2

#### Explications

Exact — Amazon EC2 est une infrastructure en tant que service (IaaS) : les clients sont responsables du système d’exploitation invité, des logiciels installés, de la configuration et de l’application des correctifs et mises à jour. AWS prend en charge les hôtes physiques, le réseau et l’hyperviseur, tandis que les clients gèrent la maintenance et la sécurité de leurs instances au niveau du système d’exploitation.  
Explication générale  
Cette question évalue la compréhension du modèle de responsabilité partagée d'AWS. Les services gérés et l'infrastructure physique/cloud relèvent de la responsabilité d'AWS (par exemple, Lambda, DynamoDB et S3). Les ressources que vous contrôlez, telles que les instances EC2, nécessitent la gestion du système d'exploitation invité, des correctifs et de la sécurité de la couche applicative. Par conséquent, la mise à jour du système d'exploitation invité des instances EC2 est à la charge du client, tandis que les autres options décrivent les responsabilités gérées par AWS.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 79Ignoré  
Une entreprise souhaite créer et publier des tableaux de bord interactifs de veille stratégique. Ces tableaux de bord nécessitent des analyses basées sur l'apprentissage automatique. Quel service ou outil AWS répond à ces exigences ?  
A. AWS Glue Studio

#### Explications

AWS Glue Studio est une interface visuelle permettant de créer, d'exécuter et de surveiller les tâches ETL (Extract-Transform-Load) dans le cadre d'AWS Glue. Elle se concentre sur la préparation, le catalogage et les pipelines de transformation des données, plutôt que sur la fourniture de tableaux de bord décisionnels interactifs ou d'informations visuelles intégrées basées sur le machine learning aux utilisateurs finaux.  
**Bonne réponse**  
B. Amazon QuickSight

#### Explications

Amazon QuickSight est un service de veille stratégique sans serveur doté d'un moteur en mémoire (SPICE) et de fonctionnalités natives pour les tableaux de bord interactifs et l'analyse basée sur le machine learning (par exemple : détection d'anomalies, prévisions et narrations automatisées). Conçu pour visualiser des données provenant de sources multiples et afficher des informations issues du machine learning directement dans les tableaux de bord, il répond parfaitement à ce besoin.  
C. Amazon Redshift

#### Explications

Amazon Redshift est un entrepôt de données géré, à l'échelle du pétaoctet, optimisé pour l'analyse SQL rapide et le stockage de données à grande échelle. Bien qu'il puisse servir de source de données pour l'analyse et s'intégrer au ML (Redshift ML) pour entraîner et exécuter des modèles, il ne s'agit pas d'un outil de création de tableaux de bord à proprement parler et nécessite un service de BI pour créer et publier des tableaux de bord interactifs.  
D. Amazone Athéna

#### Explications

Amazon Athena est un service de requêtes interactives sans serveur qui permet d'exécuter des requêtes SQL directement sur des données stockées dans Amazon S3. Il est utile pour les analyses ponctuelles et la préparation des résultats de requêtes en vue de leur visualisation, mais ne permet pas la création de tableaux de bord ni l'intégration de visualisations basées sur le machine learning ; un outil de BI distinct est nécessaire pour cela.  
Explication générale  
Ce scénario requiert un service capable de publier des tableaux de bord de BI interactifs et de mettre en valeur des informations issues du machine learning. Amazon QuickSight est conçu spécifiquement pour la BI sans serveur et intègre des fonctionnalités natives de ML (détection d'anomalies, prévision, narration) idéales pour intégrer ces informations dans les tableaux de bord. Les autres options (Glue Studio, Redshift, Athena) sont des services de préparation, de stockage ou d'interrogation de données qui seraient utilisés comme sources de données plutôt que comme couche de diffusion des tableaux de bord et des informations issues du ML.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 80Ignoré  
Une entreprise utilise une application serveur web de reporting sur des instances Amazon EC2. L'application s'exécute une fois par semaine et une fois par mois. Les instances EC2 peuvent être arrêtées lorsqu'elles ne sont pas utilisées. Quel est le modèle de facturation le plus avantageux pour ce cas d'utilisation ?  
A. Instances réservées standard

#### Explications

Les instances réservées standard (RI) nécessitent un engagement de 1 ou 3 ans en échange d'un tarif horaire réduit. Elles sont optimisées pour une utilisation continue et prévisible ; pour une instance exécutée seulement une fois par semaine ou par mois et pouvant être arrêtée la plupart du temps, l'engagement initial et à long terme des RI standard les rend moins rentables.  
B. Instances réservées convertibles

#### Explications

Les instances réservées convertibles permettent l'échange de réservations entre familles d'instances et offrent une flexibilité quant aux attributs des instances, mais elles nécessitent toujours un engagement pluriannuel et un modèle de paiement spécifique. Cet engagement les rend inadaptées aux charges de travail peu fréquentes et pouvant être interrompues entre deux exécutions.  
C. Réservations de capacité à la demande

#### Explications

Les réservations de capacité à la demande garantissent la capacité dans une zone de disponibilité spécifique, vous permettant ainsi de lancer des instances en cas de besoin. Conçues pour assurer la fiabilité et la conformité des charges de travail, et non pour réaliser des économies, les réservations de capacité sont facturées que les instances soient exécutées ou non. Elles ne sont donc pas optimales pour les charges de travail intermittentes.  
**Bonne réponse**  
D. Instances à la demande

#### Explications

L'utilisation d'instances EC2 à la demande ne nécessite aucun contrat à long terme et n'entraîne de frais que pendant leur exécution, ce qui la rend idéale pour les tâches planifiées et peu fréquentes. Pour un serveur de reporting exécuté chaque semaine et en fin de mois, et pouvant être arrêté le reste du temps, le lancement d'instances à la demande uniquement en cas de besoin permet de minimiser les coûts de calcul sans engagement de capacité ni frais de réservation.  
Explication générale  
Cette question évalue vos connaissances des modèles d'achat EC2 et de l'optimisation des coûts. Étant donné que la charge de travail est périodique et que les instances peuvent être arrêtées lorsqu'elles sont inactives, un modèle de tarification qui ne facture que la puissance de calcul active, sans engagement à long terme, est le plus adapté. Les modèles réservés et les réservations de capacité impliquent des engagements pluriannuels ou une capacité payée mais non utilisée, tandis que le modèle à la demande permet à l'entreprise de ne payer que pour les courtes périodes d'utilisation effective des serveurs.  
Domaine  
Domaine 4 : Facturation, tarification et assistance  
Question 81Ignoré  
Une entreprise souhaite migrer ses bases de données sur site vers des services de bases de données cloud gérés, en utilisant un processus de migration simplifié. Quel service ou outil AWS peut l'aider à répondre à ce besoin ?  
A. Passerelle de stockage AWS

#### Explications

Storage Gateway est un service d'intégration de stockage hybride qui expose des interfaces de fichiers, de volumes ou de bandes et met en cache les données entre les systèmes sur site et les services de stockage AWS. Il ne prend pas en charge les bases de données et ne propose pas les fonctionnalités de conversion de schéma ni de capture des modifications nécessaires à la migration de bases de données actives vers des moteurs de bases de données gérés.  
B. Service de migration d'applications AWS

#### Explications

Application Migration Service (MGN) réplique l'intégralité des serveurs pour une migration simplifiée vers Amazon EC2, en préservant les systèmes d'exploitation et les applications. Il est dédié à la migration des serveurs et non à la migration des bases de données relationnelles vers les services de bases de données gérés par AWS, ni à la traduction de schémas ou à la réplication continue des bases de données.  
C. AWS DataSync

#### Explications

DataSync automatise les transferts haute performance de fichiers et d'objets (NFS/SMB/Posix vers S3/EFS/FSx) et est optimisé pour le déplacement de données au niveau fichier. Il ne propose pas de fonctionnalités de migration spécifiques aux bases de données, telles que la réplication transactionnelle, la conversion de schéma ou la capture des données modifiées (CDC) pour la migration de bases de données vers RDS/Aurora.  
**Bonne réponse**  
D. Service de migration de bases de données AWS (AWS DMS)

#### Explications

AWS Database Migration Service est spécialement conçu pour migrer des bases de données vers des solutions gérées par AWS. Il prend en charge les migrations hétérogènes et homogènes, la migration complète avec réplication continue (capture des données modifiées) afin de minimiser les interruptions de service, et s'intègre à l'outil de conversion de schéma AWS pour les conversions de moteur/schéma, ce qui en fait l'outil idéal pour ce scénario.  
Explication générale  
La question porte sur la migration de bases de données relationnelles locales vers les services de bases de données gérés d'AWS via un processus simplifié. AWS DMS est le service approprié car il prend en charge le chargement complet des données et la réplication continue (CDC), est compatible avec plusieurs moteurs source/cible et s'intègre à SCT pour la conversion de schéma. Les autres options répondent à des besoins différents : Storage Gateway pour le stockage hybride, Application Migration Service pour le réhébergement de serveurs et DataSync pour les transferts de fichiers et d'objets. Aucune de ces solutions n'offre les fonctionnalités de réplication et de conversion spécifiques aux bases de données proposées par DMS.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 82Ignoré  
Un utilisateur dispose d'une charge de travail avec état qui s'exécutera sur Amazon EC2 pendant les 3 prochaines années. Quel est le modèle de tarification le plus avantageux pour cette charge de travail ?  
A. Instances à la demande

#### Explications

La tarification à l'usage est optimisée pour les charges de travail de courte durée ou imprévisibles. Sur un déploiement continu sur plusieurs années, elle engendre le coût total le plus élevé, car elle ne prévoit ni remise sur engagement ni réservation de capacité.  
**Bonne réponse**  
B. Cas réservés

#### Explications

Les engagements de capacité à long terme permettent de réduire considérablement le coût horaire en échange d'une durée de 1 ou 3 ans. Les options incluent les instances réservées standard (remises maximales pour les familles d'instances fixes) et les instances réservées convertibles (flexibilité permettant de modifier les attributs de l'instance). Les options de paiement (paiement intégral à l'avance, paiement partiel à l'avance, aucun paiement à l'avance) et la portée (zonale ou régionale) influent sur les économies réalisées. Pour une charge de travail EC2 prévisible et avec état, censée fonctionner en continu pendant trois ans, ce modèle basé sur l'engagement offre les économies les plus importantes parmi les options proposées.  
C. Instances dédiées

#### Explications

L'exécution sur du matériel dédié à un seul client (location dédiée) isole les instances EC2 pour des raisons de conformité ou de licence, mais entraîne des frais horaires plus élevés et n'offre pas la même rentabilité qu'un engagement à long terme ; elle est choisie pour répondre aux besoins d'isolation, et non pour minimiser les coûts à long terme.  
D. Exemples ponctuels

#### Explications

Les instances achetées à prix fortement réduits car elles utilisent de la capacité excédentaire sont interruptibles et peuvent être récupérées par AWS avec un préavis très court. Ce risque d'interruption et l'absence de garantie de fonctionnement continu les rendent inadaptées à une charge de travail avec état, toujours active, sur 3 ans.  
Explication générale  
Cette question évalue votre connaissance des modèles de tarification AWS pour une utilisation prévisible et de longue durée d'EC2. La réservation de capacité pour une durée de 1 ou 3 ans permet de réaliser les économies les plus importantes et prévisibles (grâce à la tarification de la capacité réservée et ses variantes). En revanche, la réservation à la demande est plus coûteuse sur le long terme, la réservation Spot est interruptible et donc inadaptée aux charges de travail avec état, et la location dédiée augmente le coût en raison de l'isolation plutôt que des économies. (Remarque : les AWS Savings Plans constituent une alternative moderne offrant également des remises pluriannuelles, mais ne figuraient pas parmi les options proposées.)  
Domaine  
Domaine 4 : Facturation, tarification et assistance  
Question 83Ignoré  
Une entreprise a besoin d'utiliser un logiciel tiers pour ses charges de travail sur AWS. Quel service ou fonctionnalité AWS peut-elle utiliser pour acheter ce logiciel ?  
A. Gestionnaire d'accès aux ressources AWS

#### Explications

Incorrect : ce service permet de partager des ressources AWS (par exemple, des sous-réseaux VPC, des passerelles de transit et d’autres ressources prises en charge) entre comptes AWS ou au sein d’une organisation AWS. Il ne constitue pas un canal d’approvisionnement ni un catalogue pour l’achat de logiciels tiers.  
B. Services gérés AWS

#### Explications

Incorrect : cette offre est axée sur la prise en charge par AWS des tâches de gestion opérationnelle (surveillance, correctifs, gestion des incidents, contrôle des changements) de l’infrastructure client. Il ne s’agit pas d’une plateforme de vente ou d’un système d’abonnement pour l’acquisition de logiciels tiers.  
C. Gestionnaire de licences AWS

#### Explications

Incorrect — ce service centralise et applique les règles d'utilisation des licences logicielles (y compris le suivi BYOL et les règles de licence). Il facilite la gestion des droits d'accès et la conformité, mais ne propose pas de plateforme ni de service d'achat/d'abonnement pour les produits tiers.  
**Bonne réponse**  
D. Place de marché AWS

#### Explications

Tout à fait \! Il s’agit du catalogue d’approvisionnement AWS : une place de marché numérique organisée où les clients peuvent trouver, s’abonner, acheter et déployer des solutions tierces (AMI, SaaS, conteneurs, etc.). Il s’intègre à la facturation AWS, prend en charge les offres privées et plusieurs modèles de tarification, et propose des options de déploiement qui simplifient l’acquisition et l’utilisation de logiciels tiers sur AWS.  
Explication générale  
Cette question vise à déterminer où se procurer des logiciels tiers pour les charges de travail sur AWS. AWS Marketplace est le service d'approvisionnement/catalogue dédié qui permet de découvrir, de s'abonner/acheter et de déployer des produits tiers avec facturation intégrée. Les autres options concernent le partage de ressources, les opérations gérées ou le suivi des licences et ne constituent donc pas une plateforme d'achat.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 84Ignoré  
Une entreprise souhaite mettre en place un calendrier de rotation des identifiants des utilisateurs de sa base de données. Quel service AWS répondra à ce besoin avec le moins de frais généraux opérationnels ?  
A. Responsable des systèmes AWS

#### Explications

AWS Systems Manager propose des fonctionnalités telles que Parameter Store et les runbooks d'automatisation pour la gestion de la configuration et des secrets, mais n'offre pas de flux de travail intégré et géré pour la rotation des secrets. La mise en œuvre d'une rotation planifiée des informations d'identification avec Systems Manager nécessite la création et la maintenance de documents Automation ou de fonctions Lambda personnalisés, ainsi qu'un effort opérationnel supplémentaire par rapport à un service dédié à la rotation des secrets.  
**Bonne réponse**  
B. Gestionnaire de secrets AWS

#### Explications

AWS Secrets Manager est conçu spécifiquement pour la gestion du cycle de vie des secrets : il stocke les secrets chiffrés avec AWS KMS, s’intègre à IAM pour le contrôle d’accès, prend en charge la rotation automatique via les fonctions de rotation Lambda (y compris les rotations RDS intégrées pour les moteurs compatibles) et gère les versions des secrets ainsi que les planifications de rotation. Ces fonctionnalités natives minimisent la charge opérationnelle liée à la rotation des informations d’identification de base de données.  
C. Gestionnaire de licences AWS

#### Explications

AWS License Manager est conçu pour le suivi et la gestion des licences logicielles et des droits d'accès dans les environnements AWS et sur site. Il ne permet pas de stocker ni de renouveler les identifiants de base de données et ne répond donc pas aux exigences.  
D. Services gérés AWS

#### Explications

AWS Managed Services est une offre opérationnelle qui facilite l'exploitation de l'infrastructure AWS conformément aux bonnes pratiques. Il ne s'agit pas d'un produit de gestion des secrets et il ne propose pas de fonctionnalité native et autonome de rotation des secrets pour les identifiants de base de données ; son utilisation ne serait donc pas la solution la plus économique en termes de coûts opérationnels.  
Explication générale  
L'exigence principale est la rotation automatisée et peu gourmande en ressources des informations d'identification de base de données. AWS Secrets Manager offre un stockage natif des secrets, un chiffrement basé sur KMS, un contrôle d'accès IAM et une rotation automatique intégrée (via des fonctions de rotation Lambda et des intégrations RDS prises en charge), ce qui en fait la solution idéale. Les autres options ne proposent pas de fonctionnalités de rotation natives (Systems Manager nécessite une automatisation personnalisée) ou ne sont pas liées à la gestion des secrets (License Manager, AWS Managed Services).  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 85Ignoré  
Une entreprise bénéficiant du support AWS Enterprise s'apprête à lancer une nouvelle version d'un produit populaire dans deux mois. Elle prévoit une forte augmentation du trafic sur son site web, hébergé sur des instances Amazon EC2. Quelle action l'entreprise doit-elle entreprendre pour évaluer sa capacité à gérer cette montée en charge ?  
A. Remplacez les instances EC2 par des fonctions AWS Lambda.

#### Explications

Incorrect — cette option propose une migration architecturale vers un modèle de calcul différent (sans serveur), ce qui constitue un effort de refonte plutôt qu'une évaluation de l'état de préparation opérationnelle. Les plateformes sans serveur présentent des caractéristiques opérationnelles différentes (limites de concurrence, démarrages à froid, durée d'exécution et stockage éphémère) et nécessitent une conception, des tests et une validation ; elles ne fournissent pas la planification proactive de la capacité, la coordination des tests de charge ni les procédures d'exploitation nécessaires pour un pic de trafic planifié.  
**Bonne réponse**  
B. Utilisez la prise en charge de AWS Infrastructure Event Management (IEM).

#### Explications

Exact — La gestion des événements d'infrastructure (IEM) est un service proposé aux clients du support AWS Enterprise qui assure une planification proactive des événements de grande envergure. L'IEM comprend l'analyse de l'architecture, la planification de la capacité, des conseils pour les tests de charge, des procédures opérationnelles, la validation de la mise à l'échelle et du basculement, ainsi qu'une coordination directe avec les équipes AWS afin de garantir que l'infrastructure puisse supporter le trafic prévu.  
C. Soumettez une demande sur AWS Marketplace pour surveiller l'événement.

#### Explications

Incorrect — AWS Marketplace est un catalogue permettant d'acquérir des logiciels et des solutions tiers. Bien que des produits de surveillance puissent y être achetés, Marketplace ne fournit pas la planification opérationnelle AWS ni les services proactifs et concrets de préparation aux incidents proposés par le biais du support aux entreprises (tels que IEM).  
D. Consultez les rapports de couverture dans la console AWS Cost Management.

#### Explications

Incorrect — Les rapports de gestion des coûts et de couverture se concentrent sur la facturation, les modèles d'utilisation, la couverture des réservations et les budgets. Ils n'évaluent pas les performances, la capacité ni la préparation opérationnelle aux pics de trafic et ne permettent pas de réaliser des tests de charge ni de créer de plans d'exploitation.  
Explication générale  
Cette question évalue vos connaissances des offres de support AWS Enterprise. Dans le cadre du lancement d'un produit et de la prévision d'une forte augmentation du trafic, la solution appropriée consiste à demander Infrastructure Event Management (IEM), qui propose une planification proactive, des conseils en matière de capacité et de tests de charge, ainsi que des manuels d'exploitation. Les options proposées (migration architecturale, service d'approvisionnement/catalogue et rapports de coûts) n'offrent pas le support opérationnel et ciblé sur les événements qu'apporte IEM.  
Domaine  
Domaine 4 : Facturation, tarification et assistance  
Question 86Ignoré  
Une entreprise souhaite exécuter sa charge de travail sur des instances Amazon EC2 pendant plus d'un an. Cette charge de travail fonctionnera en continu. Quelle option offre un tarif horaire réduit par rapport au tarif horaire des instances à la demande ?  
A. Processeur AWS Graviton

#### Explications

Ce document décrit une architecture de processeur EC2 basée sur Arm qui peut offrir un meilleur rapport prix/performances pour certaines charges de travail, mais il s'agit d'un choix de matériel/instance plutôt que d'un engagement tarifaire. Il ne garantit pas, à lui seul, un tarif horaire réduit pour une durée d'un ou trois ans.  
B. Hôtes dévoués

#### Explications

Il s'agit de l'utilisation d'un serveur physique entier pour un seul compte afin de répondre aux exigences de conformité ou de licence. Ce modèle de location influe sur l'emplacement d'exécution des instances et sur la licence, et non sur un plan tarifaire fixe réduisant le tarif horaire standard à la demande.  
**Bonne réponse**  
C. Plans d'économies sur les instances EC2

#### Explications

Les plans d'économies ciblant l'utilisation des instances EC2 permettent de réduire les coûts horaires effectifs en échange d'un engagement de 1 ou 3 ans sur un tarif horaire fixe. Les plans d'économies au niveau de l'instance offrent les remises les plus importantes pour une famille d'instances et une région spécifiques, s'appliquant automatiquement à l'utilisation correspondante et réduisant ainsi les coûts des charges de travail continues par rapport à la tarification à la demande.  
D. Instances Amazon EC2 Auto Scaling

#### Explications

Un service de mise à l'échelle qui ajuste le nombre d'instances en fonction de la demande. Il permet d'éviter le surdimensionnement et de réduire les coûts globaux en alignant la capacité sur l'utilisation, mais il ne s'agit pas d'un engagement d'achat ni d'un programme tarifaire qui réduit directement les tarifs horaires à la demande.  
Explication générale  
Pour les charges de travail exécutées en continu pendant plus d'un an, un programme de tarification basé sur l'engagement, qui réduit le coût horaire effectif, est la solution idéale. Les plans d'économies au niveau de l'instance offrent de telles réductions en exigeant un engagement de dépenses constant sur 1 ou 3 ans, puis en appliquant des tarifs réduits à l'utilisation EC2 correspondante. Les autres options concernent l'architecture du processeur (performance/rapport coût/efficacité), la location physique dédiée (conformité/licences) ou les mécanismes de mise à l'échelle ; aucune ne constitue un engagement tarifaire réduisant directement le tarif horaire à la demande.  
Domaine  
Domaine 4 : Facturation, tarification et assistance  
Question 87Ignoré  
Une entreprise exploite un centre de contact client sur site. Elle souhaite migrer vers une solution cloud capable d'intégrer des fonctionnalités d'intelligence artificielle afin d'améliorer l'expérience utilisateur. Quel service AWS répond à ces exigences ?  
A. Longueur d'onde AWS

#### Explications

Ce service fournit des capacités de calcul et de stockage en périphérie du réseau 5G pour permettre des charges de travail mobiles et IoT à très faible latence. Il s'agit d'un service d'intégration de l'informatique de périphérie et des télécommunications, qui n'inclut pas les fonctionnalités de centre de contact, l'IA conversationnelle ni les outils d'analyse nécessaires aux interactions clients.  
B. AWS IAM Identity Center (AWS Single Sign-On)

#### Explications

Un service centralisé d'identité et d'authentification unique pour gérer l'accès des utilisateurs aux comptes et applications AWS. Il gère l'authentification et l'autorisation, mais n'offre pas de fonctionnalités de centre de contact, de traitement vocal ni d'expérience client basée sur l'IA.  
C. AWS Direct Connect

#### Explications

Ce service réseau établit une connexion privée à haut débit entre les centres de données sur site et AWS, garantissant ainsi des performances réseau optimales. Il se concentre sur la connectivité et le débit, mais pas sur les opérations des centres de contact ni sur l'analyse vocale/IA intégrée.  
**Bonne réponse**  
D. Amazon Connect

#### Explications

Un service de centre de contact cloud entièrement géré, intégrant l'IA conversationnelle et l'analyse de données. Il intègre nativement des technologies telles qu'Amazon Lex (chatbots et interfaces conversationnelles), Amazon Transcribe et Amazon Polly (transcription vocale et synthèse vocale), ainsi que Contact Lens pour l'analyse des conversations et la détection des sentiments, permettant ainsi la migration depuis les centres de contact sur site et un accès immédiat à des fonctionnalités d'expérience client pilotées par l'IA.  
Explication générale  
Ce test évalue la capacité à reconnaître le service AWS conçu pour la modernisation des centres de contact. La bonne réponse est la plateforme de centre de contact managée qui intègre l'IA conversationnelle, les services vocaux et l'analyse de données, permettant ainsi la migration depuis les solutions sur site et l'amélioration des interactions client. Les réponses incorrectes sont des services de calcul en périphérie, de gestion des identités ou de connectivité réseau, qui ne fournissent pas les fonctionnalités complètes de centre de contact et d'IA requises.  
Domaine  
Domaine 3 : Technologies et services cloud  
Question 88Ignoré  
Quel service AWS permet de gérer les autorisations d'accès aux ressources AWS à l'aide de politiques ?  
A. Inspecteur Amazon

#### Explications

Amazon Inspector est un service d'évaluation des vulnérabilités qui analyse les instances EC2, les images de conteneurs et les configurations réseau afin d'identifier les problèmes de sécurité. Il ne propose aucun mécanisme permettant de créer ou d'appliquer des politiques de contrôle d'accès aux identités ou aux ressources.  
B. Détective Amazonien

#### Explications

Amazon Detective agrège et visualise les données relatives à la sécurité (telles que les journaux de flux VPC, CloudTrail et les résultats de GuardDuty) afin de faciliter les investigations et l'analyse des causes profondes. Il s'agit d'un service d'investigation qui ne définit ni ne gère les autorisations ou les politiques.  
**Bonne réponse**  
C. Gestion des identités et des accès AWS (IAM)

#### Explications

AWS Identity and Access Management (IAM) est le service centralisé d'authentification et d'autorisation sur AWS. Il permet de créer des identités (utilisateurs, groupes, rôles), de définir des autorisations à l'aide de politiques JSON basées sur l'identité et les ressources, d'utiliser des informations d'identification et des rôles temporaires pour l'accès inter-comptes ou fédéré, et d'appliquer le principe du moindre privilège (y compris les limites d'autorisation). IAM est le service idéal pour gérer les autorisations via des politiques.  
D. Amazon GuardDuty

#### Explications

Amazon GuardDuty est un service de détection continue des menaces qui analyse les journaux et les événements pour identifier les activités potentiellement malveillantes et générer des rapports. Bien qu'il contribue à la détection des menaces de sécurité, il ne crée ni n'applique de politiques IAM et ne gère pas les autorisations d'accès aux ressources.  
Explication générale  
Ce test vérifie la reconnaissance du service AWS responsable de la gestion des autorisations. IAM est le service conçu pour définir et appliquer les contrôles d'accès aux ressources AWS via des documents de stratégie, des identités, des rôles et des contrôles associés. Les autres options (Inspector, Detective et GuardDuty) sont des services de sécurité axés respectivement sur l'évaluation des vulnérabilités, l'investigation et la détection des menaces ; ils ne gèrent pas les stratégies d'accès.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 89Ignoré  
Une entreprise exécute une charge de travail dans le cloud AWS. Quelle bonne pratique AWS garantit l'architecture la plus rentable pour cette charge de travail ?  
A. Accouplement lâche

#### Explications

Concevoir des composants minimisant les dépendances (par exemple, en utilisant des files d'attente de messages, des bus d'événements ou des limites de service claires) améliore l'évolutivité, l'isolation des pannes et l'agilité. Ces avantages permettent une utilisation plus efficace des ressources à long terme, mais cette pratique vise la fiabilité et la maintenabilité plutôt que la réduction directe des dépenses en ressources.  
**Bonne réponse**  
B. Redimensionnement

#### Explications

Le dimensionnement approprié des ressources de calcul, de base de données et de stockage en fonction de leur utilisation permet de réduire le gaspillage lié au surdimensionnement. Utilisez les outils et fonctionnalités AWS, tels qu'AWS Compute Optimizer, les recommandations de dimensionnement d'AWS Cost Explorer, les vérifications Trusted Advisor, les métriques CloudWatch, Auto Scaling, les instances Spot, les instances réservées et les plans d'économies, pour analyser l'utilisation et ajuster les types d'instances, les tailles ou les options d'achat. Cette approche permet de réduire directement les coûts récurrents et constitue la principale méthode d'optimisation des coûts.  
C. Mise en cache

#### Explications

Le placement des données fréquemment consultées dans des caches en mémoire (Amazon ElastiCache) ou en périphérie (Amazon CloudFront) réduit la charge et la latence du serveur, et peut diminuer les coûts de calcul ou de base de données dans certaines architectures. Toutefois, la mise en cache engendre des coûts en ressources et constitue principalement une optimisation des performances qui n'a d'impact que de manière indirecte sur le coût total, et ce, dans des scénarios spécifiques.  
D. Redondance

#### Explications

La duplication des ressources entre zones de disponibilité ou régions (multi-AZ, multi-région, instances de basculement, réplication interrégionale) accroît la disponibilité et la résilience afin de répondre aux objectifs de reprise d'activité. Cette redondance augmente généralement l'utilisation des ressources et les coûts, et est privilégiée pour garantir la fiabilité et la continuité des activités, et non pour minimiser les dépenses.  
Explication générale  
La méthode la plus directe pour obtenir une architecture optimale en termes de coûts consiste à adapter la capacité des ressources à la demande réelle, en analysant l'utilisation et en ajustant la taille des instances, les familles d'instances, les classes de stockage et les options d'achat. Cette approche utilise les outils AWS (Compute Optimizer, Cost Explorer, CloudWatch, Auto Scaling, plans Spot/Réservé/Économies) pour réduire le gaspillage. D'autres options (découplage, mise en cache, redondance) améliorent l'évolutivité, les performances ou la disponibilité et peuvent avoir un impact indirect sur les coûts, mais elles ne constituent pas la principale pratique d'optimisation des coûts.  
Domaine  
Domaine 4 : Facturation, tarification et assistance  
Question 90Ignoré  
Une entreprise souhaite tester une nouvelle application. Quel principe AWS l'aidera à réaliser ce test ?  
A. Prenez des engagements à long terme en échange d'une réduction de prix.

#### Explications

Il s'agit d'options d'achat à long terme (par exemple, les instances réservées EC2 ou les plans d'économies) qui offrent des remises en échange d'un engagement. Ces options réduisent la flexibilité et peuvent engendrer des coûts inutiles pour les environnements de test éphémères ; elles ne sont donc pas idéales pour tester de nouvelles applications.  
**Bonne réponse**  
B. Adapter la capacité à la hausse ou à la baisse selon les besoins, sans engagement à long terme.

#### Explications

Décrit les caractéristiques du cloud que sont l'élasticité et le provisionnement à la demande. AWS vous permet de provisionner et de supprimer rapidement des ressources (EC2, Lambda, conteneurs, RDS, etc.), d'utiliser la mise à l'échelle automatique et de payer à l'usage, ce qui permet de créer des environnements de test rapides et économiques, adaptables à la hausse ou à la baisse selon les besoins, sans engagement à long terme.  
C. Avoir un contrôle total sur l'infrastructure applicative.

#### Explications

Décrit le contrôle total de l'infrastructure (une caractéristique de l'IaaS). Bien qu'AWS offre un contrôle lorsque nécessaire, exiger un contrôle total augmente la charge de gestion et ne constitue pas le principe permettant spécifiquement des tests rapides et économiques ; les services gérés et élastiques sont généralement préférables pour les tests.  
D. Gérer toutes les tâches de maintenance liées au cloud.

#### Explications

Il semble y avoir une confusion des responsabilités : AWS gère les composants d’infrastructure sous-jacents (matériel, virtualisation, certains services gérés), mais les clients conservent la responsabilité de leurs applications et d’une partie de la maintenance au niveau du système d’exploitation (modèle de responsabilité partagée). La gestion de l’intégralité de la maintenance n’est ni exacte ni le principe fondamental qui facilite les tests flexibles.  
Explication générale  
Cette question porte sur le principe d'élasticité/provisionnement à la demande propre au cloud : la possibilité de provisionner, d'adapter et de supprimer rapidement des ressources permet aux équipes de créer des environnements de test temporaires sans engagement à long terme. Les engagements d'achat à long terme, la recherche d'un contrôle total de l'infrastructure ou la prise en charge complète de la maintenance n'offrent pas la même agilité et la même rentabilité pour les tests.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 91Ignoré  
Quel service ou fonctionnalité AWS fournit un pare-feu au niveau du sous-réseau au sein d'un VPC ?  
A. Groupe de sécurité

#### Explications

Les groupes de sécurité sont des pare-feu virtuels avec état qui s'attachent à des instances ou à des interfaces réseau (ENI). Ils n'assurent pas l'application des règles à l'échelle du sous-réseau, ne prennent pas en charge les règles de refus explicites (le trafic de retour est automatiquement autorisé) et ne peuvent donc pas servir de pare-feu au niveau du sous-réseau.  
**Bonne réponse**  
B. ACL du réseau

#### Explications

Les listes de contrôle d'accès réseau (ACL réseau) sont des listes de contrôle d'accès sans état appliquées aux sous-réseaux. Elles évaluent des règles numérotées d'entrée et de sortie pour tout le trafic entrant ou sortant d'un sous-réseau, prennent en charge les entrées d'autorisation et de refus explicites et nécessitent des règles distinctes pour le trafic de réponse, car elles sont sans état ; elles constituent ainsi le mécanisme de pare-feu approprié au niveau du sous-réseau dans un VPC.  
C. Interface réseau élastique

#### Explications

Une interface réseau élastique (ENI) est une carte réseau virtuelle associée à une instance et fournissant des adresses IP, des adresses MAC et des associations de groupes de sécurité. Il s'agit d'un composant réseau, et non d'un pare-feu de filtrage du trafic pour les sous-réseaux.  
D. AWS WAF

#### Explications

AWS WAF est un pare-feu d'applications web qui fonctionne au niveau de la couche application (HTTP/S) et s'intègre à CloudFront, ALB, API Gateway, etc. Il protège le trafic web et les points de terminaison des applications, et non le trafic VPC général au niveau du sous-réseau.  
Explication générale  
Cette question teste les concepts de contrôle du trafic VPC. Les listes de contrôle d'accès réseau (ACL réseau) fonctionnent au niveau du sous-réseau et sont sans état, permettant des règles d'autorisation/de refus explicites qui s'appliquent à toutes les ressources d'un sous-réseau. À l'inverse, les groupes de sécurité sont avec état et s'appliquent au niveau de l'instance/ENI, AWS WAF protège le trafic HTTP/S de la couche application et les ENI sont des composants d'interface réseau, et non des pare-feu. Par conséquent, le pare-feu au niveau du sous-réseau correspond à l'ACL réseau.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 92Ignoré  
Quel service AWS peut générer des informations utilisables par des auditeurs externes ?  
A. Amazon Cognito

#### Explications

Un service d'identité et d'accès utilisé pour l'authentification, l'autorisation et la fédération des utilisateurs. Il émet des jetons et gère les annuaires d'utilisateurs, mais ne produit pas d'instantanés de configuration des ressources, d'évaluations des règles de conformité ni d'historiques de configuration prêts pour un audit.  
B. Amazon FSx

#### Explications

Un service de stockage de fichiers géré qui fournit des systèmes de fichiers partagés (par exemple, Lustre, Windows) pour les applications. Il s'agit d'une offre de stockage et non d'un service générant l'historique des modifications de configuration, les évaluations de conformité ou les rapports d'audit exigés par les auditeurs externes.  
**Bonne réponse**  
C. Configuration AWS

#### Explications

Ce service enregistre et audite en continu la configuration des ressources AWS, stocke des instantanés de configuration et un historique des modifications, prend en charge les règles gérées et les packs de conformité, et permet d'exporter des preuves (par exemple vers S3). Ces fonctionnalités le rendent idéal pour produire les informations utilisées par les auditeurs pour vérifier la conformité.  
D. Inspecteur Amazon

#### Explications

Ce service d'évaluation des vulnérabilités analyse les ressources de calcul et les images de conteneurs afin d'identifier les problèmes de sécurité. Il produit des résultats d'évaluation de sécurité, mais ne fournit pas d'historique complet de la configuration des ressources ni de rapports d'évaluation de la conformité aux règles destinés à servir de preuves aux auditeurs.  
Explication générale  
Cette question évalue vos connaissances des services AWS utilisés pour la conformité et l'audit. La bonne réponse permet un suivi continu de la configuration des ressources, de l'historique des modifications, des évaluations de conformité basées sur des règles et de la production de preuves exportables pour les auditeurs. Les autres options sont axées sur l'identité, le stockage ou l'évaluation des vulnérabilités et ne fournissent donc pas toutes les fonctionnalités d'audit de configuration requises par les auditeurs externes.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 93Ignoré  
Une entreprise souhaite surveiller les performances de ses charges de travail. Elle veut s'assurer que les services cloud sont fournis à un niveau répondant à ses besoins métiers. Quelle perspective du cadre d'adoption du cloud AWS (AWS CAF) répond à ces exigences ?  
A. Affaires

#### Explications

L'approche métier aborde la manière dont les initiatives cloud s'alignent sur la stratégie organisationnelle, les flux de valeur et le retour sur investissement. Elle contribue à définir les résultats attendus et les parties prenantes, mais ne se concentre pas sur la surveillance technique, les processus opérationnels ni les outils nécessaires à la mesure et au maintien des performances des charges de travail.  
B. Gouvernance

#### Explications

La gouvernance se concentre sur les politiques, la gestion des risques, les pouvoirs de décision et les contrôles de conformité afin de garantir une utilisation responsable du cloud. Si elle définit qui gère et approuve les contrôles, elle ne fournit pas les mécanismes opérationnels de surveillance, d'alerte et de réponse aux incidents nécessaires au suivi des performances des charges de travail.  
C. Plateforme

#### Explications

L'approche plateforme concerne l'architecture, les services partagés, le provisionnement et l'infrastructure technique (calcul, stockage, réseau et automatisation) sur laquelle s'exécutent les applications. Elle se concentre sur la conception et la mise en œuvre de l'infrastructure plutôt que sur la surveillance continue et la gestion opérationnelle des performances des charges de travail.  
**Bonne réponse**  
D. Opérations

#### Explications

Cette perspective définit les processus opérationnels, les procédures d'exploitation, la surveillance, la gestion des incidents et les indicateurs qui garantissent que les charges de travail répondent aux objectifs de disponibilité, de fiabilité et de performance. Elle couvre les activités opérationnelles continues et s'appuie sur des services et des pratiques (par exemple, les indicateurs et les alarmes, la journalisation, les procédures de gestion des incidents et l'automatisation) pour vérifier les SLA et maintenir la disponibilité du service.  
Explication générale  
Le cadre d'adoption du cloud AWS organise l'adoption du cloud selon différentes perspectives répondant à diverses problématiques. La surveillance des performances des charges de travail et la garantie que les services répondent aux exigences métier sont des activités opérationnelles qui nécessitent des processus, des indicateurs, des alertes et une gestion des incidents définis — des fonctionnalités offertes par la perspective axée sur les opérations. D'autres perspectives (métier, gouvernance et plateforme) abordent respectivement la stratégie, les politiques et l'architecture, mais ne fournissent pas en priorité la surveillance continue et les contrôles opérationnels nécessaires à la gestion des performances des charges de travail.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 94Ignoré  
Quel avantage d'AWS Cloud permet à une entreprise de déployer rapidement des ressources cloud pour accéder aux infrastructures de calcul, de stockage et de bases de données en quelques minutes seulement ?  
A. Élasticité

#### Explications

Incorrect — Ce concept décrit la modification automatique de la capacité en fonction de la charge (par exemple, AWS Auto Scaling et Elastic Load Balancing), garantissant ainsi le maintien des performances des applications malgré les variations de la demande ; il fait référence au comportement de mise à l’échelle dynamique, et non à la vitesse de provisionnement initiale à la demande décrite dans la question.  
B. Économies de coûts

#### Explications

Incorrect — Cet avantage concerne la réduction des coûts grâce à des modèles de tarification et à des gains d'efficacité opérationnelle (par exemple, le paiement à l'utilisation, les instances réservées et les plans d'épargne). Bien qu'important, il porte sur les résultats financiers plutôt que sur la rapidité de déploiement des ressources.  
**Bonne réponse**  
C. Agilité

#### Explications

Correct — La question porte sur l'avantage qui permet un provisionnement quasi instantané de l'infrastructure. AWS offre cette possibilité via des services à la demande (EC2, S3, RDS), des API/console/CLI et des outils d'automatisation/orchestration (AWS CloudFormation, Service Catalog), permettant aux équipes de déployer des ressources de calcul, de stockage et de base de données en quelques minutes pour des expérimentations rapides et une mise sur le marché accélérée.  
D. Fiabilité

#### Explications

Incorrect — Cet attribut se concentre sur la disponibilité, la durabilité et la tolérance aux pannes du système (par exemple, les déploiements Multi-AZ, les contrôles d'intégrité Route 53 et la durabilité S3), garantissant que les charges de travail restent opérationnelles en cas de panne ; il ne décrit pas la vitesse de création de nouvelles ressources.  
Explication générale  
Cette question évalue l'avantage du cloud qui met l'accent sur la mise en service rapide des services. La bonne réponse est l'avantage qui permet la création à la demande de ressources de calcul, de stockage et de base de données grâce aux services AWS et à l'automatisation, ce qui facilite l'expérimentation et accélère la mise en œuvre. Les réponses incorrectes font référence à d'autres avantages distincts du cloud : la mise à l'échelle dynamique en fonction de la charge, les mécanismes de réduction des coûts et la disponibilité/tolérance aux pannes.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 95Ignoré  
Une entreprise a besoin d'un service de détection des menaces qui surveille en permanence ses comptes AWS, ses charges de travail et ses compartiments Amazon S3 afin de détecter toute activité malveillante ou tout comportement non autorisé. Quel service AWS répond à ces exigences ?  
A. Bouclier AWS

#### Explications

Un service de protection DDoS géré, axé sur l'atténuation des attaques volumétriques et de couche protocolaire. Il n'effectue pas d'analyse comportementale de l'activité des comptes ni de la télémétrie des ressources (CloudTrail, journaux de flux VPC, journaux DNS ou événements de données S3) pour produire des conclusions de sécurité exploitables.  
B. Gestionnaire de pare-feu AWS

#### Explications

Un outil centralisé de gestion des politiques et des règles pour des services tels que WAF, Shield Advanced et les stratégies de groupe de sécurité sur l'ensemble des comptes. Son rôle est l'application et le déploiement des politiques, et non l'analyse continue ou la détection d'anomalies dans les journaux et les événements.  
**Bonne réponse**  
C. Amazon GuardDuty

#### Explications

Un service de détection des menaces géré qui analyse en continu plusieurs sources de télémétrie (événements de gestion AWS CloudTrail, journaux de flux VPC, journaux DNS et, en option, journaux d'événements de données S3) à l'aide de renseignements sur les menaces et d'apprentissage automatique pour générer des résultats de sécurité priorisés et s'intégrer à Security Hub/EventBridge pour la réponse.  
D. Inspecteur Amazon

#### Explications

Service automatisé d'évaluation et d'analyse des vulnérabilités des instances EC2, des images de conteneurs et autres ressources, permettant d'identifier les CVE et les problèmes de configuration. Il effectue des évaluations de sécurité au niveau des ressources plutôt qu'une détection continue des comportements et des menaces à l'échelle du compte.  
Explication générale  
La question porte sur les capacités de détection des menaces d'AWS. La bonne réponse est le service qui effectue une analyse comportementale continue des données de télémétrie des comptes et des ressources (CloudTrail, journaux de flux VPC, journaux DNS et événements de données S3) et qui affiche les résultats prioritaires : un service de détection des menaces dédié. Les autres options se concentrent sur la protection contre les attaques DDoS, la gestion centralisée des pare-feu et des politiques, ou l'analyse des vulnérabilités, et ne proposent pas la même détection continue des menaces au niveau du compte.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 96Ignoré  
Une entreprise migre vers le cloud AWS au lieu d'exécuter son infrastructure sur site. Parmi les propositions suivantes, lesquelles constituent des avantages de cette migration ? (Choisissez deux réponses.)  
A. Suppression de la nécessité de réaliser des audits de sécurité

#### Explications

Incorrect. La migration vers AWS ne dégage pas le client de sa responsabilité en matière de sécurité et de conformité. Dans le cadre du modèle de responsabilité partagée d'AWS, AWS gère la sécurité de l'infrastructure cloud, tandis que les clients sont responsables de la sécurité des données, de l'identité et des configurations au sein du cloud. Les clients doivent toujours effectuer des audits et une surveillance à l'aide des services AWS tels qu'AWS CloudTrail, AWS Config, Amazon GuardDuty et AWS Audit Manager afin de démontrer et de maintenir leur conformité.  
**Sélection correcte**  
B. Portée et agilité mondiales accrues

#### Explications

Tout à fait. L'infrastructure mondiale d'AWS (régions, zones de disponibilité et points de présence) et le provisionnement à la demande des services (EC2, Lambda, bases de données gérées, etc.) permettent aux entreprises de s'étendre géographiquement et d'innover rapidement. Cette présence mondiale et ce provisionnement rapide améliorent la latence, la portée et l'agilité opérationnelle.  
**Sélection correcte**  
C. Capacité de déploiement mondial en quelques minutes

#### Explications

Exact. AWS propose un provisionnement par programmation et via console (API, CLI, CloudFormation, CDK) ainsi que des services globaux (Route 53, CloudFront, Global Accelerator) permettant de déployer des infrastructures et des applications dans différentes régions et en périphérie de réseau en quelques minutes. Cette capacité réduit considérablement le délai de mise sur le marché des déploiements internationaux lorsqu'ils sont correctement conçus.  
D. Élimination des coûts liés au personnel informatique

#### Explications

Incorrect. Migrer vers AWS modifie les tâches opérationnelles et peut réduire la maintenance de l'infrastructure, mais ne supprime pas le besoin de personnel informatique. Les rôles évoluent généralement vers l'architecture cloud, l'automatisation, les opérations, la sécurité et la maîtrise des coûts, plutôt que de disparaître.  
E. Redondance par défaut pour tous les services de calcul

#### Explications

Incorrect. La redondance dépend de l'utilisation et de la configuration des services. Certains services AWS (par exemple, Amazon S3) offrent une haute disponibilité dès leur conception, mais les ressources de calcul comme EC2 exigent des architectes qu'ils conçoivent des déploiements multi-AZ ou multi-régions, utilisent la mise à l'échelle automatique et les équilibreurs de charge, et configurent des sauvegardes ou RDS Multi-AZ pour assurer la redondance.  
Explication générale  
Cette question teste les principaux avantages du cloud. Les réponses correctes concernent l'infrastructure mondiale d'AWS et sa capacité à provisionner rapidement des ressources, permettant ainsi une plus grande portée et des cycles de déploiement plus courts. Les réponses incorrectes reflètent des idées reçues : le cloud ne dispense pas les clients de leurs responsabilités d'audit (modèle de responsabilité partagée), ne supprime pas le personnel informatique et ne garantit pas automatiquement la redondance de chaque service de calcul sans une architecture adaptée.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 97Ignoré  
Selon le modèle de responsabilité partagée d'AWS, quelle tâche incombe au client ?  
**Bonne réponse**  
A. Appliquer un correctif à un système d'exploitation invité déployé sur une instance Amazon EC2.

#### Explications

Amazon EC2 est une offre d'infrastructure en tant que service (IaaS). Selon le modèle de responsabilité partagée, AWS gère l'infrastructure physique, l'hyperviseur et l'hôte sous-jacent, tandis que le client est responsable de tout ce qu'il installe et exécute au sein de l'instance virtuelle, notamment le système d'exploitation, les logiciels applicatifs, la configuration, ainsi que l'application des correctifs et mises à jour.  
B. Contrôler l'accès physique à un centre de données AWS.

#### Explications

L'accès physique aux centres de données AWS relève de la responsabilité d'AWS (« sécurité du cloud »). AWS met en œuvre et maintient des contrôles au niveau des installations (agents de sécurité, caméras, contrôles périmétriques et politiques d'accès), de sorte que les clients ne contrôlent pas l'accès physique aux centres de données.  
C. Contrôler l'accès au matériel sous-jacent d'AWS.

#### Explications

L'accès à l'infrastructure matérielle AWS sous-jacente et aux serveurs physiques est géré par AWS. Les clients utilisent des ressources virtualisées et n'ont pas accès à l'administration des hôtes physiques, du firmware ni des commandes matérielles.  
D. Appliquer un correctif au système d'exploitation hôte déployé sur Amazon S3.

#### Explications

Amazon S3 est un service de stockage d'objets entièrement géré. AWS exploite et met à jour l'infrastructure du service et les systèmes hôtes. Les clients sont responsables de leurs données, de leurs politiques d'accès, de leur chiffrement et de leurs paramètres IAM, mais pas de la mise à jour des systèmes hôtes sous-jacents (et S3 n'est pas une plateforme de calcul sur laquelle vous déployez un système d'exploitation hôte).  
Explication générale  
Le modèle de responsabilité partagée d'AWS répartit les tâches : AWS gère la « sécurité du cloud » (infrastructure physique, matériel hôte, réseau et fonctionnement interne des services gérés), tandis que les clients gèrent la « sécurité dans le cloud » (système d'exploitation invité, applications, données et configuration des services qu'ils gèrent). Le choix approprié reflète la responsabilité du client quant à la gestion et à la mise à jour du système d'exploitation des instances EC2 ; les autres options décrivent des responsabilités qui incombent à AWS ou témoignent d'une mauvaise compréhension des services gérés comme S3.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 98Ignoré  
Quelle option relève de la responsabilité du client lors de l'utilisation d'Amazon DynamoDB dans le cadre du modèle de responsabilité partagée d'AWS ?  
A. Sécurité physique de DynamoDB

#### Explications

La responsabilité de la sécurisation de l'infrastructure physique (centres de données, racks, serveurs et matériel réseau) incombe à AWS dans le cadre de son obligation de sécuriser l'infrastructure et les installations cloud.  
B. Application de correctifs à DynamoDB

#### Explications

La mise à jour et la maintenance de l'environnement d'exécution et de l'infrastructure sous-jacente du service géré pour DynamoDB sont assurées par AWS ; les clients n'appliquent pas de correctifs de système d'exploitation ou de service pour les services gérés par AWS.  
**Bonne réponse**  
C. Accès aux tables DynamoDB

#### Explications

Les clients doivent configurer et appliquer les règles relatives à l'authentification et à l'exécution des actions sur leurs tables à l'aide des identités IAM, des politiques de ressources, des règles conditionnelles et de l'autorisation au niveau de l'application ; cela inclut la définition des autorisations, des rôles et des contrôles d'accès.  
D. Chiffrement des données au repos dans DynamoDB

#### Explications

AWS fournit un chiffrement intégré du stockage pour DynamoDB et gère l'implémentation côté serveur. Les clients ne sont responsables que s'ils choisissent d'utiliser et de gérer leurs propres clés KMS (politiques et rotation des clés).  
Explication générale  
Dans le cadre du modèle de responsabilité partagée d'AWS, AWS sécurise l'infrastructure cloud et exploite des services gérés (notamment la sécurité physique, les correctifs de sécurité et le chiffrement par défaut du stockage). Il incombe aux clients de configurer la sécurité dans le cloud, en particulier l'authentification et l'autorisation de leurs ressources. Pour DynamoDB, cela implique la gestion des identités, des autorisations et des contrôles d'accès aux applications ; les autres options mentionnées décrivent les responsabilités gérées par AWS ou des responsabilités conditionnelles (par exemple, la gestion des clés du client).  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 99Ignoré  
Quelles options sont recommandées pour un parcours de transformation vers le cloud dans le cadre du framework d'adoption du cloud AWS (AWS CAF) ? (Choisissez deux options.)  
**Sélection correcte**  
A. Phase de planification

#### Explications

Cette étape vise à définir la justification commerciale, les résultats escomptés et le soutien de la direction pour l'adoption du cloud. Elle établit le périmètre, les indicateurs de succès et une stratégie initiale de haut niveau qui oriente la planification et les décisions d'investissement ultérieures — exactement les recommandations préparatoires du CAF AWS au début d'une transformation.  
B. Phase d'alignement

#### Explications

La coordination des parties prenantes et l'identification des écarts de compétences constituent une activité importante, mais ne figurent pas parmi les étapes distinctes et nommées du parcours de transformation vers le cloud du CAF, tel que décrit dans les recommandations officielles. Il convient de la considérer comme une tâche d'alignement des parties prenantes venant appuyer les phases formelles du parcours, plutôt que comme une phase recommandée de manière indépendante.  
C. Phase d'évaluation

#### Explications

La réalisation d'évaluations de l'état de préparation et de l'environnement est une pratique courante et essentielle dans les programmes de migration. Toutefois, l'évaluation en elle-même fait généralement partie des activités préparatoires ou d'autres programmes AWS (par exemple, MAP). Elle ne figure pas parmi les principales étapes du parcours de transformation du CAF, telles que décrites dans le guide de référence.  
**Sélection correcte**  
D. Phase de mobilisation

#### Explications

Cette étape met l'accent sur la préparation des personnes, des processus et des plateformes en vue d'une migration à grande échelle : combler les lacunes en matière de compétences, définir des zones de transition et des garde-fous, développer les compétences et élaborer des plans et des ateliers de migration. Ces activités préparatoires sont explicitement mentionnées dans les recommandations AWS comme une étape formelle de transformation.  
E. Phase de migration et de modernisation

#### Explications

L'exécution des migrations et la modernisation des charges de travail constituent un objectif global de l'adoption du cloud et apparaissent dans d'autres cadres de migration AWS, mais elles sont traitées comme un travail d'exécution ultérieur plutôt que comme l'une des étapes spécifiques et nommées du parcours de transformation CAF dans le guide CAF référencé.  
Explication générale  
Cette question évalue votre connaissance des étapes recommandées pour la transformation vers le cloud dans le cadre du cadre d'analyse de rentabilité AWS (AWS CAF). Les recommandations correctes incluent une planification stratégique initiale pour élaborer l'analyse de rentabilité et une phase de préparation formelle qui mobilise les ressources humaines, les processus et les capacités de la plateforme avant le déploiement à grande échelle. Les autres options décrivent des activités utiles (alignement des parties prenantes, évaluations, résultats de la migration/modernisation), mais il s'agit soit d'activités de soutien, soit d'activités relevant de programmes AWS connexes et non des étapes de transformation nommées du CAF.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 100Ignoré  
À quel niveau de support les utilisateurs ont-ils accès à un service de conciergerie d'assistance ?  
A. Soutien de base

#### Explications

L'assistance de base (niveau gratuit) donne accès à la documentation AWS, aux livres blancs, aux forums d'assistance et à l'assistance relative au compte et à la facturation, mais n'inclut pas le dépannage technique, les ingénieurs d'assistance cloud 24h/24 et 7j/7, les gestionnaires de compte techniques ni un service de conciergerie d'assistance.  
B. Assistance aux développeurs

#### Explications

L'assistance aux développeurs est destinée aux environnements de développement et de test et offre un accès au support cloud pendant les heures ouvrables pour obtenir des conseils et résoudre les problèmes courants. Elle n'inclut pas l'assistance technique de niveau supérieur 24 h/24 et 7 j/7, un gestionnaire de compte technique dédié ni un service de conciergerie.  
C. Soutien aux entreprises

#### Explications

L'assistance aux entreprises offre un accès 24h/24 et 7j/7 aux ingénieurs d'assistance cloud, des temps de réponse plus rapides, un accès complet aux vérifications AWS Trusted Advisor et une prise en charge des charges de travail de production, mais elle ne fournit pas de responsable de compte technique dédié ni l'équipe AWS Support Concierge ; ces fonctionnalités sont réservées au niveau Entreprise.  
**Bonne réponse**  
D. Soutien aux entreprises

#### Explications

L'assistance Entreprise inclut un gestionnaire de compte technique (TAM) et l'accès à l'équipe d'assistance AWS Concierge, qui vous accompagne dans la gestion de votre compte et de vos incidents, la facturation, la coordination opérationnelle et vous fournit des conseils stratégiques. Ce service d'assistance est un atout majeur de l'offre Entreprise, ce qui justifie ce choix.  
Explication générale  
Cette question teste vos connaissances sur les niveaux de support AWS. Seul le niveau Enterprise Support inclut une équipe de conciergerie dédiée (ainsi qu'un responsable technique de compte et d'autres services premium). Les niveaux inférieurs (Basic, Developer, Business) offrent un support technique progressivement plus étendu et des délais de réponse plus courts, mais aucun ne comprend le rôle de conciergerie dédié proposé par Enterprise Support.  
Domaine  
Domaine 4 : Facturation, tarification et assistance  
Question 101Ignoré  
Quelle fonctionnalité du framework d'adoption du cloud AWS (AWS CAF) relève de la perspective métier ?  
A. Gestion de programmes et de projets

#### Explications

Cette capacité correspond à la perspective de gouvernance du CAF AWS. La gouvernance englobe la supervision des programmes et des projets, la gestion du portefeuille et des investissements, les droits de décision et l'alignement des initiatives informatiques sur les objectifs commerciaux — des responsabilités distinctes de la perspective métier.  
**Bonne réponse**  
B. Science des données

#### Explications

La perspective métier regroupe les capacités qui permettent aux acteurs de l'entreprise de définir une stratégie, de suivre la valeur et d'utiliser l'analyse de données pour orienter leurs décisions. La science des données (analyse et expérimentation commerciales) contribue directement à la création de valeur, à la prise de décisions stratégiques et à la monétisation ; c'est pourquoi elle est classée dans la perspective métier.  
C. Observabilité

#### Explications

L'observabilité est une capacité opérationnelle qui permet de surveiller, d'enregistrer, de tracer et de vérifier l'état de fonctionnement des systèmes (par exemple, Amazon CloudWatch, AWS X-Ray). Elle prend en charge les responsabilités des équipes Opérations/Plateforme en matière de fiabilité quotidienne des services, plutôt que les aspects métiers.  
D. Gestion des changements et des mises en production

#### Explications

La gestion des changements et des mises en production est axée sur les pipelines de déploiement, les processus de mise en production et le contrôle opérationnel des changements (souvent associés aux perspectives des opérations ou de la plateforme). Ces capacités garantissent des mises en production sécurisées et une stabilité opérationnelle, et non les activités stratégiques et de création de valeur principalement pilotées par l'entreprise.  
Explication générale  
AWS CAF regroupe les fonctionnalités selon des perspectives qui alignent les responsabilités liées à l'adoption du cloud. La perspective Métier couvre les activités qui pilotent la stratégie, la création de valeur et l'analyse des données métier ; la science des données y trouve donc toute sa place. Les autres options relèvent de la gouvernance (gestion de programmes/projets) ou des opérations/plateformes (observabilité, gestion des changements et des mises en production) et ne sont donc pas les plus adaptées à la perspective Métier.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 102Ignoré  
Parmi les actions suivantes, lesquelles sont contrôlées par AWS Identity and Access Management (IAM) ? (Choisissez deux réponses.)  
**Sélection correcte**  
A. Contrôler l'accès aux API des services AWS et à d'autres ressources spécifiques.

#### Explications

IAM applique l'autorisation via des politiques qui spécifient quels principaux peuvent appeler quelles actions d'API de service AWS sur quelles ressources. Les politiques (basées sur l'identité et sur les ressources) permettent un contrôle précis grâce aux actions, aux ressources, aux effets et aux conditions, ce qui vous permet d'autoriser ou de refuser l'accès à des opérations d'API et à des ARN de ressources spécifiques.  
B. Assurer une détection intelligente des menaces et une surveillance continue.

#### Explications

Incorrect — La détection des menaces et la surveillance continue sont assurées par des services tels qu'Amazon GuardDuty (détection des menaces), AWS CloudTrail (journalisation des API), Amazon Detective et AWS Security Hub. IAM n'effectue pas de détection des menaces en temps réel ni d'analyse des journaux ; il gère les identités, l'authentification et l'autorisation.  
**Sélection correcte**  
C. Protéger l'environnement AWS à l'aide de l'authentification multifactorielle (MFA).

#### Explications

IAM prend en charge l'authentification multifacteur (MFA) pour une authentification renforcée. Vous pouvez exiger la MFA pour la console de gestion AWS ou les appels d'API (à l'aide de conditions de stratégie). IAM est compatible avec les applications MFA virtuelles, les dispositifs MFA matériels et les protections MFA du compte racine pour ajouter un facteur d'authentification supplémentaire.  
D. Accorder aux utilisateurs l'accès aux centres de données AWS.

#### Explications

Incorrect : l’accès physique aux centres de données AWS est contrôlé par les politiques de sécurité physique et les équipes en charge des installations d’AWS, et non par IAM. IAM contrôle l’accès logique aux ressources et aux API AWS, et non l’accès physique aux emplacements.  
E. Fournir une protection pare-feu aux applications contre les attaques Web courantes.

#### Explications

Incorrect : la protection des pare-feu et des applications web est assurée par des services réseau et de sécurité tels qu’AWS WAF, AWS Shield, les groupes de sécurité et les listes de contrôle d’accès réseau (ACL). IAM n’inspecte ni ne filtre le trafic réseau et ne fournit aucune fonctionnalité de pare-feu applicatif.  
Explication générale  
Ce test évalue vos connaissances sur le rôle d'IAM : identité, authentification et autorisation. IAM contrôle qui (quel principal) peut appeler quelles actions d'API AWS et accéder à quelles ressources, et prend en charge une authentification renforcée via l'authentification multifacteur (MFA). Les autres fonctionnalités mentionnées (détection des menaces, journalisation, pare-feu et accès physique aux centres de données) sont fournies par des services AWS distincts ou par la sécurité physique d'AWS ; elles ne sont donc pas contrôlées par IAM.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 103Ignoré  
Une entreprise prévoit d'héberger ses charges de travail sur AWS. Quel service AWS exige de l'entreprise qu'elle mette à jour et corrige le système d'exploitation invité ?  
A. Amazon DynamoDB

#### Explications

Une base de données NoSQL entièrement gérée où AWS exploite et corrige les hôtes et le système d'exploitation sous-jacents ; les clients n'ont aucun accès ni aucune responsabilité concernant la mise à jour ou la correction du système d'exploitation invité.  
B. Amazon S3

#### Explications

Un service de stockage objet qui abstrait toute l'infrastructure de stockage. Aucun système d'exploitation invité géré par le client n'est associé aux objets stockés ; par conséquent, les clients n'ont pas à effectuer de mises à jour du système d'exploitation pour ce service.  
**Bonne réponse**  
C. Amazon EC2

#### Explications

Fournit des serveurs virtuels (IaaS). Les clients disposent d'un contrôle administratif sur le système d'exploitation invité des instances et sont responsables de l'installation des mises à jour, des correctifs de sécurité, de la configuration du système d'exploitation et du renforcement de la sécurité. AWS propose des outils tels qu'AWS Systems Manager Patch Manager et des AMI personnalisées pour automatiser et simplifier ces tâches.  
D. Amazon Aurora

#### Explications

Un service de base de données relationnelle managée dans lequel AWS gère les hôtes et le système d'exploitation sous-jacents, en assurant la maintenance et les correctifs (généralement lors de fenêtres de maintenance configurées). Les clients gèrent les schémas de base de données, les données et l'accès, mais pas le système d'exploitation invité.  
Explication générale  
Cette question évalue votre compréhension du modèle de responsabilité partagée d'AWS et de la différence entre les services d'infrastructure et les services gérés. Les instances de calcul élastiques nécessitent que les clients gèrent et mettent à jour le système d'exploitation invité (responsabilité du client). Les services gérés, tels que le stockage objet, les bases de données NoSQL gérées et les bases de données relationnelles gérées, confient la responsabilité de la mise à jour du système d'exploitation et de l'hôte à AWS ; les clients n'ont donc pas à mettre à jour le système d'exploitation invité pour ces services.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 104Ignoré  
Quels principes de conception une entreprise devrait-elle appliquer aux charges de travail AWS Cloud pour maximiser la durabilité et minimiser l'impact environnemental ? (Choisissez deux réponses.)  
**Sélection correcte**  
A. Optimiser l'utilisation des instances Amazon EC2.

#### Explications

L'amélioration de l'utilisation des ressources par la consolidation, le dimensionnement approprié et la mise à l'échelle dynamique permet de réduire la consommation d'énergie par unité de travail. Parmi les outils et modèles AWS qui prennent en charge cette approche, citons la mise à l'échelle automatique d'EC2, les recommandations de dimensionnement approprié d'AWS Cost Explorer, la planification des instances et l'utilisation d'instances Spot lorsque cela est pertinent ; autant d'éléments qui contribuent à accroître l'efficacité globale et à réduire l'impact environnemental.  
B. Minimiser l'utilisation des instances Amazon EC2.

#### Explications

Le fonctionnement des ressources à un taux d'utilisation constamment bas ou le refus d'améliorer leur utilisation engendrent du gaspillage, car les capacités inutilisées consomment de l'énergie et génèrent un impact environnemental. Une pratique durable consiste à adapter la capacité à la demande (mise à l'échelle automatique, planification, dimensionnement optimal), et non à maintenir intentionnellement un taux d'utilisation artificiellement bas.  
C. Minimiser l'utilisation des services gérés.

#### Explications

Les services AWS gérés (par exemple Amazon RDS, AWS Lambda, Amazon S3, AWS Fargate) offrent une infrastructure mutualisée et optimisée ainsi qu'une gestion automatisée du cycle de vie, ce qui améliore généralement l'efficacité. Réduire l'utilisation de ces services permettrait de se priver de ces gains d'efficacité et pourrait accroître les coûts opérationnels et le gaspillage de ressources.  
D. Obliger les utilisateurs à réinstaller fréquemment les applications.

#### Explications

Obliger les utilisateurs à réinstaller les applications augmente la fréquence des opérations de calcul, de stockage et de réseau, ainsi que la charge d'exploitation. Les modèles modernes (CI/CD, infrastructure immuable, conteneurs, déploiements gérés) réduisent les réinstallations inutiles et la consommation d'énergie et de ressources qui en découle.  
**Sélection correcte**  
E. Réduire la nécessité pour les utilisateurs de réinstaller les applications.

#### Explications

En minimisant les déploiements et réinstallations répétés grâce à des pipelines de déploiement gérés, des images de conteneurs, la gestion de la configuration et l'hébergement sans serveur/géré, on réduit la redondance des ressources de calcul, de stockage et de réseau. Il en résulte une diminution de la consommation d'énergie et des opérations durables.  
Explication générale  
Dans le cloud, la durabilité repose sur une utilisation efficace des ressources et la réduction des opérations inutiles. L'optimisation de l'utilisation grâce à la consolidation, au dimensionnement adapté et à la mise à l'échelle automatique (pris en charge par les fonctionnalités et recommandations d'EC2), ainsi que la réduction des réinstallations d'applications (via l'intégration continue/le déploiement continu, les conteneurs et les déploiements gérés), permettent de diminuer la consommation d'énergie par charge de travail. Les autres options décrivent des pratiques qui, soit augmentent le gaspillage de ressources, soit annulent les gains d'efficacité offerts par les services gérés ; elles ne sont donc pas adaptées à une durabilité maximale.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 105Ignoré  
Une entreprise souhaite identifier les compartiments Amazon S3 partagés avec un autre compte AWS. Quel service ou fonctionnalité AWS répond à ce besoin ?  
A. Formation du lac AWS

#### Explications

Lake Formation est un service permettant de créer, de sécuriser et de gérer des lacs de données (ingestion, catalogage et accès précis aux données). Il n'effectue pas d'analyse des politiques de ressources des compartiments S3 pour signaler les partages inter-comptes ou publics.  
B. Rapport d'identification IAM

#### Explications

Le rapport d'informations d'identification IAM répertorie les informations d'identification des utilisateurs IAM (mots de passe, clés d'accès), ainsi que leurs dates de création et de dernière utilisation, afin de faciliter la gestion des informations d'identification. Il n'analyse pas les politiques ni les listes de contrôle d'accès (ACL) des compartiments S3 pour déterminer si un compartiment est partagé avec un autre compte AWS.  
C. Amazon CloudWatch

#### Explications

CloudWatch assure la surveillance, fournit des métriques, des journaux, des alarmes et des événements pour les ressources et les applications. Il n'effectue pas d'analyse des politiques de ressources S3 pour identifier les partages inter-comptes ou publics (CloudTrail enregistre l'activité des API, mais n'est pas un outil dédié à la découverte des vulnérabilités des politiques de ressources).  
**Bonne réponse**  
D. Analyseur d'accès IAM

#### Explications

Access Analyzer effectue une analyse statique des politiques basées sur les ressources (S3, rôles IAM, clés KMS, etc.) et identifie les acteurs externes (autres comptes AWS ou le public) pouvant accéder à une ressource. Il évalue en continu les politiques et met en évidence les problèmes exploitables afin de corriger les accès non autorisés entre comptes ou les accès publics aux compartiments S3.  
Explication générale  
Cette tâche requiert un outil capable d'inspecter les politiques d'accès aux ressources et de signaler les accès inter-comptes ou publics. IAM Access Analyzer analyse ces politiques et génère des résultats concernant les accès externes aux compartiments S3, répondant ainsi directement à cette exigence. Les autres options se concentrent sur des domaines différents : Lake Formation gère les lacs de données, le rapport d'identification IAM se concentre sur les identifiants utilisateur et CloudWatch gère la surveillance et la journalisation ; aucune n'effectue d'analyse des politiques pour identifier les compartiments S3 partagés.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 106Ignoré  
Une entreprise envisage de migrer son application vers le cloud AWS. Quel outil ou ensemble de ressources AWS devrait-elle utiliser pour analyser et évaluer sa préparation à la migration ?  
**Bonne réponse**  
A. Cadre d'adoption du cloud AWS (AWS CAF)

#### Explications

Ce cadre de référence cartographie les capacités et les lacunes organisationnelles selon de multiples perspectives (métier, ressources humaines, gouvernance, plateforme, sécurité, opérations) et fournit des recommandations d'évaluation ainsi que des plans d'action. Il est spécifiquement conçu pour évaluer la préparation de l'organisation à l'adoption du cloud, identifier les lacunes en matière de compétences et de processus, et prioriser les activités de migration.  
B. Calculateur de prix AWS

#### Explications

Cet outil d'estimation des coûts modélise l'utilisation et la tarification des services afin de prévoir les dépenses. Il ne propose pas d'évaluation organisationnelle, de cartographie des capacités ni de conseils en matière de préparation à la migration ; il ne permet donc pas d'évaluer si les ressources humaines, les processus ou la gouvernance sont prêts pour une migration.  
C. Cadre d'architecture AWS

#### Explications

Un ensemble de bonnes pratiques architecturales et un processus d'évaluation des charges de travail (six piliers : excellence opérationnelle, sécurité, fiabilité, performance, optimisation des coûts et durabilité). Ce processus contribue à améliorer les architectures, mais se concentre sur la conception des charges de travail et les opérations post-migration plutôt que sur la préparation de l'organisation à la migration.  
D. Budgets AWS

#### Explications

Fonctionnalité de gestion des coûts permettant de définir des budgets et d'envoyer des alertes en fonction des seuils d'utilisation ou de dépenses. Utile pour le contrôle des coûts, mais n'évalue pas les capacités organisationnelles, la gouvernance ni la préparation à la migration.  
Explication générale  
Cette question évalue la connaissance des outils permettant d'évaluer la capacité d'une organisation à migrer. Le Cloud Adoption Framework (CAF) offre des conseils structurés et des évaluations des capacités selon de multiples perspectives métiers et techniques, ce qui en fait le choix approprié. Les autres options portent sur l'estimation des coûts, les analyses d'architecture ou le contrôle des dépenses, et ne proposent pas d'évaluation complète de la capacité de l'organisation à migrer.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 107Ignoré  
Quel service AWS s'intègre à d'autres services AWS pour permettre le chiffrement des données au repos ?  
**Bonne réponse**  
A. Service de gestion des clés AWS (AWS KMS)

#### Explications

Service centralisé de gestion des clés permettant de créer, stocker et contrôler les clés cryptographiques utilisées par de nombreux services AWS pour le chiffrement côté serveur. Il prend en charge les CMK gérées par le client et par AWS, le chiffrement d'enveloppe, le stockage de clés sur HSM, les contrôles de stratégie IAM/clés et la journalisation CloudTrail de l'utilisation des clés — autant de fonctionnalités qui permettent d'intégrer le chiffrement des données au repos sur S3, EBS, RDS et d'autres services.  
B. AWS Certificate Manager (ACM)

#### Explications

Ce service permet de provisionner, de gérer et de renouveler les certificats SSL/TLS afin de protéger les données en transit (HTTPS/TLS). Il ne crée ni ne gère les clés de chiffrement des données stockées et ne constitue donc pas le mécanisme utilisé par les services AWS pour chiffrer les données au repos.  
C. Gestion des identités et des accès AWS (IAM)

#### Explications

Service de gestion des identités et des accès qui contrôle l'authentification et l'autorisation (qui peut faire quoi). IAM gère les permissions d'utilisation des clés de chiffrement et des ressources chiffrées, mais ne génère pas de clés cryptographiques ni ne chiffre les données au repos.  
D. AWS Security Hub

#### Explications

Service d'agrégation des alertes de sécurité et des contrôles de conformité, qui centralise les constats et les informations relatives à la sécurité. Il offre une visibilité et des recommandations pour la remédiation, mais ne prend pas en charge la gestion des clés ni le chiffrement des données stockées.  
Explication générale  
Cette question évalue votre connaissance du service AWS qui centralise la création, le stockage et l'intégration de clés avec d'autres services AWS pour chiffrer les données au repos. AWS Key Management Service (KMS) est le service dédié à la gestion des clés et au chiffrement utilisé par les services AWS (via SSE-KMS, chiffrement d'enveloppe, CMK supportées par HSM, etc.) pour protéger les données stockées. Les autres options concernent des services de certificats TLS, de gestion des identités et des autorisations, ou de surveillance de la sécurité, qui ne fournissent pas de chiffrement des données au repos.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 108Ignoré  
Une entreprise souhaite obtenir un rapport répertoriant l'état des dispositifs d'authentification multifacteurs (MFA) utilisés par tous les utilisateurs de son compte AWS. Quelle fonctionnalité ou quel service AWS répond à ce besoin ?  
A. Rapports sur les coûts et l'utilisation d'AWS

#### Explications

Le système de reporting des coûts et de l'utilisation au niveau du compte fournit des ensembles de données de facturation et d'utilisation à des fins d'analyse et de facturation. Il ne contient pas les métadonnées d'identification des utilisateurs IAM, telles que l'activation ou non de l'authentification multifacteur (MFA) pour un utilisateur donné.  
**Bonne réponse**  
B. Rapports d'identification IAM

#### Explications

IAM peut générer un fichier CSV d'identifiants répertoriant chaque utilisateur IAM, avec des colonnes pour les attributs d'identifiants (par exemple : mot de passe activé, dernier mot de passe utilisé, identifiants et dernière utilisation des clés d'accès, authentification multifacteur active). Ce rapport d'identifiants constitue l'élément d'audit pris en charge pour déterminer l'inscription à l'authentification multifacteur et l'état des autres identifiants de connexion pour chaque utilisateur.  
C. Rapports de facturation détaillés

#### Explications

Les anciens fichiers d'exportation détaillés de facturation étaient des documents de facturation (remplacés ultérieurement par le rapport des coûts et de l'utilisation) destinés à la comptabilité analytique. Ils ne divulguent pas les informations d'identification des utilisateurs IAM ni les informations d'inscription à l'authentification multifacteur (MFA).  
D. Rapports AWS Cost Explorer

#### Explications

Le service d'analyse des coûts, qui permet de visualiser et d'explorer les dépenses, se concentre sur les tendances et les prévisions d'utilisation et de coûts. Il ne fournit pas de données sur les identifiants IAM ou le statut de l'authentification multifacteur (MFA) par utilisateur.  
Explication générale  
Cette question permet de déterminer quelle fonctionnalité AWS fournit le statut MFA par utilisateur IAM. Le rapport d'informations d'identification généré par IAM est la bonne réponse, car il est spécifiquement conçu pour répertorier les utilisateurs IAM et leurs attributs d'informations d'identification (y compris le statut MFA) à des fins d'audit et de conformité. Les autres options sont des fonctionnalités de facturation et d'analyse des coûts qui ne contiennent pas de métadonnées d'informations d'identification IAM.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 109Ignoré  
Une entreprise utilise des instances Amazon EC2 pour exécuter son application. Cette application doit être disponible et fonctionner en continu pendant au moins trois ans. Quel type d'instance EC2 l'entreprise devrait-elle acheter pour bénéficier d'une réduction sur le prix ?  
**Bonne réponse**  
A. Instances réservées

#### Explications

S'engager pour une durée de 1 ou 3 ans pour une empreinte d'instance spécifique permet de bénéficier d'une réduction significative du tarif horaire par rapport à la facturation à l'usage. Ces engagements se traduisent par une remise sur la facturation, appliquée automatiquement aux instances en cours d'exécution correspondant aux attributs de l'instance réservée (et pouvant inclure une réservation de capacité). Il existe des instances réservées standard (remise maximale) et des instances réservées convertibles (plus de flexibilité pour modifier les attributs de l'instance). Ce modèle est conçu pour les charges de travail stables et continues.  
B. Exemples de repérage

#### Explications

Les instances Spot offrent des réductions importantes grâce à l'utilisation de la capacité inutilisée d'AWS, mais elles peuvent être interrompues par AWS avec un préavis très court (environ deux minutes) lorsque la capacité est libérée. En raison de ce risque d'interruption, les instances Spot ne conviennent pas aux applications qui doivent fonctionner en continu et sans interruption pendant plusieurs années ; elles sont idéales pour les charges de travail tolérantes aux pannes, flexibles ou par lots.  
C. Instances à la demande

#### Explications

Les instances à la demande offrent une flexibilité maximale sans engagement à long terme et sont facturées au tarif habituel de paiement à l'utilisation. Elles ne proposent pas les tarifs dégressifs pluriannuels des options avec engagement et ne sont donc pas optimales pour les charges de travail garanties pour une exécution continue pendant des années.  
D. Flotte EC2

#### Explications

EC2 Fleet est un mécanisme de provisionnement qui alloue de la capacité à différents types d'instances, zones de disponibilité et options d'achat (à la demande, Spot et instances réservées). Il contribue à diversifier la capacité et à automatiser le provisionnement, mais ne constitue pas un engagement tarifaire à long terme et n'offre pas, à lui seul, de réduction pluriannuelle.  
Explication générale  
Cette question évalue vos connaissances sur les options d'achat d'instances EC2 et l'optimisation des coûts pour les charges de travail stables. Un engagement à long terme (1 ou 3 ans) offrant un tarif horaire réduit est la solution idéale pour une application fonctionnant en continu pendant des années. Les autres options ne proposent pas de remises à long terme (à la demande), sont interruptibles (Spot) ou constituent des outils de provisionnement plutôt que des engagements tarifaires (EC2 Fleet).  
Domaine  
Domaine 4 : Facturation, tarification et assistance  
Question 110Ignoré  
Une entreprise migre vers le cloud AWS. Elle souhaite identifier et comprendre les éventuelles erreurs de configuration de sécurité ou les comportements inattendus. Elle souhaite également prioriser les mesures de protection nécessaires. Quelle fonctionnalité de sécurité du framework AWS Cloud Adoption Framework (AWS CAF) répond à ces exigences ?  
A. Gestion des identités et des accès

#### Explications

Cette option décrit les contrôles permettant d'établir et de gérer les identités, l'authentification, l'autorisation, les rôles et les stratégies (par exemple, les utilisateurs, les rôles, les groupes, les stratégies IAM et l'Analyseur d'accès IAM). Ces contrôles sont essentiels pour empêcher les accès non autorisés, mais ils n'assurent pas la surveillance continue, la détection des anomalies ni la priorisation centralisée des résultats nécessaires pour identifier les comportements inattendus ou les erreurs de configuration au niveau des comptes et des ressources.  
**Bonne réponse**  
B. Détection des menaces

#### Explications

La capacité requise est la fonction de détection et de priorisation continues : elle collecte les données de télémétrie (CloudTrail, journaux de flux VPC, journaux DNS), exécute des moteurs d’analyse et de détection des menaces (par exemple, Amazon GuardDuty), agrège les résultats (AWS Security Hub) et prend en charge les investigations (Amazon Detective) et les réponses automatisées (EventBridge, AWS Systems Manager, AWS Config Remediation). Ensemble, ces services permettent d’identifier les erreurs de configuration ou les comportements anormaux et de prioriser les mesures de protection en fonction de leur gravité et de leur impact.  
C. Ingénierie de plateforme

#### Explications

Ce domaine se concentre sur la conception et l'exploitation de plateformes de développement internes, de pipelines CI/CD et d'abstractions d'infrastructure standardisées afin d'améliorer la productivité des développeurs et la cohérence des déploiements. Ces activités améliorent la livraison et la standardisation, mais ne permettent pas, à elles seules, la détection des menaces de sécurité ni la priorisation centralisée des mesures de protection.  
D. Gestion de la disponibilité et de la continuité

#### Explications

Cette fonctionnalité garantit la résilience opérationnelle : sauvegarde, restauration, basculement, planification des délais et objectifs de restauration, et continuité d’activité. Elle est axée sur la disponibilité et le rétablissement du service, et non sur la détection des erreurs de configuration de sécurité ou des activités anormales au sein de l’environnement.  
Explication générale  
La question porte sur la fonctionnalité CAF qui assure la surveillance continue, l'analyse et la priorisation des anomalies de sécurité afin que l'entreprise puisse détecter les erreurs de configuration et les comportements inattendus, puis mettre en place des mesures de protection. Cette fonctionnalité de détection et de priorisation repose sur l'ingestion des journaux et des données de télémétrie, l'application de services de détection des menaces, l'agrégation des résultats et l'activation des investigations et des réponses automatisées. Les autres options concernent le contrôle des identités, l'ingénierie de la plateforme ou la planification de la disponibilité, qui sont certes importantes, mais ne répondent pas à l'exigence de détection et de priorisation continues.  
Domaine  
Domaine 2 : Sécurité et conformité  
Question 111Ignoré  
Une entreprise doit pouvoir mettre en place une infrastructure pour de nouvelles applications en quelques minutes. Quel avantage du cloud computing l'aidera à répondre à ce besoin ?  
A. Échanger les charges fixes contre des charges variables

#### Explications

Incorrect — cette affirmation décrit la conversion des dépenses d'investissement en dépenses d'exploitation (CapEx → OpEx) selon une tarification à l'usage. Il s'agit d'un avantage financier des fournisseurs de cloud (modèle de tarification AWS), mais cela ne permet pas, en soi, de provisionner rapidement l'infrastructure pour les nouvelles applications.  
B. Développez votre présence mondiale en quelques minutes.

#### Explications

Bien que partiellement lié, ce n'est pas la solution idéale : AWS permet de déployer rapidement des ressources dans différentes régions et points de présence (Edge Location) pour atteindre des utilisateurs du monde entier. Cependant, la question porte spécifiquement sur la rapidité de création d'une nouvelle infrastructure pour les applications, ce qui concerne le provisionnement à la demande et l'automatisation plutôt que la distribution mondiale.  
**Bonne réponse**  
C. Augmenter la vitesse et l'agilité

#### Explications

Tout à fait exact : le cloud offre un libre-service à la demande et un provisionnement rapide (une caractéristique essentielle définie par le NIST). Avec AWS, vous pouvez créer et configurer des ressources de calcul, de stockage et des services gérés en quelques minutes grâce à la console, l’interface de ligne de commande (CLI), les API et les outils d’infrastructure en tant que code (AWS CloudFormation, AWS CDK, Service Catalog, Elastic Beanstalk et modèles de lancement). Ces fonctionnalités permettent de créer rapidement et de manière reproductible des environnements et d’accélérer le déploiement des applications.  
D. Cessez de deviner la capacité

#### Explications

Incorrect — cela fait référence à l'élasticité et à l'évitement de la planification manuelle des capacités (fonctionnalités telles que Auto Scaling, AWS Lambda et les services gérés). Bien qu'important pour la mise à l'échelle et l'optimisation des coûts, cela concerne la gestion des capacités plutôt que le provisionnement initial et rapide de l'infrastructure pour les nouvelles applications.  
Explication générale  
La question porte sur la caractéristique du cloud qui permet la création rapide et à la demande d'infrastructures. La meilleure réponse est celle qui met en avant le provisionnement à la demande et l'automatisation : les services AWS et les outils IaC permettent de créer et de configurer des environnements en quelques minutes. Les autres choix décrivent des avantages concrets du cloud (modèle de coûts, couverture mondiale, élasticité), mais ne répondent pas directement à l'exigence de provisionner rapidement une nouvelle infrastructure applicative.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 112Ignoré  
Quels sont les avantages dont bénéficie une entreprise lorsqu'elle migre une charge de travail de production sur site vers AWS ? (Choisissez deux réponses.)  
A. AWS forme le personnel de l'entreprise à l'utilisation de tous les services AWS.

#### Explications

AWS propose des programmes de formation et de certification (AWS Training and Certification, AWS Skill Builder) et collabore avec des formateurs externes. Toutefois, la mise en place d'une formation complète et personnalisée pour le personnel d'une entreprise n'est pas un avantage automatique lié à la migration. La formation nécessite généralement un investissement et une planification spécifiques de la part du client.  
B. AWS gère toute la sécurité dans le cloud.

#### Explications

AWS fonctionne selon le modèle de responsabilité partagée : AWS sécurise l’infrastructure cloud sous-jacente (matériel, réseau, virtualisation et installations physiques), tandis que les clients sont responsables de la sécurité de leurs données, applications, systèmes d’exploitation, gestion des identités et des accès (IAM) et configurations réseau. Par conséquent, AWS ne gère pas l’intégralité de la sécurité des charges de travail de ses clients.  
C. AWS offre une assistance gratuite de la part de gestionnaires de compte techniques (TAM).

#### Explications

L'assistance AWS est organisée en plusieurs niveaux : l'assistance de base est incluse sans frais supplémentaires, mais limitée, tandis que les gestionnaires de compte techniques (TAM) dédiés et les conseils avancés ne sont fournis qu'avec les plans d'assistance payants de niveau supérieur (par exemple, l'assistance Entreprise). La mise à disposition gratuite d'un TAM n'est pas un avantage général lié à la migration.  
**Sélection correcte**  
D. AWS offre une haute disponibilité.

#### Explications

L'infrastructure mondiale d'AWS (régions et zones de disponibilité) et ses services gérés (tels que Elastic Load Balancing, Amazon RDS Multi-AZ et Amazon EBS avec options de réplication) permettent aux architectes de concevoir des architectures tolérantes aux pannes et hautement disponibles qui réduisent les points de défaillance uniques et minimisent les temps d'arrêt.  
**Sélection correcte**  
E. AWS permet de réaliser des économies d'échelle.

#### Explications

Grâce à son envergure, AWS propose une tarification à l'usage, des remises sur volume, de la capacité réservée et un accès à diverses options d'achat de ressources de calcul et de stockage (à la demande, réservées et ponctuelles). Ces facteurs permettent de réduire les coûts unitaires et les dépenses d'investissement, générant ainsi des économies d'échelle pour ses clients.  
Explication générale  
Les principaux avantages de la migration testés sont une disponibilité accrue et des économies d'échelle. AWS fournit l'infrastructure et les fonctionnalités gérées nécessaires à la création de systèmes à haute disponibilité et tire parti de son envergure pour proposer des modèles de tarification avantageux. Les autres options peuvent prêter à confusion quant aux services optionnels (assistance ou formation payantes) ou aux responsabilités (sécurité) qui restent partagées entre AWS et le client.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 113Ignoré  
Une entreprise utilise l'offre gratuite d'AWS pour plusieurs services AWS dans le cadre d'une application. Que se passera-t-il si la période d'utilisation gratuite expire ou si l'utilisation de l'application dépasse les limites de l'offre gratuite ?  
**Bonne réponse**  
A. L'entreprise sera facturée aux tarifs standard du service à la carte pour toute utilisation dépassant le niveau gratuit.

#### Explications

AWS mesure la consommation et, une fois les quotas mensuels du niveau gratuit ou la période d'essai atteints, facture la consommation supplémentaire aux tarifs habituels des services à la demande du fournisseur. La facturation est automatique et visible dans la console de facturation AWS et Cost Explorer ; utilisez AWS Budgets et les alertes de facturation pour gérer ou limiter les frais imprévus.  
B. Le support AWS contactera l'entreprise pour définir les frais de service standard.

#### Explications

L'assistance AWS n'intervient pas automatiquement pour facturer les dépassements de quotas gratuits. Les transitions de facturation sont gérées par programmation ; les clients reçoivent des notifications de facturation et peuvent ouvrir des tickets d'assistance s'ils ont besoin d'aide pour gérer leurs coûts.  
C. L’entreprise sera facturée pour les services consommés pendant la période d’essai gratuite, plus les frais supplémentaires pour la consommation de services après cette période.

#### Explications

L'éligibilité au niveau gratuit couvre l'utilisation admissible dans les limites publiées pendant la période ; AWS ne facture pas rétroactivement l'utilisation restée dans ces limites. Seule l'utilisation dépassant les quotas ou après la période gratuite devient facturable.  
D. Le compte AWS de l'entreprise sera gelé et pourra être réactivé une fois qu'un plan de paiement aura été mis en place.

#### Explications

Les comptes ne sont pas suspendus du seul fait de l'expiration de l'éligibilité au niveau gratuit. AWS peut suspendre les ressources ou les comptes en cas de factures impayées, d'erreurs de facturation ou de violations des politiques, mais la facturation normale se poursuit même lorsque les limites du niveau gratuit sont dépassées.  
Explication générale  
L'offre gratuite propose une utilisation gratuite limitée et éligible pour certains services et/ou une période d'essai. Une fois ces limites ou cette période dépassées, AWS facture automatiquement toute utilisation supplémentaire aux tarifs à la demande standard. Les options incorrectes supposent une intervention proactive du support, une facturation rétroactive pour l'utilisation pendant la période gratuite ou un gel automatique du compte ; or, aucune de ces options ne correspond au comportement de facturation standard de l'offre gratuite d'AWS.  
Domaine  
Domaine 4 : Facturation, tarification et assistance  
Question 114Ignoré  
Quel concept du framework AWS Well-Architected représente la capacité d'un système à rester fonctionnel lorsqu'il rencontre des problèmes opérationnels ?  
A. Cohérence

#### Explications

Ce terme fait référence aux modèles de cohérence (par exemple, la cohérence forte et la cohérence éventuelle dans DynamoDB et S3). Il traite de la question de savoir si différents composants accèdent simultanément aux mêmes données et ne décrit pas le maintien de la fonctionnalité du service lors de pannes opérationnelles.  
**Bonne réponse**  
B. Élasticité

#### Explications

Ce document décrit la capacité du système à adapter sa capacité à l'évolution de la demande afin de garantir la disponibilité des services même en cas de forte charge. Sur AWS, cette capacité est mise en œuvre grâce à des fonctionnalités telles qu'Amazon EC2 Auto Scaling, Elastic Load Balancing, la mise à l'échelle de la concurrence Lambda et le découplage événementiel. Ces fonctionnalités permettent au système de continuer à fonctionner malgré les pics de charge ou les surcharges opérationnelles. Remarque : le pilier « Well-Architected » qui traite explicitement de la reprise après incident est « Fiabilité/Résilience », mais parmi les options proposées, celle-ci correspond le mieux au maintien des fonctionnalités en cas de problèmes opérationnels.  
C. Durabilité

#### Explications

La préservation des données à long terme est essentielle (par exemple : la durabilité de 99,999999999 % d’Amazon S3, ainsi que ses stratégies de sauvegarde et de capture instantanée). La durabilité garantit l’absence de perte de données, mais ne garantit pas à elle seule le maintien du fonctionnement de l’application en cas de panne.  
D. Latence

#### Explications

La latence est une mesure de performance qui quantifie le délai de réponse ou de traitement. Réduire la latence améliore l'expérience utilisateur et la réactivité du système, mais cela ne garantit pas pour autant le maintien du fonctionnement du système en cas de panne.  
Explication générale  
La question porte sur le principe de « bien architecturé » visant à maintenir les systèmes opérationnels même dans des conditions difficiles. Le concept explicite de « bien architecturé » pour la gestion des pannes est la fiabilité/résilience, qui n'est pas mentionnée. Parmi les choix proposés, le concept qui contribue le plus directement au maintien de la fonctionnalité d'un système sous contrainte opérationnelle est celui qui repose sur la capacité et la mise à l'échelle dynamiques (mises en œuvre par la mise à l'échelle automatique, l'équilibrage de charge et le découplage). Les autres options concernent la cohérence des données, leur durabilité ou les performances (latence) et ne garantissent donc pas directement la continuité opérationnelle.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 115Ignoré  
Laquelle des propositions suivantes décrit le mieux les avantages de l'adoption du cloud AWS ?  
A. Augmente les dépenses d'investissement initiales

#### Explications

Incorrect. L'adoption d'AWS réduit généralement les dépenses d'investissement initiales (CapEx) grâce à un modèle de dépenses opérationnelles (OpEx) à la carte. Les clients évitent ainsi l'achat et l'amortissement de matériel physique pour leurs centres de données lorsqu'ils utilisent AWS.  
**Bonne réponse**  
B. Fournit des ressources évolutives et flexibles à la demande

#### Explications

Exact. AWS fournit des services de calcul élastiques à la demande et des services gérés (par exemple, Amazon EC2 avec Auto Scaling, AWS Lambda et les bases de données gérées) qui permettent d'augmenter ou de diminuer rapidement la capacité et de la provisionner selon les besoins, favorisant ainsi l'agilité et la rentabilité.  
C. Nécessite des engagements à long terme avec une capacité fixe

#### Explications

Incorrect. AWS n'exige pas de capacité fixe à long terme ; les ressources peuvent être provisionnées à la demande. Bien que les clients puissent choisir des instances réservées ou des plans d'économies pour réduire leurs coûts en échange d'engagements, ces options sont facultatives et ne constituent pas une condition d'utilisation d'AWS.  
D. Limite l'accès aux ressources à des zones géographiques spécifiques.

#### Explications

Incorrect. AWS exploite une infrastructure mondiale de régions, de zones de disponibilité et de points de présence (Edge Locations), permettant aux clients de déployer des ressources dans plusieurs zones géographiques au lieu d'être limités à un seul emplacement.  
Explication générale  
L'avantage principal testé est la capacité d'AWS à fournir des ressources cloud élastiques et à la demande, améliorant ainsi l'agilité et la rentabilité. Le choix judicieux reflète les services AWS évolutifs et provisionnés selon les besoins. Les options alternatives décrivent des caractéristiques généralement erronées : AWS réduit les dépenses d'investissement initiales (au lieu de les augmenter), n'impose pas de capacité fixe à long terme et offre des options de déploiement mondiales plutôt que de limiter l'accès géographique.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 116Ignoré  
Une entreprise conçoit ses charges de travail AWS de manière à ce que les composants puissent être mis à jour régulièrement et que les modifications puissent être apportées par petites étapes réversibles. À quel pilier du cadre AWS Well-Architected cette conception se rattache-t-elle ?  
A. Sécurité

#### Explications

Incorrect — le pilier de sécurité concerne la protection des données, des identités et des systèmes (gestion des identités et des accès, chiffrement, journalisation et surveillance, notamment avec AWS IAM, AWS KMS et AWS CloudTrail). Ces contrôles sont essentiels au bon fonctionnement des opérations, mais ne décrivent pas spécifiquement la pratique consistant à effectuer des mises à jour fréquentes, mineures et réversibles.  
B. Efficacité de la performance

#### Explications

Incorrect — le pilier « efficacité des performances » traite de la sélection des types de ressources appropriés et de l’optimisation des performances au fil du temps (surveillance, dimensionnement adéquat, mise en cache, services comme Auto Scaling et CloudFront). Il se concentre sur le débit et la latence, et non sur les pratiques de déploiement qui permettent des modifications mineures et réversibles.  
**Bonne réponse**  
C. Excellence opérationnelle

#### Explications

Exact : le pilier axé sur les opérations met l’accent sur les processus, l’automatisation et l’amélioration continue pour exploiter et faire évoluer les systèmes. Il promeut les techniques et les outils qui permettent des modifications fréquentes, sûres et réversibles (pipelines CI/CD, infrastructure en tant que code comme AWS CloudFormation ou CDK, stratégies de déploiement comme le déploiement progressif et le déploiement bleu/vert, restauration automatisée et manuels d’exploitation) afin que les équipes puissent itérer rapidement et se remettre des erreurs.  
D. Fiabilité

#### Explications

Incorrect — le pilier de la fiabilité concerne la disponibilité, la tolérance aux pannes et la reprise après sinistre (conception pour la résilience, sauvegardes, architectures multi-AZ/régions, contrôles d'intégrité). Bien que la fiabilité bénéficie de bonnes pratiques opérationnelles, son objectif principal est la constance des performances et la reprise après sinistre, plutôt que le processus de petites mises à jour réversibles.  
Explication générale  
La question porte sur le pilier « Architecture bien conçue » qui régit les pratiques opérationnelles des systèmes évolutifs. Ce pilier met l'accent sur l'automatisation, la gestion des changements, l'intégration continue et la livraison continue (CI/CD) ainsi que sur les stratégies de déploiement permettant des modifications fréquentes et réversibles (favorisant une itération rapide et des restaurations sécurisées). Les autres piliers – sécurité, fiabilité et performance – traitent respectivement de la protection, de la disponibilité/restauration et de l'optimisation des ressources, mais ne définissent pas principalement les pratiques de déploiement incrémentales et réversibles décrites.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 117Ignoré  
Laquelle des propositions suivantes décrit le mieux l'avantage du framework AWS Well-Architected dans les stratégies de migration vers le cloud ?  
**Bonne réponse**  
A. Il fournit un ensemble de bonnes pratiques pour concevoir, construire et maintenir des systèmes sécurisés, fiables et efficaces dans le cloud.

#### Explications

Le cadre AWS Well-Architected définit les principes de conception clés et les cinq (désormais six) piliers : excellence opérationnelle, sécurité, fiabilité, efficacité des performances, optimisation des coûts et durabilité. Il fournit également l’outil Well-Architected et le processus d’analyse permettant d’identifier les risques, de prioriser les actions correctives et d’aligner les architectures sur les bonnes pratiques AWS. Ces fonctionnalités aident les équipes à évaluer les charges de travail migrées, à identifier les lacunes architecturales et à orienter les améliorations itératives pendant et après la migration.  
B. Elle garantit des économies en optimisant automatiquement l'utilisation des ressources pendant la migration.

#### Explications

Incorrect : Ce cadre n’effectue pas d’optimisation automatisée des ressources. Il propose plutôt des principes et des recommandations d’analyse. Les recommandations et l’optimisation automatisées sont assurées par des services AWS spécifiques tels qu’AWS Compute Optimizer, AWS Cost Explorer et AWS Trusted Advisor, qui fonctionnent indépendamment de l’analyse Well-Architected.  
C. Elle garantit la conformité à toutes les normes de sécurité internationales sans effort supplémentaire.

#### Explications

Incorrect : Le cadre prescrit les bonnes pratiques de sécurité, mais ne délivre pas de certifications de conformité. La conformité exige la mise en œuvre de contrôles, le respect des exigences réglementaires et l’utilisation des ressources de conformité AWS (par exemple, AWS Artifact et les programmes de conformité AWS) dans le cadre du modèle de responsabilité partagée.  
D. Il fournit un plan de migration détaillé avec des instructions étape par étape pour le déplacement de charges de travail spécifiques.

#### Explications

Incorrect : Ce cadre fournit des principes généraux et une méthodologie d’évaluation, mais pas des procédures de migration détaillées et spécifiques à chaque charge de travail. La planification et l’exécution détaillées de la migration sont assurées par les services et programmes AWS Migration (par exemple, AWS Application Migration Service, Migration Hub et AWS Migration Acceleration Program).  
Explication générale  
Cette question évalue votre compréhension du rôle du framework AWS Well-Architected dans les migrations. La bonne réponse reconnaît que le framework est un ensemble de bonnes pratiques d'architecture et un outil d'évaluation permettant d'identifier les risques et d'orienter les améliorations au sein des piliers Well-Architected. Les réponses incorrectes confondent les recommandations avec l'optimisation automatisée, la conformité garantie ou les plans de migration prescriptifs — des rôles assurés par d'autres services et programmes AWS.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 118Ignoré  
Quels sont les avantages de la migration d'applications sur site existantes vers le cloud AWS ? (Choisissez trois réponses)  
**Sélection correcte**  
A. Réduction des coûts de maintenance du matériel

#### Explications

La migration de l'infrastructure et des services gérés vers AWS transfère à AWS la responsabilité des serveurs physiques, des centres de données et du cycle de vie du matériel. Ceci élimine des tâches telles que l'acquisition, l'installation en rack, la maintenance et le remplacement des équipements physiques, réduisant ainsi les frais généraux d'exploitation sur site et les coûts associés.  
B. Contrôle accru des infrastructures physiques

#### Explications

Incorrect — La migration des charges de travail vers AWS réduit généralement le contrôle du client sur l'infrastructure physique sous-jacente, car celle-ci est détenue et exploitée par AWS. Les clients conservent un contrôle important au niveau logique (IAM, VPC, configuration) et peuvent utiliser des options comme les serveurs dédiés ou AWS Outposts lorsqu'un contrôle au niveau physique est nécessaire. Cependant, une migration classique vers le cloud n'accroît pas le contrôle sur l'infrastructure physique.  
**Sélection correcte**  
C. Évolutivité et flexibilité améliorées

#### Explications

AWS offre une capacité élastique et à la demande grâce à des services tels que Auto Scaling, Elastic Load Balancing, Amazon EC2 et les options sans serveur. Ces fonctionnalités permettent aux applications de s'adapter rapidement à la demande et d'effectuer des modifications architecturales et de provisionnement plus rapidement qu'avec des environnements sur site à capacité fixe.  
D. Dépenses d'investissement initiales plus élevées

#### Explications

Incorrect — l'adoption du cloud déplace généralement les dépenses d'investissement (achat de matériel) vers les dépenses d'exploitation (paiement à l'usage). Bien que les projets de migration puissent engendrer des coûts initiaux (planification, réarchitecture, transfert de données), le besoin continu d'acheter et de maintenir des serveurs physiques diminue généralement.  
**Sélection correcte**  
E. Capacités de reprise après sinistre améliorées

#### Explications

AWS prend en charge les architectures résilientes réparties sur plusieurs zones et régions de disponibilité, la sauvegarde et la restauration gérées (AWS Backup, snapshots RDS, réplication S3) et des mécanismes de reprise rapide. Ces fonctionnalités intégrées facilitent l'obtention d'objectifs de temps de récupération (RTO) et de points de récupération (RPO) plus courts et améliorent la reprise après sinistre par rapport aux déploiements sur site unique.  
Explication générale  
Les principaux avantages de la migration d'applications sur site vers AWS sont la réduction des coûts d'exploitation du matériel, une meilleure capacité d'adaptation et de mise à l'échelle en fonction des variations de charge de travail, ainsi que des options de reprise après sinistre et de résilience renforcées grâce aux services AWS et aux architectures multisites. Les solutions qui promettent un contrôle physique accru ou des dépenses d'investissement initiales plus élevées sont trompeuses : le contrôle du matériel physique diminue généralement avec le cloud, et les dépenses passent des CAPEX aux OPEX (même si la migration elle-même peut engendrer des coûts initiaux).  
Domaine  
Domaine 1 : Concepts du cloud  
Question 119Ignoré  
Quelle option représente une perspective qui inclut les capacités fondamentales du cadre d'adoption du cloud AWS (AWS CAF) ?  
A. Durabilité

#### Explications

Incorrect — le cadre d'adoption du cloud AWS (CAF) définit un ensemble de perspectives qui guident l'adoption du cloud par les organisations ; le concept de cette option est abordé par d'autres directives AWS (par exemple, le pilier de durabilité bien architecturée et les ressources de durabilité AWS), mais n'est pas nommé comme l'une des perspectives du CAF.  
B. Efficacité de la performance

#### Explications

Incorrect — il s’agit d’un pilier de l’architecture performante (efficacité des performances) qui traite de la conception architecturale pour des systèmes performants. Le CAF utilise plutôt des perspectives (métier, personnel, gouvernance, plateforme, sécurité, opérations) pour organiser les compétences et les capacités en vue de leur adoption ; cette étiquette ne correspond donc pas à une perspective du CAF.  
**Bonne réponse**  
C. Gouvernance

#### Explications

Tout à fait exact : la gouvernance est l’un des piliers du CAF. Elle porte sur les politiques, les droits de décision, la gestion des risques, la conformité et les contrôles qui définissent la manière dont une organisation gère les comptes, les autorisations et les politiques relatives aux ressources cloud. Les fonctionnalités de gouvernance concrètes s’appuient souvent sur des services et des fonctionnalités tels qu’AWS Organizations, AWS Control Tower, AWS IAM, AWS Config et la surveillance centralisée de la conformité.  
D. Fiabilité

#### Explications

Incorrect — la fiabilité est un pilier de l'architecture bien conçue qui vise à concevoir des systèmes résilients. Bien que les perspectives du CAF, telles que les opérations et la plateforme, abordent les pratiques opérationnelles qui influent sur la fiabilité, la « fiabilité » elle-même ne figure pas parmi les perspectives nommées du CAF.  
Explication générale  
Cette question évalue votre connaissance des perspectives du cadre d'adoption du cloud AWS (CAF). Le CAF définit six perspectives (métier, personnel, gouvernance, plateforme, sécurité et opérations). La gouvernance est la bonne réponse car elle couvre spécifiquement les politiques, les contrôles, les droits de décision et la conformité liés à la gestion de l'adoption du cloud. Les autres choix font référence aux piliers d'AWS Well-Architected ou à des recommandations plus générales (l'efficacité des performances et la fiabilité sont des piliers de Well-Architected ; le concept de durabilité est traité séparément), et ne constituent donc pas des perspectives du CAF.  
Domaine  
Domaine 1 : Concepts du cloud  
Question 120Ignoré  
Une entreprise souhaite que ses instances Amazon EC2 fonctionnent dans un environnement à haute disponibilité, même en cas de catastrophe naturelle dans une zone géographique donnée. Quelle solution permet d'atteindre cet objectif ?  
**Bonne réponse**  
A. Utilisez des instances EC2 dans plusieurs régions AWS.

#### Explications

Le déploiement de ressources de calcul sur plusieurs régions AWS offre une résilience face à une panne régionale, car les régions sont physiquement isolées les unes des autres. Pour une véritable reprise après sinistre géographique, il est indispensable de concevoir une réplication et un basculement interrégionaux (par exemple, répliquer les données avec la réplication interrégionale S3 ou la réplication de bases de données, publier un DNS de basculement avec Amazon Route 53 et synchroniser les AMI/instantanés ou utiliser des services gérés multirégionaux). Ceci garantit la continuité de service des applications même en cas d'indisponibilité d'une région entière.  
B. Utilisez des instances EC2 dans plusieurs emplacements périphériques.

#### Explications

Les emplacements Edge sont des points de terminaison CDN utilisés par Amazon CloudFront (et d'autres services Edge) pour mettre en cache et diffuser du contenu avec une faible latence. Ce ne sont pas des emplacements où vous déployez des instances EC2 pour l'hébergement d'applications ou la reprise après sinistre régionale ; par conséquent, ils ne garantissent pas la disponibilité de calcul requise en cas de panne régionale.  
C. Utilisez des instances EC2 dans la même zone de disponibilité, mais dans des régions AWS différentes.

#### Explications

Cette option présente une incohérence interne : les zones de disponibilité sont limitées à une seule région, il est donc impossible d’appartenir à la « même zone de disponibilité mais à des régions différentes ». Placer les instances dans une seule zone de disponibilité (même au sein d’une région) ne protège pas contre les pannes au niveau de la zone de disponibilité ou de la région ; pour une haute disponibilité intra-régionale, utilisez plusieurs zones de disponibilité, et pour une résilience aux sinistres géographiques, utilisez plusieurs régions.  
D. Utilisez Amazon CloudFront avec les instances EC2 configurées comme source.

#### Explications

Amazon CloudFront est un réseau de distribution de contenu qui met en cache et distribue du contenu depuis des points de présence afin de réduire la latence. Il ne fournit pas de basculement de calcul ni n'héberge d'instances EC2 ; CloudFront peut servir de serveur frontal pour des origines multirégionales, mais une architecture multirégionale et des mécanismes de basculement restent nécessaires pour assurer la reprise après sinistre des ressources de calcul et des données.  
Explication générale  
Cette question évalue la compréhension de la résilience géographique : pour survivre à une catastrophe naturelle affectant une zone géographique entière, il est nécessaire d’exécuter des ressources dans plusieurs régions AWS, car ces régions sont isolées les unes des autres. La mise en œuvre d’une haute disponibilité multirégionale requiert également la réplication des données entre régions et le basculement DNS (par exemple, Route 53). Les réponses distractrices décrivent des emplacements périphériques de CDN ou présentent des limites de zones de disponibilité/régions erronées et ne fournissent donc pas la protection requise contre les sinistres au niveau régional.  
Domaine  
Domaine 1 : Concepts du cloud  
