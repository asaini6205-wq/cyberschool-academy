import { NextResponse } from 'next/server'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {

  try {

    const body = await req.json()

    const certificateId = body.certificateId

    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .eq('certificate_id', certificateId)
      .single()

    if (error || !data) {

      return NextResponse.json({
        success: false,
      })

    }

    return NextResponse.json({
      success: true,
      certificate: data,
    })

  } catch {

    return NextResponse.json({
      success: false,
    })

  }

}