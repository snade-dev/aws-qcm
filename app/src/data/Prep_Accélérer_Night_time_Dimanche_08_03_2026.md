Question 1Correct  
Quelle fonctionnalité permet de générer un rapport listant tous les utilisateurs et leurs identifiants, y compris les mots de passe et les clés d'accès ?  
**Rapports d'artefacts AWS**  
**Rapports sur les coûts et l'utilisation**  
**Votre réponse est correcte**  
**Rapports d'identification IAM**  
**Rapports de répartition des coûts**  
Explication générale  
**Rapports d'identification IAM**

Le rapport d'informations d'identification IAM est un document répertoriant tous les utilisateurs de votre compte AWS et l'état de leurs différentes informations d'identification, notamment les mots de passe, les clés d'accès, les dispositifs d'authentification multifacteur (MFA), etc. Ce service est précieux pour auditer la sécurité de votre compte et identifier d'éventuelles vulnérabilités ou problèmes. Le rapport ne divulgue aucune information sensible telle que les mots de passe ou les clés d'accès, mais fournit simplement une vue d'ensemble de leur état, ce qui en fait un outil sûr et sécurisé pour la gestion de votre compte.  
Question 2Correct  
Un ingénieur système tente de modifier la configuration d'un service AWS, mais l'accès lui est refusé, même si une politique IAM l'autorise.

Quelle pourrait être la cause de ce problème ?  
**La région AWS du service ne prend pas en charge cette action.**  
**Votre réponse est correcte**  
**Une instruction « Refuser » explicite existe dans une autre politique IAM jointe**  
**Le compte AWS a dépassé sa limite de service pour le mois.**  
**Le service AWS est actuellement en cours de maintenance.**  
Explication générale  
**Une instruction « Refuser » explicite existe dans une autre politique IAM jointe**

Dans AWS IAM, l'accès à une action est refusé par défaut. Si une autorisation explicite (« Allow ») est présente, l'accès est accordé. En revanche, une autorisation explicite (« Deny ») prévaut toujours sur toute autorisation, quel que soit son emplacement. Ainsi, si plusieurs stratégies sont associées à un utilisateur, même si l'une d'elles autorise une action spécifique, la présence d'une autorisation (« Deny ») pour cette action dans l'une de ces stratégies bloquera l'accès. Ceci permet aux administrateurs de sécuriser les actions et ressources sensibles.  
Question 3Incorrect  
Quel est l'objectif de l'outil AWS Well-Architected ?  
**Bonne réponse**  
**Simuler et valider des architectures cloud pour optimiser leur fiabilité et leurs coûts**  
**Pour surveiller et optimiser les ressources AWS en temps réel**  
**Votre réponse est incorrecte**  
**Fournir une liste de contrôle exhaustive des meilleures pratiques AWS**  
**Générer automatiquement le code nécessaire au déploiement d'une infrastructure dans AWS**  
Explication générale  
**Simuler et valider des architectures cloud pour optimiser leur fiabilité et leurs coûts**

L'outil AWS Well-Architected aide les clients à analyser et à optimiser leurs charges de travail en s'appuyant sur les bonnes pratiques définies dans le cadre AWS Well-Architected. Il fournit des conseils pour concevoir et exploiter des systèmes fiables, sécurisés, performants et économiques dans le cloud AWS.

L'objectif principal de l'outil AWS Well-Architected est de simuler et de valider les architectures cloud afin d'aider les clients à identifier les problèmes potentiels et à améliorer la fiabilité et la rentabilité de leurs charges de travail AWS. Cet outil propose un ensemble de questions et de bonnes pratiques permettant aux clients d'évaluer leurs architectures et d'identifier les axes d'amélioration. Il offre également des recommandations et des ressources pour les aider à optimiser leurs charges de travail.  
Question 4Correct  
Une entreprise souhaite se conformer aux normes réglementaires sur AWS. Quel service AWS recommanderiez-vous pour obtenir une analyse détaillée des contrôles de conformité d'AWS ?  
**Conseiller de confiance AWS**  
**Tableau de bord de santé personnelle AWS**  
**Votre réponse est correcte**  
**Centre de conformité AWS**  
**Gestionnaire de systèmes AWS**  
Explication générale  
**Centre de conformité AWS**

AWS Compliance Center centralise vos recherches sur les exigences réglementaires liées au cloud et leur impact sur votre environnement. Il propose un ensemble d'informations et d'outils de conformité pour vous aider à gérer votre infrastructure dans le cloud AWS. Grâce à AWS Compliance Center, les clients peuvent appréhender facilement les exigences de conformité complexes et garantir leur respect des normes réglementaires spécifiques.  
Question 5Correct  
Selon le cloud AWS, quel principe de conception réduit l'interdépendance des systèmes ?  
**Votre réponse est correcte**  
**Couplage lâche**  
**Sécurité**  
**Supprimer les points de défaillance uniques**  
**Automation**  
Explication générale  
**Couplage lâche**

Le principe de conception de systèmes faiblement couplés réduit l'interdépendance des systèmes dans la conception du cloud AWS. Dans une architecture faiblement couplée, les composants sont interconnectés de manière à interagir sans être fortement dépendants ni imbriqués. Cela permet à chaque composant de rester fonctionnel et de fonctionner indépendamment, même en cas de défaillance ou de modification d'une autre partie du système. En réduisant la dépendance des composants les uns envers les autres, on accroît la résilience, la flexibilité et l'évolutivité du système, un principe fondamental de la conception d'une architecture cloud robuste.  
Question 6Correct  
Laquelle des affirmations suivantes est vraie concernant Amazon Route 53 ?  
**Votre réponse est correcte**  
**Il est possible de configurer les paramètres DNS pour les contrôles d'intégrité et d'utiliser une politique de routage pour l'équilibrage de charge.**  
**Offre une protection contre les attaques par déni de service distribué (DDoS) pour les applications exécutées sur AWS.**  
**Permet d'établir une connexion directe entre le cloud AWS et le centre de données sur site.**  
**Il analyse en permanence les charges de travail AWS afin de détecter les vulnérabilités logicielles et les expositions réseau non intentionnelles.**  
Explication générale  
**Il est possible de configurer les paramètres DNS pour les contrôles d'intégrité et d'utiliser une stratégie de routage pour l'équilibrage de charge.**

Amazon Route 53 est un service web DNS (Domain Name System) évolutif et hautement disponible. Vous pouvez configurer des contrôles d'intégrité DNS pour acheminer le trafic vers des points de terminaison opérationnels ou surveiller indépendamment l'état de votre application et de ses points de terminaison. Route 53 prend également en charge diverses stratégies de routage DNS permettant de configurer l'équilibrage de charge.  
Question 7Correct  
Quelle fonctionnalité AWS vous permet de catégoriser et de suivre vos coûts AWS de manière détaillée ?  
**Journaux CloudWatch**  
**Budgets AWS**  
**Catalogue de services AWS**  
**Votre réponse est correcte**  
**Étiquettes de répartition des coûts**  
Explication générale  
**Étiquettes de répartition des coûts**

Les balises d'allocation des coûts vous aident à organiser vos ressources AWS et à maîtriser vos coûts. Il s'agit d'une paire clé-valeur que vous pouvez associer à vos ressources AWS. Une fois activées, AWS génère un rapport d'allocation des coûts présentant l'utilisation et les coûts agrégés par vos balises, ce qui vous permet de suivre et de catégoriser vos coûts AWS de manière détaillée.

En associant des identifiants à leurs ressources (nom du projet, service, environnement, etc.), les utilisateurs peuvent organiser leur utilisation et leurs coûts AWS selon différents critères. Ceci facilite l'analyse détaillée des coûts, la budgétisation et le reporting, permettant ainsi aux organisations de comprendre leurs dépenses et d'optimiser leurs investissements AWS. AWS propose deux types d'étiquettes d'affectation des coûts : les « étiquettes système » générées par AWS et les « étiquettes utilisateur », définies par l'utilisateur. Ces deux types d'étiquettes peuvent être utilisés pour un suivi et un reporting précis des coûts.  
Question 8Incorrect  
Une plateforme de streaming utilise AWS Cloud pour stocker et distribuer son contenu vidéo. Toutes les ressources vidéo statiques sont stockées dans S3 sur plusieurs régions. Afin de simplifier l'accès tout en maintenant une faible latence, quelle fonctionnalité AWS devrait-elle implémenter ?  
**Réplication interrégionale Amazon S3**  
**Bonne réponse**  
**Points d'accès multirégionaux Amazon S3**  
**Votre réponse est incorrecte**  
**Amazon CloudFront avec S3 Origin**  
**Accélérateur mondial AWS**  
Explication générale  
**Points d'accès multirégionaux Amazon S3.**

Les points d'accès multirégionaux Amazon S3 simplifient la création d'applications nécessitant un accès global aux données en rationalisant la convention de nommage des points de terminaison et en acheminant automatiquement les requêtes vers les données dans la région AWS la plus appropriée. Au lieu de gérer les requêtes sur plusieurs compartiments et régions S3, les points d'accès multirégionaux S3 offrent un point d'accès unique pour visualiser et accéder aux données à l'échelle mondiale, réduisant ainsi la complexité de l'application. Ceci est particulièrement avantageux pour les entreprises de streaming, car les utilisateurs de différentes régions peuvent accéder efficacement aux vidéos avec une faible latence sans que l'application ait besoin de gérer plusieurs points de terminaison régionaux S3.  
Question 9Correct  
Une entreprise prévoit d'héberger une nouvelle application sur des instances Amazon EC2. L'application fonctionnera en continu et son utilisation devrait augmenter au cours des prochaines années.

Quel modèle d'achat d'instances EC2 est le plus rentable dans ce scénario ?  
**Hôtes dévoués**  
**Instances à la demande**  
**Instances ponctuelles**  
**Votre réponse est correcte**  
**Plans d'épargne**  
Explication générale  
**Plans d'épargne**

Les plans d'économies AWS permettent de réaliser d'importantes économies pour les clients dont l'utilisation est prévisible. Ils offrent des modèles de tarification flexibles pour les instances EC2 et l'utilisation d'AWS Fargate, permettant aux clients de s'engager sur un volume d'utilisation constant (mesuré en dollars par heure) sur une période de 1 ou 3 ans. Les plans d'économies appliquent automatiquement des tarifs réduits à l'utilisation pendant la période d'engagement spécifiée, en ajustant l'utilisation des instances dans les différentes régions et familles d'instances AWS afin d'optimiser les économies. Cela simplifie la gestion des coûts et offre des réductions substantielles par rapport à la tarification à la demande.

