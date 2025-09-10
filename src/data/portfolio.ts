import type { PortfolioProject } from './types';

export const portfolioProjects: PortfolioProject[] = [
    {
        id: 1,
        title: "СОВРЕМЕННАЯ КВАРТИРА",
        category: "ЖИЛОЙ ИНТЕРЬЕР",
        area: "85 М²",
        image: "portfolio/project-1/1-1.jpg",
        year: "2024",
        description: "Современная квартира в стиле минимализм с акцентом на функциональность и эстетику",
        tags: ["минимализм", "современный стиль", "функциональность"],
        featured: true,
        gallery: [
            "portfolio/project-1/1-1.jpg",
            "portfolio/project-1/1-2.jpg",
            "portfolio/project-1/1-3.jpg"
        ]
    },
    {
        id: 2,
        title: "СПАЛЬНЯ",
        category: "ЖИЛОЙ ИНТЕРЬЕР",
        area: "20 М²",
        image: "portfolio/project-2/spalnya-120-1.jpg",
        year: "2025",
        description: "Современная спальня в стиле минимализм с акцентом на функциональность и эстетику",
        tags: ["минимализм", "современный стиль", "функциональность"],
        featured: true,
        gallery: [
            "portfolio/project-2/spalnya-120-1.jpg",
            "portfolio/project-2/spalnya-120-2.jpg",
            "portfolio/project-2/spalnya-120-3.jpg"
        ]
    },
];

// Функции для работы с портфолио
export const getFeaturedProjects = (): PortfolioProject[] => {
    return portfolioProjects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): PortfolioProject[] => {
    return portfolioProjects.filter(project => project.category === category);
};

export const getProjectById = (id: number): PortfolioProject | undefined => {
    return portfolioProjects.find(project => project.id === id);
};

export const getCategories = () => {
    const categories = [...new Set(portfolioProjects.map(project => project.category))];
    return categories.map(category => ({
        name: category,
        count: portfolioProjects.filter(project => project.category === category).length
    }));
};
