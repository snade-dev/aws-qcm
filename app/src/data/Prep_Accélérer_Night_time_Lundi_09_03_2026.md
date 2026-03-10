Question 1Incorrect  
Une entreprise déploie une application web sur des sous-réseaux privés au sein d'un même VPC. Les serveurs d'application doivent récupérer les mises à jour depuis un autre serveur sans être exposés à Internet. Quelle est la méthode la plus sécurisée pour permettre l'accès Internet aux serveurs d'application ?  
**Attribuer des adresses IP publiques aux serveurs.**  
**Votre réponse est incorrecte**  
**Placez une instance NAT dans le sous-réseau privé.**  
**Bonne réponse**  
**Utilisez une passerelle NAT dans le sous-réseau public.**  
**Utilisez une connexion VPN entre les serveurs d'application et le serveur de correctifs.**  
Explication générale  
**Utilisez une passerelle NAT dans le sous-réseau public.**

L'utilisation d'une **passerelle NAT sur le sous-réseau public** est la **méthode la plus sûre et la plus courante** pour permettre aux instances privées d'accéder à Internet. Elle garantit qu'elles peuvent récupérer les mises à jour sans jamais être exposées au trafic entrant provenant d'Internet.

La méthode la plus sûre consiste à placer une **passerelle NAT dans un sous-réseau public** . Cela permet aux serveurs d'applications situés dans des sous-réseaux privés d'accéder à Internet pour les mises à jour **sans être exposés directement** à Internet.  
Question 2Correct  
Quel est le principe clé du pilier Fiabilité du cadre AWS Well-Architected ?  
**Mettre en œuvre l'automatisation pour réduire les tâches manuelles**  
**Utiliser des techniques d'optimisation pour améliorer les performances du système**  
**Votre réponse est correcte**  
**Mettre en œuvre des processus automatisés de sauvegarde et de reprise après sinistre**  
**Mettre en place un système de surveillance et de journalisation pour détecter et diagnostiquer les problèmes**  
Explication générale  
**Mettre en œuvre des processus automatisés de sauvegarde et de reprise après sinistre**

Le principe de fiabilité souligne l'importance de mettre en œuvre des processus automatisés de sauvegarde et de restauration afin de minimiser l'impact des pannes et de garantir une reprise rapide de vos systèmes après une interruption. Cela implique de sauvegarder régulièrement vos données et configurations et de mettre en place des processus automatisés pour la restauration de vos systèmes en cas de sinistre. Ce faisant, vous améliorez la fiabilité.  
Question 3Correct  
Quel service AWS faut-il utiliser pour définir des limites de dépenses et recevoir des alertes lorsque les coûts dépassent un certain seuil ?  
**Calculateur mensuel simple AWS**  
**Facturation AWS**  
**AWS Cost Explorer**  
**Votre réponse est correcte**  
**Budgets AWS**  
Explication générale  
**Budgets AWS**

AWS Budgets vous permet de définir des budgets de coûts et d'utilisation personnalisés et vous alerte lorsque vos coûts ou votre utilisation dépassent (ou devraient dépasser) le montant budgétisé. AWS Budgets utilise vos données de coûts et d'utilisation issues d'AWS Cost Explorer pour vous offrir une vue d'ensemble de vos dépenses. Vous pouvez définir des limites de dépenses pour différents services AWS, comptes, balises, etc., ce qui vous aidera à maîtriser vos coûts et à les maintenir dans les limites souhaitées.  
Question 4Correct  
Quel service AWS peut être utilisé pour évaluer les configurations de vos ressources AWS ?  
**AWS CloudFormation**  
**Gestionnaire de systèmes AWS**  
**Tour de contrôle AWS**  
**Votre réponse est correcte**  
**Configuration AWS**  
Explication générale  
**Configuration AWS**

AWS Config surveille et enregistre en continu les modifications de configuration de vos ressources AWS. Il offre une vue détaillée de l'état de configuration de vos ressources et vous permet d'évaluer leur conformité aux configurations souhaitées et aux règles prédéfinies.

Avec AWS Config, vous pouvez définir des règles personnalisées ou prédéfinies pour évaluer les configurations de ressources et vérifier leur conformité aux normes et bonnes pratiques du secteur. AWS Config peut également être intégré à AWS Lambda pour automatiser les actions correctives en cas de détection de ressources non conformes, ce qui vous permet de corriger automatiquement les écarts de configuration et de garantir la conformité.  
Question 5Correct  
Une entreprise utilise le cloud AWS pour gérer efficacement ses opérations et travaille en permanence à l'amélioration de ses processus.

Quel principe du framework AWS Well-Architected décrit le mieux ce cas d'utilisation ?  
**optimisation des coûts**  
**Votre réponse est correcte**  
**Excellence opérationnelle**  
**efficacité de performance**  
**Sécurité**  
Explication générale  
**Excellence opérationnelle**

Le pilier de l'excellence opérationnelle fournit des orientations sur la gestion et l'exploitation des systèmes afin de générer de la valeur ajoutée pour l'entreprise. Il met l'accent sur l'automatisation des processus, l'amélioration continue et le suivi des opérations pour garantir la résilience, l'efficience et l'efficacité opérationnelles. Il comprend des pratiques telles que la définition des processus, l'utilisation de l'automatisation et la mise en œuvre d'indicateurs et d'un système de suivi pour assurer la réussite opérationnelle.

Dans ce cas précis, l'entreprise a non seulement conçu son infrastructure AWS Cloud pour gérer efficacement ses opérations, mais elle met également l'accent sur l'amélioration continue des processus. Cela démontre clairement qu'elle opère en accord avec les pratiques et les concepts définis dans le pilier « Excellence opérationnelle ».  
Question 6Correct  
Quel est l'avantage de créer des instantanés de volumes Amazon EBS pour sauvegarder des données ?  
**Votre réponse est correcte**  
**Durabilité**  
**Élasticité**  
**Évolutivité**  
**Flexibilité**  
Explication générale  
**Durabilité**

La création d'instantanés de volumes Amazon Elastic Block Store (EBS) offre l'avantage d'une meilleure durabilité. Lorsqu'un instantané EBS est créé, AWS le stocke dans Amazon S3, un service conçu pour garantir la durabilité des données. Amazon S3 réplique les données sur plusieurs zones de disponibilité au sein d'une même région, assurant ainsi une haute durabilité des instantanés et une protection optimale contre la perte de données. En cas de panne ou d'erreur, vous pouvez vous appuyer sur la durabilité des instantanés pour récupérer vos données et restaurer vos volumes EBS à un état antérieur.  
Question 7Correct  
Quels concepts architecturaux permettent de dimensionner les ressources en fonction du trafic utilisateur ou du volume de données sans compromettre les performances ?  
**Concevoir pour l'échec**  
**Votre réponse est correcte**  
**Mettre en œuvre l'élasticité**  
**Composants découplés**  
**Concevoir pour l'agilité**  
Explication générale  
**Mettre en œuvre l'élasticité**

L'élasticité est la capacité d'une architecture à adapter automatiquement et de manière transparente ses ressources à la hausse ou à la baisse en fonction de l'évolution de la demande, comme le trafic utilisateur ou le volume de données, sans compromettre les performances. Ceci est rendu possible grâce à l'utilisation de ressources et d'outils de cloud computing offrant des capacités de mise à l'échelle automatisées basées sur des règles ou des déclencheurs prédéfinis. L'élasticité garantit ainsi que l'architecture peut gérer des charges de travail variables sans intervention manuelle ni impact sur les performances.  
Question 8Correct  
Un organisme de santé prévoit de stocker les dossiers des patients dans Amazon S3. Afin de se conformer aux normes réglementaires, il doit s'assurer que les données sont chiffrées lorsqu'elles sont stockées dans un compartiment S3.

Quelle option faut-il mettre en œuvre pour maintenir le chiffrement ?  
**Votre réponse est correcte**  
**Activer le chiffrement côté serveur (SSE)**  
**Mettre en œuvre les politiques de cycle de vie S3**  
**Configurer la réplication interrégionale S3**  
**Utiliser l'accélération des transferts S3**  
Explication générale  
**Activer le chiffrement côté serveur (SSE)**

Le chiffrement côté serveur (SSE) d'Amazon S3 gère l'ensemble des opérations de chiffrement, de déchiffrement et de gestion des clés de manière transparente. Il existe plusieurs façons d'utiliser SSE avec S3 :

* SSE-S3 : Utilise des clés gérées par Amazon S3.  
* SSE-KMS : utilise AWS Key Management Service (KMS), qui fournit des contrôles supplémentaires basés sur l’audit et les politiques.  
* SSE-C : Lorsque le client fournit les clés de chiffrement.

En utilisant SSE, l'organisation garantit le chiffrement des données stockées au repos. Lorsqu'un objet est placé dans le compartiment, Amazon S3 le chiffre automatiquement. Lors de la récupération de l'objet, Amazon S3 le déchiffre et envoie l'objet déchiffré.  
Question 9Correct  
Conformément au principe de responsabilité partagée, quelles sont les responsabilités d'AWS concernant l'utilisation d'Amazon RDS ? (Sélectionnez DEUX réponses.)  
**Votre sélection est correcte**  
**Mise à jour régulière de la base de données**  
**Votre sélection est correcte**  
**Gestion du système d'exploitation**  
**Construction du schéma relationnel**  
**Configuration des autorisations IAM**  
**Chiffrement des données au repos**  
Explication générale  
**Mise à jour régulière de la base de données**

AWS est responsable de la mise à jour de l'infrastructure sous-jacente et de la garantie qu'Amazon RDS (Relational Database Service) bénéficie des derniers correctifs de sécurité. Cela inclut la mise à jour du moteur de base de données et la correction des vulnérabilités afin de protéger l'infrastructure sous-jacente.

**Gestion du système d'exploitation**

