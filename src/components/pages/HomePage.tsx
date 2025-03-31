import Layout from '../Layout'
import { ChartDefault } from '../charts/ChartDefault'
import PositiveNarratives from '../PositiveNarratives'
import MisleadingNarratives from '../MisleadingNarratives'
import DefaultPayload from '@/types/DefaultPayload'

function HomePage() {
  const payload = {
    end_date: "2025-03-28T13:48:33.485Z",
    start_date: "2025-02-26T13:48:33.485Z",
    country: null,
    sentiment: null,
    source: null,
    subtopics: null,
    topic_id: ["385979"]
  } as DefaultPayload

  return (
    <Layout>
      <div className="flex flex-1 flex-col gap-4 px-[20px] pt-[80px]">
        <div className="grid gap-4 md:grid-cols-2">
          <PositiveNarratives payload={payload} />
          <MisleadingNarratives payload={payload} />
        </div>
        <ChartDefault />
        <ChartDefault />
        <ChartDefault />
      </div>
    </Layout>
  )
}

export default HomePage
