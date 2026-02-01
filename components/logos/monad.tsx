const MonadMark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

export default MonadMark;
