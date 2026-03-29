import { SiteLayout } from './components/layout/SiteLayout';
import { usePortfolioRouter } from './hooks/usePortfolioRouter';
import { AboutPage } from './pages/AboutPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { UsesPage } from './pages/UsesPage';

function App() {
  const { path, activeArticle, activeProject } = usePortfolioRouter();

  const renderPage = () => {
    if (activeArticle) return <ArticleDetailPage item={activeArticle} />;
    if (activeProject) return <ProjectDetailPage item={activeProject} />;

    switch (path) {
      case '/articles/':
        return <ArticlesPage />;
      case '/projects/':
        return <ProjectsPage />;
      case '/uses/':
        return <UsesPage />;
      case '/':
        return <AboutPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return <SiteLayout path={path}>{renderPage()}</SiteLayout>;
}

export default App;
