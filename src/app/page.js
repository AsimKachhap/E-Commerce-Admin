import { getServerSession } from "next-auth";

import SignOut from "../components/buttons/SignOut";
import SignIn from "../components/buttons/SignIn";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    return (
      <div className=" h-screen bg-blue-400 flex items-center justify-center">
        <SignIn />
      </div>
    );
  } else {
    return (
      <div className="h-screen bg-white ">
        <div className="flex items-center justify-between p-4 bg-blue-300">
          <div className="">{session?.user?.name}</div>
          <div>
            <SignOut />
          </div>
        </div>
      </div>
    );
  }
}
