import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'PHP',
      level: 3,
    },
    {
      title: 'Kotlin',
      level: 3,
    },
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'Node.js',
      level: 3,
    },
    {
      title: 'TypeScript',
      level: 3,
    },
    {
      title: 'Go',
      level: 2,
    },
    {
      title: 'Elastic Search',
      level: 2,
    },
    {
      title: 'Apache Kafka',
      level: 2,
    },
    {
      title: 'AWS SNS',
      level: 3,
    },
    {
      title: 'AWS SQS',
      level: 3,
    },
    {
      title: 'AWS S3',
      level: 3,
    },
    {
      title: 'AWS Lambda',
      level: 3,
    },
    {
      title: 'AWS Step Functions',
      level: 3,
    },
    {
      title: 'Spring',
      level: 3,
    },
    {
      title: 'JUnit 5',
      level: 3,
    },
    {
      title: 'Kotest',
      level: 3,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'Redis',
      level: 3,
    },
    {
      title: 'AWS Dynamo DB',
      level: 2,
    },
    {
      title: 'MongoDB',
      level: 2,
    },
  ],
};

const devops: ISkill.Skill = {
  category: 'DevOps',
  items: [
    {
      title: 'Linux',
    },
    {
      title: 'Nginx',
    },
    {
      title: 'Docker',
    },
    {
      title: 'Serverless',
    },
    {
      title: 'AWS EC2',
    },
    {
      title: 'AWS CloudWatch',
    },
    {
      title: 'AWS CloudFormation',
    },
    {
      title: 'AWS Athena',
    },
    {
      title: 'AWS CloudFront',
    },
    {
      title: 'AWS ECR',
    },
    {
      title: 'AWS EKS',
    },
    {
      title: 'AWS KMS',
    },
    {
      title: 'Spinnaker',
    },
    {
      title: 'Jenkins',
    },
    {
      title: 'Grafana',
    },
    {
      title: 'Kibana',
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Vue.js',
      level: 3,
    },
    {
      title: 'Vanilla JS',
      level: 3,
    },
    {
      title: 'ES6',
      level: 3,
    },
    {
      title: 'WebPack',
      level: 3,
    },
    {
      title: 'NPM',
      level: 3,
    },
    {
      title: 'Yarn',
      level: 3,
    },
    {
      title: 'Lodash',
      level: 3,
    },
    {
      title: 'Puppeteer',
      level: 3,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Security',
    },
    {
      title: 'intelliJ IDEA',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Git',
    },
    {
      title: 'Bitbucket',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
    {
      title: 'Slack',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, devops, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
