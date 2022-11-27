import React, { useState } from 'react'
import styles from './index.module.scss'

const SearchInput = () => {
  const [value, setValue] = useState<string>('')

  return <input className={styles.searchInput} onChange={(e) => setValue(e.target.value)} value={value} />
}

export default SearchInput
