import { NextResponse } from "next/server"

interface Context {
    params : {
        id : string
    }
}

// export default POST = async (req : Request, context : Context ) => {
//     console.log(req)
//     console.log(context)
//     return NextResponse.json({message : 'success'}, {status : 200})
// }

// export default function POST (req: Request , context : Context){

//     // console.log(req)
//     console.log(context.params.id)

//     return NextResponse.json({message : "success"}, {status : 200})
// }

// export default async function GET (req: Request , context : Context){

//     console.log(context.params.id)

//     return NextResponse.json({message : "success"}, {status : 200})
// }

export const GET = (req: Request, context : Context) => {
    
    console.log(context.params.id)
    return NextResponse.json({message : "success"}, {status : 200})
}