import { ThreeDots } from 'react-loader-spinner';
import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.container}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
