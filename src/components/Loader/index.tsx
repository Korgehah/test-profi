import LoaderIcon from '../../assets/images/loader.svg';

const Loader = () => {
  return (
    <div className='loader'>
      <img className='loader__icon' src={LoaderIcon} />
    </div>
  );
};
export { Loader };