AWS gère le système d'exploitation sous-jacent des instances Amazon RDS. Elle prend en charge des tâches telles que l'installation, la configuration et la maintenance des correctifs et mises à jour du système d'exploitation. AWS garantit la sécurité et la mise à jour du système d'exploitation exécuté sur les instances RDS, déchargeant ainsi ses clients de cette responsabilité.  
Question 10Correct  
Quel plan de support AWS offre des conseils architecturaux adaptés à vos cas d'utilisation spécifiques ?  
**Votre réponse est correcte**  
**Assistance commerciale AWS**  
**Assistance de base AWS**  
**Assistance aux développeurs AWS**  
**Support AWS Enterprise**  
Explication générale  
**Assistance commerciale AWS**

Le support AWS Business fournit des conseils architecturaux détaillés et adaptés à vos cas d'utilisation. Ce service inclut diverses fonctionnalités telles que des audits d'architecture, des conseils sur les cas d'utilisation et des bonnes pratiques. Des experts certifiés AWS vous aident à évaluer l'architecture de votre application et vous proposent des recommandations conformes aux bonnes pratiques AWS. Ce plan est idéal pour les organisations qui nécessitent un niveau de support supérieur à celui du plan Développeur, mais qui n'ont pas besoin de toutes les fonctionnalités du plan Entreprise.  
Question 11Correct  
Une startup de commerce électronique utilise AWS pour ses projets. Elle a reconfiguré son infrastructure AWS pour le lancement d'une nouvelle fonctionnalité le mois dernier. Ce mois-ci, elle a constaté une facture AWS nettement plus élevée que prévu.

Laquelle des propositions suivantes pourrait expliquer cette augmentation de facture ?  
**Ils configurent plusieurs piles AWS CloudFormation créées pour de nouvelles configurations d'infrastructure.**  
**Votre réponse est correcte**  
**Ils utilisent plusieurs fonctions AWS Lambda qui sont exécutées plus fréquemment.**  
**Ils conservent des adresses IP élastiques inutilisées qui ne sont associées à aucune ressource.**  
**Ils ont défini des politiques de compartiment S3 excessivement permissives.**  
Explication générale  
AWS Lambda est facturé **en fonction du nombre d'exécutions et de la durée de la fonction ; une augmentation de l'utilisation (même pour une fonction de petite taille)** peut donc entraîner une **hausse notable des coûts** , notamment si elle est déclenchée par des événements tels que des appels d'API, des chargements S3 ou des tâches planifiées.

* Les frais AWS Lambda sont basés sur **le nombre d'invocations** et **le temps d'exécution** .

* Si la nouvelle fonctionnalité déclenchait plus fréquemment des fonctions Lambda (par exemple, en raison d'une augmentation du trafic utilisateur ou d'un code inefficace), les coûts pourraient augmenter considérablement, même si les fonctions elles-mêmes sont petites.

Question 12Correct  
Quelle est la meilleure pratique pour le pilier « Efficacité des performances » du cadre AWS Well-Architected ?  
**Votre réponse est correcte**  
**Utilisez le type et la taille de ressources adaptés à votre charge de travail.**  
**Utilisez la plus grande taille d'instance disponible pour garantir des performances optimales.**  
**Utilisez une communication synchrone entre les microservices pour minimiser la latence.**  
**Utilisez des bases de données relationnelles pour toutes les charges de travail afin de garantir la cohérence des données.**  
Explication générale  
**Utilisez le type et la taille de ressources adaptés à votre charge de travail.**

Il s'agit également d'une bonne pratique car elle garantit que le système utilise les ressources appropriées à la charge de travail spécifique. En utilisant le type et la taille de ressources adéquats, le système peut atteindre des performances optimales et réduire les coûts inutiles. Par exemple, l'utilisation d'une ressource insuffisante pour une charge de travail peut entraîner des problèmes de performance, tandis que l'utilisation d'une ressource surdimensionnée peut s'avérer coûteuse et engendrer des dépenses superflues.  
Question 13Correct  
Parmi les services suivants, lesquels sont fournis par Amazon Route 53 ? (Sélectionnez DEUX réponses.)  
**Gestion des utilisateurs et des groupes**  
**Bloquer le trafic non autorisé**  
**Votre sélection est correcte**  
**Enregistrement de domaine**  
**Votre sélection est correcte**  
**Gestion DNS**  
**configuration de la politique d'accès**  
Explication générale  
**Enregistrement de domaine**

Amazon Route 53 est un service web de système de noms de domaine (DNS) évolutif, conçu pour offrir aux développeurs et aux entreprises une solution extrêmement fiable et économique pour acheminer les utilisateurs finaux vers des applications Internet. Parmi ses principaux services figure l'enregistrement de noms de domaine, permettant d'enregistrer directement de nouveaux noms de domaine auprès de la plateforme. Route 53 prend en charge une grande variété d'extensions de domaine.

**Gestion DNS**

Une autre fonctionnalité d'Amazon Route 53 est la gestion DNS. Elle permet de traduire les noms de domaine en adresses IP numériques, utilisées par les ordinateurs pour communiquer entre eux. Ce mécanisme est essentiel au fonctionnement d'Internet, car il permet aux utilisateurs d'utiliser des noms de domaine faciles à retenir plutôt que de devoir mémoriser des adresses IP numériques.  
Question 14Incorrect  
Quel plan de soutien choisir pour créer une startup ?  
**Bonne réponse**  
**Plan de soutien aux entreprises**  
**Votre réponse est incorrecte**  
**Plan de soutien aux développeurs**  
**Plan de soutien aux entreprises**  
**Plan de soutien de base**  
Explication générale  
**Plan de soutien aux entreprises**

Pour une startup, le forfait Business est un choix judicieux. Il offre un accès 24h/24 et 7j/7 aux ingénieurs du support cloud par e-mail, chat et téléphone. Il garantit également un temps de réponse inférieur à une heure en cas d'indisponibilité critique des systèmes. De plus, il inclut la gestion des événements d'infrastructure, qui fournit des conseils en matière d'architecture et de mise à l'échelle pour les événements planifiés. Ce forfait offre un bon compromis entre coût et support complet, ce qui est généralement idéal pour les startups qui ont besoin d'un support plus étendu que celui proposé par les forfaits inférieurs, sans pour autant supporter le coût du forfait Enterprise.  
Question 15Correct  
Votre entreprise souhaite migrer son infrastructure vers le cloud AWS. Quel service vous aide à identifier les solutions adaptées à vos besoins ?  
**Budgets AWS**  
**AWS Marketplace**  
**Calculateur mensuel simple AWS**  
**Votre réponse est correcte**  
**Réseau de partenaires AWS (APN)**  
Explication générale  
**Réseau de partenaires AWS (APN)**

Le réseau de partenaires AWS (APN) est le programme de partenariat mondial d'Amazon Web Services. Il vise à accompagner les entreprises partenaires AWS dans la création d'activités ou de solutions performantes basées sur AWS, en leur fournissant un soutien commercial, technique, marketing et de commercialisation. Si une entreprise souhaite migrer son infrastructure vers le cloud AWS, tirer parti de l'expertise et des offres des partenaires APN peut lui apporter des informations précieuses et des solutions sur mesure. Les partenaires APN maîtrisent les services AWS et les bonnes pratiques, et ont fait leurs preuves dans la mise en œuvre de solutions AWS performantes. Ainsi, en collaborant avec l'APN, les entreprises peuvent mieux identifier les services et architectures AWS les plus adaptés à leurs besoins spécifiques.  
Question 16Correct  
Quel service AWS fournit un dispositif physique dédié au stockage et à la protection des clés cryptographiques utilisées pour le chiffrement des données ?  
**AWS Secrets Manager**  
**Service de gestion des clés AWS (KMS)**  
**Amazon Macie**  
**Votre réponse est correcte**  
**AWS CloudHSM**  
Explication générale  
**AWS CloudHSM**

AWS CloudHSM (module de sécurité matériel) fournit un dispositif physique dédié au stockage et à la protection des clés cryptographiques utilisées pour le chiffrement des données. Il offre un stockage sécurisé des clés et des opérations cryptographiques au sein d'un module matériel inviolable. CloudHSM propose des modules de sécurité matériels validés FIPS 140-2 niveau 3 et vous permet de générer, stocker et gérer vos clés cryptographiques en toute sécurité.

Avec CloudHSM, vous contrôlez entièrement vos clés et pouvez les utiliser à diverses fins de chiffrement, notamment pour sécuriser les données sensibles au repos ou en transit. CloudHSM s'intègre aux autres services AWS et offre une solution de gestion des clés hautement sécurisée et évolutive. Grâce à CloudHSM, vous pouvez répondre aux exigences réglementaires et de conformité tout en conservant la maîtrise de vos clés de chiffrement.  
Question 17Correct  
Une entreprise souhaite migrer ses opérations vers le cloud AWS. Elle veut éviter la difficulté d'estimer ses besoins en capacité d'infrastructure avant le déploiement et ne payer que pour ce qu'elle utilise.

Quel avantage du cloud AWS correspond à cet objectif ?  
**Votre réponse est correcte**  
**Tarification à l'utilisation**  
**Fiabilité**  
**Portée mondiale**  
**Économies d'échelle**  
Explication générale  
**Tarification à l'utilisation**

Le modèle de tarification à l'usage permet aux entreprises de ne payer que pour les ressources cloud qu'elles consomment, éliminant ainsi la nécessité de prévoir la capacité de l'infrastructure avant les déploiements. Il offre flexibilité et rentabilité, car les entreprises peuvent adapter leur infrastructure à leurs besoins et ne paient que ce qu'elles utilisent.  
Question 18Correct  
Une organisation souhaite utiliser la stratégie de routage AWS Route 53 pour acheminer le trafic vers un point de terminaison principal. Elle doit également basculer automatiquement vers un point de terminaison secondaire lorsque le point de terminaison principal renvoie des codes d'état HTTP spécifiques ou lorsque des modèles spécifiques sont détectés dans la réponse.

