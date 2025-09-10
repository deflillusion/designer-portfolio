import type { PortfolioProject } from './types';

export const portfolioProjects: PortfolioProject[] = [
    {
        id: 1,
        title: "СОВРЕМЕННАЯ КВАРТИРА",
        category: "ЖИЛОЙ ИНТЕРЬЕР",
        area: "90 М²",
        image: "/portfolio/project-1/img487.jpg",
        year: "2024",
        description: "Современная квартира в стиле минимализм с акцентом на функциональность и эстетику",
        tags: ["минимализм", "современный стиль", "функциональность"],
        featured: true,
        gallery: [
            "/portfolio/project-1/img487.jpg",
            "/portfolio/project-1/img479.jpg",
            "/portfolio/project-1/img493.jpg",
            "/portfolio/project-1/img500.jpg",
            "/portfolio/project-1/img506.jpg",
            "/portfolio/project-1/img512.jpg",
            "/portfolio/project-1/img518.jpg"
        ]
    },
    {
        id: 2,
        title: "СОВРЕМЕННАЯ КВАРТИРА",
        category: "ЖИЛОЙ ИНТЕРЬЕР",
        area: "120 М²",
        image: "/portfolio/project-2/img500 (1).jpg",
        year: "2025",
        description: "Современная квартира с акцентом неоклассики",
        tags: ["неоклассика", "современный стиль", "функциональность"],
        featured: true,
        gallery: [
            "/portfolio/project-2/img500 (1).jpg",
            "/portfolio/project-2/img490.jpg",
            "/portfolio/project-2/img509.jpg",
            "/portfolio/project-2/img517.jpg",
            "/portfolio/project-2/img525.jpg",
            "/portfolio/project-2/img533.jpg",
            "/portfolio/project-2/img541.jpg",
            "/portfolio/project-2/img549.jpg"
        ]
    },
    {
        id: 3,
        title: "СОВРЕМЕННАЯ КВАРТИРА ЖК Асылым прайм",
        category: "ЖИЛОЙ ИНТЕРЬЕР",
        area: "85 М²",
        image: "/portfolio/project-3/Асылым прайм_page-0005.jpg",
        year: "2025",
        description: "Современная квартира в стиле минимализм с акцентом на функциональность и эстетику",
        tags: ["минимализм", "современный стиль", "функциональность"],
        featured: true,
        gallery: [
            "/portfolio/project-3/Асылым прайм_page-0005.jpg",
            "/portfolio/project-3/Асылым прайм_page-0002.jpg",
            "/portfolio/project-3/Асылым прайм_page-0003.jpg",
            "/portfolio/project-3/Асылым прайм_page-0004.jpg",
            "/portfolio/project-3/Асылым прайм_page-0006.jpg",
            "/portfolio/project-3/Асылым прайм_page-0007.jpg",
            "/portfolio/project-3/Асылым прайм_page-0008.jpg",
            "/portfolio/project-3/Асылым прайм_page-0009.jpg"
        ]
    },
    {
        id: 4,
        title: "СОВРЕМЕННАЯ КВАРТИРА ЖК ЭкоПарк",
        category: "ЖИЛОЙ ИНТЕРЬЕР",
        area: "68 М²",
        image: "/portfolio/project-4/ЖК ЭкоПарк_page-0003.jpg",
        year: "2025",
        description: "Современная квартира в стиле минимализм с акцентом на функциональность и эстетику",
        tags: ["минимализм", "современный стиль", "функциональность"],
        featured: true,
        gallery: [
            "/portfolio/project-4/ЖК ЭкоПарк_page-0003.jpg",
            "/portfolio/project-4/ЖК ЭкоПарк_page-0001.jpg",
            "/portfolio/project-4/ЖК ЭкоПарк_page-0002.jpg",
            "/portfolio/project-4/ЖК ЭкоПарк_page-0004.jpg",
            "/portfolio/project-4/ЖК ЭкоПарк_page-0005.jpg",
            "/portfolio/project-4/ЖК ЭкоПарк_page-0006.jpg"
        ]
    }
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