En utilisant des plans d'épargne, l'entreprise peut planifier et gérer efficacement son budget et réduire ses coûts opérationnels globaux pour l'avenir prévisible, ce qui en fait le choix le plus rentable dans ce cas de figure.  
Question 10Correct  
Quel service AWS peut être utilisé pour établir une connexion sécurisée entre plusieurs emplacements sur site et des ressources AWS, les données étant chiffrées lors du transit ?  
**Votre réponse est correcte**  
**VPN AWS**  
**AWS Transit Gateway**  
**AWS CloudHSM**  
**AWS Direct Connect**  
Explication générale  
**VPN AWS**

AWS VPN (Virtual Private Network) permet une communication sécurisée entre les réseaux distants et les ressources AWS. Il établit des connexions chiffrées via Internet, garantissant ainsi la confidentialité et l'intégrité des données. En s'appuyant sur des protocoles standards du secteur tels qu'IPSec, AWS VPN permet une intégration transparente avec l'infrastructure sur site existante et étend l'accès sécurisé aux services cloud AWS. Cette solution évolutive offre des configurations flexibles, prenant en charge divers cas d'utilisation tels que l'accès distant, la connectivité de site à site et les déploiements de cloud hybride, permettant ainsi aux entreprises de construire des architectures réseau robustes et résilientes.

AWS propose deux types de VPN : le VPN de site à site et le VPN client. Le VPN de site à site permet de connecter en toute sécurité des réseaux entiers à AWS, tandis que le VPN client est conçu pour connecter des clients individuels. De ce fait, le VPN AWS ​​est la solution idéale pour connecter en toute sécurité plusieurs sites sur site à l'environnement AWS.  
Question 11Correct  
Quel service AWS permet de détecter et d'analyser rapidement des visages dans des millions d'images et de vidéos en quelques minutes ?  
**Votre réponse est correcte**  
**Reconnaissance Amazon**  
**Amazon Polly**  
**Transcription Amazon**  
**Amazon Kendra**  
Explication générale  
**Reconnaissance Amazon**

