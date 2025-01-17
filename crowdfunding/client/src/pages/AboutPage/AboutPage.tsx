import { FC } from 'react';
import { PageLayout } from '../../components/PageLayout/PageLayout';

export const AboutPage: FC = () => (
  <PageLayout>
    <div className="w-1/2">
      StudyChain представляє собою децентралізовану краудфандингову платформу, що заснована на технології блокчейн Ethereum та смарт-контрактах. Платформа надає можливість будь-якому користувачеві створювати кампанії для збору коштів на власні проекти або ідеї, а також донатити кошти на вже існуючі кампанії.
        <br />
        <br />
      Використовуючи передову технологію блокчейну, ми забезпечуємо прозорість та безпеку всіх фінансових операцій в межах платформи. Кожен внесок є публічним і може бути перевірений всіма учасниками мережі, що гарантує довіру і відкритість процесу збору коштів.
      Для того, щоб розпочати використовувати платформу, вам необхідно мати встановлений веб-браузер з підтримкою Metamask. Після створення Ethereum-гаманця ви зможете створювати власні кампанії або донатити на існуючі.
        <br />
        <br />
        Цей проект було розроблено студентом Харківського національного університету радіоелектроніки в рамках дипломної роботи з метою демонстрації потенціалу та можливостей, які надає технологія блокчейн та смарт-контракти Ethereum.
      {' '}
    </div>
  </PageLayout>
);
