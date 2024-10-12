import profilePic from '@/assets/images/profile-pics.jpg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
function HomePage() {
  return (
    <div>
      <div className={' mt-32 flex items-center gap-4'} >
        <div className={''}>
          <div className={'font-semibold text-2xl'}>Hi, my name is Manh 👋</div>
          <p className={'mt-8'}>
            I’m an experienced developer with 5 years of experience working in domains: ecommerce, business
            management. I’m specialized in NodeJS and Javascript technologies and always try to deliver high quality
            source code which is maintainable, reliable and have high performance.
          </p>
        </div>

        <Avatar className={'w-32 h-32'}>
          <AvatarImage src={profilePic}/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default HomePage;