import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://images.tcdn.com.br/img/img_prod/460977/carro_miniatura_metal_die_cast_batmovel_o_cavaleiro_das_trevas_dc_comics_escala_1_18_mkp_135999_1_57ab53d7ebed10ff6e89512f7e4c8474.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
