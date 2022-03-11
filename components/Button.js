import tw, { styled, css, theme } from 'twin.macro'

const Button = styled.button(({ variant, isSmall }) => [
  // The common button styles added with the tw import
  tw`px-4 py-1 rounded focus:outline-none transform duration-75`,

  // Use the variant grouping feature to add variants to multiple classes
  // tw`hocus:(scale-105)`,

  // Use props to conditionally style your components
  variant === 'primary' && tw`bg-black text-white border-black`,

  // Combine regular css with tailwind classes within backticks
  variant === 'secondary' && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`border-2 border-yellow-600 rounded-3xl`,
  ],

  //Outline
  variant === 'outline' && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
      width: 154px;
    `,
    tw`border rounded py-3 px-4 text-gold border-gold`,
  ],

  //Fill
  variant === 'fill' && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
      width: 154px;
    `,
    tw`border rounded py-3 px-4 bg-gold border-gold text-white`,
  ],

  //Round Outline
  variant === 'round-outline' && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`border rounded-3xl`,
  ],

  //Round Fill
  variant === 'round-fill' && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`border rounded-3xl`,
  ],

  // Conditional props can be used
  isSmall ? tw`text-sm` : tw`text-lg`,

  // The theme import can supply values from your tailwind.config.js
  css`
    // color: ${theme`colors.white`};
  `,
])


export default Button
