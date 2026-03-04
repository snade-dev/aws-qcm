Question 1Correct  
Quel type d'instance EC2 est le plus rentable à l'achat pour les charges de travail à court terme, irrégulières ou imprévisibles qui ne peuvent pas être interrompues ?  
Instances ponctuelles  
Instances réservées  
**Votre réponse est correcte**  
Instances à la demande  
Instances dédiées  
Explication générale  
***Réponse correcte :***

**Instances à la demande** : Les instances à la demande vous permettent de payer la capacité de calcul à l’heure ou à la seconde (minimum de 60 secondes) sans engagement à long terme. Il s’agit d’un engagement à court terme : vous pouvez donc décider quand lancer, arrêter ou supprimer une instance. La facturation a lieu pendant son exécution. Autrement dit, vous ne serez pas facturé lorsque l’instance est arrêtée ou supprimée. C’est utile pour des opérations de courte durée, comme des tests.

***Réponses incorrectes :***

**Instances Spot** : Les instances Spot d’Amazon EC2 vous permettent de tirer parti de la capacité EC2 inutilisée dans le cloud AWS. Elles sont disponibles avec une réduction allant jusqu’à 90 % par rapport aux prix à la demande. Vous pouvez utiliser les instances Spot pour diverses applications sans état, tolérantes aux pannes ou flexibles, telles que le Big Data, les charges de travail conteneurisées, l’intégration continue et la livraison continue (CI/CD), les serveurs web, le calcul haute performance (HPC) et les charges de travail de test et de développement. Grâce à leur intégration étroite avec les services AWS tels qu’Auto Scaling, EMR, ECS, CloudFormation, Data Pipeline et AWS Batch, vous pouvez choisir comment lancer et gérer vos applications exécutées sur des instances Spot.

**Instances réservées** : Les instances réservées (RI) Amazon EC2 offrent une réduction importante (jusqu’à 72 %) par rapport à la tarification à la demande et garantissent une capacité réservée lorsqu’elles sont utilisées dans une zone de disponibilité spécifique. Les RI EC2 proposent un tarif horaire réduit et une réservation de capacité optionnelle pour les instances EC2. La facturation AWS applique automatiquement le tarif réduit de votre RI lorsque les attributs d’utilisation de l’instance EC2 correspondent à ceux d’une RI active. Vous pouvez souscrire un engagement d’un ou trois ans pour une RI, ce qui vous permet de bénéficier d’une réduction plus importante.

**Instances dédiées** : Les instances dédiées sont des instances Amazon EC2 exécutées dans un VPC sur du matériel dédié à un seul client. Vos instances dédiées sont physiquement isolées, au niveau du matériel hôte, des instances appartenant à d'autres comptes AWS. Elles peuvent toutefois partager du matériel avec d'autres instances non dédiées du même compte AWS. Payez vos instances dédiées à la demande, économisez jusqu'à 70 % en optant pour les instances réservées, ou jusqu'à 90 % en choisissant les instances Spot.

***Liens vers les références :***

[https://aws.amazon.com/ec2/pricing/on-demand](https://aws.amazon.com/ec2/pricing/on-demand)  
Domaine  
Facturation et tarification  
Question 2Correct  
Quel service AWS vous permet de gérer les ressources AWS sur l'ensemble des comptes et régions AWS via une seule opération ?  
Amazon CloudWatch  
**Votre réponse est correcte**  
AWS CloudFormation  
AWS CloudTrail  
AWS CodeDeploy  
Explication générale  
***Réponse correcte :***

**AWS CloudFormation** : AWS CloudFormation vous permet de modéliser facilement un ensemble de ressources AWS et tierces liées, de les provisionner rapidement et de manière cohérente, et de les gérer tout au long de leur cycle de vie, en traitant l'infrastructure comme du code. Un modèle CloudFormation décrit vos ressources et leurs dépendances afin que vous puissiez les déployer et les configurer ensemble sous forme de pile. Vous pouvez utiliser un modèle pour créer, mettre à jour et supprimer une pile entière comme une seule unité, aussi souvent que nécessaire, au lieu de gérer les ressources individuellement. Vous pouvez gérer et provisionner des piles sur plusieurs comptes AWS et régions AWS.

***Réponses incorrectes :***

**AWS CloudTrail** : AWS CloudTrail surveille et enregistre l'activité de vos comptes sur l'ensemble de votre infrastructure AWS, vous offrant ainsi un contrôle total sur le stockage, l'analyse et les actions correctives. CloudTrail fournit l'historique des événements de vos comptes AWS. Les événements CloudTrail vous aident à répondre aux questions « Qui a fait quoi, où et quand ? ». Par exemple, si votre compartiment S3 a été supprimé par erreur, vous pouvez utiliser AWS CloudTrail pour voir qui l'a supprimé, quand et où (via un appel d'API ou depuis la console de gestion AWS).

**AWS CloudWatch** : Amazon CloudWatch est un service de surveillance qui vous fournit des données et des informations exploitables pour surveiller vos applications, réagir aux variations de performances du système et optimiser l'utilisation des ressources. CloudWatch collecte des données de surveillance et d'exploitation sous forme de journaux, de métriques et d'événements. Vous bénéficiez ainsi d'une vue unifiée de l'état opérationnel et d'une visibilité complète sur vos ressources, applications et services AWS exécutés sur AWS et sur site. Avec CloudWatch, vous pouvez détecter les comportements anormaux dans vos environnements, configurer des alarmes, visualiser les journaux et les métriques côte à côte, automatiser des actions, résoudre les problèmes et obtenir des informations précieuses pour garantir le bon fonctionnement de vos applications.

**AWS CodeDeploy** : AWS CodeDeploy est un service de déploiement entièrement géré qui automatise le déploiement de logiciels sur divers services de calcul tels qu'Amazon EC2, AWS Fargate, AWS Lambda et vos serveurs sur site. AWS CodeDeploy simplifie la mise en production rapide de nouvelles fonctionnalités, vous aide à éviter les interruptions de service lors du déploiement d'applications et gère la complexité des mises à jour. Vous pouvez utiliser AWS CodeDeploy pour automatiser vos déploiements logiciels et éliminer ainsi les opérations manuelles sources d'erreurs. Le service s'adapte à vos besoins de déploiement.

***Liens vers les références :***

