import { useEffect } from "react";
import { useRouter } from "next/router";

export const useScrollRestoration = () => {
  const router = useRouter();

  // Сохранение позиции прокрутки перед уходом со страницы
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    // Сохраняем позицию при закрытии или изменении маршрута
    window.addEventListener("beforeunload", saveScrollPosition);
    router.events.on("routeChangeStart", saveScrollPosition);

    // Очистка при размонтировании компонента
    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
      router.events.off("routeChangeStart", saveScrollPosition);
    };
  }, [router]);

  // Восстановление позиции прокрутки после загрузки страницы
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");

    if (scrollPosition !== null) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      sessionStorage.removeItem("scrollPosition"); // Удаляем значение после восстановления
    }
  }, []);

  return null;
};
