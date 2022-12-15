const IssuesSymbol = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="url(#a)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"
      fill="url(#b)"
    />
    <defs>
      <linearGradient
        id="a"
        x1="8"
        y1="6.5"
        x2="8"
        y2="9.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00BCF7" />
        <stop offset=".729" stopColor="#326CE5" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="8"
        y1="0"
        x2="8"
        y2="16"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00BCF7" />
        <stop offset=".729" stopColor="#326CE5" />
      </linearGradient>
    </defs>
  </svg>
)
export default IssuesSymbol
