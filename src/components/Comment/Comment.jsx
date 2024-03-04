import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/felipegiusti.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Giusti</strong>
              <time title='04 de Março ás 10:48h' dateTime='2024-03-04 10:48:50'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'><Trash size={24} /></button>
          </header>
          <p>Conteudo do comentário</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}