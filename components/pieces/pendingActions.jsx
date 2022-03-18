import { AiOutlineInfoCircle } from 'react-icons/ai'
import tw, { css } from 'twin.macro'

export const PendingActionsBanner = () => {
  return (
    <div tw="bg-[#1A1A1A] flex flex-row items-center justify-between rounded-lg mb-4 px-4 py-3 font-semibold">
      <div tw="flex flex-row items-center gap-8">
        <div tw="text-gold p-2 rounded-full bg-[#313030]">
          <AiOutlineInfoCircle size={24} />
        </div>
        <div>
          <p tw="text-white text-base">Pending Actions (3)</p>
          <p tw="text-[#8C8C8C] text-xs">
            You have some pending issues to attend to before we can complete
            your verification
          </p>
        </div>
      </div>
      <a href="/" tw="text-gold mr-9">
        View
      </a>
    </div>
  )
}
