import PropTypes from "prop-types";

export function Container({ title, children }) {
  return (
    <section className="flex flex-col gap-4">
      <h1>{title}</h1>
      {children}
    </section>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
