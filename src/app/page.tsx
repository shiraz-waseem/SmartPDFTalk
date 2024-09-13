import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { ArrowRight, LogIn } from "lucide-react";

export default async function Home() {
  const { userId } = await auth();   // its returns null or string
  // turning null into boolean to check if its logged in or not
  // console.log(userId)
  const isAuth = !!userId
  console.log(isAuth)



  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      {/* everything in centre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* A new div with flex */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>
            {/* user button. Will only show when you are signin */}
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="flex mt-2">
            {isAuth && <Button>Go to chats</Button>}
          </div>

          <p className="max-w-xl mt-1 text-lg text-slate-600">Join millions of students, researchers and professionals to instantly
            answer questions and understand research with AI</p>

          <div className="w-full mt-4">
            {isAuth ? <h1>File Upload Component </h1> :
              <Link href="/sign-in">
                <Button>
                  Login to get Started!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            }
          </div>
        </div>


      </div>
    </div>
  )
}
