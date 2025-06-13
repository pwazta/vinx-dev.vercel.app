import { Card } from 'react-bootstrap';
import { ThumbnailImage, ActivityFlex, ActivityText } from '../Style/StyledComponents';
import Page from './Page';

export default function Activities() {
  return (
    <Page id="activities">
      <section >
        <h1><strong>Extracurriculars</strong></h1>

        {/* CGSoc */}
        <Card className="mb-4 p-4 shadow">
          <ActivityFlex>
            <ThumbnailImage src="/CGSOC_Teapot.png" alt="CGSoc" />
            <ActivityText>
              <h3>UNSW Computer Graphics Society - Subcom</h3>
              <p>
                The UNSW Computer Graphics Society is a student-led community focused on 3D modelling, animation,
                game development, VFX and building connections across creative tech disciplines.
              </p>
              <p>
                As a member of the GameDev Subcom, I help promote game development within the student body -- most
                recently by supporting students interested in showcasing their work at events like South by Southwest
                (SXSW).
              </p>
            </ActivityText>
          </ActivityFlex>
        </Card>

        {/* Cadets */}
        <Card className="mb-4 p-4 shadow">
          <ActivityFlex $reverse>
            <ThumbnailImage src="/Cadets.png" alt="AAC" />
            <ActivityText>
              <h3>Australian Army Cadets (AAC)</h3>
              <p>
                The Australian Army Cadets (AAC) is a youth military organisation partnered with the
                Australian Defence Force, fostering discipline and teamwork through field exercises,
                instructional activities, and ceremonial events.
              </p>
              <p>
                I was a member for five years, attaining the highest rank of Cadet Under Officer (CUO),
                directly overseeing training and safety for a unit of over 150 cadets. I also coordinated
                public service events and unit exercises and collaborated with other personnel state-wide
                to help develop instructional content and deliver leadership programs.
              </p>
            </ActivityText>
          </ActivityFlex>
        </Card>
      </section>
    </Page>
  );
}
