import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// export async function GET (req : Request){

    // console.log(req)

    // const requestHeaders = new Headers(req.headers)
    // console.log(requestHeaders)

    // const {searchParams} = new URL(req.url)
    // console.log(searchParams.get('search'))

    // const searchParams = req.nextUrl.searchParams
    // console.log(searchParams.get("search"))

    // const cookie1 = req.cookies
    // const cookie2 = cookies()
    // console.log(cookie1)

    // console.log(cookies())

//     return NextResponse.json({message : 'hello world'})
// }

export async function POST(req: Request){

    // console.log(req)
    
    // const data = await req.json()
    // console.log(data)

    const formData = await req.formData()
    console.log(formData)
    // console.log(formData.get("title"))
    // console.log(formData.get("body"))

    return NextResponse.json({message : "data recieved"}, {status : 201})
}