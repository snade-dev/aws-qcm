Question 1Correct  
Une multinationale souhaite centraliser et standardiser les alertes de sécurité sur l'ensemble de ses services AWS, y compris l'intégration avec des solutions de sécurité tierces.

Quels services AWS peuvent être utilisés pour la surveillance et l'analyse dans un format standardisé ?  
**AWS CloudTrail**  
**Votre réponse est correcte**  
**AWS Security Hub**  
**Configuration AWS**  
**Amazon GuardDuty**  
Explication générale  
**AWS Security Hub**

AWS Security Hub est un service de gestion de la posture de sécurité du cloud (CSPM) conçu pour agréger, organiser et prioriser les alertes et les résultats de sécurité provenant de services AWS tels qu'Amazon GuardDuty, Amazon Inspector et Amazon Macie, ainsi que de diverses solutions partenaires AWS. Il offre une vue d'ensemble de votre niveau de sécurité au sein d'AWS et vous aide à vérifier la conformité de votre environnement aux normes et aux bonnes pratiques du secteur.

Security Hub est la solution idéale pour les entreprises souhaitant optimiser leurs processus de surveillance et de conformité de sécurité sur plusieurs comptes et services AWS. En centralisant et en standardisant les résultats de sécurité dans un format uniforme, Security Hub simplifie la gestion des alertes de sécurité et améliore la visibilité de votre niveau de sécurité sur l'ensemble de votre infrastructure AWS. Cette fonctionnalité est particulièrement précieuse pour les organisations opérant dans un environnement AWS complexe et multi-comptes, leur permettant d'identifier et de traiter efficacement les problèmes de sécurité potentiels.  
Question 2Correct  
Quel service AWS surveille en permanence les activités malveillantes afin de protéger vos comptes et charges de travail AWS ?  
**Bouclier AWS**  
**AWS CloudWatch**  
**AWS WAF**  
**Votre réponse est correcte**  
**Amazon GuardDuty**  
Explication générale  
**Amazon GuardDuty**

Amazon GuardDuty est un service de détection des menaces qui assure une surveillance continue de vos comptes et charges de travail AWS afin de vous protéger contre les activités malveillantes ou non autorisées. GuardDuty analyse et traite les journaux de flux VPC et les journaux d'événements AWS CloudTrail pour détecter les activités inattendues et potentiellement non autorisées susceptibles d'indiquer une menace pour votre environnement. Il peut s'agir d'appels d'API inhabituels ou de déploiements potentiellement non autorisés pouvant révéler une compromission de compte. GuardDuty utilise des flux de renseignements sur les menaces, tels que des listes d'adresses IP et de domaines malveillants, ainsi que l'apprentissage automatique pour identifier les menaces avec une plus grande précision. GuardDuty est facile à activer, ne nécessite aucune installation de logiciel supplémentaire et s'adapte à votre utilisation d'AWS.  
Question 3Correct  
Une entreprise souhaite utiliser la distribution Amazon CloudFront pour le contenu de son application. Elle souhaite connaître l'impact sur les coûts.

Lequel des éléments suivants influe sur le coût d'Amazon CloudFront ?  
**Volume total de données**  
**Transferts de données IN**  
**L'ère du temps de mise en cache**  
**Votre réponse est correcte**  
**Transferts de données sortants**  
Explication générale  
**Transferts de données sortants**

Transferts de données sortants

AWS CloudFront est un service de réseau de diffusion de contenu (CDN) proposé par Amazon Web Services (AWS) qui distribue de manière sécurisée des données, des vidéos, des applications et des API aux clients du monde entier, avec une faible latence et des débits de transfert élevés. CloudFront s'intègre à AWS à la fois physiquement et via l'architecture réseau AWS, permettant ainsi l'accélération et la distribution de contenu dynamique, qu'il s'agisse de contenu statique ou dynamique.

Les tarifs de CloudFront sont calculés en fonction de plusieurs facteurs : le volume de données transférées vers Internet, le nombre de requêtes HTTP/HTTPS effectuées et les coûts supplémentaires liés aux options telles que les certificats SSL personnalisés ou le chiffrement au niveau des champs. Les prix peuvent varier selon la région géographique, en fonction du coût de diffusion du contenu dans différentes parties du monde.  
Question 4Correct  
Une startup prévoit de déployer une nouvelle application e-commerce dans la région USA Est-1. Cependant, elle souhaite distribuer ses produits dans le monde entier. Quels services AWS peuvent être utilisés pour garantir des performances élevées et une faible latence aux utilisateurs du monde entier ?  
**Amazon Macie**  
**AWS Transit Gateway**  
**Votre réponse est correcte**  
Amazon CloudFront  
**Route 53 d'Amazonie**  
Explication générale  
**Amazon CloudFront**

Amazon CloudFront est un service de réseau de diffusion de contenu (CDN) permettant de distribuer du contenu avec une faible latence et des performances élevées aux utilisateurs du monde entier. CloudFront dispose d'un réseau mondial de points de présence qui mettent en cache et diffusent le contenu au plus près des utilisateurs finaux, réduisant ainsi la latence d'accès à l'application. Grâce à CloudFront, la startup peut distribuer le contenu statique et dynamique de son application e-commerce à l'échelle mondiale, garantissant une diffusion plus rapide et une expérience utilisateur améliorée.  
Question 5Correct  
Parmi les propositions suivantes, lesquelles constituent les meilleures pratiques pour sécuriser les données sur un volume EBS ? (Sélectionnez DEUX réponses.)  
**Mise à jour de la politique de mots de passe**  
**Mettez régulièrement à jour le firmware des appareils EBS**  
**Votre sélection est correcte**  
**Chiffrer les données au repos dans le volume EBS**  
**Votre sélection est correcte**  
**Créer des instantanés EBS**  
**Suppression des règles entrantes inutiles des groupes de sécurité**  
Explication générale  
**Chiffrer les données au repos dans le volume EBS**

Le chiffrement des données au repos dans un volume EBS est une bonne pratique pour garantir leur sécurité. Le chiffrement assure que même en cas de compromission ou de vol du volume EBS, les données restent illisibles et protégées. Grâce au chiffrement, les informations sensibles telles que les données clients, les données financières ou les informations personnelles sont protégées contre tout accès non autorisé. AWS offre la possibilité de chiffrer les volumes EBS à l'aide d'AWS Key Management Service (KMS), qui permet de gérer et de contrôler les clés de chiffrement en toute sécurité.

**Créer des instantanés EBS**

La création de snapshots EBS est une autre bonne pratique pour la protection des données. Les snapshots EBS sont des copies à un instant précis des volumes EBS et peuvent être utilisés à des fins de sauvegarde et de reprise après sinistre. En créant régulièrement des snapshots, vous vous assurez de disposer d'une copie récente de vos données en cas de suppression accidentelle, de panne matérielle ou d'autres incidents de perte de données. Les snapshots peuvent servir à restaurer des volumes EBS ou à créer de nouveaux volumes dans différentes régions ou comptes AWS. Cette pratique ajoute une couche de protection supplémentaire aux données et contribue à la continuité de l'activité.  
Question 6Correct  
Si vous êtes en phase de développement préliminaire sur AWS et que vous souhaitez bénéficier d'une assistance technique pendant les heures ouvrables, quel plan de support AWS vous convient le mieux ?  
**Basique**  
**Entreprise**  
**Entreprise**  
**Votre réponse est correcte**  
**Promoteur**  
Explication générale  
**Promoteur**

Le plan de support Développeur est idéal pour les clients qui débutent leurs développements sur AWS et souhaitent bénéficier d'une assistance technique pendant les heures ouvrables. Ce plan inclut des outils de diagnostic côté client, des recommandations de bonnes pratiques et un accès par e-mail aux experts du support cloud pendant les heures ouvrables locales, avec un délai de réponse de 24 heures. Il est conçu pour répondre aux besoins des développeurs et des utilisateurs qui testent et expérimentent les solutions AWS.  
Question 7Correct  
Une entreprise a récemment migré ses charges de travail vers le cloud AWS et a constaté que les délais de déploiement des applications étaient passés de 1 à 2 semaines à 2 à 3 jours.

Quels avantages l'entreprise retire-t-elle du cloud AWS ?  
**Élasticité**  
**Résilience**  
**Votre réponse est correcte**  
**Agilité**  
**Flexibilité**  
Explication générale  
**Agilité**

L'agilité désigne la capacité à répondre rapidement et efficacement à l'évolution des besoins métiers et des conditions du marché. Elle implique la capacité de déployer, de faire évoluer et d'adapter rapidement les applications et les services. L'agilité permet aux organisations d'être plus réactives, d'itérer plus rapidement et de saisir les opportunités dans un environnement dynamique et concurrentiel. Elle s'obtient grâce à l'utilisation des technologies cloud, telles que l'automatisation, les pratiques DevOps et une infrastructure évolutive, qui permettent un développement, un déploiement et une livraison plus rapides des solutions logicielles.

Dans notre cas, le délai de déploiement de l'application a été réduit de 1 à 2 semaines à 2 à 3 jours, témoignant d'une agilité accrue. Le cloud AWS permet un provisionnement rapide des ressources en fonction des besoins, ce qui réduit considérablement le temps de déploiement des nouvelles applications. Les organisations peuvent ainsi innover plus rapidement et réagir plus promptement aux changements. Cela réduit significativement les risques liés au surdimensionnement ou au sous-dimensionnement et permet aux entreprises de mieux répondre aux besoins de leur activité.  
Question 8Correct  
Conformément aux bonnes pratiques de sécurité, comment une instance EC2 doit-elle obtenir l'accès à un compartiment S3 ?  
**Stockez la clé d'accès et la clé secrète dans un fichier texte sur l'instance EC2 et lisez-les depuis l'application.**  
**Modifiez la politique du compartiment S3 afin que n'importe quel service puisse y accéder à tout moment.**  
**Intégrez directement dans l'application la clé d'accès et la clé secrète de l'utilisateur IAM.**  
**Votre réponse est correcte**  
**Créez un rôle IAM pour l'instance EC2 afin d'obtenir l'accès au compartiment S3.**  
Explication générale  
**Créez un rôle IAM pour l'instance EC2 afin de lui permettre d'accéder au compartiment S3.**

Conformément aux bonnes pratiques de sécurité, la méthode recommandée pour autoriser une instance EC2 à accéder à un compartiment S3 consiste à créer un rôle IAM. Un rôle IAM permet d'octroyer des autorisations aux services AWS, tels que les instances EC2, sans avoir à intégrer directement les clés d'accès ou les secrets dans l'application ou l'instance EC2. La création d'un rôle IAM permet de définir des autorisations spécifiques pour que l'instance EC2 puisse accéder au compartiment S3 en toute sécurité. L'instance EC2 peut alors assumer ce rôle et effectuer des appels d'API au compartiment S3 sans exposer les clés d'accès ni les secrets.  
Question 9Correct  
Que se passe-t-il pour une instance Spot si le prix Spot augmente et dépasse votre prix maximum ?  
**L'instance est arrêtée et pourra être redémarrée lorsque le prix baissera.**  
**L'instance est suspendue et pourra être reprise lorsque le prix baissera.**  
**L'instance est automatiquement convertie en instance à la demande.**  
**Votre réponse est correcte**  
**L'instance est terminée et ne peut pas être récupérée.**  
Explication générale  
**L'instance est terminée et ne peut pas être récupérée.**

