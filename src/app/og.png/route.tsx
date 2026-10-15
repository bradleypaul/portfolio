import { ImageResponse } from 'next/og'
import { meta } from '@/data/content'
import { loadGoogleFont } from '@/lib/google-font'

export const dynamic = 'force-static'

const ogImageSize = { width: 1200, height: 630 }

const stack = 'React · TypeScript · GraphQL · Node'

export async function GET() {
  const [serif, sans] = await Promise.all([
    loadGoogleFont('DM Serif Display', meta.name),
    loadGoogleFont('Outfit:wght@300', `${meta.title}${meta.location}${stack}·`),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#0f0e0d',
          borderBottom: '12px solid #c07a5a',
        }}
      >
        <div style={{ display: 'flex', fontFamily: 'Outfit', fontSize: 28, color: '#c07a5a', letterSpacing: 2 }}>
          {meta.location}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontFamily: 'DM Serif Display', fontSize: 104, color: '#e8e0d8', lineHeight: 1 }}>
            {meta.name}
          </div>
          <div style={{ fontFamily: 'Outfit', fontSize: 40, color: '#a09488' }}>{meta.title}</div>
        </div>
        <div style={{ display: 'flex', fontFamily: 'Outfit', fontSize: 28, color: '#7a7168' }}>{stack}</div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [
        { name: 'DM Serif Display', data: serif, weight: 400 },
        { name: 'Outfit', data: sans, weight: 300 },
      ],
    },
  )
}
