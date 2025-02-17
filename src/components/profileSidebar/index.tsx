import GithubChart from "@/components/profileSidebar/GithubChart";
import Newsletter from "@/components/profileSidebar/Newsletter";
import CareerInfo from "@/components/profileSidebar/CareerInfo";

const ProfileSidebar = () => {
  return (
    <div className="space-y-10 lg:pl-16 xl:pl-24">
      <GithubChart githubId="toBeeDev" />
      <Newsletter />
      <CareerInfo />
    </div>
  );
};

export default ProfileSidebar;
