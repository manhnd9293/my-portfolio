import profilePic from '@/assets/images/profile-pics.jpg'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {candidate} from "@/data/candidate-data.ts";
import {WorkHistoryItem} from "@/pages/home/WorkHistoryItem.tsx";
import {EducationItem} from "@/pages/home/EducationItem.tsx";
import {TechContainer} from "@/pages/home/TechContainer.tsx";
import {techSkills} from "@/pages/home/data/tech-skills.ts";


function HomePage() {
  return (
    <div>
      <div className={' mt-32 flex items-center gap-4'}>
        <div className={''}>
          <div className={'font-semibold text-2xl'}>Hi, my name is Manh 👋</div>
          <p className={'mt-4'}>
            I’m an experienced developer with 5 years of experience working in domains: ecommerce, business
            management. I’m specialized in NodeJS and Javascript technologies and always try to deliver high quality
            source code which is maintainable, reliable and have high performance.
          </p>
        </div>

        <Avatar className={'w-36 h-36'}>
          <AvatarImage src={profilePic}/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className={'text-2xl font-semibold mt-16 text-center'}>My Tech Stack</div>
      {
        techSkills.map(skill => (
          <TechContainer key={skill.id}
                         title={skill.name}
                         techs={skill.techs}
          />
        ))
      }

      <div className={'text-2xl font-semibold mt-16 text-center'}>My Career</div>
      <div>
        <Tabs defaultValue="work-exp" className="max-w-2xl mx-auto mt-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="work-exp">Work Experience</TabsTrigger>
            <TabsTrigger value="edu">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="work-exp">
            <Card>
              <CardHeader>
                <CardTitle className={'text-lg'}>Work experience</CardTitle>

              </CardHeader>
              <CardContent className="space-y-2">
                <div className={'flex flex-col gap-4'}>{
                  candidate.careerExperience.map((exp, index) => (
                    <WorkHistoryItem key={index}
                                     title={exp.title}
                                     company={exp.company}
                                     from={exp.from}
                                     to={exp.to}
                                     logoSrc={exp.logoSrc}
                                     link={exp.link}

                    />
                  ))
                }</div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="edu">
            <Card>
              <CardHeader>
                <CardTitle className={'text-lg'}>Education</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {
                  candidate.education.map((edu, index) => (
                    <EducationItem key={index}
                                   school={edu.school}
                                   from={edu.from}
                                   to={edu.to}
                                   logoSrc={edu.logoSrc}
                                   link={edu.link}
                                   degree={edu.degree}
                    />
                  ))
                }
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default HomePage;