import PropTypes from "prop-types";

export function Card({ children }) {
  return <div className="p-4 rounded shadow-card">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
