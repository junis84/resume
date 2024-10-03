import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '엄준영',
    small: '(Junyoung.Eom)',
  },
  contact: [
    {
      title: 'e.junis84@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'https://github.com/junis84',
      link: 'https://github.com/junis84',
      icon: faGithub,
    },
  ],
  notice: {
    title: '',
    icon: faBell,
  },
};

export default profile;
