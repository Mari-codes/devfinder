const ConditionalLink = ({ condition, href, children, className }) => {
  if (!condition) {
    return <span className={className}>Not Available</span>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

export default ConditionalLink;
