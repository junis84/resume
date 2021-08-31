import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '무신사 커뮤니티 서비스 백엔드 개발',
      startedAt: '2023-01',
      where: '무신사 (Musinsa)',
      descriptions: [
        {
          content: 'API Server',
          weight: 'MEDIUM',
          descriptions: [
            { content: '텍스트 기반 커뮤니티 API 개발' },
            { content: 'Java, Spring Boot를 사용하여 개발' },
            { content: 'TDD 방법론으로 개발: Code 커버리지 80%' },
            { content: '헥사고날 아키텍쳐 설계: Port(in, out) and Adapter를 통한 의존성 분리' },
            { content: '이벤트 드리븐 아키텍쳐 설계: AWS MSK(Kafka)를 통한 이벤트 기반 설계' },
            { content: 'AWS ECR, EKS로 서버 구성' },
            {
              content:
                'AWS MSK(Kafka), AWS CloudFront, AWS S3, AWS ElastiCache, AWS RDS 등의 인프라 활용',
            },
          ],
        },
      ],
    },
    {
      title: '무신사 오퍼월 서비스 백엔드 개발',
      startedAt: '2022-05',
      where: '무신사 (Musinsa)',
      descriptions: [
        {
          content: 'API Server',
          weight: 'MEDIUM',
          descriptions: [
            { content: '오퍼월(무료 포인트 충전소)에 사용되는 API 개발' },
            { content: 'Kotlin, Spring Boot를 사용하여 개발' },
            { content: 'TDD 방법론으로 개발: Code 커버리지 90%' },
            { content: 'DDD 설계: 범용 언어로 바운디드 컨텍스트와 어그리게이트 활용' },
            { content: '이벤트 드리븐 아키텍쳐 설계: AWS MSK(Kafka)를 통한 이벤트 기반 설계' },
            { content: 'AWS ECR, EKS로 서버 구성' },
            {
              content:
                'AWS MSK(Kafka), AWS CloudFront, AWS S3, AWS ElastiCache, AWS RDS 등의 인프라 활용',
            },
          ],
        },
      ],
    },
    {
      title: '무신사 숏TV 서비스 백엔드 & 백오피스 개발',
      startedAt: '2022-01',
      where: '무신사 (Musinsa)',
      descriptions: [
        {
          content: 'API Server',
          weight: 'MEDIUM',
          descriptions: [
            { content: '숏TV(짧은 동영상 서비스)에 사용되는 API 개발' },
            { content: 'Java, Spring Boot를 사용하여 개발' },
            { content: 'AWS ECR, EKS로 서버 구성' },
            { content: 'AWS CloudFront, AWS S3, AWS ElastiCache, AWS RDS 등의 인프라 활용' },
          ],
        },
        {
          content: 'Back Office Web',
          weight: 'MEDIUM',
          descriptions: [
            { content: '숏폼(짧은 동영상 서비스)에 사용되는 백오피스 웹 개발' },
            { content: 'Vue.js를 사용하여 개발' },
          ],
        },
        {
          content: 'ETC',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'S3 -> SQS -> Lambda 파이프라인 구성으로 Video ingestion(트랜스코딩, 미리보기 이미지 생성 등) 관련 처리를 진행',
            },
            { content: '콘텐츠 외부 호출 제한 처리' },
          ],
        },
      ],
    },
    {
      title: '무신사 블랙프라이데이 이벤트 업데이트 및 운영',
      startedAt: '2021-11',
      endedAt: '2021-12',
      where: '무신사 (Musinsa)',
      descriptions: [
        { content: '블랙프라이데이 이벤트 대비 캐싱 최적화 및 고도화 개발' },
        { content: '블랙프라이데이 찍기왕 응모 및 추첨 기능 개발' },
        { content: '블랙프라이데이 판매액 관련 전광판 개발' },
      ],
    },
    {
      title: '무신사 래플 서비스 Java 전환',
      startedAt: '2021-09',
      endedAt: '2021-11',
      where: '무신사 (Musinsa)',
      descriptions: [
        { content: 'PHP 기반의 래플 서비스를 Java로 전환하여 개발' },
        { content: 'Java, Spring Boot를 사용하여 개발' },
        { content: 'AWS ECR, EKS로 서버 구성' },
        { content: 'AWS RDS의 MySQL를 데이터베이스로 사용' },
        { content: 'ATDD(Acceptance Test Driven Development) 방식의 개발' },
      ],
    },
    {
      title: '무신사 스토어 메인 서비스 개발',
      startedAt: '2021-04',
      endedAt: '2021-08',
      where: '무신사 (Musinsa)',
      descriptions: [
        { content: '메인에 노출되는 판 별 정적 데이터 생성 기능 개발' },
        { content: 'Node.js, TypeScript를 사용하여 개발' },
        { content: 'Lambda, Step Functions를 활용한 서버리스 구성' },
        { content: 'Serverless, AWS CloudFormation을 활용한 코드형 인프라(IaC) 관리' },
        { content: 'AWS CloudFront, AWS S3, AWS SNS, AWS SQS, AWS CloudWatch 등의 인프라 활용' },
      ],
    },
    {
      title: '무신사 스토어 Growth TF 참여',
      startedAt: '2021-03',
      endedAt: '2021-06',
      where: '무신사 (Musinsa)',
      descriptions: [
        {
          content: '무신사 성장 기회 발견 및 검증을 위한 TF 조직',
        },
        {
          content:
            '성장에 필요한 해적지표 "AARRR" 중 Referral을 활성화를 하기 위하여 친구초대 서비스 개선',
        },
        { content: '애자일 문화의 좋은 샘플이 되고 적극 공유하기 위한 활동' },
        { content: '백로그 기능 구현 계획 수립 및 프로덕트 개발 및 구현' },
      ],
    },
    {
      title: '무신사 코디 서비스 개발',
      startedAt: '2020-12',
      endedAt: '2021-03',
      where: '무신사 (Musinsa)',
      descriptions: [
        {
          content: 'Back-end',
          weight: 'MEDIUM',
          descriptions: [
            { content: '카테고리 연관 코디 서비스에 사용되는 API 개발' },
            { content: 'Kotlin, Spring Boot를 사용하여 개발' },
            { content: 'TDD(Test Driven Development) 방식의 개발' },
            { content: 'DDD(Domain Driven Design) 방식의 아키텍쳐 설계' },
            { content: 'AWS SNS, AWS SQS를 활용한 Event Driven 방식의 아키텍쳐 설계' },
          ],
        },
        {
          content: 'Front-end',
          weight: 'MEDIUM',
          descriptions: [
            { content: '카테고리 연관 코디 서비스 Front-end 개발' },
            { content: 'TypeScript, Vue.js를 사용하여 개발' },
            { content: 'Puppeteer를 활용하여 E2E Test 구현' },
          ],
        },
      ],
    },
    {
      title: '무신사 스토어 개인정보 암호화 적용',
      startedAt: '2020-12',
      endedAt: '2020-12',
      where: '무신사 (Musinsa)',
      descriptions: [
        { content: '개인정보 보호를 위한 DB 암호화 적용' },
        { content: 'PHP, Java, Go에서 공통적으로 암복호화가 가능하도록 암호화 알고리즘 교차 체크' },
        { content: 'AWS KMS를 활용하여 키 관리' },
      ],
    },
    {
      title: '무신사 블랙프라이데이 이벤트 업데이트 및 운영',
      startedAt: '2020-11',
      endedAt: '2020-12',
      where: '무신사 (Musinsa)',
      descriptions: [{ content: '블랙프라이데이 이벤트 대비 성능 최적화 및 고도화 개발' }],
    },
    {
      title: '무신사 스토어 정책 토론 소모임 활동',
      startedAt: '2020-10',
      endedAt: '2021-08',
      where: '무신사 (Musinsa)',
      descriptions: [
        { content: '무신사 스토어 서비스에 대한 빈약한 문서와 모호한 정책에 대한 개선 활동' },
        { content: '코딩 컨벤션 부터 인프라 및 기본 서비스 정책들에 대한 토론 및 문서 정리' },
        { content: 'Confluence Contributors 점수: 379' },
      ],
    },
    {
      title: '무신사 스토어 GA 로그 적재 및 운영',
      startedAt: '2020-08',
      endedAt: '2020-11',
      where: '무신사 (Musinsa)',
      descriptions: [
        { content: '마케팅 및 서비스 관련 지표 활용을 위한 GA 로그 적재' },
        { content: 'Google Tag Manager 활용하여 태그, 트리거, 변수 작성' },
      ],
    },
    {
      title: '무신사 스토어 전역 필터 개발',
      startedAt: '2020-06',
      endedAt: '2020-07',
      where: '무신사 (Musinsa)',
      descriptions: [
        { content: '성별 기반으로 무신사 스토어 전역에서 상품 필터링을 하기 위한 기능 개발' },
      ],
    },
    {
      title: '무신사 스토어 LNB API 개발',
      startedAt: '2020-04',
      endedAt: '2020-05',
      where: '무신사 (Musinsa)',
      descriptions: [
        { content: 'LNB(Left Navigation Bar) 정보 조회를 위한 API 개발' },
        { content: 'Go 언어를 사용하여 Lambda 개발' },
        { content: 'AWS Dynamo DB를 데이터베이스로 사용' },
        { content: 'AWS DynamoDB stream을 활용하여 Lambda를 Trigger하여 ElastiCache에 캐싱 처리' },
      ],
    },
    {
      title: '무신사 스토어 Legacy 코드 개선',
      startedAt: '2019-10',
      endedAt: '2020-03',
      where: '무신사 (Musinsa)',
      descriptions: [
        { content: 'PHP Codeigniter 기반의 Legacy 코드 개선' },
        { content: 'namespace 기반의 클래스 설계 및 autoload 적용' },
        { content: 'PSR-12 코딩 컨벤션 준수 및 Clean Code 원칙 적용' },
      ],
    },
    {
      title: 'KIST 베트남 통합포털 프로젝트',
      startedAt: '2019-04',
      endedAt: '2019-09',
      where: '한비로 (Hanbiro)',
      descriptions: [
        { content: 'KIST 베트남 통합포털로 활용하기 위한 그룹웨어 커스터마이징 개발' },
      ],
    },
    {
      title: '강원소방본부 119Talk 프로젝트',
      startedAt: '2019-04',
      endedAt: '2019-09',
      where: '한비로 (Hanbiro)',
      descriptions: [
        { content: '강원소방본부 119Talk로 활용하기 위한 메신저 커스터마이징 개발' },
        { content: '고객 요구 분석, Storyboard / WBS 작성, 진행 사항 체크' },
      ],
    },
    {
      title: '손해사정사 수임 관리 시스템 구축 및 개발',
      startedAt: '2018-11',
      endedAt: '2019-04',
      where: '한비로 (Hanbiro)',
      descriptions: [{ content: 'CRM 커스터마이징 및 수임관리 기능 추가 개발' }],
    },
    {
      title: '바바리안모터스 BPS 차량 관리 시스템 구축 및 개발',
      startedAt: '2018-04',
      endedAt: '2018-12',
      where: '한비로 (Hanbiro)',
      descriptions: [{ content: 'CRM 커스터마이징 및 차량관리 기능 추가 개발' }],
    },
    {
      title: '한독모터스 BDC Call 관리 시스템 구축 및 개발',
      startedAt: '2017-12',
      endedAt: '2018-03',
      where: '한비로 (Hanbiro)',
      descriptions: [{ content: 'CRM Call 커스터마이징 개발' }],
    },
    {
      title: '동성모터스 BPS 차량 관리 시스템 구축 및 개발',
      startedAt: '2017-04',
      endedAt: '2017-11',
      where: '한비로 (Hanbiro)',
      descriptions: [{ content: 'CRM 커스터마이징 및 차량관리 기능 추가 개발' }],
    },
    {
      title: '한비로 CRM Call 개발',
      startedAt: '2016-09',
      endedAt: '2017-03',
      where: '한비로 (Hanbiro)',
      descriptions: [
        { content: 'CRM 커스터마이징 및 차량관리 기능 추가 개발' },
        { content: 'PHP와 AngularJS를 사용하여 풀스택 개발' },
        { content: 'MariaDB와 ElasticSearch로 데이터 영속화 및 검색 처리' },
      ],
    },
    {
      title: '한비로 CRM 개발',
      startedAt: '2014-12',
      endedAt: '2016-08',
      where: '한비로 (Hanbiro)',
      descriptions: [
        { content: 'CRM 커스터마이징 및 차량관리 기능 추가 개발' },
        { content: 'PHP와 AngularJS를 사용하여 풀스택 개발' },
        { content: 'MariaDB와 ElasticSearch로 데이터 영속화 및 검색 처리' },
      ],
    },
    {
      title: '한비로 신형 그룹웨어 신규 개발',
      startedAt: '2013-07',
      endedAt: '2014-11',
      where: '한비로 (Hanbiro)',
      descriptions: [
        { content: '기존 Legacy한 그룹웨어 시스템을 개선하기 위한 신규 개발' },
        { content: 'PHP와 AngularJS를 사용하여 풀스택 개발' },
        { content: 'MariaDB와 ElasticSearch로 데이터 영속화 및 검색 처리' },
      ],
    },
  ],
};

export default project;
