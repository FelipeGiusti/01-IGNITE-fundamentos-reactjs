import { Header } from './components/Header/Header.jsx';
import { Sidebar } from './components/Sidebar/Sidebar.jsx';
import { Post } from './components/Post/Post.jsx';
import styles from './App.module.css'
import './global.css'

export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Felipe Giusti"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis illum sit! Quidem dicta temporibus, laboriosam eius culpa accusamus cum ab aspernatur tenetur voluptatibus quas id eaque corrupti, maxime vero!"
          />

          <Post
            author="Diego Fernandes"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis illum sit! Quidem dicta temporibus, laboriosam eius culpa accusamus cum ab aspernatur tenetur voluptatibus quas id eaque corrupti, maxime vero!"
          />
        </main>
      </div>
    </div>
  );
}