Quelles options suggéreriez-vous pour ce scénario ?  
**Routage par géolocalisation avec vérification des modèles**  
**Routage pondéré avec vérifications de modèles**  
**Votre réponse est correcte**  
**Routage de basculement avec contrôles d'intégrité**  
**Routage en fonction de la latence avec vérification de l'état HTTP**  
Explication générale  
**Routage de basculement avec contrôles d'intégrité**

Le routage de basculement avec contrôles d'intégrité d'Amazon Route 53 est conçu pour répondre précisément aux exigences du scénario décrit. Dans une stratégie de routage de basculement, Route 53 achemine le trafic vers une cible principale. Si les contrôles d'intégrité détectent un problème, comme des codes d'état HTTP spécifiques ou des anomalies dans la réponse, Route 53 bascule automatiquement vers une cible secondaire. Ceci garantit une haute disponibilité et une tolérance aux pannes, ce qui semble être la principale préoccupation de l'organisation dans ce scénario.  
Question 19Correct  
Votre entreprise possède plusieurs instances EC2 et il arrive qu'elles tombent en panne. Vous souhaitez recevoir des notifications par e-mail lorsqu'une instance EC2 est indisponible.

Quel service faut-il utiliser pour répondre à ce besoin ?  
**Inspecteur Amazon**  
**AWS Lambda**  
**AWS CloudTrail**  
**Votre réponse est correcte**  
**AWS CloudWatch**  
Explication générale  
**AWS CloudWatch**

CloudWatch assure la surveillance et l'observabilité de vos ressources AWS, notamment les instances EC2. Vous pouvez configurer des alarmes CloudWatch pour suivre l'état de vos instances EC2 et déclencher des actions lorsque certaines conditions sont remplies. Par exemple, vous pouvez créer une alarme pour être notifié par e-mail lorsqu'une instance EC2 passe à l'état « arrêtée » ou « injoignable ».

En configurant les seuils d'alarme et les actions appropriés, vous recevez des notifications en temps opportun concernant l'état et la disponibilité de vos instances EC2. CloudWatch fournit également des indicateurs et des journaux détaillés à des fins de surveillance et de dépannage, vous aidant ainsi à garantir la fiabilité et les performances de vos instances EC2.  
Question 20Correct  
Une entreprise stocke ses données dans un compartiment Amazon S3 et souhaite renforcer leur sécurité. Un client exige que ses données soient chiffrées avant d'être envoyées vers Amazon S3.

Laquelle des méthodes suivantes doit être utilisée pour satisfaire à cette exigence ?  
**Utilisez AWS Key Management Service (KMS) pour le chiffrement côté serveur.**  
**Configurez les stratégies de compartiment Amazon S3 pour imposer les connexions HTTPS.**  
**Activez le chiffrement côté serveur Amazon S3 avec des clés fournies par le client.**  
**Votre réponse est correcte**  
**Utilisez le chiffrement côté client à l'aide du kit de développement logiciel (SDK) de chiffrement AWS.**  
Explication générale  
**Utilisez le chiffrement côté client à l'aide du kit de développement logiciel (SDK) de chiffrement AWS.**

Le kit de développement logiciel (SDK) de chiffrement AWS simplifie le chiffrement des données côté client avant leur chargement sur S3. Grâce au chiffrement côté client, le client conserve la maîtrise du processus et des clés de chiffrement, renforçant ainsi la sécurité des données. Le SDK de chiffrement AWS offre une interface conviviale pour intégrer le chiffrement aux applications clientes, garantissant la protection des données sensibles avant leur sortie de l'environnement du client. Cette méthode assure un chiffrement de bout en bout, les données restant chiffrées lors de leur transmission et de leur stockage sur Amazon S3.  
Question 21Incorrect  
Dans le cadre du modèle de responsabilité partagée d'AWS, quelle tâche relève de la responsabilité du client ?  
**Sélection du type d'instance Amazon EC2 sur lequel exécuter la fonction AWS Lambda.**  
**Votre réponse est incorrecte**  
**Choisir des zones de disponibilité spécifiques pour déployer le stockage Amazon S3.**  
**Bonne réponse**  
**Appliquer les niveaux de sécurité appropriés aux ressources stockées dans l'environnement AWS.**  
**Application de correctifs logiciels ou réalisation de mises à niveau d'Amazon DynamoDB.**  
Explication générale  
**Appliquer les niveaux de sécurité appropriés aux ressources stockées dans l'environnement AWS.**

Les clients sont responsables de la sécurité des données qu'ils stockent dans l'environnement AWS, notamment de l'application de niveaux de sécurité appropriés à leurs ressources. Cela englobe un large éventail d'actions telles que le chiffrement des données au repos et en transit, la gestion des contrôles d'accès via AWS Identity and Access Management (IAM) et la garantie que les données ne soient accessibles qu'aux utilisateurs autorisés. AWS fournit les outils et services nécessaires pour faciliter ces mesures de sécurité, mais il incombe au client de les mettre en œuvre.  
Question 22Correct  
Quel service permet d'analyser les données stockées dans Amazon S3 à l'aide du SQL standard ?  
**Amazon Redshift**  
**Votre réponse est correcte**  
**Amazone Athéna**  
**Amazon CloudWatch**  
**Amazon FinSpace**  
Explication générale  
**Amazone Athéna**

Amazon Athena permet d'analyser des données stockées dans Amazon S3 à l'aide du langage SQL standard. Il vous permet d'exécuter des requêtes interactives sur les données stockées dans S3 sans nécessiter de provisionnement d'infrastructure ni de chargement de données. Avec Athena, vous pouvez interroger directement des données structurées, semi-structurées et non structurées dans S3 en utilisant la syntaxe SQL. Athena fournit des résultats rapidement, s'adapte automatiquement aux grands volumes de données et vous ne facture que la quantité de données analysées par vos requêtes.  
Question 23Correct  
Une organisation envisage de migrer son infrastructure vers le cloud AWS. Dans le cadre de son analyse financière, elle souhaite identifier les principaux aspects économiques du cloud AWS.

Quelle affirmation est vraie concernant les avantages économiques de l'utilisation du cloud AWS ?  
**AWS Cloud augmente automatiquement les coûts à mesure que votre infrastructure évolue.**  
**AWS Cloud facture ses services même lorsqu'ils ne sont pas utilisés.**  
**Le cloud AWS exige des coûts initiaux élevés pour l'infrastructure.**  
**Votre réponse est correcte**  
**AWS Cloud élimine la nécessité de deviner les besoins futurs en capacité.**  
Explication générale  
**AWS Cloud élimine la nécessité de deviner les besoins futurs en capacité**

L'un des principaux atouts économiques du cloud AWS réside dans la suppression des incertitudes quant aux besoins futurs en capacité. AWS fournit des ressources évolutives, adaptables aux fluctuations de votre activité. Vous pouvez ainsi démarrer avec les ressources nécessaires, puis les augmenter ou les réduire en fonction de la demande, optimisant ainsi vos coûts et la gestion de vos ressources.  
Question 24Correct  
Selon les principes d'architecture cloud d'AWS, quelle bonne pratique permet d'améliorer l'élasticité d'une application ?  
**Déployez la charge de travail dans plusieurs régions afin d'offrir une expérience à faible latence.**  
**Réduire l'interdépendance entre les composants de l'application.**  
**Limitez la mise à l'échelle des ressources AWS pour utiliser pleinement les ressources et réduire les coûts.**  
**Votre réponse est correcte**  
**Ajustement automatique des ressources nécessaires en fonction des variations de la demande.**  
Explication générale  
**Ajustement automatique des ressources nécessaires en fonction des variations de la demande**

Conformément aux principes d'architecture cloud d'AWS, l'ajustement automatique des ressources nécessaires en fonction de la demande est une bonne pratique pour améliorer l'élasticité d'une application. L'élasticité désigne la capacité d'une application ou d'un système à adapter dynamiquement ses ressources à la demande. En ajustant automatiquement les ressources, telles que les instances de calcul ou la capacité de stockage, en réponse aux variations de charge de travail ou à la demande des utilisateurs, une application peut utiliser efficacement ses ressources et garantir des performances optimales. Cette approche permet à l'application de gérer les fluctuations de trafic ou de charge de travail sans intervention manuelle, assurant ainsi évolutivité et réactivité.  
Question 25Correct  
Quelles sont les bonnes pratiques en matière d'architecture cloud AWS ?  
**Utilisez des services étroitement couplés**  
**Votre réponse est correcte**  
**Utiliser une communication faiblement couplée**  
**Déploiement dans une seule zone de disponibilité**  
**Concevoir pour des architectures monolithiques**  
Explication générale  
**Utiliser une communication faiblement couplée**

L'utilisation d'une communication faiblement couplée est une autre bonne pratique d'architecture cloud AWS. Les systèmes faiblement couplés découplent les composants ou services les uns des autres, réduisant ainsi les dépendances et permettant un développement, une mise à l'échelle et une isolation des pannes indépendants. AWS propose divers services, tels qu'Amazon Simple Queue Service (SQS) et Amazon Simple Notification Service (SNS), qui prennent en charge les modèles de communication faiblement couplés. Ces services découplent l'émetteur et le récepteur, leur permettant de fonctionner indépendamment et garantissant une plus grande flexibilité, une meilleure évolutivité et une plus grande résilience de votre architecture.  
Question 26Correct  
Laquelle des solutions suivantes doit être utilisée pour garantir une haute disponibilité dans une application web multi-niveaux sur AWS ?  
**Déploiement des applications dans une seule région AWS afin de simplifier les configurations réseau.**  
**Consolidation de toutes les applications sur une seule instance Amazon EC2 pour une gestion centralisée.**  
**Utiliser un seul équilibreur de charge élastique (ELB) pour tout le trafic, quelles que soient les applications.**  
**Votre réponse est correcte**  
**Déploiement des applications sur plusieurs zones de disponibilité avec les déploiements multi-AZ d'Amazon RDS.**  
Explication générale  
**Déploiement des applications sur plusieurs zones de disponibilité avec les déploiements multi-AZ d'Amazon RDS.**

