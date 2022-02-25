import { FaSearch } from 'react-icons/fa'
import tw, { css } from 'twin.macro'

const SearchBar = () => {
  return (
    <div
      css={css`
        width: clamp(300px, 80vw, 366px);
        height: 78px;
        background-color: white;
        box-shadow: 0px 16px 100px rgba(177, 185, 187, 0.23);
        border-radius: 8px;
        position: absolute;
        top: -39px;
        margin-left: clamp(21px, 7vw, 158px);
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        padding: 16px;
        padding-left: 28px;
        color: #8c8c8c;
      `}
    >
      <FaSearch />
      <form tw="w-full flex flex-row justify-between">
        <input
          type="search"
          name="main-search"
          id="main-search"
          placeholder="Search for a vendor eg. “Drummer” “Decorator”"
          css={css`
            width: 60vw;
          `}
        />
        <input
          type="submit"
          value="Search"
          tw="px-8 py-3 rounded text-white text-sm bg-black2"
        />
      </form>
    </div>
  )
}

export default SearchBar
