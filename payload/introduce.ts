import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Kotlin, Java & Spring / PHP / Node.js & TypeScript / Go, AWS 기반의 13년차 백엔드 개발자 입니다. DDD / 클린 아키텍쳐 기반으로 확장 성과 유지 보수성이 높은 아키텍쳐 설계를 고민하고 클린 코드 작성을 지향합니다.',
    'Agile 문화에 관심이 많고, 다양한 방법론을 적용하기 위해 노력하고 있습니다. 팀 내 작은 프로젝트에 고객 중심의 요구사항 기법인 사용자 스토리 기반으로 스크럼을 진행한 경험이 있고, 기획자와 QA가 함께 인수테스트 조건을 함께 설정한 뒤 ATDD 기반으로 개발한 경험이 있습니다. 최근에는 Code With Me: JetBrains를 활용하여 페어 프로그래밍을 시도하고 있습니다.',
    'TDD / ATDD 방법론으로 테스트 코드 작성을 필수적으로 진행을 하고자 노력하고 있습니다. Cucumber를 활용하여 BDD기반의 Acceptance Test 시나리오를 작성하고, 하위 사이클은 TDD로 Unit Test를 작성하며 개발을 진행하였습니다. 해당 경험을 적극적으로 공유하고 팀 차원의 도입을 추진하고 있으나, 팀의 비지니스 요구 속도등과 관련하여 조율을 하고 있습니다.',
    "'팀보다 위대한 선수는 없다'라는 말을 되새기며, 팀으로 함께 성장하고 성과를 낼 수 있도록 다양한 방식으로 기여하고 있습니다. 문서화를 통해 경험을 공유하고 사내 세미나, 소모임, 스터디 등도 주도적으로 진행하고 있습니다.",
  ],
  sign: 'Junyoung',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
