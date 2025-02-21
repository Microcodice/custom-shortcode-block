export default function save({ attributes }) {
  const {
    shortcode,
    backgroundColor,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  } = attributes;

  const padding = `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`;
  const margin = `${marginTop} ${marginRight} ${marginBottom} ${marginLeft}`;

  return (
    <div style={{ backgroundColor, padding, margin }}>
      <div dangerouslySetInnerHTML={{ __html: shortcode }} />
    </div>
  );
}