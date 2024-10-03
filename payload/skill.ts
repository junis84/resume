import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Kotlin',
      level: 3,
    },
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'PHP',
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
      level: 3,
    },
    {
      title: 'Spring Boot',
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
    {
      title: 'Elasticsearch',
      level: 3,
    },
    {
      title: 'Apache Kafka',
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
      title: 'AWS',
    },
    {
      title: 'Docker & K8s',
    },
    {
      title: 'Github',
    },
    {
      title: 'Datadog',
    },
    {
      title: 'Argo CD',
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
      title: 'React',
      level: 3,
    },
    {
      title: 'Vue.js',
      level: 3,
    },
    {
      title: 'Vanilla JS',
      level: 3,
    },
    {
      title: 'Puppeteer',
      level: 3,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, devops, frontend],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