Les instances Spot sont une offre AWS vous permettant d'enchérir sur la capacité de calcul inutilisée d'Amazon EC2. Si votre instance Spot est en cours d'exécution et que son prix dépasse votre prix maximum, AWS la mettra automatiquement hors service. Une instance arrêtée est irrécupérable. Par conséquent, si vous n'avez pas enregistré votre travail, vous risquez de le perdre. Il est donc essentiel de prendre ce facteur en compte lorsque vous décidez d'utiliser des instances Spot pour certains types de charges de travail.  
Question 10Correct  
Une société de trading a besoin d'une solution AWS économique pour analyser les marchés financiers et exécuter des transactions en quelques millisecondes. Ses applications nécessitent une puissance de calcul continue pendant les heures de trading. En dehors de ces heures, l'application requiert un minimum de ressources.

Quelle combinaison d'options d'achat AWS correspond à ces exigences ?  
**Votre réponse est correcte**  
Instances réservées pour une utilisation de base continue et instances à la demande pour les pics d'utilisation.

#### Explications

Les instances réservées constituent une solution économique pour une utilisation de base continue, grâce à une réduction significative par rapport aux instances à la demande. En revanche, l'utilisation d'instances à la demande pour les pics d'utilisation permet à la société de trading d'augmenter ses ressources en cas de besoin, sans interruption, répondant ainsi parfaitement à ses exigences d'analyse des marchés financiers et d'exécution des transactions en quelques millisecondes.  
**Instances Spot avec blocage Spot pour les heures de négociation et instances réservées pour une utilisation de base.**

#### Explications

Bien que les instances Spot avec blocage Spot puissent permettre de réaliser des économies pendant les heures de négociation, un risque d'interruption existe si le prix Spot dépasse le prix d'achat. Cette solution peut ne pas convenir aux applications exigeant une puissance de calcul continue pendant les heures critiques de négociation. De plus, l'utilisation d'instances réservées pour une utilisation de base peut ne pas offrir la flexibilité nécessaire pour adapter les ressources lors des pics d'utilisation.  
**Des forfaits d'économies pour une utilisation de base et des instances à la demande pour les heures de négociation.**

#### Explications

Les plans d'économies permettent de réduire les coûts liés à une utilisation de base, mais ils peuvent manquer de la flexibilité nécessaire pour adapter les ressources pendant les heures de négociation. L'utilisation d'instances à la demande pendant ces heures peut engendrer des coûts plus élevés que celle d'instances réservées, qui offrent une réduction significative pour une utilisation continue de base. Cette combinaison risque de ne pas répondre aux exigences de la société de négociation en matière de puissance de calcul rentable et ininterrompue pendant les heures critiques.  
**Instances à la demande pour les heures de négociation et instances Spot pour les heures creuses.**

#### Explications

L'utilisation d'instances à la demande pendant les heures de négociation et d'instances Spot en dehors de ces heures peut ne pas constituer la solution la plus rentable pour la société de négociation. Les instances Spot peuvent être interrompues à tout moment si le prix Spot dépasse votre prix d'achat, ce qui peut s'avérer inadapté aux applications nécessitant une puissance de calcul continue pendant les heures de négociation.  
Explication générale  
**Instances réservées pour une utilisation de base continue et instances à la demande pour les pics d'utilisation.**

Les instances réservées sont idéales pour l'utilisation de base d'une entreprise, car elles offrent un tarif horaire réduit en contrepartie d'un engagement sur une capacité de calcul spécifique pour une durée de 1 ou 3 ans, garantissant ainsi des économies et la réservation de capacité. Compte tenu de la nature de l'application financière, un service fiable et ininterrompu pendant les heures de négociation est essentiel, et les instances réservées peuvent le garantir pour une utilisation de base.

Lors de pics d'utilisation ponctuels, notamment sur les marchés financiers, l'entreprise peut tirer parti de la flexibilité des instances à la demande. Elle peut ainsi augmenter instantanément sa puissance de calcul sans engagement à long terme, ce qui est essentiel pour garantir une haute disponibilité et des performances optimales pendant les périodes critiques, sans engendrer de coûts supplémentaires en période creuse.  
Question 11Correct  
Une start-up utilise le niveau gratuit d'AWS pour une application.

Que se passe-t-il lorsque le niveau gratuit d'AWS expire ou que l'application dépasse la limite du niveau Tree ?  
**Le compte AWS de l'entreprise sera suspendu et pourra être réactivé une fois qu'un plan de paiement aura été convenu.**  
**L'entreprise sera facturée pour les services utilisés pendant la période d'essai gratuite, ainsi que pour les frais supplémentaires liés à la consommation de services après cette période.**  
**Le support AWS contactera l'entreprise pour établir les frais de service standard.**  
**Votre réponse est correcte**  
**L'entreprise sera facturée aux tarifs habituels du service à la carte pour toute utilisation dépassant la limite du niveau gratuit.**  
Explication générale  
**L'entreprise sera facturée aux tarifs habituels du service à la carte pour toute utilisation dépassant la limite du niveau gratuit.**

L'offre gratuite d'AWS est un programme qui permet aux nouveaux clients d'explorer et d'utiliser certains services AWS sans frais pendant une période limitée. Elle inclut une allocation d'utilisation gratuite pour diverses ressources AWS, notamment les instances de calcul, le stockage, les bases de données, les services de messagerie, etc. L'offre gratuite permet aux utilisateurs d'expérimenter, d'apprendre et de développer des applications dans l'environnement AWS sans encourir de frais. Elle est conçue pour aider les utilisateurs à se familiariser avec les services AWS et à comprendre leurs fonctionnalités avant de passer à un abonnement payant.

Lorsque la période d'essai gratuite d'AWS expire ou si l'utilisation de l'application dépasse les limites de cette période, l'entreprise sera facturée au tarif standard de paiement à l'usage pour l'utilisation excédentaire. L'offre gratuite d'AWS comprend des offres toujours gratuites, des offres valables 12 mois après l'inscription et des offres d'essai gratuit de courte durée. Une fois la validité de ces offres expirée ou les limites d'utilisation dépassées, les frais standard s'appliquent.  
Question 12Correct  
Quel service AWS assure une communication découplée pour les applications basées sur des microservices ?  
**Amazon Connect**  
**Gestionnaire de systèmes AWS**  
**Votre réponse est correcte**  
**Amazon SQS**  
**Amazon Pinpoint**  
Explication générale  
**Amazon SQS**

Amazon Simple Queue Service (SQS) est un autre service AWS qui assure une communication découplée pour les applications basées sur des microservices. SQS est un service de file d'attente de messages entièrement géré qui permet de découpler les composants d'une application distribuée. Les microservices peuvent envoyer des messages aux files d'attente SQS, et d'autres microservices peuvent les consommer à leur propre rythme, ce qui permet une communication asynchrone et découplée.  
Question 13Correct  
Une entreprise souhaite migrer des données vers le cloud AWS à l'aide d'un appareil Amazon Snowball Edge.

Quelles activités l'entreprise peut-elle proposer gratuitement ?  
**Votre réponse est correcte**  
**Transfert de données du périphérique Snowball Edge vers Amazon S3.**  
**Transfert de données d'Amazon S3 vers un périphérique Snowball Edge.**  
**Utilisation quotidienne du dispositif Snowball Edge après les 10 premiers jours.**  
**Utiliser l'appareil Snowball Edge pendant les 10 premiers jours.**  
Explication générale  
**Transfert de données du périphérique Snowball Edge vers Amazon S3.**

L'utilisation d'Amazon Snowball Edge permet de transférer des données vers Amazon S3 sans frais supplémentaires. Ce processus est essentiel à la proposition de valeur de Snowball Edge, facilitant ainsi la migration de données à grande échelle vers AWS. L'absence de frais de transfert pour l'importation de données dans S3 depuis Snowball Edge encourage les utilisateurs à privilégier cette solution pour leurs projets de migration de données massifs, garantissant une transition fluide et économique vers le cloud. Cette fonctionnalité est conçue pour prendre en charge les transferts de données importants, conformément à l'objectif d'AWS de fournir une approche simplifiée et économique pour l'importation de grands ensembles de données dans son écosystème cloud. En supprimant les frais de transfert pour les chargements dans S3, AWS renforce l'attrait de Snowball Edge pour les migrations de données à grande échelle, en accord avec l'objectif du service de simplifier et d'économiser la transition vers les solutions de stockage cloud.  
Question 14Correct  
Si votre entreprise dispose d'un plan de support AWS Enterprise, qui devez-vous contacter pour toute question relative à la facturation ou à votre compte ?  
**Votre réponse est correcte**  
**Équipe de support AWS Concierge**  
**Équipe de lutte contre les abus AWS**  
**Vendeur sur la Marketplace AWS**  
**Réseau de partenaires AWS (APN)**  
Explication générale  
**Équipe de support AWS Concierge**

L'équipe AWS Concierge Support est un service d'assistance spécialisé destiné aux clients disposant d'une infrastructure ou de dépenses AWS importantes. Elle offre une expérience personnalisée et un accompagnement de qualité, en servant de point de contact dédié. L'équipe Concierge Support collabore avec les clients pour comprendre leurs besoins et défis spécifiques, fournit des conseils proactifs et une assistance pour optimiser leur infrastructure AWS, résout les problèmes et assure un fonctionnement optimal. Elle offre une expertise et des recommandations adaptées aux besoins spécifiques de chaque client, les aidant ainsi à prendre des décisions éclairées, à améliorer leurs performances, à renforcer leur sécurité et à maximiser le retour sur investissement de leur solution AWS. L'équipe AWS Concierge Support fournit une assistance aux clients Enterprise Support, incluant des conseils sur les bonnes pratiques de configuration de compte, l'analyse de la facturation et des recommandations d'optimisation des coûts. Elle s'engage à vous aider à tirer le meilleur parti des services et fonctionnalités AWS.  
Question 15Correct  
Une entreprise utilise des conteneurs Docker exécutés sur des instances Amazon EC2. Elle recherche une solution plus performante pour ajuster automatiquement le nombre de serveurs, gérer le déploiement des applications et maintenir un environnement informatique à jour avec un minimum d'efforts.

Quel service AWS serait le plus adapté pour atteindre ces objectifs ?  
**AWS Lambda**  
**Amazon RDS**  
**Amazone Athéna**  
**Votre réponse est correcte**  
**AWS Fargate**  
Explication générale  
**AWS Fargate**