Amazon Rekognition vous permet d'effectuer la détection et l'analyse des visages à partir de millions d'images et de vidéos en quelques minutes seulement. Il offre de puissantes capacités de vision par ordinateur pour l'analyse de contenu visuel. Avec Rekognition, vous pouvez détecter et analyser les visages, identifier leurs attributs (émotions, tranche d'âge, etc.), comparer et reconnaître les visages, et même suivre les visages dans les vidéos. Rekognition utilise des algorithmes d'apprentissage profond pour fournir des résultats précis et rapides. Hautement évolutif, il vous permet de traiter de vastes quantités de données visuelles rapidement et efficacement. Amazon Rekognition est largement utilisé dans diverses applications, notamment les systèmes de sécurité, la modération de contenu, la personnalisation de l'expérience utilisateur et l'analyse des réseaux sociaux.  
Question 12Correct  
Parmi les responsabilités suivantes, lesquelles sont gérées par AWS dans le cadre du modèle de responsabilité partagée d'AWS lors de l'utilisation d'instances Amazon EC2 ? (Sélectionnez DEUX réponses.)  
**Votre sélection est correcte**  
**Mise au rebut des composants matériels obsolètes des instances EC2**  
**Mise en œuvre d'une clé maîtresse client (CMK) pour le chiffrement des données**  
**Configuration des règles du groupe de sécurité pour les instances EC2**  
**Votre sélection est correcte**  
**Sécurité physique des centres de données hébergeant les instances EC2**  
**Mise à jour du système d'exploitation invité de l'instance EC2**  
Explication générale  
**Sécurité physique des centres de données hébergeant les instances EC2**

La sécurité physique des centres de données hébergeant les instances EC2 relève de la responsabilité d'AWS. AWS gère et contrôle l'ensemble des composants, du système d'exploitation hôte et de la couche de virtualisation jusqu'à la sécurité physique des installations où le service est déployé. AWS a mis en œuvre des mesures de sécurité complètes afin de garantir l'intégrité et la sécurité du matériel et, par conséquent, des services fournis au client.

**Mise au rebut des composants matériels obsolètes des instances EC2**

La mise au rebut des composants matériels obsolètes des instances EC2 relève de la responsabilité d'AWS. AWS est responsable de la mise au rebut appropriée du matériel prenant en charge le service EC2. AWS veille à ce que ce matériel soit mis au rebut conformément à toutes les normes environnementales et de sécurité, garantissant ainsi l'absence de risque de compromission des données client après la fin de vie physique du matériel.  
Question 13Correct  
Quelle fonctionnalité AWS faut-il utiliser pour lancer des instances Amazon EC2 avec des paramètres préconfigurés ?  
**Gestion des identités et des accès (IAM) WS**  
**Amazon VPC**  
**Votre réponse est correcte**  
**Image machine Amazon (AMI)**  
**Groupes de sécurité**  
Explication générale  
**Image machine Amazon (AMI)**

Une AMI est un modèle préconfiguré contenant les informations nécessaires au lancement d'une instance, telles que le système d'exploitation, les applications logicielles, les bibliothèques et les configurations. Elle sert de base à la création de nouvelles instances EC2 avec les paramètres et configurations souhaités. Les AMI offrent un moyen pratique de répliquer et de partager des instances entre différentes régions et comptes, permettant ainsi un déploiement cohérent et efficace d'environnements préconfigurés.

Pour lancer des instances Amazon EC2 avec des paramètres préconfigurés, l'entreprise doit utiliser Amazon Machine Image (AMI).  
Question 14Correct  
Une entreprise gère une application web multicouche sur AWS à l'aide d'EC2, RDS et S3. Elle souhaite garantir le bon fonctionnement de l'application et pouvoir résoudre rapidement tout problème éventuel.

Quelle est la meilleure approche pour surveiller l'état et les performances du système ?  
**Utilisez Amazon SNS pour envoyer des alertes en cas de modification de l'environnement de l'application.**  
**Utilisez-le sur le tableau de bord de santé des services AWS pour obtenir des rapports de contrôle de santé quotidiens.**  
**Votre réponse est correcte**  
**Utilisez Amazon CloudWatch pour surveiller les ressources et configurer des alarmes pour des seuils prédéfinis.**  
**Utilisez les journaux AWS CloudTrail et inspectez-les régulièrement afin de détecter toute anomalie.**  
Explication générale  
**Utilisez Amazon CloudWatch pour surveiller les ressources et configurer des alarmes pour des seuils prédéfinis.**

Amazon CloudWatch est un service de surveillance et d'observabilité qui fournit des informations exploitables pour optimiser les applications, réagir aux variations de performances du système et utiliser efficacement les ressources. Grâce à CloudWatch, les utilisateurs peuvent collecter et suivre des indicateurs, collecter et surveiller les fichiers journaux et configurer des alarmes. Ces alarmes peuvent être configurées selon des seuils prédéfinis, garantissant ainsi des notifications rapides en cas d'anomalie du comportement du système. Cette approche proactive facilite une intervention rapide, permettant d'éviter des problèmes plus graves et assurant le fonctionnement continu et efficace des applications. En résumé, CloudWatch est un outil indispensable pour maintenir la santé et les performances des ressources AWS.  
Question 15Incorrect  
Le cadre AWS Well-Architected décrit les concepts clés, les principes de conception et les meilleures pratiques architecturales pour la conception et l'exécution de charges de travail dans le cloud.

Parmi les éléments suivants, lesquels constituent des piliers du cadre AWS Well-Architected ? (Sélectionnez DEUX réponses.)  
**Sélection correcte**  
**Sécurité**  
**Votre sélection est correcte**  
**Durabilité**  
**Évolutivité**  
**Disponibilité**  
**Votre sélection est incorrecte**  
**Élasticité**  
Explication générale  
**Pilier de sécurité**

La sécurité est l'un des piliers fondamentaux du cadre AWS Well-Architected. Elle implique la compréhension et l'application des meilleures pratiques en matière de protection des informations et des systèmes. Ce pilier de sécurité propose des stratégies pour vous aider à protéger vos données, vos systèmes et vos ressources dans le cloud.

**Pilier de la durabilité**

Le pilier du développement durable vise à minimiser l'impact environnemental des charges de travail dans le cloud. Les principaux thèmes abordés sont un modèle de responsabilité partagée en matière de développement durable, la compréhension de cet impact et l'optimisation de l'utilisation des ressources afin de réduire les besoins et les conséquences en aval.  
Question 16Correct  
Parmi les propositions suivantes, quels sont les avantages de l'utilisation du cloud AWS ? (Sélectionnez DEUX réponses.)  
**Des dépenses d'investissement initiales plus élevées pour développer les opérations.**  
**Conformité automatique avec toutes les lois internationales sur la souveraineté des données.**  
**Votre sélection est correcte**  
**Capacité de déploiement mondial en quelques minutes.**  
**Ralentissement du rythme d'innovation dû à la complexité du cloud.**  
**Votre sélection est correcte**  
**Tarification au fur et à mesure pour réduire les coûts.**  
Explication générale  
**Capacité de déploiement mondial en quelques minutes.**

L'un des principaux avantages du cloud AWS réside dans sa capacité à déployer rapidement des applications dans de nombreuses régions du monde. Cette rapidité est rendue possible grâce à l'infrastructure mondiale étendue d'AWS, qui comprend des régions et des zones de disponibilité conçues pour héberger des applications avec une latence réduite et une tolérance aux pannes accrue. Les entreprises peuvent ainsi étendre leur portée et se rapprocher de leurs utilisateurs finaux sans investissements importants dans l'infrastructure physique ni longs délais de mise en œuvre.

**Tarification au fur et à mesure pour réduire les coûts.**

Le modèle de tarification à l'usage d'AWS offre une solution économique aux entreprises, leur permettant de ne payer que les ressources utilisées, sans frais initiaux ni engagement à long terme. Ce modèle offre une flexibilité et une maîtrise des coûts particulièrement avantageuses pour les startups et les entreprises souhaitant optimiser leurs budgets. Il aligne directement les coûts sur l'utilisation, évitant ainsi le surdimensionnement et garantissant l'évolutivité.  
Question 17Incorrect  
Une entreprise de médias doit utiliser Amazon S3 pour stocker des données, mais doit s'assurer que ces données ne quittent jamais une zone géographique spécifique en raison de règles de conformité. Quelle fonctionnalité d'Amazon S3 permet de garantir le respect de cette exigence ?  
**Accélération des transferts Amazon S3**  
**Votre réponse est incorrecte**  
**Restrictions régionales d'Amazon S3**  
**Réplication interrégionale Amazon S3**  
**Bonne réponse**  
**Politiques relatives aux compartiments Amazon S3**  
Explication générale  
**Politiques relatives aux compartiments Amazon S3**

Les politiques de compartiment Amazon S3 vous permettent de créer des règles qui accordent ou restreignent les autorisations d'accès à vos compartiments S3 et à leurs objets. Ces politiques peuvent inclure des règles de refus d'accès basées sur des conditions spécifiques, telles que la localisation géographique ou l'adresse IP. Grâce aux politiques de compartiment, vous pouvez garantir que l'accès à vos données S3 est limité aux utilisateurs, applications ou services AWS fonctionnant dans une région spécifiée. Ceci est conforme aux règles de conformité exigeant que les données restent dans une région géographique définie, offrant ainsi un contrôle précis du stockage et de l'accès aux données.  
Question 18Incorrect  
Parmi les propositions suivantes, quels sont les avantages des services gérés AWS ? (Sélectionnez DEUX réponses.)  
**Votre sélection est correcte**  
**Réduction des coûts opérationnels de maintenance**  
**Votre sélection est incorrecte**  
**Données automatiquement cryptées au repos**  
**Renforcement du contrôle des infrastructures au plus haut niveau**  
**Sélection correcte**  
**Sécurité renforcée alignée sur vos contrôles**  
**Fourniture de services de niveau entreprise libre**  
Explication générale  
**Sécurité renforcée alignée sur vos contrôles**

AWS Managed Services (AMS) crée et gère un référentiel évolutif de garde-fous de conformité, opérationnels et de sécurité qui vous aident à rester en conformité avec vos exigences. AMS allège la charge liée au respect des exigences des programmes de conformité (HIPAA, HITRUST, RGPD, SOC, NIST, ISO, PCI, FedRAMP) grâce à la détection et à la correction automatisées.

**Réduction des coûts opérationnels de maintenance**

Les services gérés AWS (AMS) contribuent à l'optimisation financière de votre infrastructure AWS. Les économies réalisées diminuent vos frais AMS sans impacter vos résultats opérationnels. Nos clients ont bénéficié de jusqu'à 30 % d'économies opérationnelles et jusqu'à 25 % d'économies sur leur infrastructure AWS. Payez uniquement ce que vous utilisez et reprenez le contrôle de vos opérations quand vous le souhaitez.  
Question 19Correct  
Une entreprise a migré ses applications vers AWS. Elle souhaite déployer AWS à plus grande échelle de manière efficace et sécurisée. Quel service ou framework AWS devrait-elle envisager pour son support opérationnel ?  
**AWS CloudTrail**  
**Votre réponse est correcte**  
**Services gérés AWS (AMS)**  
**AWS Marketplace**  
**Organisations AWS**  
Explication générale  
**Services gérés AWS (AMS)**

AWS Managed Services (AMS) est conçu pour aider les entreprises à exploiter leur infrastructure AWS de manière plus efficace et sécurisée. AMS fournit un support opérationnel pour l'infrastructure, notamment la surveillance, la gestion des incidents, la sécurité et la conformité. Il s'appuie sur les meilleures pratiques pour garantir le fonctionnement optimal de l'infrastructure cloud, permettant ainsi à l'entreprise de se concentrer sur l'innovation et l'évolutivité. AMS offre un modèle opérationnel cohérent tout en contribuant au respect des exigences de sécurité et de conformité, ce qui en fait un choix idéal pour les entreprises souhaitant étendre leur adoption d'AWS de manière sécurisée et efficace.  
Question 20Correct  
Selon AWS Global Infrastructure, quel avantage AWS offre-t-il à ceux qui souhaitent opérer à l'échelle mondiale ?  
**Réduction des coûts grâce à la diminution des frais généraux**  
**Votre réponse est correcte**  
**Réduction de la latence et localisation du contenu**  
**Sécurité renforcée grâce aux services gérés AWS**  
**Sauvegarde automatique des données vers plusieurs régions**  
Explication générale  
**Réduction de la latence et localisation du contenu**

L'infrastructure mondiale d'AWS se compose de multiples régions et zones de disponibilité réparties dans le monde entier. Cela représente un avantage considérable pour les entreprises souhaitant servir leurs utilisateurs à l'international, car elles peuvent s'appuyer sur l'infrastructure d'AWS pour réduire significativement la latence et offrir un service plus rapide. De plus, en proposant un contenu localisé ou personnalisé pour des régions ou des pays spécifiques, les clients reçoivent des données pertinentes en fonction de leur situation géographique, ce qui améliore leur expérience utilisateur. Cela permet non seulement d'améliorer l'efficacité du service, mais aussi d'accroître la satisfaction client.  
Question 21Correct  
Quelle affirmation est vraie concernant les coûts des licences logicielles dans le cloud ?  
**Les coûts sont toujours plus élevés que les coûts de licence des logiciels sur site**  
**Les coûts ne sont pas affectés par le modèle de déploiement**  
**Les coûts sont toujours inférieurs aux coûts des licences logicielles sur site**  
**Votre réponse est correcte**  
**Les coûts dépendent du logiciel et du modèle de déploiement**  
Explication générale  
**Les coûts dépendent du logiciel et du modèle de déploiement.**

Le coût des licences logicielles dans le cloud varie selon le logiciel utilisé et le modèle de déploiement. Certains fournisseurs proposent une facturation à l'usage, tandis que d'autres exigent des frais d'inscription ou un abonnement. Les licences de certains logiciels peuvent différer entre le cloud et une installation sur site. Il est important de prendre en compte ces facteurs pour évaluer l'impact des coûts de licences logicielles lors d'une migration vers le cloud.  
Question 22Correct  
Une entreprise transfère des données sensibles entre ses serveurs locaux et AWS. Elle souhaite que les données restent chiffrées pendant le transfert.

Quel service AWS peut permettre d'atteindre cet objectif ?  
**Motoneige AWS**  
**Service de gestion des clés AWS (KMS)**  
**Votre réponse est correcte**  
**AWS DataSync**  
**Bouclier AWS**  
Explication générale  
**AWS DataSync**

AWS DataSync est un service de transfert de données qui simplifie et accélère le déplacement de volumes importants de données en ligne entre le stockage local et Amazon S3, Amazon Elastic File System (EFS) ou Amazon FSx pour Windows File Server. AWS DataSync chiffre automatiquement les données en transit à l'aide du protocole TLS (Transport Layer Security). Ceci garantit la confidentialité et l'intégrité des données lors de leur transfert sur Internet.  
Question 23Correct  
Lequel des exemples suivants illustre une architecture sans serveur sur AWS ?  
**Un groupe d'instances à charge équilibrée derrière un ELB**  
**Votre réponse est correcte**  
**Une fonction Lambda déclenchée par une passerelle API**  
**Une instance de base de données exécutée dans RDS**  
**Une instance EC2 exécutant un serveur web**  
Explication générale  
**Une fonction Lambda déclenchée par une passerelle API**

L'architecture sans serveur d'AWS désigne le modèle informatique où le fournisseur de cloud, AWS en l'occurrence, gère l'infrastructure nécessaire à l'exécution des applications. Ce modèle permet aux développeurs de créer et d'exécuter des applications et des services sans avoir à provisionner, dimensionner ni gérer de serveurs. AWS propose des services comme AWS Lambda, qui exécute du code en réponse à des événements sans que l'utilisateur ait à gérer les ressources de calcul sous-jacentes. Cette approche permet aux développeurs de se concentrer sur le développement et la création de valeur, plutôt que sur les tâches opérationnelles de gestion des serveurs. Elle prend en charge la mise à l'échelle automatique, de quelques requêtes par jour à des milliers par seconde, et les utilisateurs ne paient que pour le temps de calcul consommé, ce qui la rend rentable et efficace.

AWS Lambda gère l'infrastructure sous-jacente et fournit une plateforme permettant d'exécuter du code sans avoir à provisionner ni à gérer de serveurs. API Gateway sert de déclencheur pour Lambda, permettant ainsi d'appeler la fonction en réponse à une requête HTTP.  
Question 24Correct  
Quelle affirmation décrit correctement les caractéristiques et les fonctionnalités des régions AWS ?  
**Les régions AWS sont des centres de données uniques et massifs situés dans des emplacements stratégiques à travers le monde.**  
**Votre réponse est correcte**  
**Chaque région AWS est une zone géographique distincte conçue pour être totalement isolée afin d'éviter les pannes régionales.**  
**Les régions AWS sont des réseaux interconnectés de centres de données fournissant des ressources informatiques centralisées à l'échelle mondiale.**  
**Les données stockées dans une région AWS spécifique seront automatiquement répliquées dans d'autres régions à des fins de reprise après sinistre.**  
Explication générale  
**Chaque région AWS est une zone géographique distincte conçue pour être totalement isolée afin d'éviter les pannes régionales.**

Les régions AWS sont composées de plusieurs zones de disponibilité (AZ) isolées et physiquement distinctes au sein d'une même zone géographique. Chaque région constitue une entité géographique indépendante et fonctionne indépendamment des autres. Ce principe de conception garantit que les problèmes survenant dans une région n'affectent pas les autres, renforçant ainsi la résilience et la fiabilité globales de l'infrastructure AWS. Les régions sont spécifiquement conçues pour être totalement isolées les unes des autres afin d'éviter les pannes partagées, un élément essentiel pour la reprise après sinistre et le maintien de la stabilité opérationnelle.  
Question 25Correct  
Lequel des éléments suivants constitue un exemple de responsabilité partagée dans le modèle de responsabilité partagée d'AWS ?  
**AWS est responsable du chiffrement des données client au repos, et le client est responsable du chiffrement des données en transit.**  
**AWS est responsable du suivi des performances des bases de données gérées par AWS, et le client est responsable de la mise à jour des moteurs.**  
**AWS est responsable de la sécurité physique de ses centres de données, tandis que le client est responsable de la configuration de la sécurité physique de son réseau pour ses ressources AWS.**  
**Votre réponse est correcte**  
**AWS est responsable de garantir la disponibilité des instances EC2, et le client est responsable de la mise à jour du système d'exploitation des instances EC2.**  
Explication générale  
**AWS est responsable de garantir la disponibilité des instances EC2, et le client est responsable de la mise à jour du système d'exploitation des instances EC2.**

Le modèle de responsabilité partagée d'AWS est un cadre de cybersécurité où les responsabilités en matière de sécurité sont partagées entre AWS et le client. AWS gère la sécurité du cloud, notamment l'infrastructure et les services comme EC2, tandis que le client est responsable de la sécurité dans le cloud, y compris de ses données et du système d'exploitation invité. Par conséquent, cette option illustre parfaitement le modèle de responsabilité partagée : AWS garantit la disponibilité des instances EC2, et les clients sont responsables de leur maintenance, comme l'application des correctifs au système d'exploitation.  
Question 26Correct  
Dans le cadre du modèle de responsabilité partagée d'AWS, laquelle des responsabilités suivantes incombe au client ? (Sélectionnez DEUX réponses.)  
**Superviser la maintenance des centres de données physiques d'AWS.**  
**Configurez les paramètres de sécurité du matériel géré par AWS.**  
**Appliquer les mises à jour et les correctifs au sein de l'infrastructure physique sous-jacente.**  
**Votre sélection est correcte**  
**Configurer et gérer les paramètres de sécurité des systèmes d'exploitation et des applications invités.**  
**Votre sélection est correcte**  
**Prenez des décisions concernant le chiffrement des données au repos et en transit.**  
Explication générale  
**Configurer et gérer les paramètres de sécurité des systèmes d'exploitation et des applications invités.**

Il incombe aux clients de gérer et de configurer les paramètres de sécurité de leurs systèmes d'exploitation invités et de leurs applications. Cela comprend l'application des correctifs, la gestion des paramètres du pare-feu et la sécurisation de leurs applications.

**Prenez des décisions concernant le chiffrement des données au repos et en transit.**

Il incombe aux clients de décider comment chiffrer leurs données au repos et en transit afin de protéger les informations sensibles. AWS propose divers outils et services d'aide au chiffrement, mais le choix et la mise en œuvre correcte des méthodes de chiffrement appropriées restent à la charge du client. Ceci garantit la sécurité des données non seulement lors de leur stockage, mais aussi pendant leurs transferts entre services et régions.  
Question 27Correct  
Laquelle des options suivantes permet le chiffrement pour renforcer la sécurité des données au repos ?  
**Amazon EC2 pour la capacité de calcul avec chiffrement intégré**  
**Votre réponse est correcte**  
**Amazon S3 avec chiffrement côté serveur (SSE)**  
**Amazon CloudFront pour la diffusion de contenu chiffré**  
**Amazon Elastic Block Store (EBS) avec chiffrement pour les volumes de stockage par blocs**  
Explication générale  
**Amazon S3 avec chiffrement côté serveur (SSE)**

Amazon Simple Storage Service (Amazon S3) propose un chiffrement côté serveur permettant aux utilisateurs de stocker leurs données en toute sécurité. Les données sont chiffrées côté serveur lors de leur écriture sur les disques des centres de données, puis déchiffrées pour l'utilisateur lors de son accès. S3 offre plusieurs options de chiffrement, notamment les clés gérées par S3 (SSE-S3), les clés AWS Key Management Service (SSE-KMS) et les clés fournies par le client (SSE-C). Ces options facilitent la conformité aux différentes réglementations imposant le chiffrement des données au repos.  
Question 28Correct  
En tant que client AWS, lesquelles des tâches suivantes relèvent de votre responsabilité dans le cadre du modèle de responsabilité partagée ? (Sélectionnez DEUX réponses.)  
**Votre sélection est correcte**  
**Configurer les comptes utilisateurs IAM et les autorisations pour les membres de votre équipe.**  
**Votre sélection est correcte**  
**Mise en œuvre du chiffrement des données côté client avant leur téléchargement sur Amazon S3.**  
**Mise à jour et correction de l'infrastructure réseau d'AWS.**  
**Configurer la sécurité physique du centre de données où vos données sont stockées.**  
**Mise à niveau du matériel AWS pour répondre aux besoins de calcul de votre application.**  
Explication générale  
**Mise en œuvre du chiffrement des données côté client avant leur téléchargement sur Amazon S3.**

Il incombe au client AWS de gérer les données (y compris le chiffrement) avant leur envoi à AWS. Cela comprend le chiffrement côté client des données sensibles avant leur chargement sur Amazon S3, afin de garantir leur confidentialité et leur intégrité. AWS fournit l'infrastructure et les outils nécessaires, tels que le chiffrement côté serveur S3, mais il appartient au client de mettre en œuvre ces mesures de sécurité, conformément à sa responsabilité en matière de protection des données.

**Configurer les comptes utilisateurs IAM et les autorisations pour les membres de votre équipe.**

Les clients sont responsables de la gestion des identités et des accès au sein de leur environnement AWS. Cela inclut la création et la gestion des utilisateurs, des groupes, des rôles et des autorisations IAM afin de contrôler l'accès aux ressources AWS. IAM permet aux clients de gérer en toute sécurité les services et les ressources AWS ; sa configuration correcte est essentielle pour garantir que seul le personnel autorisé dispose des niveaux d'accès appropriés.  
Question 29Correct  
**Une entreprise prévoit d'exécuter une application de calcul haute performance nécessitant deux heures de puissance de calcul importante par jour. Cette application doit pouvoir monter en charge rapidement en cas de besoin et s'arrêter une fois la tâche terminée afin de réduire les coûts.**

**Quel service de calcul AWS serait le plus rentable pour ce cas d'utilisation ?**  
**Votre réponse est correcte**  
**Instances à la demande Amazon EC2**  
**AWS Lambda**  
**Instances Spot Amazon EC2**  
**Instances réservées Amazon EC2**  
Explication générale  
**Instances à la demande Amazon EC2**

Les instances à la demande d'Amazon EC2 permettent de payer la capacité de calcul à l'heure ou à la seconde (avec un minimum de 60 secondes). Sans engagement à long terme ni paiement initial, elles sont flexibles et économiques pour les applications telles que le calcul haute performance, qui ne nécessitent qu'une durée d'exécution limitée chaque jour. Elles peuvent rapidement s'adapter à la charge de calcul et être tout aussi facilement arrêtées une fois le travail terminé, ce qui contribue à une gestion efficace des coûts.

Cette option est idéale pour ceux qui ont besoin d'une puissance de calcul importante pendant de courtes périodes.  
Question 30Incorrect  
Qu’est-ce que le pilier « Principe d’efficacité des performances » du cadre AWS Well-Architected ?  
**Votre réponse est incorrecte**  
**Utilisez des architectures sans serveur pour réduire la charge du système.**  
**Utilisez la virtualisation avancée pour optimiser les ressources**  
**Bonne réponse**  
**Arrêtez de deviner la capacité**  
**Mettre en œuvre une forte cohérence dans le stockage des données**  
Explication générale  
**Arrêtez de deviner la capacité**

« Cessez de deviner la capacité » est un principe fondamental du pilier « Efficacité des performances », qui recommande d'utiliser les fonctionnalités de mise à l'échelle automatique pour ajouter ou supprimer des ressources en fonction de la demande, sans planification préalable. Ce principe repose sur l'idée qu'en informatique en nuage, il est possible de mesurer et de surveiller les performances d'un système et d'ajouter ou de supprimer des ressources selon les besoins. Cette gestion dynamique des ressources évite le sous-dimensionnement (qui peut nuire à l'expérience client) et le surdimensionnement (qui peut engendrer des coûts inutiles).  
Question 31Correct  
Une entreprise souhaite transférer 8 téraoctets de données de son centre de données sur site vers le cloud AWS. Quelle solution parmi les suivantes devrait être utilisée pour réaliser ce transfert de manière rentable ?  
**Motoneige AWS**  
**Passerelle de stockage AWS**  
**Votre réponse est correcte**  
**AWS Snowcone**  
**AWS Snowball**  
Explication générale  
**AWS Snowcone**

AWS Snowcone est un appareil portable, robuste et sécurisé pour l'informatique de périphérie et le transfert de données. Plus petit composant de la gamme AWS Snow, il peut stocker jusqu'à 8 téraoctets de données. L'entreprise peut ainsi transférer ses données vers AWS, une solution pratique et économique compte tenu du volume de données à transférer.  
Question 32Correct  
Quel est le rabais possible pour les instances réservées par rapport au prix à la demande ?  
**Jusqu'à 70%**  
**Jusqu'à 54%**  
**Votre réponse est correcte**  
**Jusqu'à 72%**  
**Jusqu'à 90%**  
Explication générale  
**Jusqu'à 72%**

Les instances réservées (RI) d'AWS offrent une réduction significative par rapport aux instances à la demande, avec des économies potentielles allant jusqu'à 72 %. Cette économie substantielle est possible car les RI nécessitent un engagement sur une durée déterminée (1 ou 3 ans), ce qui permet à AWS d'optimiser l'allocation et la planification des ressources. En souscrivant à une instance réservée, les utilisateurs s'engagent à utiliser un type d'instance spécifique pendant la durée de l'engagement, en contrepartie de ce tarif préférentiel. La réduction varie selon la durée de l'engagement, l'option de paiement (paiement intégral à l'avance, paiement partiel à l'avance ou aucun paiement à l'avance), ainsi que le type d'instance et la région. Ce modèle tarifaire est particulièrement avantageux pour les utilisateurs dont les charges de travail sont prévisibles et qui peuvent s'engager à utiliser une capacité de calcul spécifique sur une période prolongée. Grâce aux instances réservées, les entreprises peuvent réduire considérablement leurs coûts de cloud computing tout en profitant de la flexibilité et de l'évolutivité des services AWS.  
Question 33Correct  
Où pouvez-vous déployer rapidement une solution informatique populaire et commencer à l'utiliser immédiatement ?  
**Outil AWS Well-Architected**  
**AWS CloudFormation**  
**Votre réponse est correcte**  
**Déploiements de référence pour le démarrage rapide d'AWS**  
**Console de gestion AWS**  
Explication générale  
**Déploiements de référence pour le démarrage rapide d'AWS**

Les déploiements de référence AWS Quick Start sont un ensemble de modèles AWS CloudFormation automatisés qui vous permettent de déployer et de configurer rapidement des solutions sur AWS, en suivant les bonnes pratiques AWS. Ces modèles permettent aux entreprises de lancer rapidement des charges de travail complexes dans l'environnement AWS sans avoir à configurer manuellement chaque composant. Conçus par AWS en collaboration avec ses partenaires, les Quick Start couvrent un large éventail de cas d'utilisation, de la mise en place d'un annuaire Microsoft Active Directory au déploiement d'un cluster Kubernetes. Ils permettent de gagner du temps, de garantir la cohérence et de réduire les coûts opérationnels liés aux déploiements manuels, ce qui en fait le choix idéal pour déployer rapidement des solutions informatiques courantes.  
Question 34Correct  
Quels services AWS fournissent des recommandations de bonnes pratiques en matière de sécurité et de performances, de tolérance aux pannes, de réduction des coûts et de surveillance des quotas de service ?  
**Amazon CloudWatch**  
**AWS IAM**  
**Inspecteur Amazon**  
**Votre réponse est correcte**  
**Conseiller de confiance AWS**  
Explication générale  
**Conseiller de confiance AWS**

AWS Trusted Advisor fournit des recommandations pour aider les clients à adopter les meilleures pratiques en optimisant leur environnement AWS. Il offre un accompagnement en temps réel pour les aider à provisionner des ressources conformément aux bonnes pratiques AWS, garantissant ainsi une sécurité optimale, des performances élevées, une tolérance aux pannes et une rentabilité accrue. De plus, il surveille les quotas de service afin d'éviter tout dépassement des limites. AWS Trusted Advisor est donc un service incontournable pour une vision globale de vos services AWS, le respect des meilleures pratiques et l'optimisation de l'utilisation des ressources.  
Question 35Correct  
Parmi les facteurs suivants, lesquels AWS utilise-t-il pour calculer les coûts ? (Sélectionnez DEUX réponses.)  
**Nombre de services utilisés**  
**Votre sélection est correcte**  
**Utilisation du calcul et du stockage**  
**Transfert de données entrant depuis les clouds AWS**  
**Votre sélection est correcte**  
**Transfert de données depuis les clouds AWS**  
**Nombre d'utilisateurs ayant utilisé AWS**  
Explication générale  
**Transfert de données depuis les clouds AWS**

AWS facture les transferts de données sortants de ses services vers Internet ou entre régions et zones de disponibilité (AZ). Ces frais varient selon la région et le volume total de données transférées.

**Utilisation du calcul et du stockage**

Les tarifs AWS sont calculés en fonction des ressources utilisées, notamment les instances de calcul (comme EC2 et Lambda) et les services de stockage (comme S3 et EBS). Le coût de ces ressources dépend de leur type, de leur taille et de leur durée d'utilisation.  
Question 36Incorrect  
Quel service AWS fournit une assistance pour la gestion des coûts et la facturation d'AWS Marketplace ?  
**AWS Quicksight**  
**Bonne réponse**  
**Gestion de la facturation et des coûts AWS**  
**Votre réponse est incorrecte**  
**Portail de gestion AWS Marketplace**  
**Organisations AWS**  
Explication générale  
**Gestion de la facturation et des coûts AWS**

AWS Billing and Cost Management est un service complet qui permet aux utilisateurs de surveiller, gérer et optimiser leurs coûts et leur utilisation d'AWS. Il offre une plateforme centralisée pour le suivi et l'analyse des informations de facturation AWS, notamment des ventilations de coûts détaillées, des rapports d'utilisation et des étiquettes d'affectation des coûts. Les utilisateurs peuvent configurer des budgets, des alertes et des contrôles des coûts afin de prévenir les dépenses imprévues et d'optimiser l'allocation des ressources. Le service propose également des outils de visualisation des coûts, tels qu'AWS Cost Explorer et AWS Budgets, pour aider les utilisateurs à mieux comprendre leurs habitudes de dépenses et à prévoir les coûts futurs. AWS Billing and Cost Management permet aux organisations de gérer efficacement leurs dépenses AWS et de garantir une maîtrise des coûts.  
Question 37Correct  
Quel service AWS doit être utilisé pour établir une connexion réseau dédiée entre AWS et le serveur de données sur site ?  
**Votre réponse est correcte**  
**AWS Direct Connect**  
**Amazon API Gateway**  
**Amazon CloudFront**  
**Route 53 d'Amazonie**  
Explication générale  
**AWS Direct Connect**

AWS Direct Connect fournit une connexion réseau dédiée entre votre environnement sur site et Amazon Web Services (AWS). Cette connexion contourne l'Internet public, offrant ainsi des performances réseau plus stables, une latence réduite et une sécurité renforcée par rapport aux connexions Internet classiques. En établissant une liaison privée avec AWS, Direct Connect permet aux entreprises de transférer des données vers et depuis les services AWS de manière plus fiable et à moindre coût. Différentes options de bande passante sont disponibles, de 50 Mbit/s à 100 Gbit/s, permettant aux organisations de choisir le débit le plus adapté à leurs besoins. Ce service est particulièrement avantageux pour les applications exigeant un débit élevé, des transferts de données sécurisés ou un accès en temps réel aux ressources AWS.  
Question 38Correct  
Une entreprise doit effectuer des traitements de données périodiques tout en optimisant ses coûts. Ces traitements ne doivent pas nécessairement s'exécuter à des heures précises. Quelle option d'achat d'instance Amazon EC2 répondra à ces exigences au moindre coût ?  
**Votre réponse est correcte**  
**Instances ponctuelles**  
**Instances à la demande**  
**Hôtes dévoués**  
**Instances réservées**  
Explication générale  
**Instances ponctuelles**

Les instances Spot constituent une option d'achat économique proposée par AWS, permettant aux clients d'exploiter la capacité EC2 inutilisée du cloud AWS. Puisqu'elles utilisent de la capacité disponible, elles sont nettement moins chères que les instances à la demande (souvent jusqu'à 90 % moins chères). Les instances Spot sont donc idéales pour les charges de travail tolérantes aux pannes et flexibles, telles que les traitements de données périodiques. Ces traitements n'ayant pas besoin d'être exécutés à des heures précises, l'utilisation d'instances Spot permet à l'entreprise d'optimiser ses coûts sans compromettre ses exigences opérationnelles. Le seul inconvénient est qu'AWS peut mettre fin aux instances Spot lorsque la capacité n'est plus nécessaire, mais pour des applications comme le traitement de données non critiques en termes de temps, ce risque est généralement gérable.  
Question 39Correct  
Quels avantages les clients retirent-ils du coût total de possession (TCO) lorsqu'ils utilisent les services AWS ?  
**Les services cloud peuvent avoir moins de contrôle sur les mesures de sécurité et de conformité.**  
**Les services cloud peuvent accroître le risque de violations de données.**  
**Votre réponse est correcte**  
**Les services cloud permettent d'obtenir des coûts plus prévisibles et stables dans le temps.**  
**Les services cloud ne peuvent être utilisés que pour certaines applications spécifiques.**  
Explication générale  
**Les services cloud permettent d'obtenir des coûts plus prévisibles et stables dans le temps.**

