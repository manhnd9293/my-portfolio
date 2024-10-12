import profilePic from '@/assets/images/profile-pics.jpg'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Button} from "@/components/ui/button.tsx";
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {candidate} from "@/data/candidate-data.ts";
import {Link} from "react-router-dom";


// @ts-ignore
function WorkHistoryItem({company, title, from, to, logoSrc, link}) {
  return <div className={"flex gap-4"}>
    <Link to={link}>
      <Avatar className={"size-10"}>
        <AvatarImage src={logoSrc}/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Link>
    <div>
      <div className={"font-semibold"}>{title}</div>
      <div>
        <span>{company}</span>-
        <span>Full time</span>
      </div>
      <div>
        <span>{from}</span> - <span>{to}</span>
      </div>
    </div>
  </div>;
}

// @ts-ignore
function EducationItem({school, from, to, degree, logoSrc, link}) {
  return <div className={"flex gap-4"}>
    <Link to={link}>
      <Avatar className={"size-10"}>
        <AvatarImage src={logoSrc}/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Link>
    <div>
      <div className={"font-semibold"}>{school}</div>
      <div>
        <span>{from}</span> - <span>{to}</span>
      </div>
      <div>
        <span>{degree}</span>-
        <span>Full time</span>
      </div>

    </div>
  </div>;
}

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

      <div>
        <Tabs defaultValue="work-exp" className="max-w-2xl mx-auto mt-32">
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
                  ) )
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