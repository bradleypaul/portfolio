import {
  AlignmentType,
  BorderStyle,
  Document,
  ExternalHyperlink,
  HeadingLevel,
  Packer,
  Paragraph,
  type ParagraphChild,
  TabStopType,
  TextRun,
} from 'docx'
import { alsoStack, coreStack, meta, projects, roles } from '@/data/content'

export const dynamic = 'force-static'

// US Letter with 0.75" side and 0.5" top/bottom margins, in twentieths of a point.
const pageWidth = 12240
const margin = 1080
const marginY = 720
const contentWidth = pageWidth - margin * 2

const accent = 'A0603F'
const muted = '666666'

function sectionHeading(text: string) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'BBBBBB', space: 2 } },
    children: [new TextRun(text)],
  })
}

// Left-aligned label with a right-aligned detail on the same line.
function entryLine(label: ParagraphChild[], detail: string) {
  return new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: contentWidth }],
    spacing: { before: 120, after: 20 },
    keepNext: true,
    children: [...label, new TextRun({ text: `\t${detail}`, color: muted })],
  })
}

function body(text: string) {
  return new Paragraph({ spacing: { after: 60 }, children: [new TextRun(text)] })
}

function link(text: string, href: string, bold = false) {
  return new ExternalHyperlink({
    link: href,
    children: [new TextRun({ text, style: 'Hyperlink', bold })],
  })
}

function buildResume() {
  const githubUrl = `https://${meta.github}`

  return new Document({
    title: `${meta.name} — Resume`,
    creator: meta.name,
    styles: {
      default: {
        document: { run: { font: 'Calibri', size: 20, color: '222222' } },
      },
      paragraphStyles: [
        {
          id: 'Heading1',
          name: 'Heading 1',
          basedOn: 'Normal',
          next: 'Normal',
          quickFormat: true,
          run: { size: 40, bold: true, color: '111111' },
          paragraph: { spacing: { after: 40 } },
        },
        {
          id: 'Heading2',
          name: 'Heading 2',
          basedOn: 'Normal',
          next: 'Normal',
          quickFormat: true,
          run: { size: 22, bold: true, allCaps: true, color: accent },
          paragraph: { spacing: { before: 200, after: 40 }, keepNext: true },
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: pageWidth, height: 15840 },
            margin: { top: marginY, right: margin, bottom: marginY, left: margin },
          },
        },
        children: [
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [new TextRun(meta.name)],
          }),
          new Paragraph({
            spacing: { after: 40 },
            children: [new TextRun({ text: meta.title, size: 24 })],
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun({ text: `${meta.location} · `, color: muted }),
              link(meta.email, `mailto:${meta.email}`),
              new TextRun({ text: ' · ', color: muted }),
              link(meta.github, githubUrl),
              new TextRun({ text: ` · ${meta.availability}`, color: muted }),
            ],
          }),

          sectionHeading('Experience'),
          ...roles.flatMap((role) => [
            entryLine(
              [
                new TextRun({ text: role.company, bold: true }),
                new TextRun(` — ${role.title}`),
              ],
              role.period,
            ),
            body(role.description),
          ]),

          sectionHeading('Selected projects'),
          ...projects.flatMap((project) => [
            entryLine(
              [
                project.url
                  ? link(project.name, project.url, true)
                  : new TextRun({ text: project.name, bold: true }),
              ],
              project.tech.join(', '),
            ),
            body(project.description),
          ]),

          sectionHeading('Skills'),
          body(coreStack.map((item) => item.name).join(', ')),
          new Paragraph({
            children: [
              new TextRun({ text: 'Also: ', color: muted }),
              new TextRun(alsoStack.map((item) => item.name).join(', ')),
            ],
          }),

          sectionHeading('Education'),
          body(meta.education),
        ],
      },
    ],
  })
}

export async function GET() {
  const buffer = await Packer.toArrayBuffer(buildResume())

  return new Response(buffer, {
    headers: {
      'Content-Type':
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    },
  })
}