Avec AWS, les clients ne paient que pour les ressources qu'ils utilisent et peuvent les adapter à leurs besoins. La tarification d'AWS est transparente et prévisible, sans frais initiaux ni engagement à long terme. Cela permet aux clients de mieux planifier et budgétiser leurs dépenses, ce qui se traduit par des coûts plus prévisibles et stables dans le temps.  
Question 40Correct  
Supposons que vous ayez une instance EC2 contenant 1 To de données. Vous souhaitez maintenant déplacer ces données vers un compartiment S3 situé dans la même région. Quel sera le coût de cette opération pour AWS ?  
**Les frais de transfert de données entrants et sortants seront applicables pour le compartiment S3.**  
**Des frais de réception seront applicables pour le transfert de données.**  
**Des frais d'envoi seront applicables pour le transfert de données.**  
**Votre réponse est correcte**  
**Ce transfert de données ne vous sera pas facturé.**  
Explication générale  
**Ce transfert de données ne vous sera pas facturé.**

AWS ne facture pas les transferts de données entre une instance EC2 et un compartiment S3 au sein de la même région. Dans ce cas précis, le transfert de données de l'instance EC2 vers le compartiment S3 est considéré comme « entrant » pour S3 et est donc gratuit.  
Question 41Correct  
Quel service AWS est le mieux adapté à la gestion de la sécurité et de la conformité sur plusieurs comptes et charges de travail dans l'environnement AWS ?  
**Votre réponse est correcte**  
**Tour de contrôle AWS**  
**Configuration AWS**  
**Inspecteur Amazon**  
**Gestion des identités et des accès AWS**  
Explication générale  
**Tour de contrôle AWS**

