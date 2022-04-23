import { Regular } from '../../components/EventPages/Regular'
import Wedding from '../../components/EventPages/Wedding'
import { useRouter } from 'next/router'

const EventPage = () => {
  const router = useRouter()
  const { type } = router.query
  return <>{type === 'wedding' ? <Wedding /> : <Regular />}</>
}

export default EventPage
