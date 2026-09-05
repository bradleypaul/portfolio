import { coreStack, alsoStack, type StackItem } from '@/data/content'
import styles from './Stack.module.css'

function StackGrid({ items }: { items: StackItem[] }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div
          key={item.name}
          className={
            item.primary ? `${styles.item} ${styles.primary}` : styles.item
          }
        >
          <span className={styles.itemName}>{item.name}</span>
          <span className={styles.itemType}>{item.type}</span>
        </div>
      ))}
    </div>
  )
}

export function StackView() {
  return (
    <div className={styles.page}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Core stack</h2>
        <span className={styles.mono}>what I reach for first</span>
      </div>
      <StackGrid items={coreStack} />

      <div className={styles.sectionHeader} style={{ marginTop: '3rem' }}>
        <h2 className={styles.sectionTitle}>Also worked with</h2>
        <span className={styles.mono}>not strangers</span>
      </div>
      <StackGrid items={alsoStack} />
    </div>
  )
}
