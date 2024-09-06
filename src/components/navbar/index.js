import styles from './styles.module.scss';
import { LinkComponent } from './styled';

function NavBar() {
  return (
    <>
      <div className={styles.nav}>
        <LinkComponent to={"/"}>Home</LinkComponent>
        <LinkComponent to={"/calculator"}>Calculadora</LinkComponent>
        <LinkComponent to={"/list"}>Lista</LinkComponent>
        <LinkComponent to={"/counter"}>Contador</LinkComponent>
      </div>
    </>
  );
}

export default NavBar