AWS Fargate est un moteur de calcul sans serveur conçu pour exécuter des conteneurs. Il permet aux utilisateurs d'exécuter des conteneurs sans avoir à gérer de serveurs ni de clusters. Fargate prend en charge la mise à l'échelle, la planification et la gestion de l'infrastructure, ce qui en fait une solution idéale pour les entreprises souhaitant automatiser ces aspects de leurs environnements Docker. Avec Fargate, vous spécifiez les besoins en CPU et en mémoire de vos conteneurs, définissez vos politiques réseau et IAM, et laissez Fargate lancer et gérer les conteneurs pour vous. Ce service élimine la nécessité de provisionner, de configurer et de mettre à l'échelle des clusters de machines virtuelles pour exécuter des conteneurs, ce qui en fait un choix simple et efficace pour le déploiement d'applications conteneurisées.  
Question 16Correct  
Une entreprise souhaite exécuter une application sur plusieurs instances EC2 et doit acheminer le trafic vers ces instances. Quelle stratégie AWS Route 53 doit être utilisée pour répartir le trafic entre les différentes instances ? Il est également possible de définir la quantité de trafic allouée à chaque ressource.  
**Politique de routage de basculement**  
**Votre réponse est correcte**  
**Politique de routage pondéré**  
**politique de routage basée sur IP**  
**Politique de routage simple**  
Explication générale  
**Politique de routage pondéré**

La stratégie de routage pondéré d'AWS Route 53 permet d'acheminer le trafic vers différentes instances EC2 et de contrôler la quantité de trafic allouée à chaque ressource. Grâce à cette stratégie, vous pouvez attribuer des pondérations aux différents enregistrements de ressources, qui représentent ici les instances EC2. La pondération détermine la proportion de trafic acheminée vers chaque ressource. Par exemple, si vous avez deux instances EC2 avec des pondérations respectives de 70 et 30, 70 % du trafic sera dirigé vers la première instance et 30 % vers la seconde. Cette stratégie offre une grande flexibilité en matière d'équilibrage de charge et vous permet de répartir le trafic en fonction de votre configuration, notamment la capacité des instances, les performances ou les scénarios de test.  
Question 17Correct  
Parmi les affirmations suivantes concernant AWS VPC, lesquelles sont correctes ? (Sélectionnez DEUX réponses.)  
**Un groupe de sécurité possède des règles à la fois autorisées et refusées.**  
**Votre sélection est correcte**  
**Un groupe de sécurité n'a autorisé que des règles.**  
**Les groupes de sécurité et les listes de contrôle d'accès réseau (NACL) ne contiennent que des règles autorisées.**  
**Votre sélection est correcte**  
Une liste de contrôle d'accès réseau (NACL) contient à la fois des règles autorisées et des règles refusées.  
**Une liste de contrôle d'accès réseau (NACL) ne contient que des règles autorisées.**  
Explication générale  
**Un groupe de sécurité n'a autorisé que des règles**

Un groupe de sécurité dans AWS VPC vous permet de définir des règles entrantes et sortantes qui contrôlent le flux de trafic. Il fonctionne selon des règles d'autorisation, ce qui signifie que vous définissez explicitement le trafic autorisé à entrer ou sortir des ressources associées. Par défaut, tout le trafic entrant et sortant est bloqué, sauf autorisation spécifique via les règles définies.

**Une NACL contient des règles autorisées et des règles refusées.**

Les listes de contrôle d'accès réseau (ACL réseau) dans AWS VPC offrent une couche de sécurité supplémentaire en contrôlant le trafic entrant et sortant au niveau du sous-réseau. Contrairement aux groupes de sécurité, les ACL réseau prennent en charge les règles d'autorisation et de refus. Vous pouvez ainsi définir des règles d'autorisation et de refus pour contrôler le flux de trafic au niveau du sous-réseau.  
Question 18Correct  
Quelle est la meilleure pratique pour autoriser les utilisateurs dans la gestion des politiques AWS IAM ?  
**Permettre aux utilisateurs de créer et de gérer leurs propres politiques IAM.**  
**Offrir aux utilisateurs un accès en lecture seule à toutes les ressources AWS.**  
**S'assurer que les utilisateurs disposent des autorisations d'administrateur pour gérer les services AWS.**  
**Votre réponse est correcte**  
**Attribuer aux utilisateurs les autorisations minimales nécessaires à l'accomplissement de leurs tâches.**  
Explication générale  
**Attribuer aux utilisateurs les autorisations minimales nécessaires à l'accomplissement de leurs tâches.**

Le principe du moindre privilège est un concept fondamental de sécurité qui consiste à n'accorder aux utilisateurs que les autorisations nécessaires à l'exercice de leurs fonctions, et rien de plus. Cela minimise le risque d'actions accidentelles ou malveillantes susceptibles de compromettre la sécurité du système. Dans AWS IAM, cela implique de définir avec précision les rôles et les politiques afin de garantir que les utilisateurs n'accèdent qu'aux ressources dont ils ont besoin. En limitant les autorisations, les organisations peuvent réduire considérablement leur surface d'attaque et limiter l'impact potentiel d'une faille de sécurité.  
Question 19Correct  
Une entreprise de streaming en ligne souhaite déployer son application sur le cloud AWS afin de garantir la scalabilité de son application lors des pics d'activité.

Comment l'élasticité améliore-t-elle les performances d'une application ?  
**Votre réponse est correcte**  
**Elle a rapidement adapté ses ressources à la hausse ou à la baisse en fonction de la demande.**  
**Elle offre des solutions de stockage à long terme à faible coût.**  
**Il offre des sauvegardes automatiques pour la récupération des applications.**  
**Il propose un tarif mensuel fixe pour des ressources illimitées.**  
Explication générale  
**Elle a rapidement adapté ses ressources à la hausse ou à la baisse en fonction de la demande.**

Amazon Web Services (AWS) propose l'élasticité comme principe fondamental, permettant aux ressources d'infrastructure d'adapter automatiquement leurs capacités en fonction de la demande en temps réel. L'élasticité garantit que les applications peuvent gérer les pics de trafic et réduire leur capacité en période de faible activité, sans intervention humaine. Ce provisionnement dynamique améliore la disponibilité et les performances des applications, tout en générant des économies. Parmi les principaux services AWS illustrant l'élasticité, citons Amazon EC2 (Elastic Compute Cloud) pour le calcul, Amazon RDS (Relational Database Service) pour les bases de données et Amazon Auto Scaling pour l'ajustement automatique de la capacité. Grâce à l'élasticité d'AWS, les entreprises peuvent optimiser leur efficacité opérationnelle et s'adapter facilement aux variations de charge de travail.  
Question 20Correct  
Selon la politique de tests d'intrusion d'AWS, laquelle des affirmations suivantes est vraie ?  
**Seul AWS peut effectuer des tests d'intrusion**  
**Votre réponse est correcte**  
**Les clients peuvent effectuer des tests d'intrusion sur leur instance EC2.**  
**AWS ne prend pas en charge les tests d'intrusion**  
**Les clients sont autorisés à effectuer des tests d'intrusion sur les zones hébergées Route 53\.**  
Explication générale  
**Les clients peuvent effectuer des tests d'intrusion sur leur instance EC2.**

Conformément à la politique de tests d'intrusion d'AWS, vous pouvez effectuer des tests d'intrusion sur les instances EC2. AWS autorise ses clients à réaliser des tests d'intrusion sur leurs propres instances EC2 afin d'évaluer le niveau de sécurité de leurs applications et environnements. Toutefois, certaines directives et exigences doivent être respectées, notamment l'obtention d'une autorisation préalable d'AWS, la réalisation des tests uniquement sur leurs propres ressources et le respect des règles définies dans la politique de tests d'intrusion d'AWS.  
Question 21Correct  
Quel service AWS utiliseriez-vous pour maintenir la disponibilité des données même en cas de panne d'une région AWS entière ?  
**AWS Lambda**  
**Amazon RDS avec déploiement multi-AZ**  
**Amazon EC2 avec mise à l'échelle automatique**  
**Votre réponse est correcte**  
**Amazon S3 avec réplication interrégionale (CRR)**  
Explication générale  
**Amazon S3 avec réplication interrégionale (CRR)**

La réplication interrégionale (CRR) d'Amazon S3 est conçue pour copier automatiquement et de manière asynchrone les objets entre les compartiments situés dans différentes régions AWS. Ainsi, les données restent disponibles dans une autre région en cas de panne dans la région principale. Grâce à CRR, vous bénéficiez non seulement d'une haute disponibilité, mais vous renforcez également la durabilité de vos données. Les applications peuvent ainsi être conçues pour résister aux pannes régionales, garantissant un accès continu aux données critiques.  
Question 22Incorrect  
Quels sont les avantages de passer d'une base de données sur site à un service de base de données relationnelle Amazon (RDS) ? (Sélectionnez DEUX réponses.)  
**Sélection correcte**  
**Appliquer automatiquement les correctifs logiciels**  
**Exécuter des bases de données SQL et NoSQL**  
**Votre sélection est correcte**  
**Prise en charge de la fonction de sauvegarde automatique**  
**Aucune administration de base de données requise**  
**Votre sélection est incorrecte**  
**Évoluez verticalement sans interruption de service**  
Explication générale  
**Appliquer automatiquement les correctifs logiciels**

L'un des avantages d'Amazon RDS est qu'il applique automatiquement les correctifs au logiciel de base de données qui prend en charge votre instance RDS, vous libérant ainsi de la tâche de mise à jour de vos systèmes de base de données. Cela réduit le processus souvent complexe et chronophage de gestion des correctifs logiciels, améliorant ainsi la fiabilité et la sécurité du système.

**Prise en charge de la fonction de sauvegarde automatique**

Un autre avantage d'Amazon RDS est sa fonction de sauvegarde automatique. Grâce aux instantanés de base de données et aux sauvegardes automatisées, Amazon RDS facilite la restauration de votre base de données à un état antérieur. Il sauvegarde automatiquement votre base de données et conserve cette sauvegarde pendant la période de rétention que vous définissez. Ces sauvegardes incluent toutes les transactions de votre base de données, vous permettant ainsi de restaurer votre base de données à n'importe quelle seconde durant votre période de rétention, jusqu'aux cinq dernières minutes.  
Question 23Correct  
Quel service ou ressource AWS fournit les meilleures pratiques et les réponses aux questions les plus fréquemment posées en matière de sécurité concernant les comptes et les ressources AWS ?  
**Chatbot AWS**  
**Artefact AWS**  
**AWS Marketplace**  
**Votre réponse est correcte**  
**Centre de connaissances AWS**  
Explication générale  
**Centre de connaissances AWS**

Le Centre de connaissances AWS est une ressource précieuse pour toute personne recherchant des informations sur les bonnes pratiques, des conseils de dépannage et des réponses aux questions fréquemment posées concernant les comptes et les ressources AWS. Il fournit des conseils complets sur un large éventail de sujets, notamment la sécurité, la facturation et les problèmes techniques. En consultant le Centre de connaissances, les utilisateurs peuvent profiter d'articles détaillés rédigés par des experts AWS, qui les aident non seulement à résoudre les problèmes courants, mais aussi à améliorer la sécurité et l'efficacité de leurs environnements AWS.  
Question 24Correct  
Une start-up a développé une application de recherche pour l'analyse des antécédents médicaux des patients. Elle souhaite déployer cette application sur des instances EC2. Conçue avec une architecture tolérante aux pannes, l'application requiert des disques durs performants en termes d'E/S.

