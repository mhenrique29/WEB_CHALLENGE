import Link from 'next/link';

import styles from './styles.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
			<div className={styles.divFooter}>
				<div className={styles.menuFooter}>
					<ul>
						<li>
							<Link href="/">HOME</Link>
						</li>
						<li>
							<Link href="/guincho">GUINCHO</Link>
						</li>
						<li>
							<Link href="/equipe">EQUIPE</Link>
						</li>
					</ul>
				</div>
				<div className={styles.tituloFooter}>
					<h3>
						<Link href="#">
							TECH SPLINTER
						</Link>
					</h3>
				</div>
			</div>
		</footer>
    )
}