AWS Control Tower est le service qui vous aide à configurer et à gérer un environnement AWS multi-comptes sécurisé. Il offre la solution la plus simple pour créer et gérer un nouvel environnement AWS multi-comptes sécurisé, basé sur les meilleures pratiques issues de l'expérience d'AWS auprès de milliers d'entreprises migrant vers le cloud. Il automatise le processus de configuration d'un nouvel environnement AWS multi-comptes de base, sécurisé, bien architecturé et prêt à l'emploi.  
Question 42Correct  
Quel est le principal avantage en termes de rentabilité de l'utilisation d'AWS par rapport aux centres de données traditionnels ?  
**Votre réponse est correcte**  
**AWS permet aux utilisateurs d'adapter la taille de leurs instances EC2 à la hausse ou à la baisse en fonction de la demande.**  
**AWS exige des contrats annuels pour les instances EC2.**  
**Les centres de données traditionnels offrent des tarifs plus compétitifs pour les ressources serveur.**  
**Les centres de données traditionnels ont des cycles de facturation fixes, indépendamment de l'utilisation.**  
Explication générale  
**AWS permet aux utilisateurs d'adapter la taille de leurs instances EC2 à la hausse ou à la baisse en fonction de la demande.**

AWS (Amazon Web Services) fournit une infrastructure robuste permettant aux utilisateurs d'adapter la taille de leurs instances EC2 (Elastic Compute Cloud) en fonction de la demande. Cette capacité de mise à l'échelle dynamique garantit aux entreprises de ne payer que pour les ressources réellement utilisées, ce qui engendre des économies substantielles. À l'inverse, les centres de données traditionnels nécessitent souvent l'achat de matériel et l'allocation de ressources qui peuvent être sous-utilisées en période creuse. En automatisant la mise à l'échelle en fonction de la demande en temps réel, AWS aide les entreprises à éviter le surdimensionnement et la sous-utilisation des ressources, ce qui en fait une solution rentable par rapport aux modèles de centres de données traditionnels.  
Question 43Correct  
Quelle affirmation est vraie concernant l'interface de ligne de commande AWS (AWS CLI) ?  
**Vous pouvez accéder à l'interface de ligne de commande (CLI) avec une simple clé d'accès secrète.**  
**Votre réponse est correcte**  
**L'identifiant de clé d'accès et la clé d'accès secrète sont tous deux nécessaires pour accéder à l'interface de ligne de commande AWS (AWS CLI).**  
**Vous pouvez accéder à l'interface de ligne de commande (CLI) avec une clé de jeton personnelle AWS.**  
**Pour accéder à l'interface de ligne de commande AWS (AWS CLI), un nom d'utilisateur et un mot de passe sont nécessaires.**  
Explication générale  
**L'identifiant de clé d'accès et la clé d'accès secrète sont tous deux requis pour accéder à l'interface de ligne de commande AWS (AWS CLI).**