Quelle option de stockage serait la solution la plus rentable ?  
**Amazon S3**  
**Votre réponse est correcte**  
**Magasin d'instances**  
**Système de fichiers élastique Amazon (EFS)**  
**SSD Amazon EBS provisionné IOPS (io1/io2)**  
Explication générale  
**Magasin d'instances**

Instance Store fournit un stockage temporaire au niveau bloc pour les instances EC2. Ce stockage est situé sur des disques physiquement connectés à l'ordinateur hôte et offre des performances d'E/S très élevées, essentielles pour les applications nécessitant un traitement rapide des données, comme l'analyse des antécédents médicaux des patients. Étant donné qu'Instance Store est directement connecté à l'instance, il est conçu pour offrir des performances d'E/S aléatoires et séquentielles très élevées, ce qui le rend idéal pour les tâches exigeant un débit élevé et une faible latence.

L'un des principaux avantages de l'utilisation d'un stockage d'instance réside dans son rapport coût-efficacité. En tant qu'option de stockage local, il élimine la latence réseau et les coûts associés aux autres types de stockage. Il peut s'avérer particulièrement utile pour les applications où la persistance des données n'est pas une priorité, car les données stockées dans un stockage d'instance sont éphémères et seront perdues si l'instance est arrêtée ou supprimée. Il offre ainsi un excellent compromis entre performance et rentabilité pour certains cas d'utilisation.  
Question 25Correct  
Une entreprise possède 5 pétaoctets de données et doit les stocker en vue d'une sauvegarde, afin de pouvoir les restaurer en cas de sinistre. Quelle classe de stockage S3 doit être utilisée ? Laquelle est la plus économique ?  
**Amazon S3 Standard \- Accès peu fréquent (S3 Standard-IA)**  
**Amazon S3 Intelligent Tiering (S3 Intelligent Tiering)**  
**Votre réponse est correcte**  
**Amazon S3 Glacier Deep Archive (S3 Glacier Deep Archive)**  
**Amazon S3 Standard (S3 Standard)**  
Explication générale  
**Amazon S3 Glacier Deep Archive (S3 Glacier Deep Archive)**

Amazon S3 Glacier Deep Archive est la solution de stockage la plus économique proposée par Amazon S3. Conçue pour l'archivage et la sauvegarde de données à long terme, elle offre une durabilité, une sécurité et des options de récupération optimisées pour un accès peu fréquent aux données. Pour un stockage économique de 5 pétaoctets de données à des fins de sauvegarde, Amazon S3 Glacier Deep Archive est la solution recommandée.  
Question 26Correct  
Parmi les affirmations suivantes, lesquelles sont vraies selon Amazon VPC ? (Sélectionnez DEUX réponses.)  
**Créer et gérer des politiques de privilèges pour tous les utilisateurs et groupes IAM.**  
**Votre sélection est correcte**  
**Ayez un contrôle total sur l'environnement réseau virtuel.**  
**Il est possible de configurer les paramètres de basculement afin que le trafic soit acheminé vers des ressources saines.**  
**Votre sélection est correcte**  
**Permet de configurer une liste de contrôle d'accès réseau (ACL) qui fait office de pare-feu pour contrôler le trafic.**  
**Permet de gérer les configurations de sécurité du réseau d'infrastructure AWS.**  
Explication générale  
**Il est possible de configurer une liste de contrôle d'accès réseau (ACL) qui fait office de pare-feu pour contrôler le trafic.**

Amazon VPC vous permet de configurer des listes de contrôle d'accès (ACL) réseau qui font office de pare-feu pour contrôler le trafic entrant et sortant au niveau du sous-réseau. Les ACL réseau offrent une couche de sécurité supplémentaire en autorisant ou en bloquant certains types de trafic selon les règles que vous définissez.

**Ayez un contrôle total sur l'environnement de réseau virtuel**

Avec Amazon VPC, vous contrôlez entièrement votre environnement réseau virtuel. Vous pouvez personnaliser la configuration réseau, notamment les plages d'adresses IP, les sous-réseaux, les tables de routage et les passerelles réseau. Ce contrôle vous permet de concevoir et de gérer votre infrastructure réseau en fonction de vos besoins spécifiques.  
Question 27Correct  
Quel service ou fonctionnalité AWS permet aux applications distribuées d'envoyer à la fois des SMS et des e-mails ?  
**alertes Amazon CloudWatch**  
**Amazon SQS**  
**Votre réponse est correcte**  
**Amazon SNS**  
**Amazon SES**  
Explication générale  
**Amazon SNS**

Amazon Simple Notification Service (SNS) est un service de messagerie entièrement géré qui vous permet d'organiser et d'envoyer efficacement des notifications depuis le cloud. Ce service prend en charge plusieurs modèles de messagerie, notamment la publication/abonnement, les SMS, les e-mails et les notifications push mobiles, ce qui le rend polyvalent pour répondre à divers besoins de communication. SNS est conçu pour permettre aux applications d'envoyer des messages à un grand nombre d'abonnés, y compris des envois directs aux utilisateurs par SMS et e-mail. Sa capacité à fonctionner avec des systèmes distribués en fait un choix idéal pour les applications nécessitant des solutions de messagerie évolutives et flexibles. Cette large gamme de fonctionnalités de messagerie, associée à une haute disponibilité et une grande fiabilité, garantit que SNS est la meilleure solution pour les applications souhaitant mettre en œuvre des systèmes de notification robustes sur différents canaux de communication.  
Question 28Correct  
Quels sont les avantages des économies d'échelle pour le cloud computing ?  
**Votre réponse est correcte**  
**Réduction du coût unitaire à mesure que la consommation augmente**  
**Exigences relatives aux engagements à long terme**  
**Des coûts variables plus élevés que les coûts fixes**  
**Augmentation des dépenses d'investissement pour les mises à niveau technologiques**  
Explication générale  
**Réduction du coût unitaire à mesure que la consommation augmente**

Le principe des économies d'échelle dans le cloud computing signifie que, à mesure que des fournisseurs comme AWS se développent et servent davantage de clients, ils gagnent en efficacité et réduisent leurs coûts d'exploitation unitaires. Cet avantage est ensuite répercuté sur les clients, qui bénéficient de coûts réduits à mesure que leur utilisation augmente. Ce modèle permet aux entreprises de profiter d'une réduction du coût unitaire à mesure que leur demande en ressources informatiques croît, sans avoir à réaliser d'importants investissements initiaux dans du matériel physique et des centres de données. Le modèle de tarification à l'usage du cloud computing renforce encore cet avantage, permettant aux entreprises de ne payer que pour les ressources qu'elles consomment. Cette approche évolutive et efficace des ressources informatiques aide les entreprises à optimiser leurs dépenses informatiques, rendant la technologie plus accessible et abordable, notamment pour les startups et les PME qui ne disposent pas forcément des capitaux nécessaires pour des investissements importants dans une infrastructure informatique.  
Question 29Correct  
Quel outil permet de télécharger des images sur S3 en utilisant des API spécifiques à un langage de programmation ?  
**Votre réponse est correcte**  
**Kit de développement logiciel AWS (SDK)**  
**Console de gestion AWS (navigateur)**  
**Interface de ligne de commande AWS (CLI)**  
**Environnements de développement intégrés (IDE)**  
Explication générale  
**Kit de développement logiciel AWS (SDK)**

Le kit de développement logiciel (SDK) AWS vous permet de charger des images sur S3 à l'aide d'API spécifiques à chaque langage de programmation. Le SDK fournit des bibliothèques et des API pour divers langages, tels que Java, Python, Ruby, etc., vous permettant d'interagir avec les services AWS, notamment S3. Grâce au SDK, vous pouvez écrire du code qui charge automatiquement des images ou tout autre fichier vers un compartiment S3, vous offrant ainsi flexibilité et contrôle sur le processus de chargement. Le SDK masque les appels d'API REST sous-jacents et fournit une interface de plus haut niveau, simplifiant l'intégration des fonctionnalités S3 dans vos applications.  
Question 30Correct  
Quels avantages offre le cloud computing par rapport aux services informatiques traditionnels sur site ?  
**L'informatique sur site offre de meilleures options d'évolutivité que le cloud computing.**  
**Les services informatiques traditionnels offrent davantage de capacités d'automatisation et d'orchestration que les services cloud.**  
**Votre réponse est correcte**  
**L'informatique en nuage fait passer les dépenses informatiques d'un modèle de dépenses d'investissement (CapEx) à un modèle de dépenses opérationnelles (OpEx).**  
**L'informatique en nuage nécessite d'importants investissements initiaux en infrastructure.**  
Explication générale  
**L'informatique en nuage fait passer les dépenses informatiques d'un modèle de dépenses d'investissement (CapEx) à un modèle de dépenses opérationnelles (OpEx).**

L'informatique en nuage repose généralement sur un modèle de tarification à l'usage ou par abonnement, ce qui transforme les dépenses informatiques en dépenses d'exploitation (OpEx) plutôt qu'en investissements initiaux. Les entreprises peuvent ainsi ne payer que pour ce qu'elles consomment et éviter les coûts liés à l'achat et à la maintenance du matériel et des logiciels.  
Question 31Correct  
Votre entreprise dispose d'une application à usage interne uniquement, exécutée sur une instance EC2. Pour des raisons de sécurité, vous devez bloquer toutes les autres requêtes entrantes vers cette instance EC2. Quelle solution parmi les suivantes vous permettra d'y parvenir ?  
**Passerelle Internet**  
**MAINTENANT MFA**  
**Politique IAM**  
**Votre réponse est correcte**  
**Groupe de sécurité**  
Explication générale  
**Groupe de sécurité**

Les groupes de sécurité agissent comme un pare-feu virtuel au niveau de l'instance, contrôlant le trafic entrant et sortant de vos instances EC2. En les utilisant efficacement, vous pouvez protéger les instances EC2 de votre application contre les requêtes entrantes indésirables. Vous pouvez configurer des règles pour autoriser uniquement le trafic provenant d'adresses IP ou de plages spécifiques, comme celles utilisées en interne par votre entreprise. Ainsi, toute requête provenant d'une zone non définie sera automatiquement bloquée. L'utilisation des groupes de sécurité de cette manière offre un moyen robuste et personnalisable de gérer l'accès à vos instances EC2. Il est important de noter que les groupes de sécurité fonctionnent au niveau de l'instance, et non au niveau du sous-réseau, ce qui permet un contrôle précis de l'accès à vos instances.  
Question 32Correct  
Dans le modèle de responsabilité partagée d'AWS, quelle responsabilité incombe au client lors de l'utilisation d'Amazon DynamoDB ?  
**Garantir la sécurité physique de DynamoDB**  
**Application des mises à jour et correctifs logiciels pour DynamoDB**  
**Votre réponse est correcte**  
**Gestion des autorisations d'accès des utilisateurs aux tables DynamoDB**  
**Garantir le chiffrement des données stockées dans DynamoDB**  
Explication générale  
**Gestion des autorisations d'accès des utilisateurs aux tables DynamoDB**

