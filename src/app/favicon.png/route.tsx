import { ImageResponse } from 'next/og'
import { meta } from '@/data/content'
import { loadGoogleFont } from '@/lib/google-font'

export const dynamic = 'force-static'

const initial = meta.firstName[0]

export async function GET() {
  const serif = await loadGoogleFont('DM Serif Display', initial)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f0e0d',
          color: '#c07a5a',
          fontFamily: 'DM Serif Display',
          fontSize: 52,
        }}
      >
        {initial}
      </div>
    ),
    { width: 64, height: 64, fonts: [{ name: 'DM Serif Display', data: serif, weight: 400 }] },
  )
}
