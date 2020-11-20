import githubLogo from '../../assets/github-logo.svg';
import tgLogo from '../../assets/tg-logo.svg';

export default {
  state: () => ({
    links: [
      { id: 1, name: "github link", href: "https://github.com/bubase/tudus", logoSrc: githubLogo },
      { id: 2, name: "telegram link", href: "https://t.me/breakbeat", logoSrc: tgLogo },
    ]
  }),
}