Pour une application web multicouche, le déploiement sur plusieurs zones de disponibilité est essentiel pour garantir une haute disponibilité. Cette approche assure la continuité de l'application si une zone de disponibilité devient indisponible. L'utilisation d'Amazon RDS (Relational Database Service) avec des déploiements multi-AZ pour les bases de données renforce encore cette résilience. Grâce à RDS multi-AZ, un basculement automatique vers une instance de secours située dans une autre zone de disponibilité s'effectue en cas de défaillance de l'instance principale, garantissant ainsi la continuité du fonctionnement de la base de données et la disponibilité des données.  
Question 27Correct  
L'entreprise souhaite développer un système automatisé de traitement des documents dès leur chargement sur les services de stockage AWS. Elle privilégie une solution ne nécessitant aucune gestion de serveur et offrant des fonctionnalités de mise à l'échelle automatique.

Quel service AWS serait le plus adapté à ce besoin ?  
**AWS Batch**  
**Amazon RDS**  
**Votre réponse est correcte**  
**AWS Lambda**  
**Instances Amazon EC2 avec groupes de mise à l'échelle automatique**  
Explication générale  
**AWS Lambda**

AWS Lambda est un service de calcul sans serveur qui permet aux développeurs d'exécuter du code en réponse à des événements spécifiques, sans avoir à provisionner ni à gérer de serveurs. Avec Lambda, vous ne payez que pour le temps de calcul consommé, ce qui le rend économique. Le service adapte automatiquement les applications en exécutant du code en réponse à chaque déclencheur, gérant ainsi plusieurs tâches simultanément. Les utilisateurs peuvent configurer leur code pour qu'il se déclenche automatiquement à partir d'autres services AWS ou l'appeler directement depuis n'importe quelle application web ou mobile. Lambda prend en charge plusieurs langages de programmation, notamment Python, Node.js, Java et C\#. Il s'intègre aux services AWS pour la journalisation, la surveillance et les configurations avancées.  
Question 28Correct  
Selon le modèle de responsabilité partagée d'AWS, lesquelles des responsabilités suivantes incombent au client dans le cloud AWS ? (Sélectionnez DEUX réponses.)  
**Gestion de l'infrastructure réseau sous-jacente reliant les régions AWS.**  
**Garantir le bon fonctionnement des systèmes de contrôle environnemental au sein des centres de données AWS.**  
**Votre sélection est correcte**  
**Chiffrer les données sensibles avant de les télécharger sur Amazon S3.**  
**Mise en place de mesures de sécurité physique dans les centres de données AWS**  
**Votre sélection est correcte**  
**Configuration des politiques IAM pour gérer l'accès aux ressources AWS.**  
Explication générale  
**Configuration des politiques IAM pour gérer l'accès aux ressources AWS.**

Dans le modèle de responsabilité partagée d'AWS, le client est responsable de la configuration et de la gestion de la sécurité des services AWS qu'il utilise. Cela inclut la gestion et la configuration des politiques de gestion des identités et des accès (IAM). IAM permet aux clients de gérer l'accès aux services et ressources AWS en toute sécurité. En configurant des politiques IAM, les clients définissent qui est authentifié et autorisé à utiliser les ressources, ce qui est essentiel pour garantir la sécurité de leur environnement AWS.

**Chiffrer les données sensibles avant de les télécharger sur Amazon S3.**

Les clients sont responsables de la protection de leurs données dans le cloud. Cela inclut le chiffrement des données sensibles avant leur chargement sur Amazon Simple Storage Service (S3) et la gestion des clés de chiffrement, qu'ils utilisent des clés gérées par AWS ou leurs propres clés (BYOK). Bien qu'AWS fournisse les outils de chiffrement des données, il incombe au client de mettre en œuvre les mesures nécessaires pour protéger ses données au repos.  
Question 29Correct  
Une entreprise souhaite utiliser AWS Batch pour exécuter diverses simulations simultanées sans état, tolérantes aux pannes et pouvant durer jusqu'à 3 heures.

Quel modèle de tarification convient le mieux pour optimiser les coûts et répondre à ces exigences ?  
**Instances dédiées**  
**Instances réservées**  
**Votre réponse est correcte**  
**Instances ponctuelles**  
**Instances à la demande**  
Explication générale  
**Instances ponctuelles**

Les instances Spot permettent aux clients d'acheter la capacité AWS inutilisée à des tarifs réduits, ce qui représente des économies substantielles par rapport à la tarification à la demande. Pour les charges de travail telles que les simulations sans état décrites, tolérantes aux pannes et capables de gérer les interruptions, les instances Spot constituent un choix idéal. AWS Batch est conçu pour gérer et exécuter efficacement les charges de travail de calcul par lots et, combiné aux instances Spot, il permet d'allouer dynamiquement les ressources en fonction de la disponibilité et des préférences de coût. Cette flexibilité rend les instances Spot parfaitement adaptées à l'exécution de simulations à grande échelle ne nécessitant pas une puissance de calcul continue, permettant ainsi à l'entreprise d'optimiser considérablement ses dépenses cloud tout en respectant ses exigences opérationnelles.  
Question 30Correct  
Qui est responsable de l'application des correctifs au système d'exploitation sous-jacent d'Amazon Aurora ?  
**Votre réponse est correcte**  
**L'équipe produit AWS gère cela automatiquement.**  
**L'équipe de développement d'applications au sein de votre entreprise.**  
**Un fournisseur de services gérés tiers.**  
**L'administrateur de base de données (DBA) de votre organisation.**  
Explication générale  
**L'équipe produit AWS gère cela automatiquement.**

Amazon Aurora est un service de base de données relationnelle entièrement géré. L'un des principaux avantages d'Amazon Aurora réside dans la prise en charge par l'équipe produit AWS de la gestion de l'infrastructure sous-jacente, notamment du système d'exploitation. Cela inclut des tâches telles que l'application de correctifs, la mise à jour du système d'exploitation et la garantie de la sécurité et de la mise à jour des serveurs. Les entreprises peuvent ainsi se concentrer sur leur cœur de métier et leurs applications, tandis qu'AWS gère la maintenance complexe de l'infrastructure. En automatisant ces tâches administratives, AWS garantit que vos instances de base de données Aurora fonctionnent toujours dans des environnements à jour, sécurisés et stables, ce qui est essentiel pour des performances et une sécurité optimales.  
Question 31Correct  
Parmi les options suivantes, lesquelles sont les plus rentables lors de l'utilisation d'instances EC2 ? (Sélectionnez DEUX réponses.)  
**Instances à la demande pour les charges de travail soutenues**  
**Votre sélection est correcte**  
**Instances réservées pour les charges de travail soutenues**  
**Définir une limite de dépenses à l'aide des budgets AWS**  
**Votre sélection est correcte**  
**Instances Spot pour les charges de travail sans état et flexibles**  
**Instances optimisées en mémoire pour les charges de travail de calcul intensif**  
Explication générale  
**Instances Spot pour les charges de travail sans état et flexibles**

Les instances Spot d'Amazon EC2 vous permettent d'utiliser la capacité de calcul inutilisée d'Amazon EC2 avec une réduction allant jusqu'à 90 % par rapport aux prix à la demande. Les instances Spot constituent une solution économique si vous pouvez vous permettre des interruptions et une certaine flexibilité quant aux horaires d'exécution de vos applications. Elles sont idéales pour diverses charges de travail tolérantes aux pannes et flexibles, et représentent l'une des solutions les plus économiques pour utiliser EC2.

**Instances réservées pour les charges de travail soutenues**

