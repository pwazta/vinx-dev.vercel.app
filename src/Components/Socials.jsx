import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SocialsButton } from '../Style/StyledComponents';

export default function Socials() {
  return (
    <div className="social-icons d-flex gap-4 justify-content-center m-0">
      <SocialsButton href="https://github.com/pwazta" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub">
        <FaGithub />
      </SocialsButton>
      <SocialsButton href="https://www.linkedin.com/in/vincent-xian/" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedInnp">
        <FaLinkedin />
      </SocialsButton>
    </div>
  );
}