La gestion des autorisations d'accès aux tables DynamoDB incombe entièrement au client. Cela implique l'utilisation d'AWS Identity and Access Management (IAM) pour contrôler l'accès aux ressources DynamoDB. Les clients doivent définir avec précision les politiques IAM qui spécifient qui est autorisé à accéder à leurs tables DynamoDB et quelles actions ils peuvent effectuer. Ceci est essentiel pour garantir la sécurité et l'intégrité des données stockées dans DynamoDB. Cela permet aux clients de mettre en œuvre le principe du moindre privilège, en veillant à ce que les personnes et les services ne disposent que des autorisations nécessaires à l'exécution de leurs tâches.  
Question 33Correct  
Une entreprise prévoit d'utiliser une base de données NoSQL sur des instances Amazon EC2 pour ses applications. Dans cette configuration, quelle responsabilité incombe à AWS ?  
**Votre réponse est correcte**  
Application des mises à jour à l'infrastructure matérielle prenant en charge les instances EC2.  
Garantir la disponibilité ininterrompue de la base de données NoSQL.  
Configuration des règles de pare-feu au sein des groupes de sécurité pour les instances EC2.  
Mise à jour du système d'exploitation des instances EC2.  
Explication générale  
**Application des mises à jour à l'infrastructure matérielle prenant en charge les instances EC2**

AWS est responsable de la mise à jour et de la maintenance de l'infrastructure physique qui sous-tend ses services cloud, notamment les instances EC2. Cette responsabilité s'inscrit dans le cadre du modèle de responsabilité partagée, où AWS prend en charge l'infrastructure cloud, garantissant sa fiabilité, sa sécurité et sa pérennité. Lorsqu'une entreprise choisit d'exécuter des bases de données NoSQL sur des instances EC2, AWS s'assure que les serveurs physiques, le stockage et les composants réseau sont en parfait état, notamment grâce à des mises à jour et des correctifs réguliers. Ce support fondamental est essentiel au maintien de la santé et des performances globales des services exécutés sur cette infrastructure, tels que les instances EC2. Il est toutefois important de comprendre que si AWS assure la maintenance de l'infrastructure physique, le client est responsable de la gestion des logiciels et des configurations de ses instances.  
Question 34Correct  
Une entreprise prévoit de migrer son application sur site vers AWS et vise à minimiser la latence en choisissant une infrastructure géographiquement proche de ses opérations actuelles.

Quelle fonctionnalité AWS permet un placement optimal de sa zone de déploiement d'application ?  
**AWS Direct Connect**  
**Amazon VPC**  
**Amazon CloudFront**  
**Votre réponse est correcte**  
**Régions AWS**  
Explication générale  
**Régions AWS**

Les régions AWS sont des zones géographiques spécifiques à travers le monde où Amazon Web Services héberge son infrastructure cloud. Chaque région est une zone géographique distincte qui comprend plusieurs emplacements isolés appelés zones de disponibilité. Les régions AWS permettent aux utilisateurs de déployer leurs applications au plus près de leurs utilisateurs finaux, réduisant ainsi la latence, améliorant les performances et garantissant la conformité aux réglementations régionales et aux exigences de résidence des données. En proposant un large choix de régions, AWS permet à ses clients d'atteindre une tolérance aux pannes plus élevée et de maintenir la durabilité de leurs données.

Les régions AWS permettent aux clients de choisir l'emplacement géographique de déploiement des services AWS, notamment Amazon RDS et EC2. Cette fonctionnalité est essentielle pour les entreprises souhaitant migrer leurs bases de données sur site vers le cloud tout en garantissant une faible latence et le respect des exigences de résidence des données. En sélectionnant une région AWS proche de leur emplacement géographique actuel, l'entreprise réduit la distance physique parcourue par les données, ce qui se traduit par des temps d'accès plus rapides pour les utilisateurs finaux.  
Question 35Correct  
Une entreprise du secteur financier possède un important ensemble de données stockées dans un compartiment Amazon S3. Son équipe de sécurité souhaite identifier les informations sensibles afin de prévenir les fuites de données. Quel service AWS recommandez-vous pour répondre à ce besoin ?  
**Gestionnaire de pare-feu AWS**  
**Inspecteur Amazon**  
**AWS Secrets Manager**  
**Votre réponse est correcte**  
**Amazon Macie**  
Explication générale  
**Amazon Macie**

Amazon Macie est un service de sécurité performant qui utilise l'apprentissage automatique et l'intelligence artificielle pour détecter, classer et protéger automatiquement les données sensibles. Il analyse le contenu des fichiers stockés dans les compartiments S3 et identifie différents types d'informations sensibles, comme les données personnelles, les données financières, la propriété intellectuelle, etc. Amazon Macie vous offre une visibilité complète sur vos données et vous aide à comprendre leur niveau de sensibilité et les risques associés. Il génère des alertes et des notifications en cas de fuites de données potentielles ou d'accès non autorisé, vous permettant ainsi de prendre les mesures nécessaires pour protéger vos données sensibles.  
Question 36Correct  
Quelle est la stratégie clé recommandée par AWS pour une migration réussie vers le cloud ?  
**Pour gagner du temps, évitez d'évaluer les applications et les bases de données avant la migration.**  
**Surdimensionner les ressources pour garantir leur disponibilité pendant la migration.**  
**Votre réponse est correcte**  
**Utilisez AWS Migration Hub pour suivre la progression des applications pendant la migration.**  
**Maintenir les systèmes existants sans modification pendant le processus de migration.**  
Explication générale  
**Utilisez AWS Migration Hub pour suivre la progression des applications pendant la migration.**

AWS Migration Hub centralise le suivi de la progression des migrations d'applications sur plusieurs solutions AWS et partenaires. Il simplifie le processus en offrant une visibilité sur l'état des migrations, permettant ainsi aux entreprises de superviser les migrations de leur portefeuille d'applications et de garantir leur bon déroulement.  
Question 37Correct  
Dans le cadre d'un audit de conformité, une entreprise doit examiner la fréquence à laquelle les mots de passe et les clés d'accès sont mis à jour au sein de son environnement AWS.

Quelle fonctionnalité ou quel service AWS peut fournir ces informations ?  
**Votre réponse est correcte**  
**Rapport d'identification IAM**  
**Analyseur d'accès IAM**  
**Artefact AWS**  
**Gestionnaire d'audit AWS**  
Explication générale  
**Rapport d'identification IAM**

Le rapport sur les informations d'identification IAM est conçu pour aider les clients à gérer et auditer les informations d'identification de sécurité de leurs utilisateurs IAM, notamment les mots de passe, les clés d'accès et l'état de l'authentification multifacteur (MFA). Ce rapport offre un aperçu complet de l'état des informations d'identification de tous les utilisateurs du compte AWS. Il permet aux administrateurs d'évaluer rapidement l'état des informations d'identification des utilisateurs, y compris la date de dernière rotation des mots de passe et des clés d'accès, garantissant ainsi le respect des bonnes pratiques de sécurité et des exigences de conformité. La facilité d'accès à ces informations détaillées simplifie le processus d'audit et d'application des politiques relatives à la rotation des informations d'identification, répondant ainsi au besoin de l'entreprise de surveiller et de vérifier la conformité au sein de son environnement AWS.  
Question 38Correct  
Quel est le principal avantage de l'intégration d'AWS IAM Identity Center (AWS Single Sign-On) aux services d'annuaire d'une entreprise ?  
**Il offre un stockage illimité pour tout type de données d'entreprise au sein du cloud AWS.**  
**Elle garantit la conformité aux exigences de résidence des données en limitant le transfert de données en dehors des réseaux de l'entreprise.**  
**Votre réponse est correcte**  
**Il permet aux employés d'utiliser leurs identifiants existants pour accéder aux services et applications AWS.**  
**Il offre une connexion VPN directe aux serveurs de l'entreprise pour une expérience réseau plus rapide.**  
Explication générale  
**Il permet aux employés d'utiliser leurs identifiants existants pour accéder aux services et applications AWS.**

L'intégration d'AWS IAM Identity Center aux services d'annuaire d'entreprise permet aux employés d'utiliser leurs identifiants existants pour accéder aux comptes AWS et aux applications cloud, simplifiant ainsi l'expérience utilisateur et renforçant la sécurité. Cette intégration élimine le besoin d'identifiants distincts pour les services AWS, réduisant la complexité des mots de passe et le risque de compromission des identifiants, tout en rationalisant la gestion des accès utilisateurs.  
Question 39Incorrect  
Une entreprise possède une application hébergée sur le cloud AWS et utilise une base de données Oracle hébergée dans un centre de données sur site. Elle souhaite migrer cette base de données vers le cloud AWS afin d'améliorer la sécurité et de réduire les coûts. Quel service AWS doit-elle utiliser pour effectuer cette migration sans impacter négativement les performances de la base de données source ?  
**Service de découverte d'applications AWS**  
**Votre réponse est incorrecte**  
**AWS DataSync**  
**Famille de transfert AWS**  
**Bonne réponse**  
**Service de migration de base de données AWS**  
Explication générale  
**Service de migration de base de données AWS**

Pour migrer la base de données Oracle d'un centre de données sur site vers le cloud AWS sans impact négatif sur les performances, l'entreprise devrait utiliser AWS Database Migration Service (DMS).

AWS Database Migration Service (DMS) est un service entièrement géré qui simplifie la migration de bases de données. Il prend en charge les migrations homogènes et hétérogènes, notamment d'Oracle vers AWS, tout en minimisant les interruptions de service et l'impact sur la base de données source. DMS effectue la conversion de schéma, la réplication des données et l'intégration continue des données, garantissant ainsi une migration fluide et efficace. Il utilise une instance de réplication pour transférer les données de la base de données sur site vers le cloud AWS en toute sécurité. DMS prend également en charge la réplication continue afin de maintenir la base de données cible synchronisée avec les modifications apportées à la base de données source, permettant ainsi une transition transparente.  
Question 40Correct  
Vous avez une application de microservices exécutée dans le cloud AWS qui rencontre des problèmes de performance et de latence. Quel service AWS vous aide à résoudre ces problèmes ?  
**Inspecteur Amazon**  
**Votre réponse est correcte**  
**AWS X-Ray**  
**AWS Cloud9**  
**AWS CloudTrail**  
Explication générale  
**AWS X-Ray**

