interface DefaultPayload {
  end_date: string | null
  start_date: string | null
  country: string | null
  sentiment: string | null
  source: string | null
  subtopics: string[] | null
  topic_id: string[]
}

export default DefaultPayload