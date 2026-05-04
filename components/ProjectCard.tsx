// components/ProjectCard.tsx
import { useTranslation } from 'next-i18next';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
}

export default function ProjectCard({ title, description, technologies }: ProjectCardProps) {
    const { t } = useTranslation('common');

    return (
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
