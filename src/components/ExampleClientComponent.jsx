'use client';

import { useTranslation } from 'react-i18next';

 function ExampleClientComponent() {
  const { t } = useTranslation('common');

  return <h3>{t('welcome')}</h3>;
}

export default ExampleClientComponent;