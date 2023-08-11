import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <section className="page-not-found">
      <h2 className="page-not-found__title">404</h2>
      <p className="page-not-found__subtitle">Страница не найдена</p>
      <button className="page-not-found__exit" onClick={goBack}>
        Назад
      </button>
    </section>
  );
}

export default NotFoundPage;
