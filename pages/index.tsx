// pages/index.tsx
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    const { t } = useTranslation('common');

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.replace('#', '');
        if (targetId) {
            const element = document.getElementById(targetId);
            element?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div className="relative flex flex-col min-h-screen overflow-hidden selection:bg-blue-500/30">
            {/* Background Decorations */}
            <div className="glow-bg top-[-10%] left-[-10%]" />
            <div className="glow-bg bottom-[-10%] right-[-10%] opacity-20" />

            <Header />

            <main className="flex-grow">
                {/* About Me Section */}
                <section className="pt-24 pb-24 px-6 relative">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                            <div className="md:col-span-4 flex justify-center">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                                        <img
                                            src="/profile.png"
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-8 space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                        {t('about.title')}
                                    </h2>
                                    <p className="text-lg text-gray-400 leading-relaxed">
                                        {t('about.description')}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                            <span className="text-blue-500">🚀</span> {t('about.future')}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {t('about.future_desc')}
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                            <span className="text-blue-500">🎨</span> {t('about.interests')}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {Object.values(t('about.interests_list', { returnObjects: true })).map((interest: any, i: number) => (
                                                <span key={i} className="px-3 py-1 rounded-full glass border-white/5 text-xs text-gray-400">
                                                    {interest}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hero Section */}
                <section className="relative py-24 px-6 overflow-hidden hero-section border-t border-white/5">
                    <div className="max-w-6xl mx-auto text-center space-y-10">
                        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1] fade-in delay-1">
                            {t('hero.title').split(' ').map((word: string, i: number) => (
                                <span key={i} className={i === 2 ? 'text-gradient' : 'text-white'}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed fade-in delay-2">
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6 fade-in delay-3 no-print">
                            <a
                                href="#projects"
                                onClick={handleScroll}
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-600/20 hover:scale-105 flex items-center justify-center"
                            >
                                {t('hero.button')}
                            </a>
                            <button className="px-8 py-4 glass text-white font-bold rounded-full transition-all hover:bg-white/10">
                                {t('hero.button2')}
                            </button>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="py-24 px-6 relative">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                    {t('skills.title')}
                                </h2>
                                <p className="text-gray-400 max-w-md">
                                    {t('skills.subtitle')}
                                </p>
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest text-blue-500 pb-2">
                                / Expertise
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: t('skills.go'), icon: '🛠️', color: 'blue' },
                                { title: t('skills.react'), icon: '⚛️', color: 'cyan' },
                                { title: t('skills.flutter'), icon: '📱', color: 'indigo' },
                            ].map((skill, index) => (
                                <div
                                    key={index}
                                    className="group relative glass p-8 rounded-3xl transition-all duration-500 hover:translate-y-[-8px] hover:border-blue-500/50"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                                    <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{skill.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                        {skill.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                                        {t(`skills.description.${index}`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-24 px-6 bg-white/5 backdrop-blur-sm border-y border-white/5">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                {t('projects.title')}
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                {t('projects.subtitle')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: t('projects.project1.title'),
                                    description: t('projects.project1.description'),
                                    tag: 'Open Source'
                                },
                                {
                                    title: t('projects.project2.title'),
                                    description: t('projects.project2.description'),
                                    tag: 'Full Stack'
                                },
                            ].map((project, index) => (
                                <div
                                    key={index}
                                    className="group glass overflow-hidden rounded-3xl flex flex-col h-full border border-white/5 hover:border-white/20 transition-all duration-500"
                                >
                                    <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute top-6 left-6 px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-white/60">
                                            {project.tag}
                                        </div>
                                    </div>
                                    <div className="p-8 space-y-4 flex-grow">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="pt-4">
                                            <button className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-2 transition-transform">
                                                {t('projects.readMore')}
                                                <span className="text-blue-500">→</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

// Server-side translation
export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}
