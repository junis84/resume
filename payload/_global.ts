import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'RESUME: Junyoung.Eom';
const description = "This is Back-end Developer Junyoung's Resume. Thank you";

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Preview Image',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Junyoung',
        lastName: 'Eom',
        username: 'junyoung',
        gender: 'male',
      },
    },
  },
};
