import PropTypes from "prop-types";
import classNames from "classnames";

export function Container({ title, children, full = false }) {
  return (
    <section className={classNames("flex flex-col gap-4", { "w-full": full })}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  full: PropTypes.bool,
};
