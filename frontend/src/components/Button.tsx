/**
 * Button Component
 *
 * A reusable button component that accepts dynamic text (`children`), an optional color for custom styling,
 * and an `onClick` event handler that is triggered when the button is clicked.
 *
 * @component
 *
 * @example
 * // Usage example:
 * <Button color="blue" onClick={handleClick}>Click Me</Button>
 *
 * @param {Object} props - The properties for the Button component.
 * @param {string} props.children - The text that will be displayed on the button.
 * @param {string} [props.color] - Optional prop for specifying a custom color for the button. If not provided, default styling will be used.
 * @param {function} props.onClick - The function to be executed when the button is clicked.
 *
 * @returns {JSX.Element} The rendered button component.
 */
interface ButtonProps {
  /**
   * The text content that will be displayed inside the button.
   *
   * @type {string}
   */
  children: string;

  /**
   * An optional color to override the default button style.
   *
   * @type {string}
   * @default "#080821"
   */
  color?: string;

  /**
   * The function that will be executed when the button is clicked.
   *
   * @type {function}
   */
  onClick: () => void;
}

/**
 * Button component that displays a styled button with customizable text and behavior.
 *
 * @param {ButtonProps} props - The props object for the button, including the button's text, color, and click handler.
 *
 * @returns {JSX.Element} The rendered button element.
 */
const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-[#080821] hover:bg-transparent text-[#FFFFFF] font-semibold hover:text-[#FFFFFF] py-2 px-4 border hover:border-transparent rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
