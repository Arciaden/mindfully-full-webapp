//This file is not in a frontend or node enviroment. This is more like a web worker
//This is an edge function
import { NextRequest, NextResponse } from 'next/server'

//Pages that the middleware will protect
const signedInPages = ['/']

export default function middleware(req) {
  if (signedInPages.find((page) => page === req.nextUrl.pathname)) {
    const token = req.cookies.MINDFULLY_FULL_ACCESS_TOKEN
    console.log(req.cookies)

    if (!token) {
      //This url will need to be an absolute URL. When the application is deployed this will need to change
      // return NextResponse.redirect('/signin')
      const url = req.nextUrl.clone()
      url.pathname = '/signin'
      return NextResponse.rewrite(url)
    }
  }
}
