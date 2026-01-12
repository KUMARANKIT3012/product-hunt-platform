import { auth } from "@/auth";
import Navbar from "@/components/navbar/navbar";
// import { Button } from "@/components/ui/button";


const Home = async () => {

  const authenticatedUser = await auth();

  console.log(authenticatedUser);
  return (
    <>
      <div>
        hi
      </div>
    </>
  );
}


export default Home;