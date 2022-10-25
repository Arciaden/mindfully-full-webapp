//This file is not in a frontend or node enviroment. This is more like a web worker
//This is an edge function
import { NextResponse } from 'next/server'

//Pages that the middleware will protect
//This syntax is new to nextjs 12.2.0+
export const config = {
  matcher: ['/', '/profile', '/userClients/:id*'],
}

export default function middleware(req) {
  const token = req.cookies.get('MINDFULLY_FULL_ACCESS_TOKEN')

  if (!token) {
    return NextResponse.redirect('http://localhost:3000/signin')
  }
}
