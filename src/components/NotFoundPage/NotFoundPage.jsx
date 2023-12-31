import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <main className="page-not-found">
      <section className="page-not-found__section">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__subtitle">Страница не найдена</p>
        <button className="page-not-found__exit" type="button" onClick={goBack}>
          Назад
        </button>
      </section>
    </main>
  );
}

export default NotFoundPage;
