import { Logo, Button } from './../components'
import tw, { css } from 'twin.macro'

const linkItem = css`
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 3px;
    background-color: #de8e0e;
    transform: scale(0);
    transition: transform 0.3s;
  }
  :hover {
    ::after {
      transform: scale(1);
    }
  }
`
const active = css`
  color: #de8e0e;
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 3px;
    background-color: #de8e0e;
    transform: scale(0);
    transition: transform 0.3s;
  }
  :hover {
    ::after {
      transform: scale(1);
    }
  }
`

const Navbar = ({ page }) => {
  const navItems = ['Home', 'Features', 'Resources', 'Discover']
  return (
    <header tw="flex flex-row justify-between px-20 py-7 text-sm text-white">
      <Logo />
      <nav>
        <ul tw="w-96 flex flex-row justify-between my-auto mx-0">
          {navItems.map((item, ind) => (
            <li
              key={ind}
              css={ind === page ? active : linkItem}
              tw="hover:cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <Button
          variant="round-outline"
          tw="bg-transparent text-white border-white hocus:(text-gold border-gold) mr-4"
          isSmall={true}
          css={css`
            transition: color 0.3s, background-color 0.3s, border-color 0.3s;
          `}
        >
          Login
        </Button>
        <Button
          variant="round-fill"
          tw="bg-white text-black border-white hocus:(bg-gold border-gold)"
          isSmall={true}
          css={css`
            transition: color 0.3s, background-color 0.3s;
          `}
        >
          Register
        </Button>
      </div>
    </header>
  )
}

export default Navbar
