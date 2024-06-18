import { Appbar } from "./Appbar"

//<div className="h-2.5 bg-gray-200 rounded-full w-5 mb-4"></div>

export const FullBLogSkeleton = () => {
    return (
    <>
    <Appbar/>
    
  
    <div className="flex justify-between max-w-screen px-16 pt-14 animate-pulse">
        <div className="border-b p-4 border-slate-200 pb-4 max-w-5xl">
            <div>
                <div className="flex justify-between pl-20">
                    <div>
                        <div className="font-bold text-5xl">
                        <div className="h-10 bg-gray-200 rounded-full w-40 mb-4"></div>
                        </div>
                        <div className="py-5 text-gray-500 text flex justify-center flex-col">
                        <div className="h-2.5 bg-gray-200 rounded-full w-5 mb-4"></div>
                        </div>
                        <div className="py-5 text-black font-semibold">
                        <div className="h-5 bg-gray-200 rounded-full w-50 mb-4"></div>
                        <div className="h-5 bg-gray-200 rounded-full w-50 mb-4"></div>
                        <div className="h-5 bg-gray-200 rounded-full w-30 mb-4"></div>
                        <div className="h-5 bg-gray-200 rounded-full w-30 mb-4"></div>
                        <div className="h-5 bg-gray-200 rounded-full w-30 mb-4"></div>
                        </div>
                        
        
                    </div> 
                    
                </div>
            </div>
            
        </div>
        <div className="w-2xl p-8">
            <div className="px-5"><div className="h-2.5 bg-gray-200 rounded-full w-10 mb-4"></div></div>
            <div className="flex"> 
                <div className="p-5 flex justify-center flex-col">
            
                <div className="h-10 w-10 bg-gray-200 rounded-full "></div>
                </div>
                <div className="flex flex-col">
                <div className="font-bold text-xl"><div className="h-2.5 bg-gray-200 rounded-full w-20 mt-5"></div></div>
                <div> <div className="h-2.5 bg-gray-200 rounded-full w-10 mt-2"></div></div>
                
                </div>
            </div>
            
        </div>
    </div>
    
    </>
)

}