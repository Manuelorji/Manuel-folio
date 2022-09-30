import LoaderIcon from "./loader.svg";

const Loader = () => {
  return (
    <div className="loader-ctn">
      <img className="loader" src={LoaderIcon} alt="loader" />
    </div>
  );
};

export default Loader;
