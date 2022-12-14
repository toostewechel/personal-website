import { Tabs, TabsList, TabsContent, TabsTrigger } from "./Tabs.js";
import { Timeline, TimelineItem } from "../timeline/Timeline.js";
import CardHeader from "../card/CardHeader.js";
import CredentialTimelineCard from "../card/CredentialTimelineCard.js";

function ProfessionalAchievementsTab() {
  return (
    <Tabs defaultValue="experience">
      <TabsList>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="courses">Courses</TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <Timeline>
          <TimelineItem id="timeline-item">
            <CardHeader
              color="blue"
              hasYear={true}
              alignment="left"
              year="2022"
            />
            <CredentialTimelineCard
              gradient="darkblue"
              position="topRight"
              logo="/logo/jouw-omgeving-logo.png"
              tagColor="blue"
              tagLabel="Full Time"
              title="Product Owner"
              subtitle="Jouw Omgeving"
              description="Responsible for product vision & strategy, prioritising the roadmap & sprint backlog and overseeing all the development stages from customer wish to production deployment."
              duration="2022 - 2020"
              location="Utrecht"
              hasLink={false}
            />
          </TimelineItem>
          <TimelineItem>
            <CardHeader
              color="blue"
              hasYear={true}
              alignment="left"
              year="2020"
            />
            <CredentialTimelineCard
              gradient="darkblue"
              position="topRight"
              logo="/logo/jouw-omgeving-logo.png"
              tagColor="blue"
              tagLabel="Full Time"
              title="Product Designer"
              subtitle="Jouw Omgeving"
              description="Responsible for (re)designing platform features, writing user stories and the design of an accessible Design System for the Jouw Omgeving e-Health platform."
              duration="2020 - 2018"
              location="Utrecht"
              hasLink={false}
            />
          </TimelineItem>
          <TimelineItem>
            <CardHeader
              color="blue"
              hasYear={true}
              alignment="left"
              year="2018"
            />
            <CredentialTimelineCard
              gradient="darkblue"
              position="topRight"
              logo="/logo/jouw-omgeving-logo.png"
              tagColor="blue"
              tagLabel="Intern"
              title="Graduate Assignment"
              subtitle="Jouw Omgeving"
              description="I developed and applied a conceptual framework to translate and embed an existing healthcare 'curriculum' into the Jouw Omgeving e-health application."
              duration="2018 - 2017"
              location="Utrecht"
              hasLink={true}
              href="/publications/Oostewechel_Tom_DPM1499_Report.pdf"
              tooltipLabel="Download Thesis"
            />
          </TimelineItem>
          <TimelineItem>
            <CardHeader
              color="blue"
              hasYear={true}
              alignment="left"
              year="2015"
            />
            <CredentialTimelineCard
              gradient="darkblue"
              position="topRight"
              logo="/logo/jumbo-supermarkten-logo.png"
              tagColor="blue"
              tagLabel="Part Time"
              title="Logistics"
              subtitle="Jumbo Supermarkten"
              description="Responsible for different logistic related activities in the distribution centre."
              duration="2015 - 2009"
              location="Raalte"
              hasLink={false}
            />
          </TimelineItem>
        </Timeline>
      </TabsContent>
      <TabsContent value="education">
        <Timeline>
          <TimelineItem id="timeline-item">
            <CardHeader
              color="plum"
              hasYear={true}
              alignment="left"
              year="2018"
            />
            <CredentialTimelineCard
              gradient="darkblue"
              position="topRight"
              logo="/logo/university-twente-logo.png"
              tagColor="plum"
              tagLabel="Master"
              title="Master Track"
              subtitle="Management of Product Development"
              description="Learned how to think outside the box, identify the real problem that needs solving and to effectively and efficiently establish the right development process together with relevant stakeholders."
              duration="2018 - 2015"
              location="Enschede"
              hasLink={false}
            />
          </TimelineItem>
          <TimelineItem>
            <CardHeader
              color="plum"
              hasYear={true}
              alignment="left"
              year="2015"
            />
            <CredentialTimelineCard
              gradient="darkblue"
              position="topRight"
              logo="/logo/university-twente-logo.png"
              tagColor="plum"
              tagLabel="Minor"
              title="Minor Medical & Sports Physiology"
              subtitle="Biomedical Design"
              description="Learned the physical and psychological factors involved in sport and exercise participation: ranging from promoting an active healty lifestyle, to prevention and rehabilitation of injuries. "
              duration="2015"
              location="Enschede"
              hasLink={false}
            />
          </TimelineItem>
          <TimelineItem>
            <CardHeader
              color="plum"
              hasYear={true}
              alignment="right"
              year="2011"
            />
            <CredentialTimelineCard
              gradient="darkblue"
              position="topRight"
              logo="/logo/university-twente-logo.png"
              tagColor="plum"
              tagLabel="Bachelor"
              title="Bachelor Track"
              subtitle="Industrial Design Engineering"
              description="Learned to combine technology and creativity to design and improve products through building a solid foundation in a variety of subjects, from mathematics to graphic design and from ergonomics to marketing."
              duration="2015 - 2011"
              location="Enschede"
              hasLink={true}
              href="/publications/Oostewechel_Tom_DPM1499_Report.pdf"
              tooltipLabel="Download Thesis"
            />
          </TimelineItem>
        </Timeline>
      </TabsContent>
      <TabsContent value="courses">
        <Timeline>
          <TimelineItem id="timeline-item">
            <CardHeader
              color="plum"
              hasYear={false}
              alignment="left"
              year="2022"
            />
            <CredentialTimelineCard
              gradient="darkblue"
              position="topRight"
              logo="/logo/udemy-logo.png"
              tagColor="plum"
              tagLabel="Development"
              title="Git Complete"
              subtitle="Mastering the Modern Workflow"
              description="Learned to build web applications using modern skills, tools and all the best-practices that companies need in developers."
              duration="16 hours"
              location="Udemy Online"
              hasLink={false}
            />
          </TimelineItem>
          <TimelineItem>
            <CardHeader color="plum" hasYear={false} />
            <CredentialTimelineCard
              gradient="darkblue"
              position="topRight"
              logo="/logo/udemy-logo.png"
              tagColor="plum"
              tagLabel="Development"
              title="JavaScript"
              subtitle="Basics for Beginners"
              description="Learned the basic syntax and programming concepts of JavaScript by completing 30 different exercises and challenges."
              duration="8 hours"
              location="Udemy Online"
              hasLink={false}
            />
          </TimelineItem>
          <TimelineItem>
            <CardHeader color="plum" hasYear={false} />
            <CredentialTimelineCard
              gradient="darkblue"
              position="topRight"
              logo="/logo/udemy-logo.png"
              tagColor="plum"
              tagLabel="Development"
              title="React Front to Back"
              subtitle="Master the React Concepts"
              description="Learned the basic programming concepts of the React Framework, while progressively building real world applications."
              duration="12 hours"
              location="Udemy Online"
              hasLink={false}
            />
          </TimelineItem>
          <TimelineItem>
            <CardHeader
              color="plum"
              hasYear={true}
              alignment="left"
              year="2020"
            />
            <CredentialTimelineCard
              gradient="darkblue"
              position="topRight"
              logo="/logo/udemy-logo.png"
              tagColor="plum"
              tagLabel="Agile Development"
              title="Robust Scrum Product Owner"
              subtitle="Learning the Product Owner skills"
              description="Learned about the mindset, characteristics and different responsibilities of being a Product Owner in a Scrum Development Team. "
              duration="16 hours"
              location="Udemy Online"
              hasLink={false}
            />
          </TimelineItem>
        </Timeline>
      </TabsContent>
    </Tabs>
  );
}

export default ProfessionalAchievementsTab;
