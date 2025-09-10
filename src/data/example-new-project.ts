// Пример добавления нового проекта в портфолио
// Скопируйте этот код в src/data/portfolio.ts и измените данные

export const exampleNewProject = {
    id: 7, // Увеличьте ID на 1 от последнего проекта
    title: "ЛЮКСОВАЯ ПЕНТХАУС",
    category: "ЖИЛОЙ ИНТЕРЬЕР" as const,
    area: "180 М²",
    image: "/portfolio/project-7/main.jpg", // Путь к изображению в public/portfolio/
    year: "2024",
    description: "Роскошный пентхаус с панорамными окнами и террасой",
    tags: ["люкс", "пентхаус", "панорамные окна", "терраса"],
    gallery: [
        "/portfolio/project-7/gallery-1.jpg",
        "/portfolio/project-7/gallery-2.jpg",
        "/portfolio/project-7/gallery-3.jpg"
    ],
    featured: true // Показывать в избранном
};

// Инструкция:
// 1. Скопируйте объект выше
// 2. Вставьте в массив portfolioProjects в файле portfolio.ts
// 3. Измените данные под ваш проект
// 4. Добавьте изображения в папку public/portfolio/project-7/
// 5. Сохраните файл - сайт обновится автоматически!
