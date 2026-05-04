// components/Header.tsx
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Header() {
    const { t } = useTranslation('common');

    return (
        <header className="sticky top-0 z-50 glass border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
                    <span className="text-white">Portfolio</span>
                    <span className="text-blue-500">.</span>
                </Link>

                <nav className="hidden md:flex space-x-10">
                    <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        {t('header.home')}
                    </Link>
                    <Link href="#projects" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        {t('header.projects')}
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        {t('header.contact')}
                    </Link>
                </nav>

                <div className="flex items-center space-x-6">
                    <div className="flex space-x-3 text-xs font-bold uppercase tracking-widest">
                        <Link href="/en" className="text-gray-400 hover:text-blue-500 transition-colors">
                            EN
                        </Link>
                        <span className="text-gray-700">/</span>
                        <Link href="/ja" className="text-gray-400 hover:text-blue-500 transition-colors">
                            JA
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
