import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Id: {props.id}</p>
      <p>Section: {props.section}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  section: PropTypes.number,
};

// Student.defaultProps = {
//   name: "Guest",
// };
// default props is outdated now use this
// function Student({ name = "Guest", section = 1, id = "N/A" }) {
//   return (
//     <div className="student">
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//       <p>Id: {id}</p>
//       <p>Section: {section}</p>
//     </div>
//   );
// }

export default Student;