AWS X-Ray vous permet d'analyser et de déboguer les applications distribuées, notamment les architectures de microservices. Il offre une visibilité complète sur le comportement et les performances de l'application en traçant les requêtes tout au long de leur parcours entre les services. Avec X-Ray, vous pouvez identifier les goulots d'étranglement, diagnostiquer les problèmes de performances et comprendre les dépendances et la latence au sein de votre application. Il vous aide à déterminer la cause première des problèmes de performances et à optimiser les performances de votre application. Pour le dépannage des problèmes de performances et de latence dans une application de microservices exécutée dans le cloud AWS, AWS X-Ray est le service recommandé.  
Question 41Correct  
Une startup exécute une application sur plusieurs instances Amazon EC2. Son propriétaire souhaite recevoir une notification par e-mail dès que l'utilisation du processeur dépasse 80 %. Quels services AWS la startup doit-elle utiliser pour répondre à cette exigence ?  
**AWS Lambda**  
**Budgets AWS**  
**Votre réponse est correcte**  
**Amazon CloudWatch**  
**Amazon SQS**  
Explication générale  
**Amazon CloudWatch**

La startup devrait également utiliser Amazon CloudWatch pour surveiller l'utilisation du processeur des instances EC2. CloudWatch fournit des services de surveillance et d'observabilité pour les ressources et les applications AWS. En configurant une alarme CloudWatch pour surveiller l'utilisation du processeur des instances EC2 et en définissant un seuil de 80 %, le propriétaire peut déclencher des actions, comme l'envoi de notifications via SNS, lorsque l'utilisation du processeur dépasse ce seuil.  
Question 42Correct  
Une entreprise configure AWS Identity and Access Management (IAM) pour une sécurité renforcée.

Quelle recommandation est conforme aux meilleures pratiques de sécurité IAM ?  
**Partagez les identifiants utilisateur IAM entre les membres de l'équipe.**  
**Définissez les autorisations exclusivement à l'aide de politiques intégrées.**  
**Votre réponse est correcte**  
**Activez l'authentification multifacteurs (MFA) pour tous les utilisateurs.**  
**Utilisez le compte root pour les opérations quotidiennes.**  
Explication générale  
**Activez l'authentification multifacteurs (MFA) pour tous les utilisateurs.**

