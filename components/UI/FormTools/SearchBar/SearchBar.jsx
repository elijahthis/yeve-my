import tw, { css } from 'twin.macro'
import 'antd/dist/antd.css'
import { FaSearch } from 'react-icons/fa'
import 'antd/dist/antd.css'

const SearchBar = ({ placeholder }) => (
  <div tw="flex flex-row items-center gap-3 px-4 py-3 bg-[#FEFEFE] text-[#767676] rounded border border-[#E5E5E5]">
    <FaSearch />
    <input type="search" name="" id="" placeholder={placeholder} />
  </div>
)

export default SearchBar