[https://aws.amazon.com/cloudformation](https://aws.amazon.com/cloudformation)  
Domaine  
Technologie  
Question 3Correct  
Parmi les affirmations suivantes, lesquelles sont vraies lors de l'utilisation du pare-feu d'applications Web AWS (AWS WAF) ? (Sélectionnez deux réponses)  
Fournit des recommandations de sécurité détaillées pour vos comptes et charges de travail AWS afin de prévenir toute activité malveillante.  
Analyse en continu les charges de travail AWS afin de détecter les vulnérabilités logicielles et les expositions réseau non intentionnelles.  
**Votre sélection est correcte**  
Protège contre les techniques d'attaque courantes telles que l'injection SQL et le Cross-Site Scripting (XSS).  
**Votre sélection est correcte**  
Vous permet de contrôler la manière dont le trafic atteint les applications en créant des règles de sécurité.  
Offre une protection contre les attaques par déni de service distribué (DDoS) pour les applications exécutées sur AWS.  
Explication générale  
***Réponse correcte :***

**Vous permet de contrôler la manière dont le trafic atteint les applications en créant des règles de sécurité.**

**Protège contre les techniques d'attaque courantes telles que l'injection SQL et le Cross-Site Scripting (XSS).**

AWS WAF est un pare-feu applicatif web qui protège vos applications web et API contre les attaques web courantes et les bots susceptibles d'affecter la disponibilité, de compromettre la sécurité ou de consommer des ressources excessives. AWS WAF vous permet de contrôler le trafic entrant dans vos applications en créant des règles de sécurité qui limitent le trafic des bots et bloquent les attaques courantes, telles que les injections SQL et les attaques XSS (Cross-Site Scripting).

La propagation et la mise à jour des règles AWS WAF s'effectuent en moins d'une minute, vous permettant ainsi de renforcer rapidement la sécurité de votre environnement en cas de problème. WAF prend en charge des centaines de règles capables d'inspecter n'importe quelle partie d'une requête web avec un impact minimal sur le trafic entrant. AWS WAF protège les applications web contre les attaques en filtrant le trafic selon les règles que vous définissez. Par exemple, vous pouvez filtrer n'importe quelle partie d'une requête web, comme les adresses IP, les en-têtes HTTP, le corps HTTP ou les chaînes d'URI. Cela vous permet de bloquer les attaques courantes, telles que les injections SQL ou les attaques XSS (Cross-Site Scripting).

***Réponses incorrectes :***

**Analyse en continu des charges de travail AWS à la recherche de vulnérabilités logicielles et d'expositions réseau non intentionnelles** : Amazon Inspector est un service automatisé de gestion des vulnérabilités qui analyse en continu les charges de travail AWS à la recherche de vulnérabilités logicielles et d'expositions réseau non intentionnelles.

**Fournit des recommandations de sécurité détaillées pour vos comptes et charges de travail AWS en cas d'activité malveillante** : Amazon GuardDuty est un service de détection des menaces qui surveille en permanence vos comptes et charges de travail AWS afin de détecter toute activité malveillante et fournit des résultats de sécurité détaillés pour une visibilité et une correction facilitées.

**Protection contre les attaques par déni de service distribué (DDoS) pour les applications exécutées sur AWS** : AWS Shield est un service de protection DDoS géré qui sécurise les applications exécutées sur AWS. AWS Shield assure une détection continue et des mesures d'atténuation automatiques afin de minimiser les interruptions de service et la latence des applications. Il n'est donc pas nécessaire de contacter le support AWS pour bénéficier de cette protection.

***Liens vers les références :***

[https://aws.amazon.com/waf](https://aws.amazon.com/waf)  
Domaine  
Sécurité et conformité  
Question 4Correct  
Supposons que vous ayez une instance EC2 contenant 1 To de données. Vous souhaitez maintenant déplacer ces données vers un compartiment S3 situé dans la même région. Quel sera le coût de cette opération pour AWS ?  
**Votre réponse est correcte**  
Ce transfert de données ne vous sera pas facturé.  
Des frais d'entrée seront appliqués pour le transfert de données.  
Des frais de transfert de données seront appliqués.  
Les frais de transfert de données entrants et sortants s'appliqueront au compartiment S3.  
Explication générale  
***Réponse correcte :***

**Ce transfert de données ne vous sera pas facturé.**

AWS ne sera pas facturé pour les transferts de données au sein de la même région.

Les frais Amazon S3 applicables sont les suivants :

* Classes de stockage : Amazon S3 propose différentes classes de stockage conçues pour répondre à divers cas d’utilisation. Parmi celles-ci, on trouve S3 Standard pour le stockage général des données fréquemment consultées ; S3 Intelligent Tiering pour les données dont les schémas d’accès sont inconnus ou variables ; S3 Standard-Infrequent Access (S3 StandardIA) et S3 One Zone-Infrequent Access (S3 One Zone-IA) pour les données à longue durée de vie, mais moins fréquemment consultées ; et Amazon S3 Glacier (S3 Glacier) et Amazon S3 Glacier Deep Archive (S3 Glacier Deep Archive) pour l’archivage à long terme et la préservation numérique. Amazon S3 offre également des fonctionnalités permettant de gérer vos données tout au long de leur cycle de vie. Une fois qu’une stratégie de cycle de vie S3 est définie, vos données sont automatiquement transférées vers une autre classe de stockage sans aucune modification de votre application.  
* Stockage : les coûts varient en fonction du nombre et de la taille des objets stockés dans vos compartiments Amazon S3, ainsi que du type de stockage.  
* Requêtes et récupération de données : le coût des requêtes effectuées sur les compartiments et objets S3 dépend du type et du nombre de requêtes.  
* Transfert de données : quantité de données transférées hors de la région Amazon S3. Les transferts entre compartiments S3 ou depuis Amazon S3 vers tout service au sein de la même région AWS sont gratuits.  
* Gestion et réplication : vous payez pour les fonctionnalités de gestion du stockage (inventaire Amazon S3, analyses et étiquetage des objets) activées sur les compartiments de votre compte.

***Réponses incorrectes :***

**Des frais de réception seront applicables pour le transfert de données.**

**Les frais de transfert de données entrants et sortants seront applicables pour le compartiment S3.**

**Des frais d'envoi seront applicables pour le transfert de données.**

***Liens vers les références :***

[https://aws.amazon.com/s3/pricing](https://aws.amazon.com/s3/pricing)  
Domaine  
Facturation et tarification  
Question 5Correct  
Quelle classe de stockage S3 faut-il utiliser pour sauvegarder les données ?  
**Votre réponse est correcte**  
Archives profondes du glacier S3  
S3 Hiérarchisation intelligente  
Norme S3  
Accès peu fréquent S3 (IA)  
Explication générale  
***Réponse correcte :***

**Amazon S3 Glacier Deep Archive (S3 Glacier Deep Archive)** : S3 Glacier Deep Archive est une solution de stockage sécurisée, durable et extrêmement économique, idéale pour l’archivage à long terme et la préservation numérique des données susceptibles d’être consultées une ou deux fois par an. Elle convient parfaitement aux sauvegardes et à la reprise après sinistre et offre un excellent rapport coût-efficacité. Tous les objets stockés dans S3 Glacier Deep Archive sont répliqués et répartis sur au moins trois zones de disponibilité géographiquement distinctes, bénéficient d’une durabilité de 99,999999999 % et peuvent être restaurés en moins de 12 heures.

***Réponses incorrectes :***

**Amazon S3 Standard (S3 Standard)** : S3 Standard offre un stockage objet haute durabilité, haute disponibilité et hautes performances pour les données fréquemment consultées. S3 Standard convient à de nombreux cas d’utilisation, notamment les applications cloud, les sites web dynamiques, la distribution de contenu, les applications mobiles et de jeux, ainsi que l’analyse de données massives (Big Data).

**Amazon S3 Standard \- Accès peu fréquent (S3 Standard-IA)** : S3 Standard-IA est conçu pour les données consultées moins fréquemment, mais nécessitant un accès rapide en cas de besoin. Il offre la haute durabilité, le débit élevé et la faible latence de S3 Standard, avec un prix de stockage et de récupération par Go avantageux. Cette combinaison de faible coût et de hautes performances fait de S3 Standard-IA la solution idéale pour le stockage à long terme, les sauvegardes et la mise en place d'un système de stockage de données pour la reprise après sinistre.

**Amazon S3 Intelligent-Tiering** : Amazon S3 Intelligent-Tiering est le premier service de stockage cloud qui réduit automatiquement vos coûts de stockage en déplaçant les données vers le niveau d'accès le plus économique en fonction de leur fréquence d'utilisation, sans impact sur les performances, ni frais de récupération ou de surcharge opérationnelle. S3 Intelligent-Tiering stocke automatiquement les objets sur trois niveaux d'accès : un niveau optimisé pour les accès fréquents, un niveau 40 % moins cher optimisé pour les accès peu fréquents et un niveau 68 % moins cher optimisé pour les données rarement consultées.

***Liens vers les références :***

[https://aws.amazon.com/s3/storage-classes](https://aws.amazon.com/s3/storage-classes)  
Domaine  
Technologie  
Question 6Correct  
Quel service AWS vous aide à écrire du code en ligne ?  
AWS CodeDeploy  
AWS CodeCommit  
**Votre réponse est correcte**  
AWS Cloud9  
AWS CodePipeline  
Explication générale  
***Réponse correcte :***

**AWS Cloud9** : AWS Cloud9 est un environnement de développement intégré (IDE) basé sur le cloud qui vous permet d'écrire, d'exécuter et de déboguer votre code directement depuis votre navigateur. Il inclut un éditeur de code, un débogueur et un terminal. Cloud9 est fourni avec les outils essentiels pour les langages de programmation les plus courants, tels que JavaScript, Python, PHP et bien d'autres. Vous n'avez donc pas besoin d'installer de fichiers ni de configurer votre machine de développement pour démarrer de nouveaux projets. Vous pouvez travailler sur vos projets depuis votre bureau, votre domicile ou n'importe où ailleurs, à l'aide d'un ordinateur connecté à Internet. Cloud9 offre également une expérience fluide pour le développement d'applications sans serveur, vous permettant de définir facilement les ressources, de déboguer et de basculer entre l'exécution locale et distante de ces applications. Avec Cloud9, vous pouvez partager rapidement votre environnement de développement avec votre équipe, ce qui vous permet de programmer en binôme et de suivre les actions de chacun en temps réel.

***Réponses incorrectes :***

**AWS CodeDeploy** : AWS CodeDeploy est un service de déploiement entièrement géré qui automatise le déploiement de logiciels sur divers services de calcul tels qu'Amazon EC2, AWS Fargate, AWS Lambda et vos serveurs sur site. AWS CodeDeploy simplifie la mise en production rapide de nouvelles fonctionnalités, vous aide à éviter les interruptions de service lors du déploiement d'applications et gère la complexité des mises à jour. Vous pouvez utiliser AWS CodeDeploy pour automatiser vos déploiements logiciels et éliminer ainsi les opérations manuelles sources d'erreurs. Le service s'adapte à vos besoins de déploiement.

**AWS CodePipeline** : AWS CodePipeline est un service de livraison continue entièrement géré qui vous aide à automatiser vos pipelines de déploiement pour des mises à jour rapides et fiables de vos applications et infrastructures. CodePipeline automatise les phases de compilation, de test et de déploiement de votre processus de mise en production à chaque modification du code, selon le modèle de mise en production que vous définissez. Vous pouvez ainsi déployer rapidement et de manière fiable de nouvelles fonctionnalités et mises à jour.

**AWS CodeCommit** : AWS CodeCommit est un service de contrôle de version géré et hautement scalable qui héberge des dépôts Git privés. Il vous suffit de créer un dépôt pour stocker votre code. Aucun matériel n'est à provisionner ni à mettre à l'échelle, et aucun logiciel n'est à installer, configurer ni exploiter. CodeCommit facilite la collaboration sur le code grâce aux demandes d'extraction, à la création de branches et à la fusion. Vous pouvez mettre en œuvre des flux de travail incluant par défaut les revues de code et les retours d'information, et contrôler qui peut modifier des branches spécifiques.

***Liens vers les références :***

[https://aws.amazon.com/cloud9](https://aws.amazon.com/cloud9)  
Domaine  
Technologie  
Question 7Incorrect  
Pour éviter toute activité malveillante, vous devez pouvoir identifier rapidement les ports d'une instance Amazon EC2 qui autorisent un accès illimité. Parmi les options suivantes, laquelle vous permettra de détecter ces activités ?  
AWS CloudTrail  
**Bonne réponse**  
Journaux de flux VPC  
AWS WAF  
**Votre réponse est incorrecte**  
Conseiller de confiance AWS  
Explication générale  
***Réponse correcte :***

**Journaux de flux VPC** : Les journaux de flux Amazon VPC vous permettent de capturer les informations relatives au trafic réseau entrant et sortant des interfaces réseau de votre VPC. Vous pouvez les utiliser comme source unique et centralisée d'informations pour surveiller différents aspects du réseau de votre VPC. La journalisation des flux VPC fournit aux ingénieurs de sécurité un historique des flux de trafic réseau de haut niveau au sein de VPC entiers, de sous-réseaux ou d'interfaces réseau spécifiques (ENI). Les journaux de flux VPC constituent ainsi une source d'informations précieuse pour les équipes de détection chargées de collecter des données d'instrumentation réseau sur de grands groupes d'instances. Les données des journaux de flux peuvent être publiées sur Amazon CloudWatch Logs ou Amazon S3. Une fois un journal de flux créé, vous pouvez récupérer et consulter ses données dans la destination choisie.

Les journaux de flux peuvent vous aider dans un certain nombre de tâches, telles que :

* Diagnostic des règles de groupe de sécurité trop restrictives  
* Surveiller le trafic qui atteint votre instance  
* Déterminer le sens du trafic entrant et sortant des interfaces réseau

***Réponses incorrectes :***

**Pare-feu d'applications web AWS (AWS WAF)** : AWS WAF est un pare-feu d'applications web qui protège vos applications web et API contre les attaques web courantes et les bots susceptibles d'affecter la disponibilité, de compromettre la sécurité ou de consommer des ressources excessives. AWS WAF vous permet de contrôler le trafic entrant vers vos applications en créant des règles de sécurité qui limitent le trafic des bots et bloquent les attaques courantes, telles que les injections SQL et les attaques XSS (Cross-Site Scripting). Avec AWS WAF, vous ne payez que ce que vous utilisez : la tarification est basée sur le nombre de règles déployées et le volume de requêtes web reçues par votre application.

**AWS CloudTrail** : AWS CloudTrail surveille et enregistre l'activité de vos comptes sur l'ensemble de votre infrastructure AWS, vous offrant ainsi un contrôle total sur le stockage, l'analyse et les actions correctives. Avec CloudTrail, vous pouvez consigner, surveiller en continu et conserver l'activité de vos comptes liée aux actions effectuées sur votre infrastructure AWS. CloudTrail fournit l'historique des événements de vos comptes AWS. Les événements CloudTrail vous aident à répondre aux questions « Qui a fait quoi, où et quand ? ». Par exemple, si votre compartiment S3 a été supprimé par erreur, vous pouvez utiliser AWS CloudTrail pour voir qui l'a supprimé, quand et où (par exemple, via un appel d'API ou depuis la console de gestion AWS).

**AWS Trusted Advisor** : AWS Trusted Advisors vous fournit des recommandations pour vous aider à suivre les bonnes pratiques AWS. Trusted Advisor évalue votre compte à l’aide de contrôles. Ces contrôles identifient les moyens d’optimiser votre infrastructure AWS, d’améliorer la sécurité et les performances, de réduire les coûts et de surveiller les quotas de service. Vous pouvez ensuite suivre les recommandations issues de ces contrôles pour optimiser vos services et vos ressources.

Si vous disposez d'un plan de support Basic ou Developer, vous pouvez utiliser la console Trusted Advisor pour accéder à tous les contrôles de la catégorie « Limites de service » et à six contrôles de la catégorie « Sécurité ». Si vous disposez d'un plan de support Business, Enterprise On-Ramp ou Enterprise, vous pouvez utiliser la console Trusted Advisor et l'API AWS Support pour accéder à tous les contrôles Trusted Advisor. Vous pouvez également utiliser Amazon CloudWatch Events pour suivre l'état des contrôles Trusted Advisor.

***Liens vers les références :***

[https://aws.amazon.com/premiumsupport/technology/trusted-advisor](https://aws.amazon.com/premiumsupport/technology/trusted-advisor)

[https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html](https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html)  
Domaine  
Sécurité et conformité  
Question 8Incorrect  
Quel service AWS fournit un journal des événements pour toutes les ressources AWS ?  
AWS CloudFormation  
**Bonne réponse**  
AWS CloudTrail  
Configuration AWS  
**Votre réponse est incorrecte**  
Amazon CloudWatch  
Explication générale  
***Réponse correcte :***

**AWS CloudTrail** : AWS CloudTrail surveille et enregistre l'activité de vos comptes sur l'ensemble de votre infrastructure AWS, vous offrant ainsi un contrôle total sur le stockage, l'analyse et les actions correctives. CloudTrail fournit un journal des événements de vos comptes AWS. Les événements CloudTrail vous aident à répondre aux questions « Qui a fait quoi, où et quand ? ». Par exemple, si votre compartiment S3 a été supprimé par erreur, vous pouvez utiliser AWS CloudTrail pour identifier la personne qui l'a supprimé, la date et l'emplacement de la suppression (via un appel d'API ou la console de gestion AWS, par exemple).

***Réponses incorrectes :***

**AWS Config** : AWS Config vous permet d'évaluer, d'auditer et d'analyser les configurations de vos ressources AWS. Config surveille et enregistre en continu les configurations de vos ressources AWS et vous permet d'automatiser l'évaluation des configurations enregistrées par rapport aux configurations souhaitées. Avec Config, vous pouvez consulter les modifications apportées aux configurations et aux relations entre les ressources AWS, explorer l'historique détaillé des configurations de ressources et déterminer votre conformité globale aux configurations spécifiées dans vos directives internes.

**AWS CloudFormation** : AWS CloudFormation vous permet de modéliser facilement un ensemble de ressources AWS et tierces liées, de les provisionner rapidement et de manière cohérente, et de les gérer tout au long de leur cycle de vie, en traitant l'infrastructure comme du code. Un modèle CloudFormation décrit vos ressources et leurs dépendances afin que vous puissiez les déployer et les configurer ensemble sous forme de pile. Vous pouvez utiliser un modèle pour créer, mettre à jour et supprimer une pile entière comme une seule unité, aussi souvent que nécessaire, au lieu de gérer les ressources individuellement. Vous pouvez gérer et provisionner des piles sur plusieurs comptes AWS et régions AWS.

**AWS CloudWatch** : Amazon CloudWatch est un service de surveillance qui vous fournit des données et des informations exploitables pour surveiller vos applications, réagir aux variations de performances du système et optimiser l'utilisation des ressources. CloudWatch collecte des données de surveillance et d'exploitation sous forme de journaux, de métriques et d'événements. Vous bénéficiez ainsi d'une vue unifiée de l'état opérationnel et d'une visibilité complète sur vos ressources, applications et services AWS exécutés sur AWS et sur site. Avec CloudWatch, vous pouvez détecter les comportements anormaux dans vos environnements, configurer des alarmes, visualiser les journaux et les métriques côte à côte, automatiser des actions, résoudre les problèmes et obtenir des informations précieuses pour garantir le bon fonctionnement de vos applications.

***Liens vers les références :***

[https://aws.amazon.com/cloudtrail](https://aws.amazon.com/cloudtrail)  
Domaine  
Technologie  
Question 9Correct  
Une entreprise souhaite déployer une base de données PostgreSQL sur AWS. Cette base de données doit être à mise à l'échelle automatique et disposer d'une fonction de sauvegarde. En tant que spécialiste du cloud, quel service AWS recommanderiez-vous ?  
**Votre réponse est correcte**  
Amazon Aurora  
Amazon DynamoDB  
Amazon Neptune  
Amazon DocumentDB  
Explication générale  
***Réponse correcte :***

**Amazon Aurora** : Amazon Aurora est une base de données relationnelle compatible MySQL et PostgreSQL, conçue pour le cloud. Elle combine les performances et la disponibilité des bases de données d'entreprise traditionnelles avec la simplicité et la rentabilité des bases de données open source. Entièrement gérée, Amazon Aurora automatise les tâches d'administration fastidieuses telles que le provisionnement du matériel, la configuration de la base de données, l'application des correctifs et les sauvegardes. Amazon Aurora dispose d'un système de stockage distribué, tolérant aux pannes et à auto-réparation, qui s'adapte automatiquement jusqu'à 128 To par instance de base de données.

***Réponses incorrectes :***

**Amazon DynamoDB** : Amazon DynamoDB est un service de base de données NoSQL entièrement géré qui offre des performances rapides et prévisibles, ainsi qu'une évolutivité transparente. DynamoDB prend en charge les modèles de données clé-valeur et document. Vous pouvez utiliser Amazon DynamoDB pour créer une table de base de données capable de stocker et de récupérer n'importe quelle quantité de données, et de gérer n'importe quel volume de requêtes. DynamoDB offre une sécurité intégrée, des sauvegardes continues, une réplication multirégionale automatisée, une mise en cache en mémoire et des outils d'exportation de données. Amazon DynamoDB ne prend pas en charge les bases de données MySQL.

**Amazon Neptune** : Amazon Neptune est un service de base de données graphiques rapide, fiable et entièrement géré qui simplifie la création et l’exécution d’applications. Avec Amazon Neptune, vous pouvez facilement créer des graphes d’identité pour des solutions de résolution d’identité telles que les graphes sociaux et accélérer les mises à jour pour le ciblage publicitaire, la personnalisation et l’analyse.

**Amazon DocumentDB** : Amazon DocumentDB est un service de base de données rapide, fiable et entièrement géré. Il simplifie la configuration, l’exploitation et la mise à l’échelle des bases de données compatibles MongoDB dans le cloud. Avec Amazon DocumentDB, vous pouvez exécuter le même code applicatif et utiliser les mêmes pilotes et outils qu’avec MongoDB.

***Liens vers les références :***

[https://aws.amazon.com/rds/aurora](https://aws.amazon.com/rds/aurora)  
Domaine  
Technologie  
Question 10Correct  
Quel service AWS vous permet de déployer automatiquement du code sur AWS Fargate ?  
AWS CodeCommit  
AWS Cloud9  
AWS CodePipeline  
**Votre réponse est correcte**  
AWS CodeDeploy  
Explication générale  
***Réponse correcte :***

**AWS CodeDeploy** : AWS CodeDeploy est un service de déploiement entièrement géré qui automatise le déploiement de logiciels sur divers services de calcul tels qu'Amazon EC2, AWS Fargate, AWS Lambda et vos serveurs sur site. AWS CodeDeploy simplifie la mise en production rapide de nouvelles fonctionnalités, vous aide à éviter les interruptions de service lors du déploiement d'applications et gère la complexité des mises à jour. Vous pouvez utiliser AWS CodeDeploy pour automatiser vos déploiements logiciels et éliminer ainsi les opérations manuelles sources d'erreurs. Le service s'adapte à vos besoins de déploiement.

***Réponses incorrectes :***

**AWS CodeCommit** : AWS CodeCommit est un service de contrôle de version géré et hautement scalable qui héberge des dépôts Git privés. Il vous suffit de créer un dépôt pour stocker votre code. Aucun matériel n'est à provisionner ni à mettre à l'échelle, et aucun logiciel n'est à installer, configurer ni exploiter. CodeCommit facilite la collaboration sur le code grâce aux demandes d'extraction, à la création de branches et à la fusion. Vous pouvez mettre en œuvre des flux de travail incluant par défaut les revues de code et les retours d'information, et contrôler qui peut modifier des branches spécifiques.

**AWS CodePipeline** : AWS CodePipeline est un service de livraison continue entièrement géré qui vous aide à automatiser vos pipelines de déploiement pour des mises à jour rapides et fiables de vos applications et infrastructures. CodePipeline automatise les phases de compilation, de test et de déploiement de votre processus de mise en production à chaque modification du code, selon le modèle de mise en production que vous définissez. Vous pouvez ainsi déployer rapidement et de manière fiable de nouvelles fonctionnalités et mises à jour.

**AWS Cloud9** : AWS Cloud9 est un environnement de développement intégré (IDE) basé sur le cloud qui vous permet d'écrire, d'exécuter et de déboguer votre code directement depuis votre navigateur. Il inclut un éditeur de code, un débogueur et un terminal. Cloud9 est fourni avec les outils essentiels pour les langages de programmation les plus courants, tels que JavaScript, Python, PHP et bien d'autres. Vous n'avez donc pas besoin d'installer de fichiers ni de configurer votre machine de développement pour démarrer de nouveaux projets.

***Liens vers les références :***

[https://aws.amazon.com/codedeploy](https://aws.amazon.com/codedeploy)  
Domaine  
Technologie  
Question 11Correct  
Quel service AWS peut être utilisé pour analyser des données provenant d'entrepôts de données via des requêtes SQL ?  
Amazone Athéna  
**Votre réponse est correcte**  
Amazon Redshift  
Pipeline de données AWS  
Amazon DocumentDB  
Explication générale  
***Réponse correcte :***

**Amazon** Redshift utilise SQL pour analyser les données structurées et semi-structurées issues d'entrepôts de données, de bases de données opérationnelles et de lacs de données. Grâce à l'infrastructure matérielle et au machine learning conçus par AWS, Redshift offre un rapport prix/performances optimal, quelle que soit l'échelle. Redshift permet d'extraire des informations précieuses à partir de volumes importants de données. L'interface intuitive d'AWS vous permet de déployer un nouveau cluster en quelques minutes, sans vous soucier de la gestion de l'infrastructure.

***Réponses incorrectes :***

**Amazon DocumentDB** : Amazon DocumentDB est un service de base de données rapide, fiable et entièrement géré. Il simplifie la configuration, l’exploitation et la mise à l’échelle des bases de données compatibles MongoDB dans le cloud. Avec Amazon DocumentDB, vous pouvez exécuter le même code applicatif et utiliser les mêmes pilotes et outils qu’avec MongoDB.

**AWS Data Pipeline** : AWS Data Pipeline est un service web qui vous permet de traiter et de déplacer des données de manière fiable entre différents services de calcul et de stockage AWS, ainsi que des sources de données sur site, à intervalles réguliers. Grâce à AWS Data Pipeline, vous pouvez accéder régulièrement à vos données là où elles sont stockées, les transformer et les traiter à grande échelle, puis transférer efficacement les résultats vers des services AWS tels qu'Amazon S3, Amazon RDS, Amazon DynamoDB et Amazon EMR.

**Amazon Athena** : Amazon Athena est un service de requêtes interactif qui simplifie l'analyse des données stockées sur Amazon S3 à l'aide du langage SQL standard. Athena est facile à utiliser. Il suffit d'indiquer l'emplacement de vos données sur Amazon S3, de définir le schéma et de commencer à interroger les données avec le langage SQL standard. La plupart des résultats sont disponibles en quelques secondes. Avec Athena, plus besoin de processus ETL complexes pour préparer vos données à l'analyse. Ainsi, toute personne maîtrisant le SQL peut analyser rapidement des ensembles de données volumineux.

***Liens vers les références :***

[https://aws.amazon.com/redshift](https://aws.amazon.com/redshift)  
Domaine  
Technologie  
Question 12Correct  
Parmi les plans de support AWS suivants, lesquels proposent une gestion automatisée des demandes de support permettant de créer, gérer et clôturer ces demandes ? (Sélectionnez trois réponses.)  
Promoteur  
Entreprise  
**Votre sélection est correcte**  
Entreprise  
Basique  
**Votre sélection est correcte**  
Rampe d'accès aux entreprises  
**Votre sélection est correcte**  
Entreprise  
Explication générale  
***Réponses correctes :***

**Pour les entreprises :** le support AWS Business est recommandé si vous avez des charges de travail de production sur AWS et que vous souhaitez un accès 24 h/24 et 7 j/7 à une assistance technique et à des conseils architecturaux adaptés à vos cas d’utilisation spécifiques.

En plus d'une assistance technique et de conseils architecturaux améliorés, le support aux entreprises donne accès à l'assistance logicielle tierce, à la documentation et aux forums, à AWS Trusted Advisor, au tableau de bord AWS Personal Health, à l'API de support AWS, ainsi qu'à la planification des lancements et des événements.

**Programme d'accès prioritaire pour entreprises** : AWS recommande le programme d'accès prioritaire pour entreprises AWS si vous avez des charges de travail critiques pour la production/l'activité sur AWS et que vous souhaitez un accès 24 h/24 et 7 j/7 à une assistance technique et avez besoin de conseils d'experts pour vous développer et optimiser votre environnement cloud.

Avec Enterprise On-Ramp, vous bénéficiez d'une assistance technique 24 h/24 et 7 j/7 assurée par des ingénieurs hautement qualifiés, ainsi que d'outils et de technologies permettant de gérer automatiquement l'état de votre environnement. Vous profitez également de conseils architecturaux personnalisés, adaptés à vos applications et cas d'utilisation, et d'une équipe de responsables techniques de compte (TAM) pour coordonner l'accès aux programmes proactifs et préventifs et aux experts AWS. AWS propose l'API AWS Support pour accéder par programmation au Centre de support AWS.

**Entreprise :** Le support AWS Enterprise vous offre un service personnalisé de type conciergerie, axé sur la réussite de vos objectifs et votre déploiement réussi dans le cloud. Avec le support Enterprise, vous bénéficiez d'une assistance technique 24 h/24 et 7 j/7 assurée par des ingénieurs de haut niveau, ainsi que d'outils et de technologies permettant de gérer automatiquement l'état de votre environnement. Vous profitez également de conseils architecturaux personnalisés, adaptés à vos applications et cas d'utilisation, et d'un responsable technique de compte (TAM) dédié pour coordonner l'accès aux programmes proactifs et préventifs et aux experts AWS. Le support AWS Enterprise est recommandé si vous avez des charges de travail critiques pour votre activité et/ou votre mission sur AWS. AWS propose une API de support permettant d'accéder par programmation au centre de support AWS.

***Réponses incorrectes :***

**Support de base :** Le support de base est inclus pour tous les clients AWS et comprend :

Service client et communautés : accès 24 h/24 et 7 j/7 au service client, à la documentation, aux livres blancs et à AWS re:Post.

AWS Trusted Advisor : Accédez aux principaux contrôles et conseils de Trusted Advisor pour provisionner vos ressources en suivant les meilleures pratiques afin d’améliorer les performances et la sécurité.

**Développeurs :** AWS recommande le support aux développeurs AWS si vous effectuez des tests ou des développements préliminaires sur AWS et souhaitez bénéficier d'une assistance technique pendant les heures ouvrables, ainsi que de conseils architecturaux généraux lors de la conception et des tests. Outre une assistance technique et des conseils architecturaux renforcés, le support aux développeurs donne accès à la documentation et aux forums, à AWS Trusted Advisor et au tableau de bord AWS Personal Health. Le plan de support aux développeurs ne donne pas accès aux API.

**Entreprises :** AWS ne propose aucun plan de support.

***Liens vers les références :***

[https://aws.amazon.com/premiumsupport/plans](https://aws.amazon.com/premiumsupport/plans)  
Domaine  
Facturation et tarification  
Question 13Correct  
Votre entreprise dispose d'une application à usage interne uniquement, exécutée sur une instance EC2. Pour des raisons de sécurité, vous devez bloquer toutes les autres requêtes entrantes vers cette instance EC2. Quelle solution parmi les suivantes vous permettra de réaliser cela ?  
MAINTENANT MFA  
**Votre réponse est correcte**  
Groupe de sécurité  
Politique IAM  
Passerelles Internet  
Explication générale  
***Réponse correcte :***

**Groupes de sécurité** : Un groupe de sécurité agit comme un pare-feu virtuel pour vos instances EC2, contrôlant le trafic entrant et sortant. Lorsque vous lancez une instance EC2 dans un VPC, vous pouvez lui attribuer jusqu'à cinq groupes de sécurité. Les groupes de sécurité s'appliquent au niveau de l'instance, et non au niveau du sous-réseau. Par conséquent, chaque instance d'un sous-réseau de votre VPC peut être associée à un ensemble différent de groupes de sécurité.

***Réponses incorrectes :***

**Authentification multifacteur ( MFA) AWS** : L’authentification multifacteur (MFA) AWS est une bonne pratique qui ajoute une couche de protection supplémentaire à votre nom d’utilisateur et à votre mot de passe. Lorsque la MFA est activée, lorsqu’un utilisateur se connecte à une console de gestion AWS, il lui est demandé son nom d’utilisateur et son mot de passe (premier facteur : ce qu’il connaît), ainsi qu’un code d’authentification généré par son dispositif AWS MFA (deuxième facteur : ce qu’il possède). Ensemble, ces plusieurs facteurs renforcent la sécurité des paramètres et des ressources de votre compte AWS.

**Passerelles Internet** : une passerelle Internet permet la communication entre un VPC et Internet. Elle remplit deux fonctions : fournir une cible dans les tables de routage du VPC pour le trafic routable vers Internet et effectuer la traduction d’adresses réseau (NAT) pour les instances auxquelles des adresses IPv4 publiques ont été attribuées.

**Stratégies IAM** : Vous gérez les accès à AWS en créant des stratégies et en les associant à des identités IAM (utilisateurs, groupes d’utilisateurs ou rôles) ou à des ressources AWS. Une stratégie est un objet AWS qui, lorsqu’il est associé à une identité ou à une ressource, définit ses autorisations. AWS évalue ces stratégies lorsqu’un principal IAM (utilisateur ou rôle) effectue une requête.

***Liens vers les références :***

[https://docs.aws.amazon.com/vpc/latest/userguide/VPC\_SecurityGroups.html](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html)  
Domaine  
Sécurité et conformité  
Question 14Correct  
Parmi les services AWS suivants, lesquels offrent une couche de protection supplémentaire contre les attaques par déni de service distribué (DDoS) ? (Sélectionnez deux réponses.)  
**Votre sélection est correcte**  
ClodFront avec AWS WAF  
AWS CloudWatch  
Conseiller de confiance AWS  
**Votre sélection est correcte**  
Bouclier AWS  
Gestionnaire d'audit AWS  
Explication générale  
***Réponse correcte :***

**AWS Shield** : AWS Shield est un service de protection contre les attaques par déni de service distribué (DDoS) géré qui protège les applications exécutées sur AWS. AWS Shield assure une détection continue et des mesures d'atténuation automatiques afin de minimiser les interruptions de service et la latence des applications. Il n'est donc pas nécessaire de contacter le support AWS pour bénéficier de cette protection.

**CloudFront avec AWS WAF** : AWS WAF peut être déployé sur CloudFront pour protéger votre application contre les attaques DDoS en vous donnant le contrôle sur le trafic à autoriser ou à bloquer grâce à la définition de règles de sécurité.

***Réponses incorrectes :***

**AWS Audit Manager** : Audit Manager vous aide à auditer en continu votre utilisation d'AWS afin de simplifier l'évaluation des risques et la conformité aux réglementations et aux normes sectorielles. Audit Manager automatise la collecte des preuves pour faciliter l'évaluation de l'efficacité de vos politiques, procédures et activités. Lors d'un audit, Audit Manager vous aide à gérer les revues des parties prenantes concernant vos contrôles et à générer des rapports prêts pour l'audit avec un effort manuel considérablement réduit.

**AWS CloudWatch** : Amazon CloudWatch est un service de surveillance qui vous fournit des données et des informations exploitables pour surveiller vos applications, réagir aux variations de performances du système et optimiser l'utilisation des ressources. CloudWatch collecte des données de surveillance et d'exploitation sous forme de journaux, de métriques et d'événements. Vous bénéficiez ainsi d'une vue unifiée de l'état opérationnel et d'une visibilité complète sur vos ressources, applications et services AWS exécutés sur AWS et sur site. Avec CloudWatch, vous pouvez détecter les comportements anormaux dans vos environnements, configurer des alarmes, visualiser les journaux et les métriques côte à côte, automatiser des actions, résoudre les problèmes et obtenir des informations précieuses pour garantir le bon fonctionnement de vos applications.

**AWS Trusted Advisor** : AWS Trusted Advisor fournit des recommandations pour vous aider à suivre les bonnes pratiques AWS. Trusted Advisor évalue votre compte à l’aide de contrôles. Ces contrôles identifient les moyens d’optimiser votre infrastructure AWS, d’améliorer la sécurité et les performances, de réduire les coûts et de surveiller les quotas de service. Vous pouvez ensuite suivre les recommandations pour optimiser vos services et ressources. Trusted Advisor ne permet pas de prévenir les attaques DDoS.

***Liens vers les références :***

[https://aws.amazon.com/shield](https://aws.amazon.com/shield)

[https://aws.amazon.com/blogs/security/how-to-protect-dynamic-web-applications-against-ddos-attacks-by-using-amazon-cloudfront-and-amazon-route-53](https://aws.amazon.com/blogs/security/how-to-protect-dynamic-web-applications-against-ddos-attacks-by-using-amazon-cloudfront-and-amazon-route-53)  
Domaine  
Sécurité et conformité  
Question 15Correct  
Lequel des éléments suivants ne constitue pas un avantage de l'utilisation du cloud computing ?  
Bénéficiez d'économies d'échelle massives  
Arrêtez de deviner la capacité  
Arrêtez de dépenser de l'argent pour l'entretien des centres de données.  
**Votre réponse est correcte**  
Ressources de calcul virtualisées  
Explication générale  
***Réponse correcte :***

**Ressources de calcul virtualisées** : ce n’est pas un avantage du cloud computing.

***Réponses incorrectes :***

**Arrêtez de dépenser de l'argent pour l'entretien des centres de données.**

**Arrêtez de deviner la capacité**

**Bénéficiez d'économies d'échelle massives**

Le cloud computing offre un moyen simple d'accéder à des serveurs, du stockage, des bases de données et à un large éventail de services applicatifs via Internet. Une plateforme de services cloud comme Amazon Web Services possède et gère l'infrastructure matérielle connectée au réseau nécessaire à ces services, tandis que vous les configurez et les utilisez selon vos besoins via une application web.

**Échangez les dépenses d'investissement contre des dépenses variables** : au lieu d'investir massivement dans des centres de données et des serveurs avant même de savoir comment vous allez les utiliser, vous ne payez que lorsque vous consommez des ressources informatiques, et seulement pour la quantité consommée.

**Profitez d'économies d'échelle considérables** : grâce au cloud computing, vous pouvez réduire vos coûts variables par rapport à une gestion en interne. L'utilisation agrégée de centaines de milliers de clients dans le cloud permet à des fournisseurs comme AWS de réaliser d'importantes économies d'échelle, ce qui se traduit par des tarifs à la consommation plus avantageux.

**Cessez de deviner vos** besoins en capacité : Éliminez les incertitudes liées à la capacité de votre infrastructure. Lorsque vous décidez de la capacité avant le déploiement d'une application, vous vous retrouvez souvent avec des ressources inutilisées et coûteuses ou une capacité limitée. Avec le cloud computing, ces problèmes disparaissent. Vous pouvez accéder à la capacité dont vous avez besoin et l'adapter à la hausse ou à la baisse en quelques minutes seulement.

**Gagnez en rapidité et en agilité** : dans un environnement de cloud computing, les nouvelles ressources informatiques sont accessibles en un clic, ce qui réduit considérablement le délai de mise à disposition de ces ressources pour vos développeurs, passant de plusieurs semaines à quelques minutes. Il en résulte un gain d'agilité significatif pour l'organisation, car les coûts et les délais liés à l'expérimentation et au développement sont nettement inférieurs.

**Cessez de dépenser de l'argent en exploitation et maintenance de centres de données** : concentrez-vous sur les projets qui différencient votre entreprise, et non sur l'infrastructure. Le cloud computing vous permet de vous concentrer sur vos clients plutôt que sur les tâches fastidieuses liées à l'installation, au déploiement et à l'alimentation des serveurs.

**Déployez votre application à l'international en quelques minutes** : en quelques clics, elle est facile à utiliser dans plusieurs régions du monde. Vous offrez ainsi une latence réduite et une expérience utilisateur optimale à vos clients, à moindre coût.

***Liens vers les références :***

[https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html)  
Domaine  
Concepts du cloud  
Question 16Correct  
Quel service AWS faut-il utiliser pour diffuser du contenu statique à des clients du monde entier avec une faible latence ?  
AWS Lambda  
**Votre réponse est correcte**  
Amazon CloudFront  
Amazon EC2  
Amazon S3  
Explication générale  
***Réponse correcte :***

**Amazon CloudFront** : Amazon CloudFront est un service de réseau de diffusion de contenu (CDN) rapide qui distribue en toute sécurité des données, des vidéos, des applications et des API aux clients du monde entier avec une faible latence et des vitesses de transfert élevées, le tout dans un environnement convivial pour les développeurs. Il fournit un réseau mondial de serveurs proxy qui mettent en cache le contenu, comme le contenu statique ou d'autres fichiers multimédias volumineux, plus près des utilisateurs, améliorant ainsi la vitesse d'accès pour le téléchargement du contenu.

***Réponses incorrectes :***

**Amazon S3** : Amazon Simple Storage Service (Amazon S3) est un service de stockage d'objets conçu pour stocker n'importe quelle quantité de données. Étant un service sans serveur, il ne propose aucune réservation préalable.

**Amazon EC2** : Amazon EC2 est une plateforme de cloud computing qui vous permet de louer des ordinateurs virtuels et d'exécuter des applications dans cet environnement. Elle fournit une infrastructure de calcul sécurisée, fiable, performante et économique pour répondre aux besoins exigeants des entreprises. C'est la solution la plus simple pour provisionner des serveurs sur le cloud AWS et accéder au système d'exploitation.

**AWS Lambda** : AWS Lambda est un service de calcul sans serveur et événementiel qui vous permet d'exécuter du code pour pratiquement n'importe quel type d'application ou de service backend sans avoir à provisionner ni à gérer de serveurs. Vous pouvez déclencher des instances Lambda depuis plus de 200 services AWS et applications SaaS (Software as a Service), et vous ne payez que ce que vous utilisez. Vous ne payez que le temps de calcul consommé. Il vous suffit de charger votre code ; Lambda se charge de tout ce qui est nécessaire pour son exécution et sa mise à l'échelle avec une haute disponibilité.

***Liens vers les références :***

[https://aws.amazon.com/cloudfront](https://aws.amazon.com/cloudfront)  
Domaine  
Technologie  
Question 17Correct  
Une entreprise a cherché à analyser le coût de son compte AWS. Parmi les options suivantes, lesquelles fournissent les données les plus détaillées sur ses coûts et son utilisation d'AWS ? (Sélectionnez deux réponses.)  
Amazon CloudWatch  
Amazon CloudFront  
**Votre sélection est correcte**  
Rapport sur les coûts et l'utilisation d'AWS  
Organisations AWS  
**Votre sélection est correcte**  
AWS Cost Explorer  
Explication générale  
***Réponse correcte :***

**Rapport sur les coûts et l'utilisation AWS** : Ce rapport contient l'ensemble le plus complet de données disponibles sur les coûts et l'utilisation d'AWS, incluant des métadonnées supplémentaires sur les services AWS, la tarification, les crédits, les frais, les taxes, les remises, les catégories de coûts, les instances réservées et les plans d'économies. Il est disponible par heure, par jour ou par mois, ainsi qu'au niveau du compte administrateur ou membre.

**AWS Cost Explorer** : AWS Cost Explorer possède une interface conviviale qui vous permet de visualiser, comprendre et gérer vos coûts et votre utilisation AWS, que ce soit quotidiennement ou mensuellement. Un rapport par défaut vous aide à visualiser les coûts et l'utilisation associés à vos cinq principaux services AWS et vous fournit une ventilation détaillée de tous les services dans un tableau. Les rapports vous permettent d'ajuster la période pour consulter l'historique des données jusqu'à douze mois et ainsi analyser l'évolution de vos coûts. Vous pouvez également affiner votre analyse grâce à des filtres et des regroupements précis, tels que le type d'utilisation et les balises.

***Réponses incorrectes :***

**Amazon CloudWatch** : Amazon CloudWatch est un service de surveillance qui vous fournit des données et des informations exploitables pour surveiller vos applications, réagir aux variations de performances du système et optimiser l'utilisation des ressources. CloudWatch collecte des données de surveillance et d'exploitation sous forme de journaux, de métriques et d'événements. Vous bénéficiez ainsi d'une vue unifiée de l'état opérationnel et d'une visibilité complète sur vos ressources AWS, vos applications et vos services exécutés sur AWS et sur site. Avec CloudWatch, vous pouvez détecter les comportements anormaux dans vos environnements, configurer des alarmes, visualiser les journaux et les métriques côte à côte, automatiser des actions, résoudre les problèmes et obtenir des informations précieuses pour garantir le bon fonctionnement de vos applications.

**AWS Organizations** : AWS Organizations vous aide à gérer et à gouverner votre environnement de manière centralisée à mesure que vos ressources AWS se développent. AWS Organizations inclut des fonctionnalités de gestion de comptes et de facturation consolidée qui vous permettent de mieux répondre aux besoins budgétaires, de sécurité et de conformité de votre entreprise. Avec AWS Organizations, vous pouvez créer et gérer des comptes membres et allouer des ressources, regrouper des comptes pour organiser vos flux de travail, appliquer des politiques aux comptes ou aux groupes à des fins de gouvernance et simplifier la facturation en utilisant un mode de paiement unique pour tous vos comptes.

**Amazon CloudFront** : Amazon CloudFront est un service de réseau de diffusion de contenu (CDN) mondial conçu pour offrir des performances optimales en termes de vitesse et de faible latence, une sécurité renforcée et une grande facilité d'utilisation pour les développeurs. Il fournit un réseau mondial de serveurs proxy qui mettent en cache le contenu, comme les vidéos web ou autres fichiers multimédias volumineux, au plus près des utilisateurs, améliorant ainsi la vitesse d'accès et le téléchargement du contenu.

***Liens vers les références :***

[https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting](https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting)

[https://aws.amazon.com/aws-cost-management/aws-cost-explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer)  
Domaine  
Facturation et tarification  
Question 18Correct  
Parmi les services AWS suivants, lesquels peuvent créer automatiquement des réplicas de données dans des zones de disponibilité distinctes ? (Sélectionnez deux réponses.)  
Amazon SNS  
**Votre sélection est correcte**  
Amazon S3  
Amazon EC2  
AWS IAM  
**Votre sélection est correcte**  
Amazon RDS  
Explication générale  
***Réponses correctes :***

**Amazon** RDS automatise les tâches d'administration courantes, telles que les sauvegardes et la mise à jour du logiciel de votre base de données. Grâce aux déploiements multi-AZ optionnels, Amazon RDS gère également la réplication synchrone des données entre les zones de disponibilité avec basculement automatique.

**Amazon S3** : La réplication Amazon S3 permet la copie automatique et asynchrone d'objets entre compartiments Amazon S3. Vous pouvez répliquer les nouveaux objets écrits dans le compartiment vers un ou plusieurs compartiments de destination situés entre différentes régions AWS (réplication interrégionale S3) ou au sein de la même région AWS (réplication intrarégionale S3).

***Réponses incorrectes :***

**Amazon EC2** : Amazon EC2 est un service de calcul qui utilise Amazon EBS pour stocker les données. Par conséquent, l'utilisation d'EC2 est incorrecte. Vous pouvez toutefois effectuer une sauvegarde en créant un instantané EBS. Les instantanés Amazon EBS sont incrémentiels : ils ne stockent que les modifications depuis le dernier instantané, ce qui les rend économiques et idéaux pour les sauvegardes fréquentes.

**AWS IAM** : AWS IAM est un service global qui ne fournit aucune réplique ni sauvegarde.

**Amazon SNS** : Amazon SNS ne fournit pas de service de réplication.

***Liens vers les références :***

[https://aws.amazon.com/rds/faqs](https://aws.amazon.com/rds/faqs)

[https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html)

[https://aws.amazon.com/ebs/snapshots](https://aws.amazon.com/ebs/snapshots)  
Domaine  
Technologie  
Question 19Correct  
Quel service de stockage AWS prend en charge les systèmes de fichiers réseau et peut être associé à plusieurs instances EC2 ?  
**Votre réponse est correcte**  
Amazon Elastic File System  
Amazon Elastic Block Store  
Amazon Simple Storage Service  
Passerelle de stockage AWS  
Explication générale  
***Réponse correcte :***

**Amazon Elastic File System (Amazon EFS)** : Amazon Elastic File System est un service de stockage cloud conçu pour fournir un stockage de fichiers évolutif, élastique et chiffré, utilisable avec les services cloud AWS et les ressources sur site. Un système de fichiers Amazon EFS est idéal comme système de fichiers réseau géré, partageable entre différentes instances Amazon EC2. Fonctionnant comme un périphérique NAS, Amazon EFS est particulièrement performant pour l'analyse de données massives, les flux de travail de traitement multimédia et la gestion de contenu.

***Réponses incorrectes :***

**AWS Storage Gateway** : AWS Storage Gateway est un service de stockage cloud hybride qui vous offre un accès local à un espace de stockage cloud quasi illimité. Les clients utilisent Storage Gateway pour simplifier la gestion du stockage et réduire les coûts des principaux cas d'usage de stockage cloud hybride. Il s'agit notamment du transfert des sauvegardes vers le cloud, de l'utilisation de partages de fichiers locaux s'appuyant sur le stockage cloud et de l'accès à faible latence aux données AWS pour les applications locales.

**Amazon Elastic Block Store** : Amazon Elastic Block Store (Amazon EBS) fournit des volumes de stockage au niveau bloc pour les instances EC2. Les volumes EBS se comportent comme des périphériques de stockage par blocs bruts et non formatés. Vous pouvez les monter comme des périphériques sur vos instances. AWS recommande Amazon EBS pour les données qui doivent être rapidement accessibles et nécessitent une persistance à long terme. Les volumes EBS sont particulièrement adaptés au stockage principal des systèmes de fichiers, des bases de données ou de toute application nécessitant des mises à jour précises et un accès à un stockage au niveau bloc brut et non formaté.

**Amazon** Simple Storage Service (Amazon S3) est un service de stockage d'objets offrant une évolutivité, une disponibilité des données, une sécurité et des performances de pointe. Ce service est conçu pour la sauvegarde et l'archivage en ligne des données et des applications hébergées sur Amazon Web Services (AWS).

***Liens vers les références :***

[https://aws.amazon.com/efs](https://aws.amazon.com/efs)  
Domaine  
Technologie  
Question 20Correct  
Laquelle des affirmations suivantes concernant AWS WAF est vraie ?  
**Votre réponse est correcte**  
Le WAF crée des règles de sécurité pour se protéger contre les attaques de type cross-site scripting.  
Le WAF analyse en permanence les charges de travail AWS à la recherche de vulnérabilités logicielles.  
Le WAF surveille les requêtes entrantes provenant d'Amazon Route 53\.  
Le WAF détecte en permanence les attaques DDoS et assure une protection contre celles-ci.  
Explication générale  
***Réponse correcte :***

**AWS WAF est un pare-feu applicatif web qui protège vos applications web et API contre les failles de sécurité et les bots susceptibles d'affecter la disponibilité, de compromettre la sécurité ou de consommer des ressources excessives. Il vous permet de contrôler le trafic entrant vers** vos applications en créant des règles de sécurité qui limitent le trafic des bots et bloquent les attaques courantes, telles que les injections SQL et les attaques XSS (Cross-Site Scripting).

***Réponses incorrectes :***

**Le WAF détecte et protège en permanence contre les attaques DDoS** : AWS Shield est un service de protection contre les attaques par déni de service (DDoS) qui protège les applications exécutées sur AWS. AWS Shield assure une détection continue et des mesures d'atténuation automatiques en temps réel afin de minimiser les interruptions de service et la latence des applications.

**Le WAF analyse en continu les charges de travail AWS à la recherche de vulnérabilités logicielles** : Amazon Inspector est un service automatisé de gestion des vulnérabilités qui analyse en continu les charges de travail AWS à la recherche de vulnérabilités logicielles et d’expositions réseau non intentionnelles.

**AWS WAF est un pare-feu d'applications web qui surveille les requêtes** entrantes provenant d'Amazon CloudFront, d'Application Load Balancer, d'Amazon API Gateway et d'AWS AppSync. AWS WAF ne surveille pas les requêtes Route 53\.

***Liens vers les références :***

[https://aws.amazon.com/waf](https://aws.amazon.com/waf)  
Domaine  
Sécurité et conformité  
Question 21Incorrect  
Quelle affirmation est vraie concernant le concept de région ?  
**Votre réponse est incorrecte**  
Chaque région AWS est composée de plusieurs zones de disponibilité (AZ) logiquement isolées au sein d'une zone géographique.  
Une région AWS est un point physique permettant de diffuser du contenu statique avec une latence faible et rapide.  
**Bonne réponse**  
Une région AWS est un emplacement géographique comprenant un ensemble de zones de disponibilité.  
Une région AWS est un emplacement physique composé d'une zone de disponibilité.  
Explication générale  
***Réponse correcte :***

**Une région AWS est une zone géographique regroupant des zones de disponibilité** . Les régions AWS définissent l'emplacement physique des centres de données AWS. Répartis dans le monde entier, ces centres permettent aux clients de choisir la région la plus proche de leurs utilisateurs cibles pour y héberger leur infrastructure cloud. Chaque région AWS est composée de plusieurs zones de disponibilité isolées et physiquement distinctes.

Chaque région est isolée des autres et vos ressources ne sont disponibles que dans la région que vous avez choisie, sauf si vous les dupliquez explicitement dans une autre région. Cette isolation permet d'accroître la tolérance aux pannes et d'assurer une grande stabilité. AWS propose plusieurs régions géographiques, notamment en Amérique du Nord, en Amérique du Sud, en Europe, en Chine, en Asie-Pacifique, en Afrique du Sud et au Moyen-Orient.

***Réponses incorrectes :***

**Une région AWS est un point physique permettant de diffuser du contenu statique avec une latence faible et rapide.**

**Une région AWS est un emplacement physique composé d'une zone de disponibilité.**

**Chaque région AWS est composée de plusieurs zones de disponibilité logiquement isolées au sein d'une zone géographique.**

Toutes ces affirmations sont fausses.

***Liens vers les références :***

[https://aws.amazon.com/about-aws/global-infrastructure/regions\_az](https://aws.amazon.com/about-aws/global-infrastructure/regions_az)  
Domaine  
Concepts du cloud  
Question 22Correct  
Quel service utiliser pour obtenir des recommandations sur la configuration optimale permettant de réduire les coûts ?  
Budgets AWS  
**Votre réponse est correcte**  
AWS Compute Optimizer  
AWS Cost Explorer  
Amazon Redshift  
Explication générale  
***Réponse correcte :***

**AWS Compute Optimizer** : AWS Compute Optimizer recommande les ressources AWS optimales pour vos charges de travail afin de réduire les coûts et d'améliorer les performances. Pour ce faire, il utilise l'apprentissage automatique afin d'analyser les indicateurs d'utilisation historiques. Un surdimensionnement des ressources peut engendrer des coûts d'infrastructure inutiles, tandis qu'un sous-dimensionnement peut nuire aux performances de vos applications. Compute Optimizer vous aide à choisir les configurations optimales pour trois types de ressources AWS : les instances Amazon Elastic Compute Cloud (EC2), les volumes Amazon Elastic Block Store (EBS) et les fonctions AWS Lambda, en fonction de vos données d'utilisation.

***Réponses incorrectes :***

**AWS Cost Explorer** : AWS Cost Explorer possède une interface conviviale qui vous permet de visualiser, comprendre et gérer vos coûts et votre utilisation AWS, que ce soit quotidiennement ou mensuellement. Un rapport par défaut vous aide à visualiser les coûts et l'utilisation associés à vos cinq principaux services AWS et vous fournit une ventilation détaillée de tous les services dans un tableau. Les rapports vous permettent d'ajuster la période pour consulter l'historique des données jusqu'à douze mois et ainsi analyser l'évolution de vos coûts. Vous pouvez également affiner votre analyse grâce à des filtres et des regroupements précis, tels que le type d'utilisation et les balises.

**Budgets AWS** : Budgets AWS est la solution la plus simple pour contrôler vos dépenses AWS et recevoir des alertes en cas de dépassement de votre limite budgétaire. Vous pouvez définir des budgets personnalisés pour suivre vos coûts et votre utilisation, des cas d'utilisation les plus simples aux plus complexes. Avec Budgets AWS, vous pouvez choisir d'être alerté par e-mail ou via les réseaux sociaux lorsque les coûts et l'utilisation réels ou prévus dépassent votre seuil budgétaire, ou lorsque l'utilisation ou la couverture réelle de vos instances réservées et de vos plans d'économies passe en dessous du seuil souhaité.

**Amazon** Redshift utilise SQL pour analyser les données structurées et semi-structurées issues d'entrepôts de données, de bases de données opérationnelles et de lacs de données. Grâce à l'infrastructure matérielle et au machine learning conçus par AWS, Redshift offre un rapport prix/performances optimal, quelle que soit l'échelle. Redshift permet d'extraire des informations précieuses à partir de volumes importants de données. L'interface intuitive d'AWS vous permet de déployer un nouveau cluster en quelques minutes, sans vous soucier de la gestion de l'infrastructure.

***Liens vers les références :***

[https://aws.amazon.com/compute-optimizer](https://aws.amazon.com/compute-optimizer)  
Domaine  
Facturation et tarification  
Question 23Correct  
Quel produit peut vous aider à récupérer un objet supprimé ou modifié accidentellement dans Amazon S3 ?  
Configuration de la politique de cycle de vie  
Configuration de la stratégie de compartiment  
**Votre réponse est correcte**  
Activation du versionnage  
Activation du chiffrement  
Explication générale  
***Réponse correcte :***

**Activation du versionnage** : Amazon S3 prend en charge le versionnage des objets, désactivé par défaut. En activant le versionnage, S3 crée une nouvelle version à chaque modification ou suppression d’un objet, ce qui permet de restaurer les objets endommagés en cas de besoin.

Le versionnage dans Amazon S3 permet de conserver plusieurs variantes d'un objet dans un même compartiment. Vous pouvez utiliser cette fonctionnalité pour préserver, récupérer et restaurer chaque version de chaque objet stocké dans vos compartiments. Grâce au versionnage, la récupération est facilitée en cas d'actions utilisateur involontaires ou de défaillances d'application.

Les compartiments compatibles avec le versionnage vous permettent de récupérer des objets supprimés ou écrasés accidentellement. Par exemple, si vous supprimez un objet, Amazon S3 insère un marqueur de suppression au lieu de le supprimer définitivement. Ce marqueur devient la version actuelle de l'objet. Si vous écrasez un objet, une nouvelle version est créée dans le compartiment. Vous pouvez toujours restaurer la version précédente.

***Réponses incorrectes :***

**Activation du chiffrement** : le chiffrement est un processus qui protège les données contre la lecture par des utilisateurs non autorisés. Cependant, il ne permet pas de restaurer les objets après leur suppression.

**Configuration de la politique de cycle de vie** : La configuration du cycle de vie d’Amazon S3 définit un ensemble de règles permettant de faire migrer les objets vers une classe de stockage moins coûteuse, de les archiver ou de les supprimer. Cela contribue à réduire le coût total d’Amazon S3.

**Configuration des stratégies de compartiment** : Une stratégie de compartiment est une stratégie basée sur les ressources permettant d'accorder des autorisations d'accès à votre compartiment et aux objets qu'il contient. Vous pouvez utiliser des stratégies de compartiment pour ajouter ou refuser des autorisations sur les objets d'un compartiment. Les stratégies de compartiment autorisent ou refusent les requêtes en fonction des éléments qu'elles définissent, notamment le demandeur, les actions S3, les ressources et les aspects ou conditions de la requête (par exemple, l'adresse IP utilisée pour effectuer la requête). Par exemple, vous pouvez créer une stratégie de compartiment qui autorise le chargement d'objets entre comptes dans un compartiment S3, tout en garantissant que le propriétaire du compartiment conserve le contrôle total des objets chargés.

***Liens vers les références :***

[https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html)  
Domaine  
Technologie  
Question 24Correct  
Quels sont les avantages du déploiement d'une base de données relationnelle sur Amazon RDS dans le cloud AWS ? (Sélectionnez deux réponses)  
Contrôle total du logiciel de base de données  
**Votre sélection est correcte**  
Les déploiements multi-AZ sont pris en charge.  
Application automatique de l'indexation  
Remise plus importante que sur Amazon EC2  
**Votre sélection est correcte**  
Aucun besoin de corriger le logiciel de base de données  
Explication générale  
***Réponses correctes :***

**Pas besoin de mettre à jour le logiciel de base de données** : AWS s’assure que le logiciel de base de données Amazon RDS est à jour avec les derniers correctifs.

**Déploiements multi-AZ pris en charge** : les déploiements multi-AZ d’Amazon RDS offrent une disponibilité et une durabilité accrues pour les instances de base de données, ce qui les rend parfaitement adaptés aux charges de travail de production. Lorsque vous provisionnez une instance de base de données multi-AZ, Amazon RDS réplique vos données de manière synchrone vers une instance de secours située dans une autre zone de disponibilité (AZ).

***Réponses incorrectes :***

**Contrôle total du logiciel de base de données** : Amazon RDS est un service géré. Par conséquent, le client ne dispose pas d'un contrôle total sur le logiciel de base de données.

**Application automatique de l'index** : L'indexation n'est pas une fonctionnalité d'Amazon RDS, mais une fonctionnalité de la base de données. Vous êtes donc responsable de son application.

**Remise plus importante qu'avec Amazon EC2** : AWS propose des tarifs distincts pour Amazon RDS et EC2. La comparaison avec EC2 est donc impossible. Vous ne payez que ce que vous consommez, sans frais minimums. Amazon RDS peut être payé à la demande ou via des instances réservées.

***Liens vers les références :***

[https://aws.amazon.com/rds/features](https://aws.amazon.com/rds/features)

[https://aws.amazon.com/rds/pricing](https://aws.amazon.com/rds/pricing)  
Domaine  
Concepts du cloud  
Question 25Correct  
Quel aspect de la sécurité AWS gère-t-il ?  
**Votre réponse est correcte**  
Sécurité du réseau physique  
Gestion des identités et des accès  
Configuration de la sécurité VPC  
Chiffrement des données au repos  
Explication générale  
***Réponse correcte :***

**Sécurité du réseau physique :** AWS est responsable de la protection de l’infrastructure qui exécute tous les services proposés dans le cloud AWS. Cette infrastructure est composée du matériel, des logiciels, du réseau et des installations qui permettent d’exécuter les services cloud AWS.

***Réponses incorrectes :***

**Chiffrement des données au repos** : Il incombe aux clients de protéger leurs données en les chiffrant lorsqu'elles sont stockées.

**Configuration de la sécurité VPC** : Les clients sont responsables de la configuration et de la gestion de la sécurité VPC.

**Gestion des identités et des accès :** le client est responsable de la gestion des identités et des accès pour accéder aux ressources AWS.

***Liens vers les références :***

[https://aws.amazon.com/compliance/shared-responsibility-model](https://aws.amazon.com/compliance/shared-responsibility-model)  
Domaine  
Sécurité et conformité  
Question 26Correct  
Conformément aux bonnes pratiques de sécurité, comment une instance EC2 devrait-elle être autorisée à accéder à un compartiment S3 ?  
Modifiez la politique du compartiment S3 afin que n'importe quel service puisse y accéder à tout moment.  
Stockez la clé secrète et la clé d'accès dans un fichier texte sur l'instance EC2 et lisez-les depuis l'application.  
**Votre réponse est correcte**  
Créez un rôle IAM pour l'instance EC2 afin de lui permettre d'accéder au compartiment S3.  
Intégrez directement dans l'application la clé secrète et la clé d'accès de l'utilisateur IAM, codées en dur.  
Explication générale  
***Réponse correcte :***

**Créez un rôle IAM pour l'instance EC2 afin d'accéder au compartiment S3** : un rôle IAM permet de gérer les informations d'identification temporaires des applications exécutées sur une instance EC2. Grâce à ce rôle, il n'est pas nécessaire de distribuer des informations d'identification permanentes, telles que des clés d'accès, à l'instance EC2. Le rôle fournit des autorisations temporaires que les applications peuvent utiliser pour accéder au compartiment Amazon S3. Lors du lancement d'une instance EC2, vous devez lui associer un rôle IAM. Les applications exécutées sur cette instance peuvent ensuite utiliser ces informations d'identification temporaires pour effectuer des requêtes.

***Réponses incorrectes :***

**Intégrez directement dans l'application la clé secrète et la clé d'accès de l'utilisateur IAM, codées en dur.**

**Stockez la clé secrète et la clé d'accès dans un fichier texte sur l'instance EC2 et lisez-les depuis l'application.**

**Modifiez la politique du compartiment S3 afin que n'importe quel service puisse y accéder à tout moment.**

Toutes les actions mentionnées ci-dessus ne constituent pas de bonnes pratiques.

***Liens vers les références :***

[https://docs.aws.amazon.com/IAM/latest/UserGuide/id\_roles\_use\_switch-role-ec2.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html)  
Domaine  
Concepts du cloud  
Question 27Correct  
Quels sont les avantages de l'utilisation de DynamoDB ? (Sélectionnez trois réponses.)  
**Votre sélection est correcte**  
S'adapte automatiquement à la capacité de débit requise.  
Prend en charge les clés étrangères pour établir des relations avec d'autres éléments de la table.  
**Votre sélection est correcte**  
Offre des performances de lecture rapides avec une latence de l'ordre de la microseconde.  
**Votre sélection est correcte**  
Permet de réaliser des transactions ACID ou de les sauvegarder.  
Prend en charge les modèles de données relationnels et non relationnels.  
Explication générale  
***Réponses correctes :***

**S'adapte automatiquement à la capacité de débit requise**

**Permet de réaliser des transactions ACID ou d'effectuer des sauvegardes.**

**Offre des performances de lecture rapides avec une latence de l'ordre de la microseconde.**

DynamoDB ajuste automatiquement la capacité des tables et prend en charge des pétaoctets de données. Il offre des performances de lecture rapides avec une latence de l'ordre de la microseconde, même pour les tables à grande échelle. Les transactions DynamoDB garantissent également l'atomicité, la cohérence, l'isolation et la durabilité (ACID).

Amazon DynamoDB est un service de base de données NoSQL entièrement géré, offrant des performances rapides et prévisibles ainsi qu'une évolutivité transparente. DynamoDB prend en charge les modèles de données clé-valeur et document. Vous pouvez utiliser Amazon DynamoDB pour créer une table de base de données capable de stocker et de récupérer n'importe quelle quantité de données, et de gérer n'importe quel volume de requêtes. DynamoDB propose une sécurité intégrée, des sauvegardes continues, une réplication multirégionale automatisée, une mise en cache en mémoire et des outils d'exportation de données.

***Réponses incorrectes :***

**Prend en charge les modèles de données relationnels et non relationnels**

**Prend en charge les clés étrangères pour établir des relations avec d'autres éléments de table.**

***Liens vers les références :***

[https://aws.amazon.com/dynamodb/features](https://aws.amazon.com/dynamodb/features)  
Domaine  
Concepts du cloud  
Question 28Correct  
Quel service AWS permet de détecter et d'analyser les visages à partir de millions d'images et de vidéos en quelques minutes ?  
**Votre réponse est correcte**  
Reconnaissance Amazon  
Transcription Amazon  
Amazon Kendra  
Amazon Polly  
Explication générale  
***Réponse correcte :***

**Amazon Rekognition** : Amazon Rekognition vous permet d'automatiser l'analyse de millions d'images et de vidéos en quelques minutes et d'optimiser les tâches d'analyse visuelle humaine grâce à l'intelligence artificielle (IA). Rekognition Image est un service de reconnaissance d'images qui détecte les objets, les scènes et les visages ; extrait le texte ; reconnaît les célébrités ; et identifie les contenus inappropriés dans les images. Il vous permet également de rechercher et de comparer des visages. Rekognition Video détecte les personnes et les suit dans la vidéo, détecte les activités, reconnaît les objets, les célébrités ou les vidéos en direct, et vous aide à les analyser.

***Réponses incorrectes :***

**Amazon Polly** : Amazon Polly est un service qui transforme du texte en parole naturelle, vous permettant de créer des applications vocales et de développer de nouvelles catégories de produits à commande vocale. Grâce à des dizaines de voix réalistes disponibles dans de nombreuses langues, vous pouvez créer des applications vocales compatibles avec de nombreux pays.

**Amazon Transcribe :** Amazon Transcribe est un service de reconnaissance vocale automatique qui convertit l’audio en texte. Grâce à l’API Amazon Transcribe, vous pouvez analyser des fichiers audio et obtenir un fichier texte contenant la transcription. Vous pouvez également envoyer un flux audio en direct à Amazon Transcribe et recevoir un flux de transcriptions en temps réel.

**Amazon Kendra** : Amazon Kendra est un service de recherche d'entreprise très précis et facile à utiliser, basé sur l'apprentissage automatique (ML). Il permet aux développeurs d'intégrer des fonctionnalités de recherche à leurs applications afin que leurs utilisateurs finaux puissent accéder aux informations stockées dans la masse de contenus répartis au sein de leur entreprise. Ces contenus incluent les manuels, les rapports de recherche, les FAQ, la documentation RH et les guides du service client, qui peuvent se trouver dans différents systèmes tels qu'Amazon Simple Storage Service (S3), Microsoft SharePoint, Salesforce, ServiceNow, les bases de données RDS ou Microsoft OneDrive. Lorsque vous saisissez une question, le service utilise des algorithmes d'apprentissage automatique pour comprendre le contexte et renvoyer les résultats les plus pertinents, qu'il s'agisse d'une réponse précise ou d'un document complet.

***Liens vers les références :***

[https://aws.amazon.com/rekognition](https://aws.amazon.com/rekognition)  
Domaine  
Technologie  
Question 29Correct  
Dans le modèle de responsabilité partagée, quelle est la responsabilité d'AWS ?  
**Votre réponse est correcte**  
Configuration de l'infrastructure réseau  
Configuration du groupe de sécurité  
Chiffrement côté serveur  
Mise à jour des systèmes d'exploitation  
Explication générale  
***Réponse correcte :***

**Configuration de l'infrastructure réseau** : AWS est responsable de la protection de l'infrastructure qui exécute tous les services proposés dans le cloud AWS. Cette infrastructure est composée du matériel, des logiciels, du réseau et des installations nécessaires au fonctionnement des services cloud AWS.

***Réponses incorrectes :***

**Chiffrement côté serveur** : les clients AWS sont responsables du chiffrement côté client et côté serveur. Cependant, pour certains services AWS entièrement gérés, comme Amazon DynamoDB, le chiffrement côté serveur est effectué automatiquement par AWS.

**Configuration du groupe de sécurité** : Il incombe aux clients de sécuriser le trafic entrant et sortant du VPC.

**Mise à jour des systèmes d'exploitation** : Il incombe aux clients d'appliquer les correctifs, notamment aux systèmes d'exploitation, aux applications et aux systèmes embarqués.

***Liens vers les références :***

[https://aws.amazon.com/compliance/shared-responsibility-model](https://aws.amazon.com/compliance/shared-responsibility-model)  
Domaine  
Sécurité et conformité  
Question 30Correct  
Quel service AWS recommande de suivre les bonnes pratiques pour améliorer la sécurité et les performances ?  
Amazon CloudWatch  
**Votre réponse est correcte**  
Conseiller de confiance AWS  
AWS CloudTrail  
Artefact AWS  
Explication générale  
***Réponse correcte :***

**AWS Trusted Advisor** : AWS Trusted Advisors vous fournit des recommandations pour vous aider à suivre les bonnes pratiques AWS. Trusted Advisor évalue votre compte à l’aide de contrôles. Ces contrôles identifient les moyens d’optimiser votre infrastructure AWS, d’améliorer la sécurité et les performances, de réduire les coûts et de surveiller les quotas de service. Vous pouvez ensuite suivre les recommandations issues de ces contrôles pour optimiser vos services et vos ressources.

Trusted Advisor peut vous aider à réduire vos coûts, par exemple en vous recommandant de supprimer les ressources inutilisées ou inactives, ou d'utiliser la capacité réservée.

***Réponses incorrectes :***

**AWS CloudWatch** : Amazon CloudWatch est un service de surveillance qui vous fournit des données et des informations exploitables pour surveiller vos applications, réagir aux variations de performances du système et optimiser l'utilisation des ressources. CloudWatch collecte des données de surveillance et d'exploitation sous forme de journaux, de métriques et d'événements. Vous bénéficiez ainsi d'une vue unifiée de l'état opérationnel et d'une visibilité complète sur vos ressources, applications et services AWS exécutés sur AWS et sur site. Avec CloudWatch, vous pouvez détecter les comportements anormaux dans vos environnements, configurer des alarmes, visualiser les journaux et les métriques côte à côte, automatiser des actions, résoudre les problèmes et obtenir des informations précieuses pour garantir le bon fonctionnement de vos applications.

**AWS CloudTrail** : AWS CloudTrail surveille et enregistre l'activité de vos comptes sur l'ensemble de votre infrastructure AWS, vous offrant ainsi un contrôle total sur le stockage, l'analyse et les actions correctives. CloudTrail fournit l'historique des événements de vos comptes AWS. Les événements CloudTrail vous aident à répondre aux questions « Qui a fait quoi, où et quand ? ». Par exemple, si votre compartiment S3 a été supprimé par erreur, vous pouvez utiliser AWS CloudTrail pour voir qui l'a supprimé, quand et où (via un appel d'API ou depuis la console de gestion AWS).

**AWS Artifact** est un portail en libre-service de récupération d'artefacts d'audit qui permet d'accéder à la demande aux rapports de sécurité et de conformité d'AWS, ainsi qu'à certains accords en ligne. Vous pouvez utiliser AWS Artifact Reports pour consulter et télécharger les documents de sécurité et de conformité AWS, tels que les certifications ISO, les rapports PCI DSS et SOC. AWS Artifact Agreements vous permet de consulter, d'accepter et de suivre l'état des accords AWS, comme l'avenant de partenariat (BAA).

***Liens vers les références :***

[https://aws.amazon.com/premiumsupport/technology/trusted-advisor](https://aws.amazon.com/premiumsupport/technology/trusted-advisor)  
Domaine  
Sécurité et conformité  
Question 31Correct  
Une entreprise possède une application de microservices de grande envergure exécutée sur plus de 50 instances EC2. Le PDG souhaite un service automatisé qui analyse en continu (24h/24 et 7j/7) les vulnérabilités logicielles et les expositions réseau non intentionnelles. En tant que spécialiste du cloud, quel service recommanderiez-vous ?  
Bouclier AWS  
AWS CloudWatch  
AWS CloudTrail  
**Votre réponse est correcte**  
Inspecteur Amazon  
Explication générale  
***Réponse correcte :***

**Amazon Inspector** : Amazon Inspector est un service automatisé de gestion des vulnérabilités qui analyse en continu les charges de travail AWS afin de détecter les vulnérabilités logicielles et les expositions réseau non intentionnelles. Amazon Inspector fournit un service d'évaluation de la sécurité qui contribue à améliorer la sécurité et la conformité des applications déployées sur AWS. Amazon Inspector évalue automatiquement les applications afin de détecter les expositions, les vulnérabilités et les écarts par rapport aux bonnes pratiques. Après avoir effectué une évaluation, Amazon Inspector génère une liste détaillée des résultats de sécurité, classés par ordre de gravité. Ces résultats peuvent être consultés directement ou dans le cadre de rapports d'évaluation détaillés, disponibles via la console Amazon Inspector ou son API.

***Réponses incorrectes :***

**AWS Shield** : AWS Shield est un service de protection contre les attaques par déni de service distribué (DDoS) géré qui protège les applications exécutées sur AWS. AWS Shield assure une détection continue et des mesures d'atténuation automatiques afin de minimiser les interruptions de service et la latence des applications. AWS Shield propose deux niveaux : Standard et Avancé.

AWS Shield Standard protège votre site web et vos applications contre la plupart des attaques DDoS courantes et fréquentes ciblant les couches réseau et transport. En combinant AWS Shield Standard avec Amazon CloudFront et Amazon Route 53, vous bénéficiez d'une protection complète de la disponibilité contre toutes les attaques connues ciblant l'infrastructure (couches 3 et 4). AWS Shield Advanced offre une détection et une atténuation supplémentaires contre les attaques DDoS de grande envergure et sophistiquées, une visibilité quasi temps réel sur les attaques et une intégration avec AWS WAF, un pare-feu d'applications web.

**Amazon CloudWatch** : Amazon CloudWatch est un service de surveillance qui vous fournit des données et des informations exploitables pour surveiller vos applications, réagir aux variations de performances du système et optimiser l'utilisation des ressources. CloudWatch collecte des données de surveillance et d'exploitation sous forme de journaux, de métriques et d'événements. Vous bénéficiez ainsi d'une vue unifiée de l'état opérationnel et d'une visibilité complète sur vos ressources AWS, vos applications et vos services exécutés sur AWS et sur site. Avec CloudWatch, vous pouvez détecter les comportements anormaux dans vos environnements, configurer des alarmes, visualiser les journaux et les métriques côte à côte, automatiser des actions, résoudre les problèmes et obtenir des informations précieuses pour garantir le bon fonctionnement de vos applications.

**AWS CloudTrail** : AWS CloudTrail surveille et enregistre l'activité de vos comptes sur l'ensemble de votre infrastructure AWS, vous offrant ainsi un contrôle total sur le stockage, l'analyse et les actions correctives. Avec CloudTrail, vous pouvez consigner, surveiller en continu et conserver l'activité de vos comptes liée aux actions effectuées sur votre infrastructure AWS. CloudTrail fournit l'historique des événements de vos comptes AWS. Les événements CloudTrail vous aident à répondre aux questions « Qui a fait quoi, où et quand ? ». Par exemple, si votre compartiment S3 a été supprimé par erreur, vous pouvez utiliser AWS CloudTrail pour voir qui l'a supprimé, quand et où (par exemple, via un appel d'API ou depuis la console de gestion AWS).

***Liens vers les références :***

[https://aws.amazon.com/inspector](https://aws.amazon.com/inspector)  
Domaine  
Technologie  
Question 32Incorrect  
Parmi les propositions suivantes, lesquelles constituent des avantages des services gérés AWS ? (Sélectionnez deux réponses)  
Fourniture de services de niveau entreprise libre  
**Sélection correcte**  
Sécurité renforcée alignée sur vos contrôles  
**Votre sélection est incorrecte**  
Données automatiquement cryptées au repos  
**Votre sélection est correcte**  
Réduction des coûts opérationnels de maintenance  
Renforcement du contrôle des infrastructures au plus haut niveau  
Explication générale  
***Réponses correctes :***

**Sécurité renforcée alignée sur vos contrôles** : AWS Managed Services (AMS) crée et maintient un référentiel évolutif de garde-fous de conformité, opérationnels et de sécurité qui vous aident à rester en conformité avec vos contrôles. AMS réduit la charge liée au respect des exigences des programmes de conformité (HIPAA, HITRUST, RGPD, SOC, NIST, ISO, PCI, FedRAMP) grâce à la détection et à la correction automatisées.

**Réduction des coûts opérationnels de maintenance** : AWS Managed Services (AMS) contribue à l’optimisation financière de votre infrastructure AWS. Les économies réalisées diminuent vos frais AMS sans impacter vos résultats opérationnels. Nos clients ont bénéficié de jusqu’à 30 % d’économies opérationnelles et jusqu’à 25 % d’économies sur leur infrastructure AWS. Payez uniquement ce que vous utilisez et reprenez le contrôle de vos opérations quand vous le souhaitez.

***Réponses incorrectes :***

**Contrôle accru de l'infrastructure** : Pour les services gérés, AWS prend en charge l'infrastructure de base (système d'exploitation, plateforme, logiciels et réseau physique). Vous n'avez donc pas accès à l'infrastructure sous-jacente.

**Assistance gratuite de niveau entreprise** : L’assistance AWS Enterprise est payante.

**Données chiffrées automatiquement au repos** : AWS ne fournit pas de sécurité automatique pour les données au repos de ses clients. Vous devez donc activer le chiffrement pour protéger vos données sensibles.

***Liens vers les références :***

[https://aws.amazon.com/managed-services](https://aws.amazon.com/managed-services)

[https://aws.amazon.com/es/premiumsupport/plans/enterprise/](https://aws.amazon.com/es/premiumsupport/plans/enterprise/)  
Domaine  
Concepts du cloud  
Question 33Correct  
Pourquoi les services sans serveur sont-ils plus rentables que les services basés sur un serveur ?  
Les fonctionnalités Serverless s'adaptent automatiquement à la hausse ou à la baisse  
**Votre réponse est correcte**  
Cette ressource n'est utilisée que lorsque le code est exécuté.  
Serverless est un service global pour les hautes performances  
La mise en cache a été appliquée automatiquement pour une faible latence.  
Explication générale  
***Réponse correcte :***

**La ressource n'est utilisée que lors de l'exécution du code** : AWS propose des technologies pour exécuter du code, gérer des données et intégrer des applications, le tout sans gestion de serveurs. Grâce aux services sans serveur, vous réduisez vos coûts car vous ne payez que lorsque votre application ne reçoit pas de trafic. Par exemple, si vous utilisez des serveurs sur site ou des instances EC2, vous n'utilisez probablement pas 100 % de la capacité de calcul en permanence. De nombreux clients n'utilisent que 10 à 20 % de la capacité disponible de leur parc EC2 à un instant donné. Cette moyenne est également influencée par les exigences de haute disponibilité et de reprise après sinistre, qui entraînent généralement l'inactivité des serveurs en attente de trafic suite à des basculements. Avec le modèle de calcul à la demande AWS Lambda, vous payez par requête et en fonction de la durée. De plus, les architectures sans serveur peuvent réduire le coût total de possession (TCO) car de nombreuses tâches de gestion du réseau, de la sécurité et des opérations DevOps sont incluses dans le coût du service.

***Réponses incorrectes :***

**Les services sans serveur prennent en charge la mise à l'échelle automatique des fonctionnalités** : les services sans serveur et les services basés sur serveur prennent tous deux en charge la mise à l'échelle des fonctionnalités. Pour les services sans serveur, AWS gère la mise à l'échelle.

**Le sans serveur est un service global à hautes performances** : tous les services sans serveur n’offrent pas un service global.

**La mise en cache est activée automatiquement pour une faible latence** : pour la mise en cache, vous devriez envisager Amazon CloudFront.

***Liens vers les références :***

[https://aws.amazon.com/serverless](https://aws.amazon.com/serverless)  
Domaine  
Concepts du cloud  
Question 34Correct  
Quel service AWS vous aide à identifier qui a mis fin à une instance EC2 à l'aide de requêtes API ?  
**Votre réponse est correcte**  
AWS CloudTrail  
Gestion des identités et des accès AWS (IAM)  
Amazon CloudWatch  
AWS X-Ray  
Explication générale  
***Réponse correcte :***

**AWS CloudTrail** : AWS CloudTrail surveille et enregistre l'activité de vos comptes sur l'ensemble de votre infrastructure AWS, vous offrant ainsi un contrôle total sur le stockage, l'analyse et les actions correctives. CloudTrail fournit l'historique des événements de vos comptes AWS. Les événements CloudTrail vous aident à répondre aux questions « Qui a fait quoi, où et quand ? ». Par exemple, si votre compartiment S3 a été supprimé par erreur, vous pouvez utiliser AWS CloudTrail pour voir qui l'a supprimé, quand et où (via un appel d'API ou depuis la console de gestion AWS).

***Réponses incorrectes :***

**AWS CloudWatch** : Amazon CloudWatch est un service de surveillance qui vous fournit des données et des informations exploitables pour surveiller vos applications, réagir aux variations de performances du système et optimiser l'utilisation des ressources. CloudWatch collecte des données de surveillance et d'exploitation sous forme de journaux, de métriques et d'événements. Vous bénéficiez ainsi d'une vue unifiée de l'état opérationnel et d'une visibilité complète sur vos ressources, applications et services AWS exécutés sur AWS et sur site. Avec CloudWatch, vous pouvez détecter les comportements anormaux dans vos environnements, configurer des alarmes, visualiser les journaux et les métriques côte à côte, automatiser des actions, résoudre les problèmes et obtenir des informations précieuses pour garantir le bon fonctionnement de vos applications.

**AWS X-Ray** : AWS X-Ray aide les développeurs à analyser et à déboguer les applications distribuées en production, notamment celles construites avec une architecture de microservices. Grâce à X-Ray, vous pouvez comprendre les performances de votre application et de ses services sous-jacents afin d'identifier et de résoudre la cause première des problèmes de performance et des erreurs. X-Ray offre une vue de bout en bout des requêtes tout au long de leur parcours dans votre application et affiche une représentation graphique de ses composants sous-jacents. Vous pouvez utiliser X-Ray pour analyser les applications en développement et en production, des applications simples à trois niveaux aux applications complexes de microservices composées de milliers de services.

**AWS Identity and Access Management (IAM)** : AWS Identity and Access Management (IAM) vous permet de contrôler l’accès à l’ensemble des ressources AWS. Vous pouvez créer et gérer les autorisations AWS pour les utilisateurs et les groupes.

***Liens vers les références :***

[https://aws.amazon.com/cloudtrail](https://aws.amazon.com/cloudtrail)  
Domaine  
Technologie  
Question 35Incorrect  
Quelle fonctionnalité garantit qu'Amazon EC2 peut toujours gérer n'importe quel volume de trafic entrant ?  
**Votre réponse est incorrecte**  
Équilibreur de charge d'application  
Politique IAM  
Politique de routage  
**Bonne réponse**  
Mise à l'échelle automatique  
Explication générale  
***Réponses correctes :***

**Mise à l'échelle automatique** : AWS Auto Scaling surveille vos applications et ajuste automatiquement la capacité pour garantir des performances stables et prévisibles au moindre coût. AWS Auto Scaling vous aide à optimiser l'utilisation de vos services AWS et à réduire vos coûts, vous permettant ainsi de ne payer que pour les ressources dont vous avez réellement besoin. En cas de baisse de la demande, AWS Auto Scaling supprime automatiquement les ressources excédentaires afin d'éviter les dépenses excessives. AWS Auto Scaling est gratuit et vous permet d'optimiser les coûts de votre environnement AWS.

***Réponses incorrectes :***

**Stratégies IAM** : Vous gérez les accès à AWS en créant des stratégies et en les associant à des identités IAM (utilisateurs, groupes d’utilisateurs ou rôles) ou à des ressources AWS. Une stratégie est un objet AWS qui, lorsqu’il est associé à une identité ou à une ressource, définit ses autorisations. AWS évalue ces stratégies lorsqu’un principal IAM (utilisateur ou rôle) effectue une requête.

**Politique de routage** : La politique de routage d’AWS Route 53 est une règle qui détermine le service par lequel la requête doit transiter et comment répondre aux requêtes DNS. Elle n’affecte pas la capacité de calcul.

**Elastic Load Balancing (ELB)** : ELB répartit automatiquement le trafic entrant sur plusieurs cibles, telles que des instances EC2, des conteneurs et des adresses IP, dans une ou plusieurs zones de disponibilité. Il surveille l’état de ses cibles enregistrées et achemine le trafic uniquement vers les cibles opérationnelles. Elastic Load Balancing ne permet pas d’augmenter la capacité de calcul.

***Liens vers les références :***

[https://aws.amazon.com/ec2/autoscaling](https://aws.amazon.com/ec2/autoscaling)

[https://aws.amazon.com/autoscaling](https://aws.amazon.com/autoscaling)

[https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html)  
Domaine  
Concepts du cloud  
Question 36Correct  
Avant de déployer votre infrastructure informatique dans le cloud AWS, vous souhaitez obtenir une estimation de votre facture mensuelle AWS en fonction des services choisis. Quel service devez-vous opter ?  
Facturation AWS  
Budgets AWS  
AWS Cost Explorer  
**Votre réponse est correcte**  
Calculateur mensuel simple AWS  
Explication générale  
***Réponse correcte :***

**Calculateur mensuel simplifié AWS** : Le calculateur mensuel simplifié AWS vous permet d’estimer le coût mensuel des services AWS pour votre cas d’utilisation, en fonction de votre consommation prévue. Il est mis à jour en continu avec les tarifs les plus récents pour tous les services AWS dans toutes les régions.

***Réponses incorrectes :***

**Budgets AWS** : Budgets AWS est la solution la plus simple pour contrôler vos dépenses AWS et recevoir des alertes en cas de dépassement de votre limite budgétaire. Vous pouvez définir des budgets personnalisés pour suivre vos coûts et votre utilisation, des cas d'utilisation les plus simples aux plus complexes. Avec Budgets AWS, vous pouvez choisir d'être alerté par e-mail ou via les réseaux sociaux lorsque les coûts et l'utilisation réels ou prévus dépassent votre seuil budgétaire, ou lorsque l'utilisation ou la couverture réelle de vos instances réservées et de vos plans d'économies passe en dessous du seuil souhaité.

**AWS Cost Explorer** : AWS Cost Explorer possède une interface conviviale qui vous permet de visualiser, comprendre et gérer vos coûts et votre utilisation AWS, que ce soit quotidiennement ou mensuellement. Un rapport par défaut vous aide à visualiser les coûts et l'utilisation associés à vos cinq principaux services AWS et vous fournit une ventilation détaillée de tous les services dans un tableau. Les rapports vous permettent d'ajuster la période pour consulter l'historique des données jusqu'à douze mois et ainsi analyser l'évolution de vos coûts. Vous pouvez également affiner votre analyse grâce à des filtres et des regroupements précis, tels que le type d'utilisation et les balises.

**Facturation AWS** : La console de facturation AWS vous permet de suivre facilement vos dépenses AWS, de consulter et de payer vos factures, de gérer vos préférences de facturation et vos paramètres fiscaux, et d’accéder à des services supplémentaires de gestion financière du cloud. Évaluez rapidement si vos dépenses mensuelles sont conformes aux périodes précédentes, aux prévisions ou à votre budget, et prenez les mesures correctives nécessaires sans tarder.

***Liens vers les références :***

[https://calculator.s3.amazonaws.com/index.html](https://calculator.s3.amazonaws.com/index.html)  
Domaine  
Facturation et tarification  
Question 37Correct  
Selon le modèle de responsabilité partagée d'AWS, quelles sont les responsabilités du client ? (Sélectionnez deux réponses.)  
**Votre sélection est correcte**  
Activation du chiffrement des données stockées dans les compartiments S3  
Mise à jour de l'infrastructure matérielle sous-jacente  
**Votre sélection est correcte**  
Installation et configuration de logiciels tiers sur une instance EC2  
Configuration de la sécurité du réseau mondial AWS  
Correctifs et mises à jour du système d'exploitation des bases de données gérées  
Explication générale  
***Réponse correcte :***

**Activation du chiffrement des données stockées dans les compartiments S3** : Dans le modèle de responsabilité partagée, les clients sont responsables de la gestion de leurs données (y compris les options de chiffrement), de la classification de leurs actifs et de l'utilisation des outils IAM pour appliquer les autorisations appropriées.

**Installation et configuration de logiciels tiers sur une instance EC2** : La sécurité dans le cloud est de la responsabilité du client. EC2 est un service d’infrastructure en tant que service (IaaS) basé sur le cloud computing et offre aux clients un niveau élevé d’accès et de contrôle. Cela signifie que les clients sont responsables de la gestion et de la mise à jour du système d’exploitation, de la sécurisation de l’accès aux applications et aux données, ainsi que de l’installation et de la configuration des applications tierces.

***Réponses incorrectes :***

**Configuration de la sécurité du réseau mondial AWS** : La configuration de l’infrastructure cloud est la responsabilité d’AWS.

**Mise à jour de l'infrastructure matérielle sous-jacente** : AWS est responsable de la gestion de l'infrastructure matérielle sous-jacente.

**Mises à jour et correctifs du système d'exploitation des bases de données gérées** : AWS prend en charge les mises à jour et les correctifs du système d'exploitation des bases de données gérées, telles qu'Amazon RDS et Amazon DynamoDB.

***Liens vers les références :***

[https://aws.amazon.com/compliance/shared-responsibility-model](https://aws.amazon.com/compliance/shared-responsibility-model)  
Domaine  
Sécurité et conformité  
Question 38Correct  
Qu'est-ce que la fonctionnalité IAM qui ajoute une couche de sécurité supplémentaire par rapport au nom d'utilisateur et au mot de passe ?  
Clé d'accès  
Rôle  
Politique  
**Votre réponse est correcte**  
MFA  
Explication générale  
***Réponse correcte :***

**Authentification multifacteur AWS (MFA)** : L’authentification multifacteur AWS (MFA) est une bonne pratique qui ajoute une couche de protection supplémentaire à votre nom d’utilisateur et à votre mot de passe. Lorsque la MFA est activée, lorsqu’un utilisateur se connecte à une console de gestion AWS, il lui est demandé son nom d’utilisateur et son mot de passe (premier facteur : ce qu’il connaît), ainsi qu’un code d’authentification généré par son dispositif AWS MFA (deuxième facteur : ce qu’il possède). Ensemble, ces plusieurs facteurs renforcent la sécurité des paramètres et des ressources de votre compte AWS.

***Réponses incorrectes :***

**Clé d'accès** : Les clés d'accès sont des informations d'identification permanentes pour un utilisateur IAM ou l'utilisateur racine du compte AWS. Elles permettent de signer des requêtes programmatiques adressées à l'interface de ligne de commande AWS (AWS CLI) ou à l'API AWS (directement ou via le kit de développement logiciel AWS \[SDK\]). Lors de la création d'une paire de clés d'accès, il est impératif de conserver l'ID de clé d'accès et la clé d'accès secrète dans un emplacement sécurisé. La clé d'accès secrète n'est disponible que pendant sa création. En cas de perte, il est nécessaire de supprimer la clé d'accès et d'en créer une nouvelle.

**Politiques** : Vous gérez les accès à AWS en créant des politiques et en les associant à des identités IAM (utilisateurs, groupes d’utilisateurs ou rôles) ou à des ressources AWS. Une politique est un objet AWS qui, lorsqu’il est associé à une identité ou à une ressource, définit ses autorisations. AWS évalue ces politiques lorsqu’un principal IAM (utilisateur ou rôle) effectue une requête.

**Rôle :** Un rôle IAM est similaire à un utilisateur IAM : il s’agit d’une identité AWS dotée de politiques d’autorisation qui déterminent les actions possibles et interdites à cette identité dans AWS. Vous pouvez utiliser des rôles pour déléguer l’accès à des utilisateurs, des applications ou des services qui n’ont normalement pas accès à vos ressources AWS. Par exemple, si vous souhaitez autoriser une instance EC2 à accéder à d’autres ressources AWS, vous pouvez utiliser un rôle pour lui attribuer les autorisations nécessaires.

***Liens vers les références :***

[https://aws.amazon.com/iam/features/mfa](https://aws.amazon.com/iam/features/mfa)

[https://docs.aws.amazon.com/IAM/latest/UserGuide/id\_credentials\_mfa.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html)  
Domaine  
Sécurité et conformité  
Question 39Correct  
Quel service AWS permet de surveiller les charges de travail AWS afin de détecter les vulnérabilités logicielles ?  
**Votre réponse est correcte**  
Inspecteur Amazon  
Amazon CloudWatch  
Amazon ECS  
AWS CloudFormation  
Explication générale  
***Réponse correcte :***

**Amazon Inspector** : Amazon Inspector est un service automatisé de gestion des vulnérabilités qui analyse en continu les charges de travail AWS afin de détecter les vulnérabilités logicielles et vous aide à améliorer la sécurité et la conformité des applications déployées sur AWS. Amazon Inspector évalue automatiquement les applications en fonction de leur exposition, de leurs vulnérabilités et des écarts par rapport aux bonnes pratiques. Après une évaluation, Amazon Inspector génère une liste détaillée des anomalies de sécurité, classées par ordre de gravité. Ces anomalies peuvent être consultées directement ou dans le cadre de rapports d'évaluation détaillés, disponibles via la console ou l'API d'Amazon Inspector.

***Réponses incorrectes :***

**AWS CloudFormation** : AWS CloudFormation vous permet de modéliser facilement un ensemble de ressources AWS et tierces liées, de les provisionner rapidement et de manière cohérente, et de les gérer tout au long de leur cycle de vie, en traitant l'infrastructure comme du code. Un modèle CloudFormation décrit vos ressources et leurs dépendances afin que vous puissiez les déployer et les configurer ensemble sous forme de pile. Vous pouvez utiliser un modèle pour créer, mettre à jour et supprimer une pile entière comme une seule unité, aussi souvent que nécessaire, au lieu de gérer les ressources individuellement. Vous pouvez gérer et provisionner des piles sur plusieurs comptes AWS et régions AWS.

**Amazon ECS** : Amazon Elastic Container Service (Amazon ECS) est un service de gestion de conteneurs hautement évolutif et rapide qui simplifie l'exécution, l'arrêt et la gestion des conteneurs Docker sur un cluster. Amazon ECS facilite l'utilisation des conteneurs comme composant de base de vos applications en vous dispensant d'installer, d'exploiter et de faire évoluer votre propre infrastructure de gestion de cluster.

**AWS CloudWatch** : Amazon CloudWatch est un service de surveillance qui vous fournit des données et des informations exploitables pour surveiller vos applications, réagir aux variations de performances du système et optimiser l'utilisation des ressources. CloudWatch collecte des données de surveillance et d'exploitation sous forme de journaux, de métriques et d'événements. Vous bénéficiez ainsi d'une vue unifiée de l'état opérationnel et d'une visibilité complète sur vos ressources, applications et services AWS exécutés sur AWS et sur site. Avec CloudWatch, vous pouvez détecter les comportements anormaux dans vos environnements, configurer des alarmes, visualiser les journaux et les métriques côte à côte, automatiser des actions, résoudre les problèmes et obtenir des informations précieuses pour garantir le bon fonctionnement de vos applications.

***Liens vers les références :***

[https://aws.amazon.com/inspector](https://aws.amazon.com/inspector)  
Domaine  
Sécurité et conformité  
Question 40Incorrect  
Quel service AWS redirige le trafic utilisateur vers le point de terminaison optimal afin d'améliorer la disponibilité et les performances globales des applications ?  
Amazon CloudFront  
**Votre réponse est incorrecte**  
Route 53 d'Amazon  
AWS Direct Connect  
**Bonne réponse**  
Accélérateur mondial AWS  
Explication générale  
***Réponse correcte :***

**AWS Global Accelerator** : AWS Global Accelerator est un service réseau qui vous aide à améliorer la disponibilité et les performances des applications que vous proposez à vos utilisateurs du monde entier. AWS Global Accelerator est facile à installer, à configurer et à gérer. Il fournit des adresses IP statiques qui offrent un point d'entrée fixe à vos applications et éliminent la complexité liée à la gestion d'adresses IP spécifiques pour différentes régions et zones de disponibilité AWS. AWS Global Accelerator achemine en permanence le trafic utilisateur vers le point de terminaison optimal en fonction des performances, réagissant instantanément aux changements d'état de l'application, à la localisation de vos utilisateurs et aux politiques que vous avez configurées.

***Réponses incorrectes :***

**AWS Direct Connect** : AWS Direct Connect n'utilise pas Internet ; il repose sur des connexions réseau privées et dédiées entre votre intranet et Amazon VPC. Grâce à AWS Direct Connect, vous pouvez établir une connectivité privée entre AWS et votre centre de données, vos bureaux ou votre environnement de colocation. Cette connexion dédiée s'effectue via un câble Ethernet fibre optique standard de 1 Gb/s ou 10 Gb/s, dont une extrémité est connectée à votre routeur et l'autre à un routeur AWS Direct Connect.

**Amazon Route 53 :** Amazon Route 53 est un service web de système de noms de domaine (DNS) cloud hautement disponible et évolutif. Il est conçu pour offrir aux développeurs et aux entreprises une solution extrêmement fiable et économique pour acheminer les utilisateurs finaux vers des applications Internet en traduisant les noms de domaine tels que www.example.com en adresses IP numériques, comme 192.0.2.1, utilisées par les ordinateurs pour communiquer entre eux. Amazon Route 53 est également entièrement compatible avec IPv6.

**Amazon CloudFront** : Amazon CloudFront est un service de réseau de diffusion de contenu (CDN) mondial conçu pour offrir des performances optimales en termes de vitesse et de faible latence, une sécurité renforcée et une grande facilité d'utilisation pour les développeurs. Il fournit un réseau mondial de serveurs proxy qui mettent en cache le contenu, comme les vidéos web ou autres fichiers multimédias volumineux, au plus près des utilisateurs, améliorant ainsi la vitesse d'accès et le téléchargement du contenu.

***Liens vers les références :***

[https://aws.amazon.com/global-accelerator](https://aws.amazon.com/global-accelerator)  
Domaine  
Concepts du cloud  
Question 41Correct  
Une entreprise souhaite développer une application qui nécessite l'envoi, le stockage et la réception de messages entre ses composants selon un processus de livraison premier entré, premier sorti (FIFO). Quel service AWS doit-elle utiliser ?  
AWS Step Functions  
**Votre réponse est correcte**  
Amazon SQS  
Amazon SNS  
Flux de données Amazon Kinesis  
Explication générale  
***Réponse correcte :***

**Amazon SQS** : Amazon Simple Queue Service (SQS) est un service de file d'attente de messages entièrement géré qui vous permet de découpler et de faire évoluer les microservices, les systèmes distribués et les applications sans serveur. Avec SQS, vous pouvez envoyer, stocker et recevoir des messages entre composants logiciels, quel que soit leur volume, sans perte de messages ni besoin de services supplémentaires.

SQS propose deux types de files d'attente de messages. Les files d'attente standard offrent un débit maximal, un tri au mieux et une livraison au moins une fois. Les files d'attente FIFO de SQS sont conçues pour garantir que les messages sont traités une seule fois, dans l'ordre exact de leur envoi.

***Réponses incorrectes :***

**AWS Step Functions** : AWS Step Functions est un service de workflow visuel et à faible code permettant aux développeurs de créer des applications distribuées, d'automatiser les processus informatiques et métiers, et de concevoir des pipelines de données et d'apprentissage automatique à l'aide des services AWS. Les workflows gèrent les échecs, les nouvelles tentatives, la parallélisation, les intégrations de services et l'observabilité, permettant ainsi aux développeurs de se concentrer sur les aspects métiers à plus forte valeur ajoutée.

**Amazon** Simple Notification Service (Amazon SNS) est un service de messagerie entièrement géré pour les communications entre applications (A2A) et entre applications et utilisateurs (A2P). Il offre des fonctionnalités permettant l'envoi de messages à haut débit, de type push, entre systèmes distribués, microservices et applications sans serveur événementielles. Amazon SNS vous permet d'envoyer des notifications directement à vos clients. Il prend en charge l'envoi de SMS vers plus de 200 pays, les notifications push mobiles vers Amazon, Android, Apple et d'autres appareils, ainsi que les notifications par e-mail.

**Amazon Kinesis Data Streams** : Avec Amazon Kinesis Data Streams, vous pouvez créer des applications personnalisées qui traitent ou analysent des données en flux continu pour répondre à des besoins spécifiques. Vous pouvez ajouter différents types de données, comme des flux de clics, des journaux d'applications et des données de réseaux sociaux, à un flux de données Kinesis provenant de centaines de milliers de sources. En quelques secondes, les données seront disponibles pour que vos applications puissent les lire et les traiter directement depuis le flux.

***Liens vers les références :***

[https://aws.amazon.com/sqs](https://aws.amazon.com/sqs)  
Domaine  
Technologie  
Question 42Correct  
Quel service de stockage vous permet de vous connecter à des instances EC2 en utilisant le protocole NFS (Network File System) ?  
**Votre réponse est correcte**  
Amazon EFS  
Amazon S3  
Passerelle de stockage AWS  
Amazon EBS  
Explication générale  
***Réponse correcte :***

**Amazon EFS :** Amazon Elastic File System (Amazon EFS) est un service de stockage cloud fourni par Amazon Web Services. Il offre un stockage de fichiers évolutif, élastique et chiffré, utilisable aussi bien avec les services cloud AWS qu'avec les ressources sur site. Un système de fichiers Amazon EFS est idéal comme système de fichiers réseau géré et partageable entre différentes instances Amazon EC2. Fonctionnant comme un périphérique NAS, Amazon EFS est particulièrement performant pour l'analyse de données massives, les flux de travail de traitement multimédia et la gestion de contenu.

Vous montez un système de fichiers Amazon EFS sur votre serveur Linux local ou dans le cloud à l'aide de la commande Linux standard mount pour monter un système de fichiers utilisant le protocole Network File System (NFS) v4.1.

***Réponses incorrectes :***

**Amazon S3** : Amazon Simple Storage Service (Amazon S3) est un service de stockage d'objets conçu pour stocker n'importe quelle quantité de données. Étant un service sans serveur, il ne propose aucune réservation préalable.

**AWS Storage Gateway** : AWS Storage Gateway est un service de stockage cloud hybride qui vous offre un accès local à un espace de stockage cloud quasi illimité. Les clients utilisent Storage Gateway pour simplifier la gestion du stockage et réduire les coûts des principaux cas d'usage de stockage cloud hybride. Il s'agit notamment du transfert des sauvegardes vers le cloud, de l'utilisation de partages de fichiers locaux s'appuyant sur le stockage cloud et de l'accès à faible latence aux données AWS pour les applications locales.

**Amazon EBS** : Amazon Elastic Block Store (Amazon EBS) fournit des volumes de stockage au niveau bloc pour les instances EC2. Les volumes EBS se comportent comme des périphériques de stockage par blocs bruts et non formatés. Vous pouvez les monter comme des périphériques sur vos instances. AWS recommande Amazon EBS pour les données qui doivent être rapidement accessibles et nécessitent une persistance à long terme. Les volumes EBS sont particulièrement adaptés au stockage principal des systèmes de fichiers, des bases de données ou de toute application nécessitant des mises à jour précises et un accès à un stockage au niveau bloc brut et non formaté.

***Liens vers les références :***

[https://aws.amazon.com/efs](https://aws.amazon.com/efs)  
Domaine  
Technologie  
Question 43Incorrect  
Dans le cadre du modèle de responsabilité partagée d'Amazon RDS, laquelle des responsabilités suivantes incombe au client ?  
**Bonne réponse**  
Choisir un moteur de base de données  
Gérer les correctifs et les sauvegardes  
Installez le logiciel de base de données  
**Votre réponse est incorrecte**  
Chiffrement des données en transit  
Explication générale  
***Réponse correcte :***

**Choisir un moteur de base de données**

Amazon RDS est disponible sur plusieurs types d'instances de base de données, optimisées pour la mémoire, les performances ou les E/S, et propose six moteurs de base de données courants : Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle Database et SQL Server. Vous pouvez utiliser AWS Database Migration Service pour migrer ou répliquer facilement vos bases de données existantes vers Amazon RDS.

Il incombe au client de choisir les moteurs de base de données parmi six bases de données connues.

***Réponses incorrectes :***

**Installez le logiciel de base de données**

**Gérer les correctifs et les sauvegardes**

**Chiffrement des données en transit**

***Liens vers les références :***

[https://aws.amazon.com/rds](https://aws.amazon.com/rds)  
Domaine  
Sécurité et conformité  
Question 44Correct  
Sélectionnez deux services dont AWS est responsable de la maintenance ou du fonctionnement.  
**Votre sélection est correcte**  
Amazon CloudFront  
Cloud privé virtuel (VPC)  
**Votre sélection est correcte**  
Amazon Aurora  
Elastic Compute Cloud (EC2)  
Gestion des identités et des accès (IAM)  
Explication générale  
***Réponses correctes :***

**Amazon Aurora & Amazon CloudFront**

Les services gérés d'AWS permettent aux clients d'automatiser les tâches de gestion du cloud, notamment la gestion des correctifs, la gestion des changements, le provisionnement, la gestion des accès utilisateurs, la surveillance des incidents, ainsi que la sauvegarde et la restauration.

Voici quelques services gérés par AWS : Amazon Aurora, Amazon CloudFront, Amazon Redshift, AWS Lambda, Amazon RDS, Amazon Elastic MapReduce (Amazon EMR), DynamoDB, Amazon CloudFront.

**Amazon Aurora** est une base de données relationnelle compatible avec MySQL et PostgreSQL, conçue pour le cloud, qui combine les performances et la disponibilité des bases de données d'entreprise traditionnelles avec la simplicité et la rentabilité des bases de données open source.

**Amazon CloudFront** est un service de réseau de diffusion de contenu (CDN) mondial conçu pour offrir des performances optimales en termes de vitesse et de faible latence, une sécurité renforcée et une grande facilité d'utilisation pour les développeurs. Il fournit un réseau mondial de serveurs proxy qui mettent en cache le contenu, comme les vidéos web ou autres fichiers multimédias volumineux, au plus près des utilisateurs, améliorant ainsi la vitesse d'accès et de téléchargement.

***Réponses incorrectes :***

**Cloud privé virtuel (VPC) :** Amazon VPC crée un environnement réseau virtuel isolé dans le cloud AWS, dédié à votre compte AWS. AWS VPC fonctionne comme un réseau TCP/IP traditionnel utilisé pour exploiter un centre de données physique. Il offre au client un contrôle total sur son environnement réseau virtuel.

**Elastic Compute Cloud (EC2)** : Amazon EC2 est une plateforme de cloud computing qui vous permet de louer des ordinateurs virtuels. Vous disposez d'un contrôle total et êtes responsable de la gestion de l'ensemble de votre serveur.

**Gestion des identités et des accès (IAM)** : AWS Identity and Access Management (IAM) vous permet de contrôler l’accès à l’ensemble des ressources AWS. Vous pouvez créer et gérer les autorisations AWS pour les utilisateurs et les groupes.

***Liens vers les références :***

[https://aws.amazon.com/rds/aurora](https://aws.amazon.com/rds/aurora)

[https://aws.amazon.com/cloudfront](https://aws.amazon.com/cloudfront)  
Domaine  
Sécurité et conformité  
Question 45Incorrect  
Une entreprise possède d'importants volumes de données distribuées et souhaite les analyser. Quel service AWS devrait-elle utiliser ?  
Amazon MQ  
**Bonne réponse**  
Amazon EMR  
**Votre réponse est incorrecte**  
Amazon Redshift  
Amazone Athéna  
Explication générale  
***Réponse correcte :***

**Amazon EMR :** Amazon EMR (anciennement Amazon Elastic MapReduce) est une plateforme cloud de traitement de données volumineuses permettant d'exécuter des tâches de traitement de données distribuées à grande échelle, des requêtes SQL interactives et des applications d'apprentissage automatique (ML) à l'aide de frameworks d'analyse open source tels qu'Apache Spark, Apache Hive et Presto. Grâce à ces frameworks et aux projets open source associés, vous pouvez traiter des données à des fins d'analyse et de veille stratégique. Amazon EMR vous permet également de transformer et de déplacer d'importants volumes de données vers et depuis d'autres services de stockage et bases de données AWS, tels qu'Amazon Simple Storage Service (Amazon S3) et Amazon DynamoDB.

***Réponses incorrectes :***

**Amazon** Redshift utilise SQL pour analyser les données structurées et semi-structurées issues d'entrepôts de données, de bases de données opérationnelles et de lacs de données. Grâce à l'infrastructure matérielle et au machine learning conçus par AWS, Redshift offre un rapport prix/performances optimal, quelle que soit l'échelle. Redshift permet d'extraire des informations précieuses à partir de volumes importants de données. L'interface intuitive d'AWS vous permet de déployer un nouveau cluster en quelques minutes, sans vous soucier de la gestion de l'infrastructure.

**Amazon Athena** : Amazon Athena est un service de requêtes interactif qui simplifie l'analyse des données stockées sur Amazon S3 à l'aide du langage SQL standard. Athena est facile à utiliser. Il suffit d'indiquer l'emplacement de vos données sur Amazon S3, de définir le schéma et de commencer à interroger les données avec le langage SQL standard. La plupart des résultats sont disponibles en quelques secondes. Avec Athena, plus besoin de processus ETL complexes pour préparer vos données à l'analyse. Ainsi, toute personne maîtrisant le SQL peut analyser rapidement des ensembles de données volumineux.

**Amazon MQ** : Amazon MQ est un service de courtage de messages géré pour Apache ActiveMQ et RabbitMQ qui simplifie la configuration et l'exploitation des serveurs de messages sur AWS. Amazon MQ réduit vos responsabilités opérationnelles en prenant en charge le provisionnement, la configuration et la maintenance des serveurs de messages. Grâce à sa compatibilité avec vos applications existantes via des API et des protocoles standards, Amazon MQ vous permet de migrer facilement vers AWS sans avoir à réécrire de code.

***Liens vers les références :***

[https://aws.amazon.com/emr](https://aws.amazon.com/emr)  
Domaine  
Technologie  
Question 46Correct  
Quel service AWS permet de créer une alerte lorsque les coûts dépassent le seuil ?  
Service de notification simple d'Amazon  
**Votre réponse est correcte**  
Budgets AWS  
Rapport sur les coûts et l'utilisation d'AWS  
AWS Cost Explorer  
Explication générale  
***Réponse correcte :***

**Budgets AWS** : Budgets AWS est la solution la plus simple pour contrôler vos dépenses AWS et recevoir des alertes en cas de dépassement de votre limite budgétaire. Vous pouvez définir des budgets personnalisés pour suivre vos coûts et votre utilisation, des cas d'utilisation les plus simples aux plus complexes. Avec Budgets AWS, vous pouvez choisir d'être alerté par e-mail ou via les réseaux sociaux lorsque les coûts et l'utilisation réels ou prévus dépassent votre seuil budgétaire, ou lorsque l'utilisation ou la couverture réelle de vos instances réservées et de vos plans d'économies passe en dessous du seuil souhaité.

***Réponses incorrectes :***

**Amazon SNS** : Amazon Simple Notification Service (Amazon SNS) est un service de messagerie entièrement géré pour les communications entre applications (A2A) et entre applications et utilisateurs (A2P). Il propose des sujets pour une messagerie push à haut débit et multivoies entre systèmes distribués, microservices et applications sans serveur événementielles. Amazon SNS vous permet d'envoyer des notifications directement à vos clients. Il prend en charge l'envoi de SMS vers plus de 200 pays, les notifications push mobiles vers Amazon, Android, Apple et d'autres appareils, ainsi que les notifications par e-mail.

**AWS Cost Explorer** : AWS Cost Explorer possède une interface conviviale qui vous permet de visualiser, comprendre et gérer vos coûts et votre utilisation AWS, que ce soit quotidiennement ou mensuellement. Un rapport par défaut vous aide à visualiser les coûts et l'utilisation associés à vos cinq principaux services AWS et vous fournit une ventilation détaillée de tous les services dans un tableau. Les rapports vous permettent d'ajuster la période pour consulter l'historique des données jusqu'à douze mois et ainsi analyser l'évolution de vos coûts. Vous pouvez également affiner votre analyse grâce à des filtres et des regroupements précis, tels que le type d'utilisation et les balises.

**Rapport sur les coûts et l'utilisation AWS** : Ce rapport contient l'ensemble le plus complet de données disponibles sur les coûts et l'utilisation d'AWS, incluant des métadonnées supplémentaires sur les services AWS, la tarification, les crédits, les frais, les taxes, les remises, les catégories de coûts, les instances réservées et les plans d'économies. Il est disponible par heure, par jour ou par mois, ainsi qu'au niveau du compte administrateur ou membre.

***Liens vers les références :***

[https://aws.amazon.com/aws-cost-management/aws-budgets](https://aws.amazon.com/aws-cost-management/aws-budgets)  
Domaine  
Facturation et tarification  
Question 47Correct  
Quelle stratégie de routage AWS Route 53 doit être utilisée pour acheminer le trafic en fonction de la localisation des utilisateurs ?  
**Votre réponse est correcte**  
politique de routage par géolocalisation  
Politique de routage pondéré  
Politique de routage simple  
Politique de routage de basculement  
Explication générale  
***Réponse correcte :***

**Stratégie de routage géolocalisé** : Le routage géolocalisé vous permet de choisir les ressources qui acheminent votre trafic en fonction de la localisation géographique de vos utilisateurs, c’est-à-dire l’emplacement d’où proviennent les requêtes DNS. Par exemple, vous pouvez configurer le routage de toutes les requêtes provenant d’Europe vers un équilibreur de charge ELB situé dans la région de Francfort.

Lorsque vous créez un enregistrement, vous choisissez une stratégie de routage, qui détermine comment Amazon Route 53 répond aux requêtes :

* Politique de routage simple : à utiliser pour une ressource unique qui remplit une fonction donnée pour votre domaine, par exemple, un serveur Web qui sert du contenu pour le site Web example.com.  
* Stratégie de routage de basculement : à utiliser lorsque vous souhaitez configurer un basculement actif-passif.  
* Politique de routage par géolocalisation : à utiliser lorsque vous souhaitez acheminer le trafic en fonction de la localisation de vos utilisateurs.  
* Politique de routage par géoproximité : à utiliser lorsque vous souhaitez acheminer le trafic en fonction de l’emplacement de vos ressources et, éventuellement, transférer le trafic de ressources situées à un endroit vers des ressources situées à un autre.  
* Stratégie de routage en fonction de la latence : à utiliser lorsque vous disposez de ressources dans plusieurs régions AWS et que vous souhaitez acheminer le trafic vers la région offrant la meilleure latence avec un temps d’aller-retour réduit.  
* Politique de routage des réponses multivaluées : à utiliser lorsque vous souhaitez que Route 53 réponde aux requêtes DNS avec jusqu’à huit enregistrements valides sélectionnés aléatoirement.  
* Politique de routage pondérée : à utiliser pour acheminer le trafic vers plusieurs ressources selon des proportions que vous spécifiez.

***Réponses incorrectes :***

**Politique de routage simple**

**Politique de routage de basculement**

**Politique de routage pondéré**

***Liens vers les références :***

[https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html)  
Domaine  
Technologie  
Question 48Correct  
Quelle fonctionnalité d'AWS Cloud permet d'augmenter et de réduire instantanément la capacité des ressources ?  
**Votre réponse est correcte**  
Élasticité  
Économies de coûts  
Déploiement mondial en quelques minutes  
Agilité  
Explication générale  
***Réponse correcte :***

**Élasticité** : Avec le cloud computing, vous n’avez pas besoin de surdimensionner les ressources dès le départ pour gérer les pics d’activité futurs. Vous allouez uniquement les ressources nécessaires. Vous pouvez ensuite les faire évoluer à la hausse ou à la baisse pour adapter instantanément votre capacité aux besoins changeants de votre entreprise.

***Réponses incorrectes :***

**Agilité :** Le cloud vous offre un accès simplifié à un large éventail de technologies, vous permettant d’innover plus rapidement et de concrétiser presque tout ce que vous pouvez imaginer. Vous pouvez déployer rapidement des ressources selon vos besoins : services d’infrastructure (calcul, stockage, bases de données), Internet des objets, apprentissage automatique, lacs de données, analyses, et bien plus encore.

**Réduction des coûts** : Le cloud vous permet de remplacer les dépenses d’investissement (comme les centres de données et les serveurs physiques) par des dépenses variables et de ne payer vos services informatiques qu’à l’usage. De plus, grâce aux économies d’échelle, les dépenses variables sont bien inférieures à celles que vous auriez à engager en gérant l’infrastructure vous-même.

**Déployez à l'échelle mondiale en quelques minutes** : grâce au cloud, étendez votre présence géographique et déployez votre application partout dans le monde en un clin d'œil. Par exemple, AWS dispose d'une infrastructure mondiale, vous permettant de déployer votre application sur plusieurs sites en quelques clics. Rapprocher les applications des utilisateurs finaux réduit la latence et améliore leur expérience.

***Liens vers les références :***

[https://aws.amazon.com/what-is-cloud-computing](https://aws.amazon.com/what-is-cloud-computing)  
Domaine  
Concepts du cloud  
Question 49Correct  
Une entreprise du secteur des médias souhaite créer des sous-titres français pour ses vidéos. En tant que spécialiste du cloud, quels services AWS recommanderiez-vous parmi les suivants ? (Sélectionnez deux réponses.)  
**Votre sélection est correcte**  
Amazon Translate  
**Votre sélection est correcte**  
Transcription Amazon  
Reconnaissance Amazon  
Amazon Textract  
Amazon Polly  
Explication générale  
***Réponses correctes :***

**Amazon Transcribe** : Amazon Transcribe est un service de reconnaissance vocale automatique qui convertit l'audio en texte. Grâce à l'API Amazon Transcribe, vous pouvez analyser des fichiers audio et obtenir un fichier texte contenant la transcription. Vous pouvez également envoyer un flux audio en direct à Amazon Transcribe et recevoir un flux de transcriptions en temps réel.

**Amazon Translate** : Amazon Translate est un service de traduction automatique neuronale qui offre une traduction rapide, de haute qualité, abordable et personnalisable. La traduction automatique neuronale est une forme d'automatisation de la traduction qui utilise des modèles d'apprentissage profond pour fournir une traduction plus précise et plus naturelle que les algorithmes de traduction statistiques et basés sur des règles traditionnels. Avec Amazon Translate, vous pouvez localiser du contenu tel que des sites web et des applications.

***Réponses incorrectes :***

**Amazon Textract** : Amazon Textract est un service d'analyse de documents qui détecte et extrait le texte imprimé, l'écriture manuscrite, les données structurées (comme les champs d'intérêt et leurs valeurs) et les tableaux à partir d'images et de numérisations de documents. Textract peut extraire du texte imprimé en espagnol, italien, français, portugais et allemand. Amazon Textract extrait également les données explicitement étiquetées, les données implicites et les lignes de commande des listes détaillées de biens ou de services figurant sur presque toutes les factures ou tous les reçus, sans aucun modèle ni configuration. Amazon Textract prend actuellement en charge les formats PNG, JPEG, TIFF et PDF.

**Amazon Polly** : Amazon Polly est un service qui transforme du texte en parole naturelle, vous permettant de créer des applications vocales et de développer de nouvelles catégories de produits à commande vocale. Grâce à des dizaines de voix réalistes disponibles dans de nombreuses langues, vous pouvez créer des applications vocales compatibles avec de nombreux pays.

**Amazon Rekognition** : Amazon Rekognition vous permet d'automatiser l'analyse de millions d'images et de vidéos en quelques minutes et d'optimiser les tâches d'analyse visuelle humaine grâce à l'intelligence artificielle (IA). Rekognition Image est un service de reconnaissance d'images qui détecte les objets, les scènes et les visages ; extrait le texte ; reconnaît les célébrités ; et identifie les contenus inappropriés dans les images. Il vous permet également de rechercher et de comparer des visages. Rekognition Video détecte les personnes et les suit dans la vidéo, détecte les activités, reconnaît les objets, les célébrités ou les vidéos en direct, et vous aide à les analyser.

***Liens vers les références :***

[https://aws.amazon.com/transcribe](https://aws.amazon.com/transcribe)

[https://aws.amazon.com/translate](https://aws.amazon.com/translate)  
Domaine  
Technologie  
Question 50Correct  
Quel est un exemple de plateforme en tant que service (PaaS) dans les clouds AWS ?  
Amazon EC2  
Amazon S3  
Amazon CloudWatch  
**Votre réponse est correcte**  
AWS Elastic Beanstalk  
Explication générale  
***Réponse correcte :***

**AWS Elastic Beanstalk** : Les plateformes en tant que service (PaaS) libèrent les entreprises de la gestion de l’infrastructure sous-jacente (généralement le matériel et les systèmes d’exploitation) et leur permettent de se concentrer sur le déploiement et la gestion de leurs applications. Vous gagnez ainsi en efficacité, car vous n’avez plus à vous soucier de l’acquisition des ressources, de la planification de la capacité, de la maintenance logicielle, des correctifs ni de toutes les autres tâches fastidieuses et répétitives liées à l’exécution de vos applications.

Par exemple, AWS Elastic Beanstalk est un service PaaS (Platform as a Service) et une plateforme prête à l'emploi qui prend en charge nativement de nombreux langages de programmation et environnements. Elle simplifie le déploiement, le test, le lancement et la mise à l'échelle des applications pour différents appareils et plateformes. Elle déploie automatiquement le code chargé et intègre des outils d'équilibrage de charge et de mise à l'échelle automatique pour garantir le bon fonctionnement de vos applications en permanence.

***Réponses incorrectes :***

**Amazon EC2 et Amazon S3** : Ce sont deux exemples d'infrastructure en tant que service (IaaS).

**Amazon CloudWatch** : CloudWatch est un exemple de logiciel en tant que service (SaaS).

***Liens vers les références :***

[https://aws.amazon.com/types-of-cloud-computing](https://aws.amazon.com/types-of-cloud-computing)  
Domaine  
Concepts du cloud  
Question 51Correct  
Quelle méthode d'authentification peut être utilisée avec Amazon IAM ?  
**Votre réponse est correcte**  
Clé d'accès  
AWS KMS  
Clé RSA  
Clé de route  
Explication générale  
***Réponse correcte :***

**Clé d'accès** : Les clés d'accès sont des informations d'identification permanentes pour un utilisateur IAM ou l'utilisateur racine du compte AWS. Elles permettent de signer des requêtes programmatiques adressées à l'interface de ligne de commande AWS (AWS CLI) ou à l'API AWS (directement ou via le kit de développement logiciel AWS \[SDK\]). Lors de la création d'une paire de clés d'accès, il est impératif de conserver l'ID de clé d'accès et la clé d'accès secrète dans un emplacement sécurisé. La clé d'accès secrète n'est disponible que pendant sa création. En cas de perte, il est nécessaire de supprimer la clé d'accès et d'en créer une nouvelle.

***Réponses incorrectes :***

**Clé RSA** : RSA est un algorithme de chiffrement à clé publique qui utilise un chiffrement asymétrique pour chiffrer les données. Il n’est pas utilisé pour l’authentification.

**Clé de routage** : AWS ne fournit aucune clé de routage.

**AWS KMS** : AWS Key Management Service (KMS) sert à créer et à gérer des clés cryptographiques et n’est pas utilisé pour l’authentification.

***Liens vers les références :***

[https://docs.aws.amazon.com/IAM/latest/UserGuide/id\_credentials\_access-keys.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)  
Domaine  
Sécurité et conformité  
Question 52Correct  
Une entreprise souhaite transférer 8 téraoctets de données de son centre de données sur site vers le cloud AWS. Quelle solution parmi les suivantes devrait être utilisée pour réaliser ce transfert de manière rentable ?  
Motoneige AWS  
**Votre réponse est correcte**  
AWS Snowcone  
AWS Snowball  
Passerelle de stockage AWS  
Explication générale  
***Réponse correcte :***

**AWS Snowcone** : AWS Snowcone est le plus petit membre de la famille AWS Snow, qui regroupe les solutions de calcul en périphérie, de stockage en périphérie et de transfert de données. Vous pouvez utiliser un appareil Snowcone pour collecter, traiter et transférer des données vers le cloud AWS, soit hors ligne en expédiant l'appareil à AWS, soit en ligne via AWS DataSync. Un seul appareil AWS Snowcone permet de transférer jusqu'à 8 téraoctets de stockage utilisable (14 téraoctets pour le Snowcone SSD).

***Réponses incorrectes :***

**AWS Snowball** : Le service AWS Snowball utilise des périphériques de stockage physiques pour transférer des téraoctets de données entre AWS et votre emplacement de stockage à des vitesses supérieures à celles d'Internet. Avec AWS Snowball, vous gagnez du temps et de l'argent. Vous pouvez transférer jusqu'à 80 téraoctets par Snowball. Snowball offre des interfaces performantes pour créer des tâches, suivre les données et contrôler l'état d'avancement de vos tâches jusqu'à leur achèvement. Les périphériques Snowball sont des appareils robustes, protégés par le service de gestion des clés AWS (AWS KMS). Ils sécurisent et protègent vos données pendant leur transfert.

**AWS Snowmobile** : AWS Snowmobile est un service de transfert de données à l'échelle de l'exaoctet permettant de déplacer des volumes de données extrêmement importants vers AWS. Vous pouvez transférer jusqu'à 100 pétaoctets par Snowmobile, un conteneur maritime renforcé de 13,7 mètres de long, tracté par un semi-remorque. Snowmobile simplifie le transfert de volumes massifs de données vers le cloud, tels que des bibliothèques vidéo, des référentiels d'images, voire la migration complète d'un centre de données. Transférer des données avec Snowmobile est plus sûr, plus rapide et plus économique.

**AWS Storage Gateway** : AWS Storage Gateway est un service de stockage cloud hybride qui vous offre un accès local à un espace de stockage cloud quasi illimité. Les clients utilisent Storage Gateway pour simplifier la gestion du stockage et réduire les coûts des principaux cas d'usage de stockage cloud hybride. Il s'agit notamment du transfert des sauvegardes vers le cloud, de l'utilisation de partages de fichiers locaux s'appuyant sur le stockage cloud et de l'accès à faible latence aux données AWS pour les applications locales.

***Liens vers les références :***

[https://aws.amazon.com/snowcone](https://aws.amazon.com/snowcone)  
Domaine  
Facturation et tarification  
Question 53Correct  
Une entreprise souhaite configurer un certificat de sécurité SSL pour son site web afin d'utiliser le protocole HTTPS. Quel service AWS peut être utilisé pour déployer un certificat serveur SSL ?  
Conseiller de confiance AWS  
Gestionnaire de licences AWS  
Route 53 d'Amazon  
**Votre réponse est correcte**  
Gestionnaire de certificats AWS  
Explication générale  
***Réponse correcte :***

**AWS Certificate Manager** : AWS Certificate Manager (ACM) est un service qui vous permet de provisionner, gérer et déployer facilement des certificats SSL/TLS publics et privés pour une utilisation avec les services AWS et vos ressources internes connectées. Avec AWS Certificate Manager, vous pouvez rapidement demander un certificat, le déployer sur des ressources AWS telles que des Elastic Load Balancers, des distributions Amazon CloudFront et des API sur API Gateway, et laisser AWS Certificate Manager gérer les renouvellements de certificats.

***Réponses incorrectes :***

**AWS Trusted Advisor** : AWS Trusted Advisors vous fournit des recommandations pour vous aider à suivre les bonnes pratiques AWS. Trusted Advisor évalue votre compte à l’aide de contrôles. Ces contrôles identifient les moyens d’optimiser votre infrastructure AWS, d’améliorer la sécurité et les performances, de réduire les coûts et de surveiller les quotas de service. Vous pouvez ensuite suivre les recommandations issues de ces contrôles pour optimiser vos services et vos ressources.

**Amazon Route 53** : Amazon Route 53 est un service web de système de noms de domaine (DNS) cloud hautement disponible et évolutif. Il est conçu pour offrir aux développeurs et aux entreprises une solution extrêmement fiable et économique pour acheminer les utilisateurs finaux vers des applications Internet en traduisant les noms de domaine tels que www.example.com en adresses IP numériques, comme 192.0.2.1, utilisées par les ordinateurs pour communiquer entre eux. Amazon Route 53 est également entièrement compatible avec IPv6.

**AWS License Manager** : AWS License Manager est un service qui simplifie la gestion de vos licences logicielles (fournisseurs tels que Microsoft, SAP, Oracle et IBM) de manière centralisée sur AWS et dans vos environnements sur site. Il vous offre un contrôle et une visibilité complets sur l'utilisation de vos licences, vous permettant ainsi de limiter les dépassements et de réduire les risques de non-conformité et d'erreurs de déclaration. AWS License Manager est inclus sans frais supplémentaires. Vous ne payez que les ressources AWS utilisées pour exécuter vos applications.

***Liens vers les références :***

[https://aws.amazon.com/certificate-manager](https://aws.amazon.com/certificate-manager)  
Domaine  
Sécurité et conformité  
Question 54Incorrect  
Votre entreprise dispose d'une application exécutée sur une instance Amazon EC2 en Europe. Elle envisage désormais de s'implanter en Amérique du Nord. Comment procéder pour déployer l'application dans une autre région ?  
Vous n'avez rien à faire, il suffit de déployer une nouvelle application dans la région.  
**Votre réponse est incorrecte**  
Créez un compte AWS distinct pour cette région.  
**Bonne réponse**  
Créez une image machine Amazon et déployez cette région.  
Créez une demande d'assistance pour obtenir cette aide à la migration.  
Explication générale  
***Réponse correcte :***

**Créez une image machine Amazon et déployez cette région** : vous pouvez lancer une instance à partir d’une AMI existante, la personnaliser (par exemple, en y installant un logiciel), puis enregistrer cette configuration mise à jour en tant qu’AMI personnalisée. Les instances lancées à partir de cette nouvelle AMI personnalisée intègrent les personnalisations que vous avez effectuées lors de sa création.

Le diagramme suivant résume le cycle de vie d'une AMI. Après avoir créé et enregistré une AMI, vous pouvez l'utiliser pour lancer de nouvelles instances. (Vous pouvez également lancer des instances à partir d'une AMI si son propriétaire vous en accorde les autorisations.) Vous pouvez copier une AMI au sein de la même région AWS ou vers différentes régions AWS. Lorsque vous n'avez plus besoin d'une AMI, vous pouvez la désenregistrer.

***Réponses incorrectes :***

**Créez un compte AWS distinct pour cette région.**

**Créez une demande d'assistance pour obtenir cette aide à la migration.**

**Vous n'avez rien à faire, il suffit de déployer une nouvelle application dans la région.**

***Liens vers les références :***

[https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html)  
Domaine  
Concepts du cloud  
Question 55Correct  
Quel pilier d'AWS Well-Architected garantit la sélection appropriée des types de ressources et des tailles optimisées pour les exigences de charge de travail ?  
Pilier de sécurité  
Pilier de fiabilité  
Pilier d'optimisation des coûts  
**Votre réponse est correcte**  
Pilier de l'efficacité des performances  
Explication générale  
***Réponse correcte :***

Le cadre AWS Well-Architected décrit les concepts clés, les principes de conception et les bonnes pratiques architecturales pour la conception et l'exécution de charges de travail dans le cloud. AWS Well-Architected aide les architectes cloud à construire une infrastructure sécurisée, performante, résiliente et efficace pour une grande variété d'applications et de charges de travail. Articulé autour de six piliers – excellence opérationnelle, sécurité, fiabilité, efficacité des performances, optimisation des coûts et durabilité – AWS Well-Architected offre une approche cohérente permettant aux clients et aux partenaires d'évaluer les architectures et de mettre en œuvre des conceptions évolutives.

**Pilier « Efficacité des performances** » : ce pilier porte sur l’allocation structurée et rationalisée des ressources informatiques. Les principaux thèmes abordés sont la sélection des types et des tailles de ressources optimisées pour les besoins de charge de travail, le suivi des performances et le maintien de l’efficacité face à l’évolution des besoins de l’entreprise.

***Réponses incorrectes :***

**Pilier de fiabilité** : Ce pilier se concentre sur le bon fonctionnement des charges de travail et sur la rapidité de reprise après une panne afin de répondre aux exigences. Les principaux thèmes abordés sont la conception de systèmes distribués, la planification de la reprise et l’adaptation aux besoins changeants.

**Pilier Sécurité** : Ce pilier vise à protéger les informations et les systèmes. Les principaux thèmes abordés sont la confidentialité et l’intégrité des données, la gestion des autorisations des utilisateurs et la mise en place de contrôles pour détecter les incidents de sécurité.

**Pilier d'optimisation des coûts** : Ce pilier vise à éviter les dépenses inutiles. Les principaux thèmes abordés sont la compréhension des dépenses dans le temps et le contrôle de l'allocation des fonds, la sélection des ressources appropriées en termes de type et de quantité, et l'adaptation des ressources aux besoins de l'entreprise sans dépassement budgétaire.

***Liens vers les références :***

[https://aws.amazon.com/architecture/well-architected](https://aws.amazon.com/architecture/well-architected)  
Domaine  
Concepts du cloud  
Question 56Incorrect  
Parmi les éléments suivants, lesquels sont recommandés dans le pilier Fiabilité d'AWS Well-Architected ? (Sélectionnez deux réponses)  
**Votre sélection est correcte**  
Évoluez horizontalement pour augmenter la disponibilité de la charge de travail globale  
**Votre sélection est incorrecte**  
Améliorer fréquemment les procédures opérationnelles  
Protéger les données en transit et au repos  
Utilisez des architectures sans serveur  
**Sélection correcte**  
Récupération automatique après une panne  
Explication générale  
***Réponse correcte :***

**Reprise automatique après une panne** : En surveillant les indicateurs clés de performance (KPI) d'une charge de travail, vous pouvez déclencher des automatisations lorsqu'un seuil est dépassé. Ces KPI doivent mesurer la valeur ajoutée pour l'entreprise, et non les aspects techniques du fonctionnement du service. Ceci permet la notification et le suivi automatiques des pannes, ainsi que des processus de reprise automatisés qui contournent ou réparent la panne. Avec une automatisation plus sophistiquée, il est possible d'anticiper et de corriger les pannes avant même qu'elles ne surviennent.

**Augmentez la disponibilité globale de la charge de travail en optimisant l'échelle horizontale** : remplacez une ressource volumineuse par plusieurs ressources plus petites afin de réduire l'impact d'une panne unique sur la charge de travail globale. Répartissez les requêtes sur plusieurs ressources plus petites pour éviter qu'elles ne partagent un point de défaillance commun.

***Réponses incorrectes :***

**Améliorez régulièrement vos procédures opérationnelles :** c’est une recommandation du pilier « Excellence opérationnelle ». Lors de leur utilisation, recherchez des pistes d’amélioration. Adaptez vos procédures en fonction de l’évolution de votre charge de travail. Organisez des journées de test régulières pour vérifier l’efficacité des procédures et s’assurer que les équipes les maîtrisent.

**Protégez vos données en transit et au repos** : c’est ce que recommande Security Pillar. Classez vos données par niveau de sensibilité et utilisez des mécanismes tels que le chiffrement, la tokenisation et le contrôle d’accès, le cas échéant.

**Utilisez des architectures sans serveur** : c’est la recommandation du pilier « Performance et efficacité ». Les architectures sans serveur vous dispensent d’exploiter et de maintenir des serveurs physiques pour les activités de calcul traditionnelles. Par exemple, les services de stockage sans serveur peuvent servir de sites web statiques (éliminant ainsi le besoin de serveurs web) et les services événementiels peuvent héberger du code. Cela allège la charge opérationnelle liée à la gestion des serveurs physiques et peut réduire les coûts transactionnels, car les services gérés fonctionnent à l’échelle du cloud.

***Liens vers les références :***

[https://aws.amazon.com/blogs/apn/the-6-pillars-of-the-aws-well-architected-framework](https://aws.amazon.com/blogs/apn/the-6-pillars-of-the-aws-well-architected-framework)

[https://aws.amazon.com/architecture/well-architected](https://aws.amazon.com/architecture/well-architected)  
Domaine  
Concepts du cloud  
Question 57Correct  
Quel service AWS faut-il utiliser pour convertir une vidéo d'un format à un autre ?  
Reconnaissance Amazon  
Amazon Polly  
**Votre réponse est correcte**  
Amazon Elastic Transcoder  
Transcription Amazon  
Explication générale  
***Réponse correcte :***

**Amazon Elastic Transcoder** : Amazon Elastic Transcoder est une solution hautement évolutive, simple d'utilisation et économique pour convertir (ou « transcoder ») des fichiers vidéo et audio de leur format source vers des versions compatibles avec les smartphones, tablettes et ordinateurs. Outre la prise en charge d'une large gamme de formats d'entrée et de sortie, de résolutions, de débits binaires et de fréquences d'images, Amazon Elastic Transcoder offre également des fonctionnalités telles que l'optimisation automatique du débit binaire vidéo, la génération de vignettes, l'ajout de filigranes visuels, la prise en charge des sous-titres, la gestion des droits numériques (DRM), le téléchargement progressif, le chiffrement et bien plus encore. Il prend en charge les formats multimédias web, grand public et professionnels les plus courants.

***Réponses incorrectes :***

**Amazon Polly** : Amazon Polly est un service qui transforme du texte en parole naturelle, vous permettant de créer des applications vocales et de développer de nouvelles catégories de produits à commande vocale. Grâce à des dizaines de voix réalistes disponibles dans de nombreuses langues, vous pouvez créer des applications vocales compatibles avec de nombreux pays.

**Amazon Rekognition** : Amazon Rekognition vous permet d'automatiser l'analyse de millions d'images et de vidéos en quelques minutes et d'optimiser les tâches d'analyse visuelle humaine grâce à l'intelligence artificielle (IA). Rekognition Image est un service de reconnaissance d'images qui détecte les objets, les scènes et les visages ; extrait le texte ; reconnaît les célébrités ; et identifie les contenus inappropriés dans les images. Il vous permet également de rechercher et de comparer des visages. Rekognition Video détecte les personnes et les suit dans la vidéo, détecte les activités, reconnaît les objets, les célébrités ou les vidéos en direct, et vous aide à les analyser.

**Amazon Transcribe** : Amazon Transcribe est un service de reconnaissance vocale automatique qui convertit l'audio en texte. Grâce à l'API Amazon Transcribe, vous pouvez analyser des fichiers audio et obtenir un fichier texte contenant la transcription. Vous pouvez également envoyer un flux audio en direct à Amazon Transcribe et recevoir un flux de transcriptions en temps réel.

***Liens vers les références :***

[https://aws.amazon.com/elastictranscoder](https://aws.amazon.com/elastictranscoder)  
Domaine  
Technologie  
Question 58Correct  
Quel service AWS propose un service de stockage cloud hybride qui connecte de manière transparente les applications sur site au stockage cloud AWS ?  
Amazon Simple Storage Service (S3)  
AWS Direct Connect  
**Votre réponse est correcte**  
Passerelle de stockage AWS  
Système de fichiers élastique Amazon (EFS)  
Explication générale  
***Réponse correcte :***

**AWS Storage Gateway** : AWS Storage Gateway est un service de stockage cloud hybride qui vous offre un accès local à un espace de stockage cloud quasi illimité. Les clients utilisent Storage Gateway pour simplifier la gestion du stockage et réduire les coûts des principaux cas d'usage de stockage cloud hybride. Il s'agit notamment du transfert des sauvegardes vers le cloud, de l'utilisation de partages de fichiers locaux s'appuyant sur le stockage cloud et de l'accès à faible latence aux données AWS pour les applications locales.

***Réponses incorrectes :***

**AWS Direct Connect** : AWS Direct Connect n'utilise pas Internet ; il repose sur des connexions réseau privées et dédiées entre votre intranet et Amazon VPC. Grâce à AWS Direct Connect, vous pouvez établir une connectivité privée entre AWS et votre centre de données, vos bureaux ou votre environnement de colocation. Cette connexion dédiée s'effectue via un câble Ethernet fibre optique standard de 1 Gb/s ou 10 Gb/s, dont une extrémité est connectée à votre routeur et l'autre à un routeur AWS Direct Connect. Les clients peuvent également renforcer la sécurité en chiffrant le trafic transitant par ces connexions directes à l'aide de protocoles similaires tels que SSL, HTTPS et SSH.

**Amazon S3** : Amazon Simple Storage Service (Amazon S3) est un service de stockage d'objets offrant une évolutivité, une disponibilité des données, une sécurité et des performances de pointe. Ce service est conçu pour la sauvegarde et l'archivage en ligne des données et des applications hébergées sur Amazon Web Services (AWS).

**Amazon EFS** (Amazon Elastic File System) est un service de stockage cloud conçu pour fournir un stockage de fichiers évolutif, élastique et chiffré, utilisable avec les services cloud AWS et les ressources sur site. Un système de fichiers Amazon EFS est idéal comme système de fichiers réseau géré et partageable entre différentes instances Amazon EC2. Fonctionnant comme un périphérique NAS, Amazon EFS est particulièrement performant pour l'analyse de données massives, les flux de travail de traitement multimédia et la gestion de contenu.

***Liens vers les références :***

[https://aws.amazon.com/storagegateway](https://aws.amazon.com/storagegateway)  
Domaine  
Technologie  
Question 59Incorrect  
Quels sont les éléments suivants qui influencent le coût d'Amazon Cloudfront ?  
Volume total de données  
Transferts de données IN  
**Votre réponse est incorrecte**  
L'ère du temps de mise en cache  
**Bonne réponse**  
Transferts de données sortants  
Explication générale  
***Réponse correcte :***

**Transferts de données sortants** : CloudFront facture le trafic acheminé via des transferts de données sortants depuis ses points de présence, ainsi que les requêtes HTTP ou HTTPS. Les clients s'engageant pour un an peuvent économiser jusqu'à 30 % grâce à l'offre CloudFront Savings Bundle en libre-service. Pour des remises plus importantes, renseignez-vous sur les tarifs personnalisés basés sur un volume de trafic minimum (généralement 10 To/mois ou plus). Intégré à AWS, l'accès à Internet est gratuit pour les requêtes provenant de n'importe quelle origine AWS, comme Amazon Simple Storage Service (S3), Amazon Elastic Compute Cloud (EC2) ou Elastic Load Balancer. AWS Certificate Manager (ACM) propose également des certificats TLS personnalisés sans frais supplémentaires. L'assistance pour le CDN est incluse dans votre abonnement AWS Support. Les tarifs varient selon le type d'utilisation, la région géographique et les fonctionnalités sélectionnées ; les options sont détaillées ci-dessous.

***Réponses incorrectes :***

**Volume total de données**

**L'ère du temps de mise en cache**

**Transferts de données IN**

***Liens vers les références :***

[https://aws.amazon.com/cloudfront/pricing](https://aws.amazon.com/cloudfront/pricing)  
Domaine  
Facturation et tarification  
Question 60Correct  
Quelle fonctionnalité AWS faut-il utiliser pour lancer des instances Amazon EC2 avec des paramètres préconfigurés ?  
Groupes de sécurité  
Gestion des identités et des accès AWS (IAM)  
**Votre réponse est correcte**  
Image machine Amazon (AMI)  
Amazon VPC  
Explication générale  
***Réponse correcte :***

**Amazon Machine Image (AMI)** : Une Amazon Machine Image (AMI) fournit les informations nécessaires au lancement d'une instance. Vous devez spécifier une AMI lors du lancement d'une instance. Vous pouvez lancer plusieurs instances à partir d'une seule AMI si vous avez besoin de plusieurs instances avec la même configuration. Vous pouvez utiliser différentes AMI pour lancer des instances si vous avez besoin d'instances avec des configurations différentes.

***Réponses incorrectes :***

**Cloud privé virtuel (VPC)** : Amazon VPC crée un environnement réseau virtuel isolé dans le cloud AWS, dédié à votre compte AWS. AWS VPC fonctionne comme un réseau TCP/IP traditionnel utilisé pour exploiter un centre de données physique. Il offre au client un contrôle total sur son environnement réseau virtuel.

**Groupes de sécurité** : Un groupe de sécurité agit comme un pare-feu virtuel pour vos instances EC2, contrôlant le trafic entrant et sortant. Lorsque vous lancez une instance EC2 dans un VPC, vous pouvez lui attribuer jusqu'à cinq groupes de sécurité. Les groupes de sécurité s'appliquent au niveau de l'instance, et non au niveau du sous-réseau. Par conséquent, chaque instance d'un sous-réseau de votre VPC peut être associée à un ensemble différent de groupes de sécurité.

**AWS Identity and Access Management (IAM)** : AWS Identity and Access Management (IAM) vous permet de contrôler l’accès à l’ensemble des ressources AWS. Vous pouvez créer et gérer les autorisations AWS pour les utilisateurs et les groupes.

***Liens vers les références :***

[https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html)  
Domaine  
Technologie  
Question 61Correct  
Une entreprise de commerce électronique souhaite permettre à ses utilisateurs de rechercher des produits par la voix. Quel service doit-elle utiliser pour convertir la voix en texte ?  
**Votre réponse est correcte**  
Transcription Amazon  
Amazon SQS  
Amazon Pinpoint  
Amazon Polly  
Explication générale  
***Réponse correcte :***

**Amazon Transcribe** : Amazon Transcribe est un service de reconnaissance vocale automatique qui convertit l'audio en texte. Grâce à l'API Amazon Transcribe, vous pouvez analyser des fichiers audio et obtenir un fichier texte contenant la transcription. Vous pouvez également envoyer un flux audio en direct à Amazon Transcribe et recevoir un flux de transcriptions en temps réel.

***Réponses incorrectes :***

**Amazon Polly** : Amazon Polly est un service qui transforme du texte en parole naturelle, vous permettant de créer des applications vocales et de développer de nouvelles catégories de produits à commande vocale. Grâce à des dizaines de voix réalistes disponibles dans de nombreuses langues, vous pouvez créer des applications vocales compatibles avec de nombreux pays.

**Amazon SQS** : Amazon Simple Queue Service (SQS) est un service de file d'attente de messages entièrement géré qui vous permet de découpler et de faire évoluer les microservices, les systèmes distribués et les applications sans serveur. Avec SQS, vous pouvez envoyer, stocker et recevoir des messages entre composants logiciels, quel que soit leur volume, sans perte de messages ni besoin de services supplémentaires.

**Amazon Pinpoint** : Amazon Pinpoint est un service de communication marketing flexible et évolutif, aussi bien pour les envois entrants que sortants. Vous pouvez interagir avec vos clients via différents canaux tels que l'e-mail, les SMS, les notifications push, la voix ou la messagerie intégrée à l'application. Que vous soyez marketeur ou développeur, Amazon Pinpoint s'adapte à tous vos besoins en matière de communication marketing, d'envois en masse ou de communications transactionnelles. Les marketeurs peuvent concevoir, orchestrer et gérer leurs campagnes de manière visuelle.

***Liens vers les références :***

[https://aws.amazon.com/transcribe](https://aws.amazon.com/transcribe)  
Domaine  
Technologie  
Question 62Correct  
Laquelle des méthodes suivantes doit être utilisée pour accéder à un compartiment Amazon S3 depuis une instance Amazon EC2 ?  
Utilisateurs IAM  
Groupes IAM  
**Votre réponse est correcte**  
Rôle IAM  
Clés d'accès  
Explication générale  
***Réponse correcte :***

**Rôle IAM** : Il est recommandé d'utiliser un rôle IAM pour gérer les informations d'identification temporaires des applications exécutées sur une instance EC2. L'utilisation d'un rôle évite de distribuer des informations d'identification permanentes, telles que des clés d'accès, à une instance EC2. Le rôle fournit des autorisations temporaires que les applications peuvent utiliser lorsqu'elles interagissent avec d'autres ressources AWS. Lors du lancement d'une instance EC2, vous spécifiez un rôle IAM à associer à cette instance. Les applications exécutées sur cette instance peuvent ensuite utiliser les informations d'identification temporaires fournies par le rôle pour effectuer des requêtes.

***Réponses incorrectes :***

**Clé d'accès** : Les clés d'accès sont des informations d'identification permanentes pour un utilisateur IAM ou l'utilisateur racine du compte AWS. Elles permettent de signer des requêtes programmatiques adressées à l'interface de ligne de commande AWS (AWS CLI) ou à l'API AWS (directement ou via le kit de développement logiciel AWS \[SDK\]). Lors de la création d'une paire de clés d'accès, il est impératif de conserver l'ID de clé d'accès et la clé d'accès secrète dans un emplacement sécurisé. La clé d'accès secrète n'est disponible que pendant sa création. En cas de perte, il est nécessaire de supprimer la clé d'accès et d'en créer une nouvelle.

**Utilisateurs IAM** : Un utilisateur IAM est une entité que vous créez dans AWS pour représenter la personne ou l’application qui l’utilise pour interagir avec AWS. Un utilisateur AWS se compose d’un nom et d’identifiants.

**Groupes IAM** : Un groupe d’utilisateurs IAM est un ensemble d’utilisateurs IAM. Vous pouvez utiliser les groupes d’utilisateurs pour définir des autorisations pour un groupe d’utilisateurs, ce qui simplifie la gestion de ces autorisations. Par exemple, vous pouvez créer un groupe d’utilisateurs appelé « Administrateurs » et lui attribuer les types d’autorisations généralement nécessaires aux administrateurs. Tout utilisateur appartenant à ce groupe dispose automatiquement des autorisations qui lui sont attribuées. Si un nouvel utilisateur rejoint votre organisation et doit disposer de privilèges d’administrateur, vous pouvez lui attribuer les autorisations appropriées en l’ajoutant à ce groupe.

***Liens vers les références :***

[https://docs.aws.amazon.com/IAM/latest/UserGuide/id\_roles\_use\_switch-role-ec2.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html)  
Domaine  
Sécurité et conformité  
Question 63Correct  
Parmi les services AWS suivants, lesquels doivent être utilisés pour provisionner automatiquement les ressources AWS ? (Sélectionnez deux réponses.)  
AWS Glue  
Amazon CloudWatch  
**Votre sélection est correcte**  
AWS Elastic Beanstalk  
**Votre sélection est correcte**  
AWS CloudFormation  
Amazone Athéna  
Explication générale  
***Réponses correctes :***

**AWS Elastic Beanstalk** : AWS Elastic Beanstalk est un service convivial permettant de déployer et de faire évoluer des applications et des services web développés avec Java, .NET, PHP, Node.js, Python, Ruby, Go et Docker sur des serveurs courants tels qu'Apache, Nginx, Passenger et IIS. Il vous suffit de téléverser votre code ; Elastic Beanstalk gère automatiquement le déploiement, de l'allocation des ressources à la surveillance de l'état de l'application, en passant par l'équilibrage de charge et la mise à l'échelle automatique.

**AWS CloudFormation** : AWS CloudFormation vous permet de modéliser facilement un ensemble de ressources AWS et tierces liées, de les provisionner rapidement et de manière cohérente, et de les gérer tout au long de leur cycle de vie, en traitant l'infrastructure comme du code. Un modèle CloudFormation décrit vos ressources et leurs dépendances afin que vous puissiez les déployer et les configurer ensemble sous forme de pile. Vous pouvez utiliser un modèle pour créer, mettre à jour et supprimer une pile entière comme une seule unité, aussi souvent que nécessaire, au lieu de gérer les ressources individuellement. Vous pouvez gérer et provisionner des piles sur plusieurs comptes AWS et régions AWS.

***Réponses incorrectes :***

**AWS Glue** : AWS Glue est un service d'intégration de données sans serveur qui simplifie la découverte, la préparation et la combinaison des données pour l'analyse, l'apprentissage automatique et le développement d'applications. AWS Glue propose des interfaces visuelles et basées sur le code pour faciliter l'intégration des données. Les ingénieurs de données et les développeurs ETL (extraction, transformation et chargement) peuvent créer, exécuter et surveiller visuellement les flux de travail ETL en quelques clics dans AWS Glue Studio. Les analystes et les data scientists peuvent utiliser AWS Glue DataBrew pour enrichir, nettoyer et normaliser visuellement les données sans écrire de code. Avec AWS Glue Elastic Views, les développeurs d'applications peuvent utiliser le langage SQL (Structured Query Language) qu'ils connaissent bien pour combiner et répliquer des données provenant de différentes sources de données.

**Amazon Athena** : Amazon Athena est un service de requêtes interactif qui simplifie l'analyse des données stockées sur Amazon S3 à l'aide du langage SQL standard. Athena est facile à utiliser. Il suffit d'indiquer l'emplacement de vos données sur Amazon S3, de définir le schéma et de commencer à interroger les données avec le langage SQL standard. La plupart des résultats sont disponibles en quelques secondes. Avec Athena, plus besoin de processus ETL complexes pour préparer vos données à l'analyse. Ainsi, toute personne maîtrisant le SQL peut analyser rapidement des ensembles de données volumineux.

**AWS CloudWatch** : Amazon CloudWatch est un service de surveillance qui vous fournit des données et des informations exploitables pour surveiller vos applications, réagir aux variations de performances du système et optimiser l'utilisation des ressources. CloudWatch collecte des données de surveillance et d'exploitation sous forme de journaux, de métriques et d'événements. Vous bénéficiez ainsi d'une vue unifiée de l'état opérationnel et d'une visibilité complète sur vos ressources, applications et services AWS exécutés sur AWS et sur site. Avec CloudWatch, vous pouvez détecter les comportements anormaux dans vos environnements, configurer des alarmes, visualiser les journaux et les métriques côte à côte, automatiser des actions, résoudre les problèmes et obtenir des informations précieuses pour garantir le bon fonctionnement de vos applications.

***Liens vers les références :***

[https://aws.amazon.com/elasticbeanstalk](https://aws.amazon.com/elasticbeanstalk)

[https://aws.amazon.com/cloudformation](https://aws.amazon.com/cloudformation)  
Domaine  
Technologie  
Question 64Correct  
Si vous exécutez une instance Linux Amazon EC2 à la demande pendant 9 minutes et 25 secondes, combien de temps sera-t-elle facturée ?  
10 minutes  
1 heure  
9 minutes et 30 secondes  
**Votre réponse est correcte**  
9 minutes et 25 secondes  
Explication générale  
***Réponse correcte :***

**9 minutes et 25 secondes** : La facturation des instances Linux lancées à la demande, réservées et au format Spot se fera par incréments d’une seconde, avec un minimum d’une minute par instance. AWS facturera donc 9 minutes et 25 secondes.

***Réponses incorrectes :***

**9 minutes et 30 secondes**

**10 minutes**

**1 heure**

***Liens vers les références :***

[https://aws.amazon.com/blogs/aws/new-per-second-billing-for-ec2-instances-and-ebs-volumes](https://aws.amazon.com/blogs/aws/new-per-second-billing-for-ec2-instances-and-ebs-volumes)  
Domaine  
Facturation et tarification  
Question 65Correct  
Quel service AWS propose une sauvegarde automatique par défaut ?  
Amazon EBS  
Amazon ECS  
Amazon EC2  
**Votre réponse est correcte**  
Amazon RDS  
Explication générale  
***Réponse correcte :***

**Amazon RDS** : Par défaut, Amazon RDS crée et enregistre automatiquement des sauvegardes de votre instance de base de données en toute sécurité dans Amazon S3 pendant une période de conservation définie par l’utilisateur. Vous pouvez également créer des instantanés, c’est-à-dire des sauvegardes de votre instance effectuées par l’utilisateur et conservées jusqu’à ce que vous les supprimiez explicitement.

Vous pouvez créer une nouvelle instance à partir d'un instantané de base de données à tout moment. Bien que les instantanés de base de données servent de sauvegardes complètes, vous n'êtes facturé que pour l'espace de stockage incrémentiel utilisé.

***Réponses incorrectes :***

**Amazon EBS** : Les instances EC2 utilisant un volume EBS peuvent être sauvegardées en créant un instantané de ce volume EBS.

**Amazon EC2** : Les instances EC2 utilisant un volume EBS peuvent être sauvegardées en créant un instantané de ce volume EBS.

**Amazon** ECS simplifie l'utilisation des conteneurs comme composant de base de vos applications en vous dispensant d'installer, d'exploiter et de faire évoluer votre propre infrastructure de gestion de clusters. Vous pouvez intégrer Amazon ECS à Amazon ECR pour gérer le stockage d'images.

***Liens vers les références :***

[https://aws.amazon.com/rds/features/backup](https://aws.amazon.com/rds/features/backup)  
Domaine  
Technologie  
