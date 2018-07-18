import cssProps from "./cssProps";

interface IUnknownProps {
  [key: string]: any
}

const pickCssProps = (props: IUnknownProps) =>
  Object.keys(props).reduce((finalObject: {}, key) => {
    if (key in cssProps) {
      return { ...finalObject, [key]: props[key] };
    }
    return finalObject;
  }, "");

export default pickCssProps;
