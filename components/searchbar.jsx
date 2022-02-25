import { FaSearch } from 'react-icons/fa'
import tw, { css } from 'twin.macro'

const SearchBar = () => {
  return (
    <div
      css={css`
        width: clamp(300px, 80vw, 1124px);
        background-color: white;
        box-shadow: 0px 16px 100px rgba(177, 185, 187, 0.23);
        border-radius: 8px;
        position: absolute;
        top: -39px;
        margin-left: clamp(21px, 7vw, 158px);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 22px;
        color: #8c8c8c;

        @media (max-width: 800px) {
          flex-direction: column;
          gap: 1rem;
        }
      `}
    >
      <div
        tw="flex flex-row items-center gap-4"
        css={css`
          @media (max-width: 800px) {
            width: 100%;
          }
        `}
      >
        <FaSearch />

        <input
          type="search"
          name="main-search"
          id="main-search"
          placeholder="Search for a vendor eg. “Drummer” “Decorator”"
          css={css`
            width: 60vw;
          `}
        />
      </div>
      <input
        type="submit"
        value="Search"
        tw="px-8 py-3 rounded text-white text-sm bg-black2"
        css={css`
          @media (max-width: 800px) {
            width: 100%;
          }
        `}
      />
    </div>
  )
}

export default SearchBar
