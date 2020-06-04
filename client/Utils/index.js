import checkPropTypes from "check-prop-types";


export const checkProps = (component, expected) => {
  const propsError = checkPropTypes(
    component.propTypes,
    expected,
    "props",
    component.name
  );
  return propsError
};
