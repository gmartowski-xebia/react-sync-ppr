import styles from "./ssg.module.css";

export const dynamic = "force-static";

export default function SSGPage() {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-blue-50 py-16 ${styles.fadeIn}`}>
      <span className={styles.badge}>Statyczna treść (SSG)</span>
      <h2 className="text-3xl font-bold mb-4 text-blue-700">SSG (Static Site Generation)</h2>
      <p className="mb-4 text-lg text-blue-900">Ta strona została wygenerowana statycznie podczas budowania aplikacji.</p>
      <p className="text-blue-800">Aktualny czas (build time): <b>{new Date().toLocaleString()}</b></p>
    </div>
  );
}
