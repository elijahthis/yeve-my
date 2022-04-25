import tw, { css } from 'twin.macro'
import { weddingSection } from '../../Regular/styles'
import { useRouter } from 'next/router'

const GiftsRegistry = () => {
  const router = useRouter()

  return (
    <section css={weddingSection}>
      <h4>GIFTS REGISTRY</h4>
      <h2>Send us Gifts</h2>
      <p className="text-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut
        lorem consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. A magna ut lorem consequat.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. A magna ut lorem consequat. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
      <button
        tw="py-3 px-14 bg-black text-white text-sm font-semibold rounded"
        onClick={() => {
          router.push('/event-page/send-us-gifts?type=wedding')
        }}
      >
        VIEW
      </button>
    </section>
  )
}

export default GiftsRegistry
