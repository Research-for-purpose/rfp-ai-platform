import { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardFooter } from './ui/card'
import { Loader2, TrendingUpIcon } from 'lucide-react'
import axios from "@/lib/axios"
import DefaultPayload from "@/types/DefaultPayload"


interface PositiveNarrativesProps {
  payload: DefaultPayload
}

function PositiveNarratives({ payload }: PositiveNarrativesProps) {
  const [narratives, setNarratives] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/datacleaner/native_data/", payload)
        setNarratives(response.data)
        setLoading(false)
      } catch (e) {
        console.error(e)
      }
    }

    fetchData()
  }, [payload])


  return (
    <Card
      className="bg-card shadow-xl transition-all duration-300 border-none ring-1 ring-[rgba(107,203,238,0.2)]"
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Content Tracked
        </CardTitle>
        <TrendingUpIcon className="h-4 w-4 text-blue-500" />
      </CardHeader>
      <div className="text-2xl font-bold px-[24px] text-[var(--blue)]">
        {loading ? <Loader2 className="animate-spin" /> : narratives.toLocaleString()}
      </div>
      <CardFooter>
        <p className="text-xs">
          Monitored content—social posts and media—shapes public opinion.
          Tracking it helps spot misinformation, sense public mood, and
          foresee risks.
        </p>
      </CardFooter>
    </Card>
  )
}

export default PositiveNarratives