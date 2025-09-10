export interface PortfolioProject {
    id: number;
    title: string;
    category: 'ЖИЛОЙ ИНТЕРЬЕР' | 'КОММЕРЧЕСКИЙ' | 'ОБЩЕСТВЕННЫЙ';
    area: string;
    image: string;
    year: string;
    description?: string;
    tags?: string[];
    gallery?: string[];
    featured?: boolean;
}

export interface PortfolioCategory {
    name: string;
    count: number;
}
