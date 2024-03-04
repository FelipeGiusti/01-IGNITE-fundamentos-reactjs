import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/felipegiusti.png" />
          <div className={styles.authorInfo}>
            <strong>Felipe Giusti</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='01 de Março ás 17:39h' dateTime='2024-03-01 17:39:49'>Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia eos cumque labore dolores nam nihil, sint repellendus. Doloremque, vitae voluptatem in hic culpa ad quas consectetur exercitationem animi tempore.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis commodi debitis sapiente, blanditiis unde accusantium, asperiores veritatis quisquam dolor cumque perferendis, dolores inventore ipsa nisi. Error fuga accusantium blanditiis magnam?</p>
        <p><a href="https://github.com/felipegiusti">Link para o meu github</a></p>
        <p><a>#teste #projeto #felipegiusti</a></p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  )
}