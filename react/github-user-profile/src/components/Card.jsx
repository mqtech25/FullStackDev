import { memo } from "react";

function Card({apiData,loading,notFound}) {
    return(
        <div
  className="relative rounded-xl overflow-hidden max-w-md m-auto flex flex-col items-center hover:translate-y-[-2px] shadow-lg bg-white font-Roboto-light"
>
{apiData ? ( 
<>
<div className="h-24 w-full bg-neutral-900"></div>
  <div className="top-16 z-10 flex items-center flex-col gap-4 px-5 py-5">
    <div className="-mt-20">
        <img src={apiData.avatar_url} className="w-25 rounded-full border-2 border-white object-cover" alt="" />
    </div>

    <div className="flex items-center flex-col">  
      <p title="name/نام" className="text-black font-Roboto-md">{apiData.name}</p>
      <p title="bio/بیوگرافی" className="  text-gray-500 font-medium">
        @{apiData.login}
      </p>
    </div>

    <div className="flex flex-wrap gap-4 items-center justify-between">
      <div  className="text-center shadow-md py-3 px-4 rounded-lg">
      <p className="text-sm text-gray-500">Followers </p>
      <p className="text-xs font-bold">{apiData.followers}</p>
      </div>
      <div  className="text-center shadow-md py-3 px-4 rounded-lg">
      <p className="text-sm text-gray-500">Public Repos  </p>
      <p className="text-xs font-bold">{apiData.public_repos}</p>
      </div>
    </div>
    <p className="text-center text-xs">{apiData.location}</p>
  </div>
  </>
  ):(
    <p className="py-5 text-md">{notFound?"User Not Found":(loading?"Wait":"Search User")} </p>
  )}
</div>
    )

}
export default memo(Card);