Pour accéder aux services AWS via l'interface de ligne de commande AWS (AWS CLI), vous avez besoin d'un ID de clé d'accès et d'une clé d'accès secrète. Ces éléments sont fournis lors de la création d'un utilisateur IAM. Ils font partie des informations d'identification de sécurité permettant à AWS CLI d'authentifier vos requêtes aux services AWS et sont indispensables pour accéder à AWS CLI.  
Question 44Correct  
Quel principe de conception relève du pilier Fiabilité d'AWS Well-Architected ?  
**Utilisez des architectures sans serveur**  
**Votre réponse est correcte**  
**Récupération automatique après une panne**  
**Améliorer fréquemment les procédures opérationnelles**  
**Protéger les données en transit et au repos**  
Explication générale  
**Récupération automatique après une panne**

La reprise automatique après une panne est un principe fondamental du pilier Fiabilité du cadre AWS Well-Architected. Cette approche consiste à créer des systèmes résilients et capables de se rétablir automatiquement en cas de panne. En automatisant la reprise, on réduit le besoin d'intervention manuelle, ce qui non seulement accroît la fiabilité du système, mais permet également des temps de reprise plus rapides. Ce principe repose souvent sur des technologies telles que la mise à l'échelle automatique, les contrôles d'intégrité et les stratégies de basculement. Par exemple, si un serveur ou un service tombe en panne, le système est conçu pour détecter automatiquement cette panne et rediriger le trafic vers des instances opérationnelles ou redémarrer les instances défaillantes, garantissant ainsi une interruption minimale pour l'utilisateur final. Ceci est crucial pour maintenir une haute disponibilité et une grande résilience dans les environnements cloud.  
Question 45Correct  
Quel service AWS offre une couche de protection supplémentaire contre les attaques par déni de service distribué (DDoS) ?  
**Conseiller de confiance AWS**  
**Gestionnaire d'audit AWS**  
**Votre réponse est correcte**  
**Bouclier AWS**  
**AWS CloudWatch**  
Explication générale  
**Bouclier AWS**

AWS Shield est un service de protection contre les attaques par déni de service distribué (DDoS) géré qui protège les applications exécutées sur AWS. AWS Shield assure la détection et l'atténuation automatiques des attaques DDoS grâce à une détection permanente et des mesures d'atténuation automatiques intégrées qui minimisent les interruptions de service et la latence des applications, garantissant ainsi leur disponibilité face aux attaques DDoS.  
Question 46Incorrect  
Une société financière souhaite stocker des décennies d'historique de transactions sur AWS. Ces données sont rarement consultées, mais en cas de besoin, le temps de récupération doit être rapide.

Quelle classe de stockage S3 serait la plus rentable pour répondre à ce besoin ?  
**Norme S3**  
**Votre réponse est incorrecte**  
**S3 Une zone \- Accès peu fréquent**  
**S3 Glacier**  
**Bonne réponse**  
**Accès peu fréquent à la norme S3**  
Explication générale  
**S3 Standard \- Accès peu fréquent (S3 Standard-IA)**

S3 Standard-IA est conçu pour les données consultées moins fréquemment, mais dont l'accès rapide est indispensable en cas de besoin. Il convient donc parfaitement au cas où les enregistrements de transactions sont rarement consultés, mais nécessitent une récupération rapide. S3 Standard-IA offre la haute durabilité, le débit élevé et la faible latence de S3 Standard, à un prix inférieur par Go stocké. C'est une solution économique pour le stockage à long terme de données rarement consultées et qui doivent être récupérées rapidement.  
Question 47Incorrect  
Quel pilier du cadre AWS Well-Architected met l'accent sur le maintien de l'efficacité face à l'évolution des besoins et des technologies ?  
**Votre réponse est incorrecte**  
**Excellence opérationnelle**  
**Bonne réponse**  
**Efficacité de performance**  
**Optimisation des coûts**  
**Fiabilité**  
Explication générale  
**Efficacité de performance**

Le pilier « Efficacité des performances » du cadre AWS Well-Architected met l'accent sur la capacité à utiliser efficacement les ressources de calcul pour répondre aux exigences du système et à maintenir cette efficacité malgré l'évolution de la demande et des technologies. Ce pilier encourage l'utilisation des services et ressources cloud pour améliorer la vitesse et l'efficacité des applications et s'adapter aux besoins changeants sans surinvestir dans une infrastructure fixe. En suivant ce pilier, les entreprises peuvent optimiser l'utilisation de leurs ressources AWS.  
Question 48Correct  
Quelle est la différence entre un utilisateur AWS IAM et un rôle AWS IAM ?   
**Un utilisateur est une personne ou une application qui utilise les services AWS, tandis qu'un rôle est un ensemble d'autorisations qui détermine ce qu'un service AWS peut faire.**  
**Votre réponse est correcte**  
**Un utilisateur est une identité permanente qui peut accéder aux services AWS, tandis qu'un rôle est une identité temporaire qui peut être endossée par un utilisateur ou un service AWS.**  
**Un utilisateur est un ensemble d'autorisations qui détermine ce qu'un service AWS peut faire, tandis qu'un rôle est une personne ou une application qui utilise les services AWS.**  
**Un utilisateur est un ensemble d'autorisations qui détermine ce qu'un service AWS peut faire, tandis qu'un rôle est un ensemble d'utilisateurs qui peuvent accéder aux services AWS.**  
Explication générale  
**Un utilisateur est une identité permanente qui peut accéder aux services AWS, tandis qu'un rôle est une identité temporaire qui peut être endossée par un utilisateur ou un service AWS.**

Un utilisateur AWS IAM est une identité qui représente une personne ou une application interagissant avec les services AWS. Les utilisateurs possèdent leurs propres informations d'identification de sécurité (clés d'accès et clés d'accès secrètes) et peuvent se voir attribuer directement des autorisations d'accès aux ressources AWS.

En revanche, un rôle IAM est une identité au sein de votre compte AWS dotée d'autorisations spécifiques. Il est similaire à un utilisateur IAM, mais n'est pas associé à une personne en particulier. Les rôles peuvent être temporaires et possèdent un ensemble de politiques qui déterminent les actions autorisées ou interdites. Un rôle IAM doit être utilisé lorsqu'un service effectue une requête auprès d'un service AWS.  
Question 49Correct  
Une entreprise souhaite déployer une application web multi-niveaux au sein d'un seul VPC sur AWS. L'application comprend un serveur web et une base de données. Ces deux niveaux doivent être isolés pour des raisons de sécurité, tout en devant communiquer entre eux. Quelle est l'architecture optimale pour cette application ?  
**Placez les deux niveaux dans le même sous-réseau et utilisez les ACL réseau pour contrôler la communication.**  
**Déployez les deux niveaux dans des VPC distincts et établissez une connexion d'appairage.**  
**Votre réponse est correcte**  
**Utilisez des sous-réseaux distincts pour chaque niveau et configurez des groupes de sécurité pour contrôler l'accès entre eux.**  
**Placez les deux niveaux dans le même sous-réseau et utilisez des adresses IP privées pour la communication.**  
Explication générale  
**Utilisez des sous-réseaux distincts pour chaque niveau et configurez des groupes de sécurité pour contrôler l'accès entre eux.**

L'utilisation de sous-réseaux distincts pour chaque niveau est optimale pour isoler et sécuriser les différentes couches de l'application. En séparant le serveur web et la base de données dans des sous-réseaux différents, vous minimisez les surfaces d'attaque potentielles et respectez les bonnes pratiques de conception de VPC. Les groupes de sécurité assurent un filtrage dynamique du trafic : ils connaissent les connexions établies et permettent une gestion flexible des règles de communication entre les serveurs web et la base de données. Cette conception est conforme aux bonnes pratiques de sécurité AWS grâce à une approche de sécurité multicouche et offre un contrôle précis du trafic entrant et sortant.  
Question 50Correct  
Un nouveau directeur technique (CTO) souhaite vérifier la conformité des services AWS avec les accords de partenariat (BAA). Quel service AWS doit-il utiliser pour consulter les documents relatifs aux accords BAA et à la loi HIPAA sur AWS ?  
**Gestionnaire de certificats AWS**  
**Votre réponse est correcte**  
**Artefact AWS**  
**Conseiller de confiance AWS**  
**Gestionnaire de licences AWS**  
Explication générale  
**Artefact AWS**

AWS Artifact est un portail libre-service complet qui permet aux utilisateurs d'accéder à la demande à la documentation et aux accords de sécurité et de conformité d'AWS. Il permet aux clients AWS de télécharger facilement des documents de conformité pour le cloud AWS, tels que les rapports d'audit, les rapports SOC (Service Organization Control), les accords BAA (Business Associate Addendum) et les rapports de conformité PCI DSS (Payment Card Industry Data Security Standard). Ce service est particulièrement utile aux organisations qui doivent se conformer aux exigences réglementaires et de conformité pour leurs charges de travail dans le cloud. Via AWS Artifact, les utilisateurs peuvent également accepter et gérer directement les accords conclus avec AWS pour les services qu'ils utilisent, ce qui simplifie le processus de conformité et d'assurance de la sécurité.  
Question 51Correct  
Quel est l'objectif d'AWS KMS ?  
**Pour assurer la conformité aux normes réglementaires**  
**Pour gérer l'authentification et l'autorisation des utilisateurs**  
**Pour contrôler l'accès aux services et ressources AWS**  
**Votre réponse est correcte**  
**Gérer les clés cryptographiques pour le chiffrement des données**  
Explication générale  
**Gérer les clés cryptographiques pour le chiffrement des données**

