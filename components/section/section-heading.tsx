type SectionHeadingProps = {
  heading: string
}

export default function SectionHeading({ heading }: SectionHeadingProps) {
  return <h2 className="mb-8 text-3xl font-medium capitalize">{heading}</h2>
}
