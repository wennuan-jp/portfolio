// components/Footer.tsx
import { useTranslation } from 'next-i18next';

export default function Footer() {
    const { t } = useTranslation('common');

    return (
        <footer className="py-20 border-t border-white/5 bg-[#0a0a0c]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                    <div className="space-y-6">
                        <div className="text-xl font-bold tracking-tight">
                            <span className="text-white">Portfolio</span>
                            <span className="text-blue-500">.</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            {t('footer.description')}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white">{t('footer.contact')}</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">📧</span>
                                <span>email@example.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">📍</span>
                                <span>Tokyo, Japan</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white">{t('footer.social')}</h3>
                        <div className="flex gap-6">
                            {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
                                <a 
                                    key={platform}
                                    href="#" 
                                    className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
                                >
                                    {platform}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} {t('footer.copyright')}
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