AWS Key Management Service (KMS) est conçu pour créer et gérer des clés cryptographiques permettant de chiffrer et de déchiffrer des données sur l'ensemble des services AWS. Il offre un contrôle centralisé des clés cryptographiques et une solution auditable pour répondre aux exigences de conformité. KMS est intégré à d'autres services AWS afin de protéger les données que vous y stockez et d'en contrôler l'accès grâce au chiffrement. Ainsi, la fonction première d'AWS KMS est de chiffrer et de déchiffrer les données stockées dans les services AWS.  
Question 52Correct  
Quel service AWS propose un bureau virtuel basé sur le cloud, qui doit être persistant et remplacer les bureaux traditionnels ?  
**Votre réponse est correcte**  
**Espaces de travail Amazon**  
**Amazon WorkLink**  
**AWS Cloud9**  
**Amazon AppStream 2.0**  
Explication générale  
**Espaces de travail Amazon**

Amazon WorkSpaces propose une solution d'infrastructure de bureau virtuel (VDI) basée sur le cloud. Elle offre une expérience de bureau persistante et entièrement gérée dans le cloud, remplaçant ainsi les postes de travail traditionnels. Avec WorkSpaces, les utilisateurs peuvent accéder à leur bureau depuis n'importe où à l'aide d'un appareil compatible, comme un ordinateur portable, une tablette ou un client léger. WorkSpaces permet aux entreprises de provisionner et de gérer des bureaux virtuels pour leurs utilisateurs, leur offrant ainsi un environnement informatique cohérent et sécurisé. Compatible avec divers systèmes d'exploitation, la solution offre une grande flexibilité en termes de configurations matérielles et logicielles. Amazon WorkSpaces simplifie la gestion des postes de travail, réduit la dépendance au matériel et facilite l'accès à distance et la mobilité.  
Question 53Correct  
Une entreprise possède une application de microservices sur le cloud AWS. Récemment, elle a constaté des problèmes de performance et doit les déboguer pour les résoudre. En tant que spécialiste du cloud, quel service AWS recommanderiez-vous ?  
**Votre réponse est correcte**  
**AWS X-Ray**  
**AWS CloudTrail**  
**Amazon CloudWatch**  
**Inspecteur Amazon**  
Explication générale  
AWS X-Ray

AWS X-Ray permet aux développeurs d'analyser et de déboguer des applications distribuées en production, notamment celles construites avec une architecture de microservices. X-Ray aide les développeurs à comprendre les performances de leurs applications et services sous-jacents en fournissant des informations sur le comportement des requêtes et des réponses, en identifiant la cause première des problèmes et en repérant les goulots d'étranglement. Il collecte les données des requêtes adressées à votre application, vous permettant ainsi de visualiser, filtrer et analyser le fonctionnement et les performances de vos applications et microservices. Avec AWS X-Ray, les développeurs peuvent tracer et agréger des données, telles que la distribution de la latence et les temps de réponse des requêtes, sur l'ensemble des systèmes distribués, ce qui facilite l'identification et la résolution des problèmes, l'amélioration des performances et l'optimisation de l'efficacité.  
Question 54Correct  
Une entreprise souhaite migrer son activité vers le cloud AWS depuis un centre de données sur site. Elle recherche de l'aide pour déployer des technologies courantes en suivant les bonnes pratiques AWS.

Quel service AWS répondra aux exigences ?  
**AWS Marketplace**  
**Configuration AWS**  
**Centre de support AWS**  
**Votre réponse est correcte**  
**Solutions partenaires AWS**  
Explication générale  
**Solutions partenaires AWS**

AWS Partner Solutions propose un catalogue de solutions de fournisseurs tiers validées par AWS pour leur conformité aux meilleures pratiques et leur capacité à résoudre divers problèmes métiers. Ces solutions permettent aux entreprises d'accélérer leur migration vers le cloud AWS, en tirant parti d'architectures optimisées pour les technologies les plus courantes. Grâce à AWS Partner Solutions, l'entreprise bénéficie de solutions préconfigurées et bien architecturées qui simplifient le déploiement, réduisent les risques et améliorent les performances, tout en garantissant le respect des meilleures pratiques AWS. Cette option offre une solution complète pour exploiter l'expertise de tiers et des conceptions validées afin de faciliter une migration réussie vers le cloud AWS.  
Question 55Correct  
Une entreprise possède un volume croissant de données stockées sur Amazon S3 et il devient incroyablement complexe d'identifier et de protéger ses données sensibles.

En tant que spécialiste du cloud, quels services recommanderiez-vous pour identifier ces données sensibles ?  
**AWS KMS**  
**Inspecteur Amazon**  
**Amazon CloudTrail**  
**Votre réponse est correcte**  
**Amazon Macie**  
Explication générale  
**Amazon Macie**

Amazon Macie est une solution idéale pour la gestion et la protection des données à grande échelle. Ce service utilise l'apprentissage automatique et la reconnaissance de formes pour détecter et protéger les données sensibles, telles que les informations personnelles identifiables (IPI). Il aide les organisations à identifier l'emplacement des informations sensibles, les modalités d'accès et les personnes qui y ont accès. La détection automatisée des données sensibles contribue à atténuer les risques liés à leur diffusion.  
Question 56Correct  
Un groupe de presse souhaite développer une application d'actualités qui convertira les articles en audio afin que les personnes aveugles puissent écouter les informations. En tant que spécialiste du cloud, quel service recommanderiez-vous ?  
**Votre réponse est correcte**  
**Amazon Polly**  
**AWS Elemental MediaConvert**  
**Transcription Amazon**  
**Amazon WAF**  
Explication générale  
**Amazon Polly**

Amazon Polly transforme le texte en parole naturelle, permettant ainsi de créer des applications vocales et de développer de nouvelles catégories de produits à commande vocale. Amazon Polly est parfaitement adapté à l'usage envisagé, car il prend en charge plusieurs langues et offre un large choix de voix. Grâce à des technologies d'apprentissage profond avancées, il synthétise une parole d'une grande fluidité. Par conséquent, avec Amazon Polly, l'entreprise de presse peut convertir efficacement ses articles en paroles audibles, ce qui serait extrêmement utile aux personnes malvoyantes.  
Question 57Correct  
Quel est l'avantage d'utiliser AWS OpEx au lieu des dépenses d'investissement (CapEx) ?  
**AWS OpEx est une méthode plus avantageuse fiscalement pour financer une application.**  
**Votre réponse est correcte**  
**AWS OpEx permet aux clients de ne payer que pour les services dont ils ont besoin et qu'ils utilisent.**  
**AWS OpEx engendre toujours des coûts inférieurs aux CapEx.**  
**AWS OpEx finance des investissements à long terme dans le matériel et l'infrastructure.**  
Explication générale  
**AWS OpEx permet aux clients de ne payer que pour les services dont ils ont besoin et qu'ils utilisent.**

Les dépenses opérationnelles (OpEx) correspondent aux coûts récurrents liés à l'exécution et à la gestion d'une application sur AWS, tels que le coût d'utilisation de services AWS comme EC2 ou S3. Grâce aux OpEx, les clients ne paient que les services dont ils ont besoin, ce qui représente un mode de financement plus économique. Cette approche offre également une plus grande flexibilité pour adapter les dépenses à l'évolution des besoins et de la demande, permettant ainsi de réaliser des économies à long terme.  
Question 58Correct  
Une entreprise utilise une base de données MySQL hébergée sur une instance Amazon EC2 unique. Cette base de données nécessite désormais une disponibilité accrue. En tant que spécialiste du cloud, quelle option recommanderiez-vous ?  
**Votre réponse est correcte**  
**Migrez vers Amazon RDS avec des déploiements d'instances de base de données multi-AZ.**  
**Activez la protection contre les interruptions de service pour éviter les pannes.**  
**Augmenter la taille de l'instance EC2 (augmenter le processeur et la RAM).**  
**Ajoutez un équilibreur de charge d'application à l'instance EC2.**  
Explication générale  
**Migrez vers Amazon RDS en activant les déploiements d'instances de base de données multi-AZ**

Pour garantir une haute disponibilité de votre base de données MySQL, il est recommandé de migrer vers Amazon RDS (Relational Database Service) avec des déploiements d'instances de base de données multi-AZ (zones de disponibilité). Amazon RDS est un service de base de données managé qui simplifie l'administration des bases de données. Le déploiement multi-AZ assure la réplication synchrone automatique de la base de données vers un réplica de secours situé dans une zone de disponibilité différente. En cas de panne, Amazon RDS promeut automatiquement le réplica de secours en base de données principale, minimisant ainsi les interruptions de service et garantissant une haute disponibilité. En migrant vers Amazon RDS avec Multi-AZ, l'entreprise bénéficie d'un basculement automatisé, d'une durabilité des données accrue et d'une réduction des coûts d'exploitation liés à la gestion de la base de données.  
Question 59Correct  
Une multinationale du logiciel dispose de plusieurs équipes de développement pour différents projets. Ces équipes créent et lancent régulièrement des instances Amazon EC2 pour leurs opérations. Afin de respecter leur budget, elles avaient besoin d'une solution pour surveiller et contrôler les dépenses liées à ces instances.

Quelle action permettra de satisfaire à cette exigence ?  
**Utilisez AWS Lambda pour le calcul sans serveur**  
**Votre réponse est correcte**  
**Utilisez AWS Cost Explorer avec des ressources étiquetées**  
**Utilisez Amazon Polly pour recevoir des notifications**  
**Utiliser les instances Spot Amazon EC2**  
Explication générale  
**Utilisez AWS Cost Explorer avec des ressources étiquetées**

AWS Cost Explorer est un outil de visualisation qui aide les utilisateurs à analyser, comprendre et optimiser leurs dépenses AWS. Il offre une visibilité détaillée sur les coûts passés et prévisionnels, permettant ainsi une budgétisation efficace. Les utilisateurs peuvent consulter les données de manière granulaire, les filtrer selon différents paramètres et identifier les tendances ou anomalies de coûts, garantissant ainsi une gestion financière optimale de leurs ressources AWS.