L'activation de l'authentification multifacteurs (MFA) pour tous les utilisateurs est une mesure de sécurité essentielle recommandée par les bonnes pratiques AWS IAM. La MFA ajoute une couche de sécurité supplémentaire en exigeant des utilisateurs qu'ils fournissent au moins deux formes d'identification avant d'obtenir un accès. Il s'agit généralement d'un élément qu'ils connaissent (comme un mot de passe) et d'un élément qu'ils possèdent (comme un code provenant d'une application mobile ou un SMS). La MFA réduit considérablement le risque d'accès non autorisé lié à des identifiants compromis, car un attaquant aurait besoin à la fois du mot de passe de l'utilisateur et d'un accès physique à son dispositif d'authentification multifacteurs. La mise en œuvre de la MFA pour tous les utilisateurs, en particulier ceux disposant de privilèges élevés, contribue à protéger les ressources et les données sensibles stockées dans les services AWS contre les violations potentielles.  
Question 43Correct  
Une entreprise souhaite ne payer que pour les ressources qu'elle utilise et a besoin de pouvoir augmenter ou diminuer son utilisation des ressources pour répondre à ses besoins opérationnels.

Quel pilier du framework AWS Well-Architected correspond à ces exigences ?  
**Sécurité**  
**Fiabilité**  
**Votre réponse est correcte**  
**optimisation des coûts**  
**Excellence opérationnelle**  
Explication générale  
**Optimisation des coûts**

Le pilier « Optimisation des coûts » se concentre sur la conception et l'exploitation des charges de travail afin de générer de la valeur ajoutée pour l'entreprise au moindre coût. Il s'agit notamment de ne payer que pour les ressources informatiques nécessaires et de pouvoir moduler leur utilisation en fonction des besoins de l'entreprise, sans avoir recours à des prévisions complexes. Par exemple, les environnements de développement et de test sont généralement utilisés huit heures par jour en semaine. Il est possible d'arrêter ces ressources lorsqu'elles ne sont pas utilisées afin de réaliser des économies.  
Question 44Correct  
Quelle est la fonctionnalité clé du framework d'adoption du cloud AWS (AWS CAF) ?  
**Fiabilité**  
**Durabilité**  
**efficacité de performance**  
**Votre réponse est correcte**  
**Gouvernance**  
Explication générale  
**Gouvernance**

La gouvernance consiste fondamentalement à établir et à maintenir le contrôle des ressources et services informatiques dans le cloud. Cela inclut la mise en œuvre de politiques, de procédures et de technologies permettant de gérer et de surveiller les applications, les données et l'infrastructure. La gouvernance est essentielle pour garantir que les opérations informatiques soient alignées sur les objectifs commerciaux, conformes aux exigences réglementaires et permettent une gestion efficace des risques. Dans le cadre du AWS CAF, la gouvernance englobe un ensemble de pratiques telles que la gestion financière, la gestion des risques et la conformité, ainsi que la gestion des ressources et des accès au sein de l'environnement cloud. Ces pratiques aident les organisations à maintenir la supervision et le contrôle de leurs ressources cloud, garantissant ainsi leur utilisation efficace et sécurisée, et leur adéquation avec les objectifs globaux de l'organisation. L'importance accordée à la gouvernance dans le AWS CAF souligne son rôle fondamental dans l'adoption du cloud, permettant aux organisations de faire évoluer leur utilisation du cloud en toute confiance, tout en maîtrisant les coûts, la sécurité et les risques de conformité.  
Question 45Correct  
Lesquels des éléments suivants sont associés au pilier Fiabilité du cloud AWS ? (Sélectionnez DEUX réponses.)  
**Votre sélection est correcte**  
**Augmentez la capacité horizontale pour accroître la disponibilité de la charge de travail globale.**  
**Adoptez une architecture sans serveur chaque fois que cela est possible.**  
**Votre sélection est correcte**  
**Capacité à se remettre automatiquement d'une panne.**  
**Appliquer le principe du moindre privilège à toutes les ressources AWS**  
**Ne payez que pour les ressources informatiques dont votre entreprise a besoin.**  
Explication générale  
**Capacité de récupération automatique après une panne**

La capacité à se rétablir automatiquement après une panne est un aspect fondamental du pilier Fiabilité du cloud AWS. AWS propose divers services et fonctionnalités qui permettent des mécanismes de rétablissement automatisés, tels que Auto Scaling, Elastic Load Balancing et Amazon CloudWatch. Ces services contribuent à détecter les pannes, à dimensionner les ressources et à répartir le trafic vers les instances opérationnelles, garantissant ainsi une haute disponibilité et une tolérance aux pannes. Grâce à ces fonctionnalités, les applications peuvent se rétablir automatiquement après une panne sans intervention manuelle, ce qui renforce la fiabilité de l'environnement cloud.

**Évoluez horizontalement pour augmenter la disponibilité de la charge de travail globale**

La mise à l'échelle horizontale est un autre aspect important du pilier Fiabilité. AWS offre des fonctionnalités de mise à l'échelle élastique qui permettent aux applications de s'adapter horizontalement en ajoutant des instances pour répartir la charge de travail. Grâce à cette mise à l'échelle horizontale, la disponibilité globale de la charge de travail augmente, car celle-ci est répartie sur plusieurs instances. Cette approche contribue à garantir la tolérance aux pannes, à réduire l'impact des défaillances et à maintenir des performances constantes, même en cas de forte charge ou de pics de demande.  
Question 46Correct  
Une entreprise a conçu son infrastructure AWS Cloud pour gérer les charges de travail et a mis en œuvre une stratégie d'amélioration continue des processus.

Quel pilier du framework AWS Well-Architected est illustré par cette approche ?  
**Sécurité**  
**Votre réponse est correcte**  
**Excellence opérationnelle**  
**Optimisation des coûts**  
**Efficacité de performance**  
Explication générale  
**Excellence opérationnelle**

Le pilier « Excellence opérationnelle » vise à optimiser les aspects opérationnels d'un système. Il met l'accent sur l'utilisation efficiente des ressources, l'automatisation et l'amélioration continue. Ce pilier encourage les organisations à adopter les meilleures pratiques pour la gestion et le suivi de leurs charges de travail, la mise en œuvre de l'automatisation afin de réduire les tâches manuelles et l'établissement de procédures opérationnelles claires. Il souligne également l'importance des revues régulières, du suivi des performances et des mesures proactives pour identifier et résoudre les problèmes, garantissant ainsi l'efficacité, la fiabilité et l'alignement des systèmes avec les objectifs de l'entreprise.

Le scénario décrit illustre parfaitement le pilier « Excellence opérationnelle » du cadre AWS Well-Architected. Ce pilier vise à comprendre et à gérer l’exploitation de votre charge de travail. Il implique également l’amélioration continue des procédures opérationnelles, l’analyse des incidents et le maintien d’une haute disponibilité, d’une résilience et d’une évolutivité optimales des charges de travail afin de répondre aux besoins de l’entreprise.  
Question 47Correct  
Une startup crée une plateforme de quiz en ligne en temps réel et a besoin d'un service AWS pour stocker et accéder rapidement aux résultats des parties pendant une journée, sans conservation à long terme.

Quel service AWS convient à ce besoin ?  
**Utilisez Amazon S3 avec expiration d'objet.**  
**Utilisez Amazon RDS avec une tâche cron de suppression quotidienne.**  
**Déployez Amazon ElastiCache avec des politiques d'éviction des données.**  
**Votre réponse est correcte**  
**Activer la durée de vie (TTL) d'Amazon DynamoDB.**  
Explication générale  
**Activer la durée de vie (TTL) d'Amazon DynamoDB.**

Amazon DynamoDB est un service de base de données NoSQL géré offrant des performances rapides et prévisibles, ainsi qu'une grande scalabilité. Pour le stockage de données éphémères telles que les sessions de jeu, la fonctionnalité TTL de DynamoDB est parfaitement adaptée. Grâce au TTL, les éléments de la table expirent et sont automatiquement supprimés, garantissant ainsi que les données ne sont pas conservées plus longtemps que nécessaire. Compte tenu de l'exigence d'une récupération rapide et d'une durée de stockage des données n'excédant pas 24 heures, l'activation du TTL sur les tables DynamoDB permettrait à la plateforme de gérer efficacement le cycle de vie des données de session sans engendrer de coûts supplémentaires liés à un stockage inutile.  
Question 48Correct  
Quels sont les avantages dont bénéficient les clients en utilisant AWS Cloud ? (Sélectionnez DEUX réponses.)  
**Votre sélection est correcte**  
**Arrêtez de dépenser de l'argent pour exploiter et entretenir des centres de données.**  
**Votre sélection est correcte**  
**Bénéficiez d'économies d'échelle massives**  
**Aucune responsabilité en matière de sécurité**  
**Il est nécessaire d'investir massivement dans les centres de données et les serveurs.**  
**Un réseau cloud est plus facile à maintenir.**  
Explication générale  
**Bénéficiez d'économies d'échelle massives**

En utilisant Amazon Web Services (AWS), les clients bénéficient des économies d'échelle considérables qu'Amazon a développées au fil des années grâce à l'exploitation de réseaux à grande échelle. AWS a investi massivement dans l'infrastructure et répercute ces économies sur ses clients. Avec son modèle de tarification à l'usage, les clients peuvent obtenir les services et les ressources dont ils ont besoin sans avoir à investir initialement dans l'infrastructure. Au lieu d'avoir à estimer et à planifier leurs besoins futurs, ils peuvent adapter leur utilisation à la hausse ou à la baisse selon leurs besoins. Il en résulte des économies, une efficacité accrue et la possibilité de se concentrer sur leur cœur de métier plutôt que sur la gestion de l'infrastructure.

**Arrêtez de dépenser de l'argent pour exploiter et entretenir des centres de données.**

L'approche traditionnelle en matière d'infrastructure technologique d'entreprise implique des dépenses considérables pour la construction et la maintenance des centres de données. Avec AWS, ces coûts et responsabilités sont transférés à Amazon. AWS prend en charge toutes les tâches associées, telles que l'approvisionnement et l'installation du matériel, les mises à jour logicielles, ainsi que la gestion de l'infrastructure réseau et électrique. Par conséquent, les entreprises utilisant AWS peuvent réorienter leurs ressources et se concentrer sur des projets qui les différencient, plutôt que sur les lourdes opérations d'installation, de configuration et d'alimentation des serveurs.  
Question 49Correct  
Une startup souhaite développer une application utilisant un algorithme de correspondance de modèles de données. Quel type d'instance Amazon EC2 devrait-elle acheter ?  
**Votre réponse est correcte**  
**Calcul accéléré**  
**Optimisation de la mémoire**  
**Calcul optimisé**  
**Optimisation du stockage**  
Explication générale  
**Calcul accéléré**

Les instances de calcul accéléré utilisent des accélérateurs matériels, ou coprocesseurs, pour effectuer des fonctions, telles que des calculs de nombres à virgule flottante, le traitement graphique ou la correspondance de modèles de données, plus efficacement que ne le permet un logiciel exécuté sur un processeur.

Cas d'utilisation : apprentissage automatique, calcul haute performance, dynamique des fluides numérique, finance computationnelle, analyse sismique, reconnaissance vocale, véhicules autonomes et découverte de médicaments  
Question 50Correct  
Quelle est la principale différence entre Amazon EC2 et Amazon Lightsail ?  
**Votre réponse est correcte**  
**EC2 est un service de calcul à usage général et Lightsail est un service de calcul simplifié pour les applications web à petite échelle.**  
**EC2 est conçu pour des performances élevées et Lightsail pour une faible latence.**  
**EC2 offre une capacité de calcul supérieure, tandis que Lightsail offre une capacité de calcul inférieure.**  
**EC2 est moins cher et Lightsail est plus cher.**  
Explication générale  
**EC2 est un service de calcul à usage général et Lightsail est un service de calcul simplifié pour les applications web à petite échelle.**

Amazon Elastic Compute Cloud (EC2) est un service de calcul généraliste offrant une capacité de calcul évolutive dans le cloud. EC2 propose un large éventail d'options de configuration, notamment différents types d'instances, systèmes d'exploitation, options de stockage et configurations réseau. De ce fait, EC2 convient à de nombreux cas d'utilisation, des applications web à petite échelle aux charges de travail de traitement de données à grande échelle.

Amazon Lightsail, quant à lui, est un service informatique simplifié conçu pour les applications web et les blogs de petite taille. Lightsail fournit des machines virtuelles (VM) préconfigurées qui intègrent tous les éléments nécessaires à l'exécution d'une application web, tels qu'un serveur web, un serveur de base de données et un système d'exploitation. Lightsail propose également une interface de gestion conviviale qui simplifie la configuration et l'administration des applications web.

La principale différence entre EC2 et Lightsail est qu'EC2 est un service de calcul à usage général offrant un large éventail d'options de configuration, tandis que Lightsail est un service de calcul simplifié conçu pour les applications web et les blogs à petite échelle, avec moins d'options de configuration.  
Question 51Correct  
Dans le cadre du modèle de responsabilité partagée d'AWS pour les conteneurs, quelle affirmation est vraie ?  
**AWS est responsable du chiffrement côté client et côté serveur.**  
**Tous deux sont responsables de la configuration des infrastructures réseau.**  
**Votre réponse est correcte**  
**Il incombe aux clients de configurer les pare-feu et la gestion des accès.**  
**Les clients sont responsables de la gestion de la plateforme et du système d'exploitation invité.**  
Explication générale  
**Il incombe aux clients de configurer les pare-feu et la gestion des accès.**

Les clients utilisant des conteneurs sur AWS sont responsables de la configuration et de la gestion du pare-feu et des contrôles d'accès de leurs applications conteneurisées. Cela inclut la mise en place de groupes de sécurité, de listes de contrôle d'accès réseau (ACL) et la mise en œuvre de politiques de gestion des accès appropriées pour contrôler le trafic entrant et sortant de leurs conteneurs.  
Question 52Correct  
Quel pilier d'AWS Well-Architected garantit la sélection appropriée des types de ressources et des tailles optimisées pour les exigences de charge de travail ?  
**Pilier de sécurité**  
**Pilier de fiabilité**  
**Votre réponse est correcte**  
**Pilier de l'efficacité des performances**  
**Pilier d'optimisation des coûts**  
Explication générale  
**Pilier de l'efficacité des performances**

Le pilier « Efficacité des performances » du cadre AWS Well-Architected vise à utiliser efficacement les ressources adéquates pour répondre aux exigences de votre système. Il s'agit d'optimiser l'utilisation des ressources de calcul pour satisfaire les besoins du système et de maintenir cette efficacité malgré l'évolution de la demande et des technologies. Cela implique de sélectionner les types de ressources, les tailles et les configurations logicielles appropriées pour atteindre les objectifs de performance souhaités. En alignant correctement les exigences de la charge de travail avec les services AWS, vous obtenez un équilibre optimal entre performance et coût. Le choix de la base de données, des solutions de stockage ou des services de calcul adaptés, ainsi que les décisions relatives aux configurations, jouent un rôle crucial dans l'efficacité des performances. Ce pilier vous guide pour rendre votre application plus rapide, plus légère et moins coûteuse grâce à une utilisation efficace des ressources AWS.  
Question 53Correct  
Quelle fonctionnalité recommanderiez-vous pour obtenir un audit de sécurité et d'accès d'un compartiment Amazon S3 ?  
**Politique des seaux**  
**Votre réponse est correcte**  
**Journalisation des accès au serveur**  
**Versionnage S3**  
**Point de terminaison VPC**  
Explication générale  
**Journalisation des accès au serveur**

La journalisation des accès au serveur permet d'enregistrer en détail les requêtes adressées à un compartiment S3. Lorsqu'elle est activée, S3 enregistre chaque requête et stocke ces informations dans un autre compartiment S3. Les journaux contiennent des informations importantes telles que l'adresse IP source, l'heure, le type et le statut de la requête. Ces données fournissent des informations précieuses sur l'utilisation du compartiment S3, facilitant ainsi la surveillance et l'audit. La journalisation des accès au serveur permet de suivre les habitudes d'accès, d'analyser le trafic, de détecter les anomalies et de garantir la conformité aux exigences de sécurité et de gouvernance des données. C'est un outil précieux pour le dépannage et l'optimisation de l'utilisation des compartiments S3.  
Question 54Correct  
Une startup prévoit d'exécuter une application sur des instances EC2. Elle estime que l'application nécessite plus de 10 instances pour fonctionner correctement. Le propriétaire recherche une solution pour réduire ses coûts mensuels.

En tant que spécialiste du cloud, quelle option me conseilleriez-vous ?  
**Utilisation de l'équilibreur de charge réseau AWS (NLB)**  
**Votre réponse est correcte**  
**Activation de la mise à l'échelle automatique pour les charges de travail**  
**Suppression des étiquettes d'affectation des coûts**  
**Déploiement sur plusieurs zones de disponibilité**  
Explication générale  
**Activation de la mise à l'échelle automatique pour les charges de travail**

La mise à l'échelle automatique permet à l'application d'ajuster automatiquement le nombre d'instances en fonction de la demande, garantissant ainsi que la startup n'exécute que le nombre d'instances requis à un instant donné. En configurant la mise à l'échelle automatique, la startup peut définir des politiques de mise à l'échelle basées sur des indicateurs prédéfinis tels que l'utilisation du processeur, le trafic réseau ou le temps de réponse de l'application. Lorsque la charge de travail augmente, la mise à l'échelle automatique ajoute automatiquement des instances pour gérer la demande accrue. Inversement, lorsque la charge de travail diminue, la mise à l'échelle automatique supprime des instances, réduisant ainsi le nombre d'instances actives et, par conséquent, les coûts.  
Question 55Correct  
Une grande entreprise informatique internationale cherche à renforcer sa sécurité. Elle souhaite s'assurer que tous les utilisateurs d'AWS IAM ne puissent se connecter qu'à l'aide d'appareils dotés de l'authentification multifacteurs (MFA).

Quelle est la meilleure action à entreprendre pour satisfaire cette exigence ?  
**Votre réponse est correcte**  
**Utilisez une stratégie IAM qui refuse toutes les actions sauf si l'authentification multifacteur est activée sur le compte de l'utilisateur.**  
**Envoyer un courriel à tous les utilisateurs leur demandant d'activer l'authentification multifacteur.**  
**Activez l'authentification multifacteur (MFA) au niveau du compte AWS et espérez que les utilisateurs l'activent.**  
**Désactivez tous les comptes utilisateurs et n'activez que ceux qui disposent d'une authentification multifacteur.**  
Explication générale  
**Utilisez une stratégie IAM qui refuse toutes les actions sauf si l'authentification multifacteur est activée sur le compte de l'utilisateur.**

En utilisant une stratégie IAM qui bloque toute action sans authentification multifacteur (MFA), vous vous assurez automatiquement que les utilisateurs ne peuvent pas effectuer d'actions sur AWS sans avoir activé la MFA sur leur compte. Cette approche garantit non seulement le respect de la politique de sécurité, mais élimine également la dépendance aux contrôles manuels ou à la conformité des utilisateurs.  
Question 56Incorrect  
Parmi les propositions suivantes, lesquelles constituent des bonnes pratiques pour les clés d'accès AWS IAM ? (Sélectionnez DEUX réponses.)  
**Votre sélection est correcte**  
**Faites tourner les clés d'accès régulièrement.**  
**N’utilisez pas les clés d’accès.**  
**Créez une clé d'accès unique pour prévenir le vol.**  
**Sélection correcte**  
**N’intégrez pas directement les clés d’accès dans le code.**  
**Votre sélection est incorrecte**  
**Utilisez l'authentification multifacteur (MFA) pour une meilleure sécurité des clés d'accès.**  
Explication générale  
**Faites tourner régulièrement les clés d'accès.**

Il est recommandé de renouveler régulièrement les clés d'accès AWS IAM. En les changeant régulièrement, vous réduisez les risques de compromission et d'accès non autorisé. Pour renforcer la sécurité de vos ressources AWS, il est conseillé de renouveler vos clés d'accès régulièrement, par exemple tous les 90 jours.

**N’intégrez pas directement les clés d’accès dans le code.**

Il est fortement déconseillé d'intégrer directement les clés d'accès dans le code. En effet, le codage en dur de ces clés peut les exposer à des risques, tels qu'une divulgation accidentelle via les dépôts de code source ou un accès non autorisé en cas de compromission du code. AWS propose des mécanismes permettant d'accéder aux ressources AWS en toute sécurité, sans avoir à intégrer directement les clés d'accès dans le code, comme les rôles IAM, les informations d'identification de sécurité temporaires ou les variables d'environnement.  
Question 57Correct  
Selon le cadre AWS Well-Architected, quel pilier met l'accent sur la minimisation de l'impact environnemental de l'exploitation des charges de travail dans le cloud ?  
**Optimisation des coûts**  
**Efficacité de performance**  
**Votre réponse est correcte**  
**Pilier de la durabilité**  
**Excellence opérationnelle**  
Explication générale  
**Pilier de la durabilité**

Le pilier « Durabilité » met l'accent sur la réduction de l'impact environnemental des opérations cloud. Il souligne l'importance de mettre en œuvre des stratégies et des technologies permettant de minimiser l'empreinte carbone et les autres impacts environnementaux négatifs de vos activités cloud. Cela peut impliquer d'opter pour une infrastructure plus écoénergétique, de concevoir des systèmes optimisant l'utilisation des ressources ou d'utiliser des services et des fonctionnalités exploitant des sources d'énergie renouvelables. Ce pilier permet ainsi aux organisations de renforcer leur responsabilité environnementale en garantissant la durabilité maximale de leurs opérations cloud.  
Question 58Correct  
Une entreprise souhaite optimiser la configuration de ses ressources AWS afin de minimiser les coûts et d'améliorer les performances de ses charges de travail. Quel service AWS peut être utilisé pour répondre à ce besoin ?  
**Votre réponse est correcte**  
**AWS Compute Optimizer**  
**Conseiller de confiance AWS**  
**Configuration AWS**  
**AWS CloudFormation**  
Explication générale  
**AWS Compute Optimizer**

AWS Compute Optimizer est conçu pour aider les clients à identifier les configurations de ressources AWS optimales pour leurs charges de travail. Il fournit des recommandations pour dimensionner correctement les ressources, contribuant ainsi à réduire les coûts et à améliorer les performances grâce à l'analyse des modèles d'utilisation. En s'appuyant sur des algorithmes d'apprentissage automatique, Compute Optimizer peut suggérer les types d'instances Amazon EC2, les groupes de mise à l'échelle automatique et les volumes EBS les plus adaptés. Ce service surveille et évalue en continu les charges de travail, offrant des informations exploitables qui permettent aux utilisateurs de prendre des décisions éclairées concernant l'allocation de leurs ressources, garantissant ainsi une utilisation efficace et économique du cloud.  
Question 59Correct  
Quel est le principal avantage de la migration vers le cloud AWS ?  
**Excellence commerciale supérieure**  
**Fidélisation accrue des employés**  
**Réductions sur les achats sur Amazon.com**  
**Votre réponse est correcte**  
**Flexibilité accrue des entreprises**  
Explication générale  
**Flexibilité accrue des entreprises**

L'un des avantages de la migration vers le cloud AWS est une flexibilité accrue pour les entreprises. AWS leur permet d'adapter rapidement et facilement leurs ressources à la hausse ou à la baisse en fonction de la demande. Cette flexibilité leur permet d'innover plus rapidement, de réduire les délais de commercialisation et de s'adapter à l'évolution de leurs besoins. Avec AWS, les entreprises peuvent lancer de nouvelles applications, s'étendre à de nouvelles régions géographiques et expérimenter de nouveaux projets sans investissements importants.  
Question 60Incorrect  
Une entreprise gère plusieurs instances Amazon EC2 pour différents projets. Elle souhaite suivre les dépenses liées à ces applications et les imputer aux projets concernés. Quelles actions doit-elle entreprendre pour répondre à ce besoin ? (Sélectionnez DEUX réponses.)  
**Votre sélection est correcte**  
**Créez des étiquettes pour chaque projet et attribuez-les aux instances.**  
**Sélection correcte**  
**Générez un rapport de répartition des coûts à partir de la facturation AWS.**  
**Utilisez des comptes AWS distincts pour chaque projet.**  
**Créez des VPC supplémentaires pour chaque projet.**  
**Votre sélection est incorrecte**  
**Activez les alertes de facturation via Amazon Budget.**  
Explication générale  
**Créez des étiquettes pour chaque projet et attribuez-les à des instances.**

Les tags sont des paires clé-valeur qui peuvent être attribuées aux ressources AWS, telles que les instances EC2. En créant des tags contenant des informations spécifiques à chaque projet et en les associant aux instances, l'entreprise peut facilement identifier et catégoriser les dépenses liées à chaque projet. Les tags permettent de répartir les coûts, de filtrer et d'organiser les ressources, simplifiant ainsi le suivi et l'analyse des dépenses au niveau du projet.

**Générez un rapport de répartition des coûts à partir de la facturation AWS**

Générer un rapport de répartition des coûts à partir d'AWS Billing est une autre action que l'entreprise devrait entreprendre. AWS Billing fournit des informations détaillées sur la facturation et la gestion des coûts, notamment la possibilité de générer des rapports de répartition des coûts. Ces rapports permettent de visualiser et d'analyser les coûts selon différents critères, tels que les projets, les étiquettes, les comptes, etc. Grâce à ces rapports, l'entreprise peut obtenir des analyses de coûts précises et des informations précieuses pour suivre et répartir efficacement les dépenses de chaque projet.  
Question 61Correct  
Une entreprise souhaite développer une application offrant des services sur les plateformes web et mobiles. Tous les utilisateurs pourront se connecter via les réseaux sociaux tels que Facebook ou Google. Quels services doivent être utilisés pour implémenter cette authentification ?  
**Artefact AWS**  
**AWS IAM**  
**Votre réponse est correcte**  
**Amazon Cognito**  
**AWS WAF**  
Explication générale  
**Amazon Cognito**

Amazon Cognito est un service entièrement géré qui assure l'authentification, l'autorisation et la gestion des utilisateurs pour les applications web et mobiles. Il prend en charge les fournisseurs d'identité sociaux tels que Facebook et Google, permettant ainsi aux utilisateurs de se connecter via leurs comptes de réseaux sociaux.

Avec Amazon Cognito, les développeurs peuvent facilement intégrer les fonctionnalités d'inscription, de connexion et de contrôle d'accès des utilisateurs à leurs applications, aussi bien sur le web que sur mobile. La solution prend en charge l'authentification, la gestion des jetons et des profils utilisateurs, évitant ainsi aux développeurs la complexité de créer ces fonctionnalités de A à Z.

De plus, Amazon Cognito peut être intégré de manière transparente à d'autres services AWS, permettant aux développeurs de tirer parti de fonctionnalités supplémentaires telles que le stockage sécurisé, la synchronisation des données et la gestion des utilisateurs.  
Question 62Correct  
Une start-up de vente au détail numérique souhaite implémenter une base de données relationnelle sur AWS qui garantisse une récupération rapide des données et des opérations de lecture/écriture continues.

Quel type de volume Amazon EBS devraient-ils envisager ?  
**Votre réponse est correcte**  
**SSD Amazon EBS provisionné IOPS (io2)**  
**Disque dur froid Amazon EBS (sc1)**  
**SSD Amazon EBS à usage général (gp3)**  
**Disque dur optimisé pour le débit Amazon EBS (st1)**  
Explication générale  
**SSD Amazon EBS provisionné IOPS (io2)**

Le SSD Amazon EBS Provisioned IOPS (io1/io2) est la solution idéale pour les charges de travail sensibles à la latence et exigeant des performances élevées, nécessitant des opérations d'E/S constantes. Conçu pour offrir une faible latence, il garantit un nombre constant d'opérations d'E/S par seconde (IOPS). La fonctionnalité « IOPS provisionnées » permet aux utilisateurs de spécifier les IOPS en fonction de leurs besoins, ce qui le rend particulièrement adapté aux applications transactionnelles, telles que les bases de données relationnelles, qui requièrent des performances d'E/S rapides et prévisibles.  
Question 63Correct  
Quel service AWS devez-vous utiliser pour obtenir une prévision de vos factures du mois prochain pour les services que vous utilisez ?  
**Budgets AWS**  
**Votre réponse est correcte**  
AWS Cost Explorer  
**Calculateur mensuel simple AWS**  
**Facturation AWS**  
Explication générale  
**AWS Cost Explorer**

AWS Cost Explorer offre une visibilité et une analyse complètes des coûts de vos ressources AWS. Il vous permet de visualiser, de comprendre et de gérer efficacement vos coûts AWS. Avec AWS Cost Explorer, vous accédez à un large éventail de rapports de coûts, y compris les prévisions. Cette fonctionnalité vous permet d'estimer vos dépenses pour le mois à venir en fonction de l'historique d'utilisation et de l'utilisation actuelle des ressources. Elle fournit des informations précieuses sur l'évolution prévue de vos coûts et vous aide à planifier votre budget en conséquence.

Grâce aux prévisions de coûts d'AWS Cost Explorer, vous pouvez anticiper et optimiser vos dépenses. Vous êtes ainsi en mesure de prendre des décisions éclairées, d'ajuster l'allocation de vos ressources et de mettre en œuvre des mesures de réduction des coûts avant le prochain cycle de facturation.  
Question 64Incorrect  
Quelle affirmation décrit le mieux les zones de disponibilité ?  
**Bonne réponse**  
**Une zone géographique qui définit l'emplacement physique des centres de données AWS les plus proches des utilisateurs cibles.**  
**Un emplacement géographique distinct comprenant plusieurs sites isolés les uns des autres.**  
**Réseau de distribution de contenu utilisé pour diffuser du contenu aux utilisateurs avec une vitesse élevée et une faible latence.**  
**Votre réponse est incorrecte**  
**Emplacements distincts au sein d'une région AWS, isolés des pannes survenant dans d'autres zones de disponibilité.**  
Explication générale  
**Emplacements distincts au sein d'une région AWS, isolés des pannes survenant dans d'autres zones de disponibilité.**

Les zones de disponibilité sont des emplacements isolés au sein d'une région AWS, conçus pour être résilients et indépendants les uns des autres. Chaque zone de disponibilité (AZ) est équipée de sa propre infrastructure d'alimentation, de réseau et de refroidissement. Elles sont physiquement séparées et connectées par des liaisons à faible latence et à large bande passante. L'objectif des zones de disponibilité est d'assurer la tolérance aux pannes et la haute disponibilité des applications et services exécutés dans le cloud AWS. En répartissant les ressources sur plusieurs zones de disponibilité, les clients peuvent protéger leurs applications contre les pannes ou les interruptions survenant dans une zone unique.  