Les instances réservées Amazon EC2 offrent une réduction importante (jusqu'à 75 %) par rapport aux instances à la demande et garantissent une capacité lorsqu'elles sont utilisées dans une zone de disponibilité spécifique. Elles constituent un excellent choix pour les charges de travail stables, les modèles d'utilisation prévisibles ou les engagements à long terme, ce qui en fait une solution économique pour de nombreux types d'applications, notamment celles dont la charge de travail est prévisible.  
Question 32Correct  
Quelle affirmation décrit correctement les fonctionnalités du calculateur de prix AWS ?  
**Il peut ajuster automatiquement l'allocation des ressources.**  
**Il permet la facturation directe et la gestion des factures.**  
**Votre réponse est correcte**  
**Il peut estimer le coût des services AWS.**  
**Il fournit des spécifications techniques détaillées.**  
Explication générale  
**Il peut estimer le coût des services AWS.**

Le calculateur de prix AWS est conçu pour aider les utilisateurs à estimer le coût des services AWS en fonction de divers paramètres. Cette fonctionnalité est particulièrement utile aux organisations souhaitant prévoir leurs coûts AWS à partir de leurs habitudes de consommation passées. En saisissant des données d'utilisation historiques, les utilisateurs obtiennent une estimation plus précise des coûts futurs, ce qui facilite la planification budgétaire et l'optimisation des coûts. Cette capacité est essentielle à la gestion financière du cloud et s'inscrit dans le cadre de l'optimisation des coûts AWS, qui souligne l'importance de comprendre et de maîtriser les dépenses.  
Question 33Correct  
Selon le modèle de responsabilité partagée d'AWS, laquelle des responsabilités suivantes incombe aux clients ?  
**Configuration des dispositifs d'infrastructure**  
**Votre réponse est correcte**  
**Configuration du réseau et du pare-feu**  
**Contrôles physiques et environnementaux**  
**Mise à jour de l'infrastructure réseau**  
Explication générale  
**Configuration du réseau et du pare-feu**

Conformément au modèle de responsabilité partagée d'AWS, il incombe aux clients de configurer et de gérer les paramètres réseau et de pare-feu. Cela inclut la définition et la mise en œuvre de contrôles d'accès réseau appropriés, de règles de pare-feu, de configurations de routage et de segmentation du réseau. Les clients disposent de la flexibilité nécessaire pour configurer leur infrastructure réseau en fonction de leurs exigences spécifiques et de leurs politiques de sécurité.  
Question 34Correct  
Une application est actuellement hébergée sur plusieurs instances EC2 et doit répartir le trafic entre ces instances. En tant que spécialiste du cloud, quel service recommanderiez-vous ?  
**Votre réponse est correcte**  
**Équilibrage de charge élastique**  
**AWS Auto Scaling**  
**Amazon Cloudfront**  
**Route 53 d'Amazonie**  
Explication générale  
**Équilibrage de charge élastique**

Elastic Load Balancing (ELB) gère efficacement la répartition du trafic réseau entrant entre plusieurs instances EC2. Ce service est conçu pour accroître la disponibilité des applications en distribuant automatiquement le trafic entrant sur plusieurs cibles, telles que les instances EC2 et les conteneurs. En cas de défaillance ou de surcharge d'une instance, ELB redirige le trafic vers une autre instance capable de supporter la charge, préservant ainsi les performances de l'application et réduisant les risques d'interruption de service. Par conséquent, pour une application hébergée sur plusieurs instances EC2 et nécessitant une répartition efficace du trafic, ELB constitue la solution idéale.  
Question 35Correct  
Quel service de stockage AWS offre un stockage de fichiers accessible par plusieurs instances EC2 avec mise à l'échelle automatique, haute disponibilité et hautes performances ?  
**Amazon Elastic Block Store (EBS)**  
**Amazon Simple Storage Service (S3)**  
**Passerelle de stockage Amazon**  
**Votre réponse est correcte**  
**Système de fichiers élastique Amazon (EFS)**  
Explication générale  
**Système de fichiers élastique Amazon (EFS)**

Amazon Elastic File System (EFS) est une solution de stockage de fichiers évolutive pour les instances Amazon EC2. Conçue pour offrir un accès partagé massivement parallèle à des milliers d'instances Amazon EC2, elle permet à vos applications d'atteindre des niveaux élevés de débit et d'IOPS agrégés, avec une latence faible et constante. EFS est ainsi une solution idéale pour les applications et les flux de travail nécessitant un accès partagé aux données, la persistance des données et une haute disponibilité. Grâce à sa capacité élastique, EFS s'adapte automatiquement à l'ajout et à la suppression de fichiers, vous évitant ainsi de provisionner et de gérer la capacité pour accompagner la croissance.  
Question 36Correct  
Quelle affirmation décrit le mieux le concept de régions dans le cloud AWS ?  
**Une région AWS est un point physique permettant de diffuser du contenu statique avec une latence rapide et faible.**  
**Une région AWS est un centre de données unique et massif où sont hébergés tous les services AWS.**  
**Une région AWS est un emplacement physique constitué d'une seule zone de disponibilité.**  
**Votre réponse est correcte**  
**Une région AWS est un emplacement géographique regroupant des zones de disponibilité.**  
Explication générale  
**Une région AWS est un emplacement géographique comprenant un ensemble de zones de disponibilité.**

AWS définit une région comme une zone géographique composée d'au moins deux zones de disponibilité. Chaque région est totalement indépendante et conçue pour être isolée des autres, ce qui garantit une tolérance aux pannes et une stabilité maximales. Cette conception contribue également à réduire la latence interrégionale.

Les zones de disponibilité d'une même région sont interconnectées par des liaisons à faible latence. Une zone de disponibilité comprend généralement un ou plusieurs centres de données, chacun doté d'une alimentation électrique, d'un réseau et d'un système de refroidissement redondants. Chaque zone de disponibilité est conçue pour résister aux incidents survenant dans une autre zone. En déployant des instances dans des zones de disponibilité distinctes, vous protégez vos applications contre la défaillance d'un site unique.  
Question 37Correct  
Quel service faut-il utiliser pour créer des applications graphiques interactives à l'aide d'API open source populaires telles que Gremlin ?  
**Votre réponse est correcte**  
**Amazon Neptune**  
**Amazon ElastiCache**  
**Amazon Redshift**  
**Amazon Aurora**  
Explication générale  
**Amazon Neptune**

Amazon Neptune est un service de base de données graphiques entièrement géré qui simplifie la création et l'exécution d'applications exploitant des ensembles de données fortement interconnectés. Conçu pour stocker des milliards de relations et interroger le graphe avec une latence de l'ordre de la milliseconde, Neptune prend en charge les modèles graphiques populaires Property Graph et RDF, ainsi que leurs langages de requête respectifs Apache TinkerPop Gremlin et SPARQL. Vous pouvez ainsi créer des applications graphiques interactives à l'aide d'API open source familières telles que Gremlin. Par conséquent, pour la création d'applications graphiques interactives avec l'API Gremlin, Amazon Neptune est le choix idéal.  
Question 38Correct  
Quel service AWS fournit des événements récents pour vous aider à gérer les événements en cours et affiche des notifications proactives pour planifier les activités programmées ?  
**Votre réponse est correcte**  
**Tableau de bord de santé personnelle AWS**  
**Inspecteur Amazon**  
**Organisations AWS**  
**AWS OpsWorks**  
Explication générale  
**Tableau de bord de santé personnelle AWS**

Le tableau de bord AWS Personal Health vous fournit les événements récents pour vous aider à gérer les incidents en cours et affiche des notifications proactives pour planifier vos interventions. Il vous offre une vue personnalisée des performances et de la disponibilité des services AWS que vous utilisez. Le tableau de bord Personal Health vous informe en temps réel des incidents de service susceptibles d'affecter vos ressources. Il vous notifie de tout problème en cours, de toute maintenance planifiée ou de tout autre événement nécessitant votre attention.

Le tableau de bord de santé personnel vous permet de consulter l'état des services AWS de votre compte, d'accéder à des informations détaillées sur les événements et leurs impacts, et de recevoir des notifications par e-mail ou via la console de gestion AWS. Il vous aide à rester informé de l'état de vos services AWS, vous permettant ainsi de planifier et de gérer efficacement vos ressources.  
Question 39Correct  
Votre entreprise souhaite migrer vers le cloud AWS. De quels avantages bénéficierez-vous ? (Sélectionnez DEUX réponses.)  
**Peut réduire les coûts de développement d'applications.**  
**Votre sélection est correcte**  
**Payez uniquement ce que vous consommez, et en fonction de votre consommation.**  
**Votre sélection est correcte**  
**Ayez accès aux ressources quand vous en avez besoin.**  
**Peut réduire les coûts promotionnels de l'entreprise.**  
**Les transferts de données entrants et sortants sont gratuits.**  
Explication générale  
**Ayez accès aux ressources quand vous en avez besoin.**

Migrer vers le cloud AWS offre aux entreprises l'avantage d'accéder aux ressources dont elles ont besoin, au moment où elles en ont besoin. AWS propose une vaste gamme de services et de ressources provisionnables à la demande. Ainsi, les entreprises peuvent rapidement adapter leur infrastructure et leurs services à leurs besoins. Elles peuvent facilement lancer de nouvelles instances, provisionner du stockage, configurer des bases de données et déployer divers autres services en quelques clics ou appels d'API. Cette flexibilité leur permet de s'adapter à l'évolution des charges de travail et de gérer les fluctuations soudaines de la demande sans investissements initiaux dans du matériel ni longs processus d'approvisionnement.

**Payez uniquement lorsque et en fonction de votre consommation**

Un autre avantage majeur de la migration vers le cloud AWS réside dans son modèle de tarification à l'usage. Les entreprises ne paient que pour les ressources qu'elles consomment, qu'il s'agisse d'instances de calcul, de stockage, de réseau ou d'autres services. Cela élimine la nécessité d'investissements initiaux importants dans l'infrastructure et leur permet d'aligner leurs coûts sur leur utilisation réelle. De plus, AWS propose des outils et des services de gestion des coûts qui contribuent à optimiser les dépenses et à maîtriser les coûts en surveillant l'utilisation des ressources et en identifiant les axes d'optimisation.  
Question 40Correct  
Une entreprise prévoit de migrer vers le cloud AWS afin de déployer rapidement de nouvelles fonctionnalités en utilisant différents services AWS selon ses besoins. Quels avantages l'entreprise tirera-t-elle de cette migration ?  
**Évolutivité**  
**Votre réponse est correcte**  
**Agilité**  
**Élasticité**  
**Réduction des coûts**  
Explication générale  
**Agilité**

L'agilité désigne la capacité à développer, tester, déployer et faire évoluer rapidement et efficacement des applications et des services. AWS propose une vaste gamme de services de cloud computing, incluant la puissance de calcul, le stockage et les bases de données, qui peuvent être provisionnés et déprovisionnés rapidement selon les besoins. Cette flexibilité permet aux entreprises d'innover plus rapidement, de s'adapter aux évolutions du marché et d'optimiser leurs coûts. De plus, l'infrastructure mondiale d'AWS garantit une faible latence et une haute disponibilité, assurant ainsi la continuité des activités et permettant aux équipes de se concentrer sur la création de valeur plutôt que sur la gestion de l'infrastructure.  
Question 41Correct  
Une organisation cherche à optimiser ses coûts de stockage sur AWS pour un ensemble de données fréquemment et rarement consultées, nécessitant un accès immédiat en cas de besoin. Quels services et fonctionnalités de stockage AWS répondraient le mieux à ces exigences au moindre coût ?  
**Utiliser le SSD Amazon EBS Provisioned IOPS (io1)**  
**Utiliser Amazon S3 Glacier Deep Archive**  
**Votre réponse est correcte**  
**Utiliser la hiérarchisation intelligente d'Amazon S3**  
**Utilisez Amazon FSx**  
Explication générale  
**Utiliser la hiérarchisation intelligente d'Amazon S3**

Amazon S3 Intelligent-Tiering est une classe de stockage conçue pour optimiser les coûts en déplaçant automatiquement les données vers le niveau d'accès le plus économique, sans impact sur les performances ni sur les opérations. Elle est idéale pour les données dont les schémas d'accès sont inconnus ou variables. S3 Intelligent-Tiering surveille les schémas d'accès et déplace les données entre deux niveaux d'accès : l'un pour les données fréquemment consultées et l'autre pour les données rarement consultées. Cette fonctionnalité garantit un stockage des données optimal, réduisant ainsi les coûts de stockage sans intervention manuelle pour analyser les schémas d'accès. Pour les organisations disposant d'un mélange de données fréquemment et rarement consultées nécessitant un accès immédiat, S3 Intelligent-Tiering offre une solution flexible et économique.  
Question 42Correct  
Une entreprise développe une application de trading financier quasi en temps réel utilisant AWS Lambda qui doit traiter les transactions avec une latence de quelques millisecondes (\<10 ms) tout en maintenant une haute disponibilité et une grande évolutivité lors de pics de trafic imprévisibles.

Quel service AWS est le mieux adapté à ce besoin ?  
**Amazon RDS avec déploiement multi-AZ**  
**Votre réponse est correcte**  
**Amazon DynamoDB avec mode de capacité à la demande**  
**Amazon Aurora avec mode de capacité provisionnée**  
**Amazon Redshift avec mise à l'échelle de la concurrence**  
Explication générale  
**Amazon DynamoDB avec mode de capacité à la demande**

Amazon DynamoDB est un service de base de données NoSQL hautement scalable et à faible latence, parfaitement adapté aux applications quasi temps réel. Son mode de capacité à la demande s'ajuste automatiquement pour gérer les pics de trafic soudains et imprévisibles sans intervention manuelle, ce qui le rend idéal pour les cas d'utilisation où les pics de trafic sont fréquents. DynamoDB est conçu pour offrir des performances de l'ordre de la milliseconde à n'importe quelle échelle, répondant ainsi aux exigences de traitement des transactions avec une latence minimale (\< 10 ms).

De plus, l'architecture haute disponibilité de DynamoDB garantit sa capacité à gérer des charges de travail importantes tout en assurant des performances constantes. Son caractère géré permet aux développeurs de se concentrer sur la logique applicative plutôt que sur la gestion de la base de données, et ses mécanismes de réplication intégrés renforcent la durabilité et la disponibilité des données. Ainsi, DynamoDB en mode de capacité à la demande est le choix idéal pour garantir une faible latence, une haute disponibilité et des performances évolutives pour les applications de trading financier.  
Question 43Correct  
Une entreprise exécute une application sur des instances EC2. Quel principe de conception garantit le bon fonctionnement de l'application même si une instance EC2 est indisponible ?  
**Faible latence**  
**Augmenter la capacité**  
**Votre réponse est correcte**  
**Tolérance aux pannes**  
**Équilibrage de charge**  
Explication générale  
**Tolérance aux pannes**

La tolérance aux pannes garantit le fonctionnement continu de l'application et la fourniture de ses services, même en cas de défaillance ou d'interruption. Grâce à la tolérance aux pannes, l'application est conçue pour résister à la défaillance d'instances EC2 individuelles sans subir d'indisponibilité significative ni de dégradation des performances.

Grâce à la tolérance aux pannes, l'application est généralement déployée sur plusieurs instances EC2, formant ainsi une architecture redondante et résiliente. En cas de défaillance d'une instance, la charge de travail bascule automatiquement vers les autres instances disponibles, garantissant ainsi la continuité du service. Cette approche réduit le risque de défaillance unique et assure une haute disponibilité.  
Question 44Incorrect  
Une entreprise souhaite gérer ses services informatiques déployés et gouverner les modèles d'infrastructure en tant que code (IaC).

Quel service AWS répondrait à cette exigence ?  
**Explorateur de ressources AWS**  
**Votre réponse est incorrecte**  
**Organisations AWS**  
**Bonne réponse**  
**Catalogue de services AWS**  
**Gestionnaire de systèmes AWS**  
Explication générale  
**Catalogue de services AWS**

AWS Service Catalog permet aux organisations de créer et de gérer des catalogues de services informatiques utilisables sur AWS. Ce service permet aux administrateurs de contrôler l'utilisation de ces services, garantissant ainsi que tout ce qui est déployé dans l'environnement AWS respecte les normes de conformité et de gestion de l'entreprise. Grâce à AWS Service Catalog, les clients peuvent gérer leurs modèles d'infrastructure en tant que code (IaC), ce qui simplifie le déploiement et la gestion des ressources de manière cohérente pour un large éventail de services. Il offre un emplacement centralisé où des versions spécifiques de produits peuvent être mises à disposition, avec des configurations conformes aux politiques de l'entreprise, rationalisant ainsi le processus de déploiement et renforçant la gouvernance.  
Question 45Correct  
Quel service AWS prend en charge la livraison continue (CD) qui automatise le processus de publication à chaque modification du code ?  
**AWS CodeCommit**  
**AWS CodeBuild**  
**AWS CodeDeploy**  
**Votre réponse est correcte**  
**AWS CodePipeline**  
**AWS CodeBuild**  
Explication générale  
**AWS CodePipeline**

AWS CodePipeline est un service de livraison continue entièrement géré qui vous aide à automatiser vos pipelines de déploiement pour des mises à jour rapides et fiables de vos applications et infrastructures. CodePipeline automatise les étapes de compilation, de test et de déploiement de votre processus de mise en production à chaque modification du code, selon le modèle de mise en production que vous définissez. Vous pouvez ainsi déployer rapidement et de manière fiable de nouvelles fonctionnalités et mises à jour, ce qui en fait la solution idéale pour une livraison continue automatisant le processus de mise en production lors de toute modification du code.  
Question 46Correct  
Que devez-vous faire si vous recevez une notification indiquant que votre compte AWS a été compromis ? (Sélectionnez DEUX réponses.)  
**Votre sélection est correcte**  
**Supprimez de votre compte toutes les ressources que vous n'avez pas créées, telles que les instances Amazon EC2 et les AMI.**  
**Supprimez tous les services en cours d'exécution et recréez ceux dont vous avez besoin.**  
**Votre sélection est correcte**  
**Supprimez tous les utilisateurs IAM potentiellement non autorisés, puis modifiez le mot de passe de tous les autres utilisateurs IAM.**  
**Activez l'authentification multifacteur (MFA) sur l'utilisateur racine avec un dispositif MFA matériel.**  
**Modifiez l'adresse e-mail associée au compte AWS.**  
Explication générale  
**Supprimez de votre compte toutes les ressources que vous n'avez pas créées, telles que les instances Amazon EC2 et les AMI.**

Il est également important de vérifier minutieusement votre compte afin d'y détecter toute ressource non autorisée. Si vous trouvez des ressources que vous n'avez pas créées, telles que des instances EC2, des AMI ou d'autres services, il est crucial de les supprimer immédiatement. La suppression des ressources non autorisées permet d'éliminer les vulnérabilités potentielles et de mettre fin à toute activité malveillante en cours.

**Supprimez tous les utilisateurs IAM potentiellement non autorisés, puis modifiez le mot de passe de tous les autres utilisateurs IAM.**

Vous devez également vérifier vos utilisateurs IAM afin de détecter tout compte potentiellement non autorisé. Si vous identifiez des utilisateurs IAM suspects ou non autorisés, supprimez-les immédiatement. De plus, modifiez les mots de passe de tous les autres utilisateurs IAM afin d'empêcher toute personne non autorisée d'accéder à vos ressources. Cela contribue à protéger votre compte contre tout accès non autorisé ultérieur et sécurise les identifiants de vos utilisateurs IAM.  
Question 47Correct  
Quelle affirmation est vraie selon le déploiement multi-AZ d'Amazon RDS ?  
**Amazon RDS crée des réplicas de manière synchrone et asynchrone.**  
**Amazon RDS ne prend pas en charge les réplicas pour les environnements multi-AZ.**  
**Amazon RDS crée des réplicas de manière asynchrone dans différentes zones de disponibilité.**  
**Votre réponse est correcte**  
**Amazon RDS réplique les données de manière synchrone vers différentes zones de disponibilité.**  
Explication générale  
**Amazon RDS réplique les données de manière synchrone vers différentes zones de disponibilité.**

Amazon RDS réplique les données de manière synchrone dans différentes zones de disponibilité (AZ). Lorsque vous activez le déploiement multi-AZ pour votre instance RDS, Amazon RDS provisionne et maintient automatiquement une réplique de secours synchrone dans une autre AZ. Cette réplique est mise à jour en continu avec les dernières modifications de l'instance de base de données principale.

La réplication synchrone garantit la réplication des données vers le réplica de secours en quasi temps réel, assurant ainsi une haute disponibilité et une grande durabilité des données. En cas de défaillance de la base de données principale, Amazon RDS bascule automatiquement vers le réplica de secours, minimisant ainsi les interruptions de service et garantissant la continuité de vos opérations de base de données.  
Question 48Correct  
Un étudiant a besoin d'un serveur privé virtuel préconfiguré pour son projet de fin d'études. Quel service AWS devrait-il utiliser pour réduire ses coûts mensuels ?  
**AWS Elastic Beanstalk**  
**Votre réponse est correcte**  
**Voile lumineuse Amazon**  
**Amazon ECS**  
**Amazon EC2**  
Explication générale  
**Voile lumineuse Amazon**

Amazon Lightsail est conçu pour simplifier la création et la gestion d'un serveur privé virtuel. Il offre aux développeurs la puissance de calcul, le stockage et les fonctionnalités réseau nécessaires au déploiement et à la gestion de sites web, d'applications web et de bases de données dans le cloud. Lightsail inclut tout le nécessaire pour votre projet à un prix abordable et prévisible, ce qui en fait un excellent choix pour les étudiants ou les petits projets où le coût est un facteur déterminant.  
Question 49Correct  
Quelle méthode d'authentification peut être utilisée lors de l'utilisation d'Amazon IAM depuis l'interface de ligne de commande (CLI) ?  
**AWS KMS**  
**Votre réponse est correcte**  
**Clé d'accès**  
**Clé de route**  
**Clé RSA**  
Explication générale  
**Clé d'accès**

Dans le contexte d'Amazon Web Services (AWS), une clé d'accès est un élément d'identification permettant d'authentifier et d'autoriser les requêtes API adressées aux services AWS. Elle se compose de deux parties : un ID de clé d'accès et une clé d'accès secrète. L'ID de clé d'accès est un identifiant unique, tandis que la clé d'accès secrète est un jeton secret utilisé conjointement avec l'ID de clé d'accès pour signer les requêtes de manière sécurisée. Ces clés sont essentielles pour l'accès programmatique aux ressources AWS, permettant aux utilisateurs et aux applications d'interagir avec les services AWS en toute sécurité via les kits de développement logiciel (SDK) AWS, l'interface de ligne de commande (CLI) AWS ou des appels d'API directs. Les clés d'accès sont généralement associées à un utilisateur ou un rôle IAM (Gestion des identités et des accès), définissant ainsi les autorisations et les niveaux d'accès des entités qui les utilisent.  
Question 50Correct  
Quel service AWS vous aide à écrire du code en ligne ?  
**Votre réponse est correcte**  
**AWS Cloud9**  
**AWS CodeCommit**  
**AWS CodePipeline**  
**AWS CodeDeploy**  
Explication générale  
**AWS Cloud9**

AWS Cloud9 est un environnement de développement intégré (IDE) basé sur le cloud qui vous permet d'écrire, d'exécuter et de déboguer votre code directement depuis votre navigateur. Il inclut un éditeur de code, un débogueur et un terminal. Cloud9 est fourni avec les outils essentiels pour les langages de programmation les plus courants et son environnement est personnalisable selon vos préférences de programmation. Étant donné qu'il est basé sur le cloud, vous pouvez travailler sur vos projets depuis votre bureau, votre domicile ou n'importe où ailleurs, à l'aide d'un ordinateur connecté à Internet.  
Question 51Correct  
Une entreprise prévoit de migrer ses opérations vers AWS. Elle souhaite s'assurer que le système puisse se rétablir automatiquement en cas de panne.

Quel principe du framework AWS Well-Architected répond à ce besoin ?  
**Votre réponse est correcte**  
**Fiabilité**  
**optimisation des coûts**  
**Excellence opérationnelle**  
**efficacité de performance**  
Explication générale  
**Fiabilité**

Le pilier Fiabilité met l'accent sur la capacité à se remettre des interruptions d'infrastructure ou de service, à acquérir dynamiquement des ressources de calcul pour répondre à la demande et à atténuer les perturbations telles que les erreurs de configuration ou les problèmes de réseau passagers. Un système AWS conçu pour garantir la fiabilité intègre une reprise automatisée en cas de panne, assurant ainsi une résolution rapide de toute interruption sans intervention manuelle. Les entreprises peuvent ainsi fournir un niveau de service constant, préservant la confiance de leurs clients et la continuité de leurs activités, deux aspects essentiels des solutions cloud modernes.  
Question 52Correct  
Quelles affirmations sont vraies concernant l'utilisateur root ? (Sélectionnez DEUX réponses.)  
**L'utilisateur root peut être supprimé et recréé selon les besoins.**  
**L'utilisateur racine dispose des mêmes autorisations d'accès que tout autre utilisateur IAM du compte.**  
**Votre sélection est correcte**  
**Il est recommandé d'utiliser l'authentification multifacteurs (MFA) pour l'utilisateur racine afin d'accroître la sécurité.**  
**Votre sélection est correcte**  
**L'utilisateur root dispose de privilèges illimités et ne doit être utilisé que pour la configuration initiale du compte et les tâches de maintenance.**  
**L'utilisateur root doit être utilisé lors du lancement d'une instance EC2 dans le compte.**  
Explication générale  
**L'utilisateur root dispose de privilèges illimités et ne doit être utilisé que pour la configuration initiale du compte et les tâches de maintenance.**

L'utilisateur racine dispose d'un accès et d'un contrôle complets sur toutes les ressources AWS associées au compte. Il est recommandé de réserver l'utilisation de l'utilisateur racine à la configuration initiale du compte et aux tâches de maintenance. Il ne doit pas être utilisé pour les tâches courantes du compte AWS.

**Il est recommandé d'utiliser l'authentification multifacteurs (AMF) pour l'utilisateur principal afin d'améliorer la sécurité.**

Étant donné que l'utilisateur racine dispose d'un accès complet au compte AWS, il est essentiel de sécuriser ce compte en activant l'authentification multifacteur (MFA). L'authentification multifacteur ajoute une couche de sécurité supplémentaire au processus de connexion et réduit les risques d'accès non autorisé au compte.  
Question 53Correct  
Quel service AWS peut être utilisé pour stocker et gérer des secrets tels que des identifiants de base de données ou des clés API avec un chiffrement robuste ?  
**Amazon S3**  
**Votre réponse est correcte**  
**AWS Secrets Manager**  
**AWS Lambda**  
**Service d'annuaire AWS**  
Explication générale  
**AWS Secrets Manager**

Secrets Manager offre un emplacement sécurisé et centralisé pour stocker et gérer les secrets tels que les identifiants de base de données ou les clés API. Il chiffre les secrets à l'aide d'AWS Key Management Service (KMS) et vous permet de définir des contrôles d'accès précis basés sur les politiques IAM.

Avec Secrets Manager, vous pouvez facilement récupérer des secrets par programmation, soit directement via les kits de développement logiciel AWS (SDK), soit en les intégrant à d'autres services AWS tels qu'Amazon RDS ou Amazon DocumentDB. AWS Secrets Manager offre également une fonctionnalité de rotation automatique des secrets, ce qui contribue à renforcer la sécurité en générant et en mettant à jour automatiquement les informations d'identification à intervalles réguliers.  
Question 54Correct  
Une entreprise envisage de migrer son infrastructure sur site vers AWS. Dans le cadre de son évaluation, elle souhaite connaître l'impact des avantages économiques du cloud sur ses coûts.

Quelle affirmation est vraie concernant les avantages économiques de l'utilisation d'AWS ?  
**Votre réponse est correcte**  
**AWS propose un modèle de paiement à l'usage qui permet de réduire les dépenses d'investissement initiales.**  
**La migration vers AWS éliminera automatiquement les besoins en matière de conformité et de coûts de licence.**  
**L'utilisation d'instances dédiées sur AWS est toujours plus rentable que les solutions sur site.**  
**Sur AWS, les coûts opérationnels sont fixes, indépendamment des habitudes d'utilisation de l'entreprise.**  
Explication générale  
**AWS propose un modèle de paiement à l'usage qui permet de réduire les dépenses d'investissement initiales.**

Le modèle de paiement à l'usage d'AWS permet aux entreprises de ne payer que pour les ressources informatiques qu'elles consomment. Ce modèle de tarification transforme les dépenses d'investissement (CapEx) en dépenses d'exploitation (OpEx), offrant ainsi la flexibilité nécessaire pour adapter les ressources à la demande. Il aide les entreprises à éviter les coûts initiaux importants liés à l'achat et à la gestion de serveurs physiques et d'infrastructures de centres de données. En migrant vers le cloud, les entreprises peuvent convertir leurs coûts fixes en coûts variables, ce qui peut engendrer des économies substantielles, notamment en cas de demande imprévisible.  
Question 55Correct  
Pour être conforme à la réglementation, une organisation doit consigner, stocker et accéder à toutes les actions effectuées sur ses ressources AWS.

Quel service AWS serait le mieux adapté à ce besoin ?  
**Journaux d'accès AWS**  
**Configuration AWS**  
**Amazon CloudWatch**  
**Votre réponse est correcte**  
**AWS CloudTrail**  
Explication générale  
**AWS CloudTrail**

AWS CloudTrail fournit l'historique des événements de votre compte AWS, y compris les actions effectuées via la console de gestion AWS, les kits de développement logiciel (SDK) AWS, les outils en ligne de commande et d'autres services AWS. Cet historique permet de consulter les actions réalisées sur votre compte et de suivre les modifications apportées à vos ressources AWS. CloudTrail enregistre des informations détaillées sur les événements, notamment l'auteur de la requête, les services utilisés, les actions effectuées, leurs paramètres et les éléments de réponse renvoyés par le service AWS. Les journaux CloudTrail peuvent être analysés, stockés et archivés pour répondre aux exigences de conformité. Ils peuvent être directement intégrés à Amazon S3 pour le stockage, ce qui les rend accessibles pour tout audit ou enquête ultérieur.  
Question 56Correct  
Quel service AWS permet de définir et de provisionner une infrastructure sous forme de code, permettant un déploiement automatisé et cohérent dans différents environnements ?  
**AWS OpsWorks**  
**Votre réponse est correcte**  
**AWS CloudFormation**  
**AWS Elastic Beanstalk**  
**AWS CodePipeline**  
Explication générale  
**AWS CloudFormation**

AWS CloudFormation simplifie la gestion de l'infrastructure en permettant la création et le provisionnement de ressources AWS à l'aide de modèles déclaratifs. Ces modèles, écrits en JSON ou YAML, définissent l'état souhaité de l'infrastructure, notamment les instances EC2, les bases de données, les composants réseau, etc.

Vous créez un modèle décrivant toutes les ressources AWS souhaitées, et CloudFormation se charge de leur provisionnement et de leur configuration. Ce service garantit la cohérence entre les différents environnements, vous permettant ainsi de créer des copies identiques pour le développement, les tests et la production. Il prend également en charge les restaurations automatiques en cas d'erreurs détectées lors du déploiement, ce qui améliore la fiabilité et réduit les risques.  
Question 57Correct  
Quelle affirmation est vraie concernant AWS Auto Scaling ?  
**Votre réponse est correcte**  
**La mise à l'échelle automatique peut supprimer automatiquement les instances défectueuses.**  
**Auto Scaling déploie AWS Shield lorsqu'une attaque DDoS est détectée.**  
**Un groupe Auto Scaling ne peut pas être configuré pour s'adapter automatiquement.**  
**Un groupe de mise à l'échelle automatique peut être utilisé pour couvrir plusieurs régions.**  
Explication générale  
**Auto Scaling peut supprimer automatiquement les instances défectueuses**

AWS Auto Scaling surveille les applications et ajuste automatiquement la capacité pour garantir des performances stables et prévisibles au moindre coût. Il peut supprimer automatiquement les instances défaillantes et les remplacer par de nouvelles. Ainsi, votre application bénéficie en permanence des ressources de calcul nécessaires.

AWS Auto Scaling ajuste automatiquement la capacité de vos ressources AWS selon des politiques de mise à l'échelle prédéfinies. Il vous permet de dimensionner automatiquement vos applications et votre infrastructure en fonction de l'évolution de la demande, garantissant ainsi des performances optimales, une réduction des coûts et une haute disponibilité. Ces politiques peuvent s'appuyer sur différents indicateurs, tels que l'utilisation du processeur, le trafic réseau ou des indicateurs d'application personnalisés. Auto Scaling surveille en permanence ces indicateurs et prend des décisions de mise à l'échelle en conséquence.  
Question 58Correct  
Quel service AWS recommande de suivre les bonnes pratiques pour améliorer la sécurité et les performances ?  
**AWS CloudTrail**  
**Votre réponse est correcte**  
**Conseiller de confiance AWS**  
**Amazon CloudWatch**  
**Artefact AWS**  
Explication générale  
**Conseiller de confiance AWS**

AWS Trusted Advisor vous fournit des recommandations pour améliorer la sécurité et les performances. Il analyse votre environnement AWS et vous propose des conseils en temps réel basés sur les bonnes pratiques et les recommandations architecturales d'AWS. Trusted Advisor évalue différents aspects de votre compte AWS, notamment l'optimisation des coûts, la sécurité, les performances et la tolérance aux pannes, et vous fournit des recommandations concrètes pour optimiser vos ressources et améliorer la sécurité et les performances globales de vos applications et de votre infrastructure.

Trusted Advisor vous fournit des analyses et des suggestions pour optimiser l'utilisation des ressources, réduire les coûts, renforcer la sécurité et améliorer l'excellence opérationnelle. Il vous envoie des notifications proactives et assure une surveillance continue pour garantir le respect des bonnes pratiques AWS, vous aidant ainsi à identifier les failles de sécurité potentielles, les goulots d'étranglement des performances et les opportunités de réduction des coûts.  
Question 59Correct  
Quelle affirmation concernant AWS Shield est correcte ?  
**Mettez en place un pare-feu qui protège contre les attaques Web compromises, comme les bots.**  
**Surveille en permanence les comptes et les charges de travail AWS afin de détecter toute activité malveillante.**  
**Votre réponse est correcte**  
**Fournir un service de protection contre les attaques par déni de service distribué (DDoS).**  
**Détecte et protège contre les injections SQL et les attaques de type cross-site scripting.**  
Explication générale  
**Fournir un service de protection contre les attaques par déni de service distribué (DDoS)**

AWS Shield offre une protection contre les attaques par déni de service distribué (DDoS). Ce service de protection DDoS géré fournit des mesures de sécurité avancées pour protéger les ressources AWS, telles que les instances EC2, les équilibreurs de charge Elastic Load Balancer et les distributions Amazon CloudFront, contre les attaques DDoS. AWS Shield contribue à détecter et à atténuer les attaques DDoS volumétriques, par épuisement d'état et de couche application, garantissant ainsi la disponibilité et les performances des applications et services exécutés dans le cloud AWS. Il propose deux niveaux de protection : Standard et Avancé. Le niveau Avancé offre une protection DDoS renforcée et des fonctionnalités avancées pour les scénarios plus complexes.  
Question 60Correct  
Laquelle des fonctionnalités suivantes d'Amazon EC2 permet aux utilisateurs de lancer des instances dans plusieurs zones de disponibilité et de les gérer comme une seule unité logique ?  
**Instances Spot Amazon EC2**  
**Votre réponse est correcte**  
**Flotte Amazon EC2**  
**Groupes de placement Amazon EC2**  
**Mise à l'échelle automatique d'Amazon EC2**  
Explication générale  
**Flotte Amazon EC2**

Amazon EC2 Fleet est une fonctionnalité qui simplifie le provisionnement de la capacité Amazon EC2 sur différents types d'instances, zones de disponibilité et modèles d'achat (instances à la demande, réservées et Spot) via un seul appel d'API. Ce service est conçu pour garantir la haute disponibilité des applications face à une demande imprévisible en déployant des instances dans plusieurs zones de disponibilité et en les gérant comme une seule unité logique. Ainsi, EC2 Fleet permet aux utilisateurs d'optimiser leurs coûts et leurs performances, tout en assurant une répartition équilibrée de la capacité entre les zones de disponibilité spécifiées.  
Question 61Correct  
Quel service AWS permet de stocker, gérer et déployer des images de conteneurs ?  
**Amazon Simple Storage Service (S3)**  
**Amazon Elastic Compute Cloud (EC2)**  
**Amazon Elastic Kubernetes Service (EKS)**  
**Votre réponse est correcte**  
**Amazon Elastic Container Registry (ECR)**  
Explication générale  
**Amazon Elastic Container Registry (ECR)**

Amazon Elastic Container Registry (ECR) est un registre d'images de conteneurs entièrement géré qui simplifie le stockage, la gestion et le déploiement d'images de conteneurs Docker pour les développeurs. Intégré à Amazon Elastic Container Service (ECS), ECR simplifie le passage du développement à la production et s'impose comme une solution incontournable pour le stockage, la gestion et le déploiement d'images de conteneurs.  
Question 62Correct  
Parmi les éléments suivants, lesquels influencent le prix d'une instance EC2 ? (Sélectionnez DEUX réponses.)  
**Groupe de sécurité**  
**Nombre d'adresses IP privées**  
**Votre sélection est correcte**  
**Type d'instance**  
**Votre sélection est correcte**  
**capacité de stockage**  
**La zone de disponibilité**  
Explication générale  
**Type d'instance**

Le choix du type d'instance Amazon EC2 influe considérablement sur son coût. Ce type détermine la configuration matérielle du serveur hôte. Chaque type offre des capacités de calcul, de mémoire et de stockage différentes et est regroupé en familles d'instances selon ces caractéristiques. Par conséquent, plus le type d'instance est puissant et riche en ressources, plus son coût est élevé.

**capacité de stockage**

Le coût d'une instance EC2 dépend également de la capacité de stockage utilisée. Amazon EC2 propose différentes options de stockage que vous pouvez associer à vos instances. Selon l'option choisie (par exemple, volumes EBS, stockage d'instance), le coût peut augmenter avec la capacité de stockage ajoutée. Par exemple, la tarification des volumes EBS est basée sur la quantité de stockage provisionnée et consommée.  
Question 63Correct  
Laquelle des fonctionnalités suivantes est gratuite pour tous les plans de support AWS ?  
**Accès par téléphone, courriel et messagerie instantanée**  
**Votre réponse est correcte**  
**Tableau de bord de santé personnelle AWS**  
**API de support AWS**  
**Gestion des événements d'infrastructure**  
Explication générale  
**Tableau de bord de santé personnelle AWS**

Le tableau de bord AWS Personal Health vous alerte et vous fournit des conseils de résolution lorsque des événements AWS susceptibles d'affecter votre compte surviennent. Il vous offre une vue personnalisée des performances et de la disponibilité des services AWS sous-jacents à vos ressources AWS. Il est accessible gratuitement à tous les clients AWS.  
Question 64Correct  
Quel facteur contribue à l'agilité du cloud computing AWS ?  
**Le faible coût requis pour commencer à utiliser les services cloud**  
**La rapidité avec laquelle AWS introduit de nouvelles régions géographiques**  
**Réduction des ressources informatiques inutilisées**  
**Votre réponse est correcte**  
**Le déploiement rapide des services et ressources AWS**  
Explication générale  
**Le déploiement rapide des services et ressources AWS**

L'agilité désigne la capacité à déployer et gérer rapidement des ressources, permettant aux entreprises de répondre promptement à leurs besoins et aux évolutions du marché. Cet aspect de l'agilité permet aux organisations de lancer de nouvelles applications, d'adapter leurs ressources à la demande et d'expérimenter de nouvelles idées sans les longs délais d'acquisition et de mise en place associés aux infrastructures informatiques traditionnelles. La nature à la demande du cloud signifie que des ressources telles que les instances de calcul, le stockage et les bases de données peuvent être provisionnées en quelques minutes, offrant un niveau de flexibilité et de rapidité essentiel aux entreprises souhaitant conserver un avantage concurrentiel.  
Question 65Correct  
Une grande entreprise souhaite envoyer un e-mail marketing en masse à ses clients. Quel service recommanderiez-vous ?  
**Amazon SQS**  
**Votre réponse est correcte**  
**Amazon Pinpoint**  
**AWS Fargate**  
**Amazon Connect**  
Explication générale  
**Amazon Pinpoint**

Amazon Pinpoint est un service évolutif et flexible qui vous permet d'interagir avec vos clients via de multiples canaux, notamment par e-mail, SMS, notifications push, etc. Il offre des fonctionnalités spécialement conçues pour les communications marketing, telles que des campagnes ciblées, des messages personnalisés et des analyses.

Avec Amazon Pinpoint, vous pouvez créer et gérer des segments clients selon des critères précis, garantissant ainsi que vos e-mails marketing atteignent la bonne audience. Il propose des modèles et des outils pour concevoir des e-mails attrayants et prend en charge des fonctionnalités avancées telles que les tests A/B et l'analyse des campagnes pour mesurer l'efficacité de vos actions marketing. Pinpoint s'intègre également à d'autres services AWS et plateformes tierces, ce qui en fait une solution complète pour la gestion et l'optimisation de vos communications marketing.  