Le balisage des ressources permet aux utilisateurs d'associer des métadonnées à leurs ressources AWS sous forme de paires clé-valeur. Ces balises facilitent l'organisation, le suivi et la gestion des ressources en les catégorisant selon leur finalité, leur propriétaire, leur environnement ou d'autres critères. Elles sont particulièrement utiles pour la répartition des coûts, l'automatisation et la gouvernance au sein d'environnements AWS complexes.

En associant des métadonnées aux instances EC2 (comme le nom du projet ou de l'équipe), l'entreprise peut ventiler ses coûts par projet ou équipe. Elle obtient ainsi une vision précise des dépenses engendrées par chaque équipe ou projet. De plus, grâce à la capacité de Cost Explorer à prévoir les coûts futurs à partir des données historiques, l'entreprise peut prendre des décisions éclairées concernant son budget et ses dépenses. C'est un outil puissant pour les organisations qui souhaitent maîtriser leurs dépenses AWS et comprendre leurs principaux facteurs de coûts.  
Question 60Correct  
Une entreprise de commerce électronique souhaite afficher des recommandations de produits aux utilisateurs en fonction de leur historique.

Quel service AWS répondra aux exigences ?  
**Amazon Polly**  
**Votre réponse est correcte**  
**Amazon Personnaliser**  
**Amazon SageMaker**  
**Reconnaissance Amazon**  
Explication générale  
**Amazon Personnaliser**

Amazon Personalize est un service d'apprentissage automatique qui simplifie la création de recommandations personnalisées pour les clients utilisant leurs applications. Personalize permet aux développeurs d'offrir des expériences personnalisées en recommandant des produits, du contenu et des promotions adaptés aux interactions, aux préférences et au comportement de chaque utilisateur. Ce service automatise le processus complexe de création, d'entraînement et de déploiement de modèles d'apprentissage automatique, permettant ainsi aux développeurs de mettre en œuvre facilement des moteurs de recommandation personnalisés, sans expertise préalable en la matière. Amazon Personalize s'adapte automatiquement pour traiter et analyser les données, générer des recommandations précises en temps réel ou par lots, et améliorer l'engagement et les taux de conversion grâce à une expérience utilisateur plus personnalisée.  
Question 61Correct  
Selon AWS Cloud Economics, qui décrit avec précision les avantages en termes de réduction des coûts liés à la migration vers AWS ?  
**Réduction automatique des coûts grâce à la migration de tout type de charge de travail vers le cloud AWS.**  
**Votre réponse est correcte**  
**Passer d'un modèle à forte intensité de dépenses d'investissement à un modèle à dépenses entièrement variables.**  
**Élimination de tous les coûts d'infrastructure sur site grâce à l'adoption des services AWS.**   
**Garantie de réduction des coûts opérationnels grâce à la nature même des services cloud.**  
Explication générale  
**Passer d'un modèle à forte intensité de dépenses d'investissement à un modèle à dépenses entièrement variables.**

AWS permet aux entreprises de passer d'un modèle de dépenses d'investissement (CapEx) à un modèle de dépenses variables (OpEx). L'OpEx est avantageux car il aligne directement les coûts sur l'utilisation et les besoins de l'entreprise. Le modèle de tarification à l'usage d'AWS permet aux entreprises de ne payer que pour les ressources informatiques qu'elles consomment. Cela peut engendrer des économies, notamment pour les entreprises dont la charge de travail fluctue, car elles peuvent adapter leurs ressources à la hausse ou à la baisse en fonction de leurs besoins, sans supporter de coûts liés à une infrastructure inactive. En revanche, le CapEx implique un investissement initial important dans les centres de données et les serveurs physiques.  
Question 62Correct  
Parmi les services AWS suivants, lesquels permettent de déployer rapidement une application Node.js sur le cloud AWS ? (Sélectionnez DEUX réponses.)  
**Amazon EC2**  
**AWS CloudFormation**  
**Amazon ECS**  
**Votre sélection est correcte**  
**Voile lumineuse Amazon**  
**Votre sélection est correcte**  
**AWS Elastic Beanstalk**  
Explication générale  
**Voile lumineuse Amazon**

Amazon Lightsail simplifie le lancement et la gestion de serveurs privés virtuels (VPS) avec des ressources de calcul, de stockage et de réseau préconfigurées. Ce service prend en charge de nombreuses applications et plateformes, notamment des langages de programmation populaires comme Node.js, Python, Java et bien d'autres. Lightsail offre une interface intuitive et des piles d'applications préconfigurées, dont Node.js, facilitant ainsi le déploiement d'une application Node.js sans nécessiter une gestion ou une configuration complexe de l'infrastructure. Avec Lightsail, les développeurs peuvent déployer rapidement leur application Node.js sur le cloud AWS en quelques clics seulement.

**AWS Elastic Beanstalk**

AWS Elastic Beanstalk permet un déploiement rapide des applications Node.js sur le cloud AWS. Ce service entièrement géré simplifie la gestion de l'infrastructure sous-jacente. Il permet aux développeurs de déployer facilement des applications web dans divers langages de programmation, tels que Java, .NET, Python, Node.js, Ruby, et bien d'autres.

Elastic Beanstalk provisionne et gère automatiquement les ressources nécessaires à l'exécution des applications, notamment les instances EC2, les équilibreurs de charge et les groupes de mise à l'échelle automatique. Il simplifie le processus de déploiement en fournissant une plateforme où les développeurs peuvent facilement téléverser leur code applicatif ; Elastic Beanstalk se charge du reste, y compris la configuration de l'environnement, la mise à l'échelle et l'équilibrage de charge.  
Question 63Correct  
Quelle est la principale différence entre une architecture monolithique et une architecture de microservices sur AWS ?  
**L'architecture monolithique est plus évolutive que l'architecture de microservices.**  
**L'architecture monolithique est plus tolérante aux pannes que l'architecture de microservices.**  
**Votre réponse est correcte**  
**L'architecture de microservices offre une plus grande flexibilité et une maintenance plus facile que l'architecture monolithique.**  
**L'architecture de microservices est plus étroitement couplée que l'architecture monolithique.**  
Explication générale  
**L'architecture de microservices offre une plus grande flexibilité et une maintenance plus facile que l'architecture monolithique.**

L'architecture de microservices offre une plus grande flexibilité et facilite la maintenance. Décomposer une application en services plus petits simplifie la mise à jour ou le remplacement de composants individuels, l'ajout de nouvelles fonctionnalités ou le changement de technologies sous-jacentes. De plus, les microservices peuvent être développés et déployés indépendamment, réduisant ainsi le risque d'introduction de bogues ou d'interruptions de service.  
Question 64Correct  
Quelle est une stratégie efficace pour maintenir une haute disponibilité des applications avec état et sessions persistantes ?  
**Votre réponse est correcte**  
**Utilisation de l'équilibrage de charge élastique avec sessions persistantes.**  
**Stockage des données de session sur un système de fichiers local pour chaque instance EC2.**  
**Utilisation d'Amazon S3 pour les données de session en temps réel.**  
**Déploiement d'applications dans une seule zone de disponibilité.**  
Explication générale  
**Utilisation de l'équilibrage de charge élastique avec sessions persistantes.**

L'équilibrage de charge élastique (ELB) avec sessions persistantes est une fonctionnalité puissante pour garantir la continuité des sessions utilisateur dans les applications avec état. Les sessions persistantes permettent à l'équilibreur de charge d'associer la session d'un utilisateur à une instance d'application spécifique. Ainsi, toutes les requêtes d'un utilisateur au cours de sa session sont envoyées à la même instance, assurant la cohérence de la session. Ceci est particulièrement important pour les applications où l'état de la session utilisateur est stocké localement sur l'instance et où les données de session doivent être conservées tout au long de l'interaction de l'utilisateur avec l'application.  
Question 65Correct  
Que faire si vous découvrez que votre instance EC2 est utilisée pour une activité suspecte, comme une attaque par déni de service (DoS) ?  
**Contactez le service client pour les tests d'intrusion**  
**Mettez à jour le système d'exploitation de votre instance EC2.**  
**Redémarrez votre instance EC2**  
**Votre réponse est correcte**  
**Contactez l'équipe de lutte contre les abus d'AWS**  
Explication générale  
**Contactez l'équipe de lutte contre les abus d'AWS**

Si vous constatez que votre instance EC2 est utilisée pour une activité suspecte, comme une attaque par déni de service (DoS), la procédure appropriée consiste à contacter l'équipe AWS dédiée aux abus. Cette équipe est spécialisée dans la gestion et l'analyse des incidents de sécurité potentiels et des signalements d'abus. En la contactant, vous pouvez lui fournir des détails sur l'incident, et elle pourra vous aider à enquêter et à résoudre le problème. Elle pourra également vous conseiller sur les mesures à prendre pour prévenir de tels incidents à l'avenir. Cette démarche permet à AWS d'être informée de l'incident et de prendre les mesures nécessaires pour protéger l'infrastructure et maintenir l'intégrité de ses services. Il est crucial d'agir rapidement dans de telles situations afin de minimiser les dommages potentiels et de garantir la conformité aux politiques AWS.

L'équipe AWS Trust & Safety propose une assistance pour gérer les comportements abusifs impliquant les ressources AWS, notamment :

* **Spam** : Si vous recevez des courriels indésirables provenant d'une adresse IP AWS, ou si des ressources AWS sont utilisées pour spammer des sites web ou des forums.  
* **Analyse des ports** : lorsque vos journaux indiquent que des adresses IP AWS analysent plusieurs ports sur votre serveur, potentiellement pour trouver des ports non sécurisés.  
* **Attaques par déni de service (DoS)** : Cas où les adresses IP d'AWS inondent les ports de vos systèmes avec un nombre excessif de paquets, potentiellement pour surcharger ou faire planter votre serveur ou son logiciel.  
* **Tentatives d'intrusion** : situations dans lesquelles des adresses IP AWS tentent de se connecter à vos systèmes, comme indiqué dans vos journaux.  
* **Hébergement de contenu interdit** : Si vous découvrez que des ressources AWS hébergent ou distribuent du contenu interdit, tel que du matériel illégal ou du contenu protégé par le droit d’auteur, sans l’autorisation du titulaire.  
* **Distribution de logiciels malveillants** : S’il existe des preuves que les ressources AWS sont utilisées pour distribuer des logiciels malveillants conçus pour compromettre ou endommager des ordinateurs ou d’autres machines.

