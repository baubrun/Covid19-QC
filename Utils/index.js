import checkPropTypes from "check-prop-types";


export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test="${attr}"]`);
  return wrapper;
};

export const checkProps = (component, expected) => {
  const propsError = checkPropTypes(
    component.propTypes,
    expected,
    "props",
    component.name
  );
  return propsError
};
