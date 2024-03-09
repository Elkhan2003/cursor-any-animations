import { FC } from 'react';
import scss from './Layout.module.scss';
import Header from './header/Header';
import Footer from './footer/Footer';
import useScript_V2 from '../ui/cursorBg/useScript_V2';

interface LayoutProps {
	// eslint-disable-next-line
	url?: any;
}

const Layout: FC<LayoutProps> = ({ url }) => {
	useScript_V2(url);

	return (
		<>
			<canvas className={scss.canvas} id="canvas" />
			<div className={scss.Layout}>
				<Header />
				<main>main</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
