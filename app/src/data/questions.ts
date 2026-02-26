export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number | number[];
  explanation: string;
  domain: string;
  isMultipleChoice?: boolean;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Quel service AWS faut-il utiliser pour convertir la parole en texte ?",
    options: ["Amazon Polly", "Amazon Kendra", "AWS Elemental MediaConvert", "Amazon Transcribe"],
    correctAnswer: 3,
    explanation: "Amazon Transcribe est un service de reconnaissance vocale automatique qui convertit l'audio en texte. Grâce à l'API Amazon Transcribe, vous pouvez analyser des fichiers audio et obtenir un fichier texte contenant la transcription.",
    domain: "Technologie"
  },
  {
    id: 2,
    question: "Quel service AWS permet d'améliorer les performances en réduisant la latence pour les utilisateurs du monde entier ?",
    options: ["Amazon Direct Connect", "Route 53 d'Amazon", "Amazon CloudFront", "Amazon API Gateway"],
    correctAnswer: 2,
    explanation: "Amazon CloudFront est un service de réseau de diffusion de contenu (CDN) mondial conçu pour offrir des performances optimales en termes de vitesse et de faible latence.",
    domain: "Technologie"
  },
  {
    id: 3,
    question: "Une startup recherche une solution simple d'utilisation pour héberger des conteneurs. Elle a besoin d'une solution économique et immédiatement disponible, sans avoir à gérer la configuration des serveurs. Quel service AWS recommanderiez-vous ?",
    options: ["AWS Lambda", "Amazon EKS", "Amazon ECS", "AWS Fargate"],
    correctAnswer: 3,
    explanation: "AWS Fargate est un service sans serveur qui vous permet d'exécuter des conteneurs Amazon ECS sans avoir à gérer de serveurs ni de clusters d'instances Amazon EC2.",
    domain: "Technologie"
  },
  {
    id: 4,
    question: "Une entreprise possède une application existante et souhaite la migrer vers le cloud AWS en s'appuyant sur une architecture de microservices. Quel service AWS doit-elle utiliser pour découpler les composants ?",
    options: ["Amazon Lightsail", "Amazon API Gateway", "Amazon VPC", "Amazon SQS"],
    correctAnswer: 3,
    explanation: "Amazon Simple Queue Service (SQS) est un service de file d'attente de messages entièrement géré qui vous permet de découpler et de faire évoluer les microservices, les systèmes distribués et les applications sans serveur.",
    domain: "Technologie"
  },
  {
    id: 5,
    question: "Quel service AWS faut-il utiliser pour créer une section logiquement isolée dans le cloud AWS où l'on peut lancer des ressources AWS dans un réseau virtuel ?",
    options: ["Amazon CloudFront", "AWS Direct Connect", "AWS VPN", "Amazon VPC"],
    correctAnswer: 3,
    explanation: "Amazon VPC vous permet de provisionner une section logiquement isolée du cloud Amazon Web Services (AWS) où vous pouvez déployer des ressources AWS dans un réseau virtuel que vous définissez.",
    domain: "Technologie"
  },
  {
    id: 6,
    question: "Quel service AWS permet d'exécuter du code après l'insertion de données dans Amazon RDS ?",
    options: ["Amazon EC2", "AWS Batch", "Amazon EKS", "AWS Lambda"],
    correctAnswer: 3,
    explanation: "AWS Lambda est un service de calcul sans serveur et événementiel qui vous permet d'exécuter du code pour pratiquement n'importe quel type d'application ou de service backend sans avoir à provisionner ni à gérer de serveurs.",
    domain: "Technologie"
  },
  {
    id: 7,
    question: "Quel service AWS prend en charge le stockage de données en mémoire, ce qui accélère les performances des bases de données ?",
    options: ["Amazon S3 Glacier", "Amazon SQS", "Amazon RDS", "Amazon ElastiCache"],
    correctAnswer: 3,
    explanation: "Amazon ElastiCache est un service de cache en mémoire entièrement géré, prenant en charge des cas d'utilisation flexibles et en temps réel.",
    domain: "Technologie"
  },
  {
    id: 8,
    question: "Une entreprise possède environ 80 pétaoctets de données. Quel service est le plus adapté pour transférer ces données d'un centre de données sur site vers le cloud AWS ?",
    options: ["AWS Snowball", "AWS Snowmobile", "AWS Snowcone", "Accélération du transfert S3"],
    correctAnswer: 1,
    explanation: "AWS Snowmobile est un service de transfert de données à l'échelle de l'exaoctet permettant de déplacer des volumes de données extrêmement importants vers AWS. Vous pouvez transférer jusqu'à 100 pétaoctets par Snowmobile.",
    domain: "Technologie"
  },
  {
    id: 9,
    question: "Quel service AWS faut-il utiliser pour exécuter des applications conteneurisées sans gérer de serveurs ?",
    options: ["Amazon Lightsail", "AWS Fargate", "Amazon EC2", "AWS Lambda"],
    correctAnswer: 1,
    explanation: "AWS Fargate est un service sans serveur qui vous permet d'exécuter des conteneurs Amazon ECS sans avoir à gérer de serveurs ni de clusters d'instances Amazon EC2.",
    domain: "Technologie"
  },
  {
    id: 10,
    question: "Une entreprise doit migrer 70 To de données hors ligne vers le cloud AWS. Quel service recommanderiez-vous ?",
    options: ["AWS Snowmobile", "AWS Snowball", "AWS Snowcone", "Passerelle de stockage AWS"],
    correctAnswer: 1,
    explanation: "AWS Snowball utilise des périphériques de stockage physiques pour transférer des téraoctets de données entre AWS et votre emplacement. Vous pouvez transférer jusqu'à 80 téraoctets par Snowball.",
    domain: "Technologie"
  },
  {
    id: 11,
    question: "Une entreprise souhaite déployer une application sur plusieurs zones de disponibilité (AZ) pour garantir une haute disponibilité et une tolérance aux pannes. Quel service doit-elle utiliser pour répartir automatiquement le trafic entrant vers les instances opérationnelles ?",
    options: ["AWS DataSync", "AWS Elastic Load Balancing", "AWS Config", "AWS Auto Scaling"],
    correctAnswer: 1,
    explanation: "Elastic Load Balancing est un service AWS qui répartit automatiquement le trafic entrant d'une application sur plusieurs cibles, telles que des instances Amazon EC2, des conteneurs, des adresses IP et des fonctions Lambda.",
    domain: "Technologie"
  },
  {
    id: 12,
    question: "Quel service AWS permet d'envoyer, de stocker et de recevoir des messages entre des composants logiciels, quel que soit leur volume ?",
    options: ["Amazon ECS", "Amazon SQS", "Amazon EC2", "Amazon SNS"],
    correctAnswer: 1,
    explanation: "Amazon Simple Queue Service (SQS) est un service de file d'attente de messages entièrement géré qui vous permet de découpler et de faire évoluer les microservices, les systèmes distribués et les applications sans serveur.",
    domain: "Technologie"
  },
  {
    id: 13,
    question: "Quels sont les avantages de la création d'instantanés de volumes Amazon EBS pour la sauvegarde des données ? (Sélectionnez deux réponses)",
    options: ["Flexibilité", "Durabilité", "Évolutivité", "Rentable", "Élasticité"],
    correctAnswer: [1, 3],
    explanation: "Les snapshots Amazon EBS sont durables (99,999999999% de durabilité sur S3) et rentables (incrémentiels, ne stockent que les modifications depuis le dernier snapshot).",
    domain: "Concepts du cloud",
    isMultipleChoice: true
  },
  {
    id: 14,
    question: "Quel service de base de données AWS autorise des schémas flexibles et prend en charge les modèles de données documentaires ?",
    options: ["Amazon RDS", "Amazon DynamoDB", "Amazon Aurora", "Amazon Neptune"],
    correctAnswer: 1,
    explanation: "Amazon DynamoDB est un service de base de données NoSQL entièrement géré, offrant des performances rapides et prévisibles ainsi qu'une évolutivité transparente. DynamoDB prend en charge les modèles de données clé-valeur et document.",
    domain: "Technologie"
  },
  {
    id: 15,
    question: "Quel service AWS peut être utilisé pour surveiller et enregistrer en continu les configurations des ressources AWS ?",
    options: ["AWS CloudTrail", "Amazon Inspector", "AWS Config", "Amazon CloudWatch"],
    correctAnswer: 2,
    explanation: "AWS Config vous permet d'évaluer, d'auditer et d'analyser les configurations de vos ressources AWS. Config surveille et enregistre en continu les configurations de vos ressources AWS.",
    domain: "Technologie"
  },
  {
    id: 16,
    question: "Quel contrôle un client hérite-t-il pleinement d'AWS ?",
    options: ["Contrôles de gestion de la configuration", "Contrôles de gestion des correctifs", "Contrôles physiques et environnementaux", "Contrôles de sensibilisation et de formation"],
    correctAnswer: 2,
    explanation: "Les contrôles physiques et environnementaux sont des contrôles qu'un client hérite intégralement d'AWS.",
    domain: "Sécurité et conformité"
  },
  {
    id: 17,
    question: "Une entreprise souhaite développer une application offrant des services sur les plateformes web et mobiles. Tous les utilisateurs pourront se connecter via les réseaux sociaux tels que Facebook ou Google. Quel service doit être utilisé pour implémenter cette authentification ?",
    options: ["AWS Artifact", "AWS WAF", "AWS IAM", "Amazon Cognito"],
    correctAnswer: 3,
    explanation: "Amazon Cognito vous permet d'ajouter rapidement et facilement l'inscription, la connexion et le contrôle d'accès des utilisateurs à vos applications web et mobiles. Il prend en charge la connexion via les fournisseurs d'identité sociaux.",
    domain: "Sécurité et conformité"
  },
  {
    id: 18,
    question: "Dans le cadre du modèle de responsabilité partagée d'AWS pour les conteneurs, quelles affirmations sont vraies ? (Sélectionnez deux réponses.)",
    options: [
      "AWS est responsable du chiffrement côté client et côté serveur",
      "Tous deux sont responsables de la configuration des infrastructures réseau",
      "Il incombe aux clients de configurer le pare-feu et la gestion des accès",
      "Les clients sont responsables de la gestion de la plateforme et du système d'exploitation invité",
      "AWS est responsable de la configuration du système d'exploitation et du réseau"
    ],
    correctAnswer: [2, 4],
    explanation: "AWS est responsable de la configuration du système d'exploitation et du réseau, tandis que le client est responsable de configurer le pare-feu et la gestion des accès.",
    domain: "Sécurité et conformité",
    isMultipleChoice: true
  },
  {
    id: 19,
    question: "Quel service AWS vous permet d'attribuer une stratégie à un groupe IAM ?",
    options: ["AWS Organizations", "AWS IAM", "AWS CloudFormation", "AWS Config"],
    correctAnswer: 1,
    explanation: "AWS Identity and Access Management (IAM) offre un contrôle d'accès précis sur l'ensemble d'AWS. Avec IAM, vous pouvez définir qui peut accéder à quels services et ressources, et sous quelles conditions.",
    domain: "Sécurité et conformité"
  },
  {
    id: 20,
    question: "Quelles sont les responsabilités du client en matière de sécurité dans le cloud AWS ?",
    options: [
      "Sécurisation des infrastructures dans les centres de données",
      "Maintien du chiffrement côté client",
      "Maintenance des configurations de pare-feu au niveau matériel",
      "Maintenir la mise en réseau entre les composants matériels"
    ],
    correctAnswer: 1,
    explanation: "Le client est responsable de la gestion du chiffrement côté client, du stockage et de l'accessibilité des données sensibles, ainsi que de la gestion des identités et des accès (IAM).",
    domain: "Sécurité et conformité"
  },
  {
    id: 21,
    question: "Parmi les services suivants, lesquels offrent une meilleure sécurité à notre cloud AWS ? (Sélectionnez deux réponses)",
    options: ["AWS KMS", "Amazon CloudWatch", "AWS WAF", "AWS CloudTrail", "AWS CloudFormation"],
    correctAnswer: [0, 2],
    explanation: "AWS Key Management Service (KMS) simplifie la création et la gestion de clés cryptographiques, et AWS WAF est un pare-feu d'applications web qui protège vos applications web et API contre les attaques web courantes.",
    domain: "Sécurité et conformité",
    isMultipleChoice: true
  },
  {
    id: 22,
    question: "Quel service AWS faut-il utiliser pour automatiser la gestion de la configuration avec Chef et Puppet ?",
    options: ["AWS CloudTrail", "AWS OpsWorks", "AWS Config", "AWS CloudFormation"],
    correctAnswer: 1,
    explanation: "AWS OpsWorks est un service de gestion de la configuration qui fournit des instances gérées de Chef et Puppet.",
    domain: "Sécurité et conformité"
  },
  {
    id: 23,
    question: "Quel service AWS assure l'authentification et le contrôle d'accès aux applications web et mobiles ?",
    options: ["Amazon Cognito", "AWS Artifact", "AWS Organizations", "AWS IAM"],
    correctAnswer: 0,
    explanation: "Amazon Cognito vous permet d'ajouter rapidement et facilement l'inscription, la connexion et le contrôle d'accès des utilisateurs à vos applications web et mobiles.",
    domain: "Sécurité et conformité"
  },
  {
    id: 24,
    question: "Quel service AWS vous permet de générer un rapport listant tous les utilisateurs de votre compte et leurs identifiants, y compris les mots de passe, les clés d'accès, etc. ?",
    options: ["Rapports d'artefacts AWS", "Rapports sur les coûts et l'utilisation", "Rapports d'identification IAM", "Rapports de répartition des coûts"],
    correctAnswer: 2,
    explanation: "Vous pouvez générer et télécharger un rapport d'informations d'identification répertoriant tous les utilisateurs de votre compte et l'état de leurs différentes informations d'identification, notamment les mots de passe, les clés d'accès et les dispositifs d'authentification multifacteur (MFA).",
    domain: "Sécurité et conformité"
  },
  {
    id: 25,
    question: "Parmi les services AWS suivants, lesquels permettent de déployer rapidement une application Node.js sur le cloud AWS ? (Sélectionnez deux réponses.)",
    options: ["AWS CloudFormation", "Amazon ECS", "Amazon Lightsail", "AWS Elastic Beanstalk", "Amazon EC2"],
    correctAnswer: [2, 3],
    explanation: "Amazon Lightsail propose plusieurs environnements de développement préconfigurés dont Node.js. AWS Elastic Beanstalk permet de déployer et de faire évoluer des applications développées avec Node.js.",
    domain: "Technologie",
    isMultipleChoice: true
  },
  {
    id: 26,
    question: "Une entreprise souhaite migrer vers le cloud AWS. De quels avantages bénéficiera-t-elle ? (Sélectionnez deux réponses.)",
    options: [
      "Ayez accès aux ressources quand vous en avez besoin",
      "Peut réduire les coûts de développement d'applications",
      "Payez uniquement lorsque et en fonction de votre consommation",
      "Les transferts de données entrants et sortants sont gratuits",
      "Peut réduire les coûts de promotion d'une entreprise"
    ],
    correctAnswer: [0, 2],
    explanation: "AWS vous permet d'accéder aux ressources quand vous en avez besoin et vous ne payez que lorsque vous consommez des ressources informatiques, et uniquement pour la quantité consommée.",
    domain: "Concepts du cloud",
    isMultipleChoice: true
  },
  {
    id: 27,
    question: "Parmi les services suivants, lesquels proposent un service basé sur un serveur ? (Sélectionnez deux réponses.)",
    options: ["Amazon DynamoDB", "Amazon SNS", "Amazon Redshift", "AWS Fargate", "Amazon RDS"],
    correctAnswer: [2, 4],
    explanation: "Amazon RDS et Amazon Redshift sont des services basés sur des serveurs. AWS Fargate est sans serveur, et DynamoDB et SNS sont également des services gérés sans serveur.",
    domain: "Concepts du cloud",
    isMultipleChoice: true
  },
  {
    id: 28,
    question: "Quel est le concept architectural capable de s'adapter au nombre d'utilisateurs, au trafic ou au volume de données sans compromettre les performances ?",
    options: ["Découplez vos composants", "Concevoir pour l'agilité", "Mettre en œuvre l'élasticité", "Concevoir pour l'échec"],
    correctAnswer: 2,
    explanation: "Les systèmes destinés à évoluer doivent reposer sur une architecture évolutive capable de supporter la croissance du nombre d'utilisateurs, du trafic ou du volume de données sans perte de performance.",
    domain: "Concepts du cloud"
  },
  {
    id: 29,
    question: "Quel service AWS est toujours gratuit ?",
    options: ["Amazon Lightsail", "AWS Control Tower", "Amazon Redshift", "Amazon Inspector"],
    correctAnswer: 1,
    explanation: "AWS Control Tower est un service qui vous permet d'appliquer et de gérer des règles de gouvernance pour la sécurité, les opérations et la conformité à grande échelle. Il est toujours gratuit.",
    domain: "Concepts du cloud"
  },
  {
    id: 30,
    question: "Quels services AWS ont une portée mondiale ? (Sélectionnez deux réponses)",
    options: ["Elastic Load Balancing (ELB)", "Amazon DynamoDB", "Amazon CloudFront", "AWS Elastic Beanstalk", "Amazon Route 53"],
    correctAnswer: [2, 4],
    explanation: "Amazon Route 53 (DNS) et Amazon CloudFront (CDN) sont des services globaux. Les autres sont des services régionaux.",
    domain: "Concepts du cloud",
    isMultipleChoice: true
  },
  {
    id: 31,
    question: "Quel service AWS fournit des recommandations pour vous aider à suivre les meilleures pratiques en matière d'amélioration de la sécurité et des performances, de la tolérance aux pannes, de réduction des coûts et de surveillance des quotas de service ?",
    options: ["Amazon CloudWatch", "AWS IAM", "AWS Trusted Advisor", "Amazon Inspector"],
    correctAnswer: 2,
    explanation: "AWS Trusted Advisor vous fournit des recommandations pour vous aider à suivre les bonnes pratiques AWS. Il évalue votre compte à l'aide de contrôles.",
    domain: "Concepts du cloud"
  },
  {
    id: 32,
    question: "Quel est l'avantage d'exécuter une application dans plusieurs zones de disponibilité (AZ) ?",
    options: ["Faible latence", "Équilibrage de charge", "Augmenter la capacité", "Haute disponibilité"],
    correctAnswer: 3,
    explanation: "L'exécution d'une application dans plusieurs zones de disponibilité offre une haute disponibilité et une meilleure tolérance aux pannes.",
    domain: "Concepts du cloud"
  },
  {
    id: 33,
    question: "Parmi les affirmations suivantes concernant Amazon Route 53, lesquelles sont vraies ? (Sélectionnez deux réponses.)",
    options: [
      "Peut fournir une connexion directe entre le cloud AWS et le centre de données sur site",
      "Analyse en continu les charges de travail AWS à la recherche de vulnérabilités",
      "Vous pouvez configurer le basculement DNS afin qu'il achemine votre trafic vers une ressource saine",
      "Offre une protection contre les attaques DDoS pour les applications exécutées sur AWS",
      "Il est possible de configurer les paramètres DNS pour les contrôles d'intégrité et utiliser une stratégie de routage pour l'équilibrage de charge"
    ],
    correctAnswer: [2, 4],
    explanation: "Route 53 permet de configurer le basculement DNS et d'utiliser des stratégies de routage pour l'équilibrage de charge avec des contrôles d'intégrité.",
    domain: "Concepts du cloud",
    isMultipleChoice: true
  },
  {
    id: 34,
    question: "Parmi les services AWS suivants, lesquels offrent un service global ? (Sélectionnez deux réponses.)",
    options: ["AWS Organizations", "Amazon CloudFront", "Amazon EC2", "Amazon Aurora", "Amazon EFS"],
    correctAnswer: [0, 1],
    explanation: "AWS Organizations et Amazon CloudFront sont des services globaux. EC2, Aurora et EFS sont des services régionaux.",
    domain: "Concepts du cloud",
    isMultipleChoice: true
  },
  {
    id: 35,
    question: "Une entreprise souhaite utiliser certains services du cloud AWS. Cependant, pour des raisons juridiques, elle doit exécuter ces services sur son propre centre de données. Quel service AWS permet d'exécuter des services AWS natifs dans un centre de données sur site ?",
    options: ["AWS Direct Connect", "AWS Outposts", "AWS VPN", "Amazon VPC"],
    correctAnswer: 1,
    explanation: "AWS Outposts est une gamme de solutions entièrement gérées qui déploie l'infrastructure et les services AWS sur pratiquement n'importe quel site ou en périphérie pour une expérience hybride parfaitement homogène.",
    domain: "Concepts du cloud"
  },
  {
    id: 36,
    question: "Quelle affirmation est correcte concernant la haute disponibilité d'une application dans le cloud AWS ?",
    options: [
      "Utilisez AWS CloudFront devant votre application pour la mise en cache",
      "Placez l'application derrière un équilibreur de charge élastique réparti sur plusieurs régions",
      "Déployez l'application dans au moins deux zones de disponibilité",
      "Augmenter la capacité de l'application pour gérer un trafic plus important"
    ],
    correctAnswer: 2,
    explanation: "Vous pouvez améliorer la haute disponibilité en déployant votre application derrière un équilibreur de charge élastique réparti sur plusieurs zones de disponibilité.",
    domain: "Concepts du cloud"
  },
  {
    id: 37,
    question: "Parmi les propositions suivantes, lesquelles constituent des avantages de l'utilisation du cloud AWS ? (Sélectionnez deux réponses)",
    options: [
      "Peut partager des ressources critiques avec d'autres comptes au sein de l'organisation",
      "Vous pouvez bénéficier de remises sur quantité avec une seule facture",
      "Bénéficiera d'une réduction fixe pour l'utilisation sur l'ensemble des comptes",
      "Vous bénéficierez d'une réduction plus importante sur le prix normal pour la réservation d'instances EC2",
      "Vous pouvez utiliser un seul plan de support entreprise pour tous les comptes"
    ],
    correctAnswer: [0, 1],
    explanation: "AWS Organizations permet de partager des ressources critiques avec d'autres comptes et de bénéficier de remises sur quantité avec une seule facture.",
    domain: "Concepts du cloud",
    isMultipleChoice: true
  },
  {
    id: 38,
    question: "Une entreprise possède une grande quantité de données et souhaite les sauvegarder sur un autre site géographique. Quelle est la solution la plus adaptée ?",
    options: [
      "Créer une réplique dans une autre région",
      "Sauvegarde des données sur site",
      "Créez une réplique dans une autre zone de disponibilité",
      "Sauvegarde des données dans les zones locales"
    ],
    correctAnswer: 0,
    explanation: "Pour sauvegarder des données dans un emplacement géographique distinct, vous devez créer une réplique ou copier les données vers une autre région AWS.",
    domain: "Concepts du cloud"
  },
  {
    id: 39,
    question: "Quel service AWS prend en charge les langages de requêtes graphiques pour effectuer des requêtes complexes ?",
    options: ["Amazon DynamoDB", "Amazon Redshift", "Amazon Neptune", "Amazon Aurora"],
    correctAnswer: 2,
    explanation: "Amazon Neptune est un service de base de données graphiques entièrement géré qui prend en charge les langages de requêtes graphiques comme Gremlin, openCypher et SPARQL.",
    domain: "Technologie"
  },
  {
    id: 40,
    question: "Quel service AWS permet d'exécuter des applications conteneurisées ?",
    options: ["AWS Lambda", "AWS Elastic Beanstalk", "Amazon ECS", "Amazon EC2"],
    correctAnswer: 2,
    explanation: "Amazon Elastic Container Service (Amazon ECS) est un service de gestion de conteneurs hautement évolutif et rapide qui simplifie l'exécution, l'arrêt et la gestion des conteneurs Docker sur un cluster.",
    domain: "Technologie"
  },
  {
    id: 41,
    question: "Quel service permet d'exécuter du code sans provisionner de serveurs ?",
    options: ["AWS Fargate", "AWS Lambda", "AWS Batch", "Amazon EC2"],
    correctAnswer: 1,
    explanation: "AWS Lambda est un service de calcul sans serveur et événementiel qui vous permet d'exécuter du code sans avoir à provisionner ni à gérer de serveurs.",
    domain: "Technologie"
  },
  {
    id: 42,
    question: "Une application est actuellement hébergée sur plusieurs instances EC2 et doit répartir le trafic entre ces instances. Quel service recommanderiez-vous ?",
    options: ["Elastic Load Balancing", "Amazon CloudFront", "AWS Auto Scaling", "Amazon Route 53"],
    correctAnswer: 0,
    explanation: "Elastic Load Balancing (ELB) répartit automatiquement votre trafic entrant sur plusieurs cibles, telles que des instances EC2, des conteneurs et des adresses IP.",
    domain: "Technologie"
  },
  {
    id: 43,
    question: "Quel service de base de données AWS prend en charge les bases de données sans schéma ?",
    options: ["Amazon DynamoDB", "Amazon Redshift", "Amazon Neptune", "Amazon RDS"],
    correctAnswer: 0,
    explanation: "Amazon DynamoDB est une base de données sans schéma entièrement gérée, compatible NoSQL, offrant des performances rapides et prévisibles ainsi qu'une évolutivité transparente.",
    domain: "Technologie"
  },
  {
    id: 44,
    question: "Quelle affirmation est vraie selon la réplication Amazon RDS ?",
    options: [
      "Amazon RDS réplique les données de manière synchrone vers différentes zones de disponibilité",
      "Amazon RDS crée des réplicas de manière synchrone et asynchrone",
      "Amazon RDS ne prend pas en charge les réplications pour les zones de disponibilité multiples",
      "Amazon RDS crée des réplicas de manière asynchrone dans différentes zones de disponibilité"
    ],
    correctAnswer: 0,
    explanation: "Lors du provisionnement d'une instance de base de données multi-AZ, Amazon RDS réplique les données de manière synchrone vers une instance de secours située dans une autre zone de disponibilité.",
    domain: "Technologie"
  },
  {
    id: 45,
    question: "Quel service AWS faut-il utiliser pour la base de données en mémoire dans les cas d'utilisation en temps réel avec des performances élevées ?",
    options: ["Amazon DocumentDB", "Amazon Neptune", "Amazon ElastiCache", "Amazon RDS"],
    correctAnswer: 2,
    explanation: "Amazon ElastiCache est un service de cache en mémoire entièrement géré, prenant en charge des cas d'utilisation flexibles et en temps réel.",
    domain: "Technologie"
  },
  {
    id: 46,
    question: "Une grande entreprise souhaite envoyer un e-mail marketing en masse à ses clients. Quel service recommanderiez-vous ?",
    options: ["Amazon Pinpoint", "Amazon Connect", "AWS Fargate", "Amazon SQS"],
    correctAnswer: 0,
    explanation: "Amazon Pinpoint est un service de communication marketing flexible et évolutif qui permet d'interagir avec vos clients via différents canaux tels que l'e-mail, les SMS, les notifications push, la voix ou la messagerie intégrée à l'application.",
    domain: "Technologie"
  },
  {
    id: 47,
    question: "Vous avez une application de microservices exécutée dans le cloud AWS qui rencontre des problèmes de performance et de latence. Quel service AWS vous aide à résoudre ces problèmes ?",
    options: ["AWS X-Ray", "AWS CloudTrail", "AWS Cloud9", "Amazon Inspector"],
    correctAnswer: 0,
    explanation: "AWS X-Ray aide les développeurs à analyser et à déboguer les applications distribuées en production, notamment celles construites avec une architecture de microservices.",
    domain: "Technologie"
  },
  {
    id: 48,
    question: "Combien de périodes de réservation sont disponibles pour bénéficier de remises importantes sur une instance Amazon EC2 ? (Sélectionnez deux réponses.)",
    options: ["5 ans", "4 ans", "3 ans", "2 ans", "1 an"],
    correctAnswer: [2, 4],
    explanation: "Vous pouvez souscrire un engagement d'un an ou de trois ans pour bénéficier d'une réduction importante (jusqu'à 72%) sur les instances réservées EC2.",
    domain: "Facturation et tarification",
    isMultipleChoice: true
  },
  {
    id: 49,
    question: "Pour une startup, laquelle des options suivantes recommanderiez-vous pour configurer une instance EC2 au coût le plus bas possible sur le long terme ?",
    options: ["Instance réservée", "Hôtes dévoués", "Instance à la demande", "Instance Spot"],
    correctAnswer: 0,
    explanation: "Les instances réservées (RI) Amazon EC2 offrent une réduction importante (jusqu'à 72%) par rapport à la tarification à la demande et garantissent une capacité réservée.",
    domain: "Facturation et tarification"
  },
  {
    id: 50,
    question: "Quel service vous aide à visualiser, comprendre et gérer les coûts et l'utilisation de vos comptes AWS ?",
    options: ["AWS Cost Explorer", "Budgets AWS", "Calculateur mensuel simple AWS", "Facturation AWS"],
    correctAnswer: 0,
    explanation: "AWS Cost Explorer possède une interface conviviale qui vous permet de visualiser, comprendre et gérer vos coûts et votre utilisation AWS.",
    domain: "Facturation et tarification"
  },
  {
    id: 51,
    question: "Quelle fonctionnalité ou quel service AWS vous permet de suivre les montants des dépenses de manière détaillée sur plusieurs ressources ?",
    options: ["Budgets AWS", "Catalogue de services AWS", "AWS Marketplace", "Étiquettes d'affectation des coûts"],
    correctAnswer: 3,
    explanation: "Les étiquettes d'affectation des coûts AWS sont de simples libellés que vous pouvez attribuer aux ressources pour suivre vos coûts AWS de manière détaillée.",
    domain: "Facturation et tarification"
  },
  {
    id: 52,
    question: "Quel forfait d'assistance vous offre des services de type conciergerie ?",
    options: ["Entreprise", "Basique", "Business", "Développeur"],
    correctAnswer: 0,
    explanation: "Le support AWS Enterprise vous offre un service personnalisé de type conciergerie, axé sur la réussite de vos objectifs et votre déploiement réussi dans le cloud.",
    domain: "Facturation et tarification"
  },
  {
    id: 53,
    question: "AWS propose cinq plans de support client. Lesquels des éléments suivants sont accessibles avec le plan de support développeur ? (Sélectionnez deux réponses.)",
    options: [
      "Outils de diagnostic côté client",
      "Revues d'entreprise de gestion",
      "Conseils en matière d'architecture d'application",
      "Gestionnaire de compte technique",
      "Contrôles de santé des services"
    ],
    correctAnswer: [0, 4],
    explanation: "Le plan de support Développeur donne accès aux outils de diagnostic côté client et aux contrôles de santé des services.",
    domain: "Facturation et tarification",
    isMultipleChoice: true
  },
  {
    id: 54,
    question: "Quel service propose des recommandations pour vous aider à réduire vos coûts ?",
    options: ["AWS Trusted Advisor", "AWS Cost Explorer", "Calculateur mensuel simple AWS", "Amazon Inspector"],
    correctAnswer: 0,
    explanation: "AWS Trusted Advisor vous fournit des recommandations pour vous aider à suivre les bonnes pratiques AWS, y compris la réduction des coûts.",
    domain: "Facturation et tarification"
  },
  {
    id: 55,
    question: "Parmi les éléments suivants, lesquels influencent le prix d'une instance EC2 ? (Sélectionnez deux réponses)",
    options: [
      "Nombre d'adresses IP privées",
      "Groupe de sécurité",
      "Capacité de stockage",
      "Type d'instance",
      "La zone de disponibilité"
    ],
    correctAnswer: [2, 3],
    explanation: "Le type d'instance et la capacité de stockage influencent le prix d'une instance EC2. Les groupes de sécurité et les adresses IP privées sont gratuits.",
    domain: "Facturation et tarification",
    isMultipleChoice: true
  },
  {
    id: 56,
    question: "Quelle est l'option d'achat la plus rentable pour exécuter un ensemble d'instances EC2 qui doivent être disponibles en permanence pendant deux mois ?",
    options: ["Instances à la demande", "Instances dédiées", "Instances ponctuelles", "Instances réservées"],
    correctAnswer: 0,
    explanation: "Les instances à la demande sont la meilleure option pour une utilisation de courte durée (deux mois) sans engagement à long terme.",
    domain: "Facturation et tarification"
  },
  {
    id: 57,
    question: "Si votre entreprise dispose d'un plan de support AWS Enterprise, qui devez-vous contacter pour toute question relative à la facturation ou à votre compte ?",
    options: [
      "Vendeur sur AWS Marketplace",
      "Équipe de support AWS Concierge",
      "Réseau de partenaires AWS (APN)",
      "Équipe de lutte contre les abus AWS"
    ],
    correctAnswer: 1,
    explanation: "L'équipe d'assistance AWS Concierge est disponible pour les clients avec un plan Enterprise Support pour toutes les questions relatives à la facturation et aux comptes.",
    domain: "Facturation et tarification"
  },
  {
    id: 58,
    question: "Après avoir consulté les rapports de coûts et d'utilisation d'AWS dans la console de gestion AWS, une entreprise identifie un problème de facturation. Quelles mesures doit-elle prendre pour le résoudre ?",
    options: [
      "Créez une demande d'assistance relative à la facturation et soumettez-la au support AWS pour obtenir de l'aide",
      "Créez un nouveau tableau de bord sur Amazon QuickSight pour analyser les tendances et les valeurs aberrantes",
      "Téléversez les données de facturation dans un nouveau compartiment Amazon S3 pour les analyser avec Amazon Athena",
      "Lancez une instance Amazon EC2 de taille adaptée pour surveiller les nouveaux rapports d'utilisation"
    ],
    correctAnswer: 0,
    explanation: "Vous pouvez créer une demande d'assistance dans le Centre de support de la console de gestion AWS pour obtenir de l'aide sur les questions de facturation.",
    domain: "Sécurité et conformité"
  },
  {
    id: 59,
    question: "Une entreprise possède des données sensibles hautement confidentielles et souhaite utiliser un dispositif de sécurité pour gérer ses clés cryptographiques. Quel service AWS recommanderiez-vous ?",
    options: ["AWS KMS", "AWS CloudHSM", "AWS Config", "AWS IAM"],
    correctAnswer: 1,
    explanation: "AWS CloudHSM vous aide à respecter les exigences de conformité grâce à l'utilisation d'instances de modules de sécurité matériels (HSM) dédiées au sein du cloud AWS.",
    domain: "Sécurité et conformité"
  },
  {
    id: 60,
    question: "Quelle entité doit être utilisée pour accorder des autorisations directes à un utilisateur IAM ?",
    options: ["MFA", "Rôle IAM", "Politique IAM", "Groupe IAM"],
    correctAnswer: 2,
    explanation: "Vous gérez les accès à AWS en créant des politiques et en les associant à des identités IAM (utilisateurs, groupes d'utilisateurs ou rôles).",
    domain: "Sécurité et conformité"
  },
  {
    id: 61,
    question: "Quelle est la responsabilité du client lorsqu'il utilise AWS Lambda dans le cadre du modèle de responsabilité partagée d'AWS ?",
    options: ["Plateforme d'application", "Sécurité du code", "Système opérateur", "Fondation pour l'infrastructure"],
    correctAnswer: 1,
    explanation: "Lorsqu'un client utilise AWS Lambda, les clients sont responsables de la sécurité de leur code, du stockage et de l'accessibilité des données sensibles, ainsi que de la gestion des identités et des accès (IAM).",
    domain: "Sécurité et conformité"
  },
  {
    id: 62,
    question: "Une entreprise dispose d'une application exécutée sur une instance Amazon EC2 et souhaite renforcer la sécurité du trafic entrant et sortant. Quelles solutions permettent d'améliorer la sécurité d'une instance EC2 ? (Sélectionnez deux réponses.)",
    options: ["Groupes de sécurité", "Clé d'accès IAM", "ACL réseau", "Politique IAM", "Passerelles Internet"],
    correctAnswer: [0, 2],
    explanation: "Les groupes de sécurité agissent comme un pare-feu virtuel pour vos instances EC2, et les ACL réseau sont une couche de sécurité optionnelle pour votre VPC.",
    domain: "Sécurité et conformité",
    isMultipleChoice: true
  },
  {
    id: 63,
    question: "Laquelle des options suivantes permet d'accorder l'autorisation d'accéder aux ressources AWS depuis les comptes des membres d'une organisation AWS ?",
    options: ["Politique de routage", "Politique IAM", "Politiques de contrôle des services (PCS)", "Clé d'accès"],
    correctAnswer: 2,
    explanation: "Les politiques de contrôle des services (PCS) sont un type de politique d'organisation permettant de gérer les autorisations au sein de votre organisation.",
    domain: "Sécurité et conformité"
  },
  {
    id: 64,
    question: "Quelles fonctionnalités sont uniquement disponibles dans le cadre du support AWS Enterprise ?",
    options: [
      "Conseiller de confiance AWS",
      "Assistance technique améliorée",
      "Tableau de bord de santé personnelle AWS",
      "Équipe de service de conciergerie"
    ],
    correctAnswer: 3,
    explanation: "L'équipe d'assistance Concierge est uniquement disponible avec le support AWS Enterprise.",
    domain: "Sécurité et conformité"
  },
  {
    id: 65,
    question: "Quel service de sécurité est automatiquement activé pour tous les clients AWS sans frais supplémentaires ?",
    options: ["AWS Shield Advanced", "AWS WAF", "AWS Shield Standard", "Amazon GuardDuty"],
    correctAnswer: 2,
    explanation: "Tous les clients AWS bénéficient de la protection automatique d'AWS Shield Standard, sans frais supplémentaires.",
    domain: "Sécurité et conformité"
  }
];
