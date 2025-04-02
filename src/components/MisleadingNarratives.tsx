import { useEffect, useState } from 'react'
import { Card, CardTitle, CardFooter, CardHeader } from './ui/card'
import { Loader2, TrendingDownIcon } from 'lucide-react'
import DefaultPayload from "@/types/DefaultPayload"
// import axios from "@/lib/axios"

interface MisleadingNarrativesProps {
  payload: DefaultPayload
}

function MisleadingNarratives({ payload }: MisleadingNarrativesProps) {
  const [misleadingInfo, setMisleadingInfo] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.post("/datacleaner/misleading_data/", payload)
        setMisleadingInfo(3653)
        setLoading(false)
      } catch (e) {
        console.error(e)
      }
    }

    fetchData()
  }, [payload])

  return (
    <Card
      className="bg-card shadow-xl transition-all duration-300 border-none ring-1 ring-[rgba(238,205,110,0.25)]"
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Misleading or hateful content
        </CardTitle>
        <TrendingDownIcon className="h-4 w-4 text-yellow-500" />
      </CardHeader>
      <div className="text-2xl font-bold px-[24px] text-[var(--yellow)]">
        {loading ? <Loader2 className="animate-spin" /> : misleadingInfo.toLocaleString()}
      </div>
      <CardFooter>
        <p className="text-xs">
          Content flagged as potentially harmful, such as misinformation
          or hate speech. It may spread fear or distrust. Meant to alert
          users, but final judgment belongs to experts.
        </p>
      </CardFooter>
    </Card>
  )
}

export default MisleadingNarratives