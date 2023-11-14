import Link from 'next/link';

import styles from './styles.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
			<nav>
				<ul>
					<li>
						<Link href='/'>HOME</Link>
					</li>
					<li>
						<Link href="/guincho">GUINCHO</Link>
					</li>
					<li>
						<Link href="/equipe">EQUIPE</Link>
					</li>
				</ul>
			</nav>
		</header>